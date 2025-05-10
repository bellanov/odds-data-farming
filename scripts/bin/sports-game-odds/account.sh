#!/bin/bash
#
# Extract account data.


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
info "Starting account data extraction..."

# Execute the script to fetch account data
if node scripts/extract/sports-game-odds/account.js; then
  info "Account data extraction script executed successfully"
else
  error "Account data extraction script executed successfully"
fi

# Log completion message
info "Account data extraction completed successfully."
