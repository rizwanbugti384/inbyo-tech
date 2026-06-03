import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles, Code2, Cpu, Globe, Database, Terminal } from "lucide-react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [activeStat, setActiveStat] = useState<number | null>(null);
  const [animatedText, setAnimatedText] = useState("Scale");
  const words = ["Scale", "Innovate", "Dominate", "Inspire"];

  // Interactive states for biotech dashboard mockup
  const [cpuUsage, setCpuUsage] = useState(94);
  const [networkLatency, setNetworkLatency] = useState(12);
  const [activeNodes, setActiveNodes] = useState(142);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % words.length;
      setAnimatedText(words[i]);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Soft real-time jitter for metrics to make it look active & premium!
  useEffect(() => {
    const metricInterval = setInterval(() => {
      setCpuUsage((prev) => Math.max(91, Math.min(99, prev + (Math.random() > 0.5 ? 1 : -1))));
      setNetworkLatency((prev) => Math.max(9, Math.min(16, prev + (Math.random() > 0.7 ? 1 : -1))));
      if (Math.random() > 0.8) {
        setActiveNodes((prev) => prev + (Math.random() > 0.5 ? 1 : -1));
      }
    }, 3000);
    return () => clearInterval(metricInterval);
  }, []);

  const stats = [
    { value: "54+", label: "Products Shipped", detail: "Fully custom, highly secure apps, backends, and responsive UIs." },
    { value: "99.2%", label: "Client Satisfaction", detail: "Based on our post-deployment QA checkpoints and active SLAs." },
    { value: "12+", label: "Cutting Edge Techs", level: "From Django REST pipelines to vector database search systems." },
    { value: "2x", label: "Faster Development", detail: "Leveraging our strict modular boilerplates and automated testing workflows." }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#020617] text-white"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Explanatory Columns */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left" id="hero-left-col">
            
            {/* Tagline Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest"
              id="hero-tagline-badge"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span>Next-Gen Bio-Tech & Software Systems</span>
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans font-extrabold leading-[1.1] tracking-tight text-white" id="hero-main-title">
              Architecting <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
                Digital Growth
              </span>
            </h1>

            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
              id="hero-subtext"
            >
              At Inbyo Tech, we design, develop, and deploy enterprise-level backends, stunning frontends, and AI solutions. Empowering applications with resilient architectures merging logical clean-code metrics with computational efficiency.
            </motion.p>

            {/* Buttons UI */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              id="hero-cta-group"
            >
              <button
                onClick={() => onNavigate("calculator")}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-bold text-white shadow-xl shadow-blue-900/20 hover:scale-105 transition-transform duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                Estimate Project Cost
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => onNavigate("portfolio")}
                className="w-full sm:w-auto px-8 py-4 border border-white/10 rounded-xl font-bold text-white backdrop-blur-sm hover:bg-white/5 transition-colors duration-200 cursor-pointer"
              >
                View Portfolio
              </button>
            </motion.div>

            {/* Micro Stats Row */}
            <div className="pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4" id="hero-stats-row">
              {stats.map((stat, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveStat(idx)}
                  onMouseLeave={() => setActiveStat(null)}
                  className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer relative group overflow-hidden"
                >
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white group-hover:text-blue-400 transition-colors duration-200">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-tighter font-semibold">
                    {stat.label}
                  </div>
                  
                  {/* Absolute subtle glowing aura */}
                  <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-indigo-500/10 rounded-full blur-lg group-hover:bg-blue-500/25 transition-all duration-300" />

                  {/* Pop up helper details */}
                  <AnimatePresence>
                    {activeStat === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute bottom-[105%] left-0 right-0 p-3 rounded-lg bg-[#090d20] border border-white/10 text-left text-slate-300 text-[11px] shadow-xl z-20 pointer-events-none"
                      >
                        {stat.detail || stat.level}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          </div>

          {/* Hero Visual Column (Floating code IDE / Immersive Dashboard element) */}
          <div className="lg:col-span-5 relative flex items-center justify-center px-4" id="hero-right-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative w-full max-w-sm sm:max-w-md aspect-square bg-slate-900/40 border border-white/10 rounded-3xl backdrop-blur-xl p-6 overflow-hidden shadow-2xl"
              id="hero-ide-container"
            >
              {/* Fake Window Header Buttons */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-xs text-slate-500 font-mono">system_status: optimal</div>
              </div>

              {/* Mock Data Grid */}
              <div className="space-y-4">
                <div className="h-12 bg-white/5 rounded-lg border border-white/5 flex items-center px-4 justify-between">
                  <div className="w-1/3 h-2 bg-slate-700 rounded-full overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full bg-blue-400 rounded-full" style={{ width: `${cpuUsage}%` }} />
                  </div>
                  <div className="w-16 h-6 bg-blue-500/20 border border-blue-500/30 rounded text-[10px] text-blue-400 flex items-center justify-center font-bold">
                    {cpuUsage}% CPU
                  </div>
                </div>

                <div className="h-12 bg-white/5 rounded-lg border border-white/5 flex items-center px-4 justify-between">
                  <div className="w-1/2 h-2 bg-slate-700 rounded-full overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full bg-emerald-400 rounded-full w-full" />
                  </div>
                  <div className="w-16 h-6 bg-emerald-500/20 border border-emerald-500/30 rounded text-[10px] text-emerald-400 flex items-center justify-center font-bold">
                    ONLINE
                  </div>
                </div>

                {/* Animated Wave Graph */}
                <div className="h-28 bg-gradient-to-b from-blue-500/10 to-transparent rounded-lg border border-white/5 relative overflow-hidden">
                  <div className="absolute top-3 left-4 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    Pipeline Load Frequency
                  </div>
                  <svg viewBox="0 0 400 100" className="absolute bottom-0 w-full h-16 pointer-events-none">
                    <path 
                      key="wave-1"
                      d="M0,50 Q50,20 100,50 T200,50 T300,50 T400,20" 
                      fill="none" 
                      stroke="#60a5fa" 
                      strokeWidth="2" 
                    />
                    <path 
                      key="wave-2"
                      d="M0,60 Q50,40 100,60 T200,60 T300,60 T400,40" 
                      fill="none" 
                      stroke="#34d399" 
                      strokeWidth="1.5" 
                      opacity="0.5" 
                    />
                  </svg>
                </div>

                {/* Quick Cards Row */}
                <div className="flex gap-4">
                  <div className="flex-1 h-20 bg-white/5 rounded-lg border border-white/5 p-3">
                    <div className="text-[10px] text-slate-500 mb-1 uppercase tracking-tighter">Network Latency</div>
                    <div className="text-xl font-bold font-mono text-white transition-all duration-300">
                      {networkLatency}ms
                    </div>
                  </div>
                  <div className="flex-1 h-20 bg-white/5 rounded-lg border border-white/5 p-3">
                    <div className="text-[10px] text-slate-500 mb-1 uppercase tracking-tighter">Cloud Nodes</div>
                    <div className="text-xl font-bold font-mono text-blue-400 transition-all duration-300">
                      {activeNodes}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge (AI INTEGRATED) */}
              <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 px-4 py-2 bg-emerald-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-2xl rotate-12 uppercase tracking-wide">
                AI INTEGRATED
              </div>

              {/* Floating Badge (SOC2 COMPLIANT) */}
              <div className="absolute -bottom-3 -left-4 md:-bottom-2 md:-left-4 px-4 py-2 bg-white/15 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl -rotate-6">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                  <span className="text-[10px] font-extrabold text-white tracking-wider">SOC2 COMPLIANT</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
