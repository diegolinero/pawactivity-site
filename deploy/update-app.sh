#!/usr/bin/env bash
set -Eeuo pipefail

APP_DIR="/var/www/pawactivity"
BRANCH="${1:-main}"

echo "=== PawActivity Deploy ==="
cd "$APP_DIR"

echo "→ Sync branch: $BRANCH"
git fetch origin
git checkout "$BRANCH"
git reset --hard "origin/$BRANCH"

echo "→ Install dependencies"
pnpm install --frozen-lockfile

echo "→ Generate Prisma client"
pnpm db:generate

echo "→ Build monorepo"
pnpm build

echo "→ Run production migrations"
pnpm db:migrate:deploy

echo "→ Restart PM2"
pm2 start ecosystem.config.js --update-env || pm2 restart all --update-env
pm2 save

echo "→ Local healthcheck"
bash deploy/healthcheck.sh

echo "=== Deploy OK ==="
