import cn from "../ultils";

interface props {
  name: string;
  className?: string;
}
const Button = ({ name, className }: props) => {
  return (
    <button
      className={cn(
        `cursor-pointer rounded-sm border-2 border-[#00b7c7] px-2 py-1 font-sans text-[14px] font-medium text-[#00b7c7] uppercase duration-300 hover:bg-[#00b7c7] hover:text-white`,
        className,
      )}
    >
      {name}
    </button>
  );
};

export default Button;
