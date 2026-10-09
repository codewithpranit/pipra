"use client";

import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimateIn";

const STAGES = [
  { step: "01", name: "Tradition", summary: "Ancestral inheritance and living memory." },
  { step: "02", name: "Inquiry", summary: "Deconstructing sourcing, hygiene, and technique." },
  { step: "03", name: "Experiment", summary: "Controlled culinary and operational testing." },
  { step: "04", name: "Evidence", summary: "Documented standards, nutrition, and safety." },
  { step: "05", name: "Scale", summary: "Sustainable distribution to a wider table." },
];

export default function MethodSection() {
  return (
    <section
      id="method"
      aria-label="The 5-Stage Framework"
      className="section-spacing bg-[var(--surface)]"
    >
      <div className="container-pipra">
        {/* Eyebrow */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">02 // The Method</span>
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1}>
          <div className="max-w-4xl mb-6">
            <h2 className="text-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-[var(--foreground)] leading-[1.1]">
              A deliberate pathway from ancestral inheritance to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-blue-400">
                infrastructure for scale.
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Framing */}
        <FadeIn delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14 sm:mb-18">
            <div className="lg:col-span-7">
              <p className="text-body text-base sm:text-lg leading-relaxed">
                A disciplined progression from ancestral inheritance to rigorous testing,
                verified evidence, and sustainable distribution.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-white border border-[var(--border)] border-l-4 border-l-[var(--accent)] shadow-sm">
                <span className="text-eyebrow text-xs block mb-2">Governing Axiom</span>
                <p className="font-serif italic text-lg sm:text-xl text-[var(--foreground)] leading-snug">
                  &ldquo;We want to scale infrastructure, not sameness.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 5-Stage Cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14 sm:mb-18">
          {STAGES.map((stage) => (
            <StaggerItem key={stage.step}>
              <div className="group card-blue bg-white p-6 sm:p-8 h-full flex flex-col cursor-default">
                <div className="mb-8">
                  <span className="font-mono text-4xl sm:text-5xl text-blue-100 font-light tracking-tight block group-hover:text-[var(--accent)] transition-smooth">
                    {stage.step}
                  </span>
                </div>
                <div className="mt-auto">
                  <h3 className="font-serif text-2xl text-[var(--foreground)] font-semibold mb-2 group-hover:text-[var(--accent)] transition-smooth">
                    {stage.name}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {stage.summary}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Documentary Image */}
        <FadeIn delay={0.2}>
          <figure
            className="relative w-full aspect-[21/9] sm:aspect-[24/8] lg:aspect-[32/9] max-h-[340px] overflow-hidden rounded-2xl border border-[var(--border)] shadow-md"
            aria-label="Documentary photograph of traditional spices in a market in Varanasi"
          >
            <Image
              src="/images/pipra-varanasi-spices-market.jpg"
              alt="Traditional Indian spices and ingredients in a market in Varanasi, Uttar Pradesh"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-[center_35%]"
            />
            <div className="absolute top-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-b from-[#0D1117]/80 to-transparent flex items-center justify-between text-[11px] sm:text-xs font-semibold tracking-widest text-white uppercase">
              <span>Field Archive // Ingredient Inheritance</span>
              <span className="text-blue-300">Varanasi Market</span>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-[#0D1117]/80 to-transparent flex items-end justify-between font-mono text-[10px] sm:text-[11px] text-white/70 uppercase tracking-widest">
              <span>Ancestral Ingredients Awaiting Infrastructure to Travel</span>
              <span>Photo: Jorge Royan / CC BY-SA 3.0</span>
            </div>
          </figure>
        </FadeIn>
      </div>
    </section>
  );
}
