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
  description: string;
  positions: string[];
  techs: tech[];
}

const experiences: Experience[] = [
  {
    name: "Ebizworld",
    link: "https://ebizworldsolutions.com/",
    description:
      "Developed backend using NestJS, MongoDB, and TypeScript, building high-performance APIs and optimizing data structures. Built frontend with ReactJS, TailwindCSS, Ant Design, and TypeScript, ensuring a smooth and visually appealing user experience. Contributed to the development of a strategy card game web application, working on system architecture, performance optimization, and user experience improvements.",
    time: "Mar — Sep 2024",
    positions: ["Backend Developer", "Frontend Developer"],
    techs: [
      { id: 1, name: "NestJs" },
      { id: 2, name: "ReactJs" },
      { id: 3, name: "TailwindCss" },
      { id: 4, name: "Antd" },
      { id: 5, name: "Typescript" },
      { id: 6, name: "Javascript" },
      { id: 7, name: "Mongodb" },
      { id: 8, name: "NodeJs" },
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div 
      id="Experience" 
      ref={ref} 
      className="flex min-h-screen w-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-6xl">
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
            Work Experience
          </h1>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"></div>
        </m.div>

        {/* Timeline Container */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card */}
              <div 
                className="relative overflow-hidden rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl sm:p-10 lg:p-12"
                style={{ 
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-primary)'
                }}
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header Section */}
                  <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link inline-flex items-center gap-2 transition-colors"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        <h2 className="text-2xl font-bold transition-colors group-hover/link:text-[var(--accent-primary)] sm:text-3xl lg:text-4xl">
                          {exp.name}
                        </h2>
                        <svg
                          className="h-6 w-6 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      
                      {/* Positions */}
                      <div className="mt-2 flex flex-wrap gap-2">
                        {exp.positions.map((pos, idx) => (
                          <span
                            key={idx}
                            className="rounded-full px-4 py-1 text-sm font-medium"
                            style={{ 
                              backgroundColor: 'var(--bg-tertiary)',
                              color: 'var(--text-secondary)'
                            }}
                          >
                            {pos}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Time Badge */}
                    <div 
                      className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold sm:px-6 sm:py-3"
                      style={{ 
                        backgroundColor: 'var(--accent-primary)',
                        color: '#FFFFFF'
                      }}
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.time}
                    </div>
                  </div>

                  {/* Description */}
                  <p 
                    className="mb-6 text-base leading-relaxed sm:text-lg"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {exp.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <h3 
                      className="mb-3 text-sm font-semibold uppercase tracking-wide"
                      style={{ color: 'var(--text-tertiary)' }}
                    >
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.techs.map((tech) => (
                        <m.span
                          key={tech.id}
                          whileHover={{ scale: 1.05 }}
                          className="rounded-lg px-3 py-2 text-sm font-medium shadow-sm transition-all hover:shadow-md"
                          style={{ 
                            backgroundColor: 'var(--bg-hover)',
                            color: 'var(--accent-primary)',
                            border: '1px solid var(--border-secondary)'
                          }}
                        >
                          {tech.name}
                        </m.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div 
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-10 blur-3xl transition-opacity duration-300 group-hover:opacity-20"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                ></div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
