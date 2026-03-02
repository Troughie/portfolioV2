import { motion as m } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const BackgroundElements = () => {
  const { theme } = useTheme();

  const icons = [
    // Code icons
    { icon: '</>', top: '10%', left: '5%', delay: 0, size: 'text-3xl' },
    { icon: '{ }', top: '20%', right: '8%', delay: 0.2, size: 'text-4xl' },
    { icon: '<div>', top: '70%', left: '10%', delay: 0.4, size: 'text-2xl' },
    { icon: 'fn()', top: '80%', right: '15%', delay: 0.6, size: 'text-3xl' },
    
    // Symbols
    { icon: '★', top: '15%', left: '15%', delay: 0.3, size: 'text-2xl' },
    { icon: '◆', top: '60%', right: '10%', delay: 0.5, size: 'text-xl' },
    { icon: '●', top: '40%', left: '8%', delay: 0.7, size: 'text-lg' },
    { icon: '▲', top: '85%', left: '20%', delay: 0.9, size: 'text-2xl' },
    
    // Tech symbols
    { icon: 'λ', top: '25%', right: '20%', delay: 0.4, size: 'text-3xl' },
    { icon: '∞', top: '50%', left: '12%', delay: 0.6, size: 'text-2xl' },
    { icon: '⚡', top: '35%', right: '5%', delay: 0.8, size: 'text-3xl' },
    { icon: '◉', top: '75%', right: '25%', delay: 1, size: 'text-xl' },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {icons.map((item, index) => (
        <m.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: theme === 'dark' ? 0.15 : 0.08,
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: item.delay },
            scale: { duration: 0.8, delay: item.delay },
            y: {
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
          className={`absolute ${item.size} font-bold`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            color: 'var(--accent-primary)',
          }}
        >
          {item.icon}
        </m.div>
      ))}

      {/* Floating circles */}
      {[...Array(6)].map((_, i) => (
        <m.div
          key={`circle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${50 + i * 30}px`,
            height: `${50 + i * 30}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, var(--accent-${i % 2 === 0 ? 'primary' : 'secondary'}) 0%, transparent 70%)`,
            opacity: theme === 'dark' ? 0.1 : 0.05,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: theme === 'dark' 
            ? 'radial-gradient(circle at 1px 1px, var(--border-primary) 1px, transparent 0)'
            : 'radial-gradient(circle at 1px 1px, var(--border-primary) 0.5px, transparent 0)',
          backgroundSize: '50px 50px',
          opacity: theme === 'dark' ? 0.1 : 0.05,
        }}
      />
    </div>
  );
};

export default BackgroundElements;
