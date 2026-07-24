"use client"

import { useState, useEffect } from "react"
import { Menu, X, Layers, Slash, ChevronRight, Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { ChevronLeft } from 'lucide-react';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Qualification", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#tech" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Fix hydration issue and use IntersectionObserver for robust section tracking
  useEffect(() => {
    setMounted(true)

    const observer = new IntersectionObserver(
      (entries) => {
        // Find all intersecting entries
        const visibleEntries = entries.filter(entry => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          // Sort by intersection ratio to find the most visible section
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const currentId = visibleEntries[0].target.getAttribute("id");
          if (currentId) {
            setActiveSection(currentId);
          }
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px", // triggers when section is in the top/middle of the viewport
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [])

  if (!mounted) return null

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 dark:bg-[#090b14]/70 backdrop-blur-xl border-b border-gray-200/80 dark:border-white/10 shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] h-[68px] px-6 md:px-8 flex items-center justify-between transition-all duration-300 max-w-full">

      {/* Logo */}
      <a href="#home" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
        <div className="font-bold text-xl md:text-2xl tracking-tighter flex items-center">
          <span className="text-[#7B68FF]">&lt;</span>
          <span className="text-accent">/</span>
          <span className="text-accent">&gt;</span>
        </div>
        <span className="font-syne text-lg md:text-xl font-bold text-dark dark:text-white tracking-wide">
          Sobuj Madbor
        </span>
      </a>

      {/* Desktop Nav */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bg-white/90 dark:bg-[#161A2E]/80 backdrop-blur-lg border border-gray-200/80 dark:border-white/10 rounded-full p-1.5 gap-1 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={cn(
              "px-4 xl:px-5 py-2 rounded-full text-[12px] font-bold uppercase tracking-wider transition-all duration-300",
              activeSection === link.href.substring(1)
                ? "bg-blue text-white shadow-md shadow-blue/20 "
                : "text-blue dark:text-[#7A849E] hover:text-blue dark:hover:text-[#C5CFFF]"
            )}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download="resume.pdf"
          className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-full text-[12px] font-bold uppercase tracking-wider bg-blue text-white shadow-[0_0_20px_rgba(59,91,252,0.4)] hover:opacity-90 transition-all"
        >
          Resume <Download size={14} strokeWidth={2.5} />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-500 dark:text-[#7A849E] hover:text-blue dark:hover:text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[68px] left-0 right-0 bg-white/95 dark:bg-[#090b14]/95 backdrop-blur-xl border-b border-gray-200/80 dark:border-white/10 shadow-xl p-6 flex flex-col gap-2 lg:hidden animate-in slide-in-from-top duration-300 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "font-bold text-[13px] uppercase tracking-wider py-3 px-4 rounded-lg transition-all duration-300",
                activeSection === link.href.substring(1)
                  ? "bg-blue text-white shadow-md shadow-blue/20"
                  : "text-gray-500 dark:text-[#7A849E] hover:bg-gray-100 dark:hover:bg-white/5"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="resume.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 bg-blue text-white font-bold text-[13px] uppercase tracking-wider py-3 px-4 rounded-lg hover:opacity-90 transition-colors shadow-[0_0_20px_rgba(59,91,252,0.4)] flex items-center justify-center gap-2"
          >
            Resume <Download size={16} strokeWidth={2.5} />
          </a>
        </div>
      )}
    </nav>
  )
}










