export default function Highlights() {
  return (
    <section className="mx-auto w-full border-b border-white/10 px-5 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div id="achievements" className="rounded-xl border border-white/10 bg-white/2 p-5 sm:p-6 md:p-8">
          <h2 className="mb-6 text-3xl font-semibold text-zinc-100 sm:mb-8">Highlights</h2>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Systems serving 1200+ users",
              "Designed multi-tenant backend architectures",
              "Built AI systems for real-world applications",
              "Engineered backend systems for production reliability",
              "1st place – Robodog competition (reinforcement learning system)",
              "Recognized for ML project excellence (real-world problem solving)"
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/3 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <p className="text-sm font-medium text-zinc-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}