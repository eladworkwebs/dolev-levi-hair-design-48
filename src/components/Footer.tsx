
import { Instagram, Phone } from "lucide-react";

const Footer = () => {
  const handleInstagramClick = () => {
    window.open("https://instagram.com/dolevlevi_hairdesign", "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+972527365820";
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "972527365820";
    const message = "היי דולב, אני מעונין לקבוע תור לתספורת";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-black text-white py-12" dir="rtl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-4">
              דולב לוי
              <span className="block text-sm font-normal tracking-wider">עיצוב שיער</span>
            </h3>
            <p className="text-gray-400 font-opensans text-sm leading-relaxed">
              שירותי ברברינג פרימיום בכרמיאל. איפה שסטייל פוגש מיומנות 
              וכל תספורת נעשית עם דיוק ותשומת לב.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">יצירת קשר</h4>
            <div className="space-y-2 text-sm font-opensans">
              <button 
                onClick={handlePhoneClick}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                052-736-5820
              </button>
              <div className="text-gray-400">כרמיאל, ישראל</div>
              <button
                onClick={handleWhatsAppClick}
                className="text-gray-400 hover:text-white transition-colors"
              >
                קביעת תור בוואטסאפ
              </button>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">שעות פעילות</h4>
            <div className="space-y-1 text-sm font-opensans text-gray-400 mb-4">
              <div>ראשון-חמישי: 9:00 - 19:00</div>
              <div>שישי: 9:00 - 15:00</div>
              <div>שבת: סגור</div>
            </div>
            
            <div className="flex space-x-4 space-x-reverse">
              <button
                onClick={handleInstagramClick}
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="אינסטגרם"
              >
                <Instagram className="h-4 w-4" />
              </button>
              <button
                onClick={handlePhoneClick}
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="טלפון"
              >
                <Phone className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-opensans text-sm">
            © 2024 דולב לוי עיצוב שיער. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
