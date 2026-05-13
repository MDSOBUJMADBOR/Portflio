"use client"

import { motion } from "framer-motion"

const progressSkills = [
  { name: "HTML & CSS", pct: 95 },
  { name: "JavaScript", pct: 90 },
  { name: "React", pct: 88 },
  { name: "Next.js", pct: 80},
  { name: "Node.js", pct: 85 },
  { name: "Express.js", pct: 81 },
  { name: "Mongodb", pct: 78 },
]

const circularSkills = [
  { name: "Problem Solving", pct: 90 },
  { name: "UI/UX Design", pct: 85 },
  { name: "Performance", pct: 88 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-[5%] bg-white dark:bg-dark text-dark dark:text-white transition-colors duration-300">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Progress Bars */}
        <div>
          <div className="text-blue font-bold text-xs uppercase tracking-[3px] mb-4">Professional Skills</div>
          <h2 className="font-syne text-3xl md:text-4xl font-extrabold mb-4">My Proficiency</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10">I constantly work on improving my technical skills to stay ahead.</p>

          <div className="space-y-8">
            {progressSkills.map((skill, idx) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-sm tracking-wide">{skill.name}</span>
                  <span className="text-blue font-bold text-sm">{skill.pct}%</span>
                </div>
                <div className="h-2.5 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue to-blue-light rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
            {circularSkills.map((skill, idx) => {
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
                        className="fill-none stroke-gray-100 dark:stroke-white/5 stroke-[8]"
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
                        className="fill-none stroke-blue stroke-[8] stroke-linecap-round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-syne font-extrabold text-lg text-dark dark:text-white">
                      {skill.pct}%
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{skill.name}</span>
                </div>
              )
            })}
          </div>
        </div>














        {/* Education Area */}
        {/* <div>
          <div className="text-blue font-bold text-xs uppercase tracking-[3px] mb-4">Academic</div>
          <h2 className="font-syne text-3xl md:text-4xl font-extrabold mb-4">Education</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10">My educational journey and accomplishments.</p>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gray-50 dark:bg-dark-3 border border-gray-100 dark:border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue/10 rounded-bl-full blur-2xl" />
            
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
              <div>
                <div className="text-blue font-bold text-xs mb-1">2019 – 2023</div>
                <h3 className="font-syne text-xl font-bold mb-1 text-dark dark:text-white">B.Sc. in Computer Science</h3>
                <div className="text-gray-500 dark:text-gray-400 text-sm">Daffodil International University</div>
              </div>
              <div className="px-4 py-2 bg-blue/10 rounded-xl border border-blue/20 text-center shrink-0">
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">CGPA</div>
                <div className="text-blue font-extrabold text-lg leading-none mt-1">3.45 <span className="text-[10px] text-gray-500">/ 4.00</span></div>
              </div>
            </div>

            <ul className="space-y-3">
              {["Data Structures & Algorithms", "Web Development", "Database Management", "Software Engineering"].map((sub) => (
                <li key={sub} className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm">
                  <span className="text-blue font-bold">✓</span> {sub}
                </li>
              ))}
            </ul>
          </motion.div>
        </div> */}

<div>
  <div className="text-blue font-bold text-xs uppercase tracking-[3px] mb-4">Academic</div>
  <h2 className="font-syne text-3xl md:text-4xl font-extrabold mb-4">Education</h2>
  <p className="text-gray-500 dark:text-gray-400 mb-10">
    My educational journey and accomplishments.
  </p>

  <div className="space-y-6">

    {/* BA */}
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="p-8 rounded-3xl bg-gray-50 dark:bg-dark-3 border border-gray-100 dark:border-white/5 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue/10 rounded-bl-full blur-2xl" />

      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="text-blue font-bold text-xs mb-1">2024 – Present</div>
          <h3 className="font-syne text-xl font-bold text-dark dark:text-white">
            BA in Political Science
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Madaripur Govt. College
          </p>
        </div>

        <div className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800 text-xs font-semibold text-yellow-700 dark:text-yellow-400">
          Running
        </div>
      </div>
    </motion.div>

    {/* HSC */}
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="p-8 rounded-3xl bg-gray-50 dark:bg-dark-3 border border-gray-100 dark:border-white/5 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue/10 rounded-bl-full blur-2xl" />

      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="text-blue font-bold text-xs mb-1">2022 – 2024</div>
          <h3 className="font-syne text-xl font-bold text-dark dark:text-white">
            HSC – Humanities
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Madaripur Govt. College
          </p>
        </div>

        <div className="px-4 py-2 bg-blue/10 rounded-xl border border-blue/20 text-center">
          <div className="text-[10px] font-bold text-gray-500 uppercase">GPA</div>
          <div className="text-blue font-extrabold text-lg">4.17</div>
        </div>
      </div>
    </motion.div>

    {/* SSC */}
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="p-8 rounded-3xl bg-gray-50 dark:bg-dark-3 border border-gray-100 dark:border-white/5 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue/10 rounded-bl-full blur-2xl" />

      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="text-blue font-bold text-xs mb-1">2020 – 2022</div>
          <h3 className="font-syne text-xl font-bold text-dark dark:text-white">
            SSC – Humanities
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Mahmulpur Modern High School
          </p>
        </div>

        <div className="px-4 py-2 bg-blue/10 rounded-xl border border-blue/20 text-center">
          <div className="text-[10px] font-bold text-gray-500 uppercase">GPA</div>
          <div className="text-blue font-extrabold text-lg">4.72</div>
        </div>
      </div>
    </motion.div>

  </div>
</div>










      </div>
    </section>

  )
}
