import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "../data";

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

export default function Experience() {
  return (
    <section id="experience" className="py-28 border-t border-neutral-200">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <p className="text-indigo-600 text-sm font-medium tracking-widest uppercase mb-3">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-14">
            Where I&apos;ve worked
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {experience.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-10 py-8 border-b border-neutral-200 last:border-0">
                <div>
                  <p className="text-neutral-400 text-xs font-mono">{item.period}</p>
                </div>
                <div>
                  <h3 className="text-neutral-900 font-medium text-lg">{item.role}</h3>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noreferrer" className="text-indigo-600 text-sm mb-3 hover:underline inline-block">{item.company}</a>
                  ) : (
                    <p className="text-indigo-600 text-sm mb-3">{item.company}</p>
                  )}
                  <p className="text-neutral-500 text-sm leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white text-neutral-600 border border-neutral-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
