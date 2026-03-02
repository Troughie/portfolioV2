import cn from "../ultils";
import { motion as m } from "framer-motion";

interface props {
  name: string;
  className?: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}

const Button = ({
  name,
  className,
  type = "submit",
  disabled = false,
}: props) => {
  return (
    <m.button
      type={type}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={cn(
        `relative overflow-hidden rounded-lg px-6 py-2.5 font-medium uppercase tracking-wide transition-all duration-300`,
        disabled 
          ? "cursor-not-allowed opacity-40" 
          : "cursor-pointer shadow-md hover:shadow-lg",
        className,
      )}
      style={{
        background: disabled 
          ? 'var(--bg-tertiary)' 
          : 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
        color: '#FFFFFF',
        border: 'none',
      }}
      disabled={disabled}
    >
      <span className="relative z-10">{name}</span>
      {!disabled && (
        <m.div
          className="absolute inset-0 bg-white"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </m.button>
  );
};

export default Button;
