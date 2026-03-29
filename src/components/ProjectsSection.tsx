"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category.includes(active));

  return (
    <section className="mx-auto w-full px-5 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap gap-2 border-b border-white/10 pb-4 sm:gap-3 sm:pb-5">
          {["all", "ai", "fullstack"].map((tab) => (
            <Button
              key={tab}
              type="button"
              variant={active === tab ? "secondary" : "outline"}
              size="sm"
              onClick={() => setActive(tab)}
              className={`capitalize text-xs sm:text-sm ${
                active === tab
                  ? "bg-zinc-100 text-zinc-950 hover:bg-zinc-200"
                  : "border-white/15 bg-white/2 text-zinc-300 hover:bg-white/10"
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>

        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {filtered.map((p, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/3 p-4 sm:p-5 md:p-6">
              <h3 className="text-base font-medium text-white sm:text-lg md:text-xl">{p.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{p.problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
