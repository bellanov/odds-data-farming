#!/bin/bash
#
# Tear down container resources.

NAME="odds-data-farming"

# Tear down existing Docker resources
docker container stop odds-data-farming
docker container prune --force
