import { AnimatePresence, motion as m } from "framer-motion";
import { navbarItems } from "../Constant";
import cn, { ResizeScreen } from "../ultils";
import { useCallback, useEffect, useState } from "react";
import { Bars, Close } from "../assets/icons";

interface props {
  scrolled: boolean;
}
const Navbar = ({ scrolled }: props) => {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <>
      <m.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={cn(
          "bg-bg sticky top-0 z-[99] flex w-screen max-w-full min-w-screen items-center justify-between px-2 pt-4 pb-2 md:px-10 md:pt-8",
          scrolled && "shadow-lg shadow-white",
        )}
      >
        <div className="flex items-center gap-2">
          <img src="" alt="" className="size-20 rounded-full bg-white" />
          <span>Tngoc</span>
        </div>
        {NavbarDesktop(showNav, setShowNav)}
      </m.div>
    </>
  );
};

const NavbarDesktop = (
  showNav: boolean,
  setShowNav: (showNav: boolean) => void,
) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [className, setClassName] = useState<string>("");
  const { w } = ResizeScreen();

  const animate = useCallback(
    (id: number) => {
      if (!showNav && !isDesktop) {
        return {
          initial: { x: 0, opacity: 0 },
          animate: { x: 500, opacity: 1 },
          exit: { x: 500 },
          transition: { duration: 0.1 * id },
          onAnimationComplete: () => {
            if (id === navbarItems.length - 1) {
              setIsAnimating(false);
            }
          },
        };
      } else if (showNav && !isDesktop) {
        return {
          initial: { x: 500 },
          animate: { x: 0 },
          exit: { x: 300 },
          transition: { duration: 0.1 * id },
          onAnimationComplete: () => {
            if (id === navbarItems.length - 1) {
              setIsAnimating(true);
            }
          },
        };
      }
    },
    [showNav, isDesktop],
  );

  useEffect(() => {
    switch (true) {
      case w < 768:
        setClassName(
          cn(
            `absolute top-1/2 right-[5%] translate-x-[-50%] z-100 justify-between
            flex flex-col gap-4 text-end opacity-100`,
          ),
        );
        setIsDesktop(false);
        break;
      case w >= 768:
        setShowNav(false);
        setClassName(
          "flex px-4 gap-4 text-sm md:text-2xl items-center justify-around",
        );
        setIsDesktop(true);
        break;
      default:
        break;
    }
  }, [w, showNav, setShowNav]);

  return (
    <>
      <AnimatePresence>
        {((!showNav && isDesktop) || (showNav && !isDesktop)) && (
          <m.ul key={showNav.toString()} className={`${className}`}>
            {navbarItems.map(({ id, name }) => (
              <m.li
                {...animate(id)}
                className="text_shadow loadUnderline relative inline-block cursor-pointer font-bold after:bg-blue-500"
                key={id}
              >
                {name}
              </m.li>
            ))}
          </m.ul>
        )}
      </AnimatePresence>
      <a
        className="hidden text-blue-400 duration-300 hover:underline lg:block"
        href="mailto:ngocnguyen29061@gmail.com"
      >
        ngocnguyen29061@gmail.com
      </a>

      {isAnimating && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showNav ? 0.5 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setShowNav(false)}
          className={`bg-bg fixed top-0 left-0 z-50 h-full w-full ${isAnimating ? "block" : "hidden"}`}
        />
      )}

      <div className="z-100 block md:hidden">
        {showNav ? (
          <Close
            className="size-8 cursor-pointer text-white"
            onClick={() => setShowNav(!showNav)}
          />
        ) : (
          <Bars
            className="size-8 cursor-pointer text-white"
            onClick={() => setShowNav(!showNav)}
          />
        )}
      </div>
    </>
  );
};

export default Navbar;
