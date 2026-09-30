"use client"

import { use, useState } from "react"
import { projectsData } from "@/lib/data"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
ArrowLeft,
ArrowRight,
ExternalLink,
FileText,
Settings,
Rocket,
ChevronRight,
CheckCircle2,
Layers3,
Sparkles,
} from "lucide-react"

export default function ProjectPage({ params }) {
const { id } = use(params)

const project = projectsData.find((p) => p.id === id)

if (!project) {
notFound()
}

// Main image state
const [selectedImage, setSelectedImage] = useState(project.image)

// Featured images
const featuredImages = project.featuredBooks || []

return ( <main className="relative min-h-screen overflow-hidden bg-[#080C16] text-white">
{/* =========================
Background
========================== */} <div className="pointer-events-none absolute inset-0"> <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />


    <div className="absolute right-0 top-[30%] h-[450px] w-[450px] rounded-full bg-purple-600/5 blur-[150px]" />

    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
    />
  </div>

  <div className="relative mx-auto max-w-full px-[5%] pb-24 pt-28 lg:pt-32">
    {/* =========================
        Breadcrumb
    ========================== */}
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-gray-600">
        <Link
          href="/"
          className="transition-colors hover:text-blue-400"
        >
          Home
        </Link>

        <ChevronRight className="h-3.5 w-3.5" />

        <Link
          href="/#projects"
          className="transition-colors hover:text-blue-400"
        >
          Projects
        </Link>

        <ChevronRight className="h-3.5 w-3.5" />

        <span className="max-w-[180px] truncate text-gray-300">
          {project.title}
        </span>
      </div>

      <Link
        href="/#projects"
        className="group flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-2.5 text-xs font-semibold text-gray-400 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/[0.07] hover:text-white"
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
        Back to Projects
      </Link>
    </div>

    {/* =========================
        Hero
    ========================== */}
    <div className="mb-12">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/[0.07] px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.22em] text-blue-300">
        <Sparkles className="h-3.5 w-3.5" />
        Project Details
      </div>

      <h1 className="max-w-4xl font-syne text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
        {project.title}
      </h1>

      {project.subtitle && (
        <p className="mt-5 max-w-3xl text-base leading-7 text-gray-500 sm:text-lg">
          {project.subtitle}
        </p>
      )}

      {/* Tags */}
      <div className="mt-7 flex flex-wrap gap-2">
        {(project.tags || []).map((tag) => (
          <span
            key={tag}
            className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* =========================
        Main Layout
    ========================== */}
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(300px,0.8fr)]">
      {/* =========================
          Main Content
      ========================== */}
      <div className="min-w-0 space-y-8">
        {/* =========================
            Main Image
        ========================== */}
        <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#101625] p-2 shadow-2xl shadow-black/20">
          <div className="relative overflow-hidden rounded-[1.1rem] bg-[#151B2B]">
            <img
              src={selectedImage}
              alt={project.title}
              className="h-auto max-h-[700px] min-h-[300px] w-full object-cover transition-all duration-500"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            {/* Selected Image Label */}
            <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-xl">
              Preview
            </div>
          </div>
        </div>

        {/* =========================
            Description
        ========================== */}
        <section className="rounded-[1.5rem] border border-white/[0.07] bg-[#101625]/80 p-6 backdrop-blur-xl sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <FileText className="h-5 w-5" />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-400">
                Overview
              </p>

              <h2 className="mt-1 font-syne text-xl font-bold">
                About This Project
              </h2>
            </div>
          </div>

          <p className="text-sm leading-7 text-gray-500">
            {project.desc}
          </p>
        </section>

        {/* =========================
            Featured Details
        ========================== */}
        {featuredImages.length > 0 && (
          <section>
            <div className="mb-5 flex items-end justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-blue-400">
                  <Layers3 className="h-4 w-4" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                    Gallery
                  </span>
                </div>

                <h2 className="font-syne text-2xl font-bold">
                  Featured Details
                </h2>
              </div>

              <span className="hidden text-xs text-gray-600 sm:block">
                {featuredImages.length} images
              </span>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {featuredImages.map((img, idx) => {
                const isSelected = selectedImage === img

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`group relative aspect-[3/4] overflow-hidden rounded-xl border bg-[#101625] text-left transition-all duration-300 ${
                      isSelected
                        ? "border-blue-500 ring-2 ring-blue-500/30 shadow-lg shadow-blue-500/10"
                        : "border-white/[0.07] hover:border-blue-400/40"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${project.title} detail ${idx + 1}`}
                      className={`h-full w-full object-cover transition-transform duration-500 ${
                        isSelected
                          ? "scale-[1.03]"
                          : "group-hover:scale-105"
                      }`}
                    />

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 transition-all duration-300 ${
                        isSelected
                          ? "bg-blue-500/10"
                          : "bg-black/0 group-hover:bg-black/10"
                      }`}
                    />

                    {/* Image Number */}
                    <span
                      className={`absolute bottom-2 left-2 rounded-md border px-2 py-1 text-[8px] font-bold backdrop-blur-md ${
                        isSelected
                          ? "border-blue-400/30 bg-blue-500/80 text-white"
                          : "border-white/10 bg-black/40 text-white"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    {/* Selected Indicator */}
                    {isSelected && (
                      <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg shadow-blue-500/30">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Gallery Hint */}
            <p className="mt-4 flex items-center gap-2 text-xs text-gray-600">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              Click any image to preview it above
            </p>
          </section>
        )}
      </div>

      {/* =========================
          Sidebar
      ========================== */}
      <aside className="lg:sticky lg:top-24 lg:h-fit">
        <div className="space-y-5">
          {/* Links Card */}
          <section className="rounded-[1.5rem] border border-white/[0.07] bg-[#101625]/90 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <ExternalLink className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-400">
                  Explore
                </p>

                <h2 className="mt-1 font-syne text-lg font-bold">
                  Project Links
                </h2>
              </div>
            </div>

            <div className="space-y-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
                >
                  <span className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Project
                  </span>

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  <span>GitHub Repository</span>

                  <ExternalLink className="h-3.5 w-3.5 text-gray-600 transition-colors group-hover:text-blue-400" />
                </a>
              )}
            </div>
          </section>

          {/* Challenges */}
          {project.challenges?.length > 0 && (
            <section className="rounded-[1.5rem] border border-white/[0.07] bg-[#101625]/80 p-5 backdrop-blur-xl sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                  <Settings className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-amber-400">
                    Development
                  </p>

                  <h2 className="mt-1 font-syne text-lg font-bold">
                    Challenges
                  </h2>
                </div>
              </div>

              <ul className="space-y-3">
                {project.challenges.map((challenge, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-sm leading-6 text-gray-500"
                  >
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-amber-400/70" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Improvements */}
          {project.improvements?.length > 0 && (
            <section className="rounded-[1.5rem] border border-white/[0.07] bg-[#101625]/80 p-5 backdrop-blur-xl sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                  <Rocket className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-purple-400">
                    Roadmap
                  </p>

                  <h2 className="mt-1 font-syne text-lg font-bold">
                    Future Improvements
                  </h2>
                </div>
              </div>

              <ul className="space-y-3">
                {project.improvements.map((improvement, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-sm leading-6 text-gray-500"
                  >
                    <Rocket className="mt-1 h-4 w-4 shrink-0 text-purple-400/70" />
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </aside>
    </div>
  </div>
</main>


)
}
