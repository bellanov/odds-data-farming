#!/bin/bash
#
# Create a Minikube Cluster.
#

# Cluster Configuration
CLUSTER_NAME="gke-1"
NODES="3"
DRIVER="docker"

# Create Cluster
minikube start --nodes $NODES -p $CLUSTER_NAME --driver=$DRIVER
