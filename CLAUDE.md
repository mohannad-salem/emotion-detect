# Project guide for Claude

Read this first in every session. It is the single source of truth for how work happens here.

## The project

- Product brief: docs/brief.md
- Architecture: docs/architecture.md
- Data model: docs/data-model.md
- Decisions log: docs/decisions.md (read it before making any design choice; if your question is answered there, follow it)
- How the workflow runs: workflow/README.md

## Stack

TODO: fill in during the first design session (language, framework, database, hosting, test runner).

## Commands

TODO: fill in once the stack is chosen.

- Install: `TODO`
- Run locally: `TODO`
- Test: `TODO`
- Lint: `TODO`

## Conventions

TODO: folder structure, naming, libraries to use or avoid.

- Every change ships with tests for its acceptance criteria.
- Keep pull requests small: one GitHub issue per pull request.

## Branches

- `main` is Mohannad's. Never push to it, never merge into it, never open a pull request that targets it. Only Mohannad merges a milestone into main.
- Each milestone has a branch named `milestone/<slug>`. Feature branches come off it and pull requests target it.
- Never force push. Never rewrite history on a shared branch.

## When something is not covered

If a design choice is not answered by the docs or the decisions log, do not guess. Stop, describe the question and 2 or 3 options in the pull request or issue, and add the `needs-decision` label. Mohannad answers, and the design partner records the answer in docs/decisions.md.

## Commits

Write clear commit messages describing what changed and why. Do not add co-author or "generated with" lines.
