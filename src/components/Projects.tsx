import { useRef, useState } from "react";
import Button from "../commons/Button";
import cn from "../ultils";
import { motion as m, useInView, AnimatePresence } from "framer-motion";
import {
  FanLarge,
  FanMedium,
  FanSmall,
  MLarge,
  MMedium,
  MSmall,
  KLarge,
  KMedium,
  KSmall,
  CLarge,
  CMedium,
  CSmall,
  PLarge,
  PMedium,
  PSmall,
} from "../assets";

interface ProjectProps {
  name: string;
  description: string;
  tech: string[];
  img: string[];
  link?: string;
  demo?: string;
  backendLink?: string;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeProject, setActiveProject] = useState(0);
  const [direction, setDirection] = useState(0);

  const ProjectsList: ProjectProps[] = [
    {
      description: "This is my portfolio :))",
      name: "Portfolio",
      tech: [
        "ReactJs",
        "TailwindCss",
        "FireBase",
        "Typescript",
        "Framer-motion",
        "Zustand",
      ],
      img: [PLarge, PMedium, PSmall],
      link: "https://github.com/Troughie/portfolioV2",
    },
    {
      description:
        "This is a project I worked on during my internship. It was my first time joining a real-world project, so I learned a lot—from optimizing hooks to using Mongoose efficiently.",
      name: "Kolv game web",
      tech: [
        "ReactJs",
        "TailwindCss",
        "Antd",
        "FireBase",
        "NestJs",
        "Redis",
        "Typescript",
        "MongoDb",
      ],
      img: [KLarge, KMedium, KSmall],
    },
    {
      description:
        "This is my graduation project. In this application, you can manage your expenses, list your income and expenses for the month, and it will automatically calculate the remaining balance.",
      name: "Money lover",
      tech: [
        "ReactJs",
        "TailwindCss",
        "FireBase",
        "Spring boot",
        "Java",
        "Redis",
        "Typescript",
        "Mysql",
        "Framer-motion",
      ],
      img: [MLarge, MMedium, MSmall],
      link: "https://github.com/Troughie/MoneyLover",
      backendLink: "https://github.com/Troughie/easymoney",
    },
    {
      description:
        "My second project is an e-commerce website built using PHP and Laravel for development, with MySQL as the database.",
      name: "Cake Shop",
      tech: ["Php", "Laravel", "Mysql", "Jquery", "Javascript", "Bootstrap"],
      img: [CLarge, CMedium, CSmall],
      link: "https://github.com/Troughie/apcake",
    },
    {
      description:
        "This is my first website made in school, using simple html and css with bootstrap to design the interface.",
      name: "Fanimation",
      tech: ["html", "css", "jquery", "bootstrap"],
      img: [FanLarge, FanMedium, FanSmall],
      demo: "https://troughie.github.io/eProject/",
    },
  ];

  const paginate = (newDirection: number) => {
    if (!ProjectsList.length) return;

    setDirection(newDirection);
    setActiveProject((prev) => {
      const next = prev + newDirection;

      if (next < 0) return ProjectsList.length - 1;
      if (next >= ProjectsList.length) return 0;

      return next;
    });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 260 : -260,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 260 : -260,
      opacity: 0,
      scale: 0.96,
    }),
  };

  const project = ProjectsList[activeProject];

  return (
    <div 
      ref={ref}
      className="flex min-h-screen w-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center sm:mb-8"
        >
          <h1 
            className="mb-3 text-3xl font-bold sm:mb-4 sm:text-4xl lg:text-5xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Featured Projects
          </h1>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"></div>
        </m.div>

        {/* Horizontal Scroll Container */}
        <div className="relative pb-4">
          {/* Navigation Arrows */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <button
              onClick={() => paginate(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100"
              style={{ 
                backgroundColor: 'var(--bg-card)',
                border: '2px solid var(--border-primary)',
                color: 'var(--text-primary)'
              }}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {ProjectsList.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeProject ? 1 : -1);
                    setActiveProject(index);
                  }}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: activeProject === index ? '32px' : '8px',
                    backgroundColor: activeProject === index ? 'var(--accent-primary)' : 'var(--border-secondary)',
                  }}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100"
              style={{ 
                backgroundColor: 'var(--bg-card)',
                border: '2px solid var(--border-primary)',
                color: 'var(--text-primary)'
              }}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Projects Carousel */}
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <m.div
                key={activeProject}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", duration: 0.35, ease: "easeInOut" },
                  opacity: { duration: 0.25 },
                  scale: { duration: 0.25 },
                }}
                className="w-full px-4"
              >
                <div
                  className="group overflow-hidden rounded-2xl shadow-2xl"
                  style={{ 
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-primary)'
                  }}
                >
                  <div className="grid gap-8 lg:grid-cols-2">
                    {/* Image Section */}
                    <div className="relative h-72 overflow-hidden sm:h-96 lg:h-[500px]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                      {project.img.map((img, imgIndex) => (
                        <m.img
                          key={imgIndex}
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: imgIndex * 0.1 }}
                          src={img}
                          alt={`${project.name} screenshot ${imgIndex + 1}`}
                          className={cn(
                            "absolute object-cover transition-all duration-700 group-hover:scale-105",
                            imgIndex === 0 && "left-0 h-full w-[70%] rounded-r-2xl shadow-2xl",
                            imgIndex === 1 && "right-4 bottom-4 h-[60%] w-[40%] rounded-xl shadow-xl",
                            imgIndex === 2 && "right-8 bottom-8 h-[50%] w-[32%] rounded-lg shadow-lg",
                          )}
                        />
                      ))}
                    </div>

                    {/* Content Section */}
                    <div className="flex max-h-[420px] flex-col justify-center p-6 sm:max-h-[460px] sm:p-8 lg:max-h-none lg:p-12">
                      <m.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-4 text-3xl font-bold lg:text-4xl"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {project.name}
                      </m.h2>

                      <m.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mb-4 text-base leading-relaxed text-secondary line-clamp-4-md sm:mb-6 sm:text-lg"
                      >
                        {project.description}
                      </m.p>

                      {/* Tech Stack */}
                      <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mb-6"
                      >
                        <h3 
                          className="mb-3 text-sm font-semibold uppercase tracking-wide"
                          style={{ color: 'var(--text-tertiary)' }}
                        >
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, techIndex) => (
                            <m.span
                              key={t}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.5 + techIndex * 0.05 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="rounded-lg px-3 py-1.5 text-sm font-medium shadow-sm transition-all"
                              style={{ 
                                backgroundColor: 'var(--bg-hover)',
                                color: 'var(--accent-primary)',
                                border: '1px solid var(--border-secondary)'
                              }}
                            >
                              {t}
                            </m.span>
                          ))}
                        </div>
                      </m.div>

                      {/* Action Buttons */}
                      <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-wrap gap-3"
                      >
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noreferrer">
                            <Button name="Live Demo" />
                          </a>
                        )}
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noreferrer">
                            <Button name="View Code" />
                          </a>
                        )}
                        {project.backendLink && (
                          <a href={project.backendLink} target="_blank" rel="noreferrer">
                            <Button name="Backend" />
                          </a>
                        )}
                      </m.div>
                    </div>
                  </div>
                </div>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
