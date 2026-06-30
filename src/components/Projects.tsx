import { useRef, useState } from "react";
import Button from "../commons/Button";
import cn from "../ultils";
import { motion as m, useInView, AnimatePresence } from "framer-motion";
import {
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
  EXLarge,
  EXSmall
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
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeIdx, setActiveIdx] = useState(0);

  const ProjectsList: ProjectProps[] = [
    {
      name: "Manga Translator",
      description: "An end-to-end computer vision pipeline using RT-DETR for bubble detection, Florence-2 for OCR, and LaMa for inpainting text overlay. Achieved fulltoon page translation speeds of 4.9s on an RTX 5060 Ti, improving inference latency by 3.8x via torch.compile, batching, and INT8 quantization. Powered by FastAPI backend and an MV3 Chrome extension.",
      tech: [
        "Python",
        "PyTorch",
        "ONNX Runtime",
        "FastAPI",
        "JavaScript",
        "Chrome Extension"
      ],
      img: [EXLarge, EXSmall],
      link: "https://github.com/Troughie",
    },
    {
      name: "MacroDeck",
      description: "A cross-process desktop application (StreamDeck alternative) that turns any keyboard into a dedicated macro device. Integrated a kernel-level node-interception driver supporting up to 10 simultaneous keyboards with full keystroke suppression. Shipped a drag-and-drop UI with 6 macro action types, bridged via IPC to WASAPI audio control.",
      tech: [
        "Electron",
        "React.js",
        "TypeScript",
        "Zustand",
        "TailwindCSS",
        "Framer Motion",
        "C#"
      ],
      img: [],
      link: "https://github.com/Troughie",
    },
    {
      name: "Real-Time Quiz App",
      description: "A full-stack, real-time multiplayer quiz platform built from scratch. Features RESTful APIs (Node.js/Express) and Socket.IO for quiz-state sync and player room management. Features a highly dynamic React.js frontend with TailwindCSS, Ant Design, and Framer Motion animations, containerized with Docker/Docker Compose.",
      tech: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.IO",
        "Supabase",
        "JWT",
        "Docker"
      ],
      img: [],
      link: "https://github.com/Troughie",
    },
    {
      description: "A highly customizable personal portfolio site crafted with React, TypeScript, TailwindCSS, and Framer Motion. Features dark/light themes, 3D animated interactive tech-stack canvas nodes, and custom state management with Zustand.",
      name: "Portfolio V2",
      tech: [
        "React.js",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
        "Zustand",
      ],
      img: [PLarge, PMedium, PSmall],
      link: "https://github.com/Troughie/portfolioV2",
    },
    {
      description:
        "Developed during Ebizworld software engineering internship. Designed to facilitate interactive gaming rooms. Leveraging NestJS for REST APIs and React.js with TypeScript for the frontend, reducing MongoDB retrieve latencies by 40%.",
      name: "Kolv Game Web",
      tech: [
        "React.js",
        "TypeScript",
        "TailwindCSS",
        "Ant Design",
        "NestJS",
        "MongoDB",
        "Redis"
      ],
      img: [KLarge, KMedium, KSmall],
    },
    {
      description:
        "Academic ADSE graduation project. An all-in-one personal finance microservices application Budgets spending tracking and categorizations. Built using a robust Spring Boot microservice architecture and a React frontend.",
      name: "Money Lover",
      tech: [
        "React.js",
        "TypeScript",
        "TailwindCSS",
        "Java",
        "Spring Boot",
        "MySQL",
        "Redis"
      ],
      img: [MLarge, MMedium, MSmall],
      link: "https://github.com/Troughie/MoneyLover",
      backendLink: "https://github.com/Troughie/easymoney",
    },
    {
      description:
        "An ecommerce cake store backend and frontend solution built utilizing PHP and Laravel framework. Implements product catalog management, cart flows, secure checkout, and MySQL database relation schemas.",
      name: "Ap Cake Shop",
      tech: ["Php", "Laravel", "Mysql", "Jquery", "Javascript", "Bootstrap"],
      img: [CLarge, CMedium, CSmall],
      link: "https://github.com/Troughie/apcake",
    },
  ];

  const currentProject = ProjectsList[activeIdx];

  return (
    <div
      ref={ref}
      className="flex min-h-screen w-full items-center justify-center px-6 py-12 sm:px-8 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl h-full flex flex-col justify-center">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center lg:text-left"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">// Showcase</span>
          <h2
            className="mt-2 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Featured Projects
          </h2>
          <div className="mt-4 h-[3px] w-20 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary lg:hidden"></div>
        </m.div>

        {/* Split Layout Container */}
        <div className="grid gap-6 lg:grid-cols-12 items-stretch max-h-none lg:max-h-[60vh]">

          {/* Left Column: Interactive Project Selector List (3 cols) */}
          <div
            className="lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto pb-4 lg:pb-0 pr-0 lg:pr-3 max-h-[120px] lg:max-h-none"
            data-scroll-lock="false"
          >
            {ProjectsList.map((project, idx) => {
              const isActive = activeIdx === idx;
              return (
                <m.button
                  key={project.name}
                  onClick={() => setActiveIdx(idx)}
                  className={cn(
                    "flex flex-col text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer min-w-[200px] lg:min-w-0 flex-shrink-0 lg:flex-shrink",
                    isActive
                      ? "border-accent-primary bg-hover shadow-md font-bold"
                      : "border-primary bg-card hover:bg-hover/50"
                  )}
                  whileHover={{ x: isActive ? 0 : 3 }}
                >
                  <h3 className="text-sm font-bold truncate" style={{ color: isActive ? 'var(--accent-primary)' : 'var(--text-primary)' }}>
                    {project.name}
                  </h3>

                  <div className="hidden lg:flex flex-wrap gap-1 mt-2">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-[9px] font-bold px-1.5 py-0.5 rounded border border-primary bg-secondary/40 text-tertiary uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </m.button>
              );
            })}
          </div>

          {/* Right Column: Active Project Details Showcase (9 cols) */}
          <div className="lg:col-span-9 flex flex-col justify-between border border-primary rounded-2xl bg-card p-6 shadow-lg overflow-hidden min-h-[380px] lg:min-h-0">
            <AnimatePresence mode="wait">
              <m.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col justify-between"
              >
                <div className="grid gap-6 md:grid-cols-2 items-start h-full">
                  {/* Screenshots Stack Visual */}
                  <div className="relative h-44 sm:h-52 md:h-60 lg:h-full min-h-[220px] rounded-xl overflow-hidden bg-secondary/35 border border-primary flex items-center justify-center">
                    {currentProject.img && currentProject.img.length > 0 ? (
                      currentProject.img.map((img, imgIndex) => (
                        <m.img
                          key={imgIndex}
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1, transition: { duration: 0.4, delay: imgIndex * 0.08 } }}
                          whileHover={{ scale: 1.08, zIndex: 10, transition: { duration: 0.2 } }}
                          src={img}
                          alt={`${currentProject.name} screenshot ${imgIndex + 1}`}
                          className={cn(
                            "absolute object-cover cursor-zoom-in",
                            imgIndex === 0 && "left-0 h-full w-[70%] rounded-r-xl shadow-md border-r border-primary",
                            imgIndex === 1 && "right-3 bottom-3 h-[60%] w-[40%] rounded-lg shadow-sm border border-primary",
                            imgIndex === 2 && "right-6 bottom-6 h-[50%] w-[32%] rounded-md shadow-xs border border-primary",
                          )}
                        />
                      ))
                    ) : (
                      <div className="flex flex-col items-center justify-center p-6 text-center select-none space-y-3">
                        <div className="h-12 w-12 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent" style={{ color: 'var(--accent-primary)' }}>
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="text-xs font-bold font-mono text-secondary" style={{ color: 'var(--text-tertiary)' }}>
                          NO PREVIEW IMAGE
                        </div>
                        <div className="text-[10px] text-tertiary" style={{ color: 'var(--text-tertiary)' }}>
                          Code repository available below
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Info details */}
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-accent">// Project Details</span>
                      <h3 className="text-xl font-black mt-1 mb-3" style={{ color: 'var(--text-primary)' }}>
                        {currentProject.name}
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                        {currentProject.description}
                      </p>

                      {/* Tech stack badges */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1.5">
                          {currentProject.tech.map((t) => (
                            <span
                              key={t}
                              className="text-[9px] font-bold px-2 py-0.5 rounded border border-primary text-accent bg-secondary/20"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2.5 pt-4 border-t border-primary mt-auto">
                      {currentProject.demo && (
                        <a href={currentProject.demo} target="_blank" rel="noreferrer" className="flex-1 min-w-[90px]">
                          <Button name="Live Demo" />
                        </a>
                      )}
                      {currentProject.link && (
                        <a href={currentProject.link} target="_blank" rel="noreferrer" className="flex-1 min-w-[90px]">
                          <Button name="View Code" />
                        </a>
                      )}
                      {currentProject.backendLink && (
                        <a href={currentProject.backendLink} target="_blank" rel="noreferrer" className="flex-1 min-w-[90px]">
                          <Button name="Backend" />
                        </a>
                      )}
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
