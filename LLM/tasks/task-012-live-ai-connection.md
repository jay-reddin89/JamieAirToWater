# TASK-012: Live AI connection

Status: Blocked
Priority: medium
Owner: Unassigned
Created: 2026-10-06

## Outcome

Add backend-powered explanations and follow-up questions grounded in the selected source evidence.

## Context and scope

Backend hosting and provider are not configured. Static GitHub Pages remains the frontend. Keep working manual lookup as fallback.

Dependencies: TASK-004, TASK-010
See [architecture](../docs/feature-architecture.md) and [validation plan](../docs/validation-plan.md).

## Acceptance criteria

- [ ] No provider secret appears in client code, repository, source maps or local backup exports.
- [ ] Backend validates requests, limits size/rate/cost and enforces the allowed frontend origins and chosen access policy.
- [ ] Evidence retrieval identifies exact source/model and verified page references; missing evidence produces an explicit limitation.
- [ ] AI responses separate source facts from inference and do not invent code meanings, fixes or page citations.
- [ ] Timeouts and provider failures offer manual lookup; cancellation and changing model cannot mix conversations.
- [ ] Evaluate known-code, unknown-code, missing-table, conflicting-model and misleading-input examples before release.
- [ ] Document provider, hosting, access control, estimated operating limits and who maintains the service.

## Work notes

Planning only. No implementation has started. Preserve existing data and validate a complete user flow before release.

## Blockers

Choose provider, backend hosting, access model and budget; see open questions.

## Completion evidence

None yet. Record changed files, meaningful tests, remaining limits and deployed commit when completed.
