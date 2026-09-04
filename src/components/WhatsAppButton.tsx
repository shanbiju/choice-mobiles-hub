import { useState } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed right-5 z-50 flex flex-col items-end gap-2" style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom, 1.25rem))" }}>
      {/* Tooltip */}
      {showTooltip && (
        <div className="glass border border-neon-green/30 text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-green animate-fade-in whitespace-nowrap">
          💬 Chat on WhatsApp
          <div className="absolute bottom-[-6px] right-6 w-3 h-3 rotate-45 glass border-r border-b border-neon-green/30" />
        </div>
      )}

      {/* Button */}
      <a
        href="https://wa.me/919745555974"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow: "0 0 20px rgba(37,211,102,0.4), 0 4px 15px rgba(0,0,0,0.3)",
        }}
      >
        {/* Pulse rings */}
        <span className="wa-pulse-ring" />
        <span className="wa-pulse-ring" style={{ animationDelay: "0.7s" }} />

        <MessageCircle className="w-6 h-6 text-white relative z-10" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
