import { ReactNode } from "react";
interface props {
  name: string;
  icon: ReactNode;
  link: string;
}
const BoxLink = ({ link, icon, name }: props) => {
  return (
    <a
      href={link}
      target="_blank"
      className="bg-primary group my-10 grid h-[100px] w-screen cursor-pointer place-items-center items-center opacity-90 duration-500 hover:opacity-100"
    >
      <div className="translate-0 scale-0 duration-300 group-hover:translate-y-5 group-hover:scale-100">
        {icon}
      </div>
      <span className="-translate-y-5 text-center font-sans text-lg font-bold uppercase duration-300 group-hover:translate-y-3 group-hover:scale-0">
        {name}
      </span>
    </a>
  );
};

export default BoxLink;
