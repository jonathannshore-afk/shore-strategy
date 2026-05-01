
# Lead Scoring for Contact Form Submissions

## What this does

Every contact form submission gets scored by AI on two axes — **Fit** (does this look like your ICP?) and **Intent** (is this a serious, specific ask?) — within seconds of submit. The score, tier, and reasoning are:

1. Emailed to you so you see it in your inbox alongside the raw lead
2. Pushed to a `scored_leads` table in the BD Command Center so it sits next to your pipeline

The user submitting the form sees no change. Scoring runs in the background and never blocks or delays their submission. If scoring fails, the lead still saves and the form still works.

## What you'll see

A new email like this lands in your inbox a few seconds after the existing contact notification:

```text
Subject: [HOT 87] New lead — Sarah Chen, VP Partnerships at Acme

Score: 87 / 100  (Hot)
Fit: 45/50    Intent: 42/50

Why hot:
- VP Partnerships at a Series C SaaS — exact ICP match
- Specific ask: "rebuild our channel program after losing our head of partnerships"
- Named timeline (Q1) and named budget range
- Came in via /services page

Suggested next step:
Reply within 24h. Lead with your ServiceNow channel rebuild case study.
Offer 30-min intro call, not the assessment.

— Lead also pushed to BD Command Center › scored_leads
```

Tiers: **Hot** (80+), **Warm** (50–79), **Cold** (<50).

## Pieces to build

### 1. New `scored_leads` table in the BD Command Center

You'll run this SQL once in the BD Command Center project (I'll give you the exact statement when we get there). Schema:

```text
scored_leads
  id              uuid pk
  source          text         -- 'shore_strategy_contact'
  source_id       uuid         -- contact_submissions.id from Shore Strategy
  name            text
  email           text
  company         text
  raw_message     text
  score           int          -- 0-100
  tier            text         -- 'hot' | 'warm' | 'cold'
  fit_score       int          -- 0-50
  intent_score    int          -- 0-50
  rationale       text         -- short paragraph
  signals         jsonb        -- bulleted reasons that fired
  suggested_next_step text
  status          text default 'new'  -- new | contacted | qualified | dropped
  scored_at       timestamptz default now()
  created_at      timestamptz default now()
```

RLS: anon role gets INSERT only (so the Shore Strategy edge function can write). No public SELECT — you read from the BD Command Center admin (where you're already authenticated).

### 2. New edge function: `score-lead`

Takes `{ submissionId, name, email, company, message }`. Calls Lovable AI (Gemini Flash) with a structured-output tool call so we get clean JSON back: fit_score, intent_score, rationale, signals[], suggested_next_step. Combines into a 0–100 score and tier. Then:

- Sends a transactional email to your inbox with the breakdown
- POSTs the row to the BD Command Center `scored_leads` table using its anon key (already in `bdClient.ts`)

System prompt encodes the v1 ICP guess:

```text
ICP (high fit):
- Title: VP/SVP/Chief of Partnerships, Alliances, Channel, BD,
  Ecosystem, or CRO at SaaS / tech companies
- Stage: Series B+ or PE-backed, 100-2000 employees
- Founders/CEOs at sub-200 person SaaS = medium fit

Low fit signals:
- Agencies pitching services
- Recruiters
- Students / job seekers
- Vendors selling tools to Jonathan
- Generic "let's connect" with no business context

High intent signals:
- Names a specific problem
- Mentions timeline, budget, or trigger event
- References a Shore Strategy page or piece of content
- Asks about engagement model (FTE vs fractional)

Low intent signals:
- Vague "interested in your services"
- No company context
- Wall of text with no clear ask
```

### 3. New transactional email template: `lead-score-alert`

React Email template under `supabase/functions/_shared/transactional-email-templates/lead-score-alert.tsx`. Registered in the existing `registry.ts`. Subject auto-built from tier + score + name. Body shows the breakdown, signals, and suggested next step, with a mailto reply link pre-populated.

Sent to your inbox via the existing `send-transactional-email` queue (same pipeline as the contact-confirmation email).

### 4. Wire it into `submit-contact`

Add a fourth fire-and-forget task block (next to Slack and Google Sheets) that invokes `score-lead` with the submission. Uses the same `EdgeRuntime.waitUntil` pattern already in the file. Failure logs but never breaks the response.

### 5. Tiny addition: `recipient_email` config

Hardcode your inbox address (the same one used for the existing notifications) in the `score-lead` function. We can move it to a secret later if you want.

## What stays the same

- Contact form UX — no change
- `contact_submissions` schema — no change (we don't store the score on Shore Strategy's DB; it lives in BD)
- Existing Slack notification, Sheets append, auto-reply email — all untouched
- Rate limiting — unchanged
- BD Command Center `blog_posts` and anything else there — untouched

## Ordering and risk

1. Get the BD Command Center SQL into your hands → you run it → confirm table exists
2. Build `score-lead` function + email template + wire it in (one go)
3. Submit a test contact form → verify email lands and BD row appears
4. Tune the prompt against the first 5–10 real leads

If step 1 isn't done yet when we deploy, the BD push will quietly fail-log but the email alert still works — so you're never blocked from seeing scores.

## Open question for after v1

Whether to also retroactively score the existing rows in `contact_submissions`. Easy follow-up: a one-shot script that loops through historical rows and scores them. Not in this plan.

## Technical notes

- Model: `google/gemini-3-flash-preview` (fast, cheap, plenty smart for this). Falls back to `google/gemini-2.5-flash` if the preview model is rate-limited.
- Structured output via tool calling (not "return JSON" prompting) — more reliable parsing.
- The score-lead function is `verify_jwt = false` since `submit-contact` calls it without a user token. It validates the `submissionId` exists in `contact_submissions` to prevent abuse.
- BD push uses `bdSupabase` anon client style — I'll create a small Deno-side equivalent in the function (the existing `bdClient.ts` is browser-side).
- All AI errors (429 rate limit, 402 credits) are caught and logged; the email alert still fires with score=null and a "scoring unavailable" note, so you never lose visibility on a lead.
