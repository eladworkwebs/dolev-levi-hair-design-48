
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handlePhoneCall = () => {
    window.open("tel:+972527365820", "_self");
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - visible on desktop */}
          <Link to="/" className="flex items-center md:block hidden">
            <h1 className="text-xl font-montserrat font-bold text-black">
              Dolev Levi
              <span className="block text-sm font-normal tracking-wider">HAIR DESIGN</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative font-opensans font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                  isActive(item.href) ? "after:scale-x-100" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone Number and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Phone Number */}
            <button
              onClick={handlePhoneCall}
              className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
              <span className="font-opensans font-medium hidden sm:block">052-736-5820</span>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 animate-slide-up">
            <div className="px-4 py-4">
              {/* Logo in mobile menu */}
              <Link to="/" className="flex justify-center mb-6" onClick={() => setIsMenuOpen(false)}>
                <h1 className="text-xl font-montserrat font-bold text-black text-center">
                  Dolev Levi
                  <span className="block text-sm font-normal tracking-wider">HAIR DESIGN</span>
                </h1>
              </Link>
              
              {/* Navigation items */}
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block font-opensans font-medium transition-colors duration-200 text-center ${
                      isActive(item.href)
                        ? "text-black"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
