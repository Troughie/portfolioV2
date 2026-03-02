import { useViewActive } from "../store";
import cn from "../ultils";
import { motion as m } from "framer-motion";

interface DotNavProps {
  currentSection: number;
  setCurrentSection: (index: number) => void;
}

const DotNav = ({ currentSection, setCurrentSection }: DotNavProps) => {
  const dots = [
    "Intro",
    "About",
    "Skills",
    "Experiences",
    "Projects",
    "Contact",
  ];
  const { name } = useViewActive();

  const scrollToSection = (sectionId: string, index: number) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setCurrentSection(index);
    }
  };

  return (
    <div
      id="dot"
      className={cn(
        `fixed top-1/2 right-6 z-[999999] hidden -translate-y-1/2 flex-col gap-4`,
        name !== "Intro" ? "lg:flex" : "hidden",
      )}
    >
      {dots.map((dot, index) => (
        <m.div
          key={dot}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="relative"
        >
          <button
            onClick={() => scrollToSection(dot, index)}
            className="group relative flex cursor-pointer items-center"
          >
            <m.div
              className={cn(
                `h-3 w-3 transform rounded-full transition-all duration-300`,
                name === dot 
                  ? "scale-125 bg-gradient-to-r from-accent-primary to-accent-secondary shadow-lg" 
                  : "scale-100 opacity-50"
              )}
              style={{ 
                backgroundColor: name === dot ? undefined : 'var(--text-tertiary)'
              }}
              whileHover={{ scale: 1.3 }}
            />

            <m.span
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-6 whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium shadow-lg"
              style={{ 
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-primary)'
              }}
            >
              {dot}
            </m.span>
          </button>
        </m.div>
      ))}
    </div>
  );
};

export default DotNav;
