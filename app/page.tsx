import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";

export const metadata = {
  title: "Hire Professional Wikipedia Writers USA - Write On Pedia",
  description: "Our team of Wikipedia writers offers reliable support for Wikipedia page creation and publishing services across USA. Hire Wikipedia writers today.",
  alternates: { canonical: "https://writeonpedia.com/" },
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
      <HomeServices />
      <Chapters />
      <SubscribeCTA />
      <Portfolio />
      {/* <Pricing /> */}
      <Testimonials />
      {/* <FAQSection /> */}
      <About />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
