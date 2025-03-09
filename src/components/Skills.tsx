import CardSkill from "../commons/CardSkill";

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
  const calLengthElement = (index: number) => {
    if (index === 0) return "";

    const lengthArray = skills.length;
    const midPoint = Math.ceil(lengthArray / 2);

    if (index < midPoint) {
      return `col-start-${index * 2 + 1}`;
    }

    const positions = {
      5: "row-start-2 col-start-4",
      6: "row-start-2 col-start-7",
    };

    return positions[index as keyof typeof positions] || "";
  };
  return (
    <div className="h-screen px-8 w-full relative flex flex-col justify-around">
      <div className="grid grid-cols-8 grid-rows-2 gap-4">
        {skills.map(({ details, type }, index) => {
          return (
            <CardSkill
              key={index}
              details={details}
              type={type}
              className={`col-span-2 ${calLengthElement(index)}`}
            />
          );
        })}
      </div>
      {/* <div className="relative flex justify-center">
        <BreakCumb name="Skills" className="text-2xl font-bold" />
      </div> */}
    </div>
  );
};

export default Skills;
