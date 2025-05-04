#!/bin/bash
#
# Lint the Codebase.

# SHELL Scripts
echo "Linting SHELL Scripts"
shellcheck scripts/build/*

# NodeJS Scripts
echo "Linting NodeJS Scripts"
npx prettier . --write