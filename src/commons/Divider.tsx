import cn from "../ultils";

interface props {
  className?: string;
}
const Divider = ({ className }: props) => {
  return (
    <div className={cn(`my-8 h-[2px] w-2/8 bg-blue-400 md:w-1/8`, className)} />
  );
};

export default Divider;
