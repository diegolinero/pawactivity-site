#!/usr/bin/env bash
set -Eeuo pipefail

# =========================
# PawActivity server bootstrap
# Ubuntu 24.04+
# Run as root on a CLEAN server
# =========================

APP_USER="${APP_USER:-paw}"
APP_HOME="/home/${APP_USER}"
APP_DIR="${APP_DIR:-/var/www/pawactivity}"
REPO_URL="${REPO_URL:-git@github.com:TU_ORG/TU_REPO.git}"
REPO_BRANCH="${REPO_BRANCH:-main}"

SSH_PORT="${SSH_PORT:-2222}"
SSH_PUB_KEY="${SSH_PUB_KEY:-}"   # pega aquí tu clave pública SSH o pásala por env

DOMAIN_API="${DOMAIN_API:-api.pawactivity.com}"
DOMAIN_WEB="${DOMAIN_WEB:-app.pawactivity.com}"

DB_NAME="${DB_NAME:-pawactivity}"
DB_USER="${DB_USER:-pawuser}"
DB_PASS="${DB_PASS:-CAMBIAR_PASSWORD_SEGURA}"

API_PORT="${API_PORT:-4000}"
WEB_PORT="${WEB_PORT:-3000}"

CREATE_SWAP_GB="${CREATE_SWAP_GB:-4}"
CERTBOT_EMAIL="${CERTBOT_EMAIL:-}"
ENABLE_CERTBOT="${ENABLE_CERTBOT:-false}"

NODE_MAJOR="${NODE_MAJOR:-20}"

log() {
  echo
  echo "==== $* ===="
}

require_root() {
  if [[ "${EUID}" -ne 0 ]]; then
    echo "Este script debe ejecutarse como root."
    exit 1
  fi
}

create_user() {
  if ! id -u "${APP_USER}" >/dev/null 2>&1; then
    log "Creando usuario ${APP_USER}"
    adduser --disabled-password --gecos "" "${APP_USER}"
    usermod -aG sudo "${APP_USER}"
  else
    log "Usuario ${APP_USER} ya existe"
  fi

  mkdir -p "${APP_HOME}/.ssh"
  chmod 700 "${APP_HOME}/.ssh"

  if [[ -n "${SSH_PUB_KEY}" ]]; then
    log "Instalando clave SSH para ${APP_USER}"
    echo "${SSH_PUB_KEY}" >> "${APP_HOME}/.ssh/authorized_keys"
    sort -u "${APP_HOME}/.ssh/authorized_keys" -o "${APP_HOME}/.ssh/authorized_keys"
    chmod 600 "${APP_HOME}/.ssh/authorized_keys"
    chown -R "${APP_USER}:${APP_USER}" "${APP_HOME}/.ssh"
  else
    echo "ADVERTENCIA: SSH_PUB_KEY vacío. No se deshabilitará PasswordAuthentication ni root login."
  fi
}

system_update() {
  log "Actualizando sistema"
  apt-get update
  DEBIAN_FRONTEND=noninteractive apt-get upgrade -y
}

install_base_packages() {
  log "Instalando paquetes base"
  apt-get install -y \
    ca-certificates curl gnupg lsb-release git unzip jq ufw fail2ban \
    nginx postgresql postgresql-contrib build-essential certbot python3-certbot-nginx
}

install_node() {
  if ! command -v node >/dev/null 2>&1; then
    log "Instalando Node.js ${NODE_MAJOR}"
    curl -fsSL "https://deb.nodesource.com/setup_${NODE_MAJOR}.x" | bash -
    apt-get install -y nodejs
  fi

  log "Instalando pnpm y pm2"
  npm install -g pnpm pm2
}

configure_swap() {
  if swapon --show | grep -q '/swapfile'; then
    log "Swap ya existe"
    return
  fi

  log "Creando swap de ${CREATE_SWAP_GB}G"
  fallocate -l "${CREATE_SWAP_GB}G" /swapfile
  chmod 600 /swapfile
  mkswap /swapfile
  swapon /swapfile

  if ! grep -q '^/swapfile ' /etc/fstab; then
    echo '/swapfile none swap sw 0 0' >> /etc/fstab
  fi

  mkdir -p /etc/sysctl.d
  echo 'vm.swappiness=10' > /etc/sysctl.d/99-swappiness.conf
  sysctl -p /etc/sysctl.d/99-swappiness.conf
}

configure_ssh() {
  log "Configurando SSH"
  cp /etc/ssh/sshd_config "/etc/ssh/sshd_config.bak.$(date +%F-%H%M%S)"

  sed -i "s/^#\?Port .*/Port ${SSH_PORT}/" /etc/ssh/sshd_config

  if [[ -n "${SSH_PUB_KEY}" ]]; then
    sed -i 's/^#\?PermitRootLogin .*/PermitRootLogin no/' /etc/ssh/sshd_config
    sed -i 's/^#\?PasswordAuthentication .*/PasswordAuthentication no/' /etc/ssh/sshd_config
    sed -i 's/^#\?PubkeyAuthentication .*/PubkeyAuthentication yes/' /etc/ssh/sshd_config
  fi

  sshd -t
  systemctl restart ssh
}

configure_firewall() {
  log "Configurando UFW"
  ufw allow "${SSH_PORT}/tcp"
  ufw allow 80/tcp
  ufw allow 443/tcp
  ufw --force enable
}

configure_fail2ban() {
  log "Configurando fail2ban"
  cat >/etc/fail2ban/jail.local <<EOF
[sshd]
enabled = true
port = ${SSH_PORT}
logpath = %(sshd_log)s
backend = systemd
maxretry = 5
findtime = 10m
bantime = 1h
EOF

  systemctl enable fail2ban
  systemctl restart fail2ban
}

