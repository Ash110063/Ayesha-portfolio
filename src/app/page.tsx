import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import WorkStack from "@/components/sections/WorkStack";
import About from "@/components/sections/About";
import WhyMe from "@/components/sections/WhyMe";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <WorkStack />
        <About />
        <WhyMe />
        <Services />
        <Process />
        <Faq />
        <Footer />
      </main>
    </>
  );
}
