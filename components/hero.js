"use client"

import { motion } from "framer-motion"
import { ArrowRight, MousePointer2, Link as LinkIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Facebook } from "@/lib/brand-icons"
import Marquee from "react-fast-marquee"
import { FaReact, FaNodeJs, FaJs, FaGitAlt } from "react-icons/fa"
import { SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si"
import { Smooch_Sans } from "next/font/google";

const Github = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
)
const Linkedin = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
)




const socialLinks = [
  { icon: Github, href: "https://github.com/MDSOBUJMADBOR", label: "GitHub", hoverBg: "hover:bg-[#6e40c9]", hoverShadow: "hover:shadow-[0_0_20px_rgba(110,64,201,0.4)]" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/md-sobuj-madbor", label: "LinkedIn", hoverBg: "hover:bg-[#0A66C2]", hoverShadow: "hover:shadow-[0_0_20px_rgba(10,102,194,0.4)]" },
  { icon: Facebook, href: "https://www.facebook.com/share/1PDgKKfk12/", label: "Facebook", hoverBg: "hover:bg-[#1877F2]", hoverShadow: "hover:shadow-[0_0_20px_rgba(24,119,242,0.4)]" },
]

const techBadges = [
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", label: "TypeScript" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JS" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", label: "Node.js" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", label: "Next.js" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", label: "MongoDB" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expressjs/expressjs-original.svg", label: "Express.js" },
]
const smooch = Smooch_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-12 lg:pt-32 lg:pb-20 flex items-center px-[5%] bg-gradient-to-br from-[#181c2c] via-[#1e284e] to-[#172666] dark:from-[#0F1221] dark:via-[#161A2E] dark:to-[#0B0E1A] overflow-visible"
    >
      {/* Background Decors */}
      <div className="absolute top-0 right-0 max-w-[600px] max-h-[600px] bg-blue/10 dark:bg-blue/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 max-w-[400px] max-h-[400px] bg-accent/10 dark:bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 space-y-8"
        >

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue/10 border border-blue/20 text-blue font-bold text-xs uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue"></span>
              </span>
              Web Developer
            </div>
            <h1 className="font-syne text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] mb-4 text-dark dark:text-white">
              {/* Hi , I'm <span className="text-blue italic text-shadow-lg">SOBUJ MADBOR</span> */}
              <span>MERN Stack</span><br></br>
              <span className="bg-gradient-to-r from-blue to-cyan-400 bg-clip-text text-transparent">Developer</span>

            </h1>

            <a href="https://git.io/typing-svg">
              <img
                src="https://readme-typing-svg.demolab.com?font=Syne&weight=700&size=28&pause=1000&color=0000FF&center=false&vCenter=false&width=600&lines=MERN+Stack+Developer;Problem+Solver;Advanced+React+%26+Node.js"
                alt="Typing SVG"
                className="max-w-full h-auto"
              />
            </a>



          </div>

          <p className={`text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-lg text-[24px] ${smooch.className}`}>
            I build modern, fast, and responsive web applications using React and Next.js. I focus on clean UI design, smooth user experience, and performance optimization.

          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-blue hover:bg-blue-dark text-white rounded-2xl font-bold transition-all hover:shadow-2xl hover:shadow-blue/40 w-full sm:w-auto"
            >
              Hire Me <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-200 dark:border-white/10 hover:border-blue dark:hover:border-blue hover:text-blue text-dark dark:text-white rounded-2xl font-bold transition-all w-full sm:w-auto"
            >
              View My Project <MousePointer2 size={20} />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6">
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.label}
                  href={link.href}
                  className={`group relative w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-white hover:border-transparent ${link.hoverBg} ${link.hoverShadow} transition-all duration-300 hover:scale-110 active:scale-95`}
                >
                  <link.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  {/* Tooltip */}
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900 dark:bg-white/10 backdrop-blur-md text-white text-[10px] font-bold rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
            {/* Divider + Status */}
            <div className="flex items-center gap-3">
              <div className="w-px h-8 bg-gray-300 dark:bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Available for hire</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative max-w-[340px] sm:w-[400px] aspect-[4/5]">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue/30 dark:bg-blue/20 rounded-[40px] blur-[80px] animate-pulse" />

            {/* Image Container - Now Rectangular */}
            <div className="relative mx-auto w-[300px]  md:w-full h-[300px] md:h-full bg-[#111827]  rounded-full  border-4  overflow-hidden shadow-2xl">
              <img
                src="/profile1.png"
                alt="SOBUJ MADBOR"
                className="w-[300px] md:w-full h-[300px] md:h-full object-cover object-top scale-105 hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t  to-transparent" />
            </div>

            {/* Floating Tech Badges - Smaller and Equidistant */}
            {techBadges.map((badge, idx) => {
              const positions = [
                "top-[-20px] left-[-20px] hidden xl:block",    // TypeScript
                "top-[-20px] right-[-20px] hidden xl:block",   // React
                "bottom-[-20px] left-[-20px] hidden xl:block",  // JS
                "bottom-[-20px] right-[-20px] hidden xl:block", // Node.js
                "top-1/2 left-[-50px] -translate-y-1/2 hidden xl:block", // Next.js
                "top-1/2 right-[-50px] -translate-y-1/2 hidden xl:block", // MongoDB
                "bottom-[-50px] left-1/2 -translate-x-1/2 hidden xl:block", // Express.js
              ];

              return (
                <motion.div
                  key={badge.label}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: idx * 0.6,
                    ease: "easeInOut"
                  }}
                  className={cn(
                    "absolute bg-white/95 dark:bg-dark-2/95 backdrop-blur-lg p-2 rounded-2xl shadow-xl border border-white/20 flex flex-col items-center gap-1 z-30 min-w-[60px]",
                    positions[idx] || badge.pos
                  )}
                >
                  <div className="w-8 h-8 flex items-center justify-center p-0.5">
                    <img src={badge.icon} alt={badge.label} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[8px] font-black text-blue uppercase tracking-tighter">{badge.label}</span>
                </motion.div>

              );
            })}



            <div className="mt-8 xl:hidden">
              <Marquee speed={60} pauseOnHover={true} gradient={false}>

                <div className="flex gap-4 items-center">

                  {/* React */}
                  <div className="flex items-center gap-2 px-6 py-2 mx-2 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 font-semibold hover:bg-blue-500 hover:text-white transition-all">
                    <FaReact size={20} />
                    React
                  </div>

                  {/* Next.js */}
                  <div className="flex items-center gap-2 px-6 py-2 mx-2 rounded-full bg-black/10 text-black dark:text-white border border-black/20 font-semibold hover:bg-black hover:text-white transition-all">
                    <SiNextdotjs size={18} />
                    Next.js
                  </div>

                  {/* Node.js */}
                  <div className="flex items-center gap-2 px-6 py-2 mx-2 rounded-full bg-green-500/10 text-green-600 border border-green-500/20 font-semibold hover:bg-green-500 hover:text-white transition-all">
                    <FaNodeJs size={20} />
                    Node.js
                  </div>

                  {/* MongoDB */}
                  <div className="flex items-center gap-2 px-6 py-2 mx-2 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 font-semibold hover:bg-emerald-500 hover:text-white transition-all">
                    <SiMongodb size={18} />
                    MongoDB
                  </div>

                  {/* Tailwind */}
                  <div className="flex items-center gap-2 px-6 py-2 mx-2 rounded-full bg-cyan-500/10 text-cyan-600 border border-cyan-500/20 font-semibold hover:bg-cyan-500 hover:text-white transition-all">
                    <SiTailwindcss size={18} />
                    Tailwind
                  </div>

                  {/* JavaScript */}
                  <div className="flex items-center gap-2 px-6 py-2 mx-2 rounded-full bg-yellow-500/10 text-yellow-600 border border-yellow-500/20 font-semibold hover:bg-yellow-500 hover:text-black transition-all">
                    <FaJs size={18} />
                    JavaScript
                  </div>

                  {/* Git */}
                  <div className="flex items-center gap-2 px-6 py-2 mx-2 rounded-full bg-orange-500/10 text-orange-600 border border-orange-500/20 font-semibold hover:bg-orange-500 hover:text-white transition-all">
                    <FaGitAlt size={18} />
                    Git
                  </div>

                </div>

              </Marquee>
            </div>


          </div>
        </motion.div>
      </div>


    </section>
  )
}
