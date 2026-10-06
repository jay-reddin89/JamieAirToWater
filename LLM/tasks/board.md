# Task board

Last updated: 2026-10-06. First feature increment implemented; browser QA remains outstanding. In progress means functional code is present but acceptance is not yet complete. Owners remain unassigned.

| ID | Task | Priority | Status | Dependencies |
| --- | --- | --- | --- | --- |
| TASK-004 | [Shared source registry and local data foundation](task-004-shared-source-registry-and-local-data-foundation.md) | high | In progress | — |
| TASK-005 | [Search all brands](task-005-search-all-brands.md) | high | In progress | TASK-004 |
| TASK-006 | [Saved heat pumps](task-006-saved-heat-pumps.md) | medium | In progress | TASK-004 |
| TASK-007 | [Fault history](task-007-fault-history.md) | high | In progress | TASK-004 |
| TASK-008 | [Service report export](task-008-service-report-export.md) | high | In progress | TASK-007 |
| TASK-009 | [Favourites](task-009-favourites.md) | medium | In progress | TASK-004 |
| TASK-010 | [Manual coverage indicators](task-010-manual-coverage-indicators.md) | medium | In progress | TASK-004 |
| TASK-011 | [Offline access](task-011-offline-access.md) | medium | In progress | TASK-004, TASK-005 |
| TASK-012 | [Live AI connection](task-012-live-ai-connection.md) | medium | Blocked | TASK-004, TASK-010 |
| TASK-013 | [Browser and release verification](task-013-browser-and-release-verification.md) | high | Blocked | — |

## Earlier tasks

- TASK-001 (priorities): Superseded by the user-selected feature roadmap.
- TASK-002 (missing assets): Historical issue; recheck current checkout before treating as active. Earlier records do not describe the current shared scripts.
- TASK-003 (hosted chat/video): Chatbot embeds have been replaced by manual lookup; video behavior remains unverified and is covered by TASK-013.

## Completed foundations

- Added eight unique manuals as nine physical PDF files, with a searchable manual page.
- Extracted nine source-aligned error JSON files containing 133 entries.
- Added new pump navigation and source selection; standardized eleven error-code pages with PDF dialogs and search-only results.
- Replaced the broken AI page and two embeds with a manual-backed conversational lookup.
- Populated implementation planning records for the eight proposed features.

See [current state](../context/current-state.md) for evidence and limitations. Status changes belong here and in individual task files.

## First feature increment

Shared source registry and code/page metadata, all-brand search, browser-local fault history, merge-only backup restore and print-preview service reports are present. See [implementation evidence](../sessions/2026-10-06-first-feature-increment.md). Saved units, favourites, offline mode and live AI are not implemented. Coverage metadata exists but its dedicated UI task remains planned.
