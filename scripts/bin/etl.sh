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
info "Executing ETL Process..."

# Execute the script to fetch sports data
scripts/bin/sports.sh

# Execute the script to fetch events data
scripts/bin/events.sh

# Execute the script to fetch event odds data
scripts/bin/eventOdds.sh

# Execute the script to fetch account data
scripts/bin/account.sh

# Log the completion of the ETL process
info "ETL Process Completed."
