
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Github, Linkedin, Facebook } from "@/lib/brand-icons";
import emailjs from "@emailjs/browser";

const socialLinks = [
  {
    icon: Github,
    url: "https://github.com/MDSOBUJMADBOR",
    label: "GitHub",
    description: "My projects",
    hoverBg: "hover:bg-[#6e40c9]",
    hoverBorder: "hover:border-[#6e40c9]",
    hoverShadow: "hover:shadow-[0_0_25px_rgba(110,64,201,0.25)]",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/md-sobuj-madbor",
    label: "LinkedIn",
    description: "Connect with me",
    hoverBg: "hover:bg-[#0A66C2]",
    hoverBorder: "hover:border-[#0A66C2]",
    hoverShadow: "hover:shadow-[0_0_25px_rgba(10,102,194,0.25)]",
  },
  {
    icon: Facebook,
    url: "https://www.facebook.com/share/1PDgKKfk12/",
    label: "Facebook",
    description: "Follow me",
    hoverBg: "hover:bg-[#1877F2]",
    hoverBorder: "hover:border-[#1877F2]",
    hoverShadow: "hover:shadow-[0_0_25px_rgba(24,119,242,0.25)]",
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sobujmadbor660@gmail.com",
    href: "mailto:sobujmadbor660@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1826140440",
    href: "tel:+8801826140440",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "#",
  },
];

const inputClass =
  "w-full rounded-2xl border border-white/[0.08] bg-[#111827]/80 px-5 py-4 text-sm text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:border-blue-400/50 focus:bg-[#131D30] focus:ring-4 focus:ring-blue-500/[0.08]";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      submitting: true,
      success: false,
      error: "",
    });

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

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
        );
      } else {
        const subject = encodeURIComponent(
          formData.subject || "Contact Form Message"
        );

        const body = encodeURIComponent(
          `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}`
        );

        window.location.href = `mailto:sobujmadbor660@gmail.com?subject=${subject}&body=${body}`;
      }

      setStatus({
        submitting: false,
        success: true,
        error: "",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setStatus((prev) => ({
          ...prev,
          success: false,
        }));
      }, 7000);
    } catch (error) {
      console.error("Email send error:", error);

      setStatus({
        submitting: false,
        success: false,
        error: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#080D18] px-[5%] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[15%] h-80 w-80 rounded-full bg-blue-600/[0.08] blur-[130px]" />

        <div className="absolute right-[-10%] top-[35%] h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[140px]" />

        <div className="absolute bottom-[-15%] left-[35%] h-80 w-80 rounded-full bg-indigo-500/[0.05] blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="mx-auto max-w-full">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2">
            <Sparkles size={14} className="text-blue-300" />

            <span className="text-[10px] font-bold uppercase tracking-[3px] text-blue-300 sm:text-xs">
              Get In Touch
            </span>
          </div>

          <h2 className="font-syne text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Have a project idea, collaboration opportunity, or just want to
            say hello? Feel free to send me a message.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500" />
        </motion.div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.4fr_0.9fr]">

          {/* ================= LEFT CARD ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#101726]/80 p-7 shadow-2xl backdrop-blur-xl sm:p-8"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-[70px] transition-all duration-500 group-hover:bg-blue-500/20" />

            <div className="relative">

              {/* Icon */}
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/[0.08] text-blue-300">
                <Send size={24} className="-rotate-45" />
              </div>

              <h3 className="font-syne text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Let's work
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  together.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-gray-400">
                Have a project in mind? Let's discuss your idea and build
                something useful, modern, and amazing together.
              </p>

              {/* Availability */}
              <div className="mt-8 rounded-2xl border border-emerald-400/15 bg-emerald-500/[0.05] p-4">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-3 w-3">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative h-3 w-3 rounded-full bg-emerald-400" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-emerald-300">
                      Open for Opportunities
                    </p>

                    <p className="mt-1 text-[10px] text-gray-500">
                      Available for new projects
                    </p>
                  </div>
                </div>
              </div>

              {/* Small quote */}
              <div className="mt-8 border-t border-white/[0.07] pt-7">
                <p className="text-xs italic leading-6 text-gray-500">
                  "Great things are built through great collaboration."
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================= FORM ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[28px] border border-white/[0.07] bg-[#101726]/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
          >
            <div className="mb-7">
              <h3 className="font-syne text-xl font-bold text-white sm:text-2xl">
                Send a Message
              </h3>

              <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                Fill out the form and I'll get back to you as soon as possible.
              </p>
            </div>

            {/* Status */}
            <AnimatePresence mode="wait">
              {status.success && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-500/[0.07] p-4 text-sm text-emerald-300"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0"
                  />

                  <div>
                    <p className="font-bold">
                      Message sent successfully!
                    </p>

                    <p className="mt-1 text-xs text-emerald-400/70">
                      I'll get back to you as soon as possible.
                    </p>
                  </div>
                </motion.div>
              )}

              {status.error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 rounded-2xl border border-red-400/20 bg-red-500/[0.07] p-4 text-sm text-red-300"
                >
                  <p className="font-bold">
                    Unable to send message
                  </p>

                  <p className="mt-1 text-xs text-red-400/70">
                    {status.error}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

              </div>

              {/* Phone + Subject */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+880..."
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Project discussion"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me a little about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status.submitting}
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/15 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-500 hover:shadow-blue-500/25 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status.submitting ? (
                  <>
                    Sending Message
                    <Loader2 size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message

                    <Send
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* ================= RIGHT CARD ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[28px] border border-white/[0.07] bg-[#101726]/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
          >
            <div className="mb-7">
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-blue-400">
                Contact Details
              </span>

              <h3 className="mt-2 font-syne text-xl font-bold text-white">
                Let's stay connected
              </h3>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;

                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/[0.04]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/[0.08] text-blue-300 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={19} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] font-bold uppercase tracking-[2px] text-gray-600">
                        {info.label}
                      </p>

                      <p className="mt-1 truncate text-xs font-semibold text-gray-300 transition-colors group-hover:text-white sm:text-sm">
                        {info.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="shrink-0 text-gray-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300"
                    />
                  </a>
                );
              })}
            </div>

            {/* Social */}
            <div className="mt-8 border-t border-white/[0.07] pt-7">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[2px] text-gray-500">
                Find me online
              </p>

              <div className="space-y-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 transition-all duration-300 ${item.hoverBg} ${item.hoverBorder} ${item.hoverShadow}`}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1A2335] text-gray-400 transition-all duration-300 group-hover:bg-white/10 group-hover:text-white">
                        <Icon size={18} />
                      </div>

                      <div className="flex-1">
                        <p className="text-xs font-bold text-gray-300 group-hover:text-white">
                          {item.label}
                        </p>

                        <p className="mt-0.5 text-[10px] text-gray-600 group-hover:text-white/60">
                          {item.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={15}
                        className="text-gray-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Response time */}
            <div className="mt-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                  <Mail size={16} />
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-300">
                    Quick Response
                  </p>

                  <p className="mt-1 text-[10px] text-gray-600">
                    Usually replies within 24–48 hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

