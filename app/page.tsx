import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navItems } from "@/data";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <FloatingNav navItems={navItems} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}