#!/bin/bash
#
# Deploy the project's containers.

# Deploy Container
docker run \
  --name odds-data-farming \
  --env-file ./k8s/config/.env.nfl.american \
  --cpus="1.5" \
  --memory="512m" \
  odds-data-farming:latest
