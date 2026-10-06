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

## Planned, not implemented
Search all brands, saved heat pumps, fault history, service reports, favourites, coverage indicators, offline access and live AI. This session populates their plans; it does not implement them. See [task board](../tasks/board.md).

## Next action
Begin TASK-004, the shared registry and local data foundation, and arrange TASK-013 browser verification. Then deliver all-brand search and fault history, followed by report export. Live AI remains blocked on provider/backend/access/budget choices.
