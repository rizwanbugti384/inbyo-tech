import React, { useState } from "react";
import { Mail, Check, Github, Linkedin, ExternalLink, TicketCheck } from "lucide-react";
import { FOUNDER, SERVICES } from "../data";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    // Simulate pipeline
    setTimeout(() => {
      setIsSubscribed(true);
      console.log(`[INBYOTECH] Newsletter subscriber added:`, newsletterEmail);
    }, 700);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5 text-slate-400 font-sans text-sm py-16" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10" id="footer-grid">
          
          {/* Logo & Description Column (md:col-span-4) */}
          <div className="md:col-span-4 space-y-4" id="footer-branding-col">
            <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => onNavigate("home")}>
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-sm text-white font-mono">
                IB
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Inbyo<span className="text-blue-500">Tech</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans font-normal">
              A high-performance digital products agency focusing on interactive web applications, custom React interfaces, custom web layouts, and smart generative AI integrations. Managed by Rizwan Bugti.
            </p>
            <div className="flex items-center space-x-3.5 pt-2">
              <a 
                href={FOUNDER.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900/40 border border-white/5 hover:border-white/10 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={FOUNDER.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900/40 border border-white/5 hover:border-white/10 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (md:col-span-2) */}
          <div className="md:col-span-2 space-y-3" id="footer-links-col">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase font-mono">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: "Home Base", id: "home" },
                { label: "Our Services", id: "services" },
                { label: "Core Strengths", id: "strengths" },
                { label: "Portfolio Stacks", id: "portfolio" },
                { label: "Methodologies", id: "methodology" },
                { label: "Leader Bio", id: "founder" }
              ].map((lnk) => (
                <li key={lnk.id}>
                  <button
                    onClick={() => onNavigate(lnk.id)}
                    className="hover:text-blue-400 hover:underline transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    {lnk.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Offerings Checklist Column (md:col-span-3) */}
          <div className="md:col-span-3 space-y-3" id="footer-services-col">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase font-mono">Expert Stacks</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES.slice(0, 5).map((srv) => (
                <li key={srv.id} className="truncate">
                  <span className="font-sans leading-tight">{srv.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Box Column (md:col-span-3) */}
          <div className="md:col-span-3 space-y-4" id="footer-news-col">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase font-mono">Newsletter</h4>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Receive bite-sized software development metrics & blueprint optimization alerts.
            </p>
            
            {isSubscribed ? (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-xs flex items-center space-x-2 animate-pulse">
                <TicketCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono font-medium leading-none">Blueprints Activated!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex space-x-1.5" id="newsletter-form">
                <input 
                  type="email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="e.g. boss@gmail.com"
                  className="flex-1 p-2 rounded-xl bg-slate-950 border border-white/5 focus:ring-1 focus:ring-indigo-500/30 focus:border-indigo-500/30 text-xs text-slate-300 placeholder-slate-705 cursor-text"
                  id="newsletter-email-input"
                  required
                />
                <button
                  type="submit"
                  className="p-2 px-3 bg-blue-600 rounded-xl text-white hover:bg-blue-500 transition-colors shrink-0 font-bold text-xs cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Divider and copyright lines at footer bottom */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 font-mono" id="footer-bottom-bar">
          <p>© {currentYear} InbyoTech Software Agency. All Rights Reserved. Managed by Rizwan Bugti.</p>
          <div className="flex items-center space-x-4">
            <span className="hover:text-slate-400 cursor-pointer">SLA Agreement</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Privacy Guidelines</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
