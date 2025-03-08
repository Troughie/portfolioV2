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
          "flex  pb-2 pt-4 px-2 md:px-10 bg-bg md:pt-8 max-w-full justify-between items-center w-screen sticky top-0 z-10",
          scrolled && "shadow-white shadow-lg"
        )}
      >
        <div className="flex gap-2 items-center">
          <img src="" alt="" className="size-20 bg-white rounded-full" />
          <span>Tngoc</span>
        </div>
        {NavbarDesktop(showNav, setShowNav)}
      </m.div>
    </>
  );
};

const NavbarDesktop = (
  showNav: boolean,
  setShowNav: (showNav: boolean) => void
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
    [showNav, isDesktop]
  );

  useEffect(() => {
    switch (true) {
      case w < 768:
        setClassName(
          cn(
            `absolute top-1/2 left-[50%] translate-x-[-50%] z-100 justify-between
            flex flex-col gap-4 text-end opacity-100`
          )
        );
        setIsDesktop(false);
        break;
      case w >= 768:
        setShowNav(false);
        setClassName(
          "flex px-4 gap-4 text-sm md:text-2xl items-center justify-around"
        );
        setIsDesktop(true);
        break;
      default:
        break;
    }
  }, [w, showNav]);

  return (
    <>
      <AnimatePresence>
        {((!showNav && isDesktop) || (showNav && !isDesktop)) && (
          <m.ul key={showNav.toString()} className={`${className}`}>
            {navbarItems.map(({ id, name }) => (
              <m.li
                {...animate(id)}
                className="cursor-pointer font-bold relative after:bg-blue-500 text_shadow loadUnderline
            "
                key={id}
              >
                {name}
              </m.li>
            ))}
            <m.a
              {...animate(navbarItems.length + 1)}
              className="text-blue-400 hover:underline duration-300 block md:hidden"
              href="mailto:ngocnguyen29061@gmail.com"
            >
              ngocnguyen29061@gmail.com
            </m.a>
          </m.ul>
        )}
      </AnimatePresence>
      <a
        className="text-blue-400 hover:underline duration-300 hidden lg:block"
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
          className="w-full h-full fixed top-0 left-0 bg-bg z-50"
        />
      )}

      <div className="block md:hidden z-100">
        {showNav ? (
          <Close
            className="size-8 text-white"
            onClick={() => setShowNav(!showNav)}
          />
        ) : (
          <Bars
            className="size-8 text-white"
            onClick={() => setShowNav(!showNav)}
          />
        )}
      </div>
    </>
  );
};

export default Navbar;
