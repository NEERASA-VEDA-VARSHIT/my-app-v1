import ProjectTimeline from "./ProjectTimeline";

export default function Highlights() {
  return (
    <section className="mx-auto w-full border-b border-white/10 px-5 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <ProjectTimeline />
          </div>

          <div id="achievements" className="rounded-xl border border-white/10 bg-white/2 p-5 sm:p-6">
            <h2 className="mb-6 text-3xl font-semibold text-zinc-100 sm:mb-8">
              Highlights
            </h2>

            <div className="grid gap-3 sm:grid-cols-1">
              {[
                {
                  title: "Built systems used by 1200+",
                  copy: "users globally",
                },
                {
                  title: "Designed multi-tenant",
                  copy: "backend systems",
                },
                {
                  title: "Built AI-powered and",
                  copy: "ML-driven applications",
                },
                {
                  title: "Worked on real-world",
                  copy: "systems with production usage",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/3 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                >
                  <p className="text-sm font-medium text-zinc-100">✓ {item.title}</p>
                  <p className="mt-1 text-xs text-zinc-400">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}