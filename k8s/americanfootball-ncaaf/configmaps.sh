#!/bin/bash
#
# Create Required ConfigMaps.
# ConfigMaps need to be present in the namespace where the jobs are executed.
#

# Create ConfigMaps for NCAAF.

# H2H, MoneyLine, Spread
kubectl create configmap americanfootball-ncaaf-american --from-env-file=k8s/config/.env.ncaaf.american -n americanfootball-ncaaf
kubectl create configmap americanfootball-ncaaf-decimal --from-env-file=k8s/config/.env.ncaaf.decimal -n americanfootball-ncaaf

# Player / Team Properties
kubectl create configmap americanfootball-ncaaf-props-american --from-env-file=k8s/config/.env.ncaaf.player.american -n americanfootball-ncaaf
kubectl create configmap americanfootball-ncaaf-props-decimal --from-env-file=k8s/config/.env.ncaaf.player.decimal -n americanfootball-ncaaf
