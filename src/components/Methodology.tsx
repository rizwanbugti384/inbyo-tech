import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ClipboardList, Eye } from "lucide-react";
import { METHODOLOGY_STEPS } from "../data";
import Icon from "./Icon";

export default function Methodology() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const activeStepData = METHODOLOGY_STEPS.find(s => s.step === activeStep) || METHODOLOGY_STEPS[0];

  return (
    <section id="methodology" className="py-24 bg-[#020617] border-t border-white/5 relative">
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16" id="methodology-header">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Development Blueprint</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight font-sans">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Work & Execute</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            We follow a strictly structured roadmap to go from conceptual drafts straight to enterprise live deployment targets without unexpected friction.
          </p>
        </div>

        {/* Process Roadmap Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="methodology-roadmap-dashboard">
          
          {/* Timeline selector (col-span-5) */}
          <div className="lg:col-span-5 space-y-3" id="methodology-selector-col">
            {METHODOLOGY_STEPS.map((pStep) => {
              const isActive = pStep.step === activeStep;
              return (
                <button
                  key={pStep.step}
                  onClick={() => setActiveStep(pStep.step)}
                  className={`w-full text-left p-4 rounded-3xl border transition-all duration-300 flex items-center space-x-4 cursor-pointer outline-none relative group ${
                    isActive
                      ? "bg-slate-900/85 border-blue-500/40 shadow-xl shadow-blue-500/5 text-white"
                      : "bg-slate-900/40 border-white/10 hover:border-white/20 hover:bg-slate-900/60 text-slate-300"
                  }`}
                  id={`roadmap-selector-step-${pStep.step}`}
                >
                  {/* Step Code label */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs border ${
                    isActive
                      ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white border-blue-400"
                      : "bg-slate-950/80 text-slate-400 border-white/5 group-hover:text-slate-200"
                  }`}>
                    0{pStep.step}
                  </div>

                  <div className="flex-1 space-y-0.5">
                    <h3 className={`text-sm font-bold tracking-tight transition-colors ${
                      isActive ? "text-blue-400" : "text-slate-300 group-hover:text-slate-100"
                    }`}>
                      {pStep.title}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-mono tracking-widest leading-none uppercase font-bold">
                      STAGE 0{pStep.step} PIPELINE
                    </p>
                  </div>

                  {isActive && (
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed step values (col-span-7) */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-white/10 rounded-3xl p-6 md:p-8 min-h-[350px] relative overflow-hidden backdrop-blur-xl" id="methodology-details-col">
            
            {/* Ambient watermarks */}
            <div className="absolute top-4 right-6 text-7xl font-mono font-bold text-slate-900/40 opacity-10 select-none">
              STEP 0{activeStepData.step}
            </div>

            {/* Content body layout */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepData.step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 relative z-10"
              >
                
                {/* Icon header */}
                <div className="flex items-center space-x-4">
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-white/5 text-blue-400 shadow-inner">
                    <Icon name={activeStepData.iconName} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Step {activeStepData.step}: {activeStepData.title}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono uppercase tracking-widest">
                      BLUEPRINT OPERATIONS SPECIFICATION
                    </span>
                  </div>
                </div>

                {/* Core description */}
                <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                  {activeStepData.desc}
                </p>

                {/* Deliverables section */}
                <div className="pt-6 border-t border-white/5 space-y-4">
                  <div className="flex items-center space-x-2 text-[10px] font-bold text-slate-200 tracking-wider uppercase font-mono">
                    <ClipboardList className="w-4 h-4 text-indigo-400" />
                    <span>CLIENT DELIVERABLES RECEIVED:</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="methodology-deliverables-ul">
                    {activeStepData.deliverables.map((item, id) => (
                      <li
                        key={id}
                        className="p-3 rounded-xl bg-slate-950/65 border border-white/5 text-xs text-slate-300 flex items-center space-x-2.5 font-sans"
                      >
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-sans leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
