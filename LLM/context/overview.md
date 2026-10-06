# Project overview

Jamie Air To Water is a plain HTML/CSS/JavaScript GitHub Pages application for heat-pump manuals, error-code lookup and manual-backed troubleshooting.

Repository: https://github.com/jay-reddin89/JamieAirToWater
Website: https://jay-reddin89.github.io/JamieAirToWater/
Planning folder: repository-relative `LLM/`. Do not rely on paths from older workspaces.

Serve from the checkout root with `python3 -m http.server 8000 --bind 127.0.0.1`. No build is required.

The user prefers the centred dark layout with Home/PDF Files buttons, a PDF-selection popup and codes hidden until a search is entered. The assistant currently provides deterministic manual lookup, not a live AI model.

Keep source claims traceable, preserve existing data and separate repository commits from deployment verification. Keep credentials and customer records out of public source/docs. All proposed feature plans are in [the roadmap](../plans/roadmap.md); the task board is authoritative for progress.
