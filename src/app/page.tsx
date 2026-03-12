"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import OrbitalAnimation from "@/components/OrbitalAnimation";
import TerminalAbout from "@/components/TerminalAbout";
import HeroTypewriter from "@/components/HeroTypewriter";
import PlayerCard from "@/components/PlayerCard";
import ContactForm from "@/components/ContactForm";
import ProjectSection from "@/components/ProjectSection";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { dict, lang } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="bg-background min-h-screen" />;
  }

  return (
    <motion.div
      key="main-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="flex min-h-screen w-full flex-col items-center overflow-hidden pb-24 selection:bg-accent selection:text-black">

      {/* 1. HERO SECTION */}
      <section id="hero" className="w-full flex flex-col px-6 md:px-12 py-12 md:py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 mt-10 md:mt-16">

          {/* Left Side: Hero Text and CTA */}
          <div className="flex w-full lg:w-1/2 flex-col items-start gap-6 relative z-10">
            <div className="w-full flex justify-center lg:justify-start">
              <HeroTypewriter key={lang} text={dict.hero.typewriter} />
            </div>

            {/* Fluid Typography Header */}
            <h1 className="font-pressStart flex flex-col items-start 
                           text-[clamp(1.5rem,6vw,4.5rem)] 
                           leading-[1.1] text-black dark:text-[#e5e5e5] tracking-tight w-full uppercase">
              <span>ENES</span>
              <span className="text-accent my-2">EFE</span>
              <span>AÇIKGÖZ</span>
            </h1>

            <button
              aria-label="Scroll to contact section"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 bg-accent text-black font-pressStart w-full sm:w-auto text-xs md:text-sm px-8 py-5 uppercase
               shadow-[4px_4px_0_0_#8b6508] border-2 border-accent
               hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#8b6508] 
               hover:animate-pulseGlow
               active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all outline-none"
            >
              {dict.hero.cta}
            </button>
          </div>

          {/* Right Side: Orbital Animation */}
          <div className="w-full lg:w-1/2 flex items-center justify-center pt-8 lg:pt-0">
            <OrbitalAnimation />
          </div>

        </div>
      </section>

      {/* 2. ABOUT & TERMINAL SECTION */}
      <section id="about" className="w-full px-6 md:px-12 mt-12 md:mt-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col lg:flex-row items-center justify-between gap-16">

          <div className="w-full lg:w-[60%] flex flex-col gap-8">
            <h2 className="font-pressStart text-xl md:text-3xl text-accent dark:text-white uppercase border-b-4 border-black dark:border-[#333] pb-4 self-start">
              {dict.about.title}
            </h2>
            <TerminalAbout key={lang} text={dict.about.terminal} />
          </div>

          {/* Right Side: Player 1 Card */}
          <div className="w-full lg:w-[35%] flex items-center justify-center lg:justify-end">
            <PlayerCard />
          </div>

        </div>
      </section>

      {/* 3. PROJECT SECTION (MISSION SELECT) */}
      <ProjectSection key={lang} />

      {/* 4. CONTACT FORM SECTION */}
      <section id="contact" className="w-full px-6 md:px-12 flex flex-col items-center relative z-20">
        <ContactForm key={lang} />
      </section>

      {/* Footer */}
      <footer className="mt-24 pb-12 font-pressStart text-[8px] text-gray-600 uppercase tracking-widest text-center">
        <p>{dict.footer}</p>
      </footer>
      </main>
    </motion.div>
  );
}
