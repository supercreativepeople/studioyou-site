# SERVICES.md - StudioYou Site

Every external platform/service this project depends on. Update at session close whenever something changes. Credentials are NEVER stored here, pointer only. Mirrored into the cross-project Notion Platform & Service Registry (`https://app.notion.com/p/dd60c5c5ccda496eb10d58f8db0bc8b6`) at session close per the `dev-session-protocol` skill.

## Corporate / billing structure (recorded 2026-08-09)

**Frisson Digital, Inc. is the parent company and owns both StudioYou and SCREENBot.** This supersedes the earlier per-product newco plan (StudioYou Inc., Delaware C-corp, with SCP Inc. as venture studio) still described in `studioyou-backend/CLAUDE.md`. A single parent owning both products aligns with incubator programs, Anthropic's programs, and fundraising opportunities.

**Confirmed by Lee 2026-08-09:** every paid resource is personally funded by Lee on personal cards. No platform account bills to a company instrument today, which is why `Billing Entity` reads `Lee (personal)` throughout. SCP Inc. owns nothing and has no IP assigned to it. StudioYou and SCREENBot each have executed IP assignment documentation to Frisson Digital, Inc.; they are the two assigned products. StudioYou and SCREENBot remain **independent products** under a common parent, so shared tooling must not assume a shared codebase or runtime.

**Gap:** Frisson owns the IP, Lee's personal cards fund the infrastructure it runs on. That mismatch is the kind of thing raised in incubator and fund diligence. Counsel and accountant question, flagged here, not advice.

**Target state:** every billing instance established through Frisson Digital, Inc.

## Schema note (2026-08-09)

Four columns added: `Billing Entity`, `Account Standing`, `Cost / Balance`, `Blocks Alpha`. Before this the format had nowhere to record an unpaid or exhausted account.

## Services

| Service | Category | Purpose | Billing Entity | Account Standing | Cost / Balance | Blocks Alpha | Account / Org ID | Console URL | Subscription / Tier | Renewal | Credential Location | Status | Last Verified |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| GitHub - studioyou-site | Other | Source code, CLAUDE.md, handoffs/ | Free / no billing | Free tier | $0 | no | github.com/supercreativepeople | https://github.com/supercreativepeople/studioyou-site | free | n/a | git credential helper (osxkeychain, de-tokenized 2026-08-07) | Active | 2026-08-07 |
| Resend | Email | Transactional email for magic-link sign-in | Lee (personal) | Unconfirmed | unconfirmed | no | - | resend.com | unconfirmed | n/a | RESEND_API_KEY (backend also holds a copy) | Needs Verification | 2026-08-09 |
| Supabase (shared) | Storage/Database | Email collection and magic link generation | Lee (personal) | Unconfirmed | unconfirmed | no | unconfirmed project ref | app.supabase.com | unconfirmed | n/a | unconfirmed | Needs Verification | 2026-08-09 |
| Domain - studioyou.studio | Domain/DNS | **LIVE. Part of the livelink user sign-in engine** (confirmed by Lee 2026-08-09). Also in backend CORS/allowed origins | Lee (personal) | Unconfirmed | unconfirmed | **YES** | - | - | unconfirmed | **unknown** | registrar login | Active | 2026-08-09 |

## Open items

- [ ] Confirm Resend and Supabase against their live consoles. Both rows are seeded from this repo's README, not independently verified.
- [ ] Billing entity audit: confirm whether these bill to Frisson Digital, Inc. or elsewhere.
- [ ] **Confirm registrar and renewal date for `studioyou.studio`.** It is live and sits in the user sign-in path, so an unnoticed expiry breaks login rather than merely a redirect. Currently unknown, which is the single largest exposure recorded in this file.
- [ ] Move billing from Lee's personal cards to a Frisson Digital, Inc. instrument.

## Asset class correction (2026-08-09)

`Lee (personal)` in the Billing Entity column is **not** a defect on every row. Lee operates as an independent builder; his personal accounts and cards fund his own activities and have never been commingled with SCP Inc. or any other company. Personal tooling on a personal card is correct and stays that way.

The real finding is **asset control**: which accounts a Frisson-owned product cannot operate without, while being held in Lee's personal name. The IP assignment moved StudioYou and SCREENBot to Frisson; it did not move the domain registrations, platform accounts, or API keys those products run on. That is a completeness gap in the assignment, not a hygiene failure.

Separately: every vendor account was signed up via `supercreativepeople@gmail.com` with the company name listed as **"SuperCreativePeople"** (name only, no EIN, no entity linkage). SCP Inc. is the one entity deliberately excluded from every program application, so having it named on the infrastructure is a needless inconsistency. **Decision: strip the SCP name now; do not replace with Frisson until Frisson has a payment instrument.** Do not touch GCP billing account `019309-BEB782-398472` while the Google for Startups application is under review.

Full analysis, the company-dependent asset list, and the open items live in `studioyou-backend/SERVICES.md`.
