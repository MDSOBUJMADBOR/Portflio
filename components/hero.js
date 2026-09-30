
import HeroImage from "@/components/HeroImage";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080B18] px-6 py-24 text-white ">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-full  items-center gap-16 lg:grid-cols-2 mt-20 lg:ml-20">
        {/* Left Content */}
        <div className="order-2 space-y-6 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            Hello, I'm
          </span>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
            Sobuj Madbor
            <span className="mt-2 block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              MERN Stack Developer
            </span>
          </h1>

          <p className="max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            I build modern, responsive and scalable web applications
            using React, Next.js, Node.js, Express.js and MongoDB.
          </p>

          <div className="flex flex-wrap gap-4 pt-3">
            <a
              href="#projects"
              className="rounded-xl bg-purple-600 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/25"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-500/10"
            >
              Contact Me
            </a>
          </div>

          <div className="flex flex-wrap gap-3 pt-5 text-sm text-gray-400">
            <span>React.js</span>
            <span className="text-purple-500">✦</span>
            <span>Next.js</span>
            <span className="text-purple-500">✦</span>
            <span>Node.js</span>
            <span className="text-purple-500">✦</span>
            <span>MongoDB</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 flex justify-center lg:order-2">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

