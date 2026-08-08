# SERVICES.md - StudioYou Site

Every external platform/service this project depends on. Update at session close whenever something changes. Credentials are NEVER stored here, pointer only. Mirrored into the cross-project Notion Platform & Service Registry (`https://app.notion.com/p/dd60c5c5ccda496eb10d58f8db0bc8b6`) at session close per the `dev-session-protocol` skill.

| Service | Category | Purpose | Account / Org ID | Console URL | Subscription / Tier | Renewal | Credential Location | Status | Last Verified |
|---|---|---|---|---|---|---|---|---|---|
| GitHub - studioyou-site | Other | Source code, CLAUDE.md, handoffs/ — GitHub status was previously "unconfirmed" in the dev-session-protocol repo table; confirmed live and reachable 2026-08-07 | github.com/supercreativepeople | https://github.com/supercreativepeople/studioyou-site | free | n/a | git credential helper (osxkeychain, remote URL de-tokenized 2026-08-07) | Active | 2026-08-07 |
| Resend | Email | Transactional email for magic-link sign-in | resend.com | resend.com | unconfirmed | n/a | unconfirmed | Needs Verification | 2026-08-07 |
| Supabase (shared) | Storage/Database | Email collection + magic link generation | unconfirmed project ref | app.supabase.com | unconfirmed | n/a | unconfirmed | Needs Verification | 2026-08-07 |

Note: this repo's README describes it as "StudioYou email collection and magic link generation — Resend + Supabase." Both rows above are seeded from that description, not independently confirmed against live consoles this session.
