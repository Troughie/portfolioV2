import Button from "../commons/Button";
import Divider from "../commons/Divider";
import cn from "../ultils";
import { FanLarge, FanMedium, FanSmall } from "../assets";
interface ProjectProps {
  name: string;
  description: string;
  tech: string[];
  img: string[];
  link?: string;
  demo?: string;
}

const Projects = () => {
  const Projects: ProjectProps[] = [
    {
      description:
        " Using reactJs tailwind firebase to build a quiz game app, you can create a quiz invite friend to join, doing some quiz of friend",
      name: "Quiz game",
      tech: ["ReactJs", "TailwindCss", "FireBase"],
      img: [
        "https://plus.unsplash.com/premium_photo-1689976326559-b2bce4efeb62?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
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
      {Projects.map(({ description, img, name, tech, demo, link }, index) => (
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
      ))}
    </div>
  );
};

export default Projects;
