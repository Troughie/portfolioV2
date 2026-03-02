import { useTheme } from '../contexts/ThemeContext';
import { motion as m } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <m.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 sm:h-12 sm:w-12"
      style={{
        background:
          theme === 'light'
            ? 'var(--bg-card)'
            : 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
        border: theme === 'light' ? '1px solid var(--border-primary)' : 'none',
        boxShadow:
          theme === 'light'
            ? '0 10px 25px rgba(15,23,42,0.15)'
            : '0 16px 40px rgba(15,23,42,0.7)',
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ color: 'var(--accent-primary)' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ color: '#ffffff' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </m.button>
  );
};

export default ThemeToggle;
