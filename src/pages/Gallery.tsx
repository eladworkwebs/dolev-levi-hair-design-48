
import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "/lovable-uploads/18377861-25cb-43e3-a2d0-aa3ffcca1421.png",
      alt: "Modern Fade with Textured Top",
      category: "Fade"
    },
    {
      src: "/lovable-uploads/7d508e49-f74f-42b5-9a70-adc68402c70e.png",
      alt: "Clean Low Fade",
      category: "Fade"
    },
    {
      src: "/lovable-uploads/39830751-0bea-43a1-9ef3-e98bae9ee4cf.png",
      alt: "Textured Crop with Skin Fade",
      category: "Modern"
    },
    {
      src: "/lovable-uploads/08e3238a-ee4d-4d60-ad3f-2ca6580dd071.png",
      alt: "Classic Side Part with Fade",
      category: "Classic"
    },
    {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=500&fit=crop&auto=format&sat=-100",
      alt: "Beard Trim",
      category: "Beard"
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
