#!/usr/bin/env bash
# Starts a design session with the design partner (Mac, Linux, Git Bash).
# DESIGN_PARTNER=1 turns on the guard that limits edits to docs/ and blocks shell commands.
DESIGN_PARTNER=1 claude --agent design-partner
