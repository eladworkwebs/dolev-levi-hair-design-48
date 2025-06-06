
const Services = () => {
  const services = [
    {
      name: "תספורת מיוחדת",
      price: "₪80",
      description: "תספורת מדויקת המותאמת לסגנונך וצורת הפנים שלך",
      duration: "45 דק'"
    },
    {
      name: "פייד קלאסי",
      price: "₪70",
      description: "תספורת פייד מקצועית עם קווים חדים ומעבר מושלם",
      duration: "40 דק'"
    },
    {
      name: "עיצוב זקן",
      price: "₪50",
      description: "גיזום ועיצוב זקן מדויק למראה מושלם",
      duration: "30 דק'"
    },
    {
      name: "שירות מלא",
      price: "₪120",
      description: "חוויה מלאה של תספורת ועיצוב זקן",
      duration: "75 דק'"
    },
    {
      name: "שטיפה ועיצוב",
      price: "₪40",
      description: "שירות שטיפה ועיצוב מקצועי",
      duration: "25 דק'"
    },
    {
      name: "תספורת סטודנט",
      price: "₪60",
      description: "מחיר מיוחד לסטודנטים (נדרש תעודת זהות)",
      duration: "35 דק'"
    }
  ];

  const handleBookService = () => {
    const phoneNumber = "972527365820";
    const message = "היי דולב, אני מעונין לקבוע תור לתספורת";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="pt-24 pb-20 px-4" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            שירותים ומחירים
          </h1>
          <p className="text-lg text-gray-600 font-opensans max-w-2xl mx-auto">
            שירותי ברברינג מקצועיים עם תמחור שקוף. 
            כל שירות כולל ייעוץ ועצות סטיילינג.
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
                משך זמן: {service.duration}
              </span>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 p-8 rounded-lg animate-fade-in">
          <h3 className="text-2xl font-montserrat font-semibold mb-4">
            מוכנים לקבוע תור?
          </h3>
          <p className="text-gray-600 font-opensans mb-6">
            צרו איתנו קשר בוואטסאפ לתיאום התור שלכם
          </p>
          <button
            onClick={handleBookService}
            className="bg-black text-white px-8 py-3 font-montserrat font-semibold tracking-wider hover:bg-gray-800 transition-colors duration-300"
          >
            קביעת תור
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 text-center">
          <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
            <h4 className="font-montserrat font-semibold mb-3">מקבלים הגעה ללא תיאום</h4>
            <p className="text-gray-600 font-opensans text-sm">
              למרות שמומלץ לתאם מראש, אנו מקבלים הגעה ללא תיאום בכפוף לזמינות
            </p>
          </div>
          <div className="animate-fade-in" style={{animationDelay: '0.8s'}}>
            <h4 className="font-montserrat font-semibold mb-3">אמצעי תשלום</h4>
            <p className="text-gray-600 font-opensans text-sm">
              מזומן, כרטיסי אשראי ותשלומים ניידים מתקבלים
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
