"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X, Layers } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

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
  const { theme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Fix hydration issue
  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      let current = "home"

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id")
        }
      })

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0B0E1A]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 h-[68px] px-6 md:px-8 flex items-center justify-between transition-colors duration-300 max-w-full">
      
      {/* Logo */}
      <div className="w-[38px] h-[38px] rounded-xl bg-gradient-to-br from-blue to-[#7B68FF] flex items-center justify-center text-white shadow-lg shadow-blue/20">
        <Layers size={20} strokeWidth={2.5} />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-gray-100 dark:bg-[#161929] border border-gray-200 dark:border-white/10 rounded-full p-1.5 gap-1 shadow-xl">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={cn(
              "px-5 py-2 rounded-full text-[12px] font-bold uppercase tracking-wider transition-all duration-300",
              activeSection === link.href.substring(1)
                ? "bg-blue text-white shadow-[0_0_20px_rgba(59,91,252,0.4)]"
                : "text-gray-500 dark:text-[#7A849E] hover:text-blue dark:hover:text-[#C5CFFF]"
            )}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">

        {/* 🌙 Theme Toggle */}
        {/* <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 dark:text-[#7A849E] hover:text-blue dark:hover:text-white transition-all duration-300"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-500 dark:text-[#7A849E] hover:text-blue dark:hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[68px] left-0 right-0 bg-white dark:bg-[#0B0E1A] border-b border-gray-200 dark:border-white/10 p-6 flex flex-col gap-2 md:hidden animate-in slide-in-from-top duration-300 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-500 dark:text-[#7A849E] font-bold text-[13px] uppercase tracking-wider py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}






// "use client"

// import { useState, useEffect } from "react"
// import { Moon, Sun, Menu, X, Layers } from "lucide-react"
// import { useTheme } from "next-themes"
// import { cn } from "@/lib/utils"

// const navLinks = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Qualification", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Services", href: "#tech" },
//   { name: "Contact", href: "#contact" },
// ]

// export default function Navbar() {
//   const [mounted, setMounted] = useState(false)
//   const { theme, setTheme } = useTheme()
//   const [activeSection, setActiveSection] = useState("home")
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   useEffect(() => {
//     setMounted(true)

//     const handleScroll = () => {
//       const sections = document.querySelectorAll("section[id]")
//       let current = "home"

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop
//         if (window.scrollY >= sectionTop - 150) {
//           current = section.getAttribute("id")
//         }
//       })

//       setActiveSection(current)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // 🔥 IMPORTANT: prevent hydration bug
//   if (!mounted) return null

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0B0E1A]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 h-[68px] px-6 md:px-8 flex items-center justify-between transition-colors duration-300">

//       {/* Logo */}
//       <div className="w-[38px] h-[38px] rounded-xl bg-gradient-to-br from-blue to-[#7B68FF] flex items-center justify-center text-white shadow-lg shadow-blue/20">
//         <Layers size={20} strokeWidth={2.5} />
//       </div> 

//       {/* Desktop Nav */}
//       <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-gray-100 dark:bg-[#161929] border border-gray-200 dark:border-white/10 rounded-full p-1.5 gap-1 shadow-xl">
//         {navLinks.map((link) => (
//           <a
//             key={link.name}
//             href={link.href}
//             className={cn(
//               "px-5 py-2 rounded-full text-[12px] font-bold uppercase tracking-wider transition-all duration-300",
//               activeSection === link.href.substring(1)
//                 ? "bg-blue text-white shadow-[0_0_20px_rgba(59,91,252,0.4)]"
//                 : "text-gray-500 dark:text-[#7A849E] hover:text-blue dark:hover:text-[#C5CFFF]"
//             )}
//           >
//             {link.name}
//           </a>
//         ))}
//       </div>

//       {/* Right Side */}
//       <div className="flex items-center gap-3">

//         {/* 🌙 Theme Toggle (FIXED) */}
//          <button
//           onClick={() =>
//             setTheme(theme === "" ? "light" : "dark")
//           }
//           className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 dark:text-[#7A849E] hover:text-blue dark:hover:text-white transition-all duration-300"
//         >
//           {theme === "dark" ? (
//             <Sun size={20} />
//           ) : (
//             <Moon size={20} />
//           )}
//         </button> 

        
        

//         {/* Mobile Menu */}
//         <button
//           className="md:hidden text-gray-500 dark:text-[#7A849E] hover:text-blue dark:hover:text-white"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="absolute top-[68px] left-0 right-0 bg-white dark:bg-[#0B0E1A] border-b border-gray-200 dark:border-white/10 p-6 flex flex-col gap-2 md:hidden animate-in slide-in-from-top duration-300">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               onClick={() => setMobileMenuOpen(false)}
//               className="text-gray-500 dark:text-[#7A849E] font-bold text-[13px] uppercase tracking-wider py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>
//       )}
//     </nav>
//   )
// }