configure_postgres() {
  log "Configurando PostgreSQL"

  sudo -u postgres psql <<EOF
DO \$\$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = '${DB_USER}') THEN
      CREATE ROLE ${DB_USER} LOGIN PASSWORD '${DB_PASS}';
   END IF;
END
\$\$;

DO \$\$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_database WHERE datname = '${DB_NAME}') THEN
      CREATE DATABASE ${DB_NAME} OWNER ${DB_USER};
   END IF;
END
\$\$;
EOF
}

prepare_app_dir() {
  log "Preparando directorio de aplicación"
  mkdir -p "$(dirname "${APP_DIR}")"
  chown -R "${APP_USER}:${APP_USER}" "$(dirname "${APP_DIR}")"

  if [[ ! -d "${APP_DIR}/.git" ]]; then
    sudo -u "${APP_USER}" git clone --branch "${REPO_BRANCH}" "${REPO_URL}" "${APP_DIR}"
  else
    log "Repo ya existe, actualizando"
    sudo -u "${APP_USER}" bash -lc "cd '${APP_DIR}' && git fetch --all && git checkout '${REPO_BRANCH}' && git pull --ff-only origin '${REPO_BRANCH}'"
  fi
}

write_env_file() {
  log "Escribiendo .env.production de ejemplo"
  cat >"${APP_DIR}/.env.production" <<EOF
NODE_ENV=production

DATABASE_URL=postgresql://${DB_USER}:${DB_PASS}@127.0.0.1:5432/${DB_NAME}

API_PORT=${API_PORT}
PORT=${WEB_PORT}

API_DOMAIN=${DOMAIN_API}
WEB_DOMAIN=${DOMAIN_WEB}
EOF
  chown "${APP_USER}:${APP_USER}" "${APP_DIR}/.env.production"
  chmod 600 "${APP_DIR}/.env.production"
}

install_and_build_app() {
  log "Instalando dependencias y construyendo app"
  sudo -u "${APP_USER}" bash -lc "
    cd '${APP_DIR}'
    pnpm install --frozen-lockfile || pnpm install
    pnpm build
  "
}

write_pm2_ecosystem() {
  log "Escribiendo ecosystem.config.js"
  cat >"${APP_DIR}/ecosystem.config.js" <<EOF
module.exports = {
  apps: [
    {
      name: 'pawactivity-api',
      cwd: '${APP_DIR}',
      script: 'apps/api/dist/main.js',
      interpreter: 'node',
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
        PORT: '${API_PORT}'
      }
    },
    {
      name: 'pawactivity-web',
      cwd: '${APP_DIR}/apps/web',
      script: 'pnpm',
      args: 'start',
      interpreter: 'none',
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
        PORT: '${WEB_PORT}'
      }
    }
  ]
};
EOF
  chown "${APP_USER}:${APP_USER}" "${APP_DIR}/ecosystem.config.js"
}

start_pm2() {
  log "Iniciando PM2"
  sudo -u "${APP_USER}" bash -lc "
    cd '${APP_DIR}'
    pm2 delete all || true
    pm2 start ecosystem.config.js
    pm2 save
  "

  env PATH="$PATH:/usr/bin" pm2 startup systemd -u "${APP_USER}" --hp "${APP_HOME}" | tail -n 1 | bash
  systemctl enable "pm2-${APP_USER}"
  systemctl restart "pm2-${APP_USER}"

  sudo -u "${APP_USER}" pm2 install pm2-logrotate || true
}

write_nginx_config() {
  log "Escribiendo configuración Nginx"
  cat >/etc/nginx/sites-available/pawactivity <<EOF
server {
    listen 80;
    server_name ${DOMAIN_API};

    location / {
        proxy_pass http://127.0.0.1:${API_PORT};
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_set_header X-Real-IP \$remote_addr;
    }
}

server {
    listen 80;
    server_name ${DOMAIN_WEB};

    location / {
        proxy_pass http://127.0.0.1:${WEB_PORT};
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_set_header X-Real-IP \$remote_addr;
    }
}
EOF

  ln -sf /etc/nginx/sites-available/pawactivity /etc/nginx/sites-enabled/pawactivity
  rm -f /etc/nginx/sites-enabled/default
  nginx -t
  systemctl enable nginx
  systemctl restart nginx
}

run_certbot() {
  if [[ "${ENABLE_CERTBOT}" != "true" ]]; then
    log "Certbot omitido"
    return
  fi

  if [[ -z "${CERTBOT_EMAIL}" ]]; then
    echo "ENABLE_CERTBOT=true pero CERTBOT_EMAIL está vacío"
    exit 1
  fi

  log "Ejecutando certbot"
  certbot --nginx --non-interactive --agree-tos \
    -m "${CERTBOT_EMAIL}" \
    -d "${DOMAIN_API}" \
    -d "${DOMAIN_WEB}" \
    --redirect
}

final_checks() {
  log "Verificaciones finales"
  free -h || true
  swapon --show || true
  ss -tulpn | grep -E ":${SSH_PORT}|:80|:443|:${API_PORT}|:${WEB_PORT}" || true
  sudo -u "${APP_USER}" pm2 list || true
  systemctl status fail2ban --no-pager || true
}

main() {
  require_root
  create_user
  system_update
  install_base_packages
  install_node
  configure_swap
  configure_ssh
  configure_firewall
  configure_fail2ban
  configure_postgres
  prepare_app_dir
  write_env_file
  install_and_build_app
  write_pm2_ecosystem
  start_pm2
  write_nginx_config
  run_certbot
  final_checks

  echo
  echo "Bootstrap terminado."
  echo "Prueba acceso SSH nuevo: ssh -p ${SSH_PORT} ${APP_USER}@<IP>"
}

main "$@"
