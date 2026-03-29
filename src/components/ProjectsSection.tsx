"use client";

import { useState } from "react";
import Image from "next/image";
import { featuredProjects } from "@/data/projects";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? featuredProjects
      : featuredProjects.filter(
          (p) => p.category.includes(active) || p.tags.some((tag) => tag.toLowerCase().includes(active)),
        );

  return (
    <section className="mx-auto w-full px-5 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap gap-2 border-b border-white/10 pb-4 sm:gap-3 sm:pb-5">
          {["all", "backend", "ai", "systems"].map((tab) => (
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
            <div
              key={p.title + i}
              className="grid gap-5 rounded-xl border border-white/10 bg-white/3 p-4 sm:p-5 md:grid-cols-[1.2fr_0.8fr] md:p-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.description}</p>

                <div className="mt-4 rounded-lg border border-white/10 bg-black/20 p-3">
                  <p className="mb-2 text-xs uppercase tracking-[0.12em] text-zinc-500">System Signals</p>
                  <div className="space-y-1.5 text-xs text-zinc-300 sm:text-sm">
                    {p.signals?.scale ? <p>Scale: {p.signals.scale}</p> : null}
                    {p.signals?.architecture ? <p>Architecture: {p.signals.architecture}</p> : null}
                    {p.signals?.backend ? <p>Backend: {p.signals.backend}</p> : null}
                    {p.signals?.data ? <p>Data: {p.signals.data}</p> : null}
                    {p.signals?.models ? <p>Models: {p.signals.models}</p> : null}
                    {p.signals?.output ? <p>Output: {p.signals.output}</p> : null}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-xs text-zinc-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative h-48 overflow-hidden rounded-lg border border-white/10 bg-black/20 md:h-full md:min-h-52">
                <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
