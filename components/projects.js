"use client"

import { motion } from "framer-motion"
import { Folder, ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const projects = [
  {
    title: "Portfolio Website",
    desc: "A personal portfolio website to showcase projects and skills.",
    tags: ["Tailwind CSS", "JavaScript", "React", "Next.js"],
    image: "/portflio.png",
    liveUrl: "https://sobuj-madbor-portflio.vercel.app",
    githubUrl: "https://github.com/MDSOBUJMADBOR/Portflio",
  },
  {
    title: "E-commerce Website",
    desc: "A full-stack e-commerce website built with the MERN stack.",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    image: "/project1.jpg",
    liveUrl: "https://pixgen-next-js.vercel.app",
    githubUrl: "https://github.com/your-repo",
  },
  {
    title: "Task Management App",
    desc: "A task management application to organize tasks and boost productivity.",
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "/project2.jpg",
    liveUrl: "https://tiles-gallery-next.vercel.app",
    githubUrl: "https://github.com/your-repo",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-[5%] bg-gray-50 dark:bg-[#030712]"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue/10 dark:bg-blue/20 flex items-center justify-center text-blue">
            <Folder size={20} />
          </div>
          <h2 className="font-syne text-2xl font-bold text-dark dark:text-white">
            Projects
          </h2>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: idx * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 18,
            }}
            className="group bg-white dark:bg-[#111827] rounded-2xl p-4 border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-700 ease-in-out hover:scale-[1.08]"
          >
            {/* Image */}
            <div className="aspect-[16/9] bg-gray-100 dark:bg-gray-800 rounded-xl mb-4 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue/10 to-transparent" />
            </div>

            {/* Title */}
            <h3 className="font-syne text-lg font-bold mb-2 text-dark dark:text-white">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4">
              {project.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 dark:bg-[#1F2937] text-blue font-bold text-[9px] rounded-md uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex justify-around items-center pt-3 border-t border-gray-100 dark:border-white/5">
              
              {/* Live Link */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-blue text-[11px] font-semibold transition-colors"
              >
                Live <ExternalLink size={12} />
              </a>

              <span className="text-gray-300 dark:text-gray-700">|</span>

              {/* GitHub Link */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-blue text-[11px] font-semibold transition-colors"
              >
                GitHub <FaGithub size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}