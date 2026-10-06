# TASK-007: Fault history

Status: Planned
Priority: high
Owner: Unassigned
Created: 2026-10-06

## Outcome

Record dated faults, symptoms, work notes, resolution and linked source evidence.

## Context and scope

Proposed faults.html and faults.js. Can ship before saved units using manually entered unit details; integrate TASK-006 later.

Dependencies: TASK-004
See [architecture](../docs/feature-architecture.md) and [validation plan](../docs/validation-plan.md).

## Acceptance criteria

- [ ] Create and edit a record with brand/model, code or symptoms, observed date and status.
- [ ] Resolved records retain the resolution and date; reopening is supported.
- [ ] Filters for unit, date and open/resolved status work; deletion requires an explicit action and offers undo.
- [ ] Each record stores a snapshot of unit details and source references so later changes do not rewrite history.
- [ ] Records survive refresh; backup import/export validates schema and explains duplicate handling.

## Work notes

Planning only. No implementation has started. Preserve existing data and validate a complete user flow before release.

## Blockers

Dependencies listed above; browser verification environment required for rendered QA.

## Completion evidence

None yet. Record changed files, meaningful tests, remaining limits and deployed commit when completed.
