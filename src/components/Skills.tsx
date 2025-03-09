import { useRef } from "react";
import BreakCumb from "../commons/BreakCumb";
import CardSkill from "../commons/CardSkill";
import { useInView, motion as m } from "framer-motion";

interface SkillType {
  type: string;
  details: string;
}

const skills: SkillType[] = [
  {
    type: "Programming Languages",
    details: "JavaScript (ES6+), TypeScript, PHP, Java, C#",
  },
  {
    type: "Backend Development",
    details:
      "Node.js (Express.js, NestJS), PHP (Laravel), C# (ASP.NET Core), Java (Spring Boot)",
  },
  {
    type: "Frontend Development",
    details:
      "React.js (Redux, Redux Toolkit,Zustand), HTML, CSS, TailwindCSS, jQuery",
  },
  {
    type: "Database Management",
    details: "MySQL, MongoDB, SQL Server",
  },
  {
    type: "ORM & Query Builders",
    details: "Sequelize, Sequelize-CLI, Entity Framework,Mongoose",
  },
  {
    type: "API & Integration",
    details: "RESTful API, Postman, Redis Caching",
  },
  {
    type: "Development Tools & Workflow",
    details: "GitHub,Jira, Agile Methodology",
  },
];
const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  const calLengthElement = (index: number) => {
    if (index === 4) {
      return "col-start-3";
    }
    return "";
  };

  const initialBase = (index: number) => {
    const left = [0, 3, 5];
    const center = [1, 6];
    const right = [2, 4];
    if (left.includes(index)) {
      return { x: -500, opacity: 0 };
    }
    if (right.includes(index)) {
      return {
        x: 500,
        opacity: 0,
      };
    }
    if (center.includes(index)) {
      if (index === 1) {
        return {
          y: -500,
          opacity: 0,
        };
      } else {
        return {
          y: 500,
          opacity: 0,
        };
      }
    }
    return {};
  };
  return (
    <div className="relative flex h-screen w-full flex-col justify-center px-8">
      <div
        ref={ref}
        className="grid w-full grid-cols-3 gap-x-4 gap-y-10 md:h-full md:gap-4"
      >
        {skills.map(({ details, type }, index) => {
          initialBase(index);
          return (
            <m.div
              key={index}
              initial={{ ...initialBase(index) }}
              animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.3 * index }}
              className="flex h-full w-full items-center justify-center"
            >
              <CardSkill
                details={details}
                type={type}
                className={`${calLengthElement(index)}`}
              />
            </m.div>
          );
        })}
        <div className="col-start-2 row-start-2 grid place-items-center">
          <BreakCumb name="Skills" className="text-2xl font-bold" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
