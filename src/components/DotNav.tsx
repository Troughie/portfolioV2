import { useViewActive } from "../store";
import cn from "../ultils";
import { motion as m } from "framer-motion";

interface DotNavProps {
  currentSection: number;
  setCurrentSection: (index: number) => void;
}

const DotNav = ({ setCurrentSection }: DotNavProps) => {
  const dots = [
    "Intro",
    "About",
    "Skills",
    "Experiences",
    "Projects",
    "More",
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
      {dots.map((dot, index) => {
        const isActive = name === dot;
        return (
          <m.div
            key={dot}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="relative flex items-center justify-center"
          >
            <button
              onClick={() => scrollToSection(dot, index)}
              className="group relative flex cursor-pointer items-center justify-center h-6 w-6"
            >
              {/* Sliding active halo indicator */}
              {isActive && (
                <m.div
                  layoutId="activeDotRing"
                  className="absolute h-5 w-5 rounded-full border border-accent-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  style={{
                    boxShadow: "0 0 8px rgba(0, 242, 254, 0.3)",
                  }}
                />
              )}

              {/* Central dot element */}
              <m.div
                className={cn(
                  `h-2.5 w-2.5 rounded-full transition-all duration-300`,
                  isActive 
                    ? "bg-gradient-to-r from-accent-primary to-accent-secondary" 
                    : "opacity-40 group-hover:opacity-80"
                )}
                style={{ 
                  backgroundColor: isActive ? undefined : 'var(--text-tertiary)'
                }}
              />

              {/* Hover label */}
              <m.span
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute right-7 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap rounded-lg px-2.5 py-1 text-xs font-semibold shadow-md"
                style={{ 
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-primary)'
                }}
              >
                {dot === "Experiences" ? "Experience" : dot}
              </m.span>
            </button>
          </m.div>
        );
      })}
    </div>
  );
};

export default DotNav;
