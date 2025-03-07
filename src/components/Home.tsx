import { Github, Linkedin } from "../assets/icons";
import { motion as m } from "framer-motion";
interface props {
  name: string;
  id: number;
}

const itemLi: props[] = [
  {
    name: "Frontend",
    id: 1,
  },
  {
    name: "Backend",
    id: 2,
  },
  { name: "Fullstack", id: 3 },
];

const socialButton = [
  {
    id: 1,
    button: (
      <Github className="size-8 cursor-pointer hover:scale-110 duration-300 " />
    ),
  },
  {
    id: 2,
    button: (
      <Linkedin className="size-8 cursor-pointer hover:scale-110 duration-300 " />
    ),
  },
];
const Home = () => {
  const animateLeft = {
    initial: {
      x: 350,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    transition: {
      duration: 0.5,
    },
  };

  const animateRight = {
    initial: {
      x: -330,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="h-screen px-8 relative top-52 w-full">
      <div className="grid grid-cols-4 grid-rows-5 gap-4">
        <div className="row-span-2">
          <p className="text-4xl font-semibold relative">
            <m.span {...animateLeft} className="name_home block relative">
              Nguyen
            </m.span>
            <m.span
              {...animateLeft}
              transition={{
                duration: 1,
              }}
              className="block"
            >
              Tien Ngoc
            </m.span>
          </p>
        </div>
        <m.div {...animateLeft} className="col-start-1 row-start-4">
          <button className="relative bg-white text-black rounded-sm px-2 py-1 cursor-pointer after:absolute after:top-0 after:left-0 after:w-0 after:h-full after:bg-amber-400 after:-z-10 after:duration-300 after:rounded-sm hover:after:w-full after:transition-all after:origin-left duration-500 hover:scale-110">
            Hire me
          </button>
        </m.div>
        <div className="col-span-2 inline-grid justify-center items-center row-span-5 col-start-2 row-start-1">
          <img src="" alt="" className="size-72 bg-white rounded-full" />
        </div>
        <div className="row-span-5 col-start-4 row-start-1">
          <div className="flex justify-between h-full flex-col items-end">
            <ul className="text-end text-2xl">
              {itemLi.map(({ name, id }) => {
                return (
                  <m.li
                    initial={{
                      x: -330,
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.3 * id,
                      ease: "easeInOut",
                    }}
                    key={id}
                    className="odd:py-4"
                  >
                    {name}
                  </m.li>
                );
              })}
            </ul>
            <div className="flex gap-4">
              {socialButton.map((item) => {
                return (
                  <m.div
                    {...animateRight}
                    transition={{
                      duration: 0.5 * item.id,
                    }}
                    key={item.id}
                  >
                    {item.button}
                  </m.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
