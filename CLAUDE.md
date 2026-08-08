# CLAUDE.md - StudioYou Site

**Last updated:** 2026-08-07 (dev-session-protocol bootstrap)
**Next session opens with:** no carried-forward task list yet — this repo had no CLAUDE.md before today. Start by confirming the Resend + Supabase integration noted in `SERVICES.md` is still accurate, since those rows were seeded from the README description only, not independently verified.

## What this is

StudioYou's standalone email-collection and magic-link sign-in site (per this repo's README: "StudioYou email collection and magic link generation — Resend + Supabase").

## Current state (as of 2026-08-07, session close)

- GitHub remote confirmed reachable and de-tokenized.
- Remote had a divergent commit from an April 27, 2026 GitHub web upload that predated this repo's local git tracking; content was identical to what was already local, so it was rebased in cleanly, no conflicts.
- `index copy.html` (a stray duplicate) deleted per Lee. `.DS_Store` untracked and gitignored per Lee. `verify.html` committed per Lee.
- Repo is clean and fully pushed to GitHub.

## Protocol structure (added 2026-08-07)

This repo did not have `CLAUDE.md`, `handoffs/`, `SERVICES.md`, or `tools/check_repo_status.sh` before today. All four were added per the `dev-session-protocol` skill.

## Open items

- [ ] Verify the Resend and Supabase rows in `SERVICES.md` against the live consoles.
- [ ] No upstream tracking branch existed for `main` before this session (that's how the April web-upload commit went unnoticed) — now set to track `origin/main`.
