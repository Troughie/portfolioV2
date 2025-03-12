import { ReactNode } from "react";
import { Facebook, Github, Linkedin, Mail } from "../assets/icons";
interface props {
  name: string;
  link: string;
  icon: ReactNode;
}
const Footer = () => {
  const FooterItem: props[] = [
    {
      icon: <Github className="size-6" />,
      name: "github",
      link: "https://github.com/Troughie",
    },
    {
      icon: <Linkedin className="size-6" />,
      name: "linkedin",
      link: "https://www.linkedin.com/in/ntngoc29061/",
    },
    {
      icon: <Mail className="size-6" />,
      name: "mail",
      link: "ngocnguyen29061@gmail.com",
    },
    {
      icon: <Facebook className="size-6" />,
      name: "facebook",
      link: "https://www.facebook.com/Ntngoc2906/",
    },
  ];
  return (
    <div className="mt-10 flex h-auto w-screen flex-col bg-gradient-to-tr from-[#00b7c7] to-[#4d0ce8]">
      <div className="flex items-center justify-center gap-6 py-8">
        {FooterItem.map(({ icon, link, name }) => (
          <a
            key={name}
            target="_blank"
            rel="noreferrer noopener"
            href={name === "mail" ? "mailto:" + link : link}
            className="relative size-6 cursor-pointer duration-300 hover:-translate-y-1.5 hover:scale-[1.1]"
          >
            {icon}
          </a>
        ))}
      </div>
      <span className="py-5 text-center">© Ngoc Nguyen 2025</span>
    </div>
  );
};

export default Footer;
