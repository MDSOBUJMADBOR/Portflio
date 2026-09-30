
"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkles, Code2 } from "lucide-react";

const HeroImage = () => {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      {/* Background Glow */}
      <div className="absolute -inset-5 rounded-[2rem] bg-purple-600/20 blur-3xl" />

      {/* Decorative Circles */}
      <div className="absolute -right-5 -top-5 z-20 h-24 w-24 rounded-full border border-purple-400/30 bg-purple-500/10 blur-[1px]" />
      <div className="absolute -bottom-5 -left-5 z-20 h-20 w-20 rounded-full border border-cyan-400/30 bg-cyan-500/10" />

      {/* Main Image Card */}
      <div className="group relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-500 via-purple-400/30 to-cyan-400 p-[2px] shadow-[0_20px_80px_rgba(139,92,246,0.2)]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.9rem] bg-[#111827]">
          {/* Profile Image */}
          <Image
            src="/sobuj.jpeg"
            alt="Sobuj Madbor - MERN Stack Developer"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 420px"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B18] via-transparent to-transparent opacity-90" />

          {/* Top Badge */}
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
            Available for Work
          </div>

          {/* Floating Icon */}
          <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white backdrop-blur-xl transition-transform duration-300 group-hover:rotate-12">
            <Sparkles size={20} />
          </div>

          {/* Bottom Content */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-purple-300">
              <Code2 size={17} />
              <span>Full Stack Developer</span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sobuj Madbor
            </h2>

            <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-300">
              Building modern, scalable and user-friendly web applications.
            </p>

            {/* Bottom Divider */}
            <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">
              <span className="text-xs font-medium tracking-widest text-gray-400">
                DESIGN · DEVELOP · DEPLOY
              </span>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-purple-500">
                <ArrowUpRight size={21} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Experience Card */}
      <div className="absolute -bottom-7 -right-3 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#151525]/90 p-4 shadow-2xl backdrop-blur-xl sm:-right-8">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
          <Code2 size={23} />
        </div>
        <div>
          <p className="text-lg font-bold text-white">MERN Stack</p>
          <p className="text-xs text-gray-400">Developer</p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;

