
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const phoneNumber = "972527365820"; // Israeli format without + and spaces
  const message = "היי דולב, אני מעונין לקבוע תור לתספורת"; // Hebrew message

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 bg-black text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50 group"
      aria-label="יצירת קשר בוואטסאפ"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        קבע תור עכשיו
      </span>
    </button>
  );
};

export default WhatsAppFloat;
