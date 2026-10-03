"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { projectsData } from "@/lib/data"
import {
ArrowRight,
ExternalLink,
FolderKanban,
Sparkles,
} from "lucide-react"

export default function Projects() {
return ( <section
   id="projects"
   className="relative overflow-hidden bg-[#080C16] px-[5%] py-24 text-white lg:py-32"
 >
{/* =========================
Background
========================== */} <div className="pointer-events-none absolute inset-0"> <div className="absolute left-[5%] top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" /> <div className="absolute right-[5%] top-1/2 h-96 w-96 rounded-full bg-cyan-500/5 blur-[140px]" />


    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
    />
  </div>

  <div className="relative mx-auto max-w-full">
    {/* =========================
        Section Header
    ========================== */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-16 max-w-3xl text-center"
    >
      {/* Badge */}
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/[0.07] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-blue-300">
        <FolderKanban className="h-3.5 w-3.5" />
        My Work
      </div>

      <h2 className="font-syne text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
        Featured{" "}
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
        A collection of projects I&apos;ve built while learning,
        experimenting and solving real-world development challenges.
      </p>

      <div className="mx-auto mt-7 h-px w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    </motion.div>

    {/* =========================
        Projects Grid
    ========================== */}
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
      {projectsData.map((project, idx) => (
        <motion.article
          key={project.id}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            delay: idx * 0.08,
            duration: 0.55,
            ease: "easeOut",
          }}
          whileHover={{ y: -7 }}
          className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-[#101625]/80 p-3 shadow-2xl shadow-black/10 backdrop-blur-xl transition-all duration-500 hover:border-blue-400/20 hover:shadow-blue-500/[0.08]"
        >
          {/* Top Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-2/3 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* =========================
              Project Image
          ========================== */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.15rem] bg-[#151B2B]">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080C16]/90 via-transparent to-transparent opacity-80" />

            <div className="absolute inset-0 bg-blue-500/0 transition-colors duration-500 group-hover:bg-blue-500/[0.05]" />

            {/* Project Number */}
            <div className="absolute left-4 top-4 flex h-9 min-w-9 items-center justify-center rounded-xl border border-white/15 bg-black/30 px-2.5 text-[10px] font-bold tracking-wider text-white backdrop-blur-md">
              {String(idx + 1).padStart(2, "0")}
            </div>

            {/* View */}
            <Link
              href={`/projects/${project.id}`}
              aria-label={`View ${project.title}`}
              className="absolute right-4 top-4 flex h-10 w-10 translate-y-[-6px] items-center justify-center rounded-xl border border-white/15 bg-black/30 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-blue-600"
            >
              <ArrowRight className="h-4 w-4" />
            </Link>

            {/* Image Bottom Badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div className="rounded-lg border border-white/10 bg-black/30 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-gray-200 backdrop-blur-md">
                Featured Project
              </div>
            </div>
          </div>

          {/* =========================
              Content
          ========================== */}
          <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
            <h3 className="font-syne text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-blue-300 sm:text-2xl">
              {project.title}
            </h3>

            {project.subtitle && (
              <p className="mt-2 line-clamp-1 text-xs font-medium text-blue-400/80">
                {project.subtitle}
              </p>
            )}

            <p className="mt-4 line-clamp-3 flex-1 text-sm leading-6 text-gray-500">
              {project.desc}
            </p>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-white/[0.07] bg-white/[0.035] px-2.5 py-1.5 text-[9px] font-semibold text-gray-400 transition-colors duration-300 group-hover:border-blue-400/10 group-hover:text-gray-300"
                >
                  {tag}
                </span>
              ))}

              {project.tags.length > 4 && (
                <span className="rounded-lg border border-white/[0.07] bg-white/[0.035] px-2.5 py-1.5 text-[9px] font-semibold text-gray-600">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>

            {/* Divider */}
            <div className="my-5 h-px bg-white/[0.06]" />

            {/* Button */}
            <Link
              href={`/projects/${project.id}`}
              className="group/btn flex w-full items-center justify-between rounded-xl border border-blue-400/15 bg-blue-500/[0.04] px-4 py-3.5 text-sm font-semibold text-blue-300 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" />
                View Details
              </span>

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </motion.article>
      ))}
    </div>



<div className="flex items-center justify-center mt-8">
  <Link
    href="https://github.com/MDSOBUJMADBOR"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-blue-400/50 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 px-6 py-3.5 text-sm font-semibold text-blue-300 shadow-[0_4px_20px_rgba(59,130,246,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:from-blue-500/20 hover:via-indigo-500/20 hover:to-purple-500/20 hover:text-white hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)]"
  >
    {/* Animated Glow */}
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

    <span className="relative flex items-center gap-2.5">
      <Sparkles className="h-4 w-4 text-blue-400 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-purple-300" />
      <span>View All Projects</span>
    </span>

    <span className="relative flex h-7 w-7 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/10 transition-all duration-300 group-hover:border-blue-300/40 group-hover:bg-blue-500/20">
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </span>
  </Link>
</div>




    {/* =========================
        Bottom Note
    ========================== */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="mt-14 flex items-center justify-center gap-3 text-center"
    >
      <div className="h-px w-10 bg-white/10" />

      <p className="text-xs text-gray-600">
        More projects and experiments are continuously being built.
      </p>

      <div className="h-px w-10 bg-white/10" />
    </motion.div>
  </div>
</section>


)
}
