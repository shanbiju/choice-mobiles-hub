import { Phone, MapPin, Clock, Mail, ExternalLink } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const PHONE = "+919745555974";
const EMAIL = "choicecorner1@gmail.com";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Kodakara+Thrissur+Kerala+India";

const contactItems = [
  { icon: Phone,  label: "+91 97455 55974",         href: `tel:${PHONE}`,             external: false, gradient: "linear-gradient(135deg,#7C3AED,#EC4899)", shadow: "rgba(124,58,237,0.4)" },
  { icon: MapPin, label: "Kodakara, Thrissur, Kerala", href: MAPS_URL,                external: true,  gradient: "linear-gradient(135deg,#06B6D4,#3B82F6)", shadow: "rgba(6,182,212,0.4)" },
  { icon: Clock,  label: "Open 7 Days a Week",       href: null,                      external: false, gradient: "linear-gradient(135deg,#10B981,#FBBF24)", shadow: "rgba(16,185,129,0.4)" },
  { icon: Mail,   label: EMAIL,                       href: `mailto:${EMAIL}`,          external: false, gradient: "linear-gradient(135deg,#F97316,#FBBF24)", shadow: "rgba(249,115,22,0.4)" },
];

const FooterSection = () => (
  <footer id="contact" className="relative overflow-hidden" role="contentinfo" style={{ background: "var(--gradient-hero)" }}>
    {/* Top rainbow bar */}
    <div className="h-1" style={{ background: "linear-gradient(90deg,#7C3AED,#EC4899,#F97316,#FBBF24,#10B981,#06B6D4)" }} />

    {/* Orbs */}
    <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-30"
      style={{ background: "radial-gradient(circle,rgba(236,72,153,0.5) 0%,transparent 70%)", filter: "blur(50px)" }} />
    <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none opacity-30"
      style={{ background: "radial-gradient(circle,rgba(124,58,237,0.5) 0%,transparent 70%)", filter: "blur(50px)" }} />

    <div className="relative container py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-12">

        {/* Brand */}
        <AnimateOnScroll>
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#FBBF24,#F97316)" }}>
                <Phone className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display text-2xl font-black text-white">Choice Corner</h3>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Your trusted mobile destination since 2003. Authorized dealer,
              expert repairs, and complete mobile solutions in Kodakara, Thrissur.
            </p>
            <div className="flex gap-3">
              {["📱", "🔧", "⚡"].map((emoji, i) => (
                <div key={i} className="w-10 h-10 rounded-xl flex items-center justify-center text-base cursor-pointer transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}>
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Quick Links */}
        <AnimateOnScroll delay={100}>
          <nav aria-label="Quick links">
            <h4 className="font-display font-black mb-6 text-sm tracking-wider uppercase" style={{ background: "linear-gradient(135deg,#FBBF24,#F97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-white/55 story-link">
              {[["#services","Our Services"],["#brands","Authorized Brands"],["#accessories","Accessories"],["#contact","Contact Us"]].map(([href,label]) => (
                <li key={label}><a href={href} className="hover:text-white transition-colors duration-200">{label}</a></li>
              ))}
            </ul>
          </nav>
        </AnimateOnScroll>

        {/* Contact */}
        <AnimateOnScroll delay={200}>
          <address className="not-italic">
            <h4 className="font-display font-black mb-6 text-sm tracking-wider uppercase" style={{ background: "linear-gradient(135deg,#06B6D4,#3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactItems.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a href={item.href} target={item.external ? "_blank" : undefined}
                       rel={item.external ? "noopener noreferrer" : undefined}
                       className="flex items-center gap-3 text-white/55 hover:text-white transition-colors duration-200 group text-sm">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{ background: item.gradient, boxShadow: `0 4px 15px ${item.shadow}` }}>
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="break-all">{item.label}</span>
                      {item.external && <ExternalLink className="w-3 h-3 opacity-40 flex-shrink-0" />}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 text-white/55 text-sm">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: item.gradient, boxShadow: `0 4px 15px ${item.shadow}` }}>
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <span>{item.label}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </address>
        </AnimateOnScroll>
      </div>

      {/* Map */}
      <AnimateOnScroll>
        <div className="rounded-2xl overflow-hidden mb-10" style={{ border: "1.5px solid rgba(255,255,255,0.15)", boxShadow: "0 0 40px rgba(124,58,237,0.2)" }}>
          <iframe
            title="Choice Corner Location - Kodakara, Thrissur"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31394.80984696!2d76.3!3d10.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f5c0e1e3e8b1%3A0x4b0e3e2e1e1e1e1e!2sKodakara%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%" height="260" style={{ border: 0 }}
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </AnimateOnScroll>

      {/* Bottom bar */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <p>© {new Date().getFullYear()} Choice Corner. All rights reserved.</p>
        <p className="flex items-center gap-1">Built with <span className="text-red-400 text-base">♥</span> in Kerala, India</p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
