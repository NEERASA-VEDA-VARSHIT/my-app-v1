"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineEntries = [
  {
    period: "2025 — Present",
    role: "Full Stack Engineer",
    organization: "Scaler Innovation Lab",
    description:
      "Working on scalable full-stack systems with focus on backend architecture, system design, and real-world usage.",
  },
  {
    period: "2025",
    role: "AI Engineering Intern",
    organization: "Scaler Innovation Lab",
    description:
      "Worked on machine learning pipelines and applied AI to real-world problems.",
  },
  {
    period: "2024 — Present",
    role: "Scaler School of Technology",
    organization: "Computer Science",
    description: "",
  },
];

export default function ProjectTimeline() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="achievements" className="relative mx-auto w-full border-b border-white/10 px-5 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
            Timeline
          </h2>
          <p className="mt-3 text-base text-zinc-400 sm:text-lg">
            How my engineering evolved from systems to AI systems
          </p>
        </motion.div>

        <div className="relative mx-auto mt-12 max-w-5xl md:mt-16">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-white/10 md:left-4" />
          <motion.div className="absolute left-3 top-0 w-px bg-zinc-100 md:left-4" style={{ height: progressHeight }} />

          <div className="space-y-8 md:space-y-12">
            {timelineEntries.map((entry, i) => (
              <motion.article
                key={entry.period + entry.role}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="relative pl-10 md:pl-12"
              >
                <div className="absolute left-[7px] top-2.5 h-3 w-3 rounded-full border border-white/20 bg-zinc-100 md:left-[11px]" />

                <div className="rounded-2xl border border-white/10 bg-white/3 p-5 sm:p-6">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-zinc-500">
                    {entry.period}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-zinc-100 sm:text-2xl">
                    {entry.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-zinc-300 sm:text-base">
                    {entry.organization}
                  </p>
                  {entry.description ? (
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                      {entry.description}
                    </p>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
