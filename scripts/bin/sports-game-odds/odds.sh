#!/bin/bash
#
# Extract odds data.


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
info "Starting odds data extraction..."

# Execute the script to fetch odds data
if node scripts/extract/sports-game-odds/odds.js; then
  info "Odds data extraction script executed successfully"
else
  err "Failed to execute odds data extraction script"
fi
