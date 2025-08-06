#!/bin/bash
#
# Delete a Minikube Cluster.
#

# Cluster Configuration
CLUSTER_NAME="gke-1"

# Delete a Minikube cluster
minikube delete -p $CLUSTER_NAME
