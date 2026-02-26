import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Testimonials from "../src/components/Testimonials";
import CTA from "../src/components/CTA";
import HomeServices from "../src/components/HomeServices";
import Chapters from "../src/components/Chapters";
import SubscribeCTA from "../src/components/SubscribeCTA";
import Portfolio from "../src/components/Portfolio";
import Pricing from "../src/components/Pricing";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <HomeServices />
      <Chapters />
      <SubscribeCTA />
      <Portfolio />
      <Pricing />
      <About />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
