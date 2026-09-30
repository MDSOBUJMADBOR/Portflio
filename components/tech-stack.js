
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Code2,
  Layers3,
  Database,
  Wrench,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const techData = [
  {
    name: "React.js",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    invert: true,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    category: "Backend/DB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    category: "Backend/DB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    invert: true,
  },
  {
    name: "MongoDB",
    category: "Backend/DB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Better Auth",
    category: "Backend/DB",
    LucideIcon: Shield,
    color: "#60A5FA",
  },
  {
    name: "Git",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    invert: true,
  },
  {
    name: "Postman",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "Vercel",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    invert: true,
  },
  {
    name: "VS Code",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "ChatGPT",
    category: "AI & Prompts",
    icon: "https://unpkg.com/simple-icons@v11/icons/openai.svg",
    invert: true,
  },
  {
    name: "Gemini",
    category: "AI & Prompts",
    icon: "https://cdn.simpleicons.org/googlegemini/8E75B2",
  },
];

const categories = [
  { name: "All Tech", icon: Layers3 },
  { name: "Frontend", icon: Code2 },
  { name: "Backend/DB", icon: Database },
  { name: "Tools", icon: Wrench },
  { name: "AI & Prompts", icon: Sparkles },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All Tech");

  const filteredTech = techData.filter(
    (tech) =>
      activeCategory === "All Tech" ||
      tech.category === activeCategory
  );

  return (
    <section
      id="tech"
      className="relative isolate overflow-hidden bg-[#080D18] px-[5%] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-[10%] h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute right-[-10%] top-[35%] h-96 w-96 rounded-full bg-indigo-600/[0.08] blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[35%] h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      </div>

      <div className="mx-auto max-w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[3px] text-blue-300 sm:text-xs">
                My Expertise
              </span>
            </div>

            <h2 className="font-syne text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Technical{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              Technologies and tools I use to build modern, responsive,
              and user-friendly web applications.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <Code2 size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold leading-none tabular-nums">
                {techData.length}
                <span className="ml-1 text-sm font-medium text-blue-400">+</span>
              </p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-gray-500">
                Technologies
              </p>
            </div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="mb-8 rounded-2xl border border-white/[0.07] bg-[#101726]/80 p-2 backdrop-blur-xl sm:mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => setActiveCategory(category.name)}
                  aria-pressed={isActive}
                  className={cn(
                    "relative flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-3 text-xs font-semibold transition-all duration-300 sm:flex-none sm:px-5 sm:text-sm",
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "text-gray-400 hover:bg-white/[0.05] hover:text-white"
                  )}
                >
                  <Icon size={15} />
                  <span>{category.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="active-tech-filter"
                      className="absolute inset-0 -z-10 rounded-xl bg-blue-600"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech, index) => {
              const Icon = tech.LucideIcon;

              return (
                <motion.div
                  layout
                  key={tech.name}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{
                    layout: { duration: 0.3, ease: "easeInOut" },
                    delay: index * 0.025,
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/0 via-cyan-400/0 to-indigo-500/0 opacity-0 blur-md transition duration-500 group-hover:from-blue-500/20 group-hover:via-cyan-400/10 group-hover:to-indigo-500/20 group-hover:opacity-100" />

                  <div className="relative flex min-h-[150px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111827]/90 px-3 py-6 transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-[#151F33] sm:min-h-[165px] sm:py-7">
                    {/* Card top accent */}
                    <div className="absolute left-1/2 top-0 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-all duration-500 group-hover:w-3/4" />

                    {/* Decorative corner */}
                    <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-500/[0.04] blur-2xl transition-all duration-500 group-hover:bg-blue-400/15" />

                    <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.035] p-3 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400/20 group-hover:bg-blue-500/[0.08] sm:h-16 sm:w-16">
                      {Icon ? (
                        <Icon
                          size={36}
                          color={tech.color}
                          strokeWidth={1.6}
                        />
                      ) : (
                        <img
                          src={tech.icon}
                          alt=""
                          loading="lazy"
                          className={cn(
                            "h-full w-full object-contain",
                            tech.invert && "invert"
                          )}
                        />
                      )}
                    </div>

                    <h3 className="relative text-center text-xs font-semibold text-gray-300 transition-colors duration-300 group-hover:text-white sm:text-sm">
                      {tech.name}
                    </h3>

                    <span className="mt-2 text-[9px] font-medium uppercase tracking-[1.5px] text-gray-600 transition-colors duration-300 group-hover:text-blue-300/70 sm:text-[10px]">
                      {tech.category}
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="absolute right-3 top-3 text-gray-700 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300 group-hover:opacity-100"
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-2 text-center sm:mt-12"
        >
          <div className="flex items-center gap-2 text-gray-500">
            <Sparkles size={14} className="text-blue-400" />
            <p className="text-xs sm:text-sm">
              Always learning, exploring, and improving my skill set.
            </p>
          </div>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

