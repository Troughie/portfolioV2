import { AnimatePresence } from "framer-motion";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import HomeV2 from "./components/HomeV2";
import DotNav from "./components/DotNav";
import { useEffect, useRef } from "react";
import { useIsLoading, useViewActive } from "./store";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import BoxLink from "./commons/BoxLink";
import { Download, Github } from "./assets/icons";
import { GITHUB_LINK } from "./Constant";
import CheckLoading from "./commons/CheckLoading";

function App() {
  const sections = {
    Intro: useRef<HTMLElement | null>(null),
    About: useRef<HTMLElement | null>(null),
    Skills: useRef<HTMLElement | null>(null),
    Experiences: useRef<HTMLElement | null>(null),
    Projects: useRef<HTMLElement | null>(null),
    Contact: useRef<HTMLElement | null>(null),
  };

  const { setName } = useViewActive();

  const { isLoading } = useIsLoading();

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

  return (
    <AnimatePresence>
      <DotNav />
      {isLoading && (
        <div className="fixed z-[99999] grid h-screen w-screen place-items-center bg-black opacity-75">
          <CheckLoading />
        </div>
      )}
      <div className="relative mx-auto flex h-auto min-h-screen max-w-screen-lg flex-col items-center justify-center md:px-6">
        <section id="Intro" ref={sections.Intro}>
          <HomeV2 />
        </section>
        <section
          className="relative h-full w-full"
          id="About"
          ref={sections.About}
        >
          <About />
        </section>{" "}
        <section
          className="relative h-full w-full"
          id="Skills"
          ref={sections.Skills}
        >
          <Skills />
        </section>
        <section
          className="relative h-full w-full"
          id="Experiences"
          ref={sections.Experiences}
        >
          <Experience />
        </section>
        <BoxLink
          name="View my resume"
          icon={<Download className="size-8" />}
          link={
            "https://www.topcv.vn/xem-cv/UQJSVwUAAAIEAgQGXVNQBF0BUlEHBlVQB1QHVQd3d0"
          }
        />
        <section
          className="relative h-full w-full"
          id="Projects"
          ref={sections.Projects}
        >
          <Projects />
        </section>
        <BoxLink
          name="See more project"
          icon={<Github className="size-8" />}
          link={GITHUB_LINK}
        />
        <section
          className="relative h-full w-full"
          id="Contact"
          ref={sections.Contact}
        >
          <Contact />
        </section>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
