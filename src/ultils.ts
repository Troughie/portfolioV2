import clsx from "clsx";
import { ClassValue } from "clsx";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface screenSize {
  w: number;
  h: number;
}

export const ResizeScreen = () => {
  const [screen, setScreen] = useState<screenSize>({
    w: innerWidth,
    h: innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreen({ h: innerHeight, w: innerWidth });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return screen;
};

export const useHasScrolledFromTop = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [widthScroll, setWidthScroll] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      setWidthScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrolled, widthScroll };
};

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
