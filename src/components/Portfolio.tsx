import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Sparkles, Plus, X, Globe, BarChart3, AlertCircle } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalActionFeedback, setModalActionFeedback] = useState<string | null>(null);

  const categories = ["All", "Web", "Mobile", "AI/SaaS", "Design"];

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const triggerModalFeedback = (msg: string) => {
    setModalActionFeedback(msg);
    setTimeout(() => {
      setModalActionFeedback(null);
    }, 4000);
  };

  return (
    <section id="portfolio" className="py-24 bg-[#020617] border-t border-white/5 relative">
      {/* Visual Background Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6" id="portfolio-header-container">
          <div className="space-y-3 max-w-2xl" id="portfolio-header">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
              <span>Case Studies & Pipelines</span>
            </div>
            <h2 className="text-4xl font-extrabold text-white tracking-tight font-sans">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">Portfolio</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore our real, production-ready case studies. Each project constitutes a complete operational cycle designed to scale seamlessly. Toggle the filters to focus.
            </p>
          </div>

          {/* Interactive filter pills */}
          <div className="flex flex-wrap gap-2" id="portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl font-mono border transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-900/40"
                    : "bg-slate-900/60 border-white/10 text-slate-300 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          id="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group rounded-3xl border border-white/10 bg-slate-900/40 hover:border-white/20 hover:bg-slate-900/60 transition-all duration-300 relative overflow-hidden flex flex-col justify-between backdrop-blur-xl"
                id={`portfolio-item-${project.id}`}
              >
                {/* Product Mock Images header */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-white/5">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category text-badge floating */}
                  <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold font-mono text-white bg-slate-950/90 backdrop-blur-sm rounded-full border border-white/10 uppercase tracking-widest">
                    {project.category}
                  </span>

                  {/* Glass Interactive Hover Screen */}
                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => {
                        setModalActionFeedback(null);
                        setSelectedProject(project);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs transition-transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer flex items-center space-x-2"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Review Details</span>
                    </button>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed line-clamp-2">
                      {project.desc}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[9px] rounded-lg bg-[#090d20] border border-white/10 text-slate-400 font-mono font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-0.5 text-[9px] rounded-lg bg-[#090d20] border border-white/10 text-slate-500 font-mono">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Highlight Stats Ribbon */}
                <div 
                  onClick={() => {
                    setModalActionFeedback(null);
                    setSelectedProject(project);
                  }}
                  className="px-6 py-3 border-t border-white/5 bg-slate-950/40 text-[11px] font-mono text-emerald-400 hover:bg-slate-950/80 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span className="flex items-center space-x-1">
                    <BarChart3 className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="font-semibold text-slate-300">Metric Impact:</span>
                  </span>
                  <span className="tracking-wide block truncate max-w-[180px] text-emerald-300">{project.metrics}</span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal workspace panel */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Blur backdrop overlay blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950 cursor-pointer"
              />

              {/* Case Study Card modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative bg-slate-950 border border-white/10 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl z-10 backdrop-blur-2xl"
                id="portfolio-modal"
              >
                {/* Close Button top row */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-slate-950/80 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-900 transition-colors cursor-pointer z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Main scrollable body */}
                <div className="max-h-[85vh] overflow-y-auto">
                  {/* Hero Image */}
                  <div className="relative h-64 md:h-80 w-full">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      referrerPolicy="no-referrer"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    {/* Floating title bottom */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="px-3 py-1 text-[10px] uppercase tracking-widest bg-blue-600 font-mono font-extrabold text-white rounded-full mb-2 inline-block">
                        {selectedProject.category} Case Study
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {selectedProject.title}
                      </h3>
                    </div>
                  </div>

                  {/* Core Description grids */}
                  <div className="p-6 md:p-8 space-y-6">
                    {/* In-Modal Native Toast/Alert for non-blocking feedback */}
                    <AnimatePresence>
                      {modalActionFeedback && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="p-3 bg-blue-500/20 border border-blue-500/40 text-blue-300 rounded-xl text-xs flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" />
                          <span>{modalActionFeedback}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Summary row */}
                    <div className="space-y-3 font-sans">
                      <h4 className="text-sm font-bold text-slate-300 font-mono uppercase tracking-widest">General Context</h4>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                        {selectedProject.longDesc}
                      </p>
                    </div>

                    {/* Numeric metric impact */}
                    {selectedProject.metrics && (
                      <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold text-emerald-400 font-mono tracking-widest uppercase mb-1">PROVED PROJECT IMPACT RESULTS</h4>
                          <p className="text-xs sm:text-sm text-slate-300 italic font-medium leading-relaxed font-sans">
                            "{selectedProject.metrics}"
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Full Stack list */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-slate-300 font-mono uppercase tracking-widest">Technical Specifications</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs font-medium font-mono text-teal-400 bg-slate-950 border border-white/5 rounded-lg shadow-sm font-bold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Simulated Case actions */}
                    <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4">
                      <button
                        onClick={() => {
                          triggerModalFeedback(`Preparing secure playground environments for ${selectedProject.title}... REDIRECTING REQUEST IN PROCESS...`);
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold shadow-lg hover:scale-102 active:scale-95 transition-all cursor-pointer"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        <span>Launch Project Showcase</span>
                      </button>
                      
                      <button
                        onClick={() => {
                          triggerModalFeedback(`Requesting enterprise architecture code access token for ID ${selectedProject.id}...`);
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 text-sm font-semibold hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        <span>Inspect Code Repo</span>
                      </button>
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
