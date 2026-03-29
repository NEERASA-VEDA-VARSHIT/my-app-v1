import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full border-b border-white/10 px-5 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-3xl font-semibold text-zinc-100 sm:mb-8">
          Featured Project
        </h2>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/3">
          <div className="grid gap-6 p-5 sm:gap-7 sm:p-6 md:grid-cols-[1fr_1.1fr] md:p-8">
            <div>
              <h3 className="mb-3 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
                TicketHub
              </h3>

              <div className="space-y-4 text-sm text-zinc-400 sm:text-base">
                <p>
                  <span className="font-semibold text-zinc-200">Problem:</span> Institutions
                  needed a platform for fast escalation and tracking of complaints.
                </p>
                <p>
                  <span className="font-semibold text-zinc-200">Solution:</span> Built a
                  multi-tenant ticketing system with role-based access control, workflow automation,
                  and structured data handling. Used by 1200+ users.
                </p>
              </div>

              <div className="mb-6 mt-6 flex flex-wrap gap-2 sm:mb-8 sm:mt-7">
                {["Next.js", "PostgreSQL", "TypeScript", "Supabase", "Workflow Automation"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-white/3 px-2.5 py-1 text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="mb-3 text-lg font-semibold text-zinc-100 sm:mb-4 sm:text-xl">
                Architecture
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300 sm:grid-cols-4 sm:text-sm">
                <div className="rounded-lg border border-white/10 bg-white/3 p-2 text-center sm:p-3">
                  Multi-tenant
                </div>
                <div className="rounded-lg border border-white/10 bg-white/3 p-2 text-center sm:p-3">
                  RBAC
                </div>
                <div className="rounded-lg border border-white/10 bg-white/3 p-2 text-center sm:p-3">
                  API Routes
                </div>
                <div className="rounded-lg border border-white/15 bg-white/5 p-2 text-center text-zinc-100 sm:p-3">
                  PostgreSQL
                </div>
              </div>
            </div>

            <div className="relative hidden overflow-hidden rounded-xl border border-white/10 bg-black/20 md:block">
              <Image
                src="/hero-bg.png"
                alt="Project screenshot"
                width={1200}
                height={800}
                className="h-full w-full object-cover opacity-80"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0b0b0e] via-transparent to-[#0b0b0e]/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}