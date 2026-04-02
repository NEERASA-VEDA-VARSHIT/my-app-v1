"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaJava,
  FaJs,
  FaNode,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

type SkillCategory = "Frontend" | "Backend" | "Database" | "Language" | "Mobile";

type SkillItem = {
  name: string;
  category: SkillCategory;
  icon: ReactNode;
  what: string;
  usedIn: string[];
};

const filters: Array<"All" | SkillCategory> = ["All", "Frontend", "Backend", "Database", "Language", "Mobile"];

const skills: SkillItem[] = [
  {
    name: "C++",
    category: "Language",
    icon: <SiCplusplus className="h-8 w-8" aria-hidden="true" />,
    what: "Low-level programming for performance-critical and systems-heavy logic.",
    usedIn: ["Multi-Threaded HTTP Server", "Algorithmic Problem Solving"],
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: <SiMongodb className="h-8 w-8" aria-hidden="true" />,
    what: "Document database modeling for flexible schemas and rapid iteration.",
    usedIn: ["TicketHub", "Smart Wardrobe"],
  },
  {
    name: "Express",
    category: "Backend",
    icon: <SiExpress className="h-8 w-8" aria-hidden="true" />,
    what: "Server APIs, middleware pipelines, and backend route orchestration.",
    usedIn: ["TicketHub", "SaaS Billing", "Smart Mirror"],
  },
  {
    name: "React",
    category: "Frontend",
    icon: <FaReact className="h-8 w-8" aria-hidden="true" />,
    what: "Component-driven UI architecture for responsive web interfaces.",
    usedIn: ["Portfolio", "TicketHub Admin"],
  },
  {
    name: "React Native",
    category: "Mobile",
    icon: <FaReact className="h-8 w-8" aria-hidden="true" />,
    what: "Cross-platform mobile app interfaces with shared React paradigms.",
    usedIn: ["Mobile Prototypes", "Hybrid App Experiments"],
  },
  {
    name: "Node",
    category: "Backend",
    icon: <FaNode className="h-8 w-8" aria-hidden="true" />,
    what: "Runtime for event-driven backend services and API processing.",
    usedIn: ["TicketHub", "SaaS Billing", "Smart Mirror"],
  },
  {
    name: "MySQL",
    category: "Database",
    icon: <SiMysql className="h-8 w-8" aria-hidden="true" />,
    what: "Relational schema design and transactional queries.",
    usedIn: ["SaaS Billing", "TicketHub"],
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: <SiPostgresql className="h-8 w-8" aria-hidden="true" />,
    what: "Reliable relational storage with strong consistency and indexing.",
    usedIn: ["SaaS Billing", "Analytics Services"],
  },
  {
    name: "Python",
    category: "Language",
    icon: <FaPython className="h-8 w-8" aria-hidden="true" />,
    what: "Data workflows, ML experimentation, and automation scripting.",
    usedIn: ["Fraud Detection", "Battery Health Prediction"],
  },
  {
    name: "Java",
    category: "Language",
    icon: <FaJava className="h-8 w-8" aria-hidden="true" />,
    what: "Object-oriented architecture and strongly typed backend development.",
    usedIn: ["DSA Practice", "Backend Coursework"],
  },
  {
    name: "HTML",
    category: "Frontend",
    icon: <FaHtml5 className="h-8 w-8" aria-hidden="true" />,
    what: "Semantic structure for accessible and maintainable web pages.",
    usedIn: ["Portfolio", "Landing Pages"],
  },
  {
    name: "CSS",
    category: "Frontend",
    icon: <FaCss3Alt className="h-8 w-8" aria-hidden="true" />,
    what: "Responsive layouts, design systems, and polished UI behavior.",
    usedIn: ["Portfolio", "TicketHub Frontend"],
  },
  {
    name: "JS",
    category: "Language",
    icon: <FaJs className="h-8 w-8" aria-hidden="true" />,
    what: "Core language for interactive web experiences and full-stack logic.",
    usedIn: ["Portfolio", "TicketHub", "SaaS Billing"],
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
                <p className="mt-1 text-xs text-zinc-300">{skill.usedIn.join(" | ")}</p>
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
            <p className="mt-1 text-sm text-zinc-300">{selectedSkill.usedIn.join(" | ")}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
