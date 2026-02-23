import { Smartphone, Headphones, CreditCard, Wifi, Wrench, TabletSmartphone } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Sales",
    description: "Latest smartphones & feature phones from top brands. New & certified used mobiles available.",
  },
  {
    icon: Headphones,
    title: "Accessories",
    description: "Earphones, chargers, cases, Bluetooth speakers, tempered glass & more.",
  },
  {
    icon: CreditCard,
    title: "Mobile Recharge",
    description: "Instant prepaid & postpaid recharge for all operators. Quick and hassle-free.",
  },
  {
    icon: Wifi,
    title: "DTH Recharge",
    description: "Recharge your DTH connection — Tata Play, Airtel Digital TV, Dish TV & more.",
  },
  {
    icon: Wrench,
    title: "Phone Repair",
    description: "Expert repair services — screen replacement, battery change, software fixes & more.",
  },
  {
    icon: TabletSmartphone,
    title: "SIM Services",
    description: "New SIM activation, MNP porting, document assistance for all operators.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">Our Services</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Everything you need for your mobile life, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent-gradient group-hover:text-accent-foreground transition-colors duration-300">
                <service.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
