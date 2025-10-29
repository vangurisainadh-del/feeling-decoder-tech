import Hero from "@/components/Hero";
import About from "@/components/About";
import SystemDesign from "@/components/SystemDesign";
import Technologies from "@/components/Technologies";
import Demo from "@/components/Demo";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <SystemDesign />
      <Technologies />
      <Demo />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
