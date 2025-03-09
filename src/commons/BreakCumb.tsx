import { ReactNode, useEffect, useState } from "react";
import cn from "../ultils";

interface props {
  name: string;
  className?: string;
}
const BreakCumb = ({ name, className }: props) => {
  const [text, setText] = useState<ReactNode>(<span></span>);
  useEffect(() => {
    const nameASplit = name.split(" ");
    if (nameASplit.length > 1) {
      setText(
        <>
          <span className="text-center">
            {nameASplit[0]} {nameASplit[1]}
          </span>
          <p>{nameASplit[2]}</p>
        </>
      );
    } else {
      setText(
        <>
          <span>{name}</span>
        </>
      );
    }
  }, [name]);

  return (
    <div
      className={cn(
        `text-lg font-semibold inline-block relative left-0 default_after after:w-1/2 after:bottom-0 after:left-0 after:animate-[loadBar2_1.5s_ease-in-out_forwards] `,
        className
      )}
    >
      <span>{text}</span>
    </div>
  );
};

export default BreakCumb;
