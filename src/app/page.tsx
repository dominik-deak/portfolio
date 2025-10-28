import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <Experience />
        <Skills />
        <Education />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
