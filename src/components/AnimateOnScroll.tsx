import { useEffect, useRef, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: string;
  delay?: number;
  threshold?: number;
}

const AnimateOnScroll = ({
  children,
  className = "",
  animation = "animate-fade-in-up",
  delay = 0,
  threshold = 0.15,
}: AnimateOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("opacity-100");
            el.classList.remove("opacity-0", "translate-y-6");
            el.classList.add(...animation.split(" "));
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay, threshold]);

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-6 transition-all duration-700 ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
