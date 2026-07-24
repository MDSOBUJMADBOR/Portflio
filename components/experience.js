"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Development Student",
    company: "Programming Hero",
    period: "2026 — Present",
    description: "Focusing on full-stack web development, modern JavaScript, React , Next js and building real-world projects.",
    icon: (
      <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    glowColor: "shadow-indigo-500/20",
  },
  {
    role: "Frontend Practice Developer",
    company: "Personal Learning Projects",
    period: "2024 — 2025",
    description: "Built responsive frontend UI components, practiced DOM manipulation, and worked with JavaScript/Tailwind.",
    icon: (
      <svg className="w-5 h-5 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    glowColor: "shadow-pink-500/20",
  },
  {
    role: "Beginner Web Learner",
    company: "Self Learning (HTML & CSS)",
    period: "2023 — 2024",
    description: "Started the journey by learning HTML5, CSS3, Flexbox, Grid, and web development fundamentals.",
    icon: (
      <svg className="w-5 h-5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    glowColor: "shadow-teal-500/20",
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="bg-[#0b0f19] text-white py-16 px-4 min-h-screen flex flex-col justify-center items-center font-sans overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 relative">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          My{" "}
          <span className="bg-gradient-to-r from-blue to-cyan-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 rounded-full mx-auto mt-3" />
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-5xl w-full mx-auto">
        {/* Central Vertical Gradient Line */}
        <div className="absolute left-6 md:left-1/2 top-3 bottom-3 -translate-x-1/2 w-[2px] bg-gradient-to-b from-indigo-500 via-pink-500 to-teal-400 opacity-80" />

        <div className="space-y-12 md:space-y-16">
          {experiences.map((item, index) => {
            const isEven = index % 2 === 0; // Even = Left, Odd = Right

            return (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center w-full"
              >
                {/* Central Node Icon */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className={`absolute left-6 md:left-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full bg-[#0f1523] border border-gray-700/80 flex items-center justify-center shadow-lg ${item.glowColor}`}
                >
                  {item.icon}
                </motion.div>

                {/* Left Side (Shows Card on Desktop if Even index) */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-12">
                  {isEven && (
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="bg-[#121826]/90 border border-gray-800 hover:border-gray-700 p-6 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-100">
                          {item.role}
                        </h3>
                      </div>
                      <p className="text-sm font-medium text-indigo-400 mb-1">
                        {item.company}
                      </p>
                      <p className="text-xs text-gray-400 mb-3 font-mono">
                        {item.period}
                      </p>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Right Side (Shows Card on Desktop if Odd index, Mobile shows all) */}
                <div className="w-full md:w-1/2 pl-16 md:pl-12 mt-4 md:mt-0">
                  {!isEven && (
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="bg-[#121826]/90 border border-gray-800 hover:border-gray-700 p-6 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-100">
                          {item.role}
                        </h3>
                      </div>
                      <p className="text-sm font-medium text-indigo-400 mb-1">
                        {item.company}
                      </p>
                      <p className="text-xs text-gray-400 mb-3 font-mono">
                        {item.period}
                      </p>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;