# Decision log

| ID | Date | Decision | Reason | Status |
| --- | --- | --- | --- | --- |
| DEC-001 | 2026-10-05 | Create `/workspace/LLM` outside the application checkout | User requested a workspace folder for organisation and documentation | Accepted |
| DEC-002 | 2026-10-05 | Add a versioned copy at `JamieAirToWater/LLM` | User requested committing and pushing the documentation to GitHub | Accepted |

For important decisions, record context, alternatives considered, consequences, and relevant links below or in a dedicated file.

## 2026-10-06 feature planning

- DEC-003: Record plans for all eight suggested features; accepted by the user. This turn authorizes planning and repository documentation, not automatic future feature implementation.
- DEC-004: Proposed order: shared foundation → all-brand search/fault history → reports → saved units/favourites/coverage → offline → live AI. Ordering is a planning recommendation.
- DEC-005: Proposed first-release persistence is browser-local with backup. Cloud sync is deferred pending an explicit requirement.
- DEC-006: Live AI requires a backend/provider/access decision; current manual lookup remains an available fallback. No provider secret belongs in the public frontend.

Implementation defaults and unanswered questions are recorded in `notes/questions.md`; do not treat proposals as user-confirmed infrastructure decisions.
