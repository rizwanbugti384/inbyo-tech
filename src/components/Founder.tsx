import React, { useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, Phone, Instagram, Facebook, Twitter, FileCheck } from "lucide-react";
import { FOUNDER } from "../data";

export default function Founder() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const contactItems = [
    { label: "Mail Direct", val: FOUNDER.socials.email, url: `mailto:${FOUNDER.socials.email}`, icon: Mail },
    { label: "Call / WhatsApp", val: FOUNDER.socials.phone, url: `https://wa.me/${FOUNDER.socials.phone}`, icon: Phone },
    { label: "Instagram", val: "@rizwanbugti11", url: FOUNDER.socials.instagram, icon: Instagram },
    { label: "Facebook", val: "Rizwan Bugti", url: FOUNDER.socials.facebook, icon: Facebook },
    { label: "Twitter / X", val: "@MRizwanbugti", url: FOUNDER.socials.twitter, icon: Twitter },
    { label: "LinkedIn Connection", val: "Rizwan Bugti", url: FOUNDER.socials.linkedin, icon: Linkedin }
  ];

  return (
    <section id="founder" className="py-24 bg-[#020617] border-t border-white/5 relative">
      <div className="absolute bottom-1/5 left-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16" id="founder-header">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span>Visionary Leadership</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight font-sans">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Founder</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Guiding our engineering squad with clean logic frameworks and production specifications.
          </p>
        </div>

        {/* Founder visual bento columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="founder-details-container">
          
          {/* Avatar Profile Grid Card (col-span-4) */}
          <div className="lg:col-span-4 flex justify-center" id="founder-avatar-col">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-72 h-80 rounded-3xl border border-white/10 bg-slate-900/40 overflow-hidden shadow-2xl p-5 select-none flex flex-col justify-between backdrop-blur-xl"
              id="founder-avatar-card"
            >
              {/* Fake grid texture overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20 pointer-events-none" />

              {/* Top Row visual branding element */}
              <div className="flex items-center justify-between relative z-10">
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">INBYOTECH CORE FOUNDER</span>
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
              </div>

              {/* Founder Portrait Visual Frame */}
              <div className="relative flex-1 flex flex-col items-center justify-center space-y-4 my-4 z-10">
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-violet-500 flex items-center justify-center p-1 shadow-2xl shadow-indigo-950/50">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-950 to-slate-950 flex items-center justify-center overflow-hidden">
                    <span className="text-3xl font-extrabold font-mono tracking-wider bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                      RB
                    </span>
                  </div>
                  {/* Floating abstract tech rings around avatar */}
                  <div className="absolute inset-x-[-10%] inset-y-[-10%] rounded-full border border-dashed border-indigo-500/30 animate-[spin_20s_linear_infinite] pointer-events-none" />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-extrabold text-white">{FOUNDER.name}</h3>
                  <p className="text-xs text-blue-400 font-mono tracking-wider mt-1">{FOUNDER.title}</p>
                </div>
              </div>

              {/* Active social links at bottom */}
              <div className="flex items-center justify-center space-x-2 pt-4 border-t border-white/5 z-10 w-full">
                {contactItems.map((c, id) => {
                  const IconComp = c.icon;
                  return (
                    <a
                      key={id}
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-950 border border-white/5 hover:border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                      title={c.label}
                    >
                      <IconComp className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* BIO details and custom proficiency visualizer list (col-span-8) */}
          <div className="lg:col-span-8 space-y-8" id="founder-details-col">
            
            {/* Bio info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-tight">Biography</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-sans font-normal">
                {FOUNDER.bio}
              </p>
              
              {/* Iconic Quote */}
              <div className="border-l-2 border-blue-500 pl-4 py-1 italic text-slate-400 text-sm font-sans">
                "{FOUNDER.quote}"
              </div>
            </div>

            {/* Certifications Block */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 text-violet-400 font-bold font-mono text-xs uppercase tracking-wider">
                <FileCheck className="w-4 h-4 shrink-0" />
                <span>Professional Credentials & Certifications</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {FOUNDER.certifications.map((cert, index) => (
                  <div key={index} className="p-3.5 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-violet-500/20 transition-all flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 font-mono text-xs font-bold">
                      0{index + 1}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-200 leading-tight">{cert.title}</h4>
                      <p className="text-[10px] text-slate-500 font-mono mt-0.5">{cert.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Proficiency List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-200 tracking-wider uppercase font-mono">
                  Stack Proficiency Levels
                </h3>
                <span className="text-xs text-slate-500 font-mono">hover a label to isolate spec</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="founder-skills-grid">
                {FOUNDER.skills.map((skill) => {
                  const isHighlighted = activeSkill === skill.name;
                  const isSomeSkillHighlighted = activeSkill !== null;
                  
                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setActiveSkill(skill.name)}
                      onMouseLeave={() => setActiveSkill(null)}
                      className={`p-4 rounded-2xl border transition-all duration-300 ${
                        isHighlighted
                          ? "bg-slate-900 border-indigo-500/40 shadow-inner"
                          : isSomeSkillHighlighted
                          ? "bg-slate-900/10 border-transparent opacity-40"
                          : "bg-slate-900/40 border-white/5"
                      }`}
                      id={`skill-prof-${skill.name.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs sm:text-sm font-bold text-white font-mono">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono font-bold text-blue-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Percent Slider bar */}
                      <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
