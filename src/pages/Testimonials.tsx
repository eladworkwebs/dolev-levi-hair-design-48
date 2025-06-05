
const Testimonials = () => {
  const testimonials = [
    {
      name: "אמיר כהן",
      text: "דולב הוא ספר מקצועי ברמה הגבוהה ביותר. כל תספורת אצלו היא יצירת אמנות. ממליץ בחום!",
      rating: 5,
      service: "Signature Cut"
    },
    {
      name: "יוסי לוי",
      text: "שירות מעולה ותספורת מושלמת. דולב יודע בדיוק מה מתאים לכל אחד. כבר שנתיים שאני בא אליו בלבד.",
      rating: 5,
      service: "Full Service"
    },
    {
      name: "רון מזרחי",
      text: "המקום הכי טוב לתספורת בכרמיאל! דולב מקצועי, ידידותי ותמיד נותן יעוץ מצוין.",
      rating: 5,
      service: "Classic Fade"
    },
    {
      name: "דני שמואל",
      text: "אחרי הרבה חיפושים מצאתי את דולב. תספורת מדויקת ושירות ברמה גבוהה. בהחלט שווה!",
      rating: 5,
      service: "Beard Trim & Style"
    },
    {
      name: "מתן אלון",
      text: "דולב הוא אמן אמיתי! כל פעם יוצא מהסלון שלו עם הרגשה טובה ותספורת מושלמת.",
      rating: 5,
      service: "Signature Cut"
    },
    {
      name: "עידו גולדברג",
      text: "שירות מקצועי ואישי. דולב באמת מבין מה הלקוח רוצה ומבצע בדיוק. ממליץ בחום!",
      rating: 5,
      service: "Full Service"
    }
  ];

  const handleBookNow = () => {
    const phoneNumber = "972527365820";
    const message = "היי דולב, אני מעונין לקבוע תור לתספורת";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            What Our Clients Say
          </h1>
          <p className="text-lg text-gray-600 font-opensans max-w-2xl mx-auto">
            Real reviews from satisfied clients who trust Dolev Levi Hair Design 
            for their grooming needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-black text-lg">★</span>
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-gray-700 font-opensans mb-4 leading-relaxed text-right">
                "{testimonial.text}"
              </blockquote>
              
              {/* Author */}
              <div className="border-t border-gray-100 pt-4">
                <div className="text-right">
                  <div className="font-montserrat font-semibold text-black">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 font-opensans">
                    {testimonial.service}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 p-8 rounded-lg animate-fade-in">
          <h3 className="text-2xl font-montserrat font-semibold mb-4">
            Join Our Satisfied Clients
          </h3>
          <p className="text-gray-600 font-opensans mb-6 max-w-2xl mx-auto">
            Experience the difference that professional barbering makes. 
            Book your appointment today and discover why our clients keep coming back.
          </p>
          <button
            onClick={handleBookNow}
            className="bg-black text-white px-8 py-3 font-montserrat font-semibold tracking-wider hover:bg-gray-800 transition-colors duration-300"
          >
            BOOK YOUR APPOINTMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
