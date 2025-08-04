#!/bin/bash
#
# Extract sport odds data.


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
info "Starting sport odds data extraction..."

# Execute the script to fetch events data
if node scripts/extract/sportOdds.js; then
  info "Sport odds data extraction script executed successfully"
else
  err "Failed to execute sport odds data extraction script"
fi
