# TASK-010: Manual coverage indicators

Status: Planned
Priority: medium
Owner: Unassigned
Created: 2026-10-06

## Outcome

Show complete-table, partial and missing-list coverage plus remedy availability accurately.

## Context and scope

Registry metadata; indicators on search results, brand source selection and assistant source selection.

Dependencies: TASK-004
See [architecture](../docs/feature-architecture.md) and [validation plan](../docs/validation-plan.md).

## Acceptance criteria

- [ ] Coverage describes the supplied document, not every code for a product family.
- [ ] Mitsubishi cylinder, Grant installer and Samsung are marked as having a table; Daikin is partial.
- [ ] Vaillant outdoor, Mitsubishi outdoor and Grant user sources explicitly indicate no code list.
- [ ] Samsung distinguishes code-table availability from missing per-code remedies; its two PDF parts belong to one logical manual.
- [ ] Counts are computed from normalized entries and source-page checks back every coverage claim.

## Work notes

Planning only. No implementation has started. Preserve existing data and validate a complete user flow before release.

## Blockers

Dependencies listed above; browser verification environment required for rendered QA.

## Completion evidence

None yet. Record changed files, meaningful tests, remaining limits and deployed commit when completed.
