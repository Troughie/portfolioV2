import { useRef } from "react";
import Button from "../commons/Button";
import Input from "../commons/Input";
import { useForm, ValidationError } from "@formspree/react";
import { useIsLoading } from "../store";
import { useEffect, useState } from "react";
import { motion as m, useInView } from "framer-motion";

const AlertSuccess = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <m.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-sm rounded-2xl p-8 text-center shadow-2xl"
        style={{ 
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-primary)'
        }}
      >
        <div 
          className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
          style={{ 
            backgroundColor: 'rgba(34,197,94,0.1)',
            color: 'rgb(34,197,94)'
          }}
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 
          className="mb-2 text-2xl font-bold"
          style={{ color: 'var(--accent-secondary)' }}
        >
          Message Sent!
        </h2>
        <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
          Thank you for reaching out. I'll get back to you as soon as possible via your email.
        </p>
        <button
          onClick={() => setVisible(false)}
          className="rounded-full px-6 py-2.5 font-medium text-white transition-all hover:scale-105"
          style={{ 
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))'
          }}
        >
          Close
        </button>
      </m.div>
    </div>
  );
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [state, handleSubmit] = useForm("xldlewlj");
  const InputArray = ["name", "email", "subject", "message"];
  const { setIsLoading } = useIsLoading();

  useEffect(() => {
    setIsLoading(state.submitting);
  }, [setIsLoading, state.submitting]);

  if (state.succeeded) {
    return <AlertSuccess />;
  }

  return (
    <div 
      ref={ref}
      className="relative flex min-h-screen w-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
    
    >
      <div className="mx-auto w-full max-w-3xl">
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
            Get in Touch
          </h1>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary"></div>
          <p 
            className="text-base sm:text-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            Have a sweet project in mind or just want to say hi? Feel free to send me a message!
          </p>
        </m.div>

        {/* Form */}
        <m.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-2xl p-6 shadow-xl sm:p-8"
          style={{ 
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-primary)'
          }}
        >
          <form 
            onSubmit={handleSubmit} 
            className="space-y-4"
          >
            {InputArray.map((i, index) => (
              <m.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              >
                <Input isTextArea={i === "message"} required={true} name={i} />
                <ValidationError prefix={i} field={i} errors={state.errors} />
              </m.div>
            ))}

            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              className="flex justify-center pt-4"
            >
              <Button
                disabled={state.submitting}
                type="submit"
                name={state.submitting ? "Sending..." : "Send Message"}
                className="px-8 py-3"
              />
            </m.div>
          </form>
        </m.div>

        {/* Contact Info */}
        <m.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <p style={{ color: 'var(--text-tertiary)' }}>
            Or reach me directly at{" "}
            <a 
              href="mailto:ngocnguyen29061@gmail.com"
              className="font-medium transition-colors hover:underline"
              style={{ color: 'var(--accent-primary)' }}
            >
              ngocnguyen29061@gmail.com
            </a>
          </p>
        </m.div>
      </div>
    </div>
  );
};

export default Contact;
