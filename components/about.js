"use client"

import { motion } from "framer-motion"
import { Download, Rocket, Code2, LayoutGrid, UserCircle2 } from "lucide-react"
import { Dancing_Script } from "next/font/google"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const infoCards = [
  {
    icon: Rocket,
    title: "My Journey",
    desc: "Started with HTML & CSS. Fell in love with JavaScript. Now building full-stack web apps with the MERN stack.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Code2,
    title: "What I Enjoy",
    desc: "I love building responsive UIs, working on clean code, solving problems and bringing ideas to life.",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: LayoutGrid,
    title: "Beyond Code",
    desc: "I enjoy playing football, reading books, listening to music and capturing moments through photography.",
    gradient: "from-cyan-400 to-emerald-400",
  },
  {
    icon: UserCircle2,
    title: "My Personality",
    desc: "Curious, dedicated and positive minded. I love challenges and believe in improving a little every day.",
    gradient: "from-amber-400 to-orange-500",
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-[5%] bg-[#0a0d1a] dark:bg-[#0a0d1a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Image + Text */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue/10 group">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1a]/60 via-transparent to-transparent z-10 pointer-events-none" />
              <img
                src="/profile.png"
                alt="Sobuj Madbor"
                className="w-full h-[340px] sm:h-[420px] lg:h-[480px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Decorative glow */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue/20 rounded-full blur-[80px] -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/15 rounded-full blur-[60px] -z-10" />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="space-y-6"
          >
            {/* Label */}
            <div className="flex items-center gap-4">
              <span className="text-cyan-400 font-bold text-xs uppercase tracking-[4px]">
                About Me
              </span>
              <div className="h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-transparent" />
            </div>

            {/* Heading */}
            <h2 className="font-syne text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold leading-tight text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue to-cyan-400 bg-clip-text text-transparent">
                Sobuj Madbor
              </span>{" "}
              <span className="inline-block animate-[wave_1.5s_ease-in-out_infinite]">👋</span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg font-semibold text-gray-300">
              <span className="bg-gradient-to-r from-blue to-cyan-400 bg-clip-text text-transparent">
                MERN Stack Developer
              </span>
            </p>

            {/* Bio paragraphs */}
            <div className="space-y-4 text-gray-400 text-[15px] leading-relaxed">
              <p>
                I'm a passionate MERN Stack Developer from Bangladesh. My journey into programming
                started in 2026 when I was curious about how websites and applications work. That
                curiosity turned into a love for coding, building projects, and solving problems.
              </p>
              <p>
                I enjoy creating clean, responsive and user-friendly web applications that solve
                real-world problems. I love working with  React, Next.js, Node.js and MongoDB to
                build full-stack applications.
              </p>
            </div>

            {/* Signature */}
            <div className={`${dancingScript.className} text-3xl text-white/80 pt-2`}>
              Sobuj Madbor
            </div>

            {/* Download Resume Button */}
            <motion.a
              href="/resume.pdf"
              download="resume.pdf"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue to-blue-dark text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue/30 hover:shadow-blue/50 w-full sm:w-auto"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom: Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {infoCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="relative group bg-[#111627] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden"
            >
              {/* Bottom gradient border */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${card.gradient} opacity-60 group-hover:opacity-100 transition-opacity`}
              />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                <card.icon size={22} className="text-cyan-400" />
              </div>

              {/* Title */}
              <h3 className="font-syne text-lg font-bold text-white mb-3">{card.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-[13px] leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave animation keyframes */}
      <style jsx global>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          50% { transform: rotate(-10deg); }
          75% { transform: rotate(15deg); }
        }
      `}</style>
    </section>
  )
}
