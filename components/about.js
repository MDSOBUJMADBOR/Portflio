
"use client";

import { motion } from "framer-motion";
import {
  Download,
  Rocket,
  Code2,
  LayoutGrid,
  UserCircle2,
  ArrowUpRight,
  Sparkles,
  Terminal,
  MapPin,
  CheckCircle2,
  BriefcaseBusiness,
} from "lucide-react";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const infoCards = [
  {
    icon: Rocket,
    title: "My Journey",
    desc: "Started with HTML & CSS. Fell in love with JavaScript. Now building full-stack web apps with the MERN stack.",
    gradient: "from-blue-500 to-cyan-400",
    glow: "group-hover:shadow-cyan-500/10",
  },
  {
    icon: Code2,
    title: "What I Enjoy",
    desc: "I love building responsive UIs, writing clean code, solving problems and bringing creative ideas to life.",
    gradient: "from-purple-500 to-blue-500",
    glow: "group-hover:shadow-purple-500/10",
  },
  {
    icon: LayoutGrid,
    title: "Beyond Code",
    desc: "I enjoy playing football, reading books, listening to music and capturing moments through photography.",
    gradient: "from-cyan-400 to-emerald-400",
    glow: "group-hover:shadow-emerald-500/10",
  },
  {
    icon: UserCircle2,
    title: "My Personality",
    desc: "Curious, dedicated and positive-minded. I love challenges and believe in improving a little every day.",
    gradient: "from-amber-400 to-orange-500",
    glow: "group-hover:shadow-amber-500/10",
  },
];

