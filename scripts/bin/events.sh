#!/bin/bash
#
# Extract events data.


#######################################
# Display error message.
# Globals:
#   None
# Arguments:
#   None
# Outputs:
#   Writes log message to stderr
#######################################
err() {
  echo "[$(date +'%Y-%m-%dT%H:%M:%S%z')]: $*" >&2
  exit 1
}

#######################################
# Display log message.
# Globals:
#   None
# Arguments:
#   None
# Outputs:
#   Writes log message to stdout
#######################################
info() {
  echo "[$(date +'%Y-%m-%dT%H:%M:%S%z')]: $*"
}

# Begin script execution
info "Starting events data extraction..."

# Execute the script to fetch events data
if node scripts/extract/events.js; then
  info "Events data extraction script executed successfully"
else
  err "Failed to execute events data extraction script"
fi
