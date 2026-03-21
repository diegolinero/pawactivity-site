#!/usr/bin/env bash
set -Eeuo pipefail

echo "=== Healthcheck PawActivity ==="

pm2 list

echo "→ Checking API"
curl -f http://localhost:4000/v1 || exit 1

echo "→ Checking WEB"
curl -f http://localhost:3000 || exit 1

echo "→ Memory"
free -h

echo "→ Ports"
ss -tulpn | grep -E '4000|3000|80|443'

echo "=== OK ==="
