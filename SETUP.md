# Setup checklist

Do these once, in order. Everything runs on your own Claude Pro account, never the shared one.

## 1. Tools on your computer (Windows, in PowerShell)

- [ ] Git for Windows (includes Git Bash, which Claude Code uses for shell commands): `winget install Git.Git`
- [ ] Node.js (needed for the design partner's guard script): `winget install OpenJS.NodeJS.LTS`
- [ ] GitHub CLI: `winget install GitHub.cli`, then close and reopen PowerShell and run `gh auth login` with your personal GitHub account
- [ ] Claude Code: `irm https://claude.ai/install.ps1 | iex`, reopen PowerShell, run `claude --version` to check, then `claude` and log in with your own Pro account. Run `/status` and check it shows your Pro subscription, not an API key.

If PowerShell refuses to run design.ps1 ("running scripts is disabled"), start it with `powershell -ExecutionPolicy Bypass -File .\design.ps1` instead.

## 2. The repo

- [ ] Create a private GitHub repo for the app (or test on the sandbox repo first; recommended).
- [ ] Copy everything in this kit into the repo root, commit, and push to main.
- [ ] From the repo root, run `bash workflow/setup-labels.sh` to create the labels.
- [ ] Make sure the Claude GitHub App has access to this repo (github.com, Settings, Applications, Claude, Configure).

## 3. GitHub settings (Settings tab of the repo)

- [ ] General, Pull Requests: allow squash merging. Optional: turn on "Automatically delete head branches".
- [ ] Actions, General, Workflow permissions: "Read and write permissions".
- [ ] Rules, Rulesets, New branch ruleset, named `protect-main`:
  - Enforcement: Active
  - Bypass list: leave empty, so the rule applies to you and the agents alike
  - Target: the default branch
  - Turn on: Restrict deletions, Require a pull request before merging (0 approvals, since you can't approve your own PRs), Require status checks to pass (add `test` after CI has run once), Block force pushes
- [ ] Projects: create a board and link it to the repo.

Also in Settings, General, Pull Requests: set "Default commit message" for squash merging to "Pull request title". This keeps Claude co-author lines out of the commits on main when you merge a milestone.

## 4. Claude Code Projects

- [ ] Signed in to your own Pro account, go to claude.ai/code (or the Code tab of the desktop app), open Projects, and click New project.
- [ ] Name it after the app, leave Goal empty for now, and under Context add only this repository. Click Create project. (On a first project Claude may start an exploring thread or post Setup recommendations on its own; you can ignore or switch them off.)
- [ ] Open Project settings (gear icon). In General set Thread model to Sonnet 5.5 and Thread effort to Medium.
- [ ] In Memory > Project instructions, paste the text from workflow/project-instructions.md (fill in the two placeholders) and save.

## 5. Reviewer routine

- [ ] Follow workflow/reviewer-routine.md to create the routine at claude.ai/code/routines.

## 6. Notifications

- [ ] Install the GitHub mobile app and sign in with your account. Watch the repo (Custom: Pull requests, Issues).
- [ ] Later: Twilio texts (see the plan doc).

## 7. First test run on the sandbox repo

Do one tiny feature end to end and confirm each mechanism before trusting it with the real app:

- [ ] `design.ps1` starts the design partner (if PowerShell blocks it: `powershell -ExecutionPolicy Bypass -File .\design.ps1`). Tell it this is a sandbox test and pick a tiny feature, for example "a function that adds two numbers, with tests, in Node". It fills in CLAUDE.md and writes the feature goal. Commit and push.
- [ ] In design mode, asking it to edit a file outside docs/ and CLAUDE.md is blocked by the guard.
- [ ] Create `milestone/<slug>` on GitHub, then ask the project to plan the feature. It proposes threads and waits for you.
- [ ] Started threads branch from the milestone branch and open pull requests into it, not main.
- [ ] The reviewer routine fires, comments, and adds a label. If it can't add labels, tell Claude; we'll switch it to a comment keyword.
- [ ] On changes-requested, the thread fixes the comments on its own.
- [ ] The merge workflow squash merges only after CI passes, and only into the milestone branch.
- [ ] The commits on the milestone branch show you as the author with no Claude co-author line.
- [ ] You merge the milestone into main yourself with squash, and the commit on main has no co-author line.
- [ ] Project settings > Usage shows how much the test used, so you can judge your Pro limits.

When all boxes are ticked, start the real app with a project design session.

## If Projects ever disappears

The fallback manager commands still work: run `/plan-feature` and `/dispatch-workers` in a terminal Claude Code session in the repo.
