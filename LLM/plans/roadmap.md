# Feature roadmap

Date: 2026-10-06
Status: Planned — user requested implementation plans; feature development has not begun.

## Goal
Make Jamie Air To Water useful during heat-pump fault diagnosis and service visits while preserving manual-backed answers and the existing static site.

## Delivery order

| Phase | Deliverables | Dependencies | Exit condition |
| --- | --- | --- | --- |
| 0 | Shared source registry, storage design and browser QA setup | Existing app and extracted manuals | Stable source identities and agreed data contracts; verification environment available |
| 1 | Search all brands and fault history | Phase 0 | Search identifies brand/model correctly; fault records survive refresh and can be backed up |
| 2 | Service report export | Fault history | Selected faults produce a checked print preview and printable report |
| 3 | Saved heat pumps, favourites and coverage indicators | Shared foundation | Saved units/bookmarks reopen correct sources; coverage is evidence-based |
| 4 | Offline access | Shared search/data paths | App, code data and explicitly selected PDFs work offline |
| 5 | Live AI | Coverage/source metadata, backend/provider decisions | Grounded AI passes evaluation and manual fallback stays usable |

Saved units are optional for phase-1 history: manually entered unit snapshots let fault history and reports ship first. Coverage can move earlier because it also improves search and assistant accuracy.

## Scope
All eight proposed features are planned. Live AI is blocked on infrastructure choices. No dates, paid services, cloud sync or backend deployment are promised by this plan. Implementation is separate from this documentation request.

See [feature tasks](../tasks/board.md), [architecture](../docs/feature-architecture.md), [validation](../docs/validation-plan.md) and [open decisions](../notes/questions.md).
