"use client"

import { useState, useEffect } from "react"
import { Menu, X, Download, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
{ name: "Home", href: "#home" },
{ name: "About", href: "#about" },
{ name: "Services", href: "#tech" },
{ name: "Qualification", href: "#skills" },
{ name: "Projects", href: "#projects" },
{ name: "Contact", href: "#contact" },
]

export default function Navbar() {
const [mounted, setMounted] = useState(false)
const [activeSection, setActiveSection] = useState("home")
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
const [scrolled, setScrolled] = useState(false)

// =========================
// Mount + Scroll Detection
// =========================
useEffect(() => {
setMounted(true)

const handleScroll = () => {
  setScrolled(window.scrollY > 20)
}

handleScroll()
window.addEventListener("scroll", handleScroll, { passive: true })

return () => {
  window.removeEventListener("scroll", handleScroll)
}


}, [])

// =========================
// Active Section Detection
// =========================
useEffect(() => {
if (!mounted) return


const observer = new IntersectionObserver(
  (entries) => {
    const visibleEntries = entries.filter(
      (entry) => entry.isIntersecting
    )

    if (visibleEntries.length > 0) {
      visibleEntries.sort(
        (a, b) => b.intersectionRatio - a.intersectionRatio
      )

      const currentId =
        visibleEntries[0].target.getAttribute("id")

      if (currentId) {
        setActiveSection(currentId)
      }
    }
  },
  {
    root: null,
    rootMargin: "-25% 0px -55% 0px",
    threshold: [0, 0.15, 0.3, 0.5, 0.75, 1],
  }
)

const sections = document.querySelectorAll("section[id]")

sections.forEach((section) => observer.observe(section))

return () => {
  sections.forEach((section) => observer.unobserve(section))
  observer.disconnect()
}


}, [mounted])

// =========================
// Close Mobile Menu
// =========================
const closeMobileMenu = () => {
setMobileMenuOpen(false)
}

if (!mounted) return null

return (
<nav
className={cn(
"fixed left-4 right-4 top-4 z-50 mx-auto flex h-[66px] items-center justify-between rounded-2xl border transition-all duration-500 md:left-6 md:right-6 lg:left-8 lg:right-8",
scrolled
? "border-white/10 bg-[#080D18]/90 shadow-[0_15px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
: "border-white/[0.07] bg-[#0B0F19]/75 shadow-lg backdrop-blur-xl"
)}
>
{/* =========================
Logo
========================== */} <a
     href="/"
     onClick={closeMobileMenu}
     className="group flex items-center gap-2.5 pl-4 md:pl-5"
   >
{/* Logo Mark */} <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/30"> <span className="font-syne text-[11px] font-extrabold tracking-tight text-white">
SM </span>


      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </div>

    {/* Name */}
    <div className="hidden min-[400px]:block">
      <span className="font-syne text-base font-bold tracking-wide text-white md:text-lg">
        Sobuj{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Madbor
        </span>
      </span>

      <span className="hidden text-[8px] font-medium uppercase tracking-[0.22em] text-gray-600 sm:block">
        MERN Stack Developer
      </span>
    </div>
  </a>

  {/* =========================
      Desktop Navigation
  ========================== */}
  <div className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full border border-white/[0.08] bg-[#111827]/80 p-1 backdrop-blur-xl lg:flex">
    {navLinks.map((link) => {
      const isActive =
        activeSection === link.href.substring(1)

      return (
        <a
          key={link.name}
          href={link.href}
          className={cn(
            "group relative rounded-full px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300 xl:px-4",
            isActive
              ? "text-white"
              : "text-gray-500 hover:text-gray-200"
          )}
        >
          {/* Active Background */}
          {isActive && (
            <span className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-600/20" />
          )}

          {/* Hover Background */}
          {!isActive && (
            <span className="absolute inset-0 -z-0 rounded-full bg-white/0 transition-colors duration-300 group-hover:bg-white/[0.05]" />
          )}

          <span className="relative z-10">
            {link.name}
          </span>
        </a>
      )
    })}
  </div>

  {/* =========================
      Right Side
  ========================== */}
  <div className="flex items-center gap-2 pr-3 md:gap-3 md:pr-4">
    {/* Availability Indicator */}
    <div className="hidden items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.05] px-3 py-2 xl:flex">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>

      <span className="text-[10px] font-semibold tracking-wide text-emerald-400">
        Available
      </span>
    </div>

    {/* Resume */}
    <a
      href="/resume.pdf"
      download="Sobuj-Madbor-Resume.pdf"
      className="group hidden items-center gap-2 rounded-xl border border-blue-400/20 bg-blue-600 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/30 active:scale-95 lg:flex"
    >
      <Download
        size={14}
        strokeWidth={2.5}
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
      />

      <span>Resume</span>

      <ArrowUpRight
        size={13}
        className="opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
      />
    </a>

    {/* Mobile Menu */}
    <button
      type="button"
      aria-label={
        mobileMenuOpen
          ? "Close navigation menu"
          : "Open navigation menu"
      }
      aria-expanded={mobileMenuOpen}
      onClick={() =>
        setMobileMenuOpen((prev) => !prev)
      }
      className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/10 hover:text-white lg:hidden"
    >
      {mobileMenuOpen ? (
        <X
          size={20}
          className="transition-transform duration-300 group-hover:rotate-90"
        />
      ) : (
        <Menu size={20} />
      )}
    </button>
  </div>

  {/* =========================
      Mobile Menu
  ========================== */}
  <div
    className={cn(
      "absolute left-0 right-0 top-[74px] overflow-hidden rounded-2xl border border-white/10 bg-[#080D18]/95 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-300 lg:hidden",
      mobileMenuOpen
        ? "pointer-events-auto visible translate-y-0 opacity-100"
        : "pointer-events-none invisible -translate-y-3 opacity-0"
    )}
  >
    <div className="p-3">
      {/* Mobile Links */}
      <div className="space-y-1">
        {navLinks.map((link) => {
          const isActive =
            activeSection === link.href.substring(1)

          return (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMobileMenu}
              className={cn(
                "flex items-center justify-between rounded-xl px-4 py-3.5 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300",
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "text-gray-500 hover:bg-white/[0.05] hover:text-white"
              )}
            >
              <span>{link.name}</span>

              {isActive && (
                <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              )}
            </a>
          )
        })}
      </div>

      {/* Divider */}
      <div className="my-3 h-px bg-white/[0.07]" />

      {/* Mobile Resume */}
      <a
        href="/resume.pdf"
        download="Sobuj-Madbor-Resume.pdf"
        onClick={closeMobileMenu}
        className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:from-blue-500 hover:to-cyan-500 active:scale-[0.98]"
      >
        <Download
          size={15}
          strokeWidth={2.5}
        />

        Download Resume

        <ArrowUpRight
          size={14}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </a>

      {/* Availability */}
      <div className="mt-3 flex items-center justify-center gap-2 py-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>

        <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-400">
          Open for opportunities
        </span>
      </div>
    </div>
  </div>
</nav>


)
}
