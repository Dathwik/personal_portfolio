import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-28 max-w-5xl mx-auto px-6">
      <FadeIn>
        <p className="text-indigo-600 text-sm font-medium tracking-widest uppercase mb-3">About</p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-12 mt-2">
        <FadeIn delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 leading-snug tracking-tight">
            Passionate about building great web experiences.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-4 text-neutral-500 leading-relaxed">
            <p>
              I&apos;m a frontend developer who cares deeply about the details — from
              pixel-perfect layouts to smooth interactions that make an app feel
              alive. I enjoy turning complex requirements into clean, maintainable
              code.
            </p>
            <p>
              When I&apos;m not writing code, I&apos;m exploring new tools, contributing to
              open-source projects, or studying design systems to understand what
              makes great interfaces work.
            </p>
            <p>
              Currently based in the US, open to remote and hybrid opportunities.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
