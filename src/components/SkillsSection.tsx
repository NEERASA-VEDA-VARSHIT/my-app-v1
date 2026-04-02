"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  Bot,
  Brain,
  Building2,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Network,
  Server,
  ShieldCheck,
  Timer,
  Workflow,
} from "lucide-react";

type SkillCategory = "Backend" | "Data" | "AI/ML" | "Systems" | "Architecture";

type SkillItem = {
  name: string;
  category: SkillCategory;
  icon: ReactNode;
  what: string;
  usedIn: string[];
};

const filters: Array<"All" | SkillCategory> = ["All", "Backend", "Data", "AI/ML", "Systems", "Architecture"];

const skills: SkillItem[] = [
  {
    name: "API Design",
    category: "Backend",
    icon: <Server className="h-8 w-8" aria-hidden="true" />,
    what: "REST APIs, route design, validation, and version-safe contracts.",
    usedIn: ["TicketHub", "SaaS Billing"],
  },
  {
    name: "Access Control",
    category: "Backend",
    icon: <ShieldCheck className="h-8 w-8" aria-hidden="true" />,
    what: "Role-based access control and permission boundaries.",
    usedIn: ["TicketHub"],
  },
  {
    name: "Data Modeling",
    category: "Data",
    icon: <Database className="h-8 w-8" aria-hidden="true" />,
    what: "Schema design, indexing strategy, and relation planning.",
    usedIn: ["TicketHub", "SaaS Billing", "Smart Wardrobe"],
  },
  {
    name: "Workflow Automation",
    category: "Architecture",
    icon: <Workflow className="h-8 w-8" aria-hidden="true" />,
    what: "Stateful process automation with clear event-driven transitions.",
    usedIn: ["TicketHub", "SaaS Billing"],
  },
  {
    name: "Model Serving",
    category: "AI/ML",
    icon: <Brain className="h-8 w-8" aria-hidden="true" />,
    what: "Integrating ML outputs inside product workflows.",
    usedIn: ["Fraud Detection", "Battery Health Prediction"],
  },
  {
    name: "AI Integration",
    category: "AI/ML",
    icon: <Bot className="h-8 w-8" aria-hidden="true" />,
    what: "Prompt flows, RAG patterns, and context-aware user interactions.",
    usedIn: ["Smart Wardrobe", "Smart Mirror"],
  },
  {
    name: "Concurrency",
    category: "Systems",
    icon: <Cpu className="h-8 w-8" aria-hidden="true" />,
    what: "Parallel request handling and thread-safe runtime behavior.",
    usedIn: ["Multi-Threaded HTTP Server"],
  },
  {
    name: "Networking",
    category: "Systems",
    icon: <Network className="h-8 w-8" aria-hidden="true" />,
    what: "Socket lifecycle handling and low-level communication flow.",
    usedIn: ["Multi-Threaded HTTP Server"],
  },
  {
    name: "Multi-Tenancy",
    category: "Architecture",
    icon: <Building2 className="h-8 w-8" aria-hidden="true" />,
    what: "Tenant isolation, shared infrastructure, and scoped data access.",
    usedIn: ["TicketHub", "SaaS Billing"],
  },
  {
    name: "Reliability",
    category: "Architecture",
    icon: <Timer className="h-8 w-8" aria-hidden="true" />,
    what: "Idempotency, retries, and deterministic processing paths.",
    usedIn: ["SaaS Billing", "Fraud Detection"],
  },
  {
    name: "System Thinking",
    category: "Architecture",
    icon: <Layers className="h-8 w-8" aria-hidden="true" />,
    what: "Designing components as evolvable systems, not isolated features.",
    usedIn: ["TicketHub", "Smart Wardrobe", "Fraud Detection"],
  },
  {
    name: "Integration Flows",
    category: "Backend",
    icon: <GitBranch className="h-8 w-8" aria-hidden="true" />,
    what: "Service orchestration and predictable backend handoff patterns.",
    usedIn: ["SaaS Billing", "Smart Mirror"],
  },
];

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const filteredSkills = useMemo(() => {
    if (activeFilter === "All") return skills;
    return skills.filter((skill) => skill.category === activeFilter);
  }, [activeFilter]);

  const selectedSkill = useMemo(() => {
    if (!activeSkill) return null;
    return skills.find((skill) => skill.name === activeSkill) ?? null;
  }, [activeSkill]);

  return (
    <section className="mx-auto w-full px-5 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap gap-2 sm:gap-3">
          {filters.map((filter) => {
            const isActive = filter === activeFilter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={[
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition sm:px-4 sm:py-2 sm:text-sm",
                  isActive
                    ? "border-blue-400/60 bg-blue-400/15 text-blue-100"
                    : "border-white/15 bg-white/5 text-zinc-300 hover:border-blue-400/40 hover:text-zinc-100",
                ].join(" ")}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6">
          {filteredSkills.map((skill) => (
            <article
              key={skill.name}
              className={[
                "group relative overflow-hidden rounded-xl border p-4 text-center transition-all duration-300",
                "bg-gradient-to-br from-white/[0.06] to-white/[0.02] hover:from-blue-500/10 hover:to-blue-400/5",
                "hover:border-blue-400/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]",
                activeSkill === skill.name ? "border-blue-400/60" : "border-white/10",
              ].join(" ")}
              onClick={() => setActiveSkill((current) => (current === skill.name ? null : skill.name))}
            >
              <div className="flex min-h-[120px] flex-col items-center justify-center text-blue-400 transition group-hover:scale-110">
                {skill.icon}
                <p className="mt-3 text-xs font-medium tracking-wide text-zinc-200 sm:text-sm">{skill.name}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-zinc-500">{skill.category}</p>
              </div>

              <div
                className={[
                  "pointer-events-none absolute inset-0 hidden flex-col justify-center rounded-xl bg-black/90 p-4 text-left transition duration-300 md:flex",
                  activeSkill === skill.name ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                ].join(" ")}
              >
                <p className="text-xs uppercase tracking-[0.12em] text-blue-300">What</p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-300">{skill.what}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.12em] text-blue-300">Used In</p>
                <p className="mt-1 text-xs text-zinc-300">{skill.usedIn.join(" • ")}</p>
              </div>
            </article>
          ))}
        </div>

        {selectedSkill ? (
          <div className="mt-5 rounded-xl border border-blue-400/30 bg-gradient-to-br from-blue-500/10 to-white/[0.02] p-4 sm:p-5 md:hidden">
            <p className="text-sm font-semibold text-zinc-100">{selectedSkill.name}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-blue-300">{selectedSkill.category}</p>

            <p className="mt-4 text-xs uppercase tracking-[0.12em] text-blue-300">What</p>
            <p className="mt-1 text-sm leading-relaxed text-zinc-300">{selectedSkill.what}</p>

            <p className="mt-4 text-xs uppercase tracking-[0.12em] text-blue-300">Used In</p>
            <p className="mt-1 text-sm text-zinc-300">{selectedSkill.usedIn.join(" • ")}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
