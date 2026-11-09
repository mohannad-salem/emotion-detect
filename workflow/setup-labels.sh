#!/usr/bin/env bash
# Creates the workflow labels in the current GitHub repo. Run once from the repo root.
set -e
gh label create ticket            --color 1d76db --description "A planned piece of work" --force
gh label create ready             --color 0e8a16 --description "Approved, waiting for a worker" --force
gh label create in-progress       --color fbca04 --description "A worker is on it" --force
gh label create reviewer-approved --color 2ea44f --description "Passed review; auto merges into the milestone" --force
gh label create changes-requested --color d93f0b --description "Reviewer found fixable problems" --force
gh label create needs-decision    --color b60205 --description "Design question for Mohannad" --force
