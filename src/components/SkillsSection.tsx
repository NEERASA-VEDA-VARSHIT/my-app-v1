export default function SkillsSection() {
  const skillGroups = [
    {
      title: "Backend Systems",
      description: "API design, data modeling, multi-tenant flows, reliability engineering",
      usedIn: ["TicketHub", "SaaS Billing"],
    },
    {
      title: "AI / ML",
      description: "Applied ML pipelines, clustering models, retrieval-driven AI workflows",
      usedIn: ["Fraud Detection", "Smart Wardrobe"],
    },
    {
      title: "Systems / Low-Level",
      description: "Concurrency, sockets, request handling, runtime behavior understanding",
      usedIn: ["Multi-Threaded HTTP Server"],
    },
    {
      title: "Architecture",
      description: "RBAC, multi-tenant architecture, layered APIs, long-term system evolution",
      usedIn: ["TicketHub", "SaaS Billing", "Fraud Detection"],
    },
  ];

  return (
    <section className="mx-auto w-full px-5 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-lg border border-white/10 bg-white/3 p-4 sm:p-5">
              <h3 className="text-lg font-semibold text-zinc-100">{group.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{group.description}</p>

              <div className="mt-4 rounded-md border border-white/10 bg-black/20 p-3">
                <p className="mb-2 text-xs uppercase tracking-[0.12em] text-zinc-500">Used In</p>
                <div className="flex flex-wrap gap-2">
                  {group.usedIn.map((project) => (
                    <span key={project} className="rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-xs text-zinc-200">
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
