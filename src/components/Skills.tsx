import { ReactNode } from "react";
import { Check, Light, Setting } from "../assets/icons";
import Divider from "../commons/Divider";

interface Title {
  name: string;
  icon: ReactNode;
}
interface ToolsAndKnow {
  title: Title;
  techs: string[];
}
const Skills = () => {
  const Developers = [
    "Javascript",
    "Html",
    "css",
    "tailwind",
    "NodeJs",
    "ExpressJs",
    "NestJs",
    "Java",
    "Php",
    "Asp .net",
  ];
  const Tools: ToolsAndKnow[] = [
    {
      title: { icon: <Setting />, name: "Tools" },
      techs: [
        "Git + Github",
        "Command line",
        "PostMan",
        "Chrome Devtools",
        "Jira",
      ],
    },
    {
      title: { icon: <Light />, name: "Knowledge" },
      techs: ["CSS Detangling", "ECMAScript 6", "Usability", "SEO"],
    },
  ];
  return (
    <div className="min-h-screen w-full px-8 pb-10">
      <h1 className="text-4xl">Skills</h1>
      <Divider />
      <div className="flex w-full flex-wrap justify-between gap-6">
        <div className="flex max-w-1/2 flex-col gap-6">
          <h3 className="flex items-center justify-start gap-2">
            <Setting />
            <span className="text-lg uppercase">Developer</span>
          </h3>
          <ul className="flex flex-wrap gap-4">
            {Developers.map((e) => (
              <li
                key={e}
                className="grid size-[90px] place-items-center rounded-full border p-4 text-center text-sm"
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-10 font-sans">
          {Tools.map(({ techs, title }) => (
            <div key={title.name}>
              <h3 className="mb-5 flex items-center gap-2 text-lg font-bold uppercase">
                {title.icon}
                <span>{title.name}</span>
              </h3>
              <ul className="text-sm">
                {techs.map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <Check className="size-6" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
