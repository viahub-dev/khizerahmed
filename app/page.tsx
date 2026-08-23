import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Creative from "@/components/Creative";
import Tutoring from "@/components/Tutoring";
import QuranTutor from "@/components/QuranTutor";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NasheedPlayer from "@/components/NasheedPlayer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Creative />
        <Tutoring />
        <QuranTutor />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <NasheedPlayer />
    </>
  );
}
