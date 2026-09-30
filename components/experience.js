
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Monitor,
  Code2,
  CalendarDays,
  ArrowUpRight,
  Sparkles,
  BriefcaseBusiness,
} from "lucide-react";

const experiences = [
  {
    role: "Web Development Student",
    company: "Programming Hero",
    period: "2026 — Present",
    type: "Learning",
    description:
      "Focusing on full-stack web development, modern JavaScript, React, Next.js, and building real-world projects while continuously improving my problem-solving skills.",
    icon: GraduationCap,
    accent: "indigo",
    current: true,
    skills: ["React.js", "Next.js", "JavaScript", "Node.js"],
  },
  {
    role: "Frontend Practice Developer",
    company: "Personal Learning Projects",
    period: "2024 — 2025",
    type: "Personal Projects",
    description:
      "Built responsive frontend UI components, practiced DOM manipulation, and worked with JavaScript and Tailwind CSS to develop interactive and user-friendly interfaces.",
    icon: Monitor,
    accent: "pink",
    skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
  },
  {
    role: "Beginner Web Learner",
    company: "Self Learning",
    period: "2023 — 2024",
    type: "Self Learning",
    description:
      "Started my web development journey by learning HTML5, CSS3, Flexbox, Grid, and essential web development fundamentals.",
    icon: Code2,
    accent: "teal",
    skills: ["HTML5", "CSS3", "Flexbox", "CSS Grid"],
  },
];

const accentStyles = {
  indigo: {
    text: "text-indigo-300",
    border: "group-hover:border-indigo-400/30",
    iconBg: "bg-indigo-500/10",
    iconBorder: "border-indigo-400/20",
    glow: "bg-indigo-500/10",
    node: "border-indigo-400/50",
    dot: "bg-indigo-400",
    line: "from-indigo-400",
    badge: "border-indigo-400/20 bg-indigo-500/10 text-indigo-300",
    chip: "border-indigo-400/10 bg-indigo-500/[0.06] text-indigo-200",
  },
  pink: {
    text: "text-pink-300",
    border: "group-hover:border-pink-400/30",
    iconBg: "bg-pink-500/10",
    iconBorder: "border-pink-400/20",
    glow: "bg-pink-500/10",
    node: "border-pink-400/50",
    dot: "bg-pink-400",
    line: "from-pink-400",
    badge: "border-pink-400/20 bg-pink-500/10 text-pink-300",
    chip: "border-pink-400/10 bg-pink-500/[0.06] text-pink-200",
  },
  teal: {
    text: "text-teal-300",
    border: "group-hover:border-teal-400/30",
    iconBg: "bg-teal-500/10",
    iconBorder: "border-teal-400/20",
    glow: "bg-teal-500/10",
    node: "border-teal-400/50",
    dot: "bg-teal-400",
    line: "from-teal-400",
    badge: "border-teal-400/20 bg-teal-500/10 text-teal-300",
    chip: "border-teal-400/10 bg-teal-500/[0.06] text-teal-200",
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function ExperienceCard({ item, index }) {
  const Icon = item.icon;
  const accent = accentStyles[item.accent];
  const isLeft = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-[44px_minmax(0,1fr)] items-start gap-4 md:grid-cols-[1fr_64px_1fr] md:gap-0">
      {/* Desktop left card */}
      <div className="hidden md:block md:pr-10">
        {isLeft && <CardContent item={item} accent={accent} />}
      </div>

      {/* Timeline node */}
      <div className="relative z-10 flex justify-center pt-6 md:pt-8">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 14,
            delay: 0.1,
          }}
          className={`relative flex h-11 w-11 items-center justify-center rounded-2xl border ${accent.node} bg-[#101827] shadow-xl shadow-black/30`}
        >
          {item.current && (
            <span className="absolute inset-0 animate-ping rounded-2xl border border-indigo-400/30" />
          )}
          <Icon size={20} className={`relative ${accent.text}`} />
        </motion.div>
      </div>

      {/* Mobile card / Desktop right card */}
      <div className="min-w-0 md:pl-10">
        <div className="md:hidden">
          <CardContent item={item} accent={accent} />
        </div>
        {!isLeft && (
          <div className="hidden md:block">
            <CardContent item={item} accent={accent} />
          </div>
        )}
      </div>
    </div>
  );
}

function CardContent({ item, accent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, x: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111827]/90 p-5 shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-300 ${accent.border} sm:rounded-3xl sm:p-7`}
    >
      {/* Card glow */}
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${accent.glow} opacity-40 blur-[65px] transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Top accent */}
      <div className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-500 group-hover:w-full" />

      <div className="relative">
        {/* Date and status */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1.5">
            <CalendarDays size={13} className={accent.text} />
            <span className="font-mono text-[10px] font-medium tracking-wide text-gray-300 sm:text-xs">
              {item.period}
            </span>
          </div>

          {item.current ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/[0.08] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-emerald-300 sm:text-[10px]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Current
            </span>
          ) : (
            <span
              className={`rounded-full border px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider sm:text-[10px] ${accent.badge}`}
            >
              {item.type}
            </span>
          )}
        </div>

        {/* Role */}
        <h3 className="font-syne text-lg font-extrabold leading-snug text-white transition-colors duration-300 group-hover:text-blue-100 sm:text-xl">
          {item.role}
        </h3>

        {/* Company */}
        <div className="mt-2 flex items-center gap-2">
          <BriefcaseBusiness size={14} className={accent.text} />
          <p className={`text-xs font-semibold sm:text-sm ${accent.text}`}>
            {item.company}
          </p>
        </div>

        {/* Description */}
        <p className="mt-4 text-xs leading-7 text-gray-400 sm:text-sm">
          {item.description}
        </p>

        {/* Skills */}
        <div className="mt-5 flex flex-wrap gap-2">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className={`rounded-lg border px-2.5 py-1.5 text-[9px] font-medium sm:text-[10px] ${accent.chip}`}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Bottom decorative detail */}
        <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
          <span className="flex items-center gap-2 text-[10px] font-medium text-gray-500">
            <Sparkles size={12} className={accent.text} />
            Learning & Growth
          </span>
          <ArrowUpRight
            size={16}
            className="text-gray-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden bg-[#080D18] px-[5%] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[10%] h-80 w-80 rounded-full bg-indigo-500/[0.08] blur-[130px]" />
        <div className="absolute right-[-10%] top-[40%] h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[35%] h-72 w-72 rounded-full bg-pink-500/[0.05] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      </div>

      <div className="mx-auto max-w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center sm:mb-20"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2">
            <Sparkles size={14} className="text-blue-300" />
            <span className="text-[10px] font-bold uppercase tracking-[3px] text-blue-300 sm:text-xs">
              My Journey
            </span>
          </div>

          <h2 className="font-syne text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Learning{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            My journey into web development, from learning the fundamentals
            to exploring modern technologies and building real-world projects.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 via-blue-400 to-cyan-400" />
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Gradient line */}
          <div className="absolute bottom-8 left-[21px] top-5 w-[2px] bg-gradient-to-b from-indigo-400 via-pink-400 to-teal-400 opacity-50 md:left-1/2 md:-translate-x-1/2" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="space-y-8 md:space-y-12"
          >
            {experiences.map((item, index) => (
              <ExperienceCard key={item.role} item={item} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 flex flex-col items-center gap-3 text-center"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-500/[0.07] text-blue-300">
            <Sparkles size={19} />
          </div>
          <p className="max-w-lg text-xs leading-6 text-gray-500 sm:text-sm">
            Every step is part of my journey toward becoming a better
            developer. I believe in consistent practice and lifelong learning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

