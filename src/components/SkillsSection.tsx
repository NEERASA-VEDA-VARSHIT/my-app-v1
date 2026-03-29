"use client";

import { useState } from "react";
import { skills } from "@/data/skills";
import { Button } from "@/components/ui/button";

const tabs = ["all", "frontend", "backend", "database", "ai"];

export default function SkillsSection() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? skills
      : skills.filter((s) => s.category.includes(active));

  return (
    <section className="mx-auto w-full px-5 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap gap-2 border-b border-white/10 pb-4 sm:gap-3 sm:pb-5">
          {tabs.map((tab) => (
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

        <div className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2">
          {filtered.map((skill) => (
            <div key={skill.name} className="rounded-lg border border-white/10 bg-white/3 p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-zinc-100 sm:text-base">{skill.name}</h3>
                  <p className="mt-1 text-xs text-zinc-400">{skill.description}</p>
                </div>
              </div>

              <div className="mt-3 sm:mt-4 h-1 w-full rounded-full bg-white/10">
                <div
                  className="h-1 rounded-full bg-zinc-100"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
