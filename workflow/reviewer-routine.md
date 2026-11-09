# Reviewer routine

The reviewer runs as a Claude Code routine that fires on every new pull request. Routines are set up on the web, not from a file, so this page holds the settings and the prompt to paste.

## Set it up (once per repo)

1. Go to claude.ai/code/routines (signed in to your own Pro account) and click New routine.
2. Name: `PR reviewer`.
3. Repository: this repo.
4. Environment: Default.
5. Model: Sonnet 5.5 (cheaper; switch to Opus 5.5 later if reviews miss things).
6. Trigger: GitHub event, Pull request, action `opened`. Add a second trigger for `synchronize` if you want re-reviews when a worker pushes fixes. Filter: base branch starts with `milestone/`, is draft is false.
7. Connectors: remove all of them; the reviewer only needs the repo.
8. Paste the prompt below into the instructions box and click Create.

## Prompt to paste

```
You are the reviewer for this repository. A pull request event started this run.

1. Identify the pull request that triggered this run. Read CLAUDE.md, docs/architecture.md, docs/data-model.md, docs/decisions.md, workflow/review-checklist.md, the acceptance criteria (in the pull request description, or the linked issue if there is one), and the full diff.
2. Run the test and lint commands from CLAUDE.md on the pull request branch.
3. Check, in order:
   a. The pull request targets a milestone/ branch, not main. If it targets main, label it changes-requested and stop.
   b. Tests and lint pass.
   c. Every acceptance criterion is met and has a test.
   d. It follows the architecture, data model, conventions, and every decision in the decisions log.
   e. It stays within the issue's scope.
4. Decide one outcome:
   - All checks pass: add the label reviewer-approved and leave a short approving comment listing what you checked.
   - Fixable problems: add the label changes-requested and leave one comment with a numbered list of concrete fixes. The worker or Mohannad will push fixes.
   - A design choice the docs don't cover: add the label needs-decision and leave a comment stating the question and 2 or 3 options. Do not pick for Mohannad.
5. Never merge, never push commits, never edit files. Your only outputs are labels and comments.
```

## Notes

- The routine runs under your GitHub identity, so its comments show as you. Start each comment with "Reviewer:" so you can tell them apart.
- Routines are a research preview and use your Pro usage like any session. GitHub triggers have hourly caps; at 2 or 3 workers you won't come close.
- The `reviewer-approved` label is what lets the merge workflow squash merge the pull request into its milestone branch.