const technologies = [
  "React.js",
  "Next.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#080B18] px-[5%] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-purple-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[120px]" />

<div className=" flex items-start">
  
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center sm:mb-16"
        >
          <span className="inline-flex items-start gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            <Sparkles size={14} />
            Get to know me
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>


          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
        </motion.div>
</div>


      <div className="mx-auto max-w-full">
        {/* About Header */}


        {/* Main Content */}

<div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_320px] lg:items-start">
  {/* About Card */}
  <div className="min-w-0">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-white/[0.015] p-6 shadow-2xl backdrop-blur-xl sm:p-10 lg:p-12"
    >

        
            {/* Decorative Shapes */} 
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-purple-400/[0.08]" /> 
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-cyan-400/[0.08]" /> 
            <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-1/3 bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent" /> 
 
            {/* Status Badge */} 
            <div className="relative mb-8 flex flex-wrap items-center justify-between gap-4"> 
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs font-medium text-emerald-400"> 
                <span className="relative flex h-2 w-2"> 
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /> 
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /> 
                </span> 
                Open to Opportunities 
              </span> 
 
              <div className="flex items-center gap-2 text-sm text-gray-400"> 
                <MapPin size={15} className="text-cyan-400" /> 
                Bangladesh 
              </div> 
            </div> 
 
            {/* Intro */} 
            <div className="relative"> 
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400"> 
                Hello, I'm 
              </p> 
 
              <h3 className="font-syne text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"> 
                Sobuj{" "} 
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"> 
                  Madbor 
                </span> 
                <span className="ml-2 inline-block origin-bottom animate-[wave_1.5s_ease-in-out_infinite] text-3xl sm:text-4xl"> 
                  👋 
                </span> 
              </h3> 
 
              <div className="mt-5 flex flex-wrap items-center gap-3"> 
                <span className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-2 text-sm font-semibold text-cyan-300"> 
                  <Terminal size={16} /> 
                  MERN Stack Developer 
                </span> 
 
                <span className="inline-flex items-center gap-2 text-sm text-gray-400"> 
                  <CheckCircle2 size={16} className="text-purple-400" /> 
                  Passionate Problem Solver 
                </span> 
              </div> 
            </div> 
 
            {/* Bio */} 
            <div className="relative mt-8 max-w-4xl space-y-5 text-sm leading-8 text-gray-400 sm:text-base"> 
              <p> 
                I'm a passionate MERN Stack Developer from 
                Bangladesh. My journey into programming started 
                in 2026 when I became curious about how websites 
                and applications work. That curiosity turned 
                into a love for coding, building projects, and 
                solving problems. 
              </p> 
 
              <p> 
                I enjoy creating clean, responsive, and 
                user-friendly web applications that solve 
                real-world problems. I love working with React, 
                Next.js, Node.js, Express.js, and MongoDB to 
                build modern full-stack applications. 
              </p> 
 
              <p> 
                My goal is to continuously improve my skills, 
                explore new technologies, and create meaningful 
                digital experiences through clean and 
                maintainable code. 
              </p> 
            </div> 
 
            {/* Technologies */} 
            <div className="relative mt-9"> 
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-500"> 
                Technologies I Work With 
              </p> 
 
              <div className="flex flex-wrap gap-2.5"> 
                {technologies.map((tech, index) => ( 
                  <motion.span 
                    key={tech} 
                    initial={{ opacity: 0, y: 12 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.07, 
                    }} 
                    whileHover={{ y: -3, scale: 1.04 }} 
                    className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-xs font-medium text-gray-300 transition-colors hover:border-cyan-400/30 hover:bg-cyan-400/[0.07] hover:text-cyan-300 sm:text-sm" 
                  > 
                    {tech} 
                  </motion.span> 
                ))} 
              </div> 
            </div> 
 
            {/* Signature and Resume */} 
            <div className="relative mt-10 flex flex-col gap-6 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between"> 
              <div> 
                <p className="mb-1 text-xs text-gray-500"> 
                  Best Regards, 
                </p> 
                <div 
                  className={`${dancingScript.className} text-3xl text-white/90`} 
                > 
                  Sobuj Madbor 
                </div> 
              </div> 
 
              <motion.a 
                href="/resume.pdf" 
                download="Sobuj-Madbor-Resume.pdf" 
                whileHover={{ scale: 1.04, y: -2 }} 
                whileTap={{ scale: 0.97 }} 
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-cyan-500/30 sm:w-auto" 
              > 
                <Download size={18} /> 
                Download Resume 
                <ArrowUpRight size={17} /> 
              </motion.a> 
            </div> 
         



    </motion.div>
  </div>

  {/* Location & Preference */}
  <motion.aside
    initial={{ opacity: 0, x: 35 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, delay: 0.15 }}
    className="relative h-fit overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#111827] to-[#0c1222] p-6 shadow-2xl shadow-cyan-950/20 sm:p-7"
  >
    {/* Decorative Glow */}
    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/10 blur-[80px]" />
    <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-purple-500/10 blur-[70px]" />

    <div className="relative">
      {/* Header */}
      <div className="mb-7 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
          <MapPin size={21} />
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">
            Location & Preference
          </h3>
          <p className="mt-1 text-xs text-gray-500">
            My current details
          </p>
        </div>
      </div>

      {/* Location */}
      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.05]">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
          <MapPin size={15} className="text-cyan-400" />
          Based In
        </div>

        <h4 className="text-base font-bold text-white">
          Dhaka, Bangladesh
        </h4>

        <p className="mt-1 text-xs text-gray-400">
          Available for local and remote opportunities
        </p>
      </div>

      {/* Availability */}
      <div className="mt-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition-all duration-300 hover:border-emerald-400/20 hover:bg-white/[0.05]">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
          <BriefcaseBusiness
            size={15}
            className="text-emerald-400"
          />
          Availability
        </div>

        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>

          <h4 className="text-base font-bold text-emerald-400">
            Open for Work
          </h4>
        </div>

        <p className="mt-2 text-xs leading-5 text-gray-400">
          Open to exciting projects and collaborations
        </p>
      </div>

      {/* Status */}
      <div className="mt-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition-all duration-300 hover:border-purple-400/20 hover:bg-white/[0.05]">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
          <Sparkles size={15} className="text-purple-400" />
          Current Status
        </div>

        <h4 className="text-sm font-semibold leading-6 text-white">
          Available for Opportunities
        </h4>

        <p className="mt-2 text-xs leading-5 text-gray-400">
          Ready to learn, contribute and grow with a team.
        </p>
      </div>

      {/* Bottom Accent */}
      <div className="mt-6 flex items-center gap-2 border-t border-white/[0.08] pt-5">
        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
        <p className="text-xs text-gray-500">
          Let's build something amazing together.
        </p>
      </div>
    </div>
  </motion.aside>
</div>



        {/* Info Cards */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {infoCards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#101525] p-6 shadow-lg transition-all duration-500 hover:border-white/15 hover:bg-[#141b30] hover:shadow-2xl ${card.glow}`}
              >
                {/* Top Gradient Border */}
                <div
                  className={`absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r ${card.gradient} opacity-50 transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* Icon */}
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-gradient-to-br ${card.gradient} bg-opacity-10 text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                {/* Card Title */}
                <h4 className="mb-3 flex items-center justify-between font-syne text-lg font-bold text-white">
                  {card.title}
                  <ArrowUpRight
                    size={17}
                    className="text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                  />
                </h4>

                {/* Card Description */}
                <p className="text-[13px] leading-7 text-gray-400">
                  {card.desc}
                </p>

                {/* Hover Glow */}
                <div
                  className={`pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${card.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-gray-500">
            Always learning, always building, always growing.
          </p>
        </motion.div>
      </div>

      {/* Wave Animation */}
      <style jsx global>{`
        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(20deg);
          }
          50% {
            transform: rotate(-10deg);
          }
          75% {
            transform: rotate(15deg);
          }
        }
      `}</style>
    </section>
  );
}

