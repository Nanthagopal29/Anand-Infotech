import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BUSINESS_INFO } from "../constants";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg group-hover:rotate-12 transition-transform">
            AI
          </div>
          <div>
            <h1 className={`text-2xl font-black tracking-tighter leading-none ${isScrolled ? "text-slate-900" : "text-white"}`}>
              ANAND <span className="text-red-600">INFOTECH</span>
            </h1>
            <p className={`text-[10px] uppercase tracking-[0.2em] font-bold ${isScrolled ? "text-slate-500" : "text-white/70"}`}>
              Sales & Services
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-red-600 ${
                isActive(link.path) 
                  ? "text-red-600" 
                  : isScrolled ? "text-slate-600" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="px-6 py-3 bg-red-600 text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 rounded-lg ${isScrolled ? "text-slate-900" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-bold uppercase tracking-widest ${
                    isActive(link.path) ? "text-red-600" : "text-slate-600"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
                <a href={`tel:${BUSINESS_INFO.phones[0]}`} className="flex items-center gap-3 text-slate-600 font-medium">
                  <Phone size={18} className="text-red-600" /> {BUSINESS_INFO.phones[0]}
                </a>
                <a href={`mailto:${BUSINESS_INFO.emails[0]}`} className="flex items-center gap-3 text-slate-600 font-medium">
                  <Mail size={18} className="text-red-600" /> {BUSINESS_INFO.emails[0]}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
