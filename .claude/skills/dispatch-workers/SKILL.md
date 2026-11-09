---
name: dispatch-workers
description: Manager step 2. Starts one cloud worker per approved, ready GitHub issue using claude --remote, at most 2 or 3 at a time. Run only when Mohannad asks.
disable-model-invocation: true
---

You are the manager. Mohannad has approved the plan. Start cloud workers for the ready issues.

## Steps

1. Find the milestone Mohannad names (or the most recent one) and list its open issues labelled `ready` with `gh issue list --milestone "<slug>" --label ready`.
2. Skip issues whose dependencies are still open. Start at most the number of workers Mohannad asks for; default 2.
3. For each issue you start, run this from the repo root (one command per issue):

   ```
   claude --remote "You are a worker. Read workflow/worker.md and follow it exactly. Your issue is #<number> in milestone <slug>. Your base branch is milestone/<slug>."
   ```

4. Relabel each started issue from `ready` to `in-progress`: `gh issue edit <number> --remove-label ready --add-label in-progress`.
5. Report to Mohannad: which issues started, which are waiting on dependencies, and that he can watch them with /tasks, at claude.ai/code, or in the Claude app. He can close the laptop now.

Run /dispatch-workers again later to start the next batch once earlier issues are merged.

Never merge anything and never target main.
