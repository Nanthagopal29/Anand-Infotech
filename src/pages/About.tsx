import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Wrench, Cpu, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO } from "../constants";

const About = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/office/800/1000" 
                alt="Our Office" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-10">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-red-600 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl">
                    <span className="text-3xl font-black leading-none">10+</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest">Years</span>
                  </div>
                  <div className="text-white">
                    <h4 className="text-xl font-bold">Experience in IT</h4>
                    <p className="text-white/60 text-sm">Serving Tirupur & Surroundings</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">About Anand Infotech</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Your Trusted Partner for <span className="text-red-600">All IT Sales & Services</span>
            </h3>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              At Anand Infotech, we believe that technology should empower you, not frustrate you. With over a decade of experience, we've built a reputation for excellence in delivering high-quality IT solutions tailored to your needs.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {[
                { icon: ShieldCheck, title: "Quality Guarantee", desc: "We only use genuine parts and provide warranties for our services." },
                { icon: Wrench, title: "Expert Support", desc: "Our technicians are highly skilled and stay updated with the latest tech." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {[
                "Fast & Reliable Service Turnaround",
                "Transparent Pricing with No Hidden Costs",
                "Customized Solutions for Home & Business",
                "On-site & Remote Support Options"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-slate-700 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
