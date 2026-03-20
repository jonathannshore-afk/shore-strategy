import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  // { label: "Insights", path: "/blog" }, // Hidden until ready
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-navy-light">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl md:text-2xl font-bold text-gold">Jonathan</span>
            <span className="font-display text-xl md:text-2xl font-light text-primary-foreground">Shore</span>
          </div>
          <span className="font-body text-[10px] md:text-xs uppercase tracking-[0.15em] text-primary-foreground/60">Partner Ecosystem Strategy Executive</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-body font-medium tracking-wide uppercase transition-colors hover:text-gold ${
                location.pathname === link.path ? "text-gold" : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 px-5 py-2 text-sm font-medium uppercase tracking-wide bg-gold text-accent-foreground rounded hover:bg-gold-dark transition-colors"
          >
            Let's Talk
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-navy-light">
          <nav className="container flex flex-col py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-body font-medium tracking-wide uppercase transition-colors hover:text-gold ${
                  location.pathname === link.path ? "text-gold" : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-5 py-2 text-sm font-medium uppercase tracking-wide bg-gold text-accent-foreground rounded text-center hover:bg-gold-dark transition-colors"
            >
              Let's Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
