"use client";

import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimateIn";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const FOUNDER: TeamMember = {
  name: "Sanjeev Kumar",
  role: "Founder",
  image: "/images/team/sanjeev-kumar.jpg",
  linkedin: "https://www.linkedin.com/in/sansjeev/",
};

const FOUNDING_TEAM = [
  {
    name: "Astitva Tiwari",
    role: "Founding Team",
    image: "/images/team/astitva-tiwari.png",
    linkedin: "https://www.linkedin.com/in/astitva-tiwari-960185371/",
  },
  {
    name: "Chef Vijay",
    role: "Founding Team",
    image: "/images/team/chef-vijay.jpg",
    linkedin: "",
  },
];

export default function FoundingTeamSection() {
  return (
    <section
      id="founding-team"
      aria-label="Founding Team"
      className="relative w-full bg-dark-section text-white section-spacing overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/images/pipra-ganges-boats-sunrise.jpg"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center opacity-8 filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0A1628]/95 to-[#0A1628]" />
        {/* Blue radial glow behind team */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_50%_40%,rgba(30,95,194,0.18),transparent_75%)]" />
      </div>

      <div className="relative z-10 container-pipra">
        {/* Section header */}
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 pb-3 border-b border-white/15 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>The People Behind Pipra</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold tracking-tight">
              Founding Team
            </h2>
          </div>
        </FadeIn>

        {/* Founder card */}
        <FadeIn delay={0.15}>
          <div className="max-w-[580px] w-full mx-auto mb-8 sm:mb-10">
            <div className="group relative glass-card p-6 sm:p-10 lg:p-12 text-center flex flex-col items-center overflow-hidden hover:bg-white/12 transition-smooth shadow-2xl">
              {/* Top gradient line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

              {/* Founder badge */}
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Founder</span>
              </div>

              {/* Portrait */}
              <div className="relative mb-6">
                <div className="w-44 h-56 sm:w-52 sm:h-64 rounded-2xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 relative overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.45)] group-hover:border-blue-400/50 transition-smooth">
                  <Image
                    src={FOUNDER.image}
                    alt={`${FOUNDER.name}, ${FOUNDER.role}`}
                    fill
                    sizes="(max-width: 640px) 176px, 208px"
                    className="object-cover object-center transition-smooth group-hover:scale-[1.03]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Name */}
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-bold tracking-tight mb-1.5">
                {FOUNDER.name}
              </h3>

              {/* Role */}
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-5">
                {FOUNDER.role}
              </p>

              {/* LinkedIn */}
              <div className="pt-4 border-t border-white/10 w-full max-w-[180px] flex items-center justify-center">
                <a
                  href={FOUNDER.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/50 hover:text-white transition-smooth group/link"
                  aria-label={`${FOUNDER.name} on LinkedIn`}
                >
                  <span>LinkedIn</span>
                  <span className="text-xs transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Connector */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="h-10 w-px bg-gradient-to-b from-blue-400/30 via-blue-400/15 to-transparent" />
        </div>

        {/* Founding team row */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1080px] mx-auto">
          {FOUNDING_TEAM.map((member) => (
            <StaggerItem key={member.name}>
              <div className="group relative glass-card p-5 sm:p-7 text-center flex flex-col items-center hover:bg-white/12 transition-smooth shadow-lg overflow-hidden h-full">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                {/* Portrait */}
                <div className="relative mb-4 sm:mb-5">
                  <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-xl border border-white/15 bg-white/5 relative overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.4)] group-hover:border-blue-400/40 transition-smooth">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      sizes="(max-width: 640px) 128px, 144px"
                      className="object-cover object-center transition-smooth group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/25 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                <h4 className="font-serif text-2xl text-white font-bold tracking-tight mb-1">
                  {member.name}
                </h4>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300 mb-5">
                  {member.role}
                </p>

                {member.linkedin && (
                  <div className="pt-3.5 border-t border-white/10 w-full flex items-center justify-center mt-auto">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-white/40 hover:text-white transition-smooth group/link"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <span>LinkedIn</span>
                      <span className="text-[10px] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden="true">↗</span>
                    </a>
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}

          {/* More to Come card */}
          <StaggerItem>
            <div className="group relative text-center flex flex-col items-center justify-center h-full min-h-[320px] sm:min-h-[360px] rounded-2xl border border-dashed border-white/20 hover:border-blue-400/50 bg-white/[0.03] hover:bg-white/[0.07] transition-smooth overflow-hidden">
              {/* Subtle top glow line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />

              {/* Animated ring icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full border border-white/15 bg-white/5 flex items-center justify-center group-hover:border-blue-400/40 transition-smooth">
                  <div className="absolute w-16 h-16 rounded-full border border-blue-400/20 animate-ping opacity-0 group-hover:opacity-100" />
                  <svg className="w-5 h-5 text-white/30 group-hover:text-blue-400 transition-smooth" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </div>

              <h4 className="font-serif text-2xl text-white/50 group-hover:text-white font-normal tracking-tight mb-2 transition-smooth">
                Many more to come
              </h4>
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-white/25 group-hover:text-white/50 transition-smooth max-w-[160px] leading-relaxed">
                The team is growing
              </p>

              {/* Bottom border line */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
