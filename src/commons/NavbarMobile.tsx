import { navbarItems } from "../Constant";

const NavbarMobile = () => {
  return (
    <div>
      <div className="flex flex-col  gap-4 text-sm md:text-2xl items-center justify-around">
        {navbarItems.map(({ id, name }) => (
          <span
            className="cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100
      text_shadow
      "
            key={id}
          >
            {name}
          </span>
        ))}
        <a
          className="text-blue-400 hover:underline duration-300"
          href="mailto:ngocnguyen29061@gmail.com"
        >
          ngocnguyen29061@gmail.com
        </a>
      </div>
    </div>
  );
};

export default NavbarMobile;
