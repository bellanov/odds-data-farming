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
info "Starting sports data extraction..."

# Execute the script to fetch sports data
node scripts/extract/the-odds-api/sports.js

# Check if the script executed successfully
if node scripts/extract/the-odds-api/sports.js; then
  info "Sports data extraction script executed successfully"
else
  err "Failed to execute sports data extraction script"
fi

# Log completion message
info "Sports data extraction completed successfully."
