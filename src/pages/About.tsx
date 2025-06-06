
const About = () => {
  return (
    <div className="pt-24 pb-20 px-4" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-8">
              הכירו את דולב לוי
            </h1>
            <div className="space-y-6 text-gray-700 font-opensans leading-relaxed">
              <p className="text-lg">
                עם למעלה מ-8 שנות ניסיון באמנות הברברינג, דולב לוי ביסס את עצמו 
                כאחד מעצבי השיער המובילים בכרמיאל.
              </p>
              <p>
                המסע של דולב החל מתוך תשוקה לדיוק ועין לפרטים. 
                הוא מאמין שכל תספורת היא הזדמנות לחזק את הביטחון העצמי 
                ולבטא את הסגנון האישי.
              </p>
              <p>
                בהתמחות בתספורות מודרניות, סגנונות קלאסיים ועיצוב זקן, דולב 
                משלב טכניקות ברברינג מסורתיות עם טרנדים עכשוויים 
                כדי לספק תוצאות יוצאות דופן לכל לקוח.
              </p>
              <p className="font-semibold text-black">
                "הסגנון שלך הוא החתימה שלך. בואו אעזור לך לשכלל אותה."
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-montserrat font-semibold mb-4">התמחויות</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>• תספורות מדויקות</div>
                <div>• עיצוב זקן</div>
                <div>• טכניקות פייד</div>
                <div>• סגנונות קלאסיים</div>
                <div>• טרנדים מודרניים</div>
                <div>• ייעוץ שיער</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=800&fit=crop&auto=format&sat=-100"
                alt="דולב לוי - ספר מקצועי"
                className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
