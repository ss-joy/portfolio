import Intro from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/contact/Contact";
import Education from "@/components/Education";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { SideNavBar } from "@/components/navigations/SideNavBar";
import Projects from "@/components/projects/Projects";
import ScrollToTop from "@/components/ScrollToTop";
import Skills from "@/components/skills/Skills";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-sky-100 text-slate-900 ">
      <main className={`max-w-[1080px] mx-auto px-4 ${roboto.className}`}>
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
      </main>
      <Footer />
    </div>
  );
}
