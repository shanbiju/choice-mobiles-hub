import { useEffect, useRef, useState } from "react";

interface CountUpProps { end: number; suffix?: string; duration?: number; }

const CountUp = ({ end, suffix = "", duration = 2000 }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const p = Math.min((Date.now() - start) / duration, 1);
          const e = 1 - Math.pow(1 - p, 3);
          setCount(Math.floor(e * end));
          if (p < 1) requestAnimationFrame(tick); else setCount(end);
        };
        requestAnimationFrame(tick);
        observer.unobserve(el);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);
  return <div ref={ref} className="font-display font-black text-4xl sm:text-5xl">{count}{suffix}</div>;
};

const stats = [
  {
    label: "Years of Trust",
    end: 20, suffix: "+",
    icon: "🏆",
    gradient: "linear-gradient(135deg, #7C3AED, #EC4899)",
    bg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.2)",
    textColor: "#7C3AED",
  },
  {
    label: "Brands Available",
    end: 9, suffix: "+",
    icon: "📱",
    gradient: "linear-gradient(135deg, #F97316, #FBBF24)",
    bg: "rgba(249,115,22,0.08)",
    border: "rgba(249,115,22,0.2)",
    textColor: "#F97316",
  },
  {
    label: "Happy Customers",
    end: 5000, suffix: "+",
    icon: "😊",
    gradient: "linear-gradient(135deg, #10B981, #06B6D4)",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.2)",
    textColor: "#10B981",
  },
];

const StatsBar = () => (
  <section className="relative py-10 sm:py-14 bg-white">
    {/* Top rainbow bar */}
    <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #7C3AED, #EC4899, #F97316, #FBBF24, #10B981, #06B6D4)" }} />

    <div className="container px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="rounded-2xl p-5 sm:p-8 text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
            style={{ background: s.bg, border: `1.5px solid ${s.border}`, boxShadow: `0 4px 20px ${s.border}`, animationDelay: `${i * 150}ms` }}
          >
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: s.gradient }} />

            <div className="text-2xl sm:text-4xl mb-2 sm:mb-3">{s.icon}</div>
            <div style={{ color: s.textColor }}>
              <CountUp end={s.end} suffix={s.suffix} />
            </div>
            <div className="text-gray-500 text-sm font-semibold mt-2 tracking-wide uppercase">{s.label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom rainbow bar */}
    <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #06B6D4, #10B981, #FBBF24, #F97316, #EC4899, #7C3AED)" }} />
  </section>
);

export default StatsBar;
