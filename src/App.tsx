import { AnimatePresence } from "framer-motion";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import HomeV2 from "./components/HomeV2";
import DotNav from "./components/DotNav";
import { useEffect, useRef } from "react";
import { useViewActive } from "./store";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import BoxLink from "./commons/BoxLink";
import { Download, Github } from "./assets/icons";
import { GITHUB_LINK } from "./Constant";

function App() {
  const sections = {
    Intro: useRef<HTMLElement | null>(null),
    About: useRef<HTMLElement | null>(null),
    Skills: useRef<HTMLElement | null>(null),
    Experiences: useRef<HTMLElement | null>(null),
    Projects: useRef<HTMLElement | null>(null),
    Contact: useRef<HTMLElement | null>(null),
  };
  const lastScrollY = useRef(0);
  const { name, setName } = useViewActive();

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sectionKeys = Object.keys(sections);
      const currentIndex = sectionKeys.indexOf(name);

      if (
        currentScrollY > lastScrollY.current &&
        currentIndex + 2 < sectionKeys.length
      ) {
        sections[
          sectionKeys[currentIndex + 1] as keyof typeof sections
        ].current?.scrollIntoView({
          behavior: "smooth",
        });
      } else if (currentScrollY < lastScrollY.current && currentIndex - 1 > 0) {
        sections[
          sectionKeys[currentIndex - 1] as keyof typeof sections
        ].current?.scrollIntoView({
          behavior: "smooth",
        });
      }
      console.log(sectionKeys.length);
      console.log(currentIndex);
      console.log(name);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections]);

  return (
    <AnimatePresence>
      <DotNav />
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
          link={""}
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
