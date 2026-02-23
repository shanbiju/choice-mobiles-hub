const brands = [
  { name: "Samsung", color: "#1428A0" },
  { name: "Oppo", color: "#1A9340" },
  { name: "Vivo", color: "#415FFF" },
  { name: "Redmi", color: "#FF6900" },
  { name: "Realme", color: "#F5C900" },
  { name: "iQOO", color: "#FF4C00" },
  { name: "Tecno", color: "#0072CE" },
  { name: "Lava", color: "#E31937" },
  { name: "Nokia", color: "#124191" },
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
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: brand.color + "18",
                  color: brand.color,
                }}
              >
                {brand.name.charAt(0)}
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
