#!/bin/bash
#
# Create Required ConfigMaps.
# ConfigMaps need to be present in the namespace where the jobs are executed.
#

# Create ConfigMaps for NCAAF.
kubectl create configmap americanfootball-ncaaf-american --from-env-file=k8s/config/.env.ncaaf.american -n americanfootball-ncaaf
kubectl create configmap americanfootball-ncaaf-decimal --from-env-file=k8s/config/.env.ncaaf.decimal -n americanfootball-ncaaf

# Create ConfigMaps for NFL.
kubectl create configmap americanfootball-nfl-american --from-env-file=k8s/config/.env.nfl.american -n americanfootball-nfl
kubectl create configmap americanfootball-nfl-decimal --from-env-file=k8s/config/.env.nfl.decimal -n americanfootball-nfl
