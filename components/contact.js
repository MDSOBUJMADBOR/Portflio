import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Github, Linkedin, Twitter, Instagram } from "@/lib/brand-icons"

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-[5%] bg-white dark:bg-[#030712] text-dark dark:text-white transition-colors duration-300">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-12 rounded-xl bg-blue/10 dark:bg-blue/20 flex items-center justify-center text-blue">
          <Send size={24} className="-rotate-45" />
        </div>
        <h2 className="font-syne text-3xl font-extrabold">Contact</h2>
      </div>

      <div className="grid lg:grid-cols-[1fr_2fr_1.5fr] gap-12">
        {/* Left: Intro */}
        <div className="p-8 rounded-[32px] bg-gray-50 dark:bg-[#111827] border border-gray-100 dark:border-white/5 flex flex-col justify-center">
          <h3 className="font-syne text-3xl font-extrabold mb-6">Let's work together!</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            Have a project in mind? Let's discuss and build something amazing together.
          </p>
        </div>

        {/* Middle: Form */}
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-white/5 rounded-2xl p-4 text-sm text-dark dark:text-gray-300 outline-none focus:border-blue transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-white/5 rounded-2xl p-4 text-sm text-dark dark:text-gray-300 outline-none focus:border-blue transition-all"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-white/5 rounded-2xl p-4 text-sm text-dark dark:text-gray-300 outline-none focus:border-blue transition-all"
          />
          <textarea
            placeholder="Your Message"
            className="w-full bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-white/5 rounded-2xl p-4 text-sm text-dark dark:text-gray-300 outline-none focus:border-blue transition-all h-32 resize-none"
          />
          <button className="flex items-center gap-2 px-10 py-4 bg-blue hover:bg-blue-dark text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue/20">
            Send Message <Send size={18} />
          </button>
        </div>

        {/* Right: Info */}
        <div className="p-8 rounded-[32px] bg-gray-50 dark:bg-[#111827] border border-gray-100 dark:border-white/5 space-y-8">
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", val: "mdsobujmadbor@example.com" },
              { icon: Phone, label: "Phone", val: "+880 1234-567890" },
              { icon: MapPin, label: "Location", val: "Dhaka, Bangladesh" },
            ].map((info) => (
              <div key={info.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center text-blue">
                  <info.icon size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{info.label}</div>
                  <div className="font-bold text-sm text-dark dark:text-white">{info.val}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex gap-3">
            {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-blue transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>

  )
}

