import React, { useState, useRef, useEffect } from "react";
import { Terminal, Send, ArrowRight, ShieldAlert } from "lucide-react";

interface TerminalLine {
  text: string;
  type: "input" | "output" | "error" | "system";
}

export default function InbyoCli() {
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: "Welcome to InbyoTech Virtual CLI (v1.0.4-LTS)", type: "system" },
    { text: "Type 'help' to review all system commands.", type: "output" }
  ]);
  const [inputVal, setInputVal] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = inputVal.trim().toLowerCase();
    if (!cleanCmd) return;

    const newHistory = [...history, { text: `uibh-cli@user:~ $ ${inputVal}`, type: "input" as const }];

    let replyText = "";
    let replyType: "output" | "error" | "system" = "output";

    switch (cleanCmd) {
      case "help":
        replyText = "Operational CLI instructions list:\n • 'help'     Review all terminal commands\n • 'services' Explore InbyoTech developments options\n • 'founder'  Inspect Founder's personal stats & background\n • 'tech'     Verify our cutting edge tech stack matrix\n • 'contact'  Reveal details to initiate connection pipelines\n • 'clear'    Wipe console screens buffer";
        break;
      case "services":
        replyText = "Active Services Stacks [InbyoTech]:\n - Django API Frameworks\n - React & NextJS Single-Page Applications\n - Advanced Generative LLM Integrations\n - SaaS Multi-Tenant systems\n - Hybrid Mobile Shells (Expo/React Native)";
        break;
      case "founder":
        replyText = "Founder & Web Developer: Rizwan Bugti\n Origin: Dera Bugti, Balochistan\n Motto: 'Building innovative digital solutions, learning continuously, and empowering growth through technology.'\n LinkedIn: linkedin.com/in/rizwanbugti\n Core: React.js, JavaScript (ES6), HTML5/CSS3, and modern Web Stacks.";
        break;
      case "tech":
        replyText = "Cutting edge technologies verified:\n python::django / react::next.js / typescript::esm / postgresql::redis / gemini::llm-adapter / docker::kubernetes";
        break;
      case "contact":
        replyText = "Connect Pipelines:\n Email: rizwanbugti33@gmail.com\n Direct Line / WhatsApp: 03048588384\n Navigate to: 'Range Calculator' or 'Get A Quote' section on the webpage body.";
        break;
      case "clear":
        setHistory([]);
        setInputVal("");
        return;
      default:
        replyText = `InbyoCLI Command NOT found: '${cleanCmd}'. Type 'help' for valid inputs list.`;
        replyType = "error";
    }

    setHistory([...newHistory, { text: replyText, type: replyType }]);
    setInputVal("");
  };

  return (
    <section id="terminal-easter-egg" className="py-24 bg-[#020617] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-10" id="terminal-header">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span>Interactive Console</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight font-sans">
            Try Inbyo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">V-Terminal</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            Type commands in real-time to interact with Inbyo Tech's infrastructure specifications directly from the browser matrix.
          </p>
        </div>

        {/* Console Box Layout */}
        <div className="bg-slate-900/40 border border-white/10 rounded-3xl overflow-hidden shadow-2xl h-80 flex flex-col justify-between backdrop-blur-xl" id="cli-container">
          
          {/* Header Row buttons */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-slate-900/60">
            <div className="flex items-center space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-md shadow-rose-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-md shadow-amber-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-md shadow-emerald-500/20" />
            </div>
            <span className="text-[10px] font-mono text-slate-500 font-bold tracking-wider">guest@inbyotech-virtual-terminal:~</span>
            <div className="w-6" /> {/* spacer */}
          </div>

          {/* History Scroll window */}
          <div 
            ref={scrollRef}
            className="flex-1 p-5 overflow-y-auto font-mono text-xs sm:text-xs text-slate-300 space-y-2 scrollbar-none"
            id="cli-scroll-window"
          >
            {history.map((line, idx) => (
              <div 
                key={idx} 
                className={`whitespace-pre-wrap leading-relaxed ${
                  line.type === "input"
                    ? "text-blue-400 font-bold"
                    : line.type === "error"
                    ? "text-rose-400"
                    : line.type === "system"
                    ? "text-violet-400"
                    : "text-slate-200"
                }`}
              >
                {line.text}
              </div>
            ))}
          </div>

          {/* User input submit bar */}
          <form 
            onSubmit={handleCommand}
            className="px-4 py-3 border-t border-white/5 bg-[#030712]/50 flex items-center space-x-2"
            id="cli-form"
          >
            <span className="text-xs font-mono text-blue-500 shrink-0">uibh-cli@user:~ $</span>
            <input 
              type="text" 
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type 'help' and hit enter..."
              className="flex-1 bg-transparent border-none text-xs text-slate-200 focus:outline-none focus:ring-0 font-mono caret-blue-500 placeholder-slate-600"
              id="cli-text-input"
            />
            <button 
              type="submit"
              className="p-1.5 rounded-xl bg-slate-950 border border-white/5 hover:border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
