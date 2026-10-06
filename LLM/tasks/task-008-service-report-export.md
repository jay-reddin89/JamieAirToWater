# TASK-008: Service report export

Status: In progress
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

Implementation added in the 2026-10-06 first increment. Functional and mock-DOM checks passed; acceptance remains open until real browser QA. See the implementation session note.

## Blockers

Dependencies listed above; browser verification environment required for rendered QA.

## Completion evidence

See [implementation session](../sessions/2026-10-06-first-feature-increment.md). Source registry, matching, persistence and report interaction checks passed. Browser layout, native PDF behavior and printing are unverified.
