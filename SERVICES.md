# SERVICES.md - StudioYou Site

Every external platform/service this project depends on. Update at session close whenever something changes. Credentials are NEVER stored here, pointer only. Mirrored into the cross-project Notion Platform & Service Registry (`https://app.notion.com/p/dd60c5c5ccda496eb10d58f8db0bc8b6`) at session close per the `dev-session-protocol` skill.

## Corporate / billing structure (recorded 2026-08-09)

**Frisson Digital, Inc. is the parent company and owns both StudioYou and SCREENBot.** This supersedes the earlier per-product newco plan (StudioYou Inc., Delaware C-corp, with SCP Inc. as venture studio) still described in `studioyou-backend/CLAUDE.md`. A single parent owning both products aligns with incubator programs, Anthropic's programs, and fundraising opportunities.

**Every billing instance is to be established through Frisson Digital, Inc.** The `Billing Entity` column records what each account bills to *today*. Accounts predating the Frisson structure may still sit on a personal card, so they read `Unconfirmed` rather than being assumed.

## Schema note (2026-08-09)

Four columns added: `Billing Entity`, `Account Standing`, `Cost / Balance`, `Blocks Alpha`. Before this the format had nowhere to record an unpaid or exhausted account.

## Services

| Service | Category | Purpose | Billing Entity | Account Standing | Cost / Balance | Blocks Alpha | Account / Org ID | Console URL | Subscription / Tier | Renewal | Credential Location | Status | Last Verified |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| GitHub - studioyou-site | Other | Source code, CLAUDE.md, handoffs/ | Free / no billing | Free tier | $0 | no | github.com/supercreativepeople | https://github.com/supercreativepeople/studioyou-site | free | n/a | git credential helper (osxkeychain, de-tokenized 2026-08-07) | Active | 2026-08-07 |
| Resend | Email | Transactional email for magic-link sign-in | Unconfirmed | Unconfirmed | unconfirmed | no | - | resend.com | unconfirmed | n/a | RESEND_API_KEY (backend also holds a copy) | Needs Verification | 2026-08-09 |
| Supabase (shared) | Storage/Database | Email collection and magic link generation | Unconfirmed | Unconfirmed | unconfirmed | no | unconfirmed project ref | app.supabase.com | unconfirmed | n/a | unconfirmed | Needs Verification | 2026-08-09 |
| Domain - studioyou.studio | Domain/DNS | Second domain, referenced in backend CORS/allowed origins. Relationship to this repo not confirmed | Unconfirmed | Unconfirmed | unconfirmed | no | - | - | unconfirmed | **unknown** | registrar login | Needs Verification | 2026-08-09 (added) |

## Open items

- [ ] Confirm Resend and Supabase against their live consoles. Both rows are seeded from this repo's README, not independently verified.
- [ ] Billing entity audit: confirm whether these bill to Frisson Digital, Inc. or elsewhere.
- [ ] Confirm which repo/property `studioyou.studio` actually serves, plus registrar and renewal date.
