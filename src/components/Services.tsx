import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowRight, CheckCircle, Clock, DollarSign } from "lucide-react";
import { SERVICES } from "../data";
import Icon from "./Icon";

interface ServicesProps {
  onSelectServiceForQuote: (serviceId: string) => void;
  onNavigate: (sectionId: string) => void;
}

export default function Services({ onSelectServiceForQuote, onNavigate }: ServicesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const handleQuoteClick = (serviceId: string) => {
    onSelectServiceForQuote(serviceId);
    onNavigate("contact");
  };

  return (
    <section id="services" className="py-24 bg-[#020617] border-t border-white/5 relative">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16" id="services-header">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span>Offerings & Capabilities</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight font-sans">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Do & Deliver</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            We deliver highly robust engineering endpoints. Whether you need a high-frequency Django database adapter, an exquisite NextJS canvas, or a modern Gemini-driven LLM orchestration.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="services-grid">
          {SERVICES.map((srv) => {
            const isExpanded = expandedId === srv.id;
            return (
              <motion.div
                key={srv.id}
                layout
                className={`rounded-3xl border backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isExpanded
                    ? "col-span-1 md:col-span-2 bg-slate-900/85 border-blue-500/40 shadow-xl shadow-blue-500/5"
                    : "bg-slate-900/40 border-white/10 hover:border-white/20 hover:bg-slate-900/60"
                }`}
                onClick={() => toggleExpand(srv.id)}
                id={`service-card-${srv.id}`}
              >
                <div className="p-6 space-y-4">
                  {/* Service Top Row */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-950 border border-white/5 text-blue-400 group-hover:text-blue-300 transition-colors">
                      <Icon name={srv.icon} className="w-6 h-6" />
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      className="text-slate-500 hover:text-slate-300"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Header Titles */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-white">{srv.title}</h3>
                    <p className="text-sm text-slate-400 font-sans leading-relaxed">
                      {isExpanded ? srv.fullDesc : srv.shortDesc}
                    </p>
                  </div>

                  {/* Expanded Content Section */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pt-4 border-t border-white/5 space-y-4"
                        onClick={(e) => e.stopPropagation()} // Prevent closing card when clicking child elements
                      >
                        {/* Highlights (Estimation pricing) */}
                        <div className="grid grid-cols-2 gap-4 bg-slate-950 p-3 rounded-xl border border-white/5 text-xs text-slate-400 font-mono">
                          <div className="flex items-center space-x-1.5">
                            <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Starts: <strong>${srv.basePrice}</strong></span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <Clock className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Delivery: <strong>{srv.baseDays} Days</strong></span>
                          </div>
                        </div>

                        {/* Tech Stacks Tags */}
                        <div className="space-y-2">
                          <span className="text-[10px] text-slate-500 font-mono tracking-widest block uppercase font-bold">DEVELOPMENT STACK</span>
                          <div className="flex flex-wrap gap-1.5">
                            {srv.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 text-[10px] rounded bg-white/5 border border-white/5 text-blue-400 font-mono font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA Sub Buttons */}
                        <button
                          onClick={() => handleQuoteClick(srv.id)}
                          className="w-full inline-flex items-center justify-center p-2.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:scale-102 transition-transform duration-200 cursor-pointer"
                        >
                          Calculate Estimated Pricing
                          <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer status line elements */}
                {!isExpanded && (
                  <div className="px-6 py-2 border-t border-white/5 bg-slate-950/20 text-[10px] text-slate-500 font-mono flex items-center justify-between">
                    <span>Base Cycle: ~{srv.baseDays}d</span>
                    <span className="text-blue-400 hover:underline">Explore Specs</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
