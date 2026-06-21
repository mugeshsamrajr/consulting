import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import CaseStudySection from "../components/home/CaseStudySection";
import TrustedSection from "../components/home/TrustedSection";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CaseStudySection />
        <TrustedSection />
      </main>

      <Footer />
    </>
  );
}