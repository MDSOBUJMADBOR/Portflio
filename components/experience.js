"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Development Student",
    company: "Programming Hero",
    period: "2026 — Present",
  },
  {
    role: "Frontend Practice Developer",
    company: "Personal Learning Projects",
    period: "2024 — 2025",
  },
  {
    role: "Beginner Web Learner",
    company: "Self Learning (HTML & CSS)",
    period: "2023 — 2024",
  },
];

const ExperiencePage = () => {
  return (
    <div className="max-w-5xl mx-auto px-5 md:px-0 py-10">

      {/* Title */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-[4px] h-7 bg-indigo-600 rounded-full" />
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Experience
        </h2>
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="hidden md:block rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden bg-white dark:bg-dark-2"
      >
        <table className="w-full border-collapse">
          {/* Header */}
          <thead className="bg-gray-100/80 dark:bg-white/5">
            <tr className="text-xs uppercase tracking-wider text-indigo-600">
              <th className="text-left px-6 py-4 font-semibold">
                Role
              </th>
              <th className="text-left px-6 py-4 font-semibold">
                Company
              </th>
              <th className="text-right px-6 py-4 font-semibold">
                Period
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {experiences.map((exp, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 dark:border-white/10 hover:bg-gray-50/80 dark:hover:bg-white/5 transition"
              >
                <td className="px-6 py-5 text-sm font-medium text-gray-800 dark:text-white">
                  {exp.role}
                </td>

                <td className="px-6 py-5 text-sm text-gray-600 dark:text-gray-400">
                  {exp.company}
                </td>

                <td className="px-6 py-5 text-sm text-right text-gray-500 dark:text-gray-500">
                  {exp.period}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="md:hidden space-y-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-2 shadow-sm"
          >
            <h3 className="font-semibold text-gray-800 dark:text-white">
              {exp.role}
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {exp.company}
            </p>

            <div className="mt-3 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              {exp.period}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default ExperiencePage;