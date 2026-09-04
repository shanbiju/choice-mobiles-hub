import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Brands", href: "#brands" },
  { label: "Accessories", href: "#accessories" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      if (progressRef.current) {
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docH > 0 ? (window.scrollY / docH) * 100 : 0;
        progressRef.current.style.width = `${pct}%`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      <div ref={progressRef} id="scroll-progress" style={{ width: "0%" }} />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-violet-100"
            : "bg-white/70 backdrop-blur-md"
        }`}
        style={{ marginTop: "3px" }}
      >
        <div className="container flex items-center justify-between h-16 lg:h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
              style={{ background: "linear-gradient(135deg, #7C3AED, #EC4899)" }}
            >
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-display font-black text-lg text-gradient leading-none block">
                Choice Corner
              </span>
              <span className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">
                Since 2003
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="nav-link text-sm text-gray-600 hover:text-violet-700 px-4 py-2 rounded-xl hover:bg-violet-50 transition-all duration-200 font-semibold"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-2 p-2 rounded-xl border border-gray-200 text-gray-500 hover:text-violet-600 hover:border-violet-300 hover:bg-violet-50 transition-all"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a href="tel:+919745555974" className="ml-3">
              <button className="btn-cta text-sm py-2.5 px-5">
                <Phone className="w-4 h-4" /> Call Now
              </button>
            </a>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl border border-gray-200 text-gray-500 hover:text-violet-600 transition-all"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-violet-50 hover:border-violet-300 transition-all"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-violet-100 animate-fade-in">
            <div className="px-4 py-5 flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 hover:text-violet-700 hover:bg-violet-50 py-4 px-4 rounded-xl font-semibold transition-all nav-link text-base active:bg-violet-100"
                >
                  {l.label}
                </a>
              ))}
              <a href="tel:+919745555974" className="mt-3">
                <button className="btn-cta w-full justify-center">
                  <Phone className="w-4 h-4" /> Call Now
                </button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
