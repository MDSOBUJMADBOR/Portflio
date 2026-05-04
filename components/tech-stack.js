"use client"

import { motion } from "framer-motion"

const techs = [
  { name: "HTML", color: "#E34F26", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", color: "#1572B6", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", color: "#F7DF1E", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", color: "#61DAFB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", color: "#000000", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", color: "#339933", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", color: "#47A248", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Tailwind.css", color: "#06B6D4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Git", color: "#F05032", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", color: "#181717", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
]

export default function TechStack() {
  return (
    <section id="tech" className="py-24 px-[5%] bg-gray-50 dark:bg-dark-2 text-center">
      <div className="text-blue font-bold text-xs uppercase tracking-[3px] mb-4">Technologies</div>
      <h2 className="font-syne text-3xl md:text-4xl font-extrabold mb-4 text-dark dark:text-white">Tech Stack</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-12">Technologies I work with to build high-quality products</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {techs.map((tech, idx) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="group p-6 rounded-2xl bg-white dark:bg-dark-3 shadow-md hover:shadow-xl hover:shadow-blue/10 border border-transparent hover:border-blue/20 transition-all cursor-default flex flex-col items-center"
          >
            <div className="w-12 h-12 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
              <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
            </div>
            <div className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {tech.name}
            </div>
          </motion.div>

        ))}
      </div>
    </section>
  )
}
