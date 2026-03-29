import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectTimeline from "@/components/ProjectTimeline";
import Footer from "@/components/Footer";
import Writing from "@/components/Writing";
import Highlights from "@/components/Highlights";
import IdentityStatement from "@/components/IdentityStatement";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0d] text-zinc-100">
      <div className="relative min-h-screen w-full overflow-hidden bg-[#101014]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(255,255,255,0.05),transparent_50%),radial-gradient(circle_at_78%_78%,rgba(255,255,255,0.04),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%)]" />
        <div className="relative">
          <Navbar />
          <Hero />
          <Writing />
          <FeaturedProjects />
          <ProjectTimeline />
          <Highlights />
          <About />
          <Footer />
        </div>
      </div>
    </main>
  );
}