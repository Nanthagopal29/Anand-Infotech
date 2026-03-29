import React, { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight, Cpu, Laptop, Printer, Network, Camera, Settings, ShieldCheck, Wrench } from "lucide-react";
import { BUSINESS_INFO } from "../constants";
import ServiceModal from "../components/ServiceModal";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"laptop" | "desktop" | null>(null);

  const iconMap: Record<string, any> = {
    Cpu,
    Laptop,
    Printer,
    Network,
    Camera,
    Settings,
    ShieldCheck,
    Wrench
  };

  const openModal = (type: "laptop" | "desktop") => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">What We Offer</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Comprehensive IT Services</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We provide a wide range of technology solutions to keep your home and business running smoothly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BUSINESS_INFO.services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const isLaptopService = service.id === "laptops-computers";
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-red-100 transition-all duration-300 cursor-pointer"
                onClick={() => isLaptopService ? openModal("laptop") : null}
              >
                <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all">
                  {isLaptopService ? "View Configurations" : "Inquire Now"} <ChevronRight size={18} />
                </div>
              </motion.div>
            );
          })}
        </div>

        <ServiceModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          type={modalType} 
          setType={setModalType} 
        />

        {/* Products Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">Our Products</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Quality Components & Accessories</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {BUSINESS_INFO.products.map((product, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-4 mx-auto">
                  <Settings size={24} />
                </div>
                <h5 className="font-bold text-slate-900">{product}</h5>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
