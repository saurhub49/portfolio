import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/helpers/SectionDivider";

export default function Home() {
  return (
    <main className={`flex flex-col items-center pt-48 z-10 px-10 sm:px-16 md:px-28 lg:px-44 xl:px-60 2xl:px-84`}>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
    </main>
  );
};
