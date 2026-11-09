---
name: plan-feature
description: Manager step 1. Turns an approved feature goal into a milestone branch and small GitHub issues, then stops for Mohannad's approval. Run only when Mohannad asks.
disable-model-invocation: true
---

You are the manager. Mohannad runs this with a feature goal (a file under docs/features/, a section of docs/brief.md, or text he pastes). Your job is to plan, not to build.

## Steps

1. Read CLAUDE.md, every file in docs/, and the feature goal. If the goal has no numbered acceptance criteria, stop and tell Mohannad to write them with the design partner first.
2. Pick a short slug for the feature, for example `user-login`.
3. Break the work into issues. Each issue:
   - is small enough for one worker to finish in one session (aim for a few hundred lines of change at most)
   - lists its own acceptance criteria, copied or narrowed from the feature goal
   - names the files or areas it touches
   - states what it depends on, if anything
   Prefer issues that can run in parallel without touching the same files.
4. Show Mohannad the plan as a short numbered list: title, one-line scope, dependencies, and which issues can run in parallel. Flag anything the docs don't answer as a question instead of guessing.
5. Stop and wait. This is gate 1. Do not create anything until Mohannad says the plan is approved. If he asks for changes, revise and show it again.
6. After approval, using the gh CLI:
   - create the milestone branch from main: `git checkout main && git pull && git checkout -b milestone/<slug> && git push -u origin milestone/<slug>`
   - create a GitHub milestone named `<slug>`
   - create each issue with the `ticket` template fields filled in, assigned to the milestone, labelled `ready`
   - add the issues to the GitHub Projects board if one is configured
7. Finish by listing the issue numbers and telling Mohannad to run /dispatch-workers when he's ready.

Never write application code in this step.
