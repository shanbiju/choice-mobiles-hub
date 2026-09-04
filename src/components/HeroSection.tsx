import { useEffect, useRef, useState } from "react";
import { Phone, MapPin, Clock, Shield, ChevronDown, Star } from "lucide-react";

const WORDS = ["Mobile Destination", "Tech Hub", "Repair Center", "Accessory Store"];

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else {
      setIsDeleting(false);
      setWordIndex((p) => (p + 1) % WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  useEffect(() => {
    // Only add parallax on non-touch devices
    if ('ontouchstart' in window) return;
    const handleMouse = (e: MouseEvent) => {
      if (!phoneRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      phoneRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Vivid orbs */}
      <div className="orb orb-pink    w-[450px] h-[450px] -top-20 -right-20 opacity-70" style={{ animation: "orb-move-2 9s ease-in-out infinite" }} />
      <div className="orb orb-violet  w-[500px] h-[500px] bottom-0 -left-32 opacity-60" style={{ animation: "orb-move-1 11s ease-in-out infinite" }} />
      <div className="orb orb-orange  w-[280px] h-[280px] top-1/3 right-1/3 opacity-40" style={{ animation: "orb-move-2 7s ease-in-out infinite 2s" }} />
      <div className="orb orb-cyan    w-[200px] h-[200px] bottom-1/4 right-1/4 opacity-35" style={{ animation: "orb-move-1 13s ease-in-out infinite 1s" }} />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="container relative z-10 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left — text */}
          <div className="flex-1 max-w-2xl animate-fade-in-up w-full">
            {/* Rating badge */}
            <a 
              href="https://share.google/M58dK9FJJsIooLH5U" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 glass-dark px-4 py-2 rounded-full mb-6 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-white/90 group-hover:text-white">
                5.0 Rating · Read Reviews
              </span>
            </a>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.08] mb-5 drop-shadow-lg">
              Your One-Stop
              <br />
              <span style={{ background: "linear-gradient(135deg, #FBBF24, #FDE68A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {displayed}
                <span className="typewriter-cursor" />
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-white/70 mb-8 max-w-lg leading-relaxed">
              Authorized dealer of top brands. New &amp; used mobiles, accessories,
              recharge services, SIM activation &amp; expert repairs — all under one roof.
            </p>

            {/* CTAs — full width on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a href="tel:+919745555974" className="w-full sm:w-auto">
                <button className="btn-cta text-base w-full justify-center min-h-[52px]">
                  <Phone className="w-5 h-5" /> Call Now
                </button>
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=Kodakara+Thrissur+Kerala+India" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="btn-outline text-base w-full justify-center min-h-[52px]">
                  <MapPin className="w-5 h-5" /> Visit Store
                </button>
              </a>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="glass-dark flex items-center gap-2 px-4 py-2 rounded-full text-white/80">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span>Open 6 Days</span>
              </div>
              <div className="glass-dark flex items-center gap-2 px-4 py-2 rounded-full text-white/80">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>20+ Years of Trust</span>
              </div>
            </div>
          </div>

          {/* Right — phone mockup: HIDDEN on mobile, shown lg+ */}
          <div className="hidden lg:flex flex-1 items-center justify-end" style={{ animation: "float-slow 7s ease-in-out infinite" }}>
            <div ref={phoneRef} className="relative transition-transform duration-200 ease-out" style={{ transformStyle: "preserve-3d" }}>
              {/* Glow */}
              <div className="absolute inset-0 rounded-[3rem]"
                style={{ background: "radial-gradient(ellipse, rgba(251,191,36,0.4) 0%, rgba(236,72,153,0.3) 50%, transparent 70%)", filter: "blur(35px)", transform: "scale(1.4)" }} />

              {/* Shell */}
              <div className="relative w-56 h-[480px] sm:w-64 sm:h-[540px] rounded-[3rem] overflow-hidden"
                style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))", border: "1.5px solid rgba(255,255,255,0.25)", backdropFilter: "blur(20px)", boxShadow: "0 25px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)" }}>
                {/* Screen */}
                <div className="absolute inset-2 rounded-[2.5rem] overflow-hidden bg-gray-950">
                  <div className="h-full flex flex-col">
                    {/* Status bar */}
                    <div className="h-8 bg-black/50 flex items-center justify-between px-6 text-[10px] text-white/60 relative flex-shrink-0">
                      <span>9:41</span>
                      <span className="w-16 h-3 rounded-full bg-black absolute left-1/2 -translate-x-1/2 top-0.5" />
                      <span>100%</span>
                    </div>
                    <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2.5" style={{ scrollbarWidth: "none" }}>
                      {/* Featured phones */}
                      <div className="text-[9px] text-white/35 font-bold tracking-wider uppercase px-1">🔥 Hot Deals</div>
                      {[
                        { name: "Samsung Galaxy S24", price: "₹**,999", tag: "Best Seller" },
                        { name: "Redmi Note 13 Pro",  price: "₹**,999", tag: "New" },
                        { name: "OPPO Reno 11",       price: "₹**,999", tag: "Sale" },
                      ].map((p) => (
                        <div key={p.name} className="rounded-xl p-2.5 flex items-center justify-between" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(236,72,153,0.1))", border: "1px solid rgba(255,255,255,0.08)" }}>
                          <div>
                            <div className="text-[10px] font-bold text-white leading-tight">{p.name}</div>
                            <div className="text-[10px] font-black mt-0.5" style={{ background: "linear-gradient(135deg,#FBBF24,#F97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{p.price}</div>
                          </div>
                          <span className="text-[8px] px-1.5 py-0.5 rounded-full font-bold" style={{ background: "rgba(251,191,36,0.2)", color: "#FBBF24", border: "1px solid rgba(251,191,36,0.3)" }}>{p.tag}</span>
                        </div>
                      ))}

                      {/* Brands grid */}
                      <div className="text-[9px] text-white/35 font-bold tracking-wider uppercase px-1 mt-1">📱 Brands</div>
                      <div className="grid grid-cols-3 gap-1.5">
                        {["Samsung", "Redmi", "OPPO", "Vivo", "Realme", "iQOO"].map((b) => (
                          <div key={b} className="rounded-lg py-1.5 text-center" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                            <div className="text-[8px] text-white/55 font-semibold">{b}</div>
                          </div>
                        ))}
                      </div>

                      {/* Services */}
                      <div className="text-[9px] text-white/35 font-bold tracking-wider uppercase px-1 mt-1">⚡ Services</div>
                      <div className="flex gap-1.5 flex-wrap">
                        {[{l:"Repair",c:"#7C3AED"},{l:"Recharge",c:"#EC4899"},{l:"SIM",c:"#F97316"},{l:"DTH",c:"#06B6D4"},{l:"Accessories",c:"#10B981"}].map(s => (
                          <span key={s.l} className="text-[8px] px-2 py-0.5 rounded-full border font-semibold" style={{ color: s.c, borderColor: `${s.c}40`, background: `${s.c}15` }}>{s.l}</span>
                        ))}
                      </div>

                      {/* Offers */}
                      <div className="rounded-xl p-2.5 mt-0.5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <div className="text-[9px] text-white/35 mb-1.5 font-bold">🎁 Special Offers</div>
                        {["10% off on accessories", "Free screen guard", "Easy EMI available", "Exchange old phone"].map(o => (
                          <div key={o} className="text-[8px] text-white/55 flex items-center gap-1 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                            {o}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Side buttons */}
                <div className="absolute right-[-2px] top-28 w-1 h-12 rounded-l-full bg-white/15" />
                <div className="absolute left-[-2px] top-32 w-1 h-16 rounded-r-full bg-white/15" />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-5 -right-10 px-3 py-2 rounded-full text-xs font-bold text-white animate-float whitespace-nowrap"
                style={{ background: "linear-gradient(135deg,#10B981,#06B6D4)", boxShadow: "0 4px 16px rgba(16,185,129,0.5)" }}>
                ✓ Authorized Dealer
              </div>
              <div className="absolute -bottom-5 -left-10 px-3 py-2 rounded-full text-xs font-bold text-white whitespace-nowrap"
                style={{ background: "linear-gradient(135deg,#7C3AED,#EC4899)", boxShadow: "0 4px 16px rgba(124,58,237,0.5)", animation: "float 5s ease-in-out infinite 1.5s" }}>
                🔧 Expert Repair
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* Bottom fade to light background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }} />
    </section>
  );
};

export default HeroSection;
