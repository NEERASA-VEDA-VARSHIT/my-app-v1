"use client";

import { featuredProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function FeaturedProjects() {
  const projects = featuredProjects.slice(0, 6);

  return (
    <section className="relative mx-auto w-full border-b border-white/10 px-5 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
            Featured Systems
          </h2>
          <p className="mt-3 text-base text-zinc-400 sm:text-lg">
            Selected systems that reflect my approach to backend architecture, AI integration, and scalable design.
          </p>
        </div>

        <div className="projects-scrollbar -mx-5 overflow-x-auto px-5 pb-2 snap-x snap-mandatory scroll-px-5 sm:-mx-6 sm:px-6 sm:scroll-px-6 md:-mx-8 md:px-8 md:scroll-px-8">
          <div className="grid auto-cols-[85%] grid-flow-col gap-4 sm:auto-cols-[65%] md:auto-cols-[52%] lg:auto-cols-[40%]">
            {projects.map((project) => (
              <div key={project.title} className="snap-start">
                <ProjectCard
                  project={project}
                  className="h-full border-white/15 bg-black/70 backdrop-blur-md shadow-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
