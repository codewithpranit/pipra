"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./AnimateIn";

export default function ThesisSection() {
  return (
    <section
      id="thesis"
      aria-label="Core Thesis and Field Inquiry"
      className="section-spacing bg-white"
    >
      <div className="container-pipra">
        {/* Eyebrow */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="text-eyebrow">01 // The Thesis</span>
          </div>
        </FadeIn>

        {/* Primary Statement */}
        <FadeIn delay={0.1}>
          <div className="max-w-5xl mb-16 sm:mb-20">
            <h2 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] text-[var(--foreground)] leading-[1.06]">
              India does not lack recipes.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-blue-400">
                India lacks the infrastructure
              </span>
              <br />
              that allows recipes to travel.
            </h2>
          </div>
        </FadeIn>

        {/* Supporting columns */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 sm:mb-20">
            <div className="lg:col-span-7">
              <p className="text-body text-lg sm:text-xl leading-relaxed">
                India possesses an extraordinary inheritance of culinary knowledge,
                yet much of it remains confined to its region of origin. Pipra builds
                the systems that allow these traditions to become globally accessible,
                trusted, and economically valuable.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[var(--surface-alt)] to-[var(--surface)] border border-[var(--border)] border-l-4 border-l-[var(--accent)]">
                <span className="text-eyebrow text-xs block mb-3">
                  Guiding Ethos
                </span>
                <blockquote className="font-serif italic text-xl sm:text-2xl text-[var(--foreground)] leading-snug">
                  &ldquo;We want to scale infrastructure, not sameness.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* AMUL Comparison Block */}
        <FadeIn delay={0.3}>
          <div className="bg-gradient-to-br from-[var(--foreground)] to-[#1A3A6B] text-white rounded-2xl p-8 sm:p-12 lg:p-14 max-w-5xl shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/15">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                  PIPRA FISH // THE FIRST EXPERIMENT
                </span>
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-300 bg-white/10 px-3 py-1 rounded-full">
                Nutritional Security
              </span>
            </div>

            <blockquote className="font-serif text-2xl sm:text-3xl md:text-[2.1rem] text-white leading-[1.3] font-normal">
              &ldquo;An effort to do for India&rsquo;s fish sector what AMUL did for milk—strengthening
              nutritional security by making affordable, high-quality fish accessible at scale.&rdquo;
            </blockquote>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <p className="text-blue-200 text-sm sm:text-base max-w-xl leading-relaxed">
                Fish is Pipra&rsquo;s first vehicle for exploring how traditional food
                knowledge can travel.
              </p>
              <span
                className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-blue-300 bg-white/10 border border-white/20 rounded-lg"
                aria-label="Survey destination pending official confirmation"
              >
                [ Survey Link Pending ]
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
