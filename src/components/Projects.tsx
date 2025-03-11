import Button from "../commons/Button";
import Divider from "../commons/Divider";
import cn from "../ultils";

interface ProjectProps {
  name: string;
  description: string;
  tech: string[];
  img: string;
  link: string;
  demo: string;
}

const Projects = () => {
  const Projects: ProjectProps[] = [
    {
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat est laudantium repellendus eveniet voluptatibus alias quaerat sed odio labore, placeat possimus laboriosam facere necessitatibus vel maiores ullam quidem impedit esse",
      name: "Quiz game",
      tech: ["ReactJs", "TailwindCss", "FireBase"],
      img: "https://plus.unsplash.com/premium_photo-1689976326559-b2bce4efeb62?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "",
      demo: "",
    },
  ];
  return (
    <div className="h-auto min-h-screen px-8">
      <h1 className="text-4xl font-bold">Some of my work</h1>
      {Projects.map(({ description, img, name, tech }, index) => (
        <div key={index} className="mt-[100px]">
          <Divider />
          <div className="h-full w-full font-sans">
            <div className="relative block w-full">
              <img src={img} alt="" className={cn(`max-h-[450px] w-full`)} />
            </div>
            <div className="mt-8 ml-4 flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-xl font-bold uppercase">{name}</h2>
              <div className="flex items-center justify-between gap-4">
                <Button name="Demo" />
                <Button name="Code" />
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
