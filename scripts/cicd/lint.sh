#!/bin/bash
#
# Lint the Codebase.

echo "Linting SHELL Scripts"

# The Odds API
shellcheck scripts/bin/*

echo "Linting SHELL Scripts completed"
