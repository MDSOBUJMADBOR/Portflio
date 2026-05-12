"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Github, Linkedin, Facebook } from "@/lib/brand-icons"

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`

    window.open(`https://wa.me/8801826140440?text=${text}`, "_blank")

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  // ✅ Social Links
  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/MDSOBUJMADBOR",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/md-sobuj-madbor",
    },
    {
      icon: Facebook,
      url: "https://www.facebook.com/share/1PDgKKfk12/",
    },
  ]

  return (
    <section id="contact" className="py-24 px-[5%] bg-white dark:bg-[#030712] text-dark dark:text-white transition-colors duration-300">

      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-12 rounded-xl bg-blue/10 dark:bg-blue/20 flex items-center justify-center text-blue">
          <Send size={24} className="-rotate-45" />
        </div>
        <h2 className="font-syne text-3xl font-extrabold">Contact</h2>
      </div>

      <div className="grid lg:grid-cols-[1fr_2fr_1.5fr] gap-12">

        {/* Left */}
        <div className="p-8 rounded-[32px] bg-gray-50 dark:bg-[#111827] border border-gray-100 dark:border-white/5 flex flex-col justify-center">
          <h3 className="font-syne text-3xl font-extrabold mb-6">Let's work together!</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            Have a project in mind? Let's discuss and build something amazing together.
          </p>
        </div>

        {/* Middle: FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-white/5 rounded-2xl p-4 text-sm outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition-all"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-white/5 rounded-2xl p-4 text-sm outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition-all"
            />
          </div>

          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-white/5 rounded-2xl p-4 text-sm outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition-all"
          />

          <textarea
            name="message"
            required
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-white/5 rounded-2xl p-4 text-sm outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition-all h-32 resize-none"
          />

          <button
            type="submit"
            className="flex items-center gap-2 px-10 py-4 bg-blue hover:bg-blue-dark text-white rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-blue/20 hover:scale-[1.05] active:scale-95"
          >
            Send Message <Send size={18} />
          </button>

        </form>

        {/* Right */}
        <div className="p-8 rounded-[32px] bg-gray-50 dark:bg-[#111827] border border-gray-100 dark:border-white/5 space-y-8">

          {/* Contact Info */}
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", val: "sobujmadbor660@gmail.com" },
              { icon: Phone, label: "Phone", val: "+880 1826140440" },
              { icon: MapPin, label: "Location", val: "Dhaka, Bangladesh" },
            ].map((info) => (
              <div key={info.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center text-blue">
                  <info.icon size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    {info.label}
                  </div>
                  <div className="font-bold text-sm">
                    {info.val}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex gap-3">
            {socialLinks.map((item, i) => {
              const Icon = item.icon
              return (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-blue transition-all duration-300 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}





// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Mail, Phone, MapPin, Send } from "lucide-react"
// import { Github, Linkedin, Facebook } from "@/lib/brand-icons"

// export default function Contact() {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//       const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`

//   window.open(`https://wa.me/8801826140440?text=${text}`, "_blank")
//     console.log(formData)

//     // 👉 এখানে API / email service connect করবে
//   }

//   return (
//     <section id="contact" className="py-24 px-[5%] bg-white dark:bg-[#030712] text-dark dark:text-white transition-colors duration-300">

//       <div className="flex items-center gap-4 mb-12">
//         <div className="w-12 h-12 rounded-xl bg-blue/10 dark:bg-blue/20 flex items-center justify-center text-blue">
//           <Send size={24} className="-rotate-45" />
//         </div>
//         <h2 className="font-syne text-3xl font-extrabold">Contact</h2>
//       </div>

//       <div className="grid lg:grid-cols-[1fr_2fr_1.5fr] gap-12">

//         {/* Left */}
//         <div className="p-8 rounded-[32px] bg-gray-50 dark:bg-[#111827] border border-gray-100 dark:border-white/5 flex flex-col justify-center">
//           <h3 className="font-syne text-3xl font-extrabold mb-6">Let's work together!</h3>
//           <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
//             Have a project in mind? Let's discuss and build something amazing together.
//           </p>
//         </div>

//         {/* Middle: FORM */}
//         <form onSubmit={handleSubmit} className="space-y-6">

//           <div className="grid sm:grid-cols-2 gap-6">
//             <input
//               type="text"
//               name="name"
//               required
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-white/5 rounded-2xl p-4 text-sm text-dark dark:text-gray-300 outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition-all"
//             />

//             <input
//               type="email"
//               name="email"
//               required
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-white/5 rounded-2xl p-4 text-sm text-dark dark:text-gray-300 outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition-all"
//             />
//           </div>

//           <input
//             type="text"
//             name="subject"
//             required
//             placeholder="Subject"
//             value={formData.subject}
//             onChange={handleChange}
//             className="w-full bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-white/5 rounded-2xl p-4 text-sm text-dark dark:text-gray-300 outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition-all"
//           />

//           <textarea
//             name="message"
//             required
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-white/5 rounded-2xl p-4 text-sm text-dark dark:text-gray-300 outline-none focus:border-blue focus:ring-2 focus:ring-blue/20 transition-all h-32 resize-none"
//           />

//           <button
//             type="submit"
//             className="flex items-center gap-2 px-10 py-4 bg-blue hover:bg-blue-dark text-white rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-blue/20 hover:shadow-glow hover:scale-[1.03] active:scale-95 cursor-pointer"
//           >
//             Send Message <Send size={18} />
//           </button>

//         </form>

//         {/* Right */}
//         <div className="p-8 rounded-[32px] bg-gray-50 dark:bg-[#111827] border border-gray-100 dark:border-white/5 space-y-8">

//           <div className="space-y-6">
//             {[
//               { icon: Mail, label: "Email", val: "sobujmadbor660@gmail.com" },
//               { icon: Phone, label: "Phone", val: "+880 1826140440" },
//               { icon: MapPin, label: "Location", val: "Dhaka, Bangladesh" },
//             ].map((info) => (
//               <div key={info.label} className="flex items-center gap-4">
//                 <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center text-blue">
//                   <info.icon size={20} />
//                 </div>
//                 <div>
//                   <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
//                     {info.label}
//                   </div>
//                   <div className="font-bold text-sm text-dark dark:text-white">
//                     {info.val}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex gap-3">
//             {[Github, Linkedin, Facebook].map((Icon, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-blue transition-all duration-300"
//               >
//                 <Icon size={18} />
//               </a>
//             ))}
//           </div>

//         </div>

//       </div>
//     </section>
//   )
// }