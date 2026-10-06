# TASK-005: Search all brands

Status: In progress
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

Implementation added in the 2026-10-06 first increment. Functional and mock-DOM checks passed; acceptance remains open until real browser QA. See the implementation session note.

## Blockers

Dependencies listed above; browser verification environment required for rendered QA.

## Completion evidence

See [implementation session](../sessions/2026-10-06-first-feature-increment.md). Source registry, matching, persistence and report interaction checks passed. Browser layout, native PDF behavior and printing are unverified.
