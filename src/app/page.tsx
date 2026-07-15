import Navbar from "@/components/Navbar";
import TerminalHero from "@/components/TerminalHero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import AutomationGallery from "@/components/AutomationGallery";
import TechStack from "@/components/TechStack";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <TerminalHero />
        <Stats />
        <About />
        <Skills />
        <Services />
        <Pricing />
        <Process />
        <Projects />
        <AutomationGallery />
        <TechStack />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
