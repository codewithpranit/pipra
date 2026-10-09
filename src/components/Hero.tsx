"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Master Brand Introduction"
      className="relative w-full min-h-[calc(100vh-5rem)] bg-[#0D1117] text-white overflow-hidden"
    >
      {/* Background Photographic Canvas — boat clearly visible */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/pipra-ganges-boats-sunrise.jpg"
          alt="Traditional wooden riverboats at sunrise on the Ganges River, Varanasi"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] lg:object-[65%_center] opacity-55 select-none"
        />
        {/* Left-to-right gradient — legible text on left, boat visible on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117]/97 via-[#0D1117]/80 sm:via-[#0D1117]/70 to-[#0D1117]/30 lg:to-transparent" />
        {/* Bottom anchor gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117]/80 via-transparent to-[#0D1117]/30" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 container-pipra flex flex-col justify-center min-h-[calc(100vh-5rem)] py-16 sm:py-20 lg:py-28">

        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15">
            <span className="w-2 h-2 rounded-full bg-[#1E5FC2] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              Rooted in India · Built for the World
            </span>
          </div>
        </motion.div>

        {/* Main headline — large, bold, matching Vercel site scale */}
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] text-white font-bold leading-[1.04] tracking-tight"
          >
            Building better food systems for a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#93C5FD]">
              better-nourished India.
            </span>
          </motion.h1>

          {/* Sub-statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 sm:mt-10 max-w-2xl"
          >
            <p className="text-base sm:text-lg text-white/65 leading-relaxed font-light">
              India has rich traditional recipes, but lacks the infrastructure that
              allows them to travel globally while remaining trusted, desirable, and
              economically valuable.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 sm:mt-12 flex flex-wrap items-center gap-4"
          >
            <a href="#thesis" className="btn-primary text-sm px-8 py-3.5">
              Explore Pipra →
            </a>
            <a
              href="#origin"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-white/25 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/50 transition-smooth"
            >
              Our Story
            </a>
          </motion.div>
        </div>

        {/* Photo attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-10 flex items-center justify-between text-[11px] text-white/30 font-mono tracking-wide"
        >
          <span>Documentary Record: Traditional riverboats at sunrise on the Ganges, Varanasi</span>
          <span className="hidden sm:inline">Photo: Schwiki / CC BY-SA 4.0</span>
        </motion.div>
      </div>
    </section>
  );
}
