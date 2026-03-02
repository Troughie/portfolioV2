import { ReactNode } from "react";
import { motion as m } from "framer-motion";

interface props {
  name: string;
  icon: ReactNode;
  link: string;
}

const BoxLink = ({ link, icon, name }: props) => {
  return (
    <m.a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      whileHover={{ y: -4 }}
      className="group relative flex w-full cursor-pointer items-stretch overflow-hidden rounded-2xl border shadow-xl transition-all duration-300"
      style={{
        borderColor: "var(--border-primary)",
        background:
          "linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 40%, var(--bg-tertiary) 100%)",
      }}
    >
      {/* Accent bar */}
      <div
        className="w-1 shrink-0"
        style={{
          background:
            "linear-gradient(180deg, var(--accent-primary), var(--accent-secondary))",
        }}
      />

      {/* Content */}
      <div className="flex flex-1 items-center justify-between gap-4 px-4 py-4 sm:gap-6 sm:px-6 sm:py-5">
        <div className="flex items-center gap-4 sm:gap-5">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl text-white sm:h-14 sm:w-14"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
              boxShadow: "0 10px 25px rgba(15,23,42,0.35)",
            }}
          >
            {icon}
          </div>

          <div className="flex flex-col">
            <span
              className="text-xs font-semibold uppercase tracking-wide opacity-70 sm:text-sm"
              style={{ color: "var(--text-tertiary)" }}
            >
              Quick access
            </span>
            <span
              className="text-base font-semibold sm:text-lg"
              style={{ color: "var(--text-primary)" }}
            >
              {name}
            </span>
          </div>
        </div>

        <m.div
          initial={{ x: 4, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="hidden items-center gap-1 text-sm font-medium sm:flex"
          style={{ color: "var(--accent-primary)" }}
        >
          <span>Open</span>
          <m.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </m.span>
        </m.div>
      </div>
    </m.a>
  );
};

export default BoxLink;
