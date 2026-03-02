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
      className="mt-20 w-full py-12"
      style={{ 
        background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-tertiary) 100%)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Social Links */}
        <div className="mb-8 flex items-center justify-center gap-6">
          {FooterItem.map(({ icon, link, name }, index) => (
            <m.a
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              target="_blank"
              rel="noreferrer noopener"
              href={name === "mail" ? "mailto:" + link : link}
              className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110"
              whileHover={{ y: -5 }}
            >
              {icon}
            </m.a>
          ))}
        </div>

        {/* Divider */}
        <div className="mx-auto mb-6 h-px w-48 bg-white/20"></div>

        {/* Copyright */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-white/90">
            © {new Date().getFullYear()} Ngoc Nguyen. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-white/70">
            Built with React, TypeScript & TailwindCSS
          </p>
        </m.div>
      </div>
    </footer>
  );
};

export default Footer;
