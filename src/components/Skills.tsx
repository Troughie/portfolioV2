import { useRef } from "react";
import { Light, Setting } from "../assets/icons";
import { motion as m, useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const techCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Context API", "Redux", "Zustand", "Next.js", "TypeScript", "TailwindCSS", "Ant Design", "Framer Motion", "HTML/CSS"],
      color: "var(--accent-primary)",
      icon: <Setting className="h-5 w-5" style={{ color: "var(--accent-primary)" }} />
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "NestJS", "RESTful APIs", "Socket.IO", "MongoDB", "MySQL", "Sequelize", "JWT", "Supabase", "Java Spring Boot", "ASP.NET Core"],
      color: "var(--accent-secondary)",
      icon: <Setting className="h-5 w-5" style={{ color: "var(--accent-secondary)" }} />
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "Docker", "Docker Compose", "CI/CD", "Postman", "Agile/Scrum"],
      color: "var(--accent-tertiary)",
      icon: <Setting className="h-5 w-5" style={{ color: "var(--accent-tertiary)" }} />
    },
    {
      title: "AI & Generative",
      skills: ["Text-to-Video (VEO 3/Kling/Sora)", "Prompt Engineering", "AI Workflow Automation", "API Integration with AI Models", "AI-assisted Programming", "LLM Application Development"],
      color: "#10b981",
      icon: <Setting className="h-5 w-5" style={{ color: "#10b981" }} />
    },
    {
      title: "Other Specialities",
      skills: ["Redis Caching", "Flutter (basic)", "Technical English Proficient"],
      color: "#f59e0b",
      icon: <Light className="h-5 w-5" style={{ color: "#f59e0b" }} />
    }
  ];

  return (
    <div
      className="flex min-h-screen w-full items-center justify-center px-6 py-12 sm:px-8 lg:px-12"
    >
      <div ref={ref} className="mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">// Capability</span>
          <h2
            className="mt-2 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Skills & Expertise
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-20 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"></div>
        </m.div>

        {/* Unified Dashboard Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category, catIdx) => (
            <m.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.08 }}
              className="relative overflow-hidden rounded-xl border border-primary p-6 shadow-md bg-card flex flex-col justify-between"
              style={{
                borderColor: "var(--border-primary)"
              }}
            >
              <div>
                {/* Tech category header */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg p-2 bg-secondary/55">
                    {category.icon}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
                    {category.title}
                  </h3>
                </div>

                {/* Compact Skills flex tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <m.span
                      key={skill}
                      whileHover={{ y: -2, borderColor: category.color }}
                      className="px-3 py-1.5 rounded-xl border border-primary text-xs font-semibold transition-all hover:bg-hover shadow-sm"
                      style={{
                        color: 'var(--text-primary)',
                        backgroundColor: 'var(--bg-secondary)'
                      }}
                    >
                      {skill}
                    </m.span>
                  ))}
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
