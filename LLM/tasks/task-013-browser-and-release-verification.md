# TASK-013: Browser and release verification

Status: Blocked
Priority: high
Owner: Unassigned
Created: 2026-10-06

## Outcome

Validate every shipped increment in a real browser and keep public deployment evidence separate from repository commits.

## Context and scope

The current workspace has no browser executable; direct logic checks have passed but visual UI behavior remains unverified.

Dependencies: None; inspect current source first.
See [architecture](../docs/feature-architecture.md) and [validation plan](../docs/validation-plan.md).

## Acceptance criteria

- [ ] Desktop and mobile tests cover Home → search, PDF popup, model switching, no-query/no-match states and errors.
- [ ] Check keyboard focus, Escape/backdrop close, readable text, long content, console errors and real PDF page opening.
- [ ] Use a nested-path test server for GitHub Pages paths.
- [ ] For persistence features check reload, migration, corrupt storage, quota errors and backup round trips.
- [ ] Verify deployed commit and public feature URLs before claiming deployment success.

## Work notes

Browser executable is unavailable in the current environment. Direct tests are recorded; real browser QA remains blocked. Preserve existing data and validate a complete user flow before release.

## Blockers

Dependencies listed above; browser verification environment required for rendered QA.

## Completion evidence

None yet. Record changed files, meaningful tests, remaining limits and deployed commit when completed.
