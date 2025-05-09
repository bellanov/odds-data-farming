#!/bin/bash
#
# Query Sports Data.

err() {
  echo "[$(date +'%Y-%m-%dT%H:%M:%S%z')]: $*" >&2
}

# Execute the script to fetch sports data
node scripts/extract/the-odds-api/sports.js

if [ $? -ne 0 ]; then
  err "Failed to execute sports data extraction script"
  exit 1
fi