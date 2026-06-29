import { useRef } from "react";
import { motion as m } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import Hero3D from "./Hero3D";

const HomeV2 = () => {
  const inTroRef = useRef(null);
  const { theme } = useTheme();

  return (
    <div
      id="Intro"
      className="relative flex min-h-screen w-screen flex-col items-center justify-center overflow-hidden py-20 lg:py-0"
      style={{
        background:
          theme === "light"
            ? "radial-gradient(circle at top, rgba(13,148,136,0.12), transparent 55%), radial-gradient(circle at bottom, rgba(79,70,229,0.08), transparent 55%), var(--bg-primary)"
            : undefined,
      }}
    >
      {/* 3D Background */}
      <Hero3D />

      {/* Gradients & glow elements */}
      {theme === "dark" ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-primary)] pointer-events-none" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <m.div
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-1/2 -left-1/2 h-full w-full rounded-full opacity-[0.08]"
              style={{
                background:
                  "radial-gradient(circle, var(--accent-primary) 0%, transparent 65%)",
              }}
            />
            <m.div
              animate={{
                scale: [1.15, 1, 1.15],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full opacity-[0.08]"
              style={{
                background:
                  "radial-gradient(circle, var(--accent-secondary) 0%, transparent 65%)",
              }}
            />
          </div>
        </>
      ) : (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <m.div
            animate={{ y: [0, -8, 0], opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-32 top-10 h-56 w-56 rounded-3xl blur-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(13,148,136,0.3), rgba(79,70,229,0.25))",
            }}
          />
          <m.div
            animate={{ y: [0, 12, 0], opacity: [0.08, 0.2, 0.08] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-24 bottom-4 h-64 w-64 rounded-full blur-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(217,70,239,0.2), rgba(13,148,136,0.25))",
            }}
          />
        </div>
      )}

      <div
        ref={inTroRef}
        className="relative z-10 flex max-w-7xl flex-col items-center gap-12 px-6 text-center sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:text-left w-full pointer-events-none"
      >
        {/* Left Column: Text & Introduction */}
        <div className="flex max-w-2xl flex-col items-center gap-6 lg:items-start flex-1 pointer-events-auto">
          {/* Status Badge */}
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary bg-card/60 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span style={{ color: "var(--text-secondary)" }}>Available for Opportunities</span>
          </m.div>

          <m.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-balance text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: "var(--text-primary)" }}
          >
            Nguyen Tien Ngoc
          </m.h1>

          <m.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeInOut" }}
            className="h-[3px] w-24 rounded-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary lg:w-32"
          />

          <m.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base font-bold uppercase tracking-[0.2em] sm:text-sm lg:text-base"
            style={{ color: "var(--accent-primary)" }}
          >
            Full Stack Software Engineer
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-balance text-sm sm:text-base md:text-lg leading-relaxed max-w-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            I architect responsive, high-performance web experiences from database to client-side pixels, combining rigorous clean architecture with creative interfaces.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <button
              onClick={() => {
                const projects = document.getElementById("Projects");
                if (projects) {
                  projects.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="group relative cursor-pointer overflow-hidden rounded-xl px-6 py-3 text-sm font-bold shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                color: "#ffffff",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Projects
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>

            <button
              onClick={() => {
                const aboutSection = document.getElementById("About");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="cursor-pointer rounded-xl px-6 py-3 text-sm font-bold border hover:bg-hover border-primary transition-all duration-200"
              style={{
                backgroundColor: "var(--bg-card)",
                color: "var(--text-primary)",
              }}
            >
              Let&apos;s talk
            </button>
          </m.div>
        </div>

        {/* Right Column: Creative IT IDE Mockup */}
        <m.div
          initial={{ scale: 0.95, opacity: 0, x: 50 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full max-w-xl text-left hidden lg:block pointer-events-auto"
        >
          <div 
            className="relative overflow-hidden rounded-2xl border border-primary shadow-2xl p-0.5 bg-gradient-to-br from-accent-primary/20 via-primary/30 to-accent-secondary/20"
          >
            <div className="rounded-[14px] bg-[#070714] p-6 font-mono text-[13px] leading-relaxed text-[#a6a8c7]">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between border-b border-[#1f1b4c] pb-4 mb-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500"></span>
                  <span className="h-3 w-3 rounded-full bg-amber-500"></span>
                  <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
                </div>
                <div className="text-xs text-[#71739c]">ngoc.config.ts</div>
                <div className="w-12"></div>
              </div>

              {/* Code Content */}
              <div className="space-y-1">
                <div>
                  <span className="text-[#d946ef]">import</span>{" "}
                  <span className="text-[#00f2fe]">{"{ Developer }"}</span>{" "}
                  <span className="text-[#d946ef]">from</span>{" "}
                  <span className="text-[#22c55e]">&apos;./engineer&apos;</span><span className="text-white">;</span>
                </div>
                <div className="h-2"></div>
                <div>
                  <span className="text-[#d946ef]">export const</span>{" "}
                  <span className="text-[#00f2fe]">TNgoc</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-[#d946ef]">new</span>{" "}
                  <span className="text-[#00f2fe] font-bold">Developer</span><span className="text-white">({`{`}</span>
                </div>
                <div className="pl-6">
                  <span className="text-sky-400">name</span><span className="text-white">:</span>{" "}
                  <span className="text-[#22c55e]">&apos;Nguyen Tien Ngoc&apos;</span><span className="text-white">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-sky-400">role</span><span className="text-white">:</span>{" "}
                  <span className="text-[#22c55e]">&apos;Full Stack Software Engineer&apos;</span><span className="text-white">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-sky-400">yearsOfExperience</span><span className="text-white">:</span>{" "}
                  <span className="text-amber-400">1</span><span className="text-white">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-sky-400">specialties</span><span className="text-white">:</span>{" "}
                  <span className="text-white">[</span>
                  <span className="text-[#22c55e]">&apos;React&apos;</span><span className="text-white">, </span>
                  <span className="text-[#22c55e]">&apos;Node.js&apos;</span><span className="text-white">, </span>
                  <span className="text-[#22c55e]">&apos;TypeScript&apos;</span>
                  <span className="text-white">],</span>
                </div>
                <div className="pl-6">
                  <span className="text-sky-400">loves</span><span className="text-white">:</span>{" "}
                  <span className="text-white">[</span>
                  <span className="text-[#22c55e]">&apos;Optimizations&apos;</span><span className="text-white">, </span>
                  <span className="text-[#22c55e]">&apos;Clean Code&apos;</span>
                  <span className="text-white">],</span>
                </div>
                <div className="pl-6">
                  <span className="text-sky-400">availableForHire</span><span className="text-white">:</span>{" "}
                  <span className="text-amber-400">true</span>
                </div>
                <div><span className="text-white">{`});`}</span></div>
                
                <div className="h-4"></div>
                <div className="border-t border-[#1f1b4c] pt-3 text-[#71739c] text-xs flex justify-between">
                  <span>// Output: TNgoc.ready()</span>
                  <span className="text-[#00f2fe]">UTF-8</span>
                </div>
              </div>
            </div>
          </div>
        </m.div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => {
          const aboutSection = document.getElementById('About');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        className="absolute bottom-8 z-10 cursor-pointer pointer-events-auto"
      >
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <m.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1.5"
          >
            <span 
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: 'var(--text-tertiary)' }}
            >
              Scroll Down
            </span>
            <svg
              className="h-5 w-5"
              style={{ color: 'var(--accent-primary)' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </m.div>
        </m.div>
      </button>
    </div>
  );
};

export default HomeV2;
