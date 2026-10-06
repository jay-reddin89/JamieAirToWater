# Open implementation decisions

Date: 2026-10-06. These do not block the documentation request or static foundations.

| Question | Proposed default | Needed before |
| --- | --- | --- |
| Main audience: homeowner, installer or both? | Both, with documented remedies distinct from work notes | Wording and report design |
| Must records sync between devices? | Browser-local records with backup; no cloud sync in first release | Persistence scope expands |
| Should reports include customer/contact/address fields? | Optional unit and engineer details only initially | Report schema finalized |
| Are job photos/attachments needed? | Text notes first; attachments deferred | Storage choice expands |
| Which AI provider/model and hosting account? | Undecided; preserve manual mode | TASK-012 |
| Should AI access be public or authenticated, and what budget/cost cap? | Decide with hosting/provider; do not deploy unrestricted paid calls | TASK-012 |
| What PDF download/storage limits are suitable? | Explicit user-selected downloads with visible sizes | TASK-011 |
| Where will real browser QA run? | Any configured browser environment, including local checkout | Each feature release |

User-authorized planning includes all eight proposed features. These proposed defaults are implementation assumptions, not user-confirmed decisions. No new paid service, cloud account or deployment is configured by this plan.
