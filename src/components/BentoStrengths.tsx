import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CORE_STRENGTHS } from "../data";
import Icon from "./Icon";

export default function BentoStrengths() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Define layout structures for grid items to give a real beautiful uneven Bento Grid structure.
  // We'll give custom grid-span classes corresponding to their structural indices
  const getBentoSpan = (index: number) => {
    if (index === 0) return "lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-indigo-950/10 via-slate-900/40 to-slate-900/10";
    if (index === 3) return "lg:col-span-2 lg:row-span-1 bg-gradient-to-br from-blue-950/10 via-slate-900/40 to-slate-900/10";
    return "lg:col-span-1 lg:row-span-1 bg-slate-900/40";
  };

  return (
    <section id="strengths" className="py-24 bg-[#020617] border-t border-white/5 relative">
      {/* Absolute Decorative Grid */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16" id="strengths-header">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span>Technical Superiority</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight font-sans">
            What Makes Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Different?</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            We don't cut corners. We establish rigid, mathematically structured layouts, bulletproof secure authentication patterns, and optimized code execution channels.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]" id="bento-strengths-grid">
          {CORE_STRENGTHS.map((strength, idx) => {
            const isHovered = hoveredId === strength.id;
            return (
              <div
                key={strength.id}
                onMouseEnter={() => setHoveredId(strength.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group rounded-3xl border border-white/10 hover:border-white/20 backdrop-blur-xl transition-all duration-300 p-6 flex flex-col justify-between relative overflow-hidden cursor-crosshair ${getBentoSpan(
                  idx
                )}`}
                id={`bento-card-${strength.id}`}
              >
                {/* Background glowing gradients */}
                <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-indigo-500/5 to-violet-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Top Row: Icon & Dynamic Metric badge */}
                <div className="flex items-start justify-between relative z-10 w-full">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 text-indigo-400 group-hover:text-blue-400 group-hover:bg-slate-900/50 transition-all duration-300">
                    <Icon name={strength.iconName} className="w-6 h-6" />
                  </div>
                  {strength.metric && (
                    <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full font-bold">
                      {strength.metric}
                    </span>
                  )}
                </div>

                {/* Bottom Row: Text content */}
                <div className="space-y-2 relative z-10">
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors duration-200">
                    {strength.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed line-clamp-3 md:line-clamp-none">
                    {strength.description}
                  </p>
                </div>

                {/* Tiny design lines typical of premium software agency layouts */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-30 transition-opacity duration-300 text-slate-500">
                  <span className="font-mono text-[9px]">IBTY::{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
