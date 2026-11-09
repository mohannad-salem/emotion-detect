# How the workflow runs

Mohannad is the architect. Agents do most of the building. Mohannad signs off at three gates: plan, milestone, production deploy.

The manager and workers are Claude Code Projects: the project conversation is the coordinator (manager), and each thread is a worker running as a cloud session. Cloud threads read CLAUDE.md but not .claude/settings.json, hooks or skills, so their rules live in the project instructions (workflow/project-instructions.md) and in CLAUDE.md.

## The loop for one feature

1. Design (you + design partner, local): start a design session with `design.ps1`. Write the feature goal with numbered acceptance criteria in docs/features/. Commit and push it.
2. Milestone branch (you): on GitHub, create `milestone/<feature-slug>` from main (branch dropdown, type the name, "Create branch from main").
3. Plan (coordinator): in the project conversation, say "Plan docs/features/<file>.md on milestone/<slug>." It proposes threads in a Suggested threads list.
4. Gate 1 (you): ask for changes until the plan is right, then click the arrow on each suggestion, or the button that starts all of them.
5. Build (threads, cloud): each thread branches from the milestone branch and opens one pull request into it. They keep going with your laptop closed. Track them in the Overview pane.
6. Review (reviewer routine, cloud): fires on each new pull request and labels it `reviewer-approved`, `changes-requested`, or `needs-decision`. Threads watch their pull requests and fix the reviewer's comments on their own.
7. Merge into the milestone (GitHub Actions): pull requests labelled `reviewer-approved` that target a `milestone/` branch and pass checks are squash merged automatically, with a clean commit message.
8. Decisions: a `needs-decision` thread shows under Waiting on you. Open a design session, answer it, and reply in that thread.
9. Gate 2 (you): when the milestone is done, follow the milestone section of workflow/review-checklist.md, then squash merge `milestone/<slug>` into main yourself.
10. Gate 3 (you): deploy to production when staging looks right.

## Labels

| Label | Meaning |
| --- | --- |
| `reviewer-approved` | Passed review; the merge workflow takes it from here |
| `changes-requested` | Reviewer found fixable problems |
| `needs-decision` | A design question only Mohannad can answer |
| `ticket`, `ready`, `in-progress` | Only used by the fallback manager commands |

## Watching progress

- The project's Overview pane: Ready for review, Waiting on you, Working
- Desktop notifications from the Claude desktop app (signed in to your own account)
- GitHub mobile app for pull requests

## Fallback

If Projects is ever unavailable, the local manager commands still work: `/plan-feature` and `/dispatch-workers` in a terminal Claude Code session, with workers following workflow/worker.md.
