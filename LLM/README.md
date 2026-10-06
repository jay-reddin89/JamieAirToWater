# LLM workspace

A shared place to create, plan, document, and organise work with an AI assistant.

## Start here

1. Read `context/overview.md` and `context/current-state.md`.
2. Capture ideas and requests in `notes/inbox.md`.
3. Define the intended outcome in `plans/roadmap.md` or copy a template from `templates/`.
4. Track actionable work in `tasks/board.md`.
5. Record decisions in `decisions/log.md` and reusable instructions in `docs/`.
6. At the end of a session, update current state and create a handoff using `templates/session.md`.

## Folder guide

| Folder | Purpose |
| --- | --- |
| `context/` | Project background, constraints, current state, and reference links |
| `plans/` | Goals, milestones, and implementation plans |
| `tasks/` | Work queue and completed work |
| `notes/` | Ideas, meeting notes, observations, and questions |
| `docs/` | Guides and documentation that remain useful over time |
| `decisions/` | Choices, reasons, and consequences |
| `prompts/` | Reusable requests for creating, planning, and reviewing |
| `sessions/` | Session summaries and handoffs |
| `templates/` | Starting points for plans, tasks, notes, and sessions |
| `archive/` | Superseded material retained for reference |

Use descriptive Markdown filenames, such as `2026-10-05-site-review.md`. Link related files using relative paths. Keep current status in `context/current-state.md` and task status in `tasks/board.md`; link to them instead of copying status into several files. Label assumptions and unverified observations. Never store passwords, tokens, private keys, or other secrets here.

This folder is versioned in the JamieAirToWater repository. Use this repository copy for updates; historical absolute workspace paths may no longer exist. The static Pages workflow uploads the entire repository, so these documents will also be public website assets. The earlier workspace backup predates this folder.

## Current implementation planning

Start with [the feature roadmap](plans/roadmap.md), [task board](tasks/board.md) and [architecture](docs/feature-architecture.md). Eight feature plans plus shared foundation and release verification tasks are populated. Plans do not automatically execute work.
