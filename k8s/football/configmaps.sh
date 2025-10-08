#!/bin/bash
#
# Create Required ConfigMaps.
# ConfigMaps need to be present in the namespace where the jobs are executed.
#

# Create ConfigMaps for football.

# H2H, MoneyLine, Spread
kubectl create configmap football-american --from-env-file=k8s/config/.env.football.american -n football
kubectl create configmap football-decimal --from-env-file=k8s/config/.env.football.decimal -n football

# Player / Team Properties
kubectl create configmap football-props-american --from-env-file=k8s/config/.env.football.props.american -n football
kubectl create configmap football-props-decimal --from-env-file=k8s/config/.env.football.props.decimal -n football
