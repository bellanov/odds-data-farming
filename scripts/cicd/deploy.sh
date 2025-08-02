#!/bin/bash
#
# Deploy the project's containers.

# Deploy Container
docker run  \
  --name odds-data-farming \
  --env-file ./.env \
  odds-data-farming:latest
