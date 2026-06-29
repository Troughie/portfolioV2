import { useRef } from "react";
import { motion as m, useInView } from "framer-motion";
import { Mail, Phone } from "../assets/icons";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div 
      id="About" 
      className="relative flex min-h-screen w-full items-center justify-center px-6 py-16 sm:px-8 lg:px-12"
    >
      <div ref={ref} className="mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center lg:text-left"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">// Profile</span>
          <h2 
            className="mt-2 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: 'var(--text-primary)' }}
          >
            About Me
          </h2>
          <div className="mt-4 h-[3px] w-20 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary lg:hidden"></div>
        </m.div>

        {/* Content Layout */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Profile Card & Stats (5 cols) */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Developer Metadata Card */}
            <div 
              className="relative overflow-hidden rounded-2xl border border-primary p-6 shadow-xl bg-card"
            >
              {/* Card Dotted Tech Background */}
              <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(var(--text-primary) 1px, transparent 0)",
                  backgroundSize: "16px 16px"
                }}
              />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary p-0.5 shadow-md flex items-center justify-center text-white text-2xl font-black">
                    NN
                  </div>
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Nguyen Tien Ngoc</h3>
                    <p className="text-xs font-semibold tracking-wider uppercase text-accent">Full Stack Engineer</p>
                  </div>
                </div>

                <div className="border-t border-primary pt-4 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span style={{ color: 'var(--text-tertiary)' }}>Location</span>
                    <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Bien Hoa, Dong Nai, Vietnam</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: 'var(--text-tertiary)' }}>Tech Focus</span>
                    <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>React, NestJS, TypeScript</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: 'var(--text-tertiary)' }}>Status</span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      Open for opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { count: "1", label: "Year Exp", color: "var(--accent-primary)" },
                { count: "10+", label: "Projects", color: "var(--accent-secondary)" },
                { count: "8+", label: "Tech Stack", color: "var(--accent-tertiary)" },
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="rounded-xl border border-primary p-4 text-center shadow-md bg-card transition-all hover:border-accent-primary/50"
                >
                  <div 
                    className="text-2xl font-black sm:text-3xl"
                    style={{ color: stat.color }}
                  >
                    {stat.count}
                  </div>
                  <div 
                    className="mt-1 text-[11px] font-bold uppercase tracking-wider"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Contact Buttons */}
            <div className="space-y-3">
              <a
                href="mailto:ngocnguyen29061@gmail.com"
                className="flex items-center justify-between rounded-xl border border-primary p-4 bg-card hover:bg-hover hover:border-accent-primary transition-all duration-200 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg p-2 bg-accent-primary/10" style={{ color: 'var(--accent-primary)' }}>
                    <Mail className="size-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Email Me</div>
                    <div className="text-xs sm:text-sm font-semibold font-mono" style={{ color: 'var(--text-primary)' }}>ngocnguyen29061@gmail.com</div>
                  </div>
                </div>
                <svg className="h-4 w-4" style={{ color: 'var(--text-tertiary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="tel:0364932286"
                className="flex items-center justify-between rounded-xl border border-primary p-4 bg-card hover:bg-hover hover:border-accent-secondary transition-all duration-200 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg p-2 bg-accent-secondary/10" style={{ color: 'var(--accent-secondary)' }}>
                    <Phone className="size-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Call Me</div>
                    <div className="text-xs sm:text-sm font-semibold font-mono" style={{ color: 'var(--text-primary)' }}>0364932286</div>
                  </div>
                </div>
                <svg className="h-4 w-4" style={{ color: 'var(--text-tertiary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </m.div>

          {/* Right Column: Bio Narrative (7 cols) */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 text-sm sm:text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            <div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                Building optimized, reliable software solutions
              </h3>
              <p>
                Hello! I am a passionate <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Software Engineer</span> with hands-on experience designing and implementing full-stack software. I specialize in crafting performant interfaces using <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>React.js</span> and scalable REST services with <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Node.js / NestJS / Express.js</span>.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                My Engineering Philosophy
              </h3>
              <p>
                I thrive on solving complex issues by breaking them down into simple, clean, and maintainable architectures. Over the past year, I have successfully built and deployed tools ranging from ecommerce systems to real-time chat servers and financial expense monitors, focusing on system reliability, responsiveness, and performance optimization.
              </p>
            </div>

            <div className="hidden sm:block">
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                Always Eager to Grow
              </h3>
              <p>
                I actively pursue new tech stacks, methodologies, and engineering principles. I strive to contribute to challenging, modern product developments that value code quality, micro-interactions, and visual precision.
              </p>
            </div>
          </m.div>
        </div>
      </div>
    </div>
  );
};

export default About;
