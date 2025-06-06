import Hero from "@/components/Hero";

const Index = () => {
  const featuredServices = [
    { name: "Signature Cut", price: "₪80", description: "Precision haircut tailored to your style" },
    { name: "Classic Fade", price: "₪70", description: "Professional fade with sharp lines" },
    { name: "Beard Trim & Style", price: "₪50", description: "Precise beard trimming and styling" },
    { name: "Full Service", price: "₪120", description: "Complete haircut and beard styling" }
  ];

  const handleBookService = () => {
    const phoneNumber = "972527365820";
    const message = "היי דולב, אני מעונין לקבוע תור לתספורת";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="pt-16">
      <Hero />
      
      {/* Quick Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8">
            Premium Barbering in Karmiel
          </h2>
          <p className="text-lg text-gray-600 font-opensans leading-relaxed max-w-2xl mx-auto mb-12">
            Experience the art of precision cutting and styling at Dolev Levi Hair Design. 
            Where traditional barbering meets contemporary techniques.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-montserrat font-bold text-xl">✂</span>
              </div>
              <h3 className="font-montserrat font-semibold mb-2">Expert Cuts</h3>
              <p className="text-gray-600 font-opensans">Precision cutting with attention to detail</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-montserrat font-bold text-xl">★</span>
              </div>
              <h3 className="font-montserrat font-semibold mb-2">Premium Service</h3>
              <p className="text-gray-600 font-opensans">Professional experience in every visit</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-montserrat font-bold text-xl">♦</span>
              </div>
              <h3 className="font-montserrat font-semibold mb-2">Modern Style</h3>
              <p className="text-gray-600 font-opensans">Contemporary techniques and trends</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 font-opensans max-w-2xl mx-auto">
              Professional barbering services with transparent pricing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-montserrat font-semibold text-black">
                    {service.name}
                  </h3>
                  <span className="text-2xl font-montserrat font-bold text-black">
                    {service.price}
                  </span>
                </div>
                <p className="text-gray-600 font-opensans">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button
              onClick={handleBookService}
              className="bg-black text-white px-8 py-3 font-montserrat font-semibold tracking-wider hover:bg-gray-800 transition-colors duration-300 mr-4"
            >
              BOOK NOW
            </button>
            <a
              href="/services"
              className="bg-white text-black border-2 border-black px-8 py-3 font-montserrat font-semibold tracking-wider hover:bg-black hover:text-white transition-colors duration-300 inline-block"
            >
              VIEW ALL SERVICES
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
