#!/bin/bash
#
# Lint the Codebase.

echo "Linting SHELL Scripts"

# Sports Game Odds
shellcheck scripts/bin/sports-game-odds/*

# The Odds API
shellcheck scripts/bin/the-odds-api/*

echo "Linting SHELL Scripts completed"
