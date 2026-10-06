# TASK-005: Search all brands

Status: Planned
Priority: high
Owner: Unassigned
Created: 2026-10-06

## Outcome

Search a code or fault description across all registered sources and show brand/model for every result.

## Context and scope

Proposed search-all.html and search-all.js; homepage button. Reuse the shared registry and matching logic.

Dependencies: TASK-004
See [architecture](../docs/feature-architecture.md) and [validation plan](../docs/validation-plan.md).

## Acceptance criteria

- [ ] Results stay hidden until a non-empty query is entered; clear resets the view.
- [ ] Exact prefixed codes rank first; documented ranges and wildcards work; equal codes from different models stay separate.
- [ ] Each result shows brand, source/model, meaning, remedy availability, manual link and a link to the brand page.
- [ ] One failed source does not hide successful sources; partial loading and zero matches have distinct messages.
- [ ] Rapid input does not render stale results; source requests are cached per session.

## Work notes

Planning only. No implementation has started. Preserve existing data and validate a complete user flow before release.

## Blockers

Dependencies listed above; browser verification environment required for rendered QA.

## Completion evidence

None yet. Record changed files, meaningful tests, remaining limits and deployed commit when completed.
