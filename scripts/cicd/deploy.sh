#!/bin/bash
#
# Deploy the project's containers.

# Deploy Container
docker run \
  --name odds-data-farming \
  --env-file ./.env \
  --cpus="1.5" \
  --memory="512m" \
  odds-data-farming:latest
