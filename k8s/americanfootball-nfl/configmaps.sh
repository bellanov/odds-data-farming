#!/bin/bash
#
# Create Required ConfigMaps.
# ConfigMaps need to be present in the namespace where the jobs are executed.
#

# Create ConfigMaps for NFL.

# H2H, MoneyLine, Spread
kubectl create configmap americanfootball-nfl-american --from-env-file=k8s/config/.env.nfl.american -n americanfootball-nfl
kubectl create configmap americanfootball-nfl-decimal --from-env-file=k8s/config/.env.nfl.decimal -n americanfootball-nfl

# Player / Team Properties
kubectl create configmap americanfootball-nfl-props-american --from-env-file=k8s/config/.env.nfl.american -n americanfootball-nfl
kubectl create configmap americanfootball-nfl-props-decimal --from-env-file=k8s/config/.env.nfl.decimal -n americanfootball-nfl
