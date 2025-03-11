import { AnimatePresence } from "framer-motion";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import HomeV2 from "./components/HomeV2";
import DotNav from "./components/DotNav";
import { useEffect, useRef } from "react";
import { useViewActive } from "./store";

function App() {
  const sections = {
    home: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };
  const { setName } = useViewActive();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setName(entry.target.id); // Cập nhật section đang hiển thị
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
      <div className="relative mx-auto flex h-auto min-h-screen max-w-screen-lg flex-col items-center justify-center md:px-6">
        <section id="Intro" ref={sections.home}>
          <HomeV2 />
        </section>
        <section
          className="relative h-full w-full"
          id="About"
          ref={sections.about}
        >
          <About />
        </section>
        <section
          className="relative h-full w-full"
          id="Experience"
          ref={sections.experience}
        >
          <Experience />
        </section>
        <section
          className="relative h-full w-full"
          id="Projects"
          ref={sections.projects}
        >
          <Projects />
        </section>
        <section
          className="relative h-full w-full"
          id="Contact"
          ref={sections.contact}
        >
          <Contact />
        </section>
      </div>
    </AnimatePresence>
  );
}

export default App;
