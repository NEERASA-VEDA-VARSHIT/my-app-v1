import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProjectsSection from "@/components/ProjectsSection";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0d] px-4 py-6 text-zinc-100 md:px-8 md:py-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#101014]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.05),transparent_48%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.03),transparent_48%)]" />

        <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 pt-5 md:px-8">
          <nav className="mb-10 flex items-center justify-between border-b border-white/10 pb-4 text-sm">
            <div className="flex items-center gap-7 text-zinc-400">
              <span className="font-semibold tracking-[0.2em] text-zinc-200">VV</span>
              <Link href="/projects" className="text-zinc-100">
                Projects
              </Link>
              <Link href="/" className="transition hover:text-zinc-100">
                About
              </Link>
              <Link href="/skills" className="transition hover:text-zinc-100">
                Skills
              </Link>
              <Link href="/" className="transition hover:text-zinc-100">
                Achievements
              </Link>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="border-white/15 bg-white/2 text-zinc-200 hover:bg-white/10"
            >
              Download CV
            </Button>
          </nav>

          <h1 className="mb-6 text-5xl font-semibold tracking-tight text-zinc-100">Projects</h1>
          <ProjectsSection />
        </div>
      </div>
    </main>
  );
}