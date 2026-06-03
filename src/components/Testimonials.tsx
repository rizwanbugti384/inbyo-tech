import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const loop = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8500);
    return () => clearInterval(loop);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#020617] border-t border-white/5 relative">
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16" id="testimonials-header">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span>Client Perspectives</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight font-sans">
            Trusted By <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Innovators</span>
          </h2>
        </div>

        {/* Dynamic Carousel Container */}
        <div className="relative bg-slate-900/40 border border-white/10 rounded-3xl p-6 md:p-10 min-h-[280px] flex flex-col justify-between backdrop-blur-xl" id="testimonials-carousel">
          
          {/* Big Quotes icon bg watermark */}
          <div className="absolute top-4 left-6 text-slate-900/40 text-8xl font-serif select-none pointer-events-none opacity-20">
            “
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Star line */}
              <div className="flex items-center justify-center space-x-1.5" id="testimonial-stars">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote text text */}
              <p className="text-base sm:text-lg text-slate-200 italic font-medium leading-relaxed font-sans px-4 sm:px-8">
                "{current.quote}"
              </p>

              {/* Client meta avatar information row */}
              <div className="flex items-center justify-center space-x-3.5 pt-4">
                <img 
                  src={current.avatar} 
                  alt={current.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full border border-white/10 object-cover shadow-sm bg-slate-950" 
                />
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white leading-tight">{current.name}</h4>
                  <p className="text-xs text-slate-400 font-mono">{current.role} • <strong>{current.company}</strong></p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Controls arrows */}
          <div className="flex items-center justify-between mt-8 border-t border-white/5 pt-4" id="testimonials-controls">
            
            {/* Dots trackers indicator */}
            <div className="flex items-center space-x-1.5" id="testimonials-dots">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-350 cursor-pointer ${
                    activeIndex === idx ? "w-6 bg-blue-500" : "w-1.5 bg-slate-800 hover:bg-slate-700"
                  }`}
                  id={`testimonial-dot-${idx}`}
                />
              ))}
            </div>

            {/* Left/Right switches buttons */}
            <div className="flex items-center space-x-2" id="testimonial-switches">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl bg-slate-950 border border-white/5 hover:border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-xl bg-slate-950 border border-white/5 hover:border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
