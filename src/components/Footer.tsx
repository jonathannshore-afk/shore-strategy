import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground/70">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="font-display text-xl font-bold text-gold">Jonathan</span>
              <span className="font-display text-xl font-light text-primary-foreground">Shore</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Partner Ecosystem Strategy & Operations executive. Available for fractional leadership roles and full-time opportunities.
            </p>
            <a
              href="https://www.linkedin.com/in/jonathan-shore/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-gold hover:text-gold-dark transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Insights", path: "/blog" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <span>jonathan.n.shore@gmail.com</span>
              <span>San Francisco Bay Area</span>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-light mt-12 pt-8 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Jonathan Shore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
