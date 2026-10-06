# TASK-009: Favourites

Status: Planned
Priority: medium
Owner: Unassigned
Created: 2026-10-06

## Outcome

Bookmark useful error codes and manuals and reopen them from a favourites view.

## Context and scope

Proposed favourites.html and favourites.js; star buttons on source-linked result cards.

Dependencies: TASK-004
See [architecture](../docs/feature-architecture.md) and [validation plan](../docs/validation-plan.md).

## Acceptance criteria

- [ ] Stable source+code identity prevents different brands sharing a code from being merged.
- [ ] Manual favourites use source/PDF identity and optional page number.
- [ ] Adding, removing and reopening favourites works across refresh.
- [ ] Missing or changed sources show an unavailable notice and preserve the bookmark until removed.
- [ ] Bookmarks are included in the local backup format.

## Work notes

Planning only. No implementation has started. Preserve existing data and validate a complete user flow before release.

## Blockers

Dependencies listed above; browser verification environment required for rendered QA.

## Completion evidence

None yet. Record changed files, meaningful tests, remaining limits and deployed commit when completed.
