# TASK-004: Shared source registry and local data foundation

Status: Ready
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

Planning only. No implementation has started. Preserve existing data and validate a complete user flow before release.

## Blockers

Dependencies listed above; browser verification environment required for rendered QA.

## Completion evidence

None yet. Record changed files, meaningful tests, remaining limits and deployed commit when completed.
