"use client";

import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimateIn";

const INQUIRY_DIMENSIONS = [
  { id: "01", name: "Sourcing" },
  { id: "02", name: "Freshness" },
  { id: "03", name: "Hygiene" },
  { id: "04", name: "Deboning" },
  { id: "05", name: "Portioning" },
  { id: "06", name: "Cooking" },
  { id: "07", name: "Presentation" },
  { id: "08", name: "Nutrition" },
  { id: "09", name: "Recipe" },
  { id: "10", name: "Producer Value" },
];

export default function FishSection() {
  return (
    <section
      id="fish"
      aria-label="Pipra Fish - The First Vehicle"
      className="relative bg-dark-section text-white section-spacing overflow-hidden"
    >
      {/* Subtle decorative glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(59,130,246,0.12),transparent_80%)]" />

      <div className="container-pipra relative z-10">
        {/* Eyebrow */}
        <FadeIn>
          <div className="flex items-center justify-between pb-6 mb-12 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C88E3A]" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#C88E3A] font-medium">
                03 // The First Vehicle
              </span>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8FA3A2] hidden sm:inline">
              Pipra Fish
            </span>
          </div>
        </FadeIn>

        {/* Main heading */}
        <FadeIn delay={0.1}>
          <div className="max-w-4xl mb-14 sm:mb-16">
            <h2 className="text-display text-4xl sm:text-5xl md:text-6xl text-white leading-[1.08]">
              Fish is our first vehicle.
              <br />
              <span className="text-[#C88E3A]">
                Welcome to Pipra Fish.
              </span>
            </h2>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="font-serif italic text-xl sm:text-2xl text-blue-100/80 leading-snug mb-4">
                Fish is not the final destination—it is a bounded learning system.
              </p>
              <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-3xl font-light">
                We begin here to explore how traditional food knowledge can become
                globally accessible, trusted, and economically valuable.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch mb-16 sm:mb-20">
          {/* Cards column */}
          <FadeIn direction="right" delay={0.15} className="lg:col-span-5 flex flex-col justify-between order-2 lg:order-1 gap-6">
            {/* Bachwa Card */}
            <div className="glass-card p-7 sm:p-9">
              <div className="flex items-center justify-between font-mono text-[11px] tracking-widest text-blue-300 uppercase pb-4 border-b border-white/10 mb-5">
                <span>The Hero Fish</span>
                <span className="text-white/40">Gangetic Landscape</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-bold tracking-tight mb-4">
                Bachwa
              </h3>
              <p className="text-white/65 text-sm sm:text-base leading-relaxed font-light">
                A freshwater fish of the Gangetic culinary landscape and a
                traditional mustard-based preparation—the first hero of Pipra Fish.
              </p>
            </div>

            {/* Inquiry card */}
            <div className="glass-card p-7 sm:p-9">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 block mb-3">
                Culinary Translation
              </span>
              <blockquote className="font-serif italic text-lg sm:text-xl text-white leading-snug mb-4">
                &ldquo;How can a traditional preparation remain itself while becoming
                understandable and inviting to someone encountering it for the first time?&rdquo;
              </blockquote>
              <p className="text-white/50 text-sm leading-relaxed border-t border-white/10 pt-4 font-light">
                Exploring how recipes can travel without losing the people, techniques,
                and knowledge that define them.
              </p>
            </div>
          </FadeIn>

          {/* Hero image */}
          <FadeIn direction="left" delay={0.2} className="lg:col-span-7 order-1 lg:order-2">
            <figure
              className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:h-full min-h-[380px] sm:min-h-[480px] overflow-hidden rounded-2xl border border-white/15 bg-[#0E1211] shadow-2xl"
              aria-label="Documentary record of traditional mustard-oil preparation"
            >
              <Image
                src="/images/pipra-mustard-fish-preparation.jpg"
                alt="Traditional freshwater fish cooking in mustard oil"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
              />
              <div className="absolute top-0 inset-x-0 p-5 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between text-[11px] font-semibold tracking-widest text-white uppercase">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Field Archive // Technique
                </span>
                <span className="text-blue-300">Mustard Gravy</span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-white/80 mb-1">
                  <span>Traditional Mustard-Oil Kadai Preparation</span>
                  <span className="text-blue-200">CC BY-SA 4.0</span>
                </div>
                <p className="font-serif italic text-xs text-white/70 mt-1">
                  Documentary record of traditional mustard-oil preparation.
                </p>
              </div>
            </figure>
          </FadeIn>
        </div>

        {/* Ten Inquiry Dimensions */}
        <FadeIn delay={0.25}>
          <div className="pt-10 border-t border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 block mb-2">
                  A Bounded System
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold">
                  Ten Inquiry Dimensions
                </h3>
              </div>
              <p className="text-xs font-mono text-white/40 tracking-wider max-w-md">
                Questions the first vehicle allows Pipra to explore across the complete system:
              </p>
            </div>

            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
              {INQUIRY_DIMENSIONS.map((dim) => (
                <StaggerItem key={dim.name}>
                  <div className="group glass-card p-4 sm:p-5 hover:bg-blue-500/20 hover:border-blue-400/40 transition-smooth flex flex-col justify-between min-h-[90px] cursor-default">
                    <span className="font-mono text-[11px] text-blue-400 tracking-wider">
                      {dim.id}
                    </span>
                    <span className="font-semibold text-sm sm:text-base text-white tracking-wide mt-2">
                      {dim.name}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
