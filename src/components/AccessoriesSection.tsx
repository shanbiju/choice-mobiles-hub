import { Headphones, BatteryCharging, Smartphone, Speaker } from "lucide-react";

const accessories = [
  { icon: Headphones, name: "Earphones", desc: "Wired & Wireless" },
  { icon: BatteryCharging, name: "Chargers", desc: "Fast & Standard" },
  { icon: Smartphone, name: "Cases & Covers", desc: "All Models" },
  { icon: Speaker, name: "Bluetooth Speakers", desc: "Portable Audio" },
];

const AccessoriesSection = () => {
  return (
    <section id="accessories" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">Accessories</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">Complete Your Setup</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Premium accessories to protect and enhance your mobile experience.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((item) => (
            <div
              key={item.name}
              className="relative overflow-hidden rounded-2xl bg-hero-gradient p-8 text-center group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent-gradient transition-colors duration-300">
                <item.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-1">{item.name}</h3>
              <p className="text-primary-foreground/60 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;
