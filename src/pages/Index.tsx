
import Hero from "@/components/Hero";

const Index = () => {
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
    </div>
  );
};

export default Index;
