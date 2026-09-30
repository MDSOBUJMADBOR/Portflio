"use client"

import { useState } from "react"
import {
  ArrowUp,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Sparkles,
} from "lucide-react"

// =========================
// Social Icons
// =========================
const Github = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const Linkedin = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM3.555 20.452V9h3.564v11.452H3.555zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
  </svg>
)

const Facebook = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

// =========================
// Social Links
// =========================
const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/MDSOBUJMADBOR",
    label: "GitHub",
    color: "#6e40c9",
    shadow: "rgba(110,64,201,0.35)",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/md-sobuj-madbor",
    label: "LinkedIn",
    color: "#0A66C2",
    shadow: "rgba(10,102,194,0.35)",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/1PDgKKfk12/",
    label: "Facebook",
    color: "#1877F2",
    shadow: "rgba(24,119,242,0.35)",
  },
]

// =========================
// Footer Data
// =========================
const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

const services = [
  "Web Development",
  "Web Design",
  "Responsive Design",
  "UI/UX Design",
  "SEO",
]

// =========================
// Footer
// =========================
export default function Footer() {
  const [email, setEmail] = useState("")
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email.trim()) return

    const subject = encodeURIComponent("Newsletter Subscribe")
    const body = encodeURIComponent(
      `Hello Sobuj,\n\nI would like to subscribe to your newsletter.\n\nEmail: ${email}`
    )

    window.location.href = `mailto:sobujmadbor660@gmail.com?subject=${subject}&body=${body}`

    setNewsletterSubscribed(true)
    setEmail("")
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#030712] text-white "
    >
      {/* =========================
          Background Decoration
      ========================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-[10%] h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute right-[5%] top-1/3 h-96 w-96 rounded-full bg-cyan-500/5 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-600/5 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative px-[5%] pt-20 lg:pt-24">
        {/* =========================
            Top CTA
        ========================== */}
        <div className="mb-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-10 lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-300">
                <Sparkles className="h-3.5 w-3.5" />
                Let&apos;s build something great
              </div>

              <h2 className="font-syne text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Have a project in mind?
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Let&apos;s work together.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                I enjoy building modern, responsive and user-friendly web
                experiences with clean code and thoughtful design.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-3 rounded-xl border border-blue-400/20 bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30"
            >
              Get In Touch
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* =========================
            Main Footer Grid
        ========================== */}
        <div className="grid gap-12 border-b border-white/10 pb-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1.3fr] lg:gap-10">
          {/* =========================
              Brand
          ========================== */}
          <div className="text-center sm:text-left">
            <a
              href="#home"
              className="group inline-flex items-center justify-center gap-3 sm:justify-start"
            >
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 font-syne text-base font-extrabold text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
                <span className="relative z-10">SM</span>

                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <span className="font-syne text-xl font-bold tracking-tight">
                Sobuj Madbor
              </span>
            </a>

            <p className="mx-auto mt-6 max-w-[300px] text-sm leading-7 text-gray-400 sm:mx-0">
              MERN Stack Developer focused on building modern, responsive and
              user-friendly web applications.
            </p>

            {/* Social */}
            <div className="mt-7 flex justify-center gap-3 sm:justify-start">
              {socialLinks.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    title={link.label}
                    style={{
                      "--social-color": link.color,
                      "--social-shadow": link.shadow,
                    }}
                    className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--social-color)] hover:bg-[var(--social-color)] hover:text-white hover:shadow-[0_10px_30px_var(--social-shadow)]"
                  >
                    <Icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" />

                    <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#0b1220] px-2.5 py-1.5 text-[10px] font-semibold text-white opacity-0 shadow-xl transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100">
                      {link.label}
                    </span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* =========================
              Quick Links
          ========================== */}
          <div className="text-center sm:text-left">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>

            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors duration-200 hover:text-blue-400"
                  >
                    <span className="h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================
              Services
          ========================== */}
          <div className="text-center sm:text-left">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-white">
              Services
            </h3>

            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors duration-200 hover:text-blue-400"
                  >
                    <span className="h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-3" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================
              Newsletter
          ========================== */}
          <div className="text-center sm:text-left">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-white">
              Newsletter
            </h3>

            <p className="mb-6 text-sm leading-6 text-gray-500">
              Get occasional updates, new projects and development insights.
            </p>

            {!newsletterSubscribed ? (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-2"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Mail className="h-4 w-4" />
                  </div>

                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Your email"
                    aria-label="Your email"
                    className="min-w-0 flex-1 bg-transparent px-1 text-sm text-white outline-none placeholder:text-gray-600"
                  />

                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/30 active:scale-95"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-5">
                <div className="flex items-start gap-3 text-left">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />

                  <div>
                    <p className="text-sm font-bold text-emerald-400">
                      Subscription ready!
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Your email client should open so you can complete the
                      subscription request.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* =========================
            Bottom Footer
        ========================== */}
        <div className="flex flex-col gap-6 py-7 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-xs text-gray-600 sm:text-sm">
              © 2026{" "}
              <span className="font-medium text-gray-400">
                Sobuj Madbor
              </span>
              . All rights reserved.
            </p>
          </div>

          <div className="flex items-center justify-center gap-5">
            <span className="hidden h-4 w-px bg-white/10 sm:block" />

            <p className="text-xs text-gray-600">
              Designed & built with
              <span className="mx-1 text-blue-400">♥</span>
              & code
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
            >
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
