import { Link } from "react-scroll";
import { useViewActive } from "../store";
import cn from "../ultils";

const DotNav = () => {
  const dots = [
    "Intro",
    "About",
    "Skills",
    "Experiences",
    "Projects",
    "Contact",
  ];
  const { name } = useViewActive();
  return (
    <div
      id="dot"
      className={cn(
        `fixed top-1/2 -right-18 z-[999999] hidden w-[100px] flex-col justify-between gap-4`,
        name !== "Intro" ? "md:flex" : "hidden",
      )}
    >
      {dots.map((dot) => (
        <div key={dot} className="relative right-0 gap-2">
          <Link
            to={dot}
            duration={400}
            smooth
            className="group relative flex cursor-pointer items-center"
          >
            <div
              className={cn(
                `size-4 transform rounded-full bg-blue-200 transition duration-300 group-hover:scale-125`,
                name === dot ? "opacity-100" : "opacity-50",
              )}
            />

            <span className="absolute -left-20 scale-0 rounded-md px-2 py-1 text-sm duration-300 group-hover:block group-hover:scale-100">
              {dot}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DotNav;
