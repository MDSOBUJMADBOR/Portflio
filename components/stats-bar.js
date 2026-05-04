"use client"

import { motion } from "framer-motion"
import { Smile, Cloud, Users, Trophy } from "lucide-react"

const stats = [
  { icon: Smile, num: "1+", label: "Years Experience", delay: 0 },
  { icon: Cloud, num: "15+", label: "Projects Completed", delay: 0.1 },
  { icon: Users, num: "10+", label: "Happy Clients", delay: 0.2 },
  { icon: Trophy, num: "2+", label: "Certifications", delay: 0.3 },
]

export default function StatsBar() {
  return (
    <div className="bg-white dark:bg-dark-2 py-10 px-[5%] grid grid-cols-2 md:grid-cols-4 gap-8 shadow-sm">
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
            <div className="font-syne text-2xl font-extrabold text-dark dark:text-white leading-tight">
              {stat.num}
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
