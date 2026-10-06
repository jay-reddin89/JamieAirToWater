# TASK-004: Shared source registry and local data foundation

Status: In progress
Priority: high
Owner: Unassigned
Created: 2026-10-06

## Outcome

Create one source registry used by brand search, the assistant and all-brand search, and a versioned local persistence adapter.

## Context and scope

JSON/assistant-sources.json, PDF/manuals-catalog.json, JSON/manuals/README.md, heat-pump-search.js, assistant.js. Proposed shared modules: source-registry.js and local-store.js.

Dependencies: None; inspect current source first.
See [architecture](../docs/feature-architecture.md) and [validation plan](../docs/validation-plan.md).

## Acceptance criteria

- [ ] Every source has a stable ID, brand, model scope, JSON/PDF paths and explicit coverage status.
- [ ] Per-code PDF page references replace the assistant’s hard-coded page mapping where verified.
- [ ] Legacy nested LG codes and Kodiak Troubleshooting remain accessible without losing their source identity.
- [ ] Local schema migrations, unavailable storage and malformed saved data are handled without erasing records.

## Work notes

Implementation added in the 2026-10-06 first increment. Functional and mock-DOM checks passed; acceptance remains open until real browser QA. See the implementation session note.

## Blockers

Dependencies listed above; browser verification environment required for rendered QA.

## Completion evidence

See [implementation session](../sessions/2026-10-06-first-feature-increment.md). Source registry, matching, persistence and report interaction checks passed. Browser layout, native PDF behavior and printing are unverified.
