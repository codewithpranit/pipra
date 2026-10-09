"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./AnimateIn";

const INVITATION_ACTIONS = [
  { name: "Eat", desc: "Experience traditional recipes firsthand." },
  { name: "Host", desc: "Bring Supper Circles to your community." },
  { name: "Discover", desc: "Explore India's culinary heritage." },
  { name: "Document", desc: "Capture living food knowledge." },
  { name: "Build", desc: "Co-create the infrastructure with us." },
];

export default function DialogueSection() {
  return (
    <section
      id="dialogue"
      aria-label="Institutional Dialogue and Invitation"
      className="section-spacing bg-[var(--surface)]"
    >
      <div className="container-pipra">
        {/* Eyebrow */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)] font-medium">07 // The Invitation</span>
          </div>
        </FadeIn>

        {/* Dominant statement */}
        <FadeIn delay={0.1}>
          <div className="max-w-5xl mb-16 sm:mb-20">
            <h2 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] text-[var(--foreground)] leading-[1.06]">
              How can we enable the world to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-blue-400">
                experience India?
              </span>
            </h2>
            <p className="text-body mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl leading-relaxed reading-width">
              Beginning with food, we invite collaborators to build the infrastructure
              that allows traditional knowledge to travel without losing its integrity.
            </p>
          </div>
        </FadeIn>

        {/* Five practices */}
        <FadeIn delay={0.15}>
          <div className="mb-4 flex items-center justify-between border-b border-[var(--border)] pb-4">
            <span className="text-eyebrow text-xs">Ways of Engaging // The Five Practices</span>
            <span className="text-xs font-mono text-[var(--accent)]">01 — 05</span>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
          {INVITATION_ACTIONS.map((action, idx) => (
            <StaggerItem key={action.name}>
              <div className="group card-blue bg-white p-6 sm:p-7 flex flex-col gap-4 cursor-default h-full">
                <span className="text-xs font-bold text-[var(--accent)] tracking-widest font-mono">0{idx + 1}</span>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[var(--foreground)] font-semibold group-hover:text-[var(--accent)] transition-smooth">
                    {action.name}
                  </h3>
                  <p className="text-xs text-[var(--muted)] mt-1.5 leading-relaxed">
                    {action.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA Block */}
        <FadeIn delay={0.3}>
          <div className="bg-gradient-to-br from-[var(--foreground)] to-[#1A3A6B] rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-xl">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-3">Open Dialogue</span>
              <p className="font-serif italic text-2xl sm:text-3xl text-white leading-snug">
                Traditional food knowledge made globally accessible, trusted, and economically valuable.
              </p>
            </div>
            <a
              href="mailto:hello@pipra.in"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[var(--accent)] text-sm font-bold rounded-xl hover:bg-blue-50 transition-smooth shrink-0 self-start md:self-auto shadow-lg"
            >
              <span>Start a Conversation</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </FadeIn>

        {/* Pipra Lab footnote */}
        <FadeIn delay={0.35}>
          <div className="mt-16 sm:mt-20 pt-12 border-t border-[var(--border)]">
            <div className="rounded-2xl bg-white border border-[var(--border)] p-6 sm:p-8 lg:p-10 shadow-sm">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4 mb-6">
                <span className="text-eyebrow text-xs">Pipra Lab // Research & Inquiry</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                  Institutional Extension
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                <div className="lg:col-span-5">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[var(--foreground)] font-semibold">
                    Questions worth exploring.
                  </h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-body text-base sm:text-lg leading-relaxed">
                    A collaborative research initiative exploring foodways, nutrition,
                    and the systems that connect them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
