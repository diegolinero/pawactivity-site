#!/usr/bin/env bash
set -Eeuo pipefail

APP_DIR="/var/www/pawactivity"

cd "$APP_DIR"

echo "→ Rolling back..."

git reset --hard HEAD~1

pnpm install
pnpm build

pm2 restart all
pm2 save

echo "Rollback complete"
