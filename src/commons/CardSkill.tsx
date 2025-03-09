import cn from "../ultils";

interface props {
  type: string;
  details: string;
  style?: object;
  className: string | undefined;
}
const CardSkill = ({ details, type, style, className }: props) => {
  return (
    <div
      className={cn(
        `flex h-full w-full flex-col items-center justify-center rounded-lg border border-gray-200 px-1 py-4 text-center shadow-sm duration-300 hover:scale-110 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`,
        className,
      )}
      style={{ ...style }}
    >
      <h5 className="text-[16px] font-bold text-gray-900 md:text-2xl dark:text-white">
        {type}
      </h5>
      <p className="text-[10px] text-gray-700 md:text-xl dark:text-gray-400">
        {details}
      </p>
    </div>
  );
};

export default CardSkill;
