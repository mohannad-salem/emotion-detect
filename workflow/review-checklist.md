# Review checklist

Used by the reviewer routine and by Mohannad at milestone review.

## Every pull request

- [ ] Targets a `milestone/` branch, never main
- [ ] Tests and lint pass
- [ ] Every acceptance criterion in the issue is met and has a test
- [ ] Follows docs/architecture.md and docs/data-model.md
- [ ] Respects every entry in docs/decisions.md
- [ ] Stays within the issue's scope
- [ ] No secrets, keys or passwords in the code
- [ ] No co-author or "generated with" lines in commits

## Milestone review (gate 2, Mohannad)

- [ ] All milestone issues closed
- [ ] Demo works on the milestone branch (run it locally or on a preview)
- [ ] Read the list of design decisions made during the milestone
- [ ] Open a pull request from `milestone/<slug>` into main, check it, and merge it yourself (squash or merge commit, your choice)

## Production deploy (gate 3, Mohannad)

- [ ] Staging looks right
- [ ] Deploy only after you say so
