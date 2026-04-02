export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl border-b border-white/10 bg-linear-to-r from-[#0a0a0d]/95 via-[#0a0a0d]/70 to-[#0a0a0d]/30 px-5 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:py-18">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="mb-6 text-3xl font-semibold text-zinc-100 sm:mb-8">
            About
          </h2>

          <div className="space-y-7 text-base leading-relaxed text-zinc-300 sm:text-lg">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.12em] text-zinc-500">Curiosity</p>
              <p>
                I didn&apos;t start with a fixed goal. I kept getting curious about why some systems scale,
                why others fail, and what really happens underneath abstractions. That curiosity shaped
                how I build.
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.12em] text-zinc-500">Experience</p>
              <p>
                Over time, I&apos;ve worked on backend systems, multi-tenant architectures, and AI-powered
                applications — including systems used by 1200+ users with role-based access control, workflow automation, and real-world constraints.
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.12em] text-zinc-500">Philosophy</p>
              <p className="italic text-zinc-200">
                I prefer thinking in systems over just building features.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="mb-6">
                I build systems and try to understand how they behave beyond just making them work.
              </p>

              <p className="mb-6">
                Working on real systems pushed me to think beyond features — focusing on reliability, system design, and how things behave as they scale.
              </p>

              <p className="mb-6">
                I tend to approach problems by breaking them down to first principles and rebuilding them in a way that feels simple, predictable, and scalable.
              </p>

              <p className="mb-6">
                More recently, I&apos;ve been exploring how AI systems move from experiments to something actually useful — not just calling APIs, but designing systems where intelligence fits naturally into the architecture.
              </p>

              <p className="mb-6">
                I&apos;ve also worked on applied machine learning problems like fraud detection and battery health prediction, and explored reinforcement learning and robotics — which changed how I think about decision-making systems.
              </p>

              <p>
                Right now, I&apos;m focused on backend engineering, system design, and AI integration — and working on problems that require both deep thinking and practical execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
