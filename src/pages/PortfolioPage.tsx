import About from "@/components/Layout/About";
import ContactMe from "@/components/Layout/Contact";
import Footer from "@/components/Layout/Footer";
import Hero from "@/components/Layout/Hero";
import Navbar from "@/components/Layout/NavBar";
import Projects from "@/components/Layout/Project";
import Service from "@/components/Layout/Service";
import Software from "@/components/Layout/Software";
import Testimonials from "@/components/Layout/Testimonial";

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-y-auto antialiased">
      <div className="container relative z-10 mx-auto">
        <Navbar />
        <Hero />
      </div>
      <Software />
      <div className="container relative mx-auto">
        <About />
        <Service />
        <Projects />
        <Testimonials />
      </div>
      <ContactMe />
      <Footer />
    </main>
  );
}
