import { Link } from "react-router-dom";
import { CalendarCheck, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground/70">
      {/* CTA */}
      <div className="container pt-16 pb-12 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Looking for a Partner Ecosystem Leader?
        </h2>
        <p className="font-body text-lg text-primary-foreground/70 max-w-xl mx-auto mb-8">
          I'm available for fractional or full-time partner strategy roles. Let's talk about how I can help accelerate your partner-led growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-accent-foreground font-body font-semibold rounded hover:bg-gold-dark transition-colors"
          >
            <CalendarCheck size={18} /> Book a Call
          </Link>
          <a
            href="https://www.linkedin.com/in/jonathan-shore/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground font-body font-semibold rounded hover:border-gold hover:text-gold transition-colors"
          >
            <Linkedin size={16} /> Connect on LinkedIn
          </a>
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
