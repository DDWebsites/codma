import About from "@/components/About";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import Steps from "@/components/Steps";
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <News />
      <Steps />
      <FAQ />
      <Footer />
    </main>
  );
}
