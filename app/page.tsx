import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";

export const metadata = {
  title: "Write on Pedia – Home",
  description: "Professional Wikipedia writing, editing, publishing and consultancy services to help you get listed on Wikipedia.",
  alternates: { canonical: "https://yourdomain.com/" },
};
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
import FAQSection from "../src/components/FAQSection";

export default function Home() {
  return (
    <main className="relative">

      <Navbar />
      <Hero />
      <About />
      <HomeServices />
      <Chapters />
      <SubscribeCTA />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FAQSection />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
