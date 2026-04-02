"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 mx-auto w-full border-b border-white/10 px-5 py-4 backdrop-blur-md md:px-8 md:py-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="text-2xl font-semibold tracking-[0.15em] text-zinc-200 md:text-3xl">
          N. VedaVarshit
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          <div className="flex items-center gap-7 text-sm text-zinc-400">
            <Link href="/projects" className="transition hover:text-zinc-100">
              Projects
            </Link>
            <Link href="#featuredProjects" className="transition hover:text-zinc-100">
              Featured Systems
            </Link>
            <Link href="/skills" className="transition hover:text-zinc-100">
              Skills
            </Link>
            <Link href="#highlights" className="transition hover:text-zinc-100">
              Highlights
            </Link>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="border-white/15 bg-white/2 px-4 text-zinc-200 hover:bg-white/10"
          >
            <a href="/resume.pdf" className="inline-flex items-center gap-1">
              Download CV
              <span aria-hidden="true">↗</span>
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden items-center justify-center rounded-lg border border-white/10 bg-white/2 p-2 text-zinc-200 transition hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 border-b border-white/10 bg-[#0a0a0d]/95 backdrop-blur-md md:hidden">
          <div className="mx-auto max-w-6xl space-y-3 px-5 py-4">
            <Link
              href="/projects"
              className="block text-sm text-zinc-400 transition hover:text-zinc-100"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="block text-sm text-zinc-400 transition hover:text-zinc-100"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/skills"
              className="block text-sm text-zinc-400 transition hover:text-zinc-100"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#achievements"
              className="block text-sm text-zinc-400 transition hover:text-zinc-100"
              onClick={() => setIsOpen(false)}
            >
              Achievements
            </Link>
            <div className="border-t border-white/10 pt-3">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-white/15 bg-white/2 text-zinc-200 hover:bg-white/10"
              >
                <a href="/resume.pdf" className="inline-flex items-center gap-1">
                  Download CV
                  <span aria-hidden="true">↗</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}