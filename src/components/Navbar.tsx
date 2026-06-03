import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Strengths", id: "strengths" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Methodology", id: "methodology" },
    { label: "Founder", id: "founder" },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-emerald-400 via-blue-500 to-indigo-500 z-[100] transition-all duration-100 ease-out" 
        style={{ width: `${scrollProgress}%` }}
        id="scroll-progress"
      />

      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-4 left-4 right-4 z-50 rounded-2xl border transition-all duration-300 ${
          isScrolled
            ? "bg-[#020617]/80 border-white/10 backdrop-blur-xl shadow-lg shadow-indigo-950/20"
            : "bg-[#020617]/40 border-white/5 backdrop-blur-md"
        }`}
        id="main-nav"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => handleLinkClick("home")}
              id="nav-logo-container"
            >
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center overflow-hidden">
                <span className="text-white font-bold text-sm z-10 font-mono">IB</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300 -z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-200">
                  Inbyo<span className="text-blue-500 group-hover:text-violet-400 transition-colors duration-200">Tech</span>
                </span>
                <span className="text-[9px] text-slate-400 font-mono tracking-widest leading-none">DIGITAL PRODUCTS</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1" id="nav-desktop-links">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative cursor-pointer ${
                    activeSection === item.id
                      ? "text-blue-400 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-900/40"
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-1 left-3 right-3 h-[2px] bg-blue-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA button */}
            <div className="hidden md:block" id="nav-cta-btn">
              <button
                onClick={() => handleLinkClick("contact")}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 shadow-md shadow-indigo-950/40 active:scale-95 cursor-pointer group"
              >
                Estimate Project
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden" id="nav-mobile-btn">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none cursor-pointer"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/10 bg-[#020617]/95 rounded-b-2xl overflow-hidden backdrop-blur-xl"
              id="mobile-nav-panel"
            >
              <div className="px-3 py-4 space-y-1 sm:px-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                      activeSection === item.id
                        ? "text-blue-400 bg-slate-900/50"
                        : "text-slate-300 hover:text-white hover:bg-slate-900/30"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 pb-2 border-t border-white/10">
                  <button
                    onClick={() => handleLinkClick("contact")}
                    className="w-full inline-flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-500 hover:to-indigo-500 cursor-pointer"
                  >
                    Estimate Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
