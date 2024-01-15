import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import WhoAmI from "@/components/WhoAmI";
import SectionDivider from "@/components/helpers/SectionDivider";

export default function Home() {
  return (
    <main className={`flex flex-col items-center pt-28 md:pt-36 lg:pt-44 z-10 px-6 sm:px-16 md:px-28 lg:px-44 xl:px-60 2xl:px-84`}>
      <Hero />
      <SectionDivider />
      <About />
      {/* <WhoAmI /> */}
      <SectionDivider />
      <Experience />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Education />
      <Testimonials />
      <SectionDivider />
      <Contact />
    </main>
  );
};
