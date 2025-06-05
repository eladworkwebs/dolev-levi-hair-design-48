
import { Phone, MapPin, Clock, Instagram } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "972527365820";
    const message = "היי דולב, אני מעונין לקבוע תור לתספורת";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+972527365820";
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/dolevlevi_hairdesign", "_blank");
  };

  const handleMapClick = () => {
    window.open("https://maps.google.com/?q=Karmiel,Israel", "_blank");
  };

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 font-opensans max-w-2xl mx-auto">
            Ready for your next haircut? Contact us to book your appointment 
            or visit us at our Karmiel location.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h2 className="text-2xl font-montserrat font-semibold mb-8">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold mb-1">Phone</h3>
                  <button
                    onClick={handlePhoneClick}
                    className="text-gray-600 font-opensans hover:text-black transition-colors"
                  >
                    052-736-5820
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold mb-1">Location</h3>
                  <button
                    onClick={handleMapClick}
                    className="text-gray-600 font-opensans hover:text-black transition-colors"
                  >
                    Karmiel, Israel
                  </button>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold mb-1">Hours</h3>
                  <div className="text-gray-600 font-opensans space-y-1">
                    <div>Sunday - Thursday: 9:00 AM - 7:00 PM</div>
                    <div>Friday: 9:00 AM - 3:00 PM</div>
                    <div>Saturday: Closed</div>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold mb-1">Instagram</h3>
                  <button
                    onClick={handleInstagramClick}
                    className="text-gray-600 font-opensans hover:text-black transition-colors"
                  >
                    @dolevlevi_hairdesign
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-4">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-black text-white py-3 px-6 font-montserrat font-semibold tracking-wider hover:bg-gray-800 transition-colors duration-300"
              >
                BOOK VIA WHATSAPP
              </button>
              <button
                onClick={handlePhoneClick}
                className="w-full border-2 border-black text-black py-3 px-6 font-montserrat font-semibold tracking-wider hover:bg-black hover:text-white transition-all duration-300"
              >
                CALL NOW
              </button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <h2 className="text-2xl font-montserrat font-semibold mb-8">
              Find Us
            </h2>
            
            <div 
              className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
              onClick={handleMapClick}
            >
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <p className="font-montserrat font-semibold text-gray-700">
                  Click to Open in Google Maps
                </p>
                <p className="text-gray-600 font-opensans">
                  Karmiel, Israel
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-montserrat font-semibold mb-2">Getting Here</h3>
              <p className="text-gray-600 font-opensans text-sm">
                Located in the heart of Karmiel with convenient parking available. 
                Easily accessible by public transportation and car.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
