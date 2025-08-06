#!/bin/bash
#
# Create ConfigMap for odds data environments.

# odds-data-poc
# ConfigMaps need to be present in the namespace where the jobs are executed.
kubectl create configmap odds-data-poc --from-file=.env -n americanfootball-ncaaf
kubectl create configmap odds-data-poc --from-file=.env -n americanfootball-nfl
