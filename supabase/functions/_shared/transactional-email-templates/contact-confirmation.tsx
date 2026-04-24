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
const CALENDLY_URL = 'https://calendly.com/jonathan-n-shore'
const LINKEDIN_URL = 'https://www.linkedin.com/in/jonathan-shore/'

interface ContactConfirmationProps {
  name?: string
}

const ContactConfirmationEmail = ({ name }: ContactConfirmationProps) => {
  const greeting = name ? `Hi ${name},` : 'Hello,'
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Thanks for reaching out — I'll be in touch within 24 hours.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={brand}>SHORE STRATEGY</Heading>
            <Text style={tagline}>Partner Ecosystem Strategy &amp; Execution</Text>
          </Section>

          <Section style={content}>
            <Heading style={h1}>Thanks for reaching out</Heading>

            <Text style={text}>{greeting}</Text>

            <Text style={text}>
              Your message just landed in my inbox. I personally read every
              note that comes through, and I'll get back to you within{' '}
              <strong>one business day</strong>.
            </Text>

            <Text style={text}>
              In the meantime, if it's easier to talk live, you're welcome to
              grab time directly on my calendar:
            </Text>

            <Section style={ctaWrap}>
              <Link href={CALENDLY_URL} style={cta}>
                Book a 30-minute intro call →
              </Link>
            </Section>

            <Hr style={divider} />

            <Text style={signature}>
              Talk soon,
              <br />
              <strong>Jonathan Shore</strong>
              <br />
              <span style={signatureRole}>Founder, {SITE_NAME}</span>
            </Text>

            <Text style={links}>
              <Link href="https://www.shore-strategy.com" style={linkStyle}>
                shore-strategy.com
              </Link>
              {'  ·  '}
              <Link href={LINKEDIN_URL} style={linkStyle}>
                LinkedIn
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: ContactConfirmationEmail,
  subject: "Thanks for reaching out — I'll be in touch within 24 hours",
  displayName: 'Contact form confirmation',
  previewData: { name: 'Jane' },
} satisfies TemplateEntry

const main: React.CSSProperties = {
  backgroundColor: '#ffffff',
  fontFamily:
    "'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  margin: 0,
  padding: 0,
}

const container: React.CSSProperties = {
  maxWidth: '560px',
  margin: '0 auto',
  padding: '40px 24px',
}

const header: React.CSSProperties = {
  textAlign: 'center',
  paddingBottom: '32px',
  borderBottom: '2px solid #C9A84C',
  marginBottom: '32px',
}

const brand: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: '28px',
  fontWeight: 600,
  letterSpacing: '4px',
  color: '#1B2A4A',
  margin: '0 0 8px',
  lineHeight: 1.2,
}

const tagline: React.CSSProperties = {
  fontSize: '12px',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  color: '#6b7280',
  margin: 0,
}

const content: React.CSSProperties = {
  padding: '0 4px',
}

const h1: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: '28px',
  fontWeight: 600,
  color: '#1B2A4A',
  margin: '0 0 24px',
  lineHeight: 1.3,
}

const text: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: 1.6,
  color: '#374151',
  margin: '0 0 18px',
}

const ctaWrap: React.CSSProperties = {
  textAlign: 'center',
  margin: '28px 0 8px',
}

const cta: React.CSSProperties = {
  display: 'inline-block',
  backgroundColor: '#1B2A4A',
  color: '#C9A84C',
  padding: '14px 28px',
  borderRadius: '6px',
  textDecoration: 'none',
  fontSize: '15px',
  fontWeight: 600,
  letterSpacing: '0.3px',
}

const divider: React.CSSProperties = {
  border: 'none',
  borderTop: '1px solid #e5e7eb',
  margin: '36px 0 24px',
}

const signature: React.CSSProperties = {
  fontSize: '15px',
  lineHeight: 1.6,
  color: '#374151',
  margin: '0 0 16px',
}

const signatureRole: React.CSSProperties = {
  color: '#6b7280',
  fontSize: '14px',
}

const links: React.CSSProperties = {
  fontSize: '13px',
  color: '#9ca3af',
  margin: 0,
}

const linkStyle: React.CSSProperties = {
  color: '#1B2A4A',
  textDecoration: 'none',
  fontWeight: 500,
}