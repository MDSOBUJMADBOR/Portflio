"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Award } from "lucide-react"
import { cn } from "@/lib/utils"

const techData = [
  { name: "React.js", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
  { name: "TypeScript", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", category: "Backend/DB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", category: "Backend/DB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
  { name: "MongoDB", category: "Backend/DB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "BetterAuth", category: "Backend/DB", icon: null, LucideIcon: Shield, color: "#3b82f6" },
  { name: "Git", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
  { name: "Postman", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Vercel", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", invert: true },
  { name: "VS Code", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "ChatGPT", category: "AI & Prompts", icon: "https://cdn.simpleicons.org/openai/10a37f" },
  { name: "Gemini", category: "AI & Prompts", icon: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
];

const categories = ["All Tech", "Frontend", "Backend/DB", "Tools", "AI & Prompts"];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All Tech");

  const filteredTech = techData.filter(
    (tech) => activeCategory === "All Tech" || tech.category === activeCategory
  );

  return (
    <section id="tech" className="py-24 px-[5%] bg-white dark:bg-[#0F1221] transition-colors duration-300 ">
      <div className="max-w-full mx-auto">
        <div className="text-left mb-10">
          <div className="text-gray-500 dark:text-gray-400 font-bold text-[10px] uppercase tracking-[3px] mb-3">My Toolkit</div>
          <h2 className="font-syne text-3xl md:text-4xl font-extrabold text-dark dark:text-white">Technical Skills</h2>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-between p-2 mb-10 bg-gray-100 dark:bg-[#161A2E] rounded-2xl w-full">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 w-full sm:w-auto text-center",
                activeCategory === category
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-500 dark:text-gray-400 hover:text-dark dark:hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50 dark:bg-[#161A2E] hover:bg-gray-100 dark:hover:bg-[#1E2340] transition-all"
              >
                <div className="w-10 h-10 mb-4 flex items-center justify-center">
                  {tech.LucideIcon ? (
                    <tech.LucideIcon size={40} color={tech.color} strokeWidth={1.5} />
                  ) : (
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className={cn("w-full h-full object-contain", tech.invert && "dark:invert")}
                    />
                  )}
                </div>
                <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 text-center">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}