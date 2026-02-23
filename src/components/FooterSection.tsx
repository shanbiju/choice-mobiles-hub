import { Phone, MapPin, Clock, Mail } from "lucide-react";

const PHONE = "+919745555974";
const EMAIL = "choicecorner1@gmail.com";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Kodakara+Thrissur+Kerala+India";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-hero-gradient text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Choice Corner</h3>
            <p className="text-primary-foreground/50 text-sm mb-6">
              Your trusted mobile destination since 2003. Authorized dealer,
              expert repairs, and complete mobile solutions.
            </p>
            <p className="text-primary-foreground/40 text-xs">
              © {new Date().getFullYear()} Choice Corner. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#services" className="hover:text-accent transition-colors">Our Services</a></li>
              <li><a href="#brands" className="hover:text-accent transition-colors">Authorized Brands</a></li>
              <li><a href="#accessories" className="hover:text-accent transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li>
                <a href={`tel:${PHONE}`} className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 text-accent" />
                  <span>+91 97455 55974</span>
                </a>
              </li>
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Kodakara, Thrissur, Kerala, India</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent" />
                <span>Open 7 Days a Week</span>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>{EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
