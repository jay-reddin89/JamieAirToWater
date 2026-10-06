# TASK-006: Saved heat pumps

Status: Planned
Priority: medium
Owner: Unassigned
Created: 2026-10-06

## Outcome

Maintain named units with model, serial number and installation date for quick selection.

## Context and scope

Proposed units.html and units.js. Unit data stays in the browser; no cloud account in this phase.

Dependencies: TASK-004
See [architecture](../docs/feature-architecture.md) and [validation plan](../docs/validation-plan.md).

## Acceptance criteria

- [ ] Create, edit and remove a unit with a stable ID and required name/brand/model.
- [ ] Serial number and installation date are optional; date validation prevents malformed values.
- [ ] Selecting a unit preselects its brand/model in the assistant and fault form.
- [ ] Removal preserves historical fault details through unit snapshots.
- [ ] Import/export backup and a clear browser-only storage notice are available.

## Work notes

Planning only. No implementation has started. Preserve existing data and validate a complete user flow before release.

## Blockers

Dependencies listed above; browser verification environment required for rendered QA.

## Completion evidence

None yet. Record changed files, meaningful tests, remaining limits and deployed commit when completed.
