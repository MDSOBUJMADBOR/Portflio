"use client"

import { motion } from "framer-motion"
import { Folder, ExternalLink } from "lucide-react"
import { Github } from "@/lib/brand-icons"


const projects = [
  {
    title: "E-commerce Website",
    desc: "A full-stack e-commerce website built with the MERN stack.",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    image: "/project1.jpg", // Placeholder or generated image
  },
  {
    title: "Task Management App",
    desc: "A task management application to organize tasks and boost productivity.",
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "/project2.jpg",
  },
  {
    title: "Portfolio Website",
    desc: "A personal portfolio website to showcase projects and skills.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/project3.jpg",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-[5%] bg-gray-50 dark:bg-[#030712] transition-colors duration-300">
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue/10 dark:bg-blue/20 flex items-center justify-center text-blue">
            <Folder size={24} />
          </div>
          <h2 className="font-syne text-3xl font-extrabold text-dark dark:text-white">Projects</h2>
        </div>
        <a href="#" className="text-blue font-bold text-sm hover:underline flex items-center gap-2">
          View All Projects <ExternalLink size={16} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white dark:bg-[#111827] rounded-[32px] p-6 border border-gray-200 dark:border-white/5 hover:border-blue/20 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="aspect-[16/10] bg-gray-100 dark:bg-gray-800 rounded-2xl mb-6 overflow-hidden relative">
              {/* Image would go here */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue/10 to-transparent" />
            </div>

            <h3 className="font-syne text-xl font-bold mb-3 text-dark dark:text-white">{project.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-gray-100 dark:bg-[#1F2937] text-blue font-bold text-[10px] rounded-lg uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-end gap-6 pt-4 border-t border-gray-100 dark:border-white/5">
              <a href="#" className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue text-xs font-bold transition-colors">
                Live Demo <ExternalLink size={14} />
              </a>
              <span className="text-gray-200 dark:text-gray-800">|</span>
              <a href="#" className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue text-xs font-bold transition-colors">
                GitHub <Github size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

  )
}

