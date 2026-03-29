import React from "react";
import { motion } from "motion/react";
import { ChevronRight, ShieldCheck, Wrench, Cpu, Laptop, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import { BUSINESS_INFO } from "../constants";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
          <img 
            src="https://picsum.photos/seed/tech/1920/1080?blur=4" 
            alt="Tech Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-red-600 font-bold tracking-[0.3em] uppercase text-sm mb-6 flex items-center gap-4">
                <span className="w-12 h-[2px] bg-red-600" /> {BUSINESS_INFO.tagline}
              </h2>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
                ELEVATE YOUR <br />
                <span className="text-red-600">DIGITAL WORLD.</span>
              </h1>
              <p className="text-slate-400 text-xl md:text-2xl mb-12 leading-relaxed font-medium">
                Premier IT solutions for home and business. From custom PC builds to expert repairs, we power your technology.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Link 
                  to="/services" 
                  className="px-10 py-5 bg-red-600 text-white rounded-full font-bold uppercase tracking-widest hover:bg-red-700 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-3"
                >
                  Our Services <ChevronRight size={20} />
                </Link>
                <Link 
                  to="/contact" 
                  className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold uppercase tracking-widest hover:bg-white/20 transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Trusted Service", desc: "Over years of experience in providing reliable IT solutions." },
              { icon: Wrench, title: "Expert Repairs", desc: "Certified technicians for all your hardware and software needs." },
              { icon: Cpu, title: "Custom Builds", desc: "High-performance PCs tailored to your specific requirements." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 border border-slate-100"
              >
                <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 mb-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
