import { useRef, MouseEvent, useEffect, useState } from "react";
import { Headphones, BatteryCharging, Smartphone, Speaker } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const accessories = [
  { icon: Headphones,      name: "Earphones",         desc: "Wired & Wireless",  gradient: "linear-gradient(135deg,#7C3AED,#EC4899)", shadow: "rgba(124,58,237,0.35)", border: "rgba(124,58,237,0.2)" },
  { icon: BatteryCharging, name: "Chargers",           desc: "Fast & Standard",   gradient: "linear-gradient(135deg,#F97316,#FBBF24)", shadow: "rgba(249,115,22,0.35)",  border: "rgba(249,115,22,0.2)" },
  { icon: Smartphone,      name: "Cases & Covers",     desc: "All Models",        gradient: "linear-gradient(135deg,#06B6D4,#3B82F6)", shadow: "rgba(6,182,212,0.35)",   border: "rgba(6,182,212,0.2)" },
  { icon: Speaker,         name: "BT Speakers",        desc: "Portable Audio",    gradient: "linear-gradient(135deg,#10B981,#FBBF24)", shadow: "rgba(16,185,129,0.35)",  border: "rgba(16,185,129,0.2)" },
];

const TiltCard = ({ item, index, isTouch }: { item: typeof accessories[0]; index: number; isTouch: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isTouch) return; // no tilt on touch devices
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(600px) rotateX(${-y * 15}deg) rotateY(${x * 15}deg) scale(1.04)`;
    card.style.boxShadow = `${x * -12}px ${y * -12}px 40px ${item.shadow}`;
  };

  const onLeave = () => {
    if (isTouch) return;
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(600px) rotateX(0) rotateY(0) scale(1)";
    card.style.boxShadow = `0 4px 20px ${item.border}`;
  };

  return (
    <AnimateOnScroll delay={index * 100}>
      <div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative overflow-hidden rounded-2xl p-5 sm:p-8 text-center bg-white transition-transform duration-200 ease-out active:scale-95"
        style={{
          border: `1.5px solid ${item.border}`,
          boxShadow: `0 4px 20px ${item.border}`,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{ background: item.gradient }} />
        <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full pointer-events-none" style={{ background: item.gradient, opacity: 0.1, filter: "blur(24px)" }} />

        {/* Icon */}
        <div
          className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-xl sm:rounded-2xl flex items-center justify-center mb-4"
          style={{ background: item.gradient, boxShadow: `0 4px 20px ${item.shadow}` }}
        >
          <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>

        <h3 className="text-sm sm:text-lg font-black text-gray-800 mb-1">{item.name}</h3>
        <p className="text-gray-500 text-xs sm:text-sm font-medium">{item.desc}</p>
      </div>
    </AnimateOnScroll>
  );
};

const AccessoriesSection = () => {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => { setIsTouch('ontouchstart' in window); }, []);

  return (
    <section id="accessories" className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg,#f0f4ff 0%,#fff8f0 100%)" }} aria-label="Accessories">
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle,rgba(249,115,22,0.4) 0%,transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle,rgba(124,58,237,0.4) 0%,transparent 70%)" }} />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll className="text-center mb-10 lg:mb-16">
          <span className="section-chip text-orange-600 border border-orange-200" style={{ background: "rgba(249,115,22,0.08)" }}>
            Accessories
          </span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900">
            Complete Your <span className="text-gradient-cta">Setup</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-lg">
            Premium accessories to protect and enhance your mobile experience.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {accessories.map((item, i) => (
            <TiltCard key={item.name} item={item} index={i} isTouch={isTouch} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;
