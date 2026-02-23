import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Brands", href: "#brands" },
  { label: "Accessories", href: "#accessories" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-accent-gradient flex items-center justify-center">
            <Phone className="w-5 h-5 text-accent-foreground" />
          </div>
          <div>
            <span className="font-display font-bold text-lg text-primary-foreground leading-none block">
              Choice Corner
            </span>
            <span className="text-[10px] text-primary-foreground/50 tracking-wider uppercase">Since 2003</span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-primary-foreground/70 hover:text-accent transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:+919745555974">
            <Button variant="hero" size="sm">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 animate-fade-in">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-primary-foreground/70 hover:text-accent py-2 font-medium"
              >
                {l.label}
              </a>
            ))}
            <a href="tel:+919745555974">
              <Button variant="hero" size="sm" className="w-fit mt-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
