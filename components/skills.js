
"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Award,
  CalendarDays,
  Code2,
  Brain,
  Palette,
  Gauge,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const progressSkills = [
  { name: "JavaScript", pct: 90, color: "from-yellow-400 to-amber-500" },
  { name: "React.js", pct: 88, color: "from-cyan-400 to-blue-500" },
  { name: "Node.js", pct: 85, color: "from-green-400 to-emerald-500" },
  { name: "Express.js", pct: 81, color: "from-gray-300 to-gray-500" },
  { name: "Next.js", pct: 80, color: "from-slate-300 to-white" },
  { name: "MongoDB", pct: 78, color: "from-green-400 to-lime-500" },
  { name: "TypeScript", pct: 65, color: "from-blue-400 to-indigo-500" },
];

const circularSkills = [
  { name: "Problem Solving", pct: 90, icon: Brain },
  { name: "UI/UX Design", pct: 85, icon: Palette },
  { name: "Performance", pct: 88, icon: Gauge },
];

const education = [
  {
    degree: "BA in Political Science",
    institution: "Madaripur Govt. College",
    period: "2024 – Present",
    status: "Honours Running",
    icon: GraduationCap,
    current: true,
  },
  {
    degree: "HSC – Humanities",
    institution: "Madaripur Govt. College",
    period: "2022 – 2024",
    result: "4.17",
    icon: BookOpen,
  },
  {
    degree: "SSC – Humanities",
    institution: "Mahmudpur Modern High School",
    period: "2020 – 2022",
    result: "4.72",
    icon: Award,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function SectionHeading({ label, title, highlight, description }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mb-10"
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2">
        <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
        <span className="text-[10px] font-bold uppercase tracking-[3px] text-blue-300 sm:text-xs">
          {label}
        </span>
      </div>

      <h2 className="font-syne text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {title}{" "}
        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>

      <p className="mt-4 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
        {description}
      </p>
    </motion.div>
  );
}

function ProgressSkill({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-gray-300 transition-colors group-hover:text-white">
          {skill.name}
        </span>

        <span className="font-syne text-sm font-bold tabular-nums text-blue-300">
          {skill.pct}%
        </span>
      </div>

      <div className="relative h-2 overflow-hidden rounded-full bg-[#20283A]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.pct}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: index * 0.07,
            ease: "easeOut",
          }}
          className={`relative h-full rounded-full bg-gradient-to-r ${skill.color}`}
        >
          <div className="absolute inset-0 bg-white/20" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function CircularSkill({ skill, index }) {
  const radius = 39;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - skill.pct / 100);
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -5 }}
      className="flex flex-1 flex-col items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-2 py-5 transition-colors hover:border-blue-400/20 hover:bg-blue-500/[0.04] sm:px-3"
    >
      <div className="relative h-24 w-24">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full -rotate-90"
          aria-label={`${skill.name}: ${skill.pct}%`}
          role="img"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            className="text-[#242D40]"
          />

          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="url(#skillGradient)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.12 }}
          />

          <defs>
            <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#22D3EE" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon size={17} className="mb-1 text-blue-300" />
          <span className="font-syne text-base font-extrabold text-white">
            {skill.pct}%
          </span>
        </div>
      </div>

      <span className="text-center text-[10px] font-bold uppercase leading-5 tracking-wider text-gray-400 sm:text-xs">
        {skill.name}
      </span>
    </motion.div>
  );
}

function EducationCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111827]/90 p-5 transition-all duration-300 hover:border-blue-400/30 hover:bg-[#151F33] sm:rounded-3xl sm:p-7">
        {/* Card decoration */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/[0.06] blur-3xl transition-colors duration-500 group-hover:bg-blue-400/20" />
        <div className="absolute left-0 top-6 h-12 w-1 rounded-r-full bg-gradient-to-b from-blue-400 to-cyan-400 opacity-50 transition-all group-hover:h-16 group-hover:opacity-100" />

        <div className="relative flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/[0.08] text-blue-300 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-500/15 sm:h-14 sm:w-14 sm:rounded-2xl">
              <Icon size={24} />
            </div>

            <div className="min-w-0">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <CalendarDays size={13} className="text-blue-400" />
                <span className="text-xs font-semibold text-blue-300">
                  {item.period}
                </span>
              </div>

              <h3 className="font-syne text-base font-bold leading-snug text-white sm:text-xl">
                {item.degree}
              </h3>

              <p className="mt-2 text-xs leading-6 text-gray-400 sm:text-sm">
                {item.institution}
              </p>
            </div>
          </div>

          <div className="shrink-0">
            {item.current ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/[0.08] px-2.5 py-1.5 text-[9px] font-bold text-amber-300 sm:px-3 sm:text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Running
              </span>
            ) : (
              <div className="rounded-xl border border-blue-400/15 bg-blue-500/[0.06] px-3 py-2 text-center">
                <p className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                  GPA
                </p>
                <p className="font-syne text-lg font-extrabold text-blue-300">
                  {item.result}
                </p>
              </div>
            )}
          </div>
        </div>

        {item.current && (
          <div className="relative mt-5 inline-flex items-center gap-2 rounded-lg bg-white/[0.03] px-3 py-2 text-[11px] text-gray-400">
            <Sparkles size={13} className="text-amber-300" />
            Currently pursuing my honours degree
          </div>
        )}

        <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-all duration-500 group-hover:w-3/4" />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden bg-[#080D18] px-[5%] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/[0.08] blur-[120px]" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />
      </div>

      <div className="mx-auto grid max-w-full items-start gap-14 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        {/* Professional Skills */}
        <div>
          <SectionHeading
            label="Professional Skills"
            title="My"
            highlight="Proficiency"
            description="I continuously develop my technical abilities through practice, projects, and learning new technologies."
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="rounded-3xl border border-white/[0.07] bg-[#101726]/80 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-8"
          >
            <div className="mb-7 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                  <Code2 size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white sm:text-base">
                    Technical Expertise
                  </h3>
                  <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                    Self-assessed proficiency
                  </p>
                </div>
              </div>

              <TrendingUp size={18} className="text-blue-400" />
            </div>

            <div className="space-y-6">
              {progressSkills.map((skill, index) => (
                <ProgressSkill
                  key={skill.name}
                  skill={skill}
                  index={index}
                />
              ))}
            </div>

            <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="mb-5 flex items-center gap-2">
              <Sparkles size={16} className="text-cyan-400" />
              <h3 className="text-sm font-bold text-gray-200">
                Core Competencies
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {circularSkills.map((skill, index) => (
                <CircularSkill
                  key={skill.name}
                  skill={skill}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <div>
          <SectionHeading
            label="Academic Background"
            title="My"
            highlight="Education"
            description="My academic journey, educational background, and ongoing learning experience."
          />

          <div className="relative space-y-5 pl-3 sm:pl-5">
            {/* Timeline line */}
            <div className="absolute bottom-8 left-[22px] top-8 w-px bg-gradient-to-b from-blue-400/60 via-blue-500/25 to-transparent sm:left-[30px]" />

            {education.map((item, index) => (
              <div key={item.degree} className="relative pl-6 sm:pl-8">
                {/* Timeline node */}
                <div className="absolute left-0 top-7 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-blue-400 bg-[#080D18] shadow-[0_0_12px_rgba(59,130,246,0.3)] sm:h-5 sm:w-5">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                </div>

                <EducationCard item={item} index={index} />
              </div>
            ))}
          </div>

          {/* Learning note */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-7 flex items-start gap-3 rounded-2xl border border-blue-400/10 bg-blue-500/[0.04] p-4 sm:p-5"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
              <Sparkles size={17} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-200">
                Learning Beyond Academics
              </h4>
              <p className="mt-1 text-xs leading-6 text-gray-400 sm:text-sm">
                Alongside my academic studies, I explore web development,
                build projects, and keep expanding my technical knowledge.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

