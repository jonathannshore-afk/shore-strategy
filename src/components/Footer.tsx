import { Link } from "react-router-dom";
import { CalendarCheck, Linkedin } from "lucide-react";
import { trackCalendlyClick } from "@/lib/calendlyTracking";
import DiscoveryCallReassurance from "@/components/DiscoveryCallReassurance";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground/70 border-t border-gold/30">
      <div className="container pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2 mb-3">
              <span className="font-display text-2xl font-bold text-gold">Jonathan</span>
              <span className="font-display text-2xl font-light text-primary-foreground">Shore</span>
            </Link>
            <p className="font-body text-sm text-primary-foreground/75 max-w-sm leading-relaxed">
              Partner Ecosystem Strategist helping B2B technology companies build, fix, and scale partner ecosystems that drive revenue growth.
            </p>
          </div>

          {/* Right — CTA */}
          <div className="text-left md:text-right">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Ready to Accelerate Your Partner Ecosystem?
            </h2>
            <p className="font-body text-sm text-primary-foreground/75 mb-6">
              Start with a free 30-minute discovery call. No prep, no obligation — just a clear point of view on your ecosystem.
            </p>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <Link
                to="/contact#calendly"
                onClick={() => trackCalendlyClick("cta_click", "/contact#calendly", { location: "footer" })}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
              >
                <CalendarCheck size={16} /> Book a Call
              </Link>

              <a
                href="https://www.linkedin.com/in/jonathan-shore/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-body font-semibold rounded hover:border-gold hover:text-gold transition-colors"
              >
                <Linkedin size={16} /> Follow on LinkedIn
              </a>
            </div>
            <div className="mt-4 md:flex md:justify-end">
              <DiscoveryCallReassurance variant="dark" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-light">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/70">
          <span>© {new Date().getFullYear()} Shore Strategy Consulting, LLC. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <span>·</span>
            <a href="mailto:jonathan@shore-strategy.com?subject=Partner%20Strategy%20Inquiry" className="hover:text-gold transition-colors">jonathan@shore-strategy.com</a>
            <span>·</span>
            <span>San Francisco Bay Area</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
