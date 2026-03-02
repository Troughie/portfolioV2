import { ReactNode, useRef } from "react";
import { animateSlowLoad } from "../Constant";
import { motion as m, useInView } from "framer-motion";
import { Mail, Phone } from "../assets/icons";

interface props {
  name: string;
  id: number;
  icon: ReactNode;
}

const socialList: props[] = [
  {
    name: "0383618054",
    icon: <Phone className="size-5" />,
    id: 1,
  },
  {
    name: "ngocnguyen29061@gmail.com",
    icon: <Mail className="size-5" />,
    id: 2,
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div 
      id="About" 
      className="relative flex min-h-screen w-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
    >
      <div ref={ref} className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h1 
            className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl"
            style={{ color: 'var(--text-primary)' }}
          >
            About Me
          </h1>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"></div>
        </m.div>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Quote & Info */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center gap-8"
          >
            {/* Quote Card */}
            <div 
              className="rounded-2xl p-8 shadow-xl"
              style={{ 
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-primary)'
              }}
            >
              <div className="mb-4 text-6xl" style={{ color: 'var(--accent-primary)' }}>
                "
              </div>
              <p 
                className="text-xl font-semibold italic leading-relaxed sm:text-2xl"
                style={{ color: 'var(--text-primary)' }}
              >
                The greatest ideas are the simplest
              </p>
              <div className="mt-4 text-right text-6xl" style={{ color: 'var(--accent-primary)' }}>
                "
              </div>
            </div>

            {/* Contact Info */}
            <div 
              className="rounded-2xl p-6 shadow-lg"
              style={{ 
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-primary)'
              }}
            >
              <h3 
                className="mb-4 text-lg font-semibold uppercase tracking-wide"
                style={{ color: 'var(--text-tertiary)' }}
              >
                Get In Touch
              </h3>
              <ul className="space-y-4">
                {socialList.map(({ id, name, icon }) => {
                  const hrf = id === 2 ? `mailto:${name}` : `tel:${name}`;
                  return (
                    <m.li
                      {...animateSlowLoad(id)}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      key={id}
                    >
                      <a
                        href={hrf}
                        className="group flex items-center gap-3 transition-all hover:translate-x-2"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <div 
                          className="rounded-lg p-2"
                          style={{ backgroundColor: 'var(--bg-hover)' }}
                        >
                          {icon}
                        </div>
                        <span 
                          className="font-medium transition-colors"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {name}
                        </span>
                      </a>
                    </m.li>
                  );
                })}
              </ul>
            </div>
          </m.div>

          {/* Right Column - Description */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div 
              className="space-y-4 rounded-2xl p-6 text-sm leading-relaxed shadow-xl sm:space-y-6 sm:p-8 sm:text-lg"
              style={{ 
                color: 'var(--text-secondary)',
              }}
            >
              <p>
                Hello! I am a <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Software Engineer</span> with one year of experience in software development. I am proficient in both backend and frontend development, specializing in <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>ReactJs</span> and <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Node.js (ExpressJs)</span>.
              </p>
              
              {/* Hidden on very small screens to keep section short */}
              <p className="hidden sm:block">
                I am passionate about building efficient applications with optimized performance and great user experiences. I have developed various real-world projects, including restaurant management systems, e-commerce platforms, financial management applications, and real-time chat features.
              </p>
              
              <p className="hidden sm:block">
                Always eager to learn new technologies, I strive to work in a challenging and creative environment to enhance my skills. If you're looking for a dedicated and responsible developer, feel free to reach out to me!
              </p>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 gap-4 border-t pt-4 sm:mt-8 sm:pt-6" style={{ borderColor: 'var(--border-primary)' }}>
                <div className="text-center">
                  <div 
                    className="text-3xl font-bold"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    1+
                  </div>
                  <div 
                    className="mt-1 text-sm"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    Years Exp
                  </div>
                </div>
                <div className="text-center">
                  <div 
                    className="text-3xl font-bold"
                    style={{ color: 'var(--accent-secondary)' }}
                  >
                    10+
                  </div>
                  <div 
                    className="mt-1 text-sm"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    Projects
                  </div>
                </div>
                <div className="text-center">
                  <div 
                    className="text-3xl font-bold"
                    style={{ color: 'var(--accent-tertiary)' }}
                  >
                    8+
                  </div>
                  <div 
                    className="mt-1 text-sm"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    Technologies
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </div>
  );
};

export default About;
