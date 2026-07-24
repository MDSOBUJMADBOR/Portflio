"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { projectsData } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-[5%] bg-[#0B0E17] text-white"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
        <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-[3px] text-gray-400 mb-6">
          My Work
        </div>
        <h2 className="font-syne text-4xl md:text-5xl font-extrabold mb-6">
          Featured <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Here are some of my selected projects. Each project was a unique challenge that helped me grow as a developer.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: idx * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 18,
            }}
            className="flex flex-col bg-[#121626] rounded-2xl p-5 border border-white/5 shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group"
          >
            {/* Image */}
            <div className="aspect-[4/3] bg-[#1a1e36] rounded-xl mb-6 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Title */}
            <h3 className="font-syne text-2xl font-bold mb-3 text-white">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              {project.desc.substring(0, 100)}...
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 font-medium text-[10px] rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link Button */}
            <Link
              href={`/projects/${project.id}`}
              className="w-full py-3.5 rounded-xl border border-blue-500/30 hover:border-blue-500 hover:bg-blue-500/10 text-blue-400 font-semibold text-sm transition-all flex items-center justify-center gap-2 group/btn"
            >
              View Details 
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}