"use client";

import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimateIn";

const CORE_PATHWAYS = [
  { step: "01", from: "Fisher", to: "Chef", context: "Harvest to Kitchen" },
  { step: "02", from: "Farmer", to: "Recipe", context: "Soil to Knowledge" },
  { step: "03", from: "Recipe", to: "Entrepreneur", context: "Knowledge to Enterprise" },
  { step: "04", from: "Entrepreneur", to: "Customer", context: "Enterprise to Market" },
];

export default function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      aria-label="The Pipra Ecosystem"
      className="section-spacing bg-white"
    >
      <div className="container-pipra">
        {/* Eyebrow */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)] font-medium">04 // The Ecosystem</span>
          </div>
        </FadeIn>

        {/* Main heading */}
        <FadeIn delay={0.1}>
          <div className="max-w-5xl mb-12 sm:mb-16">
            <h2 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-[var(--foreground)] leading-[1.08]">
              From local knowledge to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-blue-400">
                a wider table.
              </span>
            </h2>

            <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-7">
                <p className="text-body text-lg sm:text-xl leading-relaxed">
                  The relationships that allow regional food traditions to move from
                  producers and cooks to entrepreneurs, customers, and the wider world.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="p-7 sm:p-8 rounded-2xl bg-[var(--surface-alt)] border border-[var(--border)] border-l-4 border-l-[var(--accent)]">
                  <span className="text-eyebrow text-xs block mb-2">Governing Principle</span>
                  <p className="font-serif italic text-lg sm:text-xl text-[var(--foreground)] leading-snug">
                    &ldquo;We want to scale infrastructure, not sameness.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* River documentary image */}
        <FadeIn delay={0.15}>
          <div className="mb-14 sm:mb-18">
            <figure
              className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9] min-h-[280px] overflow-hidden rounded-2xl border border-[var(--border)] shadow-md"
              aria-label="Documentary record of fishermen on the Gomti River"
            >
              <Image
                src="/images/pipra-river-fishermen-gomti.jpg"
                alt="Fishermen in a traditional wooden boat casting nets on the Gomti River"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-[center_45%]"
              />
              <div className="absolute top-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-b from-[#0D1117]/80 to-transparent flex items-center justify-between text-[11px] sm:text-xs font-semibold tracking-widest text-white uppercase">
                <span>Field Archive // The Living Riverine Commons</span>
                <span className="text-blue-300">River Harvest</span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-[#0D1117]/80 to-transparent flex items-end justify-between font-mono text-[10px] sm:text-[11px] text-white/70 uppercase tracking-widest">
                <span>Traditional Net Casting on the Gomti, Ganges Basin</span>
                <span>Photo: Alokksrs / CC BY-SA 4.0</span>
              </div>
            </figure>
          </div>
        </FadeIn>

        {/* Pathway label row */}
        <FadeIn delay={0.2}>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[var(--border)]">
            <span className="text-eyebrow text-xs">
              Ecosystem Pathways of Traditional Knowledge & Infrastructure
            </span>
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)]">
              <span>01</span><span>→</span>
              <span>02</span><span>→</span>
              <span>03</span><span>→</span>
              <span>04</span><span>→</span>
              <span className="font-medium">05 CULMINATION</span>
            </div>
          </div>
        </FadeIn>

        {/* Pathway cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {CORE_PATHWAYS.map((pathway) => (
            <StaggerItem key={pathway.step}>
              <div className="group card-blue bg-white p-6 sm:p-8 h-full flex flex-col cursor-default">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--border)]">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                    Pathway {pathway.step}
                  </span>
                  <span className="font-mono text-[var(--muted-light)] text-sm" aria-hidden="true">→</span>
                </div>

                <div className="my-auto py-2">
                  <div className="font-serif text-2xl lg:text-[1.65rem] text-[var(--foreground)] leading-tight">
                    <span className="block font-semibold">{pathway.from}</span>
                    <span className="text-[var(--accent)] font-mono text-lg inline-block my-2" aria-hidden="true">↓</span>
                    <span className="block font-semibold text-[var(--accent)]">{pathway.to}</span>
                  </div>
                </div>

                <div className="pt-4 mt-auto border-t border-[var(--border)] text-[11px] uppercase tracking-wider text-[var(--muted)] font-semibold">
                  {pathway.context}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Culmination block */}
        <FadeIn delay={0.3}>
          <div className="p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-[var(--foreground)] to-[#1A3A6B] text-white rounded-2xl shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 mb-8 border-b border-white/15">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                  Pathway 05 // Culmination
                </span>
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-white/60 bg-white/10 px-3 py-1.5 rounded-full self-start md:self-auto">
                Final Horizon // Global Table
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-6">
              <div className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-tight font-bold">
                <span>Local Tradition </span>
                <span className="font-mono text-blue-300 text-2xl mx-2" aria-hidden="true">→</span>
                <span className="text-blue-200">World</span>
              </div>
              <p className="text-white/55 text-sm sm:text-base max-w-md leading-relaxed font-light">
                Allowing regional tradition to reach the world without losing the knowledge that gives it meaning.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
