import React, { useState, useEffect } from "react";
import { DollarSign, Clock, Check, Plus, Minus, Calculator as CalcIcon, Trash2, ArrowRight } from "lucide-react";
import { SERVICES } from "../data";

interface CalculatorProps {
  selectedServiceId: string | null;
  onInjectSpecs: (specs: {
    serviceName: string;
    totalCost: number;
    totalDays: number;
    scaleLabel: string;
    addonsSelectedList: string[];
  }) => void;
}

export default function Calculator({ selectedServiceId, onInjectSpecs }: CalculatorProps) {
  // Map base services
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [projectScale, setProjectScale] = useState<"mvp" | "professional" | "enterprise">("professional");

  // Checklist of available premium add-ons
  const ADD_ONS = [
    { id: "database-analytics", label: "Advanced Database Analytics", cost: 800, days: 4, desc: "Recharts visual charts dashboards, database indices speed tuning." },
    { id: "secure-auth", label: "Secure Multi-Auth Systems", cost: 500, days: 2, desc: "Role-based credentials control, strict JWT sessions expiry blocks." },
    { id: "gemini-llm", label: "Gemini Generative AI Integration", cost: 1200, days: 5, desc: "AI smart content summarizer and prompt workflows wrappers." },
    { id: "companion-app", label: "Cross-platform Mobile Companion", cost: 1900, days: 10, desc: "Cross-platform React Native/Expo responsive mobile shells." }
  ];

  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  // Synchronize state if active service changes from parent
  useEffect(() => {
    if (selectedServiceId) {
      const match = SERVICES.find((s) => s.id === selectedServiceId);
      if (match) {
        setSelectedService(match);
      }
    }
  }, [selectedServiceId]);

  // Pricing scales variables multipliers
  const getScaleMultiplier = () => {
    if (projectScale === "mvp") return { cost: 0.8, days: 0.8, label: "MVP / Core Proof of Concept" };
    if (projectScale === "enterprise") return { cost: 1.5, days: 1.3, label: "Enterprise Scale with high SLAs" };
    return { cost: 1.0, days: 1.0, label: "Standard Production Ready" };
  };

  // Calculations loops
  const multiplier = getScaleMultiplier();
  const baseCost = selectedService.basePrice * multiplier.cost;
  const baseDays = Math.ceil(selectedService.baseDays * multiplier.days);

  const addonsCost = ADD_ONS.filter((a) => selectedAddons.includes(a.id)).reduce((sum, current) => sum + current.cost, 0);
  const addonsDays = ADD_ONS.filter((a) => selectedAddons.includes(a.id)).reduce((sum, current) => sum + current.days, 0);

  const totalCost = Math.round(baseCost + addonsCost);
  const totalDays = baseDays + addonsDays;

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const clearAddons = () => {
    setSelectedAddons([]);
  };

  const handleInject = () => {
    const addonsList = ADD_ONS.filter((a) => selectedAddons.includes(a.id)).map((a) => a.label);
    onInjectSpecs({
      serviceName: selectedService.title,
      totalCost,
      totalDays,
      scaleLabel: multiplier.label,
      addonsSelectedList: addonsList
    });
  };

  return (
    <section id="calculator" className="py-24 bg-[#020617] border-t border-white/5 relative">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-1/10 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16" id="calculator-header">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Range Calculator</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight font-sans">
            Calculate Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Budget Range</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Tell us about your next project! Tailor specifications, scaling requirements, and integration add-ons to receive an instant timeline and price range calculation.
          </p>
        </div>

        {/* Builder Matrix Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="calculator-dashboard">
          
          {/* Options side (col-span-7) */}
          <div className="lg:col-span-7 space-y-8" id="calculator-options-col">
            
            {/* Step 1: Select Core Service */}
            <div className="space-y-3 bg-slate-900/20 border border-white/10 rounded-3xl p-5 backdrop-blur-xl" id="calc-step-service">
              <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block font-bold">STAGE 1: CORE OFFERING SPECIFICATION</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedService.id === s.id
                        ? "bg-blue-600/10 border-blue-500 text-blue-400 font-bold"
                        : "bg-slate-950/60 border-white/5 text-slate-300 hover:text-white hover:border-white/15"
                    }`}
                  >
                    <div className="text-xs font-bold leading-tight font-sans">{s.title}</div>
                    <div className="text-[10px] text-slate-400 mt-1 font-mono">Base: ${s.basePrice}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Project Scale multiplier */}
            <div className="space-y-3 bg-slate-900/20 border border-white/10 rounded-3xl p-5 backdrop-blur-xl" id="calc-step-scale">
              <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block font-bold">STAGE 2: PROJECT SCALE & SLA REQUIREMENTS</span>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "mvp", title: "Minimal MVP", mod: "x0.8 Cost/Time" },
                  { id: "professional", title: "Professional", mod: "Standard Stacks" },
                  { id: "enterprise", title: "Enterprise", mod: "x1.5 Tech/SLAs" }
                ].map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => setProjectScale(sc.id as any)}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                      projectScale === sc.id
                        ? "bg-indigo-600/10 border-indigo-500 text-indigo-400 font-bold shadow-inner"
                        : "bg-slate-950/60 border-white/5 text-slate-300 hover:text-white hover:border-white/15"
                    }`}
                  >
                    <div className="text-xs font-bold font-sans">{sc.title}</div>
                    <div className="text-[9px] text-slate-400 font-mono mt-0.5">{sc.mod}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Integration Addons list checkboxes */}
            <div className="space-y-3 bg-slate-900/20 border border-white/10 rounded-3xl p-5 backdrop-blur-xl" id="calc-step-addons">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block font-bold">STAGE 3: CHOOSE ADD-ON INTEGRATIONS</span>
                {selectedAddons.length > 0 && (
                  <button
                    onClick={clearAddons}
                    className="inline-flex items-center space-x-1 text-[10px] text-rose-400 font-mono hover:underline cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Clear additions</span>
                  </button>
                )}
              </div>

              <div className="space-y-2">
                {ADD_ONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isChecked
                          ? "bg-slate-900 border-indigo-500/30 text-white"
                          : "bg-slate-950/65 border-white/5 text-slate-400 hover:bg-slate-900/40 hover:border-white/15"
                      }`}
                    >
                      <div className="flex items-start space-x-3 max-w-[80%]">
                        <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                          isChecked ? "bg-indigo-600 border-indigo-500 text-white" : "border-white/10 bg-slate-950"
                        }`}>
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <div>
                          <div className={`text-xs font-bold leading-tight ${isChecked ? "text-white" : "text-slate-300"}`}>
                            {addon.label}
                          </div>
                          <p className="text-[10px] text-slate-400 font-sans mt-0.5 line-clamp-1">
                            {addon.desc}
                          </p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-xs font-bold text-slate-200 font-mono">+${addon.cost}</div>
                        <div className="text-[10px] text-slate-400 font-mono">+{addon.days}d</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results calculation side (col-span-5) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900/60 to-slate-950/60 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[460px] shadow-2xl shadow-indigo-950/20 backdrop-blur-xl" id="calculator-results-col">
            
            <div className="space-y-6">
              {/* Header Label details */}
              <div className="space-y-1">
                <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block leading-none font-bold">PROJECT BRIEF SPEC CHECK</span>
                <h3 className="text-lg font-extrabold text-white">Calculated Estimate</h3>
              </div>

              {/* Items summary table */}
              <div className="space-y-2 border-y border-white/5 py-4 font-mono text-[11px] text-slate-400">
                <div className="flex items-center justify-between">
                  <span>Core Architecture:</span>
                  <span className="text-slate-200 font-bold">{selectedService.title}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Scaling profile:</span>
                  <span className="text-slate-200 uppercase font-bold">{projectScale}</span>
                </div>
                {selectedAddons.length > 0 && (
                  <div className="flex items-start justify-between">
                    <span>Integration modules:</span>
                    <span className="text-slate-200 text-right max-w-[180px] truncate block font-bold" title={selectedAddons.join(", ")}>
                      {selectedAddons.length} selected
                    </span>
                  </div>
                )}
              </div>

              {/* Mega Figures metrics */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Cost result panel */}
                <div className="bg-slate-950/80 border border-white/5 p-4 rounded-2xl space-y-1 text-center">
                  <div className="flex items-center justify-center space-x-1 text-xs text-slate-400 font-mono">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    <span>EST. DEV BUDGET</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-mono font-black text-white tracking-tight animate-pulse">
                    ${totalCost.toLocaleString()}
                  </div>
                </div>

                {/* Days result panel */}
                <div className="bg-slate-950/80 border border-white/5 p-4 rounded-2xl space-y-1 text-center">
                  <div className="flex items-center justify-center space-x-1 text-xs text-slate-400 font-mono">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>EST. TIMELINE CYCLE</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-mono font-black text-white tracking-tight">
                    {totalDays} Days
                  </div>
                </div>

              </div>

              {/* Scope assurance text info */}
              <p className="text-[10px] sm:text-xs text-slate-400 leading-relaxed font-sans text-center max-w-sm mx-auto">
                *Estimates depend upon specific business scopes. Direct deployment and API subscription costs are separate.
              </p>
            </div>

            {/* CTA Interaction Inject parameters */}
            <div className="pt-6 border-t border-white/5 mt-6 md:mt-0">
              <button
                onClick={handleInject}
                className="w-full inline-flex items-center justify-center px-5 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm hover:from-emerald-500 hover:to-teal-500 shadow-xl shadow-emerald-950/20 active:scale-95 transition-all cursor-pointer group"
              >
                Inject Estimate into Form Below
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
