import { useCallback, useRef } from "react";
import { Star } from "../assets";
import { useHasScrolledFromTop } from "../ultils";
import { motion as m } from "framer-motion";
import { ArrowDown, ArrowNext, ArrowPrev } from "../assets/icons";
import { Link } from "react-scroll";
const HomeV2 = () => {
  const { widthScroll } = useHasScrolledFromTop();
  const inTroRef = useRef(null);

  const calWidth = useCallback(() => {
    if (Math.abs(widthScroll / 10) >= 100) {
      return 100;
    } else {
      return Math.abs(widthScroll / 10);
    }
  }, [widthScroll]);

  return (
    <div
      id="Intro"
      className="relative flex h-screen w-screen flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${Star})`,
        backgroundSize: "cover",
        backgroundPosition: `50% ${calWidth()}%`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div ref={inTroRef} className="flex flex-col gap-1 text-center">
        <m.h1
          initial={{
            y: 100,
            opacity: 0,
            clipPath: "inset(100% 0 0 0)", // Ẩn toàn bộ nội dung
          }}
          animate={{
            y: 0,
            opacity: 1,
            clipPath: "inset(0% 0 0 0)", // Dần hiện ra từ dưới lên
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="pb-8 text-6xl font-bold"
        >
          Nguyen Tien Ngoc
        </m.h1>

        <m.div
          className="flex h-[3px] origin-center bg-white"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          exit={{ scaleX: 0, opacity: 0 }}
          transition={{
            duration: 1,
            repeatType: "reverse",
            repeat: 1,
            ease: "easeInOut",
          }}
        ></m.div>
        <m.h3
          initial={{ y: -100, opacity: 0, clipPath: "inset(100% 0 0 0)" }}
          animate={{
            y: 0,
            opacity: 1,
            clipPath: "inset(0% 0 0 0)",
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="pt-8 uppercase"
        >
          Front end - Back end software engineer
        </m.h3>
      </div>
      <Link to="About" className="w-full" smooth={true} duration={1000}>
        <m.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileHover="hover"
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          className="absolute bottom-12 flex w-full cursor-pointer items-center justify-center"
        >
          <m.div
            variants={{ hover: { opacity: 0, x: 10 } }}
            transition={{ duration: 0.6 }}
            className="absolute top-0 translate-x-1/2"
          >
            <ArrowNext className="size-10" />
          </m.div>
          <m.div
            className="absolute -bottom-12 flex translate-x-4 flex-col items-center justify-center text-lg"
            initial={{ opacity: 0 }}
            variants={{ hover: { opacity: 1 } }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
          >
            Learn more...
            <ArrowDown className="size-10 -translate-x-2" />
          </m.div>
          <m.div
            variants={{ hover: { opacity: 0, x: -10 } }}
            transition={{ duration: 0.6, repeatType: "reverse" }}
            className="absolute top-0"
          >
            <ArrowPrev className="size-10" />
          </m.div>
        </m.div>
      </Link>
    </div>
  );
};

export default HomeV2;
