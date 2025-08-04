#!/bin/bash
#
# Build Docker containers after code changes.

kubectl create configmap my-env-file --from-file=.env
