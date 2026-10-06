# Current state

Last updated: 2026-10-06. Recorded results, not ongoing monitoring.

## Implemented in repository

| Change | Commit |
| --- | --- |
| Eight unique manuals / nine PDFs and manual browser | `0b5ffb97759ea92079ba40435c8e44cbb99f6296` |
| Nine extracted JSON files / 133 entries | `cb535d8df9dfbbc4296d44c13163a6a3ea1c57ff` |
| New pump navigation and searches | `946038f97a1565a771d555c73348067542cacd73` |
| Eleven uniform pages, PDF popups and hidden-until-query results | `7bc1e36315546f555ca74b2fd1d0fb26090bc102` |
| Manual-backed assistant, replacing broken lookup and chatbot embeds | `fe5d7140ff6f77e7bad22317154dc6cf9cc6a29f` |

## Validation
Direct JSON/schema, source-code-count, page-count, file-link and JavaScript checks passed. Mock DOM checks covered searches, code ranges, exact-code priority, source switching, popup controls, no-data replies and source links. No real browser executable is available in the current workspace; visual layout, native dialog behavior and mobile interactions are not verified. Public deployment of these newer commits has not been checked.

## Data limits
Samsung has a code table but no code-specific remedies. Daikin has only three codes mentioned in installation instructions. Vaillant outdoor, Mitsubishi outdoor and Grant user manuals have no code list. Empty arrays and empty remedy strings express missing source data. Some legacy files contain repeated codes and nested rows. Grant C3 has an apparent source typo recorded in JSON/manuals/README.md.

## First feature increment

Added shared source-registry.js and local-store.js, source/row/manual IDs, coverage metadata and per-code PDF page references. Brand pages and the assistant now use shared source loading and normalization. Added search-all.html, faults.html and report.html with homepage links.

Fault history supports create/edit/resolve/reopen, status/unit/date filters, explicit delete with undo, JSON backup export and validated merge preview/import. Report preview uses selected fault snapshots and editable visit/engineer/report notes; Print / Save as PDF invokes browser printing. Records are browser-local, with no cloud sync.

Shared matching, source links, storage CRUD/backup/date/error paths, legacy search/assistant regressions and mock-DOM fault/report flows passed. Real browser, native dialog, mobile layout and print pagination are not tested. Deployment of this increment is not verified.

## Remaining work

Finish browser acceptance for TASK-004/005/007/008. Saved units, favourites, dedicated coverage UI, offline access and live AI remain planned. Coverage metadata is present; there is no new backend.

## Next action

Arrange TASK-013 real browser QA, verify the increment, then add saved units and favourites. Backend/provider/access/budget decisions still block live AI.
