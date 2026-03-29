import Link from "next/link";

export default function Footer() {
  return (
    <footer id="about" className="mx-auto w-full px-5 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="border-b border-white/10 pb-8 text-center sm:pb-10">
          <h2 className="mb-3 text-3xl font-medium tracking-tight text-zinc-100 sm:mb-4 sm:text-4xl">
            Let&apos;s build something impactful.
          </h2>

          <p className="mb-6 text-2xl text-blue-400  sm:mb-8 sm:text-3xl">
            <a href="mailto:nvedavarshit@gmail.com" className="transition hover:text-zinc-100">
              nvedavarshit@gmail.com ↗
            </a>
          </p>

          <div id="skills" className="flex flex-wrap justify-center gap-4 text-xs text-zinc-500 sm:gap-6 sm:text-sm">
            <Link href="https://github.com/NEERASA-VEDA-VARSHIT" target="_blank" className="transition hover:text-zinc-200">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/nvedavarshit/" target="_blank" className="transition hover:text-zinc-200">
              LinkedIn
            </Link>
          <p className="text-xs text-zinc-600">© {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}