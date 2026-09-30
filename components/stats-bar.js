
"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Smile,
  Cloud,
  Users,
  Trophy,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    icon: Smile,
    num: 1,
    suffix: "+",
    label: "Years Experience",
    description: "Continuous learning",
    color: "from-violet-500 to-purple-400",
    glow: "group-hover:shadow-purple-500/20",
  },
  {
    icon: Cloud,
    num: 45,
    suffix: "+",
    label: "Projects Completed",
    description: "Real-world solutions",
    color: "from-cyan-400 to-blue-500",
    glow: "group-hover:shadow-cyan-500/20",
  },
  {
    icon: Users,
    num: 10,
    suffix: "+",
    label: "Happy Clients",
    description: "Building relationships",
    color: "from-emerald-400 to-teal-500",
    glow: "group-hover:shadow-emerald-500/20",
  },
  {
    icon: Trophy,
    num: 3,
    suffix: "+",
    label: "Certifications",
    description: "Skills & achievements",
    color: "from-amber-400 to-orange-500",
    glow: "group-hover:shadow-amber-500/20",
  },
];

// Animated Counter
function Counter({ target, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const duration = 2000;
    let animationFrame;
    let startTime = null;

    const animate = (timestamp) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Smooth ease-out animation
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(eased * target);

      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [start, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// Stats Bar Component
export default function StatsBar() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-[#080B18] px-5 py-16 sm:px-8 lg:px-[7%] lg:py-20"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto max-w-full">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-14"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
            <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />
            My Achievements
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Numbers That{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Speak
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            A quick look at my journey, projects, experience
            and achievements as a developer.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 md:gap-5">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.96,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  delay: idx * 0.12,
                  ease: "easeOut",
                }}
                className={`group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/15 hover:bg-white/[0.06] hover:shadow-2xl sm:p-7 ${stat.glow}`}
              >
                {/* Top Gradient Line */}
                <div
                  className={`absolute left-5 right-5 top-0 h-[2px] rounded-full bg-gradient-to-r ${stat.color} opacity-50 transition-opacity duration-300 group-hover:opacity-100 sm:left-7 sm:right-7`}
                />

                {/* Icon */}
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 sm:h-14 sm:w-14`}
                >
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                {/* Counter */}
                <div className="flex items-center justify-center gap-1">
                  <h3 className="font-syne text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                    <Counter
                      target={stat.num}
                      suffix={stat.suffix}
                      start={isInView}
                    />
                  </h3>

                  <ArrowUpRight
                    size={18}
                    className="mb-2 text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-400"
                  />
                </div>

                {/* Label */}
                <p className="mt-2 text-center text-xs font-bold uppercase tracking-wider text-gray-300 sm:text-sm">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="mt-2 text-center text-[11px] leading-5 text-gray-500 sm:text-xs">
                  {stat.description}
                </p>

                {/* Bottom Glow */}
                <div
                  className={`pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-gradient-to-br ${stat.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0.7,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  scaleX: 1,
                }
              : {}
          }
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="mx-auto mt-10 h-px max-w-2xl bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
        />
      </div>
    </section>
  );
}

