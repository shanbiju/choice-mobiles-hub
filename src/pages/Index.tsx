import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BrandsSection from "@/components/BrandsSection";
import AccessoriesSection from "@/components/AccessoriesSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BrandsSection />
      <AccessoriesSection />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
