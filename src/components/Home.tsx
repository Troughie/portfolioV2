import { useRef } from "react";
import { animateSlowLoad } from "../Constant";
import { Github, Linkedin } from "../assets/icons";
import { motion as m, useInView } from "framer-motion";
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
      <Github className="size-8 cursor-pointer duration-300 hover:scale-110" />
    ),
  },
  {
    id: 2,
    button: (
      <Linkedin className="size-8 cursor-pointer duration-300 hover:scale-110" />
    ),
  },
];
const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const animateLeft = {
    initial: {
      x: 350,
      opacity: 0,
    },
    animate: isInView
      ? {
          x: 0,
          opacity: 1,
        }
      : {},
    transition: {
      duration: 0.5,
    },
  };

  const animateRight = {
    initial: {
      x: -330,
      opacity: 0,
    },
    animate: isInView
      ? {
          x: 0,
          opacity: 1,
        }
      : {},
  };

  return (
    <div className="relative top-10 h-screen w-full px-8 md:top-32">
      <div
        ref={ref}
        className="grid grid-cols-8 grid-rows-7 gap-4 md:grid-cols-4 md:grid-rows-5"
      >
        <m.div className="col-span-4 row-start-6 md:col-start-1 md:row-span-2 md:row-start-1">
          <p className="relative flex flex-col text-lg font-semibold md:text-4xl">
            <m.span
              {...animateLeft}
              className="md:name_home default_after relative inline-block"
            >
              Nguyen
            </m.span>
            <m.span
              {...animateLeft}
              transition={{
                duration: 1,
              }}
              className="inline-block"
            >
              Tien Ngoc
            </m.span>
          </p>
        </m.div>
        <m.div
          {...animateLeft}
          className="col-span-2 col-start-1 row-start-7 md:col-span-1 md:row-start-4"
        >
          <button className="relative cursor-pointer rounded-sm bg-white px-2 py-1 text-nowrap text-black duration-500 after:absolute after:top-0 after:left-0 after:-z-10 after:h-full after:w-0 after:origin-left after:rounded-sm after:bg-amber-400 after:transition-all after:duration-300 hover:scale-110 hover:after:w-full">
            Connect me
          </button>
        </m.div>
        {/* <div className="col-span-6 col-start-2 row-span-5 row-start-1 grid place-items-center md:col-span-2 md:col-start-2">
          <img
            src=""
            alt=""
            className="size-62 rounded-full bg-white md:size-82"
          />
        </div> */}
        <div className="col-span-2 col-start-7 row-span-3 row-start-5 md:col-start-3 md:row-span-5 md:row-start-1">
          <div className="flex h-full flex-col items-end justify-between">
            <ul className="text-end text-lg md:text-2xl">
              {itemLi.map(({ name, id }) => {
                return (
                  <m.li
                    {...animateSlowLoad(id)}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
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
