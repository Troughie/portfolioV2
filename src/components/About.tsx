import { ReactNode, useRef } from "react";
import { animateSlowLoad } from "../Constant";
import { Wave } from "../assets";
import BreakCumb from "../commons/BreakCumb";
import { motion as m, useInView } from "framer-motion";
import { Mail, Phone } from "../assets/icons";
interface props {
  name: string;
  id: number;
  icon: ReactNode;
}
const socialList: props[] = [
  {
    name: "0383618054",
    icon: <Phone className="size-5" />,
    id: 1,
  },
  {
    name: "ngocnguyen29061@gmail.com",
    icon: <Mail className="size-5" />,
    id: 2,
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const animateEaseText = {
    initial: { y: 100, opacity: 0 },
    animate: isInView ? { y: 0, opacity: 1 } : {}, // Định nghĩa hợp lệ
    transition: { duration: 1, ease: "easeOut" },
  };
  return (
    <div className="relative h-screen w-full px-8">
      <BreakCumb name="About" />

      <div
        ref={ref}
        className="absolute top-20 right-8 bottom-0 left-8 rounded-md bg-gradient-to-t from-[#242424] to-[#121212] opacity-70"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url(${Wave})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute top-[50%] left-[50%] h-2/3 w-full -translate-1/2 blur-sm backdrop-blur-xl md:w-3/4" />
        <div className="absolute top-[50%] left-[50%] grid h-2/3 w-full -translate-1/2 grid-cols-6 grid-rows-6 gap-4 px-4 text-center text-white md:w-3/4 md:grid-rows-5">
          <m.div
            {...animateEaseText}
            className="col-span-6 row-span-2 row-start-1 grid place-items-center gap-20 text-white md:col-span-3 md:row-start-2"
          >
            <h1 className="text-lg font-extrabold md:text-2xl">
              The efforts of an anonymous good person are like underground
              water, silently making the ground green.
            </h1>
          </m.div>

          <div className="col-span-6 col-start-1 row-span-1 row-start-5 line-clamp-1 grid place-items-center overflow-hidden font-bold overflow-ellipsis text-yellow-300 md:col-span-2 md:col-start-5 md:row-start-2">
            <ul>
              {socialList.map(({ id, name, icon }) => {
                const hrf = id === 2 ? `mailto:${name}` : `tel:${name}`;
                return (
                  <m.li
                    {...animateSlowLoad(id)}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    key={id}
                    className="odd:py-4"
                  >
                    <a
                      href={hrf}
                      className="flex w-full items-center justify-start gap-4"
                    >
                      {icon}
                      <span className="loadUnderline relative inline-block after:bg-amber-400">
                        {name}
                      </span>
                    </a>
                  </m.li>
                );
              })}
            </ul>
          </div>
          <m.span
            {...animateEaseText}
            className="col-span-6 col-start-1 row-start-3 grid place-items-center font-semibold md:col-span-3 md:row-start-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            numquam odit at esse amet architecto, ab soluta a sequi repellat non
            qui vero dicta unde, dolorem voluptate. Impedit, cupiditate iure?
          </m.span>
        </div>
      </div>
    </div>
  );
};

export default About;
