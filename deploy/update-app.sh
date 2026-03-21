#!/usr/bin/env bash
set -Eeuo pipefail

APP_DIR="/var/www/pawactivity"

echo "=== Updating PawActivity ==="

cd "$APP_DIR"

echo "→ Pull latest code"
git pull origin main

echo "→ Install dependencies"
pnpm install --frozen-lockfile || pnpm install

echo "→ Build project"
pnpm build

echo "→ Restart PM2"
pm2 restart all

echo "→ Cleanup (optional)"
pm2 save

echo "=== Deploy complete ==="
