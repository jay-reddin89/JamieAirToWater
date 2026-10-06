# TASK-008: Service report export

Status: Planned
Priority: high
Owner: Unassigned
Created: 2026-10-06

## Outcome

Create a readable service report from selected faults and unit details, with notes and manual references.

## Context and scope

Proposed report.html and report.js plus print CSS. Initial export is browser Print / Save as PDF; JSON backup is separate.

Dependencies: TASK-007
See [architecture](../docs/feature-architecture.md) and [validation plan](../docs/validation-plan.md).

## Acceptance criteria

- [ ] Preview exactly the selected records with editable visit date, engineer name and report notes.
- [ ] Report includes unit details, faults, observed/resolved dates, actions taken and source references.
- [ ] The report distinguishes documented suggestions from work actually recorded as completed.
- [ ] Print hides navigation and controls, uses readable light colours and avoids clipping long notes.
- [ ] Printing or cancelling does not alter records; no automatic download or sending to another person.

## Work notes

Planning only. No implementation has started. Preserve existing data and validate a complete user flow before release.

## Blockers

Dependencies listed above; browser verification environment required for rendered QA.

## Completion evidence

None yet. Record changed files, meaningful tests, remaining limits and deployed commit when completed.
