import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO } from "../constants";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "laptop" | "desktop" | null;
  setType: (type: "laptop" | "desktop") => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, type, setType }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h4 className="text-2xl font-bold text-slate-900">
                {type === "laptop" ? "Laptop Configurations" : "Desktop Configurations"}
              </h4>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-500 hover:text-red-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="flex gap-4 mb-8">
                <button 
                  onClick={() => setType("laptop")}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${type === "laptop" ? "bg-red-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                >
                  Laptops
                </button>
                <button 
                  onClick={() => setType("desktop")}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${type === "desktop" ? "bg-red-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                >
                  Desktops
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {(type === "laptop" ? BUSINESS_INFO.laptopConfigs : BUSINESS_INFO.desktopConfigs).map((config: any) => (
                  <div key={config.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col">
                    <h5 className="font-bold text-lg text-slate-900 mb-4">{config.name}</h5>
                    <ul className="space-y-2 mb-6 flex-grow">
                      {config.specs.map((spec: string) => (
                        <li key={spec} className="text-sm text-slate-600 flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-red-500 mt-1 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-slate-200">
                      <p className="text-red-600 font-bold">{config.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-6 rounded-2xl bg-red-50 border border-red-100">
                <p className="text-red-800 text-sm font-medium">
                  * Prices and availability are subject to change. Please contact us for the latest quotes and custom configurations.
                </p>
              </div>
            </div>
            
            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
