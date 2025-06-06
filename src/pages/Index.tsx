
import Hero from "@/components/Hero";

const Index = () => {
  const featuredServices = [
    { name: "תספורת מיוחדת", price: "₪80", description: "תספורת מדויקת המותאמת לסגנונך" },
    { name: "פייד קלאסי", price: "₪70", description: "פייד מקצועי עם קווים חדים" },
    { name: "עיצוב זקן", price: "₪50", description: "גיזום ועיצוב זקן מדויק" },
    { name: "שירות מלא", price: "₪120", description: "תספורת מלאה ועיצוב זקן" }
  ];

  const handleBookService = () => {
    const phoneNumber = "972527365820";
    const message = "היי דולב, אני מעונין לקבוע תור לתספורת";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="pt-16" dir="rtl">
      <Hero />
      
      {/* Quick Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8">
            ברברינג פרימיום בכרמיאל
          </h2>
          <p className="text-lg text-gray-600 font-opensans leading-relaxed max-w-2xl mx-auto mb-12">
            התנסו באמנות הגזירה והעיצוב המדויק בדולב לוי עיצוב שיער. 
            כאן ברברינג מסורתי פוגש טכניקות עכשוויות.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-montserrat font-bold text-xl">✂</span>
              </div>
              <h3 className="font-montserrat font-semibold mb-2">תספורות מומחה</h3>
              <p className="text-gray-600 font-opensans">גזירה מדויקת עם תשומת לב לפרטים</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-montserrat font-bold text-xl">★</span>
              </div>
              <h3 className="font-montserrat font-semibold mb-2">שירות פרימיום</h3>
              <p className="text-gray-600 font-opensans">חוויה מקצועית בכל ביקור</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-montserrat font-bold text-xl">♦</span>
              </div>
              <h3 className="font-montserrat font-semibold mb-2">סטייל מודרני</h3>
              <p className="text-gray-600 font-opensans">טכניקות עכשוויות וטרנדים</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              השירותים שלנו
            </h2>
            <p className="text-lg text-gray-600 font-opensans max-w-2xl mx-auto">
              שירותי ברברינג מקצועיים עם תמחור שקוף
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
              className="bg-black text-white px-8 py-3 font-montserrat font-semibold tracking-wider hover:bg-gray-800 transition-colors duration-300 ml-4"
            >
              קבע תור עכשיו
            </button>
            <a
              href="/services"
              className="bg-white text-black border-2 border-black px-8 py-3 font-montserrat font-semibold tracking-wider hover:bg-black hover:text-white transition-colors duration-300 inline-block"
            >
              צפה בכל השירותים
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
