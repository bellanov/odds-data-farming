#!/bin/bash
#
# Enable Minikube Addons.
#

# Metrics Server
# This addon is useful for monitoring resource usage in the cluster.
minikube addons enable metrics-server
