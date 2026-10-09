"use client";

import Image from "next/image";
import { FadeIn } from "./AnimateIn";

export default function SymbolsSection() {
  return (
    <section
      id="symbols"
      aria-label="The Symbols - Peepul and Kurma"
      className="section-spacing bg-white"
    >
      <div className="container-pipra">
        {/* Eyebrow */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)] font-medium">06 // The Symbols</span>
          </div>
        </FadeIn>

        {/* Main heading */}
        <FadeIn delay={0.1}>
          <div className="max-w-5xl mb-16 sm:mb-20">
            <h2 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-[var(--foreground)] leading-[1.08]">
              Rooted in tradition.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-blue-400">
                Open to inquiry.
              </span>
            </h2>
            <p className="text-body mt-8 text-lg sm:text-xl leading-relaxed max-w-3xl">
              Pipra draws from two symbols: the Peepul and the tortoise—balancing
              rooted outward growth with disciplined inward reflection.
            </p>
          </div>
        </FadeIn>

        {/* Diptych panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 sm:mb-24">
          {/* Peepul panel */}
          <FadeIn delay={0.15} direction="right">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-12 lg:p-14 flex flex-col h-full hover:shadow-lg hover:border-[var(--border-strong)] transition-smooth">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4 mb-8">
                <span className="text-eyebrow text-xs">01 // Peepul</span>
                <span className="text-xs font-semibold text-[var(--muted)]">Outward Growth</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[var(--foreground)] font-semibold leading-snug mb-6">
                Rooted. Gathering. Reaching outward.
              </h3>

              <p className="text-body text-base sm:text-lg leading-relaxed mb-8">
                The Peepul is rooted in place while its canopy reaches outward,
                evoking shade, gathering, and inquiry. It reminds us that durable
                systems begin somewhere specific before extending across the world.
              </p>

              {/* Botanical image */}
              <div className="my-4">
                <figure
                  className="relative w-full aspect-[16/9] sm:aspect-[21/10] overflow-hidden rounded-xl border border-[var(--border)]"
                  aria-label="Botanical photograph of a Sacred fig or Peepal leaf"
                >
                  <Image
                    src="/images/pipra-peepul-leaf-botanical.jpg"
                    alt="Botanical detail of a Peepal leaf"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/75 to-transparent flex items-end justify-between font-mono text-[10px] text-white/90 uppercase tracking-widest">
                    <span>Botanical Record: Ficus religiosa</span>
                    <span className="text-white/60">CC BY-SA 4.0</span>
                  </div>
                </figure>
              </div>

              <div className="mt-auto pt-6 border-t border-[var(--border)]">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
                  Dimension // Rootedness & Outward Growth
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Kūrma panel */}
          <FadeIn delay={0.2} direction="left">
            <div className="rounded-2xl border-2 border-[var(--accent)]/20 bg-gradient-to-br from-[var(--surface-alt)] to-[var(--surface)] p-8 sm:p-12 lg:p-14 flex flex-col h-full hover:shadow-lg hover:border-[var(--accent)]/40 transition-smooth">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4 mb-8">
                <span className="text-eyebrow text-xs">02 // Kūrma</span>
                <span className="text-xs font-semibold text-[var(--muted)]">Inward Movement</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[var(--foreground)] font-semibold leading-snug mb-6">
                Withdraw. Reflect. Begin again.
              </h3>

              <p className="text-body text-base sm:text-lg leading-relaxed mb-8">
                The tortoise represents inward reflection before moving outward—returning
                to foundational principles before building anew. Tradition is not a static
                endpoint, but the starting point for inquiry.
              </p>

              <div className="my-4 p-6 sm:p-8 rounded-xl bg-white border border-[var(--border)] shadow-sm">
                <span className="text-eyebrow text-xs block mb-2">Inward Discipline</span>
                <p className="font-serif italic text-base sm:text-lg text-[var(--foreground)] leading-snug">
                  Returning to core principles before building outward.
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-[var(--border)]">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
                  Dimension // Inward Reflection & Inquiry
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Closing statement */}
        <FadeIn delay={0.3}>
          <div className="pt-12 sm:pt-16 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-baseline justify-between gap-8">
            <blockquote className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[var(--foreground)] max-w-3xl leading-[1.12] font-light">
              &ldquo;Rootedness gives inquiry a place to begin.&rdquo;
            </blockquote>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)] bg-[var(--surface-alt)] px-4 py-2 rounded-lg border border-[var(--border)] self-start sm:self-auto shrink-0">
              The Philosophy of Pipra
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
