import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Claude Code 101",
    issuer: "Anthropic Education",
    url: "https://verify.skilljar.com/c/vtaexpzyyd3r",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic Education",
    url: "https://verify.skilljar.com/c/e75sjwkrdhv4",
  },
];

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

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 border-t border-neutral-200">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <p className="text-indigo-600 text-sm font-medium tracking-widest uppercase mb-3">Certifications</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-14">
            Credentials
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.url} delay={i * 0.1}>
              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between p-6 rounded-2xl border border-neutral-200 hover:border-neutral-300 bg-neutral-50/80 hover:bg-neutral-100 transition-all duration-300"
              >
                <div>
                  <p className="text-neutral-900 font-medium group-hover:text-indigo-600 transition-colors mb-1">
                    {cert.title}
                  </p>
                  <p className="text-neutral-400 text-sm">{cert.issuer}</p>
                </div>
                <ExternalLink size={15} className="text-neutral-300 group-hover:text-indigo-500 transition-colors mt-1 shrink-0 ml-4" />
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
