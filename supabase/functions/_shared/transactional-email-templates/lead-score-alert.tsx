import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Shore Strategy'

interface LeadScoreAlertProps {
  leadName?: string
  leadEmail?: string
  leadCompany?: string | null
  rawMessage?: string
  score?: number | null
  tier?: 'hot' | 'warm' | 'cold' | 'unscored'
  fitScore?: number | null
  intentScore?: number | null
  rationale?: string
  signals?: string[]
  suggestedNextStep?: string
  bdPushStatus?: 'success' | 'failed' | 'skipped'
}

const tierMeta = (tier?: string) => {
  switch (tier) {
    case 'hot':
      return { label: 'HOT', color: '#b91c1c', bg: '#fef2f2', border: '#fecaca' }
    case 'warm':
      return { label: 'WARM', color: '#b45309', bg: '#fffbeb', border: '#fde68a' }
    case 'cold':
      return { label: 'COLD', color: '#1e40af', bg: '#eff6ff', border: '#bfdbfe' }
    default:
      return { label: 'UNSCORED', color: '#374151', bg: '#f3f4f6', border: '#e5e7eb' }
  }
}

const LeadScoreAlertEmail = ({
  leadName = 'Unknown',
  leadEmail = '',
  leadCompany,
  rawMessage = '',
  score = null,
  tier = 'unscored',
  fitScore = null,
  intentScore = null,
  rationale = '',
  signals = [],
  suggestedNextStep = '',
  bdPushStatus = 'skipped',
}: LeadScoreAlertProps) => {
  const meta = tierMeta(tier)
  const replyHref = `mailto:${leadEmail}?subject=${encodeURIComponent(
    `Re: your message to Shore Strategy`,
  )}`
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        {`[${meta.label}${score !== null ? ` ${score}` : ''}] ${leadName}${
          leadCompany ? ` · ${leadCompany}` : ''
        }`}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={brand}>SHORE STRATEGY</Heading>
            <Text style={tagline}>Lead score alert</Text>
          </Section>

          <Section style={content}>
            <Section
              style={{
                ...tierBadgeWrap,
                backgroundColor: meta.bg,
                borderColor: meta.border,
              }}
            >
              <Text style={{ ...tierBadge, color: meta.color }}>
                {meta.label}
                {score !== null ? ` · ${score} / 100` : ''}
              </Text>
              {fitScore !== null && intentScore !== null ? (
                <Text style={tierSub}>
                  Fit {fitScore}/50 · Intent {intentScore}/50
                </Text>
              ) : null}
            </Section>

            <Heading style={h1}>
              {leadName}
              {leadCompany ? ` · ${leadCompany}` : ''}
            </Heading>

            <Text style={meta1}>
              <Link href={`mailto:${leadEmail}`} style={linkStyle}>
                {leadEmail}
              </Link>
            </Text>

            {rationale ? (
              <>
                <Text style={sectionLabel}>Why this score</Text>
                <Text style={text}>{rationale}</Text>
              </>
            ) : null}

            {signals && signals.length > 0 ? (
              <>
                <Text style={sectionLabel}>Signals</Text>
                {signals.map((s, i) => (
                  <Text key={i} style={bullet}>
                    • {s}
                  </Text>
                ))}
              </>
            ) : null}

            {suggestedNextStep ? (
              <>
                <Text style={sectionLabel}>Suggested next step</Text>
                <Text style={text}>{suggestedNextStep}</Text>
              </>
            ) : null}

            <Hr style={divider} />

            <Text style={sectionLabel}>Their message</Text>
            <Text style={quote}>{rawMessage}</Text>

            <Section style={ctaWrap}>
              <Link href={replyHref} style={cta}>
                Reply to {leadName.split(' ')[0] || 'lead'} →
              </Link>
            </Section>

            <Hr style={divider} />

            <Text style={footer}>
              {bdPushStatus === 'success'
                ? 'Lead pushed to BD Command Center · scored_leads'
                : bdPushStatus === 'failed'
                ? 'BD Command Center push failed — check edge function logs'
                : 'BD Command Center push skipped'}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: LeadScoreAlertEmail,
  subject: (data: Record<string, any>) => {
    const tier = (data?.tier ?? 'unscored').toString().toUpperCase()
    const score = data?.score
    const name = data?.leadName ?? 'New lead'
    const company = data?.leadCompany ? ` at ${data.leadCompany}` : ''
    const scorePart = typeof score === 'number' ? ` ${score}` : ''
    return `[${tier}${scorePart}] New lead — ${name}${company}`
  },
  displayName: 'Lead score alert',
  previewData: {
    leadName: 'Sarah Chen',
    leadEmail: 'sarah@acme.com',
    leadCompany: 'Acme',
    rawMessage:
      "Hi Jonathan — we just lost our head of partnerships and need to rebuild our channel program before Q1. Saw your ServiceNow work and would love to chat about a fractional engagement. Budget is in the $30-50k/mo range.",
    score: 87,
    tier: 'hot',
    fitScore: 45,
    intentScore: 42,
    rationale:
      'Senior partnerships title at a fast-growing SaaS company with a clear, named problem and budget range. Direct ICP match.',
    signals: [
      'VP-level partnerships title — exact ICP',
      'Specific trigger event: lost head of partnerships',
      'Named timeline (Q1) and budget range ($30-50k/mo)',
      'References Shore Strategy case study (ServiceNow)',
    ],
    suggestedNextStep:
      'Reply within 24h. Lead with ServiceNow channel rebuild story. Offer 30-min intro call, not the assessment.',
    bdPushStatus: 'success',
  },
} satisfies TemplateEntry

