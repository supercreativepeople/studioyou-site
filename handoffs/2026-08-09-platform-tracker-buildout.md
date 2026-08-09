# Session: platform / partner / subscription tracker build-out — 2026-08-09

Cross-repo session. Full record in `studioyou-backend/handoffs/2026-08-09-platform-tracker-buildout.md`. This file covers what changed here.

## Changes

`SERVICES.md` gained `Billing Entity`, `Account Standing`, `Cost / Balance`, and `Blocks Alpha` columns, matching the other three repos and the Notion registry.

**`studioyou.studio` confirmed live by Lee**, not a leftover. It is part of the livelink user sign-in engine. Previously it appeared nowhere in any SERVICES.md despite being referenced in the backend's CORS/allowed origins. Now recorded as Active and flagged alpha-blocking, on the grounds that its registrar and renewal date are unknown and an unnoticed expiry would break login rather than merely a redirect. That is the single largest exposure recorded in this file.

Billing set to `Lee (personal)` throughout, per Lee: every paid resource is personally funded on personal cards. Corporate structure recorded: **Frisson Digital, Inc. is the parent company owning both StudioYou and SCREENBot**.

## Still open here

- [ ] **Confirm registrar and renewal date for `studioyou.studio`.** Highest priority item in this repo.
- [ ] Confirm Resend and Supabase against their live consoles. Both rows are seeded from this repo's README, never independently verified.
- [ ] Move billing from Lee's personal cards to a Frisson instrument.
- [ ] **This repo lives in `~/Downloads`.** The dev-session-protocol classifies Downloads as an untrusted staging tier. Proposed: move to `~/Projects`.
