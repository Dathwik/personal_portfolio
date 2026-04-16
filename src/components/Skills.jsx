import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../data";

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

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-neutral-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-14">
            Technologies I work with
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-8">
          {skills.map((group, gi) => (
            <FadeIn key={group.category} delay={gi * 0.1}>
              <div>
                <p className="text-neutral-500 text-xs font-medium tracking-widest uppercase mb-4">
                  {group.category}
                </p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-neutral-300 text-sm py-2 px-3 rounded-lg border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-all"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
