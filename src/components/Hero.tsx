
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Your actual haircut photos
  const images = [
    "/lovable-uploads/18377861-25cb-43e3-a2d0-aa3ffcca1421.png",
    "/lovable-uploads/7d508e49-f74f-42b5-9a70-adc68402c70e.png",
    "/lovable-uploads/39830751-0bea-43a1-9ef3-e98bae9ee4cf.png",
    "/lovable-uploads/08e3238a-ee4d-4d60-ad3f-2ca6580dd071.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleBookNow = () => {
    const phoneNumber = "972527365820";
    const message = "היי דולב, אני מעונין לקבוע תור לתספורת";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`תספורת מקצועית ${index + 1}`}
              className="w-full h-full object-cover filter grayscale"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-4 tracking-tight">
          דולב לוי
        </h1>
        <p className="text-xl md:text-2xl font-opensans font-light mb-2 tracking-widest">
          עיצוב שיער
        </p>
        <p className="text-lg md:text-xl font-opensans mb-8 opacity-90">
          איפה שסטייל פוגש מיומנות
        </p>
        <button
          onClick={handleBookNow}
          className="bg-white text-black px-8 py-3 font-montserrat font-semibold tracking-wider hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          קבע תור עכשיו
        </button>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`עבור לתמונה ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
