import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ChevronRight, Clock } from "lucide-react";
import { BUSINESS_INFO } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg group-hover:rotate-12 transition-transform">
                AI
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tighter leading-none">
                  ANAND <span className="text-red-600">INFOTECH</span>
                </h1>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">
                  Sales & Services
                </p>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Your trusted partner for all IT sales and services. We specialize in custom PC builds, laptop repairs, and networking solutions.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all cursor-pointer">
                <Phone size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all cursor-pointer">
                <Mail size={18} />
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-600 rounded-full" /> Quick Links
            </h5>
            <ul className="space-y-4">
              {["Home", "Services", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`} 
                    className="text-slate-400 hover:text-red-600 hover:translate-x-2 transition-all flex items-center gap-2"
                  >
                    <ChevronRight size={14} className="text-red-600" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-600 rounded-full" /> Our Services
            </h5>
            <ul className="space-y-4">
              {BUSINESS_INFO.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link to="/services" className="text-slate-400 hover:text-red-600 flex items-center gap-2 transition-all">
                    <ChevronRight size={14} className="text-red-600" /> {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-red-600 rounded-full" /> Contact Info
            </h5>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 flex items-center justify-center text-red-600 shrink-0">
                  <MapPin size={20} />
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 flex items-center justify-center text-red-600 shrink-0">
                  <Phone size={20} />
                </div>
                <div className="text-slate-400 text-sm">
                  <p>{BUSINESS_INFO.phones[0]}</p>
                  <p>{BUSINESS_INFO.phones[1]}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-600/10 flex items-center justify-center text-red-600 shrink-0">
                  <Mail size={20} />
                </div>
                <div className="text-slate-400 text-sm">
                  <p>{BUSINESS_INFO.emails[0]}</p>
                  <p>{BUSINESS_INFO.emails[1]}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Anand Infotech. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
