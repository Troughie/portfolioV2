import { motion as m } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const BackgroundElements = () => {
  const { theme } = useTheme();

  const icons = [
    // Code icons
    { icon: '</>', top: '12%', left: '4%', delay: 0, size: 'text-2xl lg:text-3xl' },
    { icon: '{ }', top: '18%', right: '7%', delay: 0.2, size: 'text-3xl lg:text-4xl' },
    { icon: '<div>', top: '68%', left: '8%', delay: 0.4, size: 'text-xl lg:text-2xl' },
    { icon: 'fn()', top: '78%', right: '12%', delay: 0.6, size: 'text-2xl lg:text-3xl' },
    
    // Symbols
    { icon: '★', top: '15%', left: '16%', delay: 0.3, size: 'text-xl lg:text-2xl' },
    { icon: '◆', top: '55%', right: '8%', delay: 0.5, size: 'text-lg lg:text-xl' },
    { icon: '●', top: '38%', left: '6%', delay: 0.7, size: 'text-md lg:text-lg' },
    { icon: '▲', top: '82%', left: '18%', delay: 0.9, size: 'text-xl lg:text-2xl' },
    
    // Tech symbols
    { icon: 'λ', top: '24%', right: '18%', delay: 0.4, size: 'text-2xl lg:text-3xl' },
    { icon: '∞', top: '48%', left: '11%', delay: 0.6, size: 'text-xl lg:text-2xl' },
    { icon: '⚡', top: '32%', right: '4%', delay: 0.8, size: 'text-2xl lg:text-3xl' },
    { icon: '◉', top: '72%', right: '22%', delay: 1, size: 'text-lg lg:text-xl' },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* Floating Cyber Symbols */}
      {icons.map((item, index) => (
        <m.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: theme === 'dark' ? 0.18 : 0.08,
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: item.delay },
            scale: { duration: 0.8, delay: item.delay },
            y: {
              duration: 3 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
          className={`absolute ${item.size} font-mono font-bold`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            color: 'var(--accent-primary)',
            textShadow: theme === 'dark' ? '0 0 8px rgba(0,242,254,0.1)' : 'none',
          }}
        >
          {item.icon}
        </m.div>
      ))}

      {/* Smooth Floating Background Radial Blurs */}
      {[...Array(5)].map((_, i) => (
        <m.div
          key={`circle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${100 + i * 40}px`,
            height: `${100 + i * 40}px`,
            top: `${15 + i * 16}%`,
            left: `${10 + (i * 22) % 80}%`,
            background: `radial-gradient(circle, var(--accent-${i % 2 === 0 ? 'primary' : 'secondary'}) 0%, transparent 65%)`,
            opacity: theme === 'dark' ? 0.08 : 0.04,
          }}
          animate={{
            x: [0, Math.sin(i) * 60, 0],
            y: [0, Math.cos(i) * 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Fine Grid Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: theme === 'dark' 
            ? 'radial-gradient(circle at 1px 1px, var(--border-primary) 1.2px, transparent 0)'
            : 'radial-gradient(circle at 1px 1px, var(--border-primary) 0.6px, transparent 0)',
          backgroundSize: '40px 40px',
          opacity: theme === 'dark' ? 0.08 : 0.04,
        }}
      />
    </div>
  );
};

export default BackgroundElements;
