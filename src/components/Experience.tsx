import { useRef } from "react";
import { motion as m, useInView } from "framer-motion";

interface tech {
  id: number;
  name: string;
}

interface Experience {
  time: string;
  name: string;
  link: string;
  description: string[];
  positions: string[];
  techs: tech[];
}

const experiences: Experience[] = [
  {
    name: "Freelance",
    link: "#",
    description: [
      "Built 3+ automated AI video pipelines using VEO 3, Kling, and Sora to eliminate manual workflow bottlenecks.",
      "Engineered 50+ Text-to-Video prompts and structured JSON schemas to maintain asset consistency across multi-character scenes.",
      "Resolved AI-generated visual artifacts and anomalies through systematic parameter iteration and fine-tuning.",
      "Integrated Gemini Nano to automate storyboard generation, reducing pre-production planning time by 60%."
    ],
    time: "Oct 2025 — Mar 2026",
    positions: ["AI Video Generation Engineer"],
    techs: [
      { id: 1, name: "VEO 3" },
      { id: 2, name: "Kling" },
      { id: 3, name: "Sora" },
      { id: 4, name: "Gemini Nano" },
      { id: 5, name: "Prompt Engineering" },
      { id: 6, name: "AI Automation" },
      { id: 7, name: "JSON Schema" },
      { id: 8, name: "Python" },
    ],
  },
  {
    name: "Ebizworld",
    link: "https://ebizworldsolutions.com/",
    description: [
      "Developed and maintained a web-based game platform leveraging NestJS for REST APIs and React.js with TypeScript for the frontend.",
      "Optimized complex MongoDB aggregation queries, reducing data retrieval latency by 40% for high-frequency operations.",
      "Implemented 10+ reusable custom hooks and integrated TanStack Query to reduce API boilerplate code by 30%.",
      "Constructed 15+ responsive UI components using Tailwind CSS and Ant Design, ensuring seamless cross-device compatibility.",
      "Participated actively in a 6-month Agile/Scrum environment, contributing to code reviews and continuous deployments."
    ],
    time: "Mar — Sep 2024",
    positions: ["Fullstack Developer (Internship)"],
    techs: [
      { id: 1, name: "React.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "TailwindCSS" },
      { id: 4, name: "Ant Design" },
      { id: 5, name: "NestJS" },
      { id: 6, name: "MongoDB" },
      { id: 7, name: "TanStack Query" },
      { id: 8, name: "Agile/Scrum" },
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div 
      id="Experience" 
      ref={ref} 
      className="flex min-h-screen w-full items-center justify-center px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-5xl">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">// Journey</span>
          <h2 
            className="mt-2 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Work Experience
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-20 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"></div>
        </m.div>

        {/* Timeline Container */}
        <div className="relative border-l border-primary ml-2 md:ml-6 pl-6 md:pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Timeline dot */}
              <div 
                className="absolute -left-[31px] md:-left-[47px] top-1.5 h-4 w-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125"
                style={{ 
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--accent-primary)',
                  boxShadow: '0 0 8px var(--accent-primary)'
                }}
              />

              {/* Card */}
              <div 
                className="relative overflow-hidden rounded-2xl p-6 sm:p-8 shadow-md border border-primary bg-card"
              >
                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Header Section */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-primary pb-4">
                    <div>
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link inline-flex items-center gap-1.5 transition-colors"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        <h3 className="text-xl font-bold transition-colors group-hover/link:text-[var(--accent-primary)] sm:text-2xl">
                          {exp.name}
                        </h3>
                        {exp.link !== "#" && (
                          <svg
                            className="h-4 w-4 text-tertiary transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        )}
                      </a>
                      
                      {/* Positions */}
                      <div className="mt-1 flex flex-wrap gap-2">
                        {exp.positions.map((pos, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-bold text-accent uppercase tracking-wider"
                          >
                            {pos}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Time Badge */}
                    <div 
                      className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold font-mono border border-primary bg-secondary/50"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.time}
                    </div>
                  </div>

                  {/* Description list items */}
                  <ul className="space-y-2.5 list-disc list-outside ml-4 text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {exp.description.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="pl-1">
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="border-t border-primary pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techs.map((tech) => (
                        <span
                          key={tech.id}
                          className="rounded-lg px-2.5 py-1 text-[10px] font-bold border border-primary bg-secondary/35 text-tertiary transition-all"
                          style={{ 
                            borderColor: 'var(--border-primary)',
                          }}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
