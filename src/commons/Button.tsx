import cn from "../ultils";

interface props {
  name: string;
  className?: string;
  type: "submit" | "reset" | "button";
  disabled: boolean;
}
const Button = ({ name, className, type = "submit", disabled }: props) => {
  return (
    <button
      type={type}
      className={cn(
        `cursor-pointer rounded-sm border-2 border-[#00b7c7] px-2 py-1 font-sans text-[14px] font-medium text-[#00b7c7] uppercase duration-300 hover:bg-[#00b7c7] hover:text-white`,
        className,
        disabled && "pointer-events-none cursor-default opacity-40 select-none",
      )}
    >
      {name}
    </button>
  );
};

export default Button;
