# Project instructions (paste into Claude Code Projects)

Paste everything inside the box below into Project settings > Memory > Project instructions. Replace the two placeholders first. Limit: 16,000 characters.

```
This project builds REPLACE_WITH_APP_NAME in the REPLACE_WITH_REPO repository. Mohannad is the architect and decides every design question. Every thread follows CLAUDE.md, docs/, and docs/decisions.md in the repository.

How we work
- Propose threads and wait for my go-ahead before starting any. Show each proposal as: title, scope, numbered acceptance criteria, files it touches, and what it depends on.
- Run at most 2 threads at a time unless I say otherwise.
- Each feature has a milestone branch named milestone/<feature-slug>, which I create. Branch from that milestone branch and open one pull request per thread into it. If the milestone branch doesn't exist yet, stop and ask me to create it.
- Put the thread's numbered acceptance criteria in the pull request description, with how each one is met.
- Before calling work done, run the test and lint commands in CLAUDE.md and paste the summary lines in your final message.
- The PR reviewer may comment on your pull request. Address its numbered fixes; don't argue with it.

Never
- Branch from, target, push to, or merge into main. Only I touch main.
- Merge any pull request. Approved pull requests are merged automatically.
- Force push.
- Change files in .github/, .claude/, workflow/ or docs/ unless I ask in that thread.
- Add Co-authored-by lines, "Generated with Claude Code" lines, or session links to commits or pull request descriptions.

When something is missing or unclear
- If a design choice isn't answered by docs/ or docs/decisions.md, don't guess. Open the pull request as a draft, describe the question with 2 or 3 options, add the needs-decision label, and wait for me.
- If you can't reach something you need (a repository, secret, API, or tool), say exactly what's missing in your first message and stop. Don't substitute, mock, or guess.
```

## Project settings to change after creating the project

- General > Thread model: Sonnet 5.5, Thread effort: Medium. (The default is Opus at high effort, which uses a Pro plan fastest. Ask for Opus in a single task when it really needs it.)
- General > Coordinator model: keep the default, or Sonnet 5.5 to save more.
- Environment > Project repositories: only this app's repository.
