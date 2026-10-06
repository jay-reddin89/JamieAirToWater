# TASK-011: Offline access

Status: Planned
Priority: medium
Owner: Unassigned
Created: 2026-10-06

## Outcome

Cache the application and code data, and let users download selected manuals for offline use.

## Context and scope

Proposed service-worker.js, manifest.webmanifest and offline.html; manual download management UI.

Dependencies: TASK-004, TASK-005
See [architecture](../docs/feature-architecture.md) and [validation plan](../docs/validation-plan.md).

## Acceptance criteria

- [ ] Registration and all cache paths work under /JamieAirToWater/, not just at domain root.
- [ ] Explicit manual download shows progress, size, cancellation/removal and storage failures.
- [ ] Only selected PDFs are cached; Samsung parts remain individually manageable.
- [ ] Offline searches use cached code data and explain which sources are unavailable.
- [ ] Versioned caches refresh safely without deleting user history; network and cache misses show useful recovery.
- [ ] An offline PDF is available after reopening without network; local drafts remain usable.

## Work notes

Planning only. No implementation has started. Preserve existing data and validate a complete user flow before release.

## Blockers

Dependencies listed above; browser verification environment required for rendered QA.

## Completion evidence

None yet. Record changed files, meaningful tests, remaining limits and deployed commit when completed.
