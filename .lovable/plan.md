Change every discovery-call duration reference to "30-minute" and every booking CTA button to "Book a Discovery Call", with one noted exception.

**Files to edit:**

1. `src/components/DiscoveryCallReassurance.tsx`
   - Change "25-minute discovery call" → "30-minute discovery call"
   - This single change fixes the microcopy on Home hero, Footer, and About automatically.

2. `src/pages/Index.tsx`
   - No direct text change needed (uses the component above), but confirm the hero and closing block render correctly after the component update.

3. `src/pages/Contact.tsx`
   - SEO description: "25-minute discovery call" → "30-minute discovery call"
   - "How I Can Help" bullet: "25-minute discovery call" → "30-minute discovery call"
   - Calendly section heading: "Book a Conversation" → "Book a Discovery Call"
   - "Prefer to schedule directly?" link: "Book a Conversation" → "Book a Discovery Call"

4. `src/pages/FAQ.tsx`
   - FAQ question: "What happens during the 25-minute discovery call?" → "30-minute discovery call"

5. `src/pages/About.tsx`
   - CTA button: "Book a Call" → "Book a Discovery Call"

6. `src/components/Footer.tsx`
   - CTA button: "Book a Call" → "Book a Discovery Call"

7. `src/pages/FractionalVsConsultingVsFte.tsx`
   - Mid-page CTA button: "Book a Strategy Call" → "Book a Discovery Call"

**Do NOT change:**
- How I Work "Book a Scoping Call" button inside the Partner Ecosystem Diagnostic section (deliberately distinct call).
- Contact form submit button "Send Message".

**Already consistent — no edits needed:**
- About, Services, FAQ body text, and Fractional-vs-Consulting-vs-FTE footer already reference "30-minute" correctly.
