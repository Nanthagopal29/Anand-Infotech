/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Cpu, 
  Laptop, 
  Printer, 
  Network, 
  Camera, 
  Settings, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Wrench
} from "lucide-react";
import { BUSINESS_INFO } from "./constants";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 bg-red-600 rounded-full opacity-20 animate-pulse" />
            <div className="relative w-8 h-8 border-4 border-red-600 rounded-full border-t-transparent border-r-transparent rotate-45" />
            <div className="absolute w-2 h-2 bg-red-600 rounded-full" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-black text-xl tracking-tighter ${isScrolled ? "text-slate-900" : "text-white"}`}>
              ANAND <span className="text-red-600">INFOTECH</span>
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isScrolled ? "text-slate-500" : "text-white/60"}`}>
              Sales & Service
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium hover:text-red-600 transition-colors ${isScrolled ? "text-slate-700" : "text-white/90"}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? "text-slate-900" : "text-white"} /> : <Menu className={isScrolled ? "text-slate-900" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-800 font-medium text-lg border-b border-slate-100 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-red-600 text-white text-center py-3 rounded-lg font-bold mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-red-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/tech/1920/1080')] bg-cover bg-center opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 font-semibold text-sm mb-6">
            <ShieldCheck size={16} />
            <span>Trusted IT Solutions in Tirupur</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Expert <span className="text-red-600">IT Solutions</span> for Your Business & Home
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-lg">
            From custom PC builds to networking and security camera installations. We provide professional hardware and software services tailored to you.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#services" 
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold text-lg flex items-center gap-2 transition-all"
            >
              Our Services <ArrowRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold text-lg transition-all"
            >
              Contact Us
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8 text-slate-400">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">10+</span>
              <span className="text-sm">Years Experience</span>
            </div>
            <div className="w-px h-10 bg-slate-800" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">500+</span>
              <span className="text-sm">Happy Clients</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:block relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src="https://picsum.photos/seed/pcbuild/800/600" 
              alt="Custom PC Build" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                <p className="text-white font-semibold">Latest Project</p>
                <p className="text-slate-300 text-sm">High-Performance Gaming Rig for a local client.</p>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

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
    <section id="services" className="py-24 bg-white">
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

        {/* Modal for Configurations */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
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
                    {modalType === "laptop" ? "Laptop Configurations" : "Desktop Configurations"}
                  </h4>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-500 hover:text-red-600 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="p-6 overflow-y-auto">
                  <div className="flex gap-4 mb-8">
                    <button 
                      onClick={() => setModalType("laptop")}
                      className={`px-6 py-2 rounded-full font-bold transition-all ${modalType === "laptop" ? "bg-red-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                    >
                      Laptops
                    </button>
                    <button 
                      onClick={() => setModalType("desktop")}
                      className={`px-6 py-2 rounded-full font-bold transition-all ${modalType === "desktop" ? "bg-red-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                    >
                      Desktops
                    </button>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {(modalType === "laptop" ? BUSINESS_INFO.laptopConfigs : BUSINESS_INFO.desktopConfigs).map((config: any) => (
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
                  <a 
                    href="#contact" 
                    onClick={() => setIsModalOpen(false)}
                    className="px-8 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-all"
                  >
                    Inquire for Custom Order
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Additional Info */}
        <div className="mt-20 p-10 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-3xl font-bold mb-6">Need Components & Accessories?</h4>
              <p className="text-slate-400 mb-8 text-lg">
                We stock a wide range of high-quality PC and laptop components, peripherals, and accessories.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {BUSINESS_INFO.products.map((product) => (
                  <div key={product} className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-red-500" />
                    <span>{product}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                <Wrench className="mx-auto mb-4 text-red-500" size={32} />
                <p className="font-bold">Expert Repair</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                <Clock className="mx-auto mb-4 text-red-500" size={32} />
                <p className="font-bold">Fast Turnaround</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                <ShieldCheck className="mx-auto mb-4 text-red-500" size={32} />
                <p className="font-bold">Genuine Parts</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                <Phone className="mx-auto mb-4 text-red-500" size={32} />
                <p className="font-bold">24/7 Support</p>
              </div>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full" />
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/office/800/1000" 
              alt="Anand Infotech Office" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl hidden lg:block max-w-xs border border-slate-100">
            <p className="text-slate-900 font-bold text-lg mb-2">Quality Service Guaranteed</p>
            <p className="text-slate-600 text-sm">We take pride in our workmanship and ensure every client is 100% satisfied with our IT solutions.</p>
          </div>
        </div>

        <div>
          <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">About Us</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Your Local IT Experts in Tirupur</h3>
          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
            Founded by <span className="font-bold text-slate-900">{BUSINESS_INFO.owner}</span>, Anand Infotech has been serving the Tirupur community with professional IT sales and services for over a decade.
          </p>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            We specialize in custom PC builds, laptop repairs, printer maintenance, networking solutions, and security camera installations. Our mission is to provide reliable, high-quality technology services at competitive prices.
          </p>
          
          <div className="space-y-4 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center text-red-600 shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Certified Technicians</p>
                <p className="text-slate-600">Our team consists of highly skilled and experienced IT professionals.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center text-red-600 shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Genuine Components</p>
                <p className="text-slate-600">We only use and sell authentic spare parts and accessories.</p>
              </div>
            </div>
          </div>

          <a href="#contact" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold transition-all inline-block">
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "pc-build",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        // Reset success message after 10 seconds
        setTimeout(() => {
          setIsSuccess(false);
          setFormState({
            name: "",
            email: "",
            phone: "",
            service: "pc-build",
            message: ""
          });
        }, 10000);
      } else {
        alert("Failed to send email. Please try again later or use the manual copy button.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Get in Touch for a Free Quote</h3>
            <p className="text-slate-600 text-lg mb-10">
              Have a question or need a service? Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Our Location</p>
                  <p className="text-slate-600">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Call Us</p>
                  {BUSINESS_INFO.phones.map(phone => (
                    <p key={phone} className="text-slate-600">{phone}</p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Email Us</p>
                  {BUSINESS_INFO.emails.map(email => (
                    <p key={email} className="text-slate-600">{email}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="mt-12 rounded-2xl overflow-hidden h-64 bg-slate-100 border border-slate-200 relative">
               <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                  <MapPin size={48} className="mb-4 opacity-20" />
                  <p className="font-semibold">Map of Tirupur Location</p>
                  <p className="text-sm">Jayalakshmi Nagar, Mannarai, Tirupur</p>
               </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    placeholder="7305660479"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Service Required</label>
                <select 
                  value={formState.service}
                  onChange={(e) => setFormState({...formState, service: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-white"
                >
                  {BUSINESS_INFO.services.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Your Message</label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${isSubmitting ? "bg-slate-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 shadow-lg shadow-red-200"}`}
              >
                {isSubmitting ? "Sending..." : "Send Query"} <ArrowRight size={20} />
              </button>

              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-100 rounded-xl text-green-700 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} />
                    <span className="font-semibold text-sm">Thank you! Your query has been prepared.</span>
                  </div>
                  <p className="text-xs text-green-600">If your email client didn't open automatically, please click the button below to copy the query details and send them manually to <span className="font-bold underline">{BUSINESS_INFO.emails[0]}</span>.</p>
                  <button 
                    onClick={() => {
                      const text = `Name: ${formState.name}\nPhone: ${formState.phone}\nEmail: ${formState.email}\nService: ${formState.service}\n\nMessage:\n${formState.message}`;
                      navigator.clipboard.writeText(text);
                      alert("Query details copied to clipboard!");
                    }}
                    className="w-full py-2 bg-green-600 text-white rounded-lg text-xs font-bold hover:bg-green-700 transition-all"
                  >
                    Copy Query Details
                  </button>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-red-600 rounded-full opacity-20" />
                <div className="relative w-8 h-8 border-4 border-red-600 rounded-full border-t-transparent border-r-transparent rotate-45" />
                <div className="absolute w-2 h-2 bg-red-600 rounded-full" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-black text-xl tracking-tighter">
                  ANAND <span className="text-red-600">INFOTECH</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                  Sales & Service
                </span>
              </div>
            </a>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Professional IT sales and services in Tirupur. We specialize in PC builds, laptop repairs, and networking solutions.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 transition-all cursor-pointer">
                <span className="font-bold">f</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 transition-all cursor-pointer">
                <span className="font-bold">in</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 transition-all cursor-pointer">
                <span className="font-bold">ig</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-red-500 transition-all">Home</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-all">Services</a></li>
              <li><a href="#about" className="hover:text-red-500 transition-all">About Us</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition-all">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#services" className="hover:text-red-500 transition-all">PC Build Service</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-all">Laptop Repair</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-all">Networking</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-all">CCTV Installation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red-500 shrink-0 mt-1" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-red-500 shrink-0" />
                <span>{BUSINESS_INFO.phones[0]}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-red-500 shrink-0" />
                <span className="text-sm">{BUSINESS_INFO.emails[0]}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Anand Infotech. All Rights Reserved. Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-red-100 selection:text-red-600">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
