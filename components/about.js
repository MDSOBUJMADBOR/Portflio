"use client"

import { motion } from "framer-motion"
import { Download, User, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })

      gsap.from(".about-info", {
        scrollTrigger: {
          trigger: ".about-info",
          start: "top 85%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 px-[5%] bg-white dark:bg-dark overflow-hidden">
      <div className="grid lg:grid-cols-[300px_1fr_240px] gap-12 items-start">
        {/* Left Column: Image Area */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue/10 border border-white/5">
            <div className="h-[360px] bg-gradient-to-br from-blue/20 to-blue/40 flex items-end justify-center overflow-hidden">
              <img 
                src="/profile.png" 
                alt="SOBUJ MADBOR" 
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
              />

            </div>
          </div>


          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white dark:bg-dark-2 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-2 border border-gray-100 dark:border-white/5 font-bold text-xs text-dark dark:text-white">
            <MapPin size={14} className="text-blue" /> Based in Dhaka, Bangladesh
          </div>
        </motion.div>

        {/* Center Column: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-blue font-bold text-xs uppercase tracking-[3px] mb-4">About Me</div>
          {/* <h2 className="about-title font-syne text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold leading-tight mb-6 text-dark dark:text-white">
            Crafting digital experiences that make an <span className="text-blue border-b-4 border-blue/20">impact</span>
          </h2> */}
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-8 text-justify">
            I am a Junior Full-Stack Developer with a strong passion for building modern, responsive, and user-friendly web applications. My journey started with curiosity about how websites work, which led me to learn HTML and CSS, and gradually move into JavaScript, React, and Next.js. I am now expanding my skills toward full-stack development.
          </p>
          {/* <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-8">I enjoy creating clean UI designs and solving real-world problems through code. I am especially interested in frontend development, where I can combine logic and creativity to build smooth and interactive user experiences.</p> */}

          <div className="flex flex-wrap gap-3 mb-10">
            {["⚡ Clean Code", "🎯 Pixel Perfect", "📱 Responsive", "🚀 Performance","Problem Solving","UI/UX Design",].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-blue/5 dark:bg-blue/10 border border-blue/10 text-blue font-bold text-xs flex items-center gap-2"
              >
                <CheckCircle2 size={12} /> {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="flex items-center gap-2 px-8 py-4 bg-blue hover:bg-blue-dark text-white rounded-xl font-bold transition-all shadow-lg shadow-blue/20"
            >
              <Download size={18} /> Download CV
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-gray-200 dark:border-white/10 hover:border-blue dark:hover:border-blue hover:text-blue text-dark dark:text-white rounded-xl font-bold transition-all"
            >
              More About Me →
            </a>
          </div>
        </motion.div>






        {/* Right Column: Info List */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          {[
            { icon: User, label: "Name", val: "Sobuj Madbor" },
            { icon: Mail, label: "Email", val: "sobujmadbor660@gmail.com" },
            { icon: Phone, label: "Phone", val: "+880 1826140440" },
            { icon: CheckCircle2, label: "Freelance", val: "Available", color: "text-green" },
          ].map((info) => (
            <div key={info.label} className="about-info flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue/5 dark:bg-blue/10 flex items-center justify-center text-blue shrink-0">
                <info.icon size={18} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                  {info.label}
                </div>
                <div className={cn("text-sm font-bold text-dark dark:text-white", info.color)}>
                  {info.val}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
