import Button from "../commons/Button";
import Divider from "../commons/Divider";
import cn from "../ultils";
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
  const Projects: ProjectProps[] = [
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
        "This is a project I worked on during my internship. It was my first time joining a real-world project, so I learned a lot—from optimizing hooks to using Mongoose efficiently. Although I finished my internship before the project was completed, it helped me gain valuable experience. Since this is a real-world project and hasn't been released yet, I can't share the link or the code publicly.",
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
        "This is my graduation project. I'm not quite satisfied with it yet, in terms of performance, design, and its overall results. In this application, you can manage your expenses, list your income and expenses for the month, and it will automatically calculate the remaining balance. You can also create a monthly budget and share it with your family for easier management. It also uses Firebase for real-time chat, allowing you to communicate with those who share the wallet. I haven't hosted it yet, so it's just a code demo for now :))",
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
        "My second project is an e-commerce website built using PHP and Laravel for development, with MySQL as the database. It was a two-person project, and while it's not polished enough to be a fully completed product, it still gave me valuable experience with PHP—even though I prefer JavaScript.",
      name: "Money lover",
      tech: ["Php", "Laravel", "Mysql", "Jquery", "Javascript", "Bootstrap"],
      img: [CLarge, CMedium, CSmall],
      link: "https://github.com/Troughie/apcake",
    },
    {
      description:
        "This is my first website made in school, using simple html and css with bootstrap to design the interface, jquery to do the page loading, it's simple but i'm happy that i and my friends completed it.",
      name: "Fanimation",
      tech: ["html", "css", "jquery", "bootstrap"],
      img: [FanLarge, FanMedium, FanSmall],
      demo: "https://troughie.github.io/eProject/",
    },
  ];

  return (
    <div className="h-auto min-h-screen px-8">
      <h1 className="text-4xl font-bold">Some of my work</h1>
      {Projects.map(
        ({ description, img, name, tech, demo, link, backendLink }, index) => (
          <div key={index} className="mt-[100px]">
            <Divider />
            <div className="h-full w-full font-sans">
              <div className="relative h-[450px] w-full">
                {img.map((e, index) => (
                  <img
                    key={index}
                    src={e}
                    alt=""
                    className={cn(
                      `absolute max-h-[450px] z-${index + 1} right-0 bottom-0 object-cover transition-opacity duration-500`,
                      index === 0 && "left-0 h-full w-[80%]",
                      index === 1 && "right-10 h-[60%] md:h-[80%]",
                      index === 2 && "h-[50%] md:h-[70%]",
                    )}
                  />
                ))}
              </div>
              <div className="mt-8 ml-4 flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-xl font-bold uppercase">{name}</h2>
                <div className="flex items-center justify-between gap-4">
                  {demo && (
                    <a href={demo} target="_blank">
                      <Button name="Demo" />
                    </a>
                  )}
                  {link && (
                    <a href={link} target="_blank">
                      <Button name="Code" />
                    </a>
                  )}
                  {backendLink && (
                    <a href={backendLink} target="_blank">
                      <Button name="Backend" />
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-4 ml-4 flex flex-col gap-4">
                <div>{description}</div>
                <ul className="flex flex-wrap gap-4">
                  {tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-sm border border-[#333] bg-[#333] px-[7px] pt-[7px] pb-[5px] text-[10px] font-medium text-[#777]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default Projects;
