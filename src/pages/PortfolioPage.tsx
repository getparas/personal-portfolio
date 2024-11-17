import About from "@/components/Layout/About";
import Hero from "@/components/Layout/Hero";
import Navbar from "@/components/Layout/NavBar";
import Projects from "@/components/Layout/Project";
import Service from "@/components/Layout/Service";
import Software from "@/components/Layout/Software";

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-y-auto antialiased">
      <div className="container relative z-10 mx-auto">
        <Navbar />
        <Hero />
        <Software />
        <About />
        <Service />
        <Projects />
      </div>
    </main>
  );
}
