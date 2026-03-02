import { AnimatePresence } from "framer-motion";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import HomeV2 from "./components/HomeV2";
import DotNav from "./components/DotNav";
import { useEffect, useRef, useState } from "react";
import { useIsLoading, useViewActive } from "./store";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import BoxLink from "./commons/BoxLink";
import { Download, Github } from "./assets/icons";
import { GITHUB_LINK } from "./Constant";
import CheckLoading from "./commons/CheckLoading";
import ThemeToggle from "./commons/ThemeToggle";
import { ThemeProvider } from "./contexts/ThemeContext";
import BackgroundElements from "./components/BackgroundElements";

function App() {
  const sections = {
    Intro: useRef<HTMLElement | null>(null),
    About: useRef<HTMLElement | null>(null),
    Skills: useRef<HTMLElement | null>(null),
    Experiences: useRef<HTMLElement | null>(null),
    Projects: useRef<HTMLElement | null>(null),
    Contact: useRef<HTMLElement | null>(null),
    More: useRef<HTMLElement | null>(null),
  };

  const { setName } = useViewActive();
  const { isLoading } = useIsLoading();
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const sectionIds = ["Intro", "About", "Skills", "Experiences", "Projects", "Contact", "More"];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setName(entry.target.id);
          const index = sectionIds.indexOf(entry.target.id);
          if (index !== -1) {
            setCurrentSection(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    Object.values(sections).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sections).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Smooth section scrolling (desktop only)
  useEffect(() => {
    // Chỉ áp dụng full-page scroll trên màn hình lớn + thiết bị có chuột
    const isDesktop =
      typeof window !== "undefined" &&
      window.innerWidth >= 1024 &&
      window.matchMedia &&
      window.matchMedia("(pointer: fine)").matches;

    if (!isDesktop) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      const target = e.target as HTMLElement | null;

      // Nếu đang tương tác trong form / input / textarea / select / button thì không can thiệp,
      // để user có thể scroll nội dung form bình thường.
      if (
        target &&
        target.closest("form, input, textarea, select, button, [data-scroll-lock='false']")
      ) {
        return;
      }

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = currentSection + direction;

      // Nếu đã ở đầu hoặc cuối danh sách section thì cho phép scroll tự nhiên (không preventDefault)
      if (nextSection < 0 || nextSection >= sectionIds.length) {
        return;
      }

      e.preventDefault();

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (isScrolling) return;

        const safeNextSection = currentSection + direction;
        if (safeNextSection < 0 || safeNextSection >= sectionIds.length) return;

        setIsScrolling(true);
        const targetSection = document.getElementById(sectionIds[safeNextSection]);

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
          setCurrentSection(safeNextSection);

          setTimeout(() => {
            setIsScrolling(false);
          }, 800);
        } else {
          setIsScrolling(false);
        }
      }, 80);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
      clearTimeout(scrollTimeout);
    };
  }, [currentSection, isScrolling, sectionIds]);

  return (
    <ThemeProvider>
      <AnimatePresence>
        <BackgroundElements />
        <ThemeToggle />
        <DotNav currentSection={currentSection} setCurrentSection={setCurrentSection} />
        {isLoading && (
          <div className="fixed z-[99999] grid h-screen w-screen place-items-center bg-black opacity-75">
            <CheckLoading />
          </div>
        )}
        <div ref={containerRef} className="scroll-container">
          <section id="Intro" ref={sections.Intro} className="scroll-section">
            <HomeV2 />
          </section>
          <section
            className="scroll-section"
            id="About"
            ref={sections.About}
          >
            <About />
          </section>
          <section
            className="scroll-section"
            id="Skills"
            ref={sections.Skills}
          >
            <Skills />
          </section>
          <section
            className="scroll-section"
            id="Experiences"
            ref={sections.Experiences}
          >
            <Experience />
          </section>
          <section
            className="scroll-section"
            id="Projects"
            ref={sections.Projects}
          >
            <Projects />
          </section>
          <section
            className="scroll-section"
            id="Contact"
            ref={sections.Contact}
          >
            <Contact />
          </section>
          <section
            className="scroll-section"
            id="More"
            ref={sections.More}
          >
            <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
              <div className="mx-auto w-full max-w-6xl space-y-10">
                <div 
                  className="grid gap-6 md:grid-cols-2"
                  data-scroll-lock="false"
                >
                  <BoxLink
                    name="View my resume"
                    icon={<Download className="size-8" />}
                    link={
                      "https://www.topcv.vn/xem-cv/UQJSVwUAAAIEAgQGXVNQBF0BUlEHBlVQB1QHVQd3d0"
                    }
                  />
                  <BoxLink
                    name="See more project"
                    icon={<Github className="size-8" />}
                    link={GITHUB_LINK}
                  />
                </div>

                <Footer />
              </div>
            </div>
          </section>
        </div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
