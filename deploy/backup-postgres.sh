#!/usr/bin/env bash
set -Eeuo pipefail

DATE=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="/var/backups/pawactivity"
DB_NAME="pawactivity"

mkdir -p "$BACKUP_DIR"

echo "Backing up DB..."

pg_dump "$DB_NAME" | gzip > "$BACKUP_DIR/db_$DATE.sql.gz"

echo "Backup saved: $BACKUP_DIR/db_$DATE.sql.gz"
