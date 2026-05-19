import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const Privacy = () => {
  return (
    <Layout>
      <SEOHead
        title="Privacy Policy"
        description="How Shore Strategy collects, uses, and protects your personal information."
        canonical="/privacy"
      />

      {/* Hero */}
      <section className="bg-navy px-6 pt-16 pb-10 md:px-12 md:pt-20 md:pb-14 lg:px-24">
        <div className="container">
          <p className="text-gold font-body text-sm uppercase tracking-[0.2em] mb-3">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Privacy <span className="text-gold">Policy</span>
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-2xl">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream px-6 py-12 md:px-12 lg:px-24 lg:py-16">
        <div className="container max-w-3xl space-y-10">
          {/* Overview */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Overview</h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              Shore Strategy Consulting, LLC respects your privacy. This policy explains what information we collect, how we use it, and your rights regarding that information. It applies to visitors of shore-strategy.com and anyone who submits information through our contact form or schedules a call.
            </p>
          </div>

          {/* What we collect */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">What We Collect</h2>
            <ul className="font-body text-muted-foreground leading-relaxed list-disc pl-5 space-y-2">
              <li>
                <strong>Contact form submissions:</strong> Name, email address, company name, and any message you choose to include.
              </li>
              <li>
                <strong>Scheduling information:</strong> Name and email collected via Calendly when you book a discovery call.
              </li>
              <li>
                <strong>Technical data:</strong> Standard server logs and analytics data (IP address, browser type, pages visited) collected automatically when you browse the site.
              </li>
            </ul>
          </div>

          {/* How we use it */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">How We Use Your Information</h2>
            <ul className="font-body text-muted-foreground leading-relaxed list-disc pl-5 space-y-2">
              <li>To respond to inquiries submitted through the contact form.</li>
              <li>To confirm and manage discovery calls scheduled through Calendly.</li>
              <li>To send occasional, relevant communications about partner ecosystem strategy (only if you opt in).</li>
              <li>To improve the website experience through anonymous analytics.</li>
            </ul>
          </div>

          {/* How we share it */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">How We Share Your Information</h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              We do not sell your personal information. We share data only with the following service providers necessary to operate the site and deliver services:
            </p>
            <ul className="font-body text-muted-foreground leading-relaxed list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Calendly:</strong> For scheduling discovery calls.
              </li>
              <li>
                <strong>Backend infrastructure:</strong> For securely storing contact form submissions and managing email communications.
              </li>
            </ul>
          </div>

          {/* Data retention */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Data Retention</h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              We retain contact information for as long as necessary to fulfill the purpose for which it was collected, or as required by law. You may request deletion of your data at any time by contacting us directly.
            </p>
          </div>

          {/* Your rights */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Your Rights</h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              You have the right to access, correct, or delete your personal information. You may also opt out of any marketing communications at any time. To exercise these rights, email us at{" "}
              <a href="mailto:jonathan@shore-strategy.com" className="text-navy underline hover:text-gold transition-colors">
                jonathan@shore-strategy.com
              </a>.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Cookies & Tracking</h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              This site uses minimal cookies for basic functionality and analytics. You can control cookies through your browser settings. We do not use third-party advertising cookies or tracking pixels.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Changes to This Policy</h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">Contact</h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              For questions about this privacy policy or your personal data, contact{" "}
              <a href="mailto:jonathan@shore-strategy.com" className="text-navy underline hover:text-gold transition-colors">
                jonathan@shore-strategy.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
