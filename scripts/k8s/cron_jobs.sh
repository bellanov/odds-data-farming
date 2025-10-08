#!/bin/bash
#
# View CronJobs.
# This script lists the CronJobs in the specified namespaces.
#

# Create ConfigMaps for American Football.
kubectl describe cronjobs -n football
