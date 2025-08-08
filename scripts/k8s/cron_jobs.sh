#!/bin/bash
#
# View CronJobs.
# This script lists the CronJobs in the specified namespaces.
#

# Create ConfigMaps for NCAAF.
kubectl describe cronjobs -n americanfootball-ncaaf 

# Create ConfigMaps for NFL.
kubectl describe cronjobs -n americanfootball-nfl
