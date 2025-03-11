import { useRef } from "react";
import { motion as m, useInView } from "framer-motion";
import Divider from "../commons/Divider";
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
      "  Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
    time: "Mar — Sep 2024",
    positions: ["Backend", "Frontend"],
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
  {
    name: "Ebizworld",
    link: "https://ebizworldsolutions.com/",
    description:
      "  Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
    time: "Mar — Sep 2024",
    positions: ["Backend", "Frontend"],
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
  const isInView = useInView(ref, { once: false });
  return (
    <div id="Experience" ref={ref} className="min-h-screen w-full px-8">
      <h1 className="text-4xl">Experience</h1>
      <Divider />
      {experiences.map(
        ({ description, link, name, positions, techs, time }, index) => {
          return (
            <div
              key={index}
              className="group relative mt-6 mb-12 grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <m.header
                initial={{
                  x: 100,
                  display: "none",
                  opacity: 0,
                }}
                animate={
                  isInView
                    ? {
                        x: 0,
                        opacity: 1,
                        display: "block",
                      }
                    : {}
                }
                transition={{ duration: 1 }}
                className="z-10 mt-1 mb-2 inline-block w-1/2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2"
                aria-label="2018 to 2024"
              >
                {time}
              </m.header>
              <m.div
                initial={{
                  y: 200,
                  opacity: 0,
                }}
                animate={
                  isInView
                    ? {
                        y: 0,
                        opacity: 1,
                      }
                    : {}
                }
                transition={{
                  duration: 1,
                }}
                className="z-10 sm:col-span-6"
              >
                <h3 className="leading-snug font-medium text-slate-200">
                  <div>
                    <a
                      className="group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Ebizworld"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {name}
                        <span className="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                  {positions.map((pos) => (
                    <div key={pos}>
                      <div className="text-slate-500" aria-hidden="true">
                        {pos}
                      </div>
                    </div>
                  ))}
                </h3>
                <p className="mt-2 text-sm leading-normal">{description}</p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {techs.map((tech) => (
                    <li key={tech.name} className="mt-2 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
                        {tech.name}
                      </div>
                    </li>
                  ))}
                </ul>
              </m.div>
            </div>
          );
        },
      )}
    </div>
  );
};

export default Experience;
