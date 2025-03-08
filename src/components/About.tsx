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
  return (
    <div ref={ref} className="h-screen px-8 relative w-full">
      <BreakCumb name="About" />

      <div className="absolute left-8 right-8 top-20 bottom-0 rounded-md opacity-70 bg-gradient-to-t from-[#242424] to-[#121212]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${Wave})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <div className="w-3/4 h-2/3 blur-sm backdrop-blur-xl absolute top-[200px] -left-[270px] translate-x-1/2" />
        <div className="w-3/4 h-2/3 absolute text-white top-[200px] left-[250px] px-4 grid grid-cols-6 grid-rows-5 gap-4">
          <m.div
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="col-span-3 row-span-3 col-start-1 row-start-2 flex flex-col gap-20 text-white"
          >
            <h1 className="text-4xl font-extrabold">I'm nguyen tien ngoc</h1>
            <span className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              numquam odit at esse amet architecto, ab soluta a sequi repellat
              non qui vero dicta unde, dolorem voluptate. Impedit, cupiditate
              iure?
            </span>
          </m.div>
          <div className="row-span-3 text-yellow-300 font-bold col-span-2 col-start-5 row-start-3">
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
                      className="flex gap-4 justify-start items-center"
                    >
                      {icon}{" "}
                      <span className="inline-block relative after:bg-amber-400 loadUnderline">
                        {name}
                      </span>
                    </a>
                  </m.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
