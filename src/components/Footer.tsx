"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./AnimateIn";

const BRAND_ARCHITECTURE = [
  {
    name: "Pipra Fish",
    role: "The First Vehicle",
    description: "The first vertical and bounded system experiment.",
  },
  {
    name: "Pipra Lab",
    role: "Research & Experimentation",
    description: "A space for research, testing, and systemic food questions.",
  },
  {
    name: "Supper Circles",
    role: "Regional Foodways",
    description: "Community and dialogue around traditional food knowledge.",
  },
  {
    name: "Pipra Explorers",
    role: "Distributed Network",
    description: "A distributed student and local-knowledge field network.",
  },
];

const NAV_LINKS = [
  { label: "Thesis", href: "#thesis" },
  { label: "Method", href: "#method" },
  { label: "Pipra Fish", href: "#fish" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Origin", href: "#origin" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site Footer"
      className="bg-dark-section text-white border-t border-white/10 pt-20 sm:pt-28 pb-12 sm:pb-16"
    >
      <div className="container-pipra">
        {/* Closing statement */}
        <FadeIn>
          <div className="max-w-4xl pb-16 sm:pb-20 border-b border-white/10">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] font-bold">
              Traditional knowledge.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                Modern infrastructure.
              </span>
              <br />
              Global table.
            </h2>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <span className="font-serif text-2xl font-bold tracking-[0.15em] text-white">PIPRA</span>
                <span className="text-white/20 font-mono hidden sm:inline">|</span>
                <p className="text-sm sm:text-base text-white/45">
                  Building better food systems for a better-nourished India.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Brand Architecture */}
        <div className="py-14 sm:py-20 border-b border-white/10">
          <FadeIn>
            <div className="flex items-center justify-between pb-4 mb-10 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-widest text-white/35">
                Brand Architecture // The Ecosystem
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                Pipra Master Brand
              </span>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {BRAND_ARCHITECTURE.map((entity) => (
              <StaggerItem key={entity.name}>
                <div className="flex flex-col group cursor-default">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">
                    {entity.role}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-semibold mb-2 group-hover:text-blue-200 transition-smooth">
                    {entity.name}
                  </h3>
                  <p className="text-xs text-white/35 leading-relaxed">
                    {entity.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Nav links */}
        <div className="py-10 border-b border-white/10">
          <nav className="flex flex-wrap gap-6" aria-label="Footer Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/35 hover:text-white transition-smooth"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="font-serif italic text-sm text-white/50">
            Pipra — Rooted in India. Built for the world.
          </p>
          <p className="text-xs font-mono tracking-wider uppercase text-white/20">
            &copy; {currentYear} Pipra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
