interface props {
  name: string;
}
const BreakCumb = ({ name }: props) => {
  return (
    <div className="text-lg font-semibold inline-block relative left-0 default_after after:w-1/2 after:bottom-0 after:left-0 after:animate-[loadBar2_1.5s_ease-in-out_forwards]">
      {name}
    </div>
  );
};

export default BreakCumb;
