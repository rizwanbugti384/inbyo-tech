import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BentoStrengths from "./components/BentoStrengths";
import Portfolio from "./components/Portfolio";
import Methodology from "./components/Methodology";
import Founder from "./components/Founder";
import Calculator from "./components/Calculator";
import ContactForm from "./components/ContactForm";
import InbyoCli from "./components/InbyoCli";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  
  // Selection state for Calculator
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Injected specs from Calculator to Contact Form
  const [injectedSpecs, setInjectedSpecs] = useState<{
    serviceName: string;
    totalCost: number;
    totalDays: number;
    scaleLabel: string;
    addonsSelectedList: string[];
  } | null>(null);

  // Scroll Spy to detect active sections on screen scroll
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ["home", "services", "strengths", "portfolio", "methodology", "founder", "calculator", "contact"];
      const scrollPosition = window.scrollY + 200; // Offset for navbar highlight trigger

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 85, // Offset for floating glass navbar height
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  const handleSelectServiceForQuote = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    // Smooth scroll down to Calculator
    handleNavigate("calculator");
  };

  const handleInjectSpecs = (specs: typeof injectedSpecs) => {
    setInjectedSpecs(specs);
    // Smooth scroll down to Contact Form
    handleNavigate("contact");
  };

  const handleClearInjectedSpecs = () => {
    setInjectedSpecs(null);
  };

  return (
    <div className="bg-[#020617] min-h-screen text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Upper Floating Navbar */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Primary visual sections layout */}
      <Hero onNavigate={handleNavigate} />
      
      <Services 
        onSelectServiceForQuote={handleSelectServiceForQuote} 
        onNavigate={handleNavigate} 
      />
      
      <BentoStrengths />
      
      <Portfolio />
      
      <Methodology />
      
      <Founder />
      
      <Calculator 
        selectedServiceId={selectedServiceId} 
        onInjectSpecs={handleInjectSpecs} 
      />
      
      <InbyoCli />
      
      <ContactForm 
        injectedSpecs={injectedSpecs} 
        onClearInjectedSpecs={handleClearInjectedSpecs} 
      />
      
      {/* Lower Footer block */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
