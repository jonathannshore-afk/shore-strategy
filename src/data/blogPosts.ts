export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorImage?: string;
  date: string;
  readTime: string;
  category: string;
  heroImage?: string;
  keyStats?: { value: string; label: string }[];
  tldr?: string;
  content: string;
}

export const defaultAuthor = {
  name: "Jonathan Shore",
  image: "/author-jonathan.jpeg",
  title: "Founder, Shore Strategy",
  linkedin: "https://www.linkedin.com/in/jonathan-shore/",
};

export const posts: BlogPost[] = [
  {
    slug: "building-partner-program-from-scratch",
    title: "Building a Partner Program From Scratch: A Step-by-Step Framework",
    excerpt:
      "Most companies launch partner programs without a clear architecture. Here's the framework we use to design programs that scale from day one.",
    author: "Jonathan Shore",
    authorImage: defaultAuthor.image,
    date: "March 10, 2026",
    readTime: "8 min read",
    category: "Partner Strategy",
    keyStats: [
      { value: "4", label: "Pillars of Program Design" },
      { value: "12–18mo", label: "Typical Planning Horizon" },
      { value: "2", label: "Max Starting Tiers" },
    ],
    tldr: "Design your partner program around four pillars — strategic alignment, program architecture, operational readiness, and measurement. Start with two tiers max and iterate based on data, not assumptions.",
    content: `
## Why Most Partner Programs Fail Early

The majority of partner programs stumble not because of poor execution, but because of poor architecture. Companies rush to recruit partners before defining what success looks like, how value flows between parties, or what infrastructure is needed to support scale.

After building and advising on dozens of partner programs across industries, we've distilled a repeatable framework that addresses the most common failure points.

## The Four Pillars Framework

### 1. Strategic Alignment

Before writing a single partnership agreement, answer these questions:
- What business outcomes does your partner program need to drive?
- How does partnering fit into your broader go-to-market strategy?
- What types of partners will deliver the most value in the next 12–18 months?

Strategic alignment isn't a one-time exercise. Revisit it quarterly as your business evolves.

### 2. Program Architecture

Design your program tiers, incentives, and requirements with scalability in mind. A common mistake is over-engineering tier structures early on. Start with two tiers at most, and add complexity only when the data justifies it.

Key elements to define:
- **Tier criteria** — What earns a partner elevated status?
- **Incentive structure** — Margins, MDF, co-marketing, deal registration
- **Enablement requirements** — Certifications, training, co-sell readiness

### 3. Operational Readiness

Your internal team must be ready before you recruit externally. This means:
- A dedicated partner operations function (even if it's one person)
- CRM and PRM tooling configured for partner deal flow
- Clear internal rules of engagement between direct sales and partner-sourced deals

### 4. Measurement & Iteration

Define your KPIs before launch. We recommend tracking:
- Partner-sourced pipeline and revenue
- Partner-influenced revenue
- Time-to-first-deal for new partners
- Partner satisfaction (NPS or CSAT)

Review these monthly and iterate on program design based on what the data tells you.

## Getting Started

If you're building a partner program from scratch, start with strategic alignment. Everything else flows from there. And if you need a sounding board, [reach out](/contact) — we've seen what works and what doesn't across hundreds of partnerships.
    `,
  },
  {
    slug: "co-sell-motions-that-work",
    title: "Co-Sell Motions That Actually Work: Lessons From 150+ Partnerships",
    excerpt:
      "Co-selling fails when it's bolted on. We break down the three co-sell models that consistently drive pipeline and how to choose the right one.",
    author: "Jonathan Shore",
    authorImage: defaultAuthor.image,
    date: "February 24, 2026",
    readTime: "6 min read",
    category: "GTM Strategy",
    keyStats: [
      { value: "3", label: "Proven Co-Sell Models" },
      { value: "150+", label: "Partnerships Analyzed" },
      { value: "2–3x", label: "Pipeline Lift With Co-Sell" },
    ],
    tldr: "Co-selling works when it's treated as a structured motion, not an ad hoc activity. Start with warm introductions, graduate to joint solutions, and reserve embedded models for your most strategic partners.",
    content: `
## The Co-Sell Problem

Co-selling is one of the most talked-about concepts in partnerships — and one of the least well-executed. The reason is simple: most companies treat co-selling as an activity rather than a motion with its own architecture.

## Three Co-Sell Models That Work

### 1. The Warm Introduction Model

The simplest and most common. Partner A introduces Partner B to an existing opportunity. This works best when:
- Trust between sales teams is already established
- The introduction adds clear, immediate value to the prospect
- There's a lightweight process for tracking and crediting introductions

### 2. The Joint Solution Model

Both partners bring complementary capabilities to a shared opportunity. This requires:
- Pre-built solution narratives and joint value propositions
- Aligned discovery processes
- Shared account planning for target accounts

### 3. The Embedded Model

One partner's solution is deeply integrated into the other's sales process. This is the most complex but highest-yield model. It requires:
- Technical integration or bundling
- Joint enablement and certification
- Shared success metrics and revenue attribution

## Choosing the Right Model

Start with the Warm Introduction Model. It requires the least investment and builds the trust foundation needed for deeper motions. Move to Joint Solution selling once you've identified 3–5 repeatable use cases. Reserve the Embedded Model for your most strategic, highest-potential partnerships.

## Keys to Execution

Regardless of model, successful co-selling depends on:
- **Executive sponsorship** on both sides
- **Clear rules of engagement** to prevent channel conflict
- **Regular pipeline reviews** between partner sales leaders
- **Shared accountability** for outcomes, not just activities
    `,
  },
  {
    slug: "measuring-partner-influenced-revenue",
    title: "Beyond Sourced Revenue: How to Measure True Partner Influence",
    excerpt:
      "Partner-sourced revenue tells only half the story. Learn how leading companies quantify the full impact of their partner ecosystems.",
    author: "Jonathan Shore",
    authorImage: defaultAuthor.image,
    date: "February 10, 2026",
    readTime: "7 min read",
    category: "Revenue & Analytics",
    keyStats: [
      { value: "2–4x", label: "Influence vs. Sourced Revenue" },
      { value: "4", label: "Steps to Measure Influence" },
      { value: "30%+", label: "Higher Retention With Partners" },
    ],
    content: `
## The Sourced Revenue Trap

For years, partner teams have been measured primarily on partner-sourced revenue — deals that originated directly from a partner referral. While this metric matters, it dramatically understates the true value of your partner ecosystem.

## The Full Influence Picture

Partner influence shows up in multiple ways:

### Deal Acceleration
Partners often accelerate deals that were already in your pipeline. A technology partner's integration might eliminate a technical objection. A consulting partner's endorsement might build executive confidence. These contributions shorten sales cycles and improve win rates — but they don't show up in sourced revenue.

### Deal Expansion
Partners frequently drive upsell and cross-sell within existing accounts. A systems integrator might identify additional use cases during implementation. A technology partner's new integration might unlock a new department.

### Retention & Renewal
Customers with active partner integrations or who were implemented by a partner consistently show higher retention rates. This is arguably the most valuable form of partner influence, yet it's rarely measured.

## Building an Influence Measurement Framework

### Step 1: Define Touch Points
Map every point where a partner could influence a deal: referral, co-sell, integration, implementation, support, and renewal.

### Step 2: Instrument Your CRM
Add partner influence fields to your opportunity and account records. Make it easy for sales reps to tag partner involvement at any stage.

### Step 3: Analyze Cohorts
Compare deal metrics (win rate, deal size, sales cycle, retention) for partner-touched vs. non-partner-touched opportunities.

### Step 4: Report the Full Picture
Present partner influence alongside sourced revenue in your executive reporting. The combined view tells the real story of partner ecosystem value.

## The ROI Multiplier

In our experience, partner-influenced revenue typically runs 2–4x higher than partner-sourced revenue. When you add retention impact, the multiplier grows even larger. Companies that measure the full picture make better investment decisions about their partner programs.
    `,
  },
  {
    slug: "ecosystem-led-growth-playbook",
    title: "The Ecosystem-Led Growth Playbook for B2B SaaS",
    excerpt:
      "Ecosystem-led growth is replacing channel-led strategies. Here's how B2B SaaS companies can make the shift without losing momentum.",
    author: "Jonathan Shore",
    authorImage: defaultAuthor.image,
    date: "January 28, 2026",
    readTime: "10 min read",
    category: "Ecosystem Development",
    keyStats: [
      { value: "3", label: "Phases to ELG Maturity" },
      { value: "12mo", label: "Timeline to Scale" },
      { value: "20%+", label: "Pipeline From Ecosystem Plays" },
    ],
    content: `
## From Channel to Ecosystem

The traditional channel model — recruit partners, enable them, measure sourced revenue — is giving way to something more dynamic. Ecosystem-led growth (ELG) treats your entire partner network as an interconnected system that drives awareness, pipeline, and retention.

## What Makes ELG Different

### Multidirectional Value
In channel models, value flows in one direction: vendor to partner to customer. In ecosystems, value flows between all participants. Your technology partners refer consulting partners. Your consulting partners recommend complementary technologies. Customers become advocates who attract new partners.

### Data as the Connective Tissue
ELG is powered by shared data. Account mapping tools like Crossbeam and Reveal let partners identify overlapping customers and prospects without exposing sensitive data. This creates a foundation for intelligent co-selling and co-marketing.

### Community as a Growth Engine
The strongest ecosystems have vibrant communities — partner advisory councils, user groups, ecosystem events, and shared content platforms. Community accelerates trust-building and surfaces opportunities that formal processes miss.

## The ELG Playbook

### Phase 1: Foundation (Months 1–3)
- Map your existing ecosystem: technology partners, channel partners, integration partners, community contributors
- Deploy account mapping with your top 10 partners
- Identify 3–5 "ecosystem plays" — repeatable motions that involve multiple partners

### Phase 2: Activation (Months 4–6)
- Launch co-marketing campaigns built around ecosystem plays
- Establish a partner advisory council with diverse representation
- Build shared dashboards that track ecosystem-level metrics

### Phase 3: Scale (Months 7–12)
- Expand account mapping to your full partner base
- Develop an ecosystem certification or badge program
- Launch an annual ecosystem event or summit
- Invest in ecosystem operations tooling and headcount

## Measuring ELG Success

Traditional partner metrics still matter, but add ecosystem-specific KPIs:
- **Ecosystem-sourced pipeline** — Opportunities involving 2+ partners
- **Multi-partner deal percentage** — Share of deals with multiple partner touch points
- **Ecosystem network effects** — Rate of partner-to-partner referrals
- **Community health** — Engagement, contribution, and growth metrics
    `,
  },
  {
    slug: "partner-enablement-mistakes",
    title: "5 Partner Enablement Mistakes That Kill Deal Velocity",
    excerpt:
      "Enablement is where most partner programs silently fail. We identify the five most common mistakes and how to fix each one.",
    author: "Jonathan Shore",
    authorImage: defaultAuthor.image,
    date: "January 14, 2026",
    readTime: "5 min read",
    category: "Partner Operations",
    keyStats: [
      { value: "5", label: "Critical Mistakes Identified" },
      { value: "90 days", label: "Max Content Shelf Life" },
      { value: "2–4hrs", label: "Ideal Certification Length" },
    ],
    content: `
## The Silent Killer

Partner enablement doesn't get the attention it deserves. Companies invest heavily in partner recruitment and co-marketing but underinvest in the systems and content that help partners actually sell and deliver. The result: partners who are recruited but never productive.

## Mistake #1: Treating Partner Enablement Like Internal Sales Training

Your internal sales team lives and breathes your product. Partners don't. They need enablement that starts with the customer problem, not the product feature. Reframe your enablement around use cases, competitive positioning, and objection handling — not product walkthroughs.

## Mistake #2: One-Size-Fits-All Content

Different partner types need different content. A technology partner integrating your API needs technical documentation and architecture diagrams. A reseller needs competitive battle cards and ROI calculators. A consulting partner needs methodology frameworks and project scoping tools. Segment your enablement by partner type.

## Mistake #3: No Certification Path

Partners need a clear path from onboarding to proficiency. Without certification, there's no way to measure readiness or create accountability. Design a lightweight certification that takes 2–4 hours to complete and validates core competencies.

## Mistake #4: Static Content in a Dynamic Market

If your enablement materials are more than 90 days old, they're probably stale. Markets move fast. Competitors launch new features. Customer needs evolve. Build a quarterly enablement refresh into your partner operations cadence.

## Mistake #5: No Feedback Loop

The best enablement programs are built with partner input. Establish a regular feedback mechanism — surveys, advisory council discussions, or simple post-deal retrospectives — to understand what's working and what's missing.

## The Fix

Start by auditing your current enablement against these five mistakes. Prioritize the gaps that are closest to revenue — usually Mistakes #1 and #2. Then build a quarterly enablement roadmap that addresses the rest systematically.
    `,
  },
  {
    slug: "fractional-cpo-when-to-hire",
    title: "When Does Your Company Need a Fractional Chief Partner Officer?",
    excerpt:
      "Not every company needs a full-time partnership leader from day one. Here's how to know when fractional CPO support is the right move.",
    author: "Jonathan Shore",
    authorImage: defaultAuthor.image,
    date: "December 30, 2025",
    readTime: "6 min read",
    category: "Executive Advisory",
    keyStats: [
      { value: "2–4", label: "Days/Month Typical Engagement" },
      { value: "20%+", label: "Revenue Threshold for FTE" },
      { value: "5+", label: "Team Size Signals Full-Time" },
    ],
    content: `
## The Partnership Leadership Gap

Many companies recognize that partnerships are critical to growth but aren't ready — or able — to hire a full-time Chief Partner Officer or VP of Partnerships. The role requires a rare combination of strategic thinking, operational discipline, and relationship-building skills. The talent pool is small, and the compensation expectations are high.

This is where fractional leadership comes in.

## What a Fractional CPO Does

A fractional CPO provides senior partnership leadership on a part-time basis. Typical engagements involve 2–4 days per month and cover:

- **Strategy development** — Defining your partnership vision, ideal partner profiles, and go-to-market motions
- **Program architecture** — Designing tier structures, incentive models, and operational workflows
- **Team development** — Coaching and mentoring existing partnership staff
- **Executive alignment** — Ensuring partnership strategy is integrated with company-wide goals
- **Key relationship management** — Leading conversations with your most strategic partners

## When Fractional Makes Sense

### You're exploring partnerships for the first time
If you're not sure whether partnerships should be a major growth lever, a fractional CPO can help you test the thesis without a full-time commitment.

### You have a small partner team that needs senior guidance
Maybe you have a partner manager or two, but no one with the experience to set strategy and build program architecture. A fractional CPO provides the senior leadership layer.

### You're between full-time hires
If your VP of Partnerships left and you need time to find the right replacement, a fractional CPO keeps the program moving forward.

### You need specialized expertise for a specific initiative
Launching a new partner program, entering a new market through partnerships, or redesigning your channel strategy — these are finite projects that benefit from experienced leadership.

## When to Go Full-Time

Consider a full-time hire when:
- Partnerships consistently represent 20%+ of revenue
- You have 5+ people on the partnership team
- Partner operations require daily executive attention
- You're ready to invest in partnerships as a core growth engine

## Making the Transition

The best fractional engagements are designed with a transition in mind. A good fractional CPO will help you define the full-time role, build the business case for the hire, and ensure a smooth handoff. At Shore Strategy, we build transition planning into every fractional engagement.
    `,
  },
];

export const categories = [...new Set(posts.map((p) => p.category))];
