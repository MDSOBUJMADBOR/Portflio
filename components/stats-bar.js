// "use client"

// import { motion } from "framer-motion"
// import { Smile, Cloud, Users, Trophy } from "lucide-react"

// const stats = [
//   { icon: Smile, num: "1+", label: "Years Experience", delay: 0 },
//   { icon: Cloud, num: "15+", label: "Projects Completed", delay: 0.1 },
//   { icon: Users, num: "10+", label: "Happy Clients", delay: 0.2 },
//   { icon: Trophy, num: "2+", label: "Certifications", delay: 0.3 },
// ]

// export default function StatsBar() {
//   return (
//     <div className="bg-white dark:bg-dark-2 py-10 px-[5%] grid grid-cols-2 md:grid-cols-4 gap-8 shadow-sm">
//       {stats.map((stat, idx) => (
//         <motion.div
//           key={idx}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: stat.delay }}
//           className="flex items-center gap-4"
//         >
//           <div className="w-12 h-12 rounded-xl bg-blue/5 dark:bg-blue/10 flex items-center justify-center text-blue">
//             <stat.icon size={24} />
//           </div>
//           <div>
//             <div className="font-syne text-2xl font-extrabold text-dark dark:text-white leading-tight">
//               {stat.num}
//             </div>
//             <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//               {stat.label}
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   )
// }



// "use client"

// import { motion } from "framer-motion"
// import { useEffect, useState } from "react"
// import { Smile, Cloud, Users, Trophy } from "lucide-react"

// const stats = [
//   { icon: Smile, num: 1, suffix: "+", label: "Years Experience", delay: 0 },
//   { icon: Cloud, num: 15, suffix: "+", label: "Projects Completed", delay: 0.1 },
//   { icon: Users, num: 10, suffix: "+", label: "Happy Clients", delay: 0.2 },
//   { icon: Trophy, num: 2, suffix: "+", label: "Certifications", delay: 0.3 },
// ]

// // 🔥 Counter function (simple & reliable)
// function Counter({ target, suffix }) {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     let start = 0
//     const duration = 2000 // 2 seconds
//     const increment = target / (duration / 16)

//     const timer = setInterval(() => {
//       start += increment
//       if (start >= target) {
//         setCount(target)
//         clearInterval(timer)
//       } else {
//         setCount(Math.floor(start))
//       }
//     }, 16)

//     return () => clearInterval(timer)
//   }, [target])

//   return (
//     <span>
//       {count}
//       {suffix}
//     </span>
//   )
// }

// export default function StatsBar() {
//   return (
//     <div className="bg-white dark:bg-dark-2 py-10 px-[5%] grid grid-cols-2 md:grid-cols-4 gap-8 shadow-sm">
//       {stats.map((stat, idx) => (
//         <motion.div
//           key={idx}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: stat.delay }}
//           className="flex items-center gap-4"
//         >
//           <div className="w-12 h-12 rounded-xl bg-blue/5 dark:bg-blue/10 flex items-center justify-center text-blue">
//             <stat.icon size={24} />
//           </div>

//           <div>
//             <div className="font-syne text-4xl font-extrabold text-dark dark:text-white leading-tight">
//               <Counter target={stat.num} suffix={stat.suffix} />
//             </div>

//             <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//               {stat.label}
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   )
// }



"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { Smile, Cloud, Users, Trophy } from "lucide-react"

const stats = [
  { icon: Smile, num: 1, suffix: "+", label: "Years Experience", delay: 0 },
  { icon: Cloud, num: 30, suffix: "+", label: "Projects Completed", delay: 0.1 },
  { icon: Users, num: 10, suffix: "+", label: "Happy Clients", delay: 0.2 },
  { icon: Trophy, num: 3, suffix: "+", label: "Certifications", delay: 0.3 },
]

// 🔥 Counter (only starts when visible)
function Counter({ target, suffix, start }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return // 👈 scroll না হলে start হবে না

    let current = 0
    const duration = 2000
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      current += increment

      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [start, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true }) // 👈 একবারই trigger হবে

  return (
    <div
      ref={ref}
      className="bg-white dark:bg-dark-2 py-10 px-[5%] grid grid-cols-2 md:grid-cols-4 gap-8 shadow-sm"
    >
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: stat.delay }}
          className="flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-blue/5 dark:bg-blue/10 flex items-center justify-center text-blue">
            <stat.icon size={24} />
          </div>

          <div>
            <div className="font-syne text-4xl font-extrabold text-dark dark:text-white leading-tight">
              <Counter
                target={stat.num}
                suffix={stat.suffix}
                start={isInView} // 👈 এখানে control দিচ্ছি
              />
            </div>

            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}