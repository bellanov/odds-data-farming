#!/bin/bash
#
# Create Required ConfigMaps.
# ConfigMaps need to be present in the namespace where the jobs are executed.
#

# Create ConfigMaps for Events.

# Map to the odds-events NPM task
kubectl create configmap odds-events --from-env-file=k8s/config/.env.events -n events
