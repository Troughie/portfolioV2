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
        `block max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`,
        className
      )}
      style={{ ...style }}
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {type}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{details}</p>
    </div>
  );
};

export default CardSkill;
