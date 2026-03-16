import { Link } from "react-router-dom";
import { CalendarCheck, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground/70">
      <div className="container pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2 mb-3">
              <span className="font-display text-2xl font-bold text-gold">Jonathan</span>
              <span className="font-display text-2xl font-light text-primary-foreground">Shore</span>
            </Link>
            <p className="font-body text-sm text-primary-foreground/60 max-w-sm leading-relaxed">
              Partner Ecosystem Strategy & Operations executive. Available for fractional leadership roles and full-time opportunities.
            </p>
          </div>

          {/* Right — CTA */}
          <div className="text-left md:text-right">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Looking for a Partner Ecosystem Leader?
            </h2>
            <p className="font-body text-sm text-primary-foreground/60 mb-6">
              Let's talk about how I can help accelerate your partner-led growth.
            </p>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <Link
                to="/contact"
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
                <Linkedin size={16} /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-light">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
          <span>© {new Date().getFullYear()} Jonathan Shore. All rights reserved.</span>
          <span>jonathan.n.shore@gmail.com · San Francisco Bay Area</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
