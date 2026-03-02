import { useRef } from "react";
import { Check, Light, Setting } from "../assets/icons";
import { motion as m, useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const Developers = [
    "Javascript",
    "Html",
    "CSS",
    "Tailwind",
    "NodeJs",
    "ExpressJs",
    "NestJs",
    "Java",
    "Php",
    "ASP .NET",
  ];

  const Tools = [
    "Git + Github",
    "Command line",
    "PostMan",
    "Chrome DevTools",
    "Jira",
  ];

  const Knowledge = [
    "CSS Detangling",
    "ECMAScript 6",
    "Usability",
    "SEO",
    "REST APIs",
    "Responsive Design",
  ];

  return (
    <div 
      className="flex min-h-screen w-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
    >
      <div ref={ref} className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h1 
            className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Skills & Expertise
          </h1>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"></div>
        </m.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {/* Developer Skills */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl p-6 shadow-xl sm:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div 
                className="rounded-lg p-2"
                style={{ backgroundColor: 'var(--bg-hover)' }}
              >
                <Setting className="h-6 w-6" style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h3 
                className="text-2xl font-bold uppercase"
                style={{ color: 'var(--text-primary)' }}
              >
                Technologies
              </h3>
            </div>

            {/* Mobile - horizontal scroll pills */}
            <div 
              className="-mx-2 mt-2 flex gap-3 overflow-x-auto pb-2 sm:hidden"
              data-scroll-lock="false"
            >
              {Developers.map((tech, index) => (
                <m.div
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.04 }}
                  whileHover={{ y: -2 }}
                  className="flex min-w-[7.5rem] items-center justify-center rounded-xl px-3 py-2 text-center text-xs font-semibold shadow-sm"
                  style={{ 
                    color: 'var(--text-primary)'
                  }}
                >
                  {tech}
                </m.div>
              ))}
            </div>

            {/* Desktop / tablet - grid */}
            <div className="mt-4 hidden grid-cols-2 gap-4 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {Developers.map((tech, index) => (
                <m.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative overflow-hidden rounded-xl p-4 text-center shadow-md transition-all"
                  style={{ 
                    border: '1px solid var(--border-primary)'
                  }}
                >
                  <div 
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)' }}
                  />
                  <span 
                    className="relative z-10 text-sm font-semibold transition-colors group-hover:text-white"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {tech}
                  </span>
                </m.div>
              ))}
            </div>
          </m.div>

          {/* Tools & Knowledge Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {/* Tools */}
            <m.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl p-6 shadow-xl sm:p-8"
            >
              <div className="mb-4 flex items-center gap-3 sm:mb-6">
                <div 
                  className="rounded-lg p-2"
                  style={{ backgroundColor: 'var(--bg-hover)' }}
                >
                  <Setting className="h-6 w-6" style={{ color: 'var(--accent-secondary)' }} />
                </div>
                <h3 
                  className="text-lg font-bold uppercase sm:text-2xl"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Tools
                </h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {Tools.map((tool, index) => (
                  <m.li
                    key={tool}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 rounded-lg p-2 transition-all hover:translate-x-2 sm:p-3"
                    style={{ backgroundColor: 'var(--bg-secondary)' }}
                  >
                    <Check 
                      className="h-5 w-5 flex-shrink-0" 
                      style={{ color: 'var(--accent-secondary)' }} 
                    />
                    <span 
                      className="font-medium"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {tool}
                    </span>
                  </m.li>
                ))}
              </ul>
            </m.div>

            {/* Knowledge */}
            <m.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl p-6 shadow-xl sm:p-8"
            >
              <div className="mb-4 flex items-center gap-3 sm:mb-6">
                <div 
                  className="rounded-lg p-2"
                  style={{ backgroundColor: 'var(--bg-hover)' }}
                >
                  <Light className="h-6 w-6" style={{ color: 'var(--accent-tertiary)' }} />
                </div>
                <h3 
                  className="text-lg font-bold uppercase sm:text-2xl"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Knowledge
                </h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {Knowledge.map((item, index) => (
                  <m.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 rounded-lg p-2 transition-all hover:translate-x-2 sm:p-3"
                    style={{ backgroundColor: 'var(--bg-secondary)' }}
                  >
                    <Check 
                      className="h-5 w-5 flex-shrink-0" 
                      style={{ color: 'var(--accent-tertiary)' }} 
                    />
                    <span 
                      className="font-medium"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item}
                    </span>
                  </m.li>
                ))}
              </ul>
            </m.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
