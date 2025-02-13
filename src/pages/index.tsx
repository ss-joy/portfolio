import Intro from "@/components/About";
import Contact from "@/components/contact/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import ScrollToTop from "@/components/ScrollToTop";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white via-sky-300 to-sky-600">
      <div className="max-w-[1080px] mx-auto">
        <NavBar />
        <Intro />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <ScrollToTop />
      </div>
    </div>
  );
}
