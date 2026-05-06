"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Development Student",
    company: "Programming Hero",
    period: "2025 — Present",
  },
  {
    role: "Frontend Practice Developer",
    company: "Personal Learning Projects",
    period: "2023 — 2025",
  },
  {
    role: "Beginner Web Learner",
    company: "Self Learning (HTML & CSS)",
    period: "2022 — 2023",
  },
];

const ExperiencePage = () => {
  return (
    <div className="max-w-5xl mx-auto px-5 md:px-0">

      {/* Title */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-8 bg-indigo-600 rounded-full" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Experience
        </h2>
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="hidden md:block rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10"
      >
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-dark-3">
            <tr>
              <th className="text-left px-6 py-4 text-xs font-bold uppercase text-indigo-600">
                Role
              </th>
              <th className="text-left px-6 py-4 text-xs font-bold uppercase text-indigo-600">
                Company
              </th>
              <th className="text-right px-6 py-4 text-xs font-bold uppercase text-indigo-600">
                Period
              </th>
            </tr>
          </thead>

          <tbody>
            {experiences.map((exp, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition"
              >
                <td className="px-6 py-5 font-semibold text-gray-900 dark:text-white text-sm">
                  {exp.role}
                </td>
                <td className="px-6 py-5 text-gray-500 dark:text-gray-400 text-sm">
                  {exp.company}
                </td>
                <td className="px-6 py-5 text-right text-gray-400 dark:text-gray-500 text-sm">
                  {exp.period}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="md:hidden space-y-4 ">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-2"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
              {exp.role}
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              {exp.company}
            </p>

            <div className="mt-3 text-xs font-medium text-indigo-600 dark:text-indigo-400">
              {exp.period}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default ExperiencePage;