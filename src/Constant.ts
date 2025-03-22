interface navbarItem {
  name: string;
  id: number;
}

export const GITHUB_LINK = "https://github.com/Troughie/";

export interface defaultProps {
  index: number;
  values: string;
}
export const COLORCONSTANT = {
  active: "rgb(255 255 255 / 25%)",
  primary: "#00b7c7",
};

export const navbarItems: navbarItem[] = [
  {
    name: "Home",
    id: 1,
  },
  {
    name: "Projects",
    id: 2,
  },
  {
    name: "Experience",
    id: 3,
  },
  {
    name: "Contact",
    id: 4,
  },
];

export const animateSlowLoad = (id: number) => {
  return {
    initial: {
      x: -330,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    transition: {
      duration: 0.3 * id,
      ease: "easeInOut",
    },
  };
};
