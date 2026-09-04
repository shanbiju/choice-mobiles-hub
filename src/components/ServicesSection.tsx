import { useState } from "react";
import { Smartphone, Headphones, CreditCard, Wifi, Wrench, TabletSmartphone } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  { icon: Smartphone,       title: "Mobile Sales",   description: "Latest smartphones & feature phones from top brands. New & certified used mobiles available.", gradient: "linear-gradient(135deg,#7C3AED,#EC4899)", glow: "rgba(124,58,237,0.3)", bg: "rgba(124,58,237,0.07)", color: "#7C3AED" },
  { icon: Headphones,       title: "Accessories",    description: "Earphones, chargers, cases, Bluetooth speakers, tempered glass & more.",                        gradient: "linear-gradient(135deg,#06B6D4,#3B82F6)", glow: "rgba(6,182,212,0.3)",   bg: "rgba(6,182,212,0.07)",   color: "#06B6D4" },
  { icon: CreditCard,       title: "Mobile Recharge",description: "Instant prepaid & postpaid recharge for all operators. Quick and hassle-free.",                  gradient: "linear-gradient(135deg,#F97316,#FBBF24)", glow: "rgba(249,115,22,0.3)",  bg: "rgba(249,115,22,0.07)",  color: "#F97316" },
  { icon: Wifi,             title: "DTH Recharge",   description: "Recharge your DTH connection — Tata Play, Airtel Digital TV, Dish TV & more.",                   gradient: "linear-gradient(135deg,#FBBF24,#F97316)", glow: "rgba(251,191,36,0.3)",  bg: "rgba(251,191,36,0.07)",  color: "#D97706" },
  { icon: Wrench,           title: "Phone Repair",   description: "Expert repair services — screen replacement, battery change, software fixes & more.",              gradient: "linear-gradient(135deg,#10B981,#06B6D4)", glow: "rgba(16,185,129,0.3)",  bg: "rgba(16,185,129,0.07)",  color: "#10B981" },
  { icon: TabletSmartphone, title: "SIM Services",   description: "New SIM activation, MNP porting, document assistance for all operators.",                         gradient: "linear-gradient(135deg,#EC4899,#7C3AED)", glow: "rgba(236,72,153,0.3)",  bg: "rgba(236,72,153,0.07)",  color: "#EC4899" },
];

// On mobile: tap toggles the card — on desktop: hover flips it
const ServiceCard = ({ svc, index }: { svc: typeof services[0]; index: number }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <AnimateOnScroll delay={index * 80}>
      {/* Mobile: tap to flip. Desktop: hover flips via CSS */}
      <div
        className="flip-card w-full cursor-pointer"
        style={{ height: "200px" }}
        onClick={() => setFlipped(f => !f)}
      >
        <div
          className="flip-card-inner"
          style={{ transform: flipped ? "rotateY(180deg)" : undefined }}
        >
          {/* Front */}
          <div
            className="flip-card-front bright-card flex flex-col items-center justify-center p-6 text-center"
            style={{ background: "white", border: `1.5px solid ${svc.color}20` }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: svc.gradient }} />
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: svc.bg, boxShadow: `0 4px 20px ${svc.glow}` }}
            >
              <svc.icon className="w-6 h-6" style={{ color: svc.color }} />
            </div>
            <h3 className="text-base font-black text-gray-800 mb-1">{svc.title}</h3>
            <p className="text-gray-400 text-xs">Tap to learn more →</p>
          </div>
          {/* Back */}
          <div
            className="flip-card-back flex flex-col items-center justify-center p-6 text-center text-white"
            style={{ background: svc.gradient, boxShadow: `0 8px 30px ${svc.glow}` }}
          >
            <svc.icon className="w-8 h-8 mb-3 text-white/90" />
            <h3 className="text-sm font-black mb-2">{svc.title}</h3>
            <p className="text-white/85 text-xs leading-relaxed">{svc.description}</p>
            <p className="text-white/50 text-[10px] mt-3">Tap again to go back</p>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

const ServicesSection = () => (
  <section id="services" className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f8f0ff 0%, #fff 100%)" }} aria-label="Our Services">
    <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-30 pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)" }} />
    <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full opacity-30 pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(236,72,153,0.25) 0%, transparent 70%)" }} />

    <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
      <AnimateOnScroll className="text-center mb-10 lg:mb-16">
        <span className="section-chip text-violet-700 border border-violet-200" style={{ background: "rgba(124,58,237,0.08)" }}>
          What We Offer
        </span>
        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900">
          Our <span className="text-gradient">Services</span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-lg">
          Everything you need for your mobile life, all in one place.
        </p>
      </AnimateOnScroll>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 sm:gap-6">
        {services.map((svc, i) => (
          <ServiceCard key={svc.title} svc={svc} index={i} />
        ))}
      </div>

      <p className="text-center text-gray-400 text-xs mt-5 sm:hidden">Tap any card to see details</p>
    </div>
  </section>
);

export default ServicesSection;
