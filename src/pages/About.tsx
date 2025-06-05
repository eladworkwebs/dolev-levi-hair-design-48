
const About = () => {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-8">
              Meet Dolev Levi
            </h1>
            <div className="space-y-6 text-gray-700 font-opensans leading-relaxed">
              <p className="text-lg">
                With over 8 years of experience in the art of barbering, Dolev Levi has 
                established himself as one of Karmiel's premier hair stylists.
              </p>
              <p>
                Dolev's journey began with a passion for precision and an eye for detail. 
                He believes that every haircut is an opportunity to enhance confidence and 
                express individual style.
              </p>
              <p>
                Specializing in modern cuts, classic styles, and beard grooming, Dolev 
                combines traditional barbering techniques with contemporary trends to 
                deliver exceptional results for every client.
              </p>
              <p className="font-semibold text-black">
                "Your style is your signature. Let me help you perfect it."
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-montserrat font-semibold mb-4">Expertise</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>• Precision Cuts</div>
                <div>• Beard Styling</div>
                <div>• Fade Techniques</div>
                <div>• Classic Styles</div>
                <div>• Modern Trends</div>
                <div>• Hair Consultation</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=800&fit=crop&auto=format&sat=-100"
                alt="Dolev Levi - Professional Barber"
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
