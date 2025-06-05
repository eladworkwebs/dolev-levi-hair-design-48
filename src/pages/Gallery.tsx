
import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=500&fit=crop&auto=format&sat=-100",
      alt: "Classic Fade Cut",
      category: "Fade"
    },
    {
      src: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=400&h=500&fit=crop&auto=format&sat=-100",
      alt: "Modern Style",
      category: "Modern"
    },
    {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=500&fit=crop&auto=format&sat=-100",
      alt: "Beard Trim",
      category: "Beard"
    },
    {
      src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=500&fit=crop&auto=format&sat=-100",
      alt: "Classic Cut",
      category: "Classic"
    },
    {
      src: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=500&fit=crop&auto=format&sat=-100",
      alt: "Precision Cut",
      category: "Precision"
    },
    {
      src: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=500&fit=crop&auto=format&sat=-100",
      alt: "Contemporary Style",
      category: "Contemporary"
    },
  ];

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Our Work
          </h1>
          <p className="text-lg text-gray-600 font-opensans max-w-2xl mx-auto">
            Explore our portfolio of precision cuts, modern styles, and classic barbering. 
            Each cut is crafted with attention to detail and artistic vision.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in hover:scale-105 transition-transform duration-500"
              style={{animationDelay: `${index * 0.1}s`}}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-montserrat font-semibold">{image.alt}</h3>
                  <p className="text-sm font-opensans">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Selected work"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
