"use client";

import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimateIn";

const COMPARATIVE_CASES = [
  {
    id: "01",
    tag: "Regional Demand",
    sub: "Recipe → Scale",
    title: "Champaran Meat",
    body: "How a regional preparation creates spontaneous demand and rural economic infrastructure.",
  },
  {
    id: "02",
    tag: "Cultural Material",
    sub: "Local → Global",
    title: "Magatte Wade & Hibiscus",
    body: "Transforming local botanical heritage into a globally valued brand.",
  },
  {
    id: "03",
    tag: "Systemic Infrastructure",
    sub: "Process → Trust",
    title: "Starbucks in Seattle",
    body: "Building global trust around an everyday commodity through consistent supply chains, quality, and experience.",
  },
];

export default function OriginSection() {
  return (
    <section
      id="origin"
      aria-label="The Origin - Memory and Infrastructure"
      className="section-spacing bg-[var(--surface)]"
    >
      <div className="container-pipra">
        {/* Eyebrow */}
        <FadeIn>
          <div className="flex items-center justify-between pb-6 mb-12 sm:mb-16 border-b border-[var(--border)]">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)] font-medium">05 // The Origin</span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] hidden sm:inline">
              Founder Narrative & Infrastructure
            </span>
          </div>
        </FadeIn>

        {/* Section title */}
        <FadeIn delay={0.1}>
          <div className="max-w-4xl mb-12 sm:mb-16">
            <h2 className="text-display text-4xl sm:text-5xl md:text-6xl text-[var(--foreground)] leading-[1.08]">
              Pipra was born between{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-blue-400">
                memory and infrastructure.
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Pull quote */}
        <FadeIn delay={0.15}>
          <div className="mb-16 sm:mb-20 bg-gradient-to-br from-[var(--foreground)] to-[#1A3A6B] text-white rounded-2xl p-8 sm:p-12 lg:p-16 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/15">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                  Founder&rsquo;s Recollection
                </span>
              </div>
              <span className="text-xs text-white/50 font-mono">Roughly 23 Years Away</span>
            </div>

            <blockquote className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-white leading-[1.18] font-light">
              &ldquo;I searched Jackson Heights. I searched Edison. I tried salmon.
              I tried tilapia. And eventually I came home.&rdquo;
            </blockquote>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
              <span className="font-bold text-white text-sm uppercase tracking-wider">
                Sanjeev Kumar
              </span>
              <span className="text-xs font-mono text-white/50">2022 // Return to India</span>
            </div>
          </div>
        </FadeIn>

        {/* Main editorial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left column: Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <span className="text-eyebrow text-xs block">The Narrative // Memory & Return</span>
                <p className="text-body text-base sm:text-lg leading-relaxed">
                  After roughly twenty-three years in the United States, founder Sanjeev Kumar returned
                  to India in 2022. One taste had proved impossible to find abroad: his mother&rsquo;s mustard fish.
                </p>

                <div className="p-6 sm:p-8 rounded-xl bg-white border border-[var(--border)] border-l-4 border-l-[var(--accent)] shadow-sm">
                  <p className="font-serif italic text-xl sm:text-2xl text-[var(--foreground)] leading-snug">
                    What is missing when a traditional Indian food cannot travel with the people who remember it?
                  </p>
                </div>

                <p className="text-body text-base sm:text-lg leading-relaxed">
                  The answer was not simply recipe preservation, but infrastructure: the systems and
                  standards that allow culinary inheritance to become trusted, desirable, and economically valuable.
                </p>
              </div>
            </FadeIn>

            {/* Mustard field image */}
            <FadeIn delay={0.25}>
              <figure
                className="relative w-full aspect-[16/9] sm:aspect-[21/10] overflow-hidden rounded-2xl border border-[var(--border)] shadow-md"
                aria-label="Documentary photograph of a blooming mustard field in rural eastern India"
              >
                <Image
                  src="/images/pipra-mustard-field-landscape.jpg"
                  alt="Blooming yellow mustard field in rural eastern India along the Gangetic plain"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center"
                />
                <div className="absolute top-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-b from-[#0A1628]/80 to-transparent flex items-center justify-between text-[11px] sm:text-xs font-semibold tracking-widest text-white uppercase">
                  <span>Field Archive // Agricultural Commons</span>
                  <span className="text-blue-300">Mustard Cultivation</span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-[#0A1628]/80 to-transparent flex items-end justify-between font-mono text-[10px] sm:text-[11px] text-white/80 uppercase tracking-widest">
                  <span>Rural Eastern India // Gangetic Basin</span>
                  <span className="text-white/60">Photo: Pinakpani / CC BY-SA 4.0</span>
                </div>
              </figure>
            </FadeIn>

            {/* Bihar question */}
            <FadeIn delay={0.3}>
              <div className="p-8 sm:p-10 bg-white rounded-2xl border border-[var(--border)] shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                  <span className="text-eyebrow text-xs">The Question of Place</span>
                </div>
                <p className="font-serif text-xl sm:text-2xl text-[var(--foreground)] leading-relaxed">
                  Bihar possesses deep cultural wealth alongside persistent economic challenges. What does the region already hold that the world would value if the right infrastructure existed?
                </p>
              </div>
            </FadeIn>

            {/* Closing axiom */}
            <FadeIn delay={0.35}>
              <div className="pt-8 border-t border-[var(--border)] space-y-6">
                <p className="font-serif italic text-2xl sm:text-3xl text-[var(--foreground)] leading-snug">
                  Pipra was born from this intersection of memory and infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[var(--border)]">
                  <p className="font-semibold text-[var(--foreground)] text-lg sm:text-xl">
                    How can we enable the world to experience India?
                  </p>
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--surface-alt)] px-4 py-2 rounded-lg border border-[var(--border)] self-start sm:self-auto whitespace-nowrap shrink-0">
                    Pipra means Peepul
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right column: Comparative cases */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.2} direction="left">
              <div className="pb-4 mb-6 border-b border-[var(--border)]">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-eyebrow text-xs">Field Casebook</p>
                  <span className="text-xs font-mono text-[var(--muted-light)]">01 — 03</span>
                </div>
                <h3 className="font-serif text-2xl text-[var(--foreground)] font-semibold">
                  Comparative Observations
                </h3>
                <p className="text-xs text-[var(--muted)] mt-1 tracking-wide">
                  How recipes and ordinary products become global infrastructure:
                </p>
              </div>

              <StaggerContainer className="flex flex-col gap-3">
                {COMPARATIVE_CASES.map((c) => (
                  <StaggerItem key={c.id}>
                    <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--border-strong)] hover:shadow-md transition-smooth cursor-default">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
                            {c.id} //
                          </span>
                          <span className="text-xs font-semibold text-[var(--accent)]">{c.tag}</span>
                        </div>
                        <span className="text-[11px] text-[var(--muted)] font-mono">{c.sub}</span>
                      </div>
                      <h4 className="font-serif text-xl sm:text-2xl text-[var(--foreground)] font-semibold mb-2">
                        {c.title}
                      </h4>
                      <p className="text-sm text-[var(--muted)] leading-relaxed">{c.body}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
