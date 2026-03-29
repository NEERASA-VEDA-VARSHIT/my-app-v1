import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-6xl overflow-hidden border-b border-white/10 px-5 pb-16 pt-14 md:px-8 md:pb-18 md:pt-16">
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
        <div className="max-w-2xl py-3 md:py-7">
          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-zinc-100 md:text-6xl">
            N. Veda Varshit
          </h1>

          <p className="mb-5 text-lg text-zinc-300 md:text-2xl">
            Full Stack Devloper / AI/ML Enthusiast 
          </p>

          <p className="max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
            I enjoy building usefull systems and scalable applications.
          </p>
        </div>
      </div>
    </section>
  );
}