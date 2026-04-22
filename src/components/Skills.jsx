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
    <section id="skills" className="py-28 border-t border-neutral-200">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <p className="text-indigo-600 text-sm font-medium tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-14">
            Technologies I work with
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group, gi) => (
            <FadeIn key={group.category} delay={gi * 0.1}>
              <div>
                <p className="text-neutral-400 text-xs font-medium tracking-widest uppercase mb-4">
                  {group.category}
                </p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-neutral-700 text-sm py-2 px-3 rounded-lg border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all"
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
