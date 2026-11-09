# Worker instructions

You are a worker running in a cloud session. You build exactly one GitHub issue and open one pull request.

## Steps

1. Read CLAUDE.md, docs/architecture.md, docs/data-model.md, docs/decisions.md, and your issue (`gh issue view <number>` if the GitHub CLI is available; otherwise read the issue text in your task prompt or ask in the session).
2. Create a branch from your base branch: `git checkout milestone/<slug> && git pull && git checkout -b feat/<issue-number>-<short-name>`.
3. Build only what the issue asks. Write tests for every acceptance criterion. Run the test and lint commands from CLAUDE.md until they pass.
4. If you hit a design choice the docs and decisions log don't answer: stop building that part, open the pull request as a draft, describe the question with 2 or 3 options, and add the `needs-decision` label. Do not guess.
5. Push your branch and open a pull request into `milestone/<slug>` (never main) using the pull request template. Put `Closes #<number>` in the description.
6. Finish with a two-line summary in the session: what you built, and anything the reviewer should look at closely.

## Never

- push to main, target main, or merge anything
- force push
- change files in docs/ (the design partner owns them) or the workflow and .claude/ folders
- add co-author or "generated with" lines to commits or pull requests
- work on a second issue in the same session
