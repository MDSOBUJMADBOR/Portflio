"use client"

import { motion } from "framer-motion"

const progressSkills = [
  { name: "React", pct: 88 },
  { name: "Next.js", pct: 80 },
  { name: "JavaScript", pct: 90 },
  { name: "TypeScript", pct: 65 },
  { name: "Node.js", pct: 85 },
  { name: "Express.js", pct: 81 },
  { name: "MongoDB", pct: 78 },
]

const circularSkills = [
  { name: "Problem Solving", pct: 90 },
  { name: "UI/UX Design", pct: 85 },
  { name: "Performance", pct: 88 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-[5%] bg-[#0B0F19] text-white transition-colors duration-300">
      <div className="max-w-full mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Progress & Circular Skills */}
        <div>
          <div className="text-blue-500 font-bold text-xs uppercase tracking-[3px] mb-3">
            Professional Skills
          </div>
          <h2 className="font-syne text-3xl md:text-4xl font-extrabold mb-3 text-white">
            My Proficiency
          </h2>
          <p className="text-gray-400 mb-10 text-sm">
            I constantly work on improving my technical skills to stay ahead.
          </p>

          {/* Linear Progress Bars */}
          <div className="space-y-6">
            {progressSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-sm tracking-wide text-gray-200">{skill.name}</span>
                  <span className="text-blue-400 font-bold text-sm">{skill.pct}%</span>
                </div>
                <div className="h-2.5 w-full bg-[#161B2E] rounded-full overflow-hidden border border-gray-800/50">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Circular Skills */}
          <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
            {circularSkills.map((skill) => {
              const radius = 36
              const circumference = 2 * Math.PI * radius
              const offset = circumference - (skill.pct / 100) * circumference

              return (
                <div key={skill.name} className="flex flex-col items-center gap-3">
                  <div className="relative w-24 h-24">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 90 90">
                      <circle
                        cx="45"
                        cy="45"
                        r={radius}
                        className="fill-none stroke-gray-800 stroke-[7]"
                      />
                      <motion.circle
                        cx="45"
                        cy="45"
                        r={radius}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset: offset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        strokeDasharray={circumference}
                        className="fill-none stroke-blue-500 stroke-[7] stroke-linecap-round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-syne font-extrabold text-base text-white">
                      {skill.pct}%
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    {skill.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Academic / Education */}
        <div>
          <div className="text-blue-500 font-bold text-xs uppercase tracking-[3px] mb-3">
            Academic
          </div>
          <h2 className="font-syne text-3xl md:text-4xl font-extrabold mb-3 text-white">
            Education
          </h2>
          <p className="text-gray-400 mb-10 text-sm">
            My educational journey and accomplishments.
          </p>

          <div className="space-y-6">

            {/* BA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-[#151B2B] border border-gray-800/60 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full blur-2xl group-hover:bg-blue-500/20 transition-all" />

              <div className="flex justify-between items-start mb-4 gap-4">
                <div>
                  <div className="text-blue-400 font-bold text-xs mb-1">2024 – Present</div>
                  <h3 className="font-syne text-xl font-bold text-white mb-1">
                    BA in Political Science
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Madaripur Govt. College
                  </p>
                </div>

                <div className="px-3 py-1.5 bg-amber-500/10 rounded-xl border border-amber-500/20 text-xs font-semibold text-amber-400 whitespace-nowrap">
                  Honours running
                </div>
              </div>
            </motion.div>

            {/* HSC */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#151B2B] border border-gray-800/60 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full blur-2xl group-hover:bg-blue-500/20 transition-all" />

              <div className="flex justify-between items-start mb-4 gap-4">
                <div>
                  <div className="text-blue-400 font-bold text-xs mb-1">2022 – 2024</div>
                  <h3 className="font-syne text-xl font-bold text-white mb-1">
                    HSC – Humanities
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Madaripur Govt. College
                  </p>
                </div>

                <div className="px-4 py-2 bg-blue-500/10 rounded-xl border border-blue-500/20 text-center">
                  <div className="text-[10px] font-bold text-gray-400 uppercase">GPA</div>
                  <div className="text-blue-400 font-extrabold text-lg">4.17</div>
                </div>
              </div>
            </motion.div>

            {/* SSC */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#151B2B] border border-gray-800/60 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full blur-2xl group-hover:bg-blue-500/20 transition-all" />

              <div className="flex justify-between items-start mb-4 gap-4">
                <div>
                  <div className="text-blue-400 font-bold text-xs mb-1">2020 – 2022</div>
                  <h3 className="font-syne text-xl font-bold text-white mb-1">
                    SSC – Humanities
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Mahmudpur Modern High School
                  </p>
                </div>

                <div className="px-4 py-2 bg-blue-500/10 rounded-xl border border-blue-500/20 text-center">
                  <div className="text-[10px] font-bold text-gray-400 uppercase">GPA</div>
                  <div className="text-blue-400 font-extrabold text-lg">4.72</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}