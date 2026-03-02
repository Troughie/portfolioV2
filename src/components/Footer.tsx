import { ReactNode } from "react";
import { Facebook, Github, Linkedin, Mail } from "../assets/icons";
import { motion as m } from "framer-motion";

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
    <footer 
      className="mt-16 w-full border-t"
      style={{ 
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-primary)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Left: text */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center sm:text-left"
          >
            <p
              className="text-sm font-medium"
              style={{ color: 'var(--text-primary)' }}
            >
              © {new Date().getFullYear()} Ngoc Nguyen
            </p>
            <p
              className="mt-1 text-xs"
              style={{ color: 'var(--text-tertiary)' }}
            >
              Built with React, TypeScript & TailwindCSS
            </p>
          </m.div>

          {/* Right: social links */}
          <div className="flex items-center gap-4">
            {FooterItem.map(({ icon, link, name }, index) => (
              <m.a
                key={name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                target="_blank"
                rel="noreferrer noopener"
                href={name === "mail" ? "mailto:" + link : link}
                className="group relative flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-[var(--accent-primary)] sm:h-11 sm:w-11"
                style={{ 
                  borderColor: 'var(--border-primary)',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                }}
                whileHover={{ y: -3 }}
              >
                <span className="transition-colors group-hover:text-[var(--accent-primary)]">
                  {icon}
                </span>
              </m.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
