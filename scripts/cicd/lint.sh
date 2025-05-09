#!/bin/bash
#
# Lint the Codebase.

# SHELL Scripts
echo "Linting SHELL Scripts"

# Sports Game Odds
shellcheck scripts/bin/sports-game-odds/*

# The Odds API
shellcheck scripts/bin/the-odds-api/*

echo "Linting SHELL Scripts completed"
