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
      className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          theme === "light"
            ? "radial-gradient(circle at top, rgba(79,70,229,0.25), transparent 55%), radial-gradient(circle at bottom, rgba(56,189,248,0.2), transparent 55%), var(--bg-primary)"
            : undefined,
      }}
    >
      {/* 3D Background */}
      <Hero3D />

      {/* Gradients & glow elements */}
      {theme === "dark" ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-primary)]" />
          <div className="absolute inset-0 overflow-hidden">
            <m.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-1/2 -left-1/2 h-full w-full rounded-full opacity-10"
              style={{
                background:
                  "radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)",
              }}
            />
            <m.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full opacity-10"
              style={{
                background:
                  "radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)",
              }}
            />
          </div>
        </>
      ) : (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <m.div
            animate={{ y: [0, -12, 0], opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-32 top-10 h-56 w-56 rounded-3xl blur-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(79,70,229,0.6), rgba(56,189,248,0.5))",
            }}
          />
          <m.div
            animate={{ y: [0, 16, 0], opacity: [0.1, 0.35, 0.1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-24 bottom-4 h-64 w-64 rounded-full blur-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(34,197,94,0.45), rgba(56,189,248,0.5))",
            }}
          />
        </div>
      )}

      <div
        ref={inTroRef}
        className="relative z-10 flex max-w-6xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:text-left"
      >
        <m.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4"
        >
          <div 
            className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary p-1 shadow-2xl sm:h-40 sm:w-40"
          >
            <div 
              className="flex h-full w-full items-center justify-center rounded-full text-5xl font-bold sm:text-6xl"
              style={{ backgroundColor: 'var(--bg-card)', color: 'var(--accent-primary)' }}
            >
              NN
            </div>
          </div>
        </m.div>

        <div className="flex max-w-xl flex-col items-center gap-5 lg:items-start">
          <m.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="text-balance text-4xl font-extrabold sm:text-5xl lg:text-6xl"
            style={{ color: "var(--text-primary)" }}
          >
            Nguyen Tien Ngoc
          </m.h1>

          <m.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.45, duration: 0.9, ease: "easeInOut" }}
            className="h-1 w-32 rounded-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary lg:w-40"
          />

          <m.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.7, ease: "easeOut" }}
            className="text-sm font-semibold uppercase tracking-[0.25em] sm:text-xs lg:text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Full Stack Software Engineer
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="text-balance text-sm sm:text-base"
            style={{ color: "var(--text-tertiary)" }}
          >
            I craft modern web experiences from front to back, with a focus on
            performance, clean architecture, and delightful interfaces.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7 }}
            className="mt-2 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <button
              onClick={() => {
                const projects = document.getElementById("Projects");
                if (projects) {
                  projects.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="rounded-full px-5 py-2.5 text-sm font-semibold shadow-md transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                color: "#ffffff",
              }}
            >
              View featured projects
            </button>

            <button
              onClick={() => {
                const contact = document.getElementById("Contact");
                if (contact) {
                  contact.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="rounded-full px-5 py-2.5 text-sm font-semibold"
              style={{
                backgroundColor: "var(--bg-card)",
                color: "var(--text-primary)",
                border: "1px solid var(--border-primary)",
              }}
            >
              Let&apos;s collaborate
            </button>
          </m.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => {
          const aboutSection = document.getElementById('About');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        className="absolute bottom-12 z-10 cursor-pointer"
      >
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <m.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span 
              className="text-sm font-medium uppercase tracking-wider"
              style={{ color: 'var(--text-tertiary)' }}
            >
              Scroll Down
            </span>
            <svg
              className="h-6 w-6"
              style={{ color: 'var(--accent-primary)' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </m.div>
        </m.div>
      </button>
    </div>
  );
};

export default HomeV2;
