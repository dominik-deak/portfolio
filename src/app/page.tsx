import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </main>
  );
};

export default Home;
