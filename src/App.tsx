import { AnimatePresence } from "framer-motion";
import Navbar from "./commons/Navbar";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Social from "./components/Social";
import { useHasScrolledFromTop } from "./ultils";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  const scrolled = useHasScrolledFromTop();
  return (
    <AnimatePresence mode="wait">
      <div className="relative h-auto flex flex-col justify-center  items-center">
        <Navbar scrolled={scrolled} />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Social />
      </div>
    </AnimatePresence>
  );
}

export default App;
