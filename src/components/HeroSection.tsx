import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Choice Corner mobile shop" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent-foreground/90">
              Trusted Since 2003
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Your One-Stop
            <span className="text-gradient block">Mobile Destination</span>
          </h1>

          <p className="text-lg text-primary-foreground/70 mb-8 max-w-lg">
            Authorized dealer of top brands. New & used mobiles, accessories, 
            recharge services, SIM activation & expert repairs — all under one roof.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="tel:+919745555974">
              <Button variant="hero" size="lg" className="text-base">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Kodakara+Thrissur+Kerala+India" target="_blank" rel="noopener noreferrer">
              <Button variant="heroOutline" size="lg" className="text-base">
                <MapPin className="w-5 h-5" />
                Visit Store
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-primary-foreground/60 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Open 7 Days a Week</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>20+ Years of Trust</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
