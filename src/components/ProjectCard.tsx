import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <div className={`group flex flex-col rounded-2xl overflow-hidden bg-white/3 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 ${className}`}>
      {/* Image Container */}
      <div className="h-48 overflow-hidden bg-white/5">
        <div className="relative w-full h-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Fallback overlay if image doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl group-hover:text-white transition-colors">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-zinc-400 line-clamp-2 sm:line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 bg-white/10 border border-white/10 rounded-full text-zinc-200 hover:bg-white/15 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
