import samsungLogo from "@/assets/brands/samsung.png";
import oppoLogo from "@/assets/brands/oppo.png";
import vivoLogo from "@/assets/brands/vivo.png";
import redmiLogo from "@/assets/brands/redmi.png";
import realmeLogo from "@/assets/brands/realme.png";
import iqooLogo from "@/assets/brands/iqoo.png";
import tecnoLogo from "@/assets/brands/tecno.png";
import lavaLogo from "@/assets/brands/lava.png";
import nokiaLogo from "@/assets/brands/nokia.png";

const brands = [
  { name: "Samsung", logo: samsungLogo },
  { name: "Oppo", logo: oppoLogo },
  { name: "Vivo", logo: vivoLogo },
  { name: "Redmi", logo: redmiLogo },
  { name: "Realme", logo: realmeLogo },
  { name: "iQOO", logo: iqooLogo },
  { name: "Tecno", logo: tecnoLogo },
  { name: "Lava", logo: lavaLogo },
  { name: "Nokia", logo: nokiaLogo },
];

const BrandsSection = () => {
  return (
    <section id="brands" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">Authorized Dealer</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">Brands We Carry</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            We are proud authorized dealers of all major smartphone brands.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex flex-col items-center justify-center p-5 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-3">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-sm font-medium text-card-foreground">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
