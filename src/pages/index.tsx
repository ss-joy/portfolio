import Intro from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import ScrollToTop from "@/components/ScrollToTop";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="max-w-[1080px] mx-auto relative">
      <NavBar />
      <Intro />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
}
