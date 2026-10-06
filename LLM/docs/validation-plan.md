# Validation plan

## Before each increment
Inspect the actual branch and user changes; read the task acceptance criteria. Use the existing static server with the repository subpath represented. Do not add runtime dependencies merely to test simple formatting.

## Required flows

| Area | Meaningful validation |
| --- | --- |
| All-brand search | Exact prefixed code, bare numeric query, range and wildcard, same code across brands, no query, no match, partial source failure, stale response |
| Units/history | Create/edit/resolve/reopen/remove, reload, snapshots after unit changes, migration, invalid/corrupt storage, quota denial |
| Backup | Export/import round trip, duplicate IDs, unsupported schema, malformed input, merge and replace preview |
| Reports | Multiple selected faults, long notes, special characters, source links, blank optional fields, print preview and cancelled print |
| Favourites/coverage | Stable identities, unavailable source, per-document coverage, correct count and remedy availability |
| Offline | Repository subpath, first load online, selected PDF download, reopen offline, cache update, storage failure and uncached manual |
| AI | Known/unknown code, wrong model, absent table/remedy, evidence citations, timeout, request cancellation, access/rate limits and unsupported instructions in user text |

Use targeted logic checks plus real browser interaction on desktop and mobile. Check keyboard focus, modal Escape/backdrop behavior, console, PDF opening and printing. The current environment has no runnable browser executable; mock DOM tests prove logic only. Do not mark rendered QA complete until a real browser was used.

Record pass/fail outcomes in a session note and link to the task. A GitHub commit proves repository update, not successful Pages publication; verify hosting separately.
