import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl w-full overflow-hidden border-b border-white/10 px-5 pb-14 pt-14 md:px-8 md:pt-16">
      <Image
        src="/hero.png"
        alt="Veda Varshit portrait background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#0a0a0d]/95 via-[#0a0a0d]/70 to-[#0a0a0d]/30" />

      <div className="relative">
        <div className="max-w-2xl py-2 md:py-6">
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
            System Builder / Tinkerer / Explorer
          </h1>

          <p className="mb-7 text-l text-zinc-300 md:text-xl">
            Full Stack Engineer ·  Systems Builder
          </p>

          <p className="mb-9 max-w-xl text-lg leading-relaxed text-zinc-400">
            I build scalable systems and AI-powered applications focused on
            performance, reliability, and real-world use.
          </p>

          

          <div className="flex flex-wrap gap-3">
            <Button className="h-11 bg-zinc-100 px-5 text-zinc-950 hover:bg-zinc-200">
              View Projects <span aria-hidden="true">↗</span>
            </Button>

            <Button
              variant="outline"
              className="h-11 border-white/15 bg-white/2 px-5 text-zinc-200 hover:bg-white/10"
            >
              GitHub <span aria-hidden="true">↗</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}