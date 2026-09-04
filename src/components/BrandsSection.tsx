import samsungLogo from "@/assets/brands/samsung.png";
import oppoLogo from "@/assets/brands/oppo.png";
import vivoLogo from "@/assets/brands/vivo.png";
import redmiLogo from "@/assets/brands/redmi.png";
import realmeLogo from "@/assets/brands/realme.png";
import iqooLogo from "@/assets/brands/iqoo.png";
import tecnoLogo from "@/assets/brands/tecno.png";
import lavaLogo from "@/assets/brands/lava.png";
import nokiaLogo from "@/assets/brands/nokia.png";
import AnimateOnScroll from "./AnimateOnScroll";

const brands = [
  { name: "Samsung", logo: samsungLogo },
  { name: "Oppo",    logo: oppoLogo },
  { name: "Vivo",    logo: vivoLogo },
  { name: "Redmi",   logo: redmiLogo },
  { name: "Realme",  logo: realmeLogo },
  { name: "iQOO",    logo: iqooLogo },
  { name: "Tecno",   logo: tecnoLogo },
  { name: "Lava",    logo: lavaLogo },
  { name: "Nokia",   logo: nokiaLogo },
];

const allBrands = [...brands, ...brands];

const BrandsSection = () => (
  <section id="brands" className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, #fff 0%, #f0f4ff 100%)" }} aria-label="Authorized Brands">
    {/* Rainbow top stripe */}
    <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg,#7C3AED,#EC4899,#F97316,#FBBF24,#10B981,#06B6D4)" }} />

    <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
      <AnimateOnScroll className="text-center mb-12 lg:mb-16">
        <span className="section-chip text-cyan-700 border border-cyan-200" style={{ background: "rgba(6,182,212,0.08)" }}>
          Authorized Dealer
        </span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
          Brands We <span className="text-gradient-sky">Carry</span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base sm:text-lg">
          We are proud authorized dealers of all major smartphone brands.
        </p>
      </AnimateOnScroll>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #f0f4ff, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(-90deg, #f0f4ff, transparent)" }} />

        <div className="marquee-track py-4">
          {allBrands.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 group flex flex-col items-center justify-center p-5 rounded-2xl bg-white cursor-pointer transition-all duration-300 hover:-translate-y-3"
              style={{ minWidth: "120px", boxShadow: "0 2px 12px rgba(124,58,237,0.08), 0 4px 20px rgba(0,0,0,0.05)", border: "1.5px solid rgba(124,58,237,0.08)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(124,58,237,0.22), 0 4px 20px rgba(0,0,0,0.1)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.3)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(124,58,237,0.08), 0 4px 20px rgba(0,0,0,0.05)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.08)"; }}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-3">
                <img
                  src={brand.logo}
                  alt={`${brand.name} authorized dealer`}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-115"
                  loading="lazy"
                />
              </div>
              <span className="text-xs sm:text-sm font-bold text-gray-600 group-hover:text-violet-700 transition-colors whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BrandsSection;
