"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { Github, Linkedin, Facebook } from "@/lib/brand-icons"
import emailjs from "@emailjs/browser"

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, success: false, error: "" })

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            to_email: "sobujmadbor660@gmail.com",
          },
          publicKey
        )
      } else {
        // Direct email dispatch to sobujmadbor660@gmail.com via mailto
        const subject = encodeURIComponent(formData.subject || "Contact Form Message")
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
        )
        window.location.href = `mailto:sobujmadbor660@gmail.com?subject=${subject}&body=${body}`
      }

      setStatus({ submitting: false, success: true, error: "" })
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }))
      }, 7000)
    } catch (err) {
      console.error("Email send error:", err)
      setStatus({ submitting: false, success: false, error: "Something went wrong. Please try again." })
    }
  }

  // ✅ Social Links
  const socialLinks = [
    { icon: Github, url: "https://github.com/MDSOBUJMADBOR", label: "GitHub", hoverBg: "hover:bg-[#6e40c9]", hoverShadow: "hover:shadow-[0_0_20px_rgba(110,64,201,0.4)]" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/md-sobuj-madbor", label: "LinkedIn", hoverBg: "hover:bg-[#0A66C2]", hoverShadow: "hover:shadow-[0_0_20px_rgba(10,102,194,0.4)]" },
    { icon: Facebook, url: "https://www.facebook.com/share/1PDgKKfk12/", label: "Facebook", hoverBg: "hover:bg-[#1877F2]", hoverShadow: "hover:shadow-[0_0_20px_rgba(24,119,242,0.4)]" },
  ]

  return (
    <section id="contact" className="py-24 px-[5%] bg-[#0B0F19] text-white transition-colors duration-300">

      <div className="max-w-full mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
            <Send size={24} className="-rotate-45" />
          </div>
          <h2 className="font-syne text-3xl font-extrabold text-white">Contact</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1.5fr] gap-8 lg:gap-12">

          {/* Left */}
          <div className="p-6 sm:p-8 rounded-[32px] bg-[#151B2B] border border-gray-800/60 flex flex-col justify-center">
            <h3 className="font-syne text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-6 text-white">
              Let's work together!
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Have a project in mind? Let's discuss and build something amazing together.
            </p>
          </div>

          {/* Middle: FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {status.success && (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-sm flex items-center gap-2">
                ✅ Message sent successfully! I'll get back to you as soon as possible.
              </div>
            )}

            {status.error && (
              <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 font-semibold text-sm">
                ❌ {status.error}
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#151B2B] border border-gray-800/60 rounded-2xl p-4 text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#151B2B] border border-gray-800/60 rounded-2xl p-4 text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>

            <input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-[#151B2B] border border-gray-800/60 rounded-2xl p-4 text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            />

            <textarea
              name="message"
              required
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#151B2B] border border-gray-800/60 rounded-2xl p-4 text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all h-32 resize-none"
            />

            <button
              type="submit"
              disabled={status.submitting}
              className="flex items-center justify-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-95 cursor-pointer w-full sm:w-auto disabled:opacity-50"
            >
              {status.submitting ? (
                <>Sending... <Loader2 size={18} className="animate-spin" /></>
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>

          </form>

          {/* Right */}
          <div className="p-6 sm:p-8 rounded-[32px] bg-[#151B2B] border border-gray-800/60 space-y-8">

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", val: "sobujmadbor660@gmail.com" },
                { icon: Phone, label: "Phone", val: "+880 1826140440" },
                { icon: MapPin, label: "Location", val: "Dhaka, Bangladesh" },
              ].map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 shrink-0">
                    <info.icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {info.label}
                    </div>
                    <div className="font-bold text-sm text-gray-200 truncate">
                      {info.val}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-800/60 flex gap-4">
              {socialLinks.map((item, i) => {
                const Icon = item.icon
                return (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-11 h-11 rounded-2xl bg-[#1E263B] border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-transparent ${item.hoverBg} ${item.hoverShadow} transition-all duration-300 hover:scale-110 active:scale-95`}
                  >
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    {/* Tooltip */}
                    <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900 border border-gray-800 text-white text-[10px] font-bold rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                      {item.label}
                    </span>
                  </a>
                )
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}