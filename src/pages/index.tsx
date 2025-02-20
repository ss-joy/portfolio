import Intro from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/contact/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import NavBar from "@/components/NavBar";
import { SideNavBar } from "@/components/navigations/SideNavBar";
import Projects from "@/components/projects/Projects";
import ScrollToTop from "@/components/ScrollToTop";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white via-sky-300 to-sky-600 px-4">
      <div className="max-w-[1080px] mx-auto">
        <SideNavBar />
        <NavBar />
        <Intro />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
        <ScrollToTop />
      </div>
    </div>
  );
}
