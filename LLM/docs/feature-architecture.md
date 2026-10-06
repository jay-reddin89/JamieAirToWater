# Feature architecture and data contracts

Date: 2026-10-06. Proposed design, not implemented.

## Static application
Keep plain HTML, CSS and JavaScript on GitHub Pages. Reuse the current dark page layout, PDF popup and hidden-until-search behavior. Introduce shared modules rather than duplicating source lists or matchers. Use relative URLs that work at the repository subpath.

## Source registry
Each logical source needs: `sourceId`, `brand`, `modelScope`, `jsonPath`, `manuals`, `coverage`, `remedyCoverage`, `verifiedPages` and `sourceNotes`. Manual entries need `manualId`, relative `pdfPath`, optional physical-page mapping and part labels. Physical PDF pages are 1-based; distinguish them from printed page labels. Keep extracted code JSON in the user-requested shape; source metadata lives separately. Stable IDs must not depend solely on a display title or changing filename.

Normalize nested legacy code arrays and troubleshooting entries without rewriting their meaning. Identify a result by source ID plus code plus row identity, since a source may contain multiple rows for the same code. Deduplicate identical uploaded manuals, not distinct product sources.

## Local records

| Entity | Proposed fields |
| --- | --- |
| Unit | id, name, brandId, sourceId/model, serialNumber, installedOn, createdAt, updatedAt |
| Fault | id, unitId optional, unitSnapshot, observedOn, code optional, symptoms, status, workNotes, resolution, resolvedOn optional, sourceSnapshots, createdAt, updatedAt |
| Favourite | id, kind code/manual, sourceId, row/code or manualId/page, displaySnapshot, createdAt |
| Backup | schemaVersion, exportedAt, units, faults, favourites |

Start small records in versioned localStorage behind an adapter. Do not store PDF bytes there. Use Cache Storage for offline assets and IndexedDB only if record size or attachments justify it. All consumers use the adapter so migrations and storage failures are handled centrally. Show that records are local to this browser and may be lost when site data is cleared. Provide backup export/import before relying on history.

Imports validate fields and sizes before writes, preview new/conflicting IDs, and offer merge or replace. Export before replacement; do not silently discard records. Store dates for observations as local calendar dates and audit timestamps as ISO timestamps.

## Reports
Render a print-specific view from record snapshots. A report separates documented remedy, engineer notes and actions actually completed. First release uses browser print/save as PDF, with useful filenames where possible. Do not label manual search suggestions as a confirmed diagnosis.

## Offline
Service worker scope must fit `/JamieAirToWater/`. Cache the shell and code/source metadata with an explicit update policy. Cache PDFs only after user selection; account for file sizes and Samsung part mapping. Report incomplete downloads and avoid treating a cached shell as proof that every manual is offline.

## AI extension
Keep provider credentials server-side. Select hosting/provider/access policy before implementation. The server retrieves source evidence, validates requests and returns answers with source IDs/page references; the frontend never treats arbitrary generated links as verified citations. Explain limited coverage, retain manual mode during failures and avoid pretending the current deterministic matcher is a live language model. Revisit architecture after provider and budget decisions; verify current official API documentation then.

## Quality concerns
Avoid untrusted HTML rendering; use text nodes for notes and responses. Guard asynchronous results when sources change. Test range/wildcard codes, duplicate codes, no-code sources and missing remedies. Preserve existing navigation and external video pages unless a feature explicitly changes them.
