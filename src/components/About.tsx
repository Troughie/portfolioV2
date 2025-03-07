import BreakCumb from "../commons/BreakCumb";
import RandomShapes from "../commons/RandomShapes";

const About = () => {
  return (
    <div className="h-screen px-8 relative w-full">
      <BreakCumb name="About" />
      <div>
        <div className="absolute left-8 right-8 blur-md top-20 bottom-0  bg-white">
          <RandomShapes />
        </div>
      </div>
    </div>
  );
};

export default About;
