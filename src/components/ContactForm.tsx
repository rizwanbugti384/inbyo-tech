import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, Ticket, AlertCircle, FileCode } from "lucide-react";
import { SERVICES } from "../data";

interface ContactFormProps {
  injectedSpecs: {
    serviceName: string;
    totalCost: number;
    totalDays: number;
    scaleLabel: string;
    addonsSelectedList: string[];
  } | null;
  onClearInjectedSpecs: () => void;
}

export default function ContactForm({ injectedSpecs, onClearInjectedSpecs }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: SERVICES[0].title,
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketId, setTicketId] = useState<string | null>(null);

  // Synchronize on specification injection
  useEffect(() => {
    if (injectedSpecs) {
      setFormData((prev) => ({
        ...prev,
        service: injectedSpecs.serviceName,
        message: prev.message || `Custom Brief estimated with Calculator:\n- Service: ${injectedSpecs.serviceName}\n- Scale: ${injectedSpecs.scaleLabel}\n- Est. Budget: $${injectedSpecs.totalCost.toLocaleString()}\n- Est. Days: ${injectedSpecs.totalDays} Days\n- Selected Addons: ${injectedSpecs.addonsSelectedList.length > 0 ? injectedSpecs.addonsSelectedList.join(", ") : "None"}\n`
      }));
    }
  }, [injectedSpecs]);

  const validate = () => {
    const tempErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Please write down your name.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Please supply your email ID.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please supply a valid email pathway.";
      isValid = false;
    }

    if (formData.message.trim().length < 10) {
      tempErrors.message = "Please write a slightly longer brief (at least 10 letters).";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate database pipeline
    setTimeout(() => {
      // Create random Ticket Reference ID
      const randomCode = `IBT-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketId(randomCode);
      setIsSubmitting(false);

      // Print operational payload to console logs as required for standard telemetry proxies
      console.log(`[INBYOTECH] Submission received. Details:`, {
        ...formData,
        ticketReference: randomCode,
        injectedEstimateDetails: injectedSpecs
      });
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      service: SERVICES[0].title,
      message: ""
    });
    setTicketId(null);
    onClearInjectedSpecs();
  };

  return (
    <section id="contact" className="py-24 bg-[#020617] border-t border-white/5 relative">
      <div className="absolute top-1/2 right-1/10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16" id="contact-header">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
            <span>Get A Quote</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight font-sans">
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">Project</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            Have a product concept or a system migration ready to deploy? Let's discuss plans. Complete details below, and we will catch up within 12 business hours.
          </p>
        </div>

        {/* Dynamic State layouts switch */}
        <div className="bg-slate-900/40 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl" id="contact-panel-card">
          
          {ticketId ? (
            /* SUCCESS TICKET STATE SCREEN */
            <div className="text-center space-y-8 py-6" id="contact-success-state">
              <div className="flex justify-center flex-col items-center space-y-3">
                <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-inner">
                  <CheckCircle2 className="w-12 h-12 animate-bounce" />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">Project Ticket Received!</h3>
              </div>

              {/* Display Ticket Code box */}
              <div className="bg-slate-950 border border-white/5 p-5 rounded-2xl divide-y divide-white/5 max-w-md mx-auto space-y-3">
                <div className="flex items-center justify-between pb-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center space-x-1.5">
                    <Ticket className="w-4 h-4 text-indigo-400" />
                    <span>TICKET ID CODE:</span>
                  </span>
                  <span className="font-extrabold text-indigo-400">{ticketId}</span>
                </div>
                
                <div className="pt-3 text-left space-y-1.5 text-xs text-slate-300">
                  <div className="font-sans">Name: <strong className="text-white">{formData.name}</strong></div>
                  <div className="font-sans">Email target: <strong className="text-white">{formData.email}</strong></div>
                  <div className="font-sans">Core stack selected: <strong className="text-white">{formData.service}</strong></div>
                </div>
              </div>

              <p className="text-sm text-slate-400 font-sans max-w-sm mx-auto leading-relaxed">
                Thank you! Our Founder & Lead Developer (Rizwan) has registered your specifications. We will send an initial review and scheduling times to <strong className="text-slate-200">{formData.email}</strong> soon.
              </p>

              <button
                onClick={handleReset}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-slate-300 text-xs font-semibold hover:text-white hover:bg-slate-900 cursor-pointer"
              >
                Submit another inquiry response
              </button>
            </div>
          ) : (
            /* FORM ENTRY SCREEN */
            <form onSubmit={handleSubmit} className="space-y-6" id="contact-active-form">
              
              {/* IF Specifications are Injected by Calculator, display custom premium notification banner */}
              {injectedSpecs && (
                <div className="p-3.5 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-xs text-indigo-300 flex items-start justify-between">
                  <div className="flex items-start space-x-2.5">
                    <FileCode className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-200 font-mono tracking-wide">ESTIMATE INJECTED SUCCESS</h4>
                      <p className="font-sans mt-0.5">
                        Selected <strong>{injectedSpecs.serviceName}</strong>. Budget estimated at <strong>${injectedSpecs.totalCost.toLocaleString()}</strong> over <strong>{injectedSpecs.totalDays} days</strong>. Brief is preloaded.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={onClearInjectedSpecs}
                    className="text-indigo-400 hover:text-rose-400 font-mono font-bold uppercase text-[10px] cursor-pointer"
                  >
                    Reset Specs
                  </button>
                </div>
              )}

              {/* Name Details */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-200 uppercase font-mono tracking-wider block">YOUR CONTACT NAME *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Richard Hendricks"
                  className={`w-full p-3.5 rounded-xl bg-slate-950/80 border text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500/40 focus:border-indigo-500/40 ${
                    errors.name ? "border-rose-500" : "border-white/5"
                  }`}
                  id="contact-field-name"
                />
                {errors.name && (
                  <p className="text-[11px] text-rose-500 font-mono flex items-center space-x-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Details */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-200 uppercase font-mono tracking-wider block">EMAIL CORRESPONDENCE *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. richard@piedpiper.com"
                  className={`w-full p-3.5 rounded-xl bg-slate-950/80 border text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500/40 focus:border-indigo-500/40 ${
                    errors.email ? "border-rose-500" : "border-white/5"
                  }`}
                  id="contact-field-email"
                />
                {errors.email && (
                  <p className="text-[11px] text-rose-500 font-mono flex items-center space-x-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Service Selection option dropdown */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-200 uppercase font-mono tracking-wider block">CORE ARCHITECTURE INTEREST *</label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-3.5 rounded-xl bg-slate-950/80 border border-white/5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500/40 focus:border-indigo-500/40 appearance-none cursor-pointer"
                    id="contact-field-service"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title} className="bg-slate-950 text-white">{s.title}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                    ▼
                  </div>
                </div>
              </div>

              {/* Message Description brief */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-200 uppercase font-mono tracking-wider block">PROJECT SPEC BRIEF SOLUTIONS *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Describe your goals, requirements, desired timeline, or copy-paste calculator briefs..."
                  className={`w-full p-3.5 rounded-xl bg-slate-950/80 border text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500/40 focus:border-indigo-500/40 font-sans ${
                    errors.message ? "border-rose-500" : "border-white/5"
                  }`}
                  id="contact-field-message"
                />
                {errors.message && (
                  <p className="text-[11px] text-rose-500 font-mono flex items-center space-x-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-950/20 active:scale-95 disabled:opacity-50 transition-all cursor-pointer group"
                id="contact-field-submit"
              >
                {isSubmitting ? (
                  <span>Dispatching Specs payload...</span>
                ) : (
                  <>
                    <span>Dispatch Project Brief Specs</span>
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
