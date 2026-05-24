"use client";

import { motion } from "framer-motion";
import LogoHero from "@/components/LogoHero";

function HeroMesh() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1280 700"
    >
      <g opacity="0.05" stroke="#0e9e8a" strokeWidth="0.8" strokeLinecap="round">
        {/* top-left cluster */}
        <line x1="80"  y1="60"  x2="200" y2="130" /><line x1="80"  y1="60"  x2="140" y2="30" />
        <line x1="80"  y1="60"  x2="30"  y2="120" /><line x1="200" y1="130" x2="140" y2="30" />
        <line x1="200" y1="130" x2="260" y2="80"  /><line x1="200" y1="130" x2="240" y2="200"/>
        <line x1="140" y1="30"  x2="260" y2="80"  />
        {/* top-right cluster */}
        <line x1="1100" y1="50"  x2="1200" y2="120"/><line x1="1100" y1="50"  x2="1050" y2="20"/>
        <line x1="1100" y1="50"  x2="1160" y2="20" /><line x1="1200" y1="120" x2="1250" y2="70"/>
        <line x1="1200" y1="120" x2="1180" y2="200"/><line x1="1050" y1="20"  x2="1160" y2="20"/>
        {/* bottom-left cluster */}
        <line x1="60"  y1="560" x2="180" y2="620"/><line x1="60"  y1="560" x2="20"  y2="490"/>
        <line x1="60"  y1="560" x2="130" y2="520"/><line x1="180" y1="620" x2="130" y2="520"/>
        <line x1="180" y1="620" x2="250" y2="650"/><line x1="180" y1="620" x2="200" y2="560"/>
        {/* bottom-right cluster */}
        <line x1="1150" y1="580" x2="1240" y2="520"/><line x1="1150" y1="580" x2="1200" y2="650"/>
        <line x1="1150" y1="580" x2="1080" y2="630"/><line x1="1240" y1="520" x2="1260" y2="600"/>
        <line x1="1080" y1="630" x2="1200" y2="650"/>
      </g>
      <g opacity="0.08" fill="#1a6b4a">
        <circle cx="80"   cy="60"  r="3"  /><circle cx="200"  cy="130" r="3"  />
        <circle cx="140"  cy="30"  r="2.5"/><circle cx="260"  cy="80"  r="2.5"/>
        <circle cx="1100" cy="50"  r="3"  /><circle cx="1200" cy="120" r="3"  />
        <circle cx="60"   cy="560" r="3"  /><circle cx="180"  cy="620" r="3"  />
        <circle cx="1150" cy="580" r="3"  /><circle cx="1240" cy="520" r="2.5"/>
      </g>
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const, delay: i * 0.14 },
  }),
};

const stats = [
  {
    figure: "372:1",
    label: "Students per public school counselor",
    cite: "ASCA, 2024–25",
  },
  {
    figure: "7×",
    label: "More likely to complete FAFSA with counselor guidance",
    cite: "NACAC, 2016",
  },
  {
    figure: "11%",
    label: "Of first-gen, low-income students earn a degree in 6 years",
    cite: "Pell Institute, 2018",
  },
];

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-brand-bg overflow-hidden pt-16">
      <HeroMesh />

      <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: text ── */}
          <div className="text-center lg:text-left">
            <motion.p
              custom={0} variants={fadeUp} initial="hidden" animate="show"
              className="text-sm font-body font-semibold tracking-widest text-brand-teal uppercase mb-4"
            >
              College Advising &amp; Life Coaching
            </motion.p>

            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="show"
              className="font-display text-5xl md:text-6xl font-bold text-brand-navy leading-tight mb-6"
            >
              Your Path Forward{" "}
              <span className="text-brand-teal">Starts Here</span>
            </motion.h1>

            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="show"
              className="text-lg md:text-xl font-body text-brand-secondary leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              College advising, essay prep, and life coaching &mdash; from
              someone who has been exactly where you are.
            </motion.p>

            <motion.div
              custom={3} variants={fadeUp} initial="hidden" animate="show"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded bg-brand-green text-white font-body font-semibold text-base hover:bg-brand-navy transition-colors duration-200 shadow-sm"
              >
                Book a Free Intro Call
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 rounded border-2 border-brand-teal text-brand-teal font-body font-semibold text-base hover:bg-brand-teal hover:text-white transition-colors duration-200"
              >
                Meet Your Advisor
              </a>
            </motion.div>

            {/* Stats — desktop only; mobile version rendered below the logo */}
            <motion.div
              custom={4} variants={fadeUp} initial="hidden" animate="show"
              className="mt-12 hidden lg:block"
            >
              <p className="text-xs font-body font-semibold tracking-widest text-brand-secondary uppercase mb-4">
                The access gap
              </p>
              <div className="grid grid-cols-3 gap-x-6">
                {stats.map((stat) => (
                  <div key={stat.figure} className="border-l-2 border-brand-teal/40 pl-3">
                    <p className="font-display text-2xl font-bold text-brand-navy">{stat.figure}</p>
                    <p className="text-sm font-body text-brand-secondary mt-0.5 leading-snug">{stat.label}</p>
                    <p className="text-xs font-body text-brand-secondary/60 mt-1">{stat.cite}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: web fills the column ── */}
          <motion.div
            custom={2} variants={fadeUp} initial="hidden" animate="show"
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="w-full max-w-[340px] lg:max-w-none aspect-square">
              <LogoHero />
            </div>
          </motion.div>

          {/* ── Stats — mobile only, rendered after the logo ── */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate="show"
            className="lg:hidden"
          >
            <p className="text-xs font-body font-semibold tracking-widest text-brand-secondary uppercase mb-4 text-center">
              The access gap
            </p>
            <div className="grid grid-cols-3 gap-x-4">
              {stats.map((stat) => (
                <div key={stat.figure} className="border-l-2 border-brand-teal/40 pl-3">
                  <p className="font-display text-xl font-bold text-brand-navy">{stat.figure}</p>
                  <p className="text-xs font-body text-brand-secondary mt-0.5 leading-snug">{stat.label}</p>
                  <p className="text-xs font-body text-brand-secondary/60 mt-1">{stat.cite}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
