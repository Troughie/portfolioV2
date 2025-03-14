import { ReactNode, useRef } from "react";
import { animateSlowLoad } from "../Constant";
import { Wave } from "../assets";
import { motion as m, useInView } from "framer-motion";
import { Mail, Phone } from "../assets/icons";
import BreadCrumb from "../commons/BreadCrumb";
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
    <div id="About" className="relative min-h-screen w-full px-8">
      <BreadCrumb name="About" />
      <div
        ref={ref}
        className="relative bottom-0 min-h-screen w-full rounded-md bg-gradient-to-t from-[#242424] to-[#121212] opacity-70"
        style={{
          backgroundImage: `url(${Wave})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-[50%] left-[50%] h-2/3 w-full -translate-1/2 blur-sm backdrop-blur-xl md:w-3/4" />
        <div className="absolute top-[50%] left-[50%] grid w-full -translate-1/2 grid-cols-1 gap-4 px-4 text-center text-white sm:w-3/4 sm:grid-cols-6">
          <m.div
            {...animateEaseText}
            className="col-span-6 row-span-2 row-start-6 grid place-items-center gap-20 text-white md:col-span-3"
          >
            <h1 className="text-lg font-extrabold md:text-2xl">
              The greatest ideas are the simplest
            </h1>
          </m.div>
          <div className="col-span-6 col-start-1 row-span-2 row-start-5 line-clamp-1 grid place-items-center items-center overflow-hidden font-bold overflow-ellipsis text-yellow-300 md:col-span-2 md:col-start-5 md:row-start-6">
            <ul>
              {socialList.map(({ id, name, icon }) => {
                const hrf = id === 2 ? `mailto:${name}` : `tel:${name}`;
                return (
                  <m.li
                    {...animateSlowLoad(id)}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    key={id}
                    className="font-sans odd:py-4"
                  >
                    <a
                      href={hrf}
                      className="flex w-full items-center justify-start gap-4"
                    >
                      {icon}
                      <span className="loadUnderline relative inline-block after:bg-yellow-400">
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
            className="col-span-6 col-start-1 row-span-5 row-start-1 grid place-items-center font-semibold"
          >
            Hello! I am a Software Engineer with one year of experience in
            software development. I am proficient in both backend and frontend
            development, specializing in ReactJs,Nodejs(ExpressJs).
            <span>
              I am passionate about building efficient applications with
              optimized performance and great user experiences. I have developed
              various real-world projects, including restaurant management
              systems, e-commerce platforms, financial management applications,
              and real-time chat features.
            </span>{" "}
            <span>
              Always eager to learn new technologies, I strive to work in a
              challenging and creative environment to enhance my skills. If
              you're looking for a dedicated and responsible developer, feel
              free to reach out to me!
            </span>
          </m.span>
        </div>
      </div>
    </div>
  );
};

export default About;
