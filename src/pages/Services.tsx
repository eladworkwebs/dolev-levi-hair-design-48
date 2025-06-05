
const Services = () => {
  const services = [
    {
      name: "Signature Cut",
      price: "₪80",
      description: "Precision haircut tailored to your style and face shape",
      duration: "45 min"
    },
    {
      name: "Classic Fade",
      price: "₪70",
      description: "Professional fade cut with sharp lines and perfect blend",
      duration: "40 min"
    },
    {
      name: "Beard Trim & Style",
      price: "₪50",
      description: "Precise beard trimming and styling for the perfect look",
      duration: "30 min"
    },
    {
      name: "Full Service",
      price: "₪120",
      description: "Complete haircut and beard styling experience",
      duration: "75 min"
    },
    {
      name: "Hair Wash & Style",
      price: "₪40",
      description: "Professional wash and styling service",
      duration: "25 min"
    },
    {
      name: "Student Cut",
      price: "₪60",
      description: "Special pricing for students (ID required)",
      duration: "35 min"
    }
  ];

  const handleBookService = () => {
    const phoneNumber = "972527365820";
    const message = "היי דולב, אני מעונין לקבוע תור לתספורת";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Services & Pricing
          </h1>
          <p className="text-lg text-gray-600 font-opensans max-w-2xl mx-auto">
            Professional barbering services with transparent pricing. 
            Each service includes consultation and styling advice.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 mb-12">
          {services.map((service, index) => (
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
              <p className="text-gray-600 font-opensans mb-2">
                {service.description}
              </p>
              <span className="text-sm text-gray-500 font-opensans">
                Duration: {service.duration}
              </span>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 p-8 rounded-lg animate-fade-in">
          <h3 className="text-2xl font-montserrat font-semibold mb-4">
            Ready to Book?
          </h3>
          <p className="text-gray-600 font-opensans mb-6">
            Contact us via WhatsApp to schedule your appointment
          </p>
          <button
            onClick={handleBookService}
            className="bg-black text-white px-8 py-3 font-montserrat font-semibold tracking-wider hover:bg-gray-800 transition-colors duration-300"
          >
            BOOK APPOINTMENT
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 text-center">
          <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
            <h4 className="font-montserrat font-semibold mb-3">Walk-ins Welcome</h4>
            <p className="text-gray-600 font-opensans text-sm">
              While appointments are preferred, we accept walk-ins subject to availability
            </p>
          </div>
          <div className="animate-fade-in" style={{animationDelay: '0.8s'}}>
            <h4 className="font-montserrat font-semibold mb-3">Payment Methods</h4>
            <p className="text-gray-600 font-opensans text-sm">
              Cash, Credit Cards, and Mobile Payments Accepted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
