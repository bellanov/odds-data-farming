#!/bin/bash
#
# Build Docker containers after code changes.

# Execute Task

echo "Executing: $TASK"
npm run $TASK
