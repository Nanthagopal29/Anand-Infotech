import React, { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, CheckCircle2, Copy } from "lucide-react";
import { BUSINESS_INFO } from "../constants";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSuccess(true);
        // Reset form after a delay to allow copy button to work
        setTimeout(() => {
          setFormState({ name: "", email: "", phone: "", service: "", message: "" });
        }, 5000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send email");
      }
    } catch (err: any) {
      console.error("Error sending email:", err);
      setError(err.message || "Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    const text = `Query from ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\nService: ${formState.service}\nMessage: ${formState.message}`;
    navigator.clipboard.writeText(text);
    alert("Query details copied to clipboard! You can now paste them into your email client.");
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Ready to <span className="text-red-600">Upgrade Your Tech?</span>
            </h3>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Have a question or need a quote? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              {[
                { icon: Phone, title: "Call Us", content: BUSINESS_INFO.phones.join(" / "), link: `tel:${BUSINESS_INFO.phones[0]}` },
                { icon: Mail, title: "Email Us", content: BUSINESS_INFO.emails.join(" / "), link: `mailto:${BUSINESS_INFO.emails[0]}` },
                { icon: MapPin, title: "Visit Us", content: BUSINESS_INFO.address, link: "#" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.link}
                  className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-red-100 transition-all group"
                >
                  <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full -mr-16 -mt-16" />
            
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={48} />
                </div>
                <h4 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h4>
                <p className="text-slate-600 mb-8">Thank you for reaching out. We'll get back to you shortly.</p>
                
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-left mb-8">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">If you don't hear from us:</p>
                  <button 
                    onClick={copyToClipboard}
                    className="w-full py-4 bg-white border-2 border-dashed border-slate-200 rounded-xl text-slate-600 font-bold flex items-center justify-center gap-3 hover:border-red-600 hover:text-red-600 transition-all"
                  >
                    <Copy size={20} /> Copy Query Details
                  </button>
                  <p className="text-[10px] text-slate-400 mt-4 text-center italic">
                    You can manually email these details to {BUSINESS_INFO.emails[0]}
                  </p>
                </div>
                
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-red-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 73056 60479"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Service Needed</label>
                    <select 
                      required
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all appearance-none"
                      value={formState.service}
                      onChange={(e) => setFormState({...formState, service: e.target.value})}
                    >
                      <option value="">Select Service</option>
                      {BUSINESS_INFO.services.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-medium">
                    {error}
                  </div>
                )}

                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full py-5 bg-red-600 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-red-700 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:translate-y-0"
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <Send size={20} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
