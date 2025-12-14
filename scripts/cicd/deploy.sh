#!/bin/bash
#
# Deploy the project's containers.

# Deploy Container
docker run \
  --name fantasy-ace-odds \
  --env-file ./.env \
  --cpus="1.5" \
  --memory="512m" \
  fantasy-ace-odds:latest