const main: React.CSSProperties = {
  backgroundColor: '#ffffff',
  fontFamily:
    "'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  margin: 0,
  padding: 0,
}

const container: React.CSSProperties = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '40px 24px',
}

const header: React.CSSProperties = {
  textAlign: 'center',
  paddingBottom: '24px',
  borderBottom: '2px solid #C9A84C',
  marginBottom: '24px',
}

const brand: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: '24px',
  fontWeight: 600,
  letterSpacing: '4px',
  color: '#1B2A4A',
  margin: '0 0 6px',
}

const tagline: React.CSSProperties = {
  fontSize: '11px',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  color: '#6b7280',
  margin: 0,
}

const content: React.CSSProperties = {
  padding: '0 4px',
}

const tierBadgeWrap: React.CSSProperties = {
  border: '1px solid',
  borderRadius: '8px',
  padding: '14px 18px',
  marginBottom: '20px',
  textAlign: 'center',
}

const tierBadge: React.CSSProperties = {
  fontSize: '20px',
  fontWeight: 700,
  letterSpacing: '1px',
  margin: 0,
}

const tierSub: React.CSSProperties = {
  fontSize: '13px',
  color: '#374151',
  margin: '4px 0 0',
  fontWeight: 500,
}

const h1: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: '24px',
  fontWeight: 600,
  color: '#1B2A4A',
  margin: '0 0 6px',
  lineHeight: 1.3,
}

const meta1: React.CSSProperties = {
  fontSize: '14px',
  color: '#6b7280',
  margin: '0 0 24px',
}

const sectionLabel: React.CSSProperties = {
  fontSize: '11px',
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  color: '#6b7280',
  fontWeight: 600,
  margin: '20px 0 8px',
}

const text: React.CSSProperties = {
  fontSize: '15px',
  lineHeight: 1.6,
  color: '#374151',
  margin: '0 0 12px',
}

const bullet: React.CSSProperties = {
  fontSize: '14px',
  lineHeight: 1.5,
  color: '#374151',
  margin: '0 0 4px',
  paddingLeft: '4px',
}

const quote: React.CSSProperties = {
  fontSize: '14px',
  lineHeight: 1.6,
  color: '#374151',
  margin: '0 0 12px',
  padding: '14px 18px',
  backgroundColor: '#f9fafb',
  borderLeft: '3px solid #C9A84C',
  borderRadius: '4px',
  whiteSpace: 'pre-wrap',
}

const ctaWrap: React.CSSProperties = {
  textAlign: 'center',
  margin: '24px 0 8px',
}

const cta: React.CSSProperties = {
  display: 'inline-block',
  backgroundColor: '#1B2A4A',
  color: '#C9A84C',
  padding: '12px 24px',
  borderRadius: '6px',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: 600,
  letterSpacing: '0.3px',
}

const divider: React.CSSProperties = {
  border: 'none',
  borderTop: '1px solid #e5e7eb',
  margin: '28px 0 20px',
}

const footer: React.CSSProperties = {
  fontSize: '12px',
  color: '#9ca3af',
  margin: 0,
  textAlign: 'center',
}

const linkStyle: React.CSSProperties = {
  color: '#1B2A4A',
  textDecoration: 'none',
  fontWeight: 500,
}