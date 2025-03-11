import { Linkedin } from "../assets/icons";

const Footer = () => {
  return (
    <div className="mt-10 flex h-auto w-screen flex-col bg-gradient-to-tr from-[#00b7c7] to-[#4d0ce8]">
      <div className="flex items-center justify-center gap-6 py-8">
        <Linkedin className="relative size-6 cursor-pointer duration-300 hover:-translate-y-1.5 hover:scale-[1.1]" />
        <Linkedin className="relative size-6 cursor-pointer duration-300 hover:-translate-y-1.5 hover:scale-[1.1]" />
        <Linkedin className="relative size-6 cursor-pointer duration-300 hover:-translate-y-1.5 hover:scale-[1.1]" />
        <Linkedin className="relative size-6 cursor-pointer duration-300 hover:-translate-y-1.5 hover:scale-[1.1]" />
        <Linkedin className="relative size-6 cursor-pointer duration-300 hover:-translate-y-1.5 hover:scale-[1.1]" />
      </div>
      <span className="py-5 text-center">© Ngoc Nguyen 2025</span>
    </div>
  );
};

export default Footer;
