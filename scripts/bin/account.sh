#!/bin/bash
#
# Extract sports data.


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
  echo "$(date +'%Y-%m-%dT%H:%M:%S%z') [ERROR]: $*" >&2
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
  echo "$(date +'%Y-%m-%dT%H:%M:%S%z') [INFO]: $*"
}

# Begin script execution
info "Starting account data extraction..."

# Execute the script to fetch sports data
if node scripts/extract/account.js; then
  info "Account data extraction script executed successfully"
else
  err "Failed to execute account data extraction script"
fi
