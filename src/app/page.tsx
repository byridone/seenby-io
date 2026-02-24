import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AIEcosystem from "@/components/AIEcosystem";
import Niches from "@/components/Niches";
import Testimonials from "@/components/Testimonials";
import PricingCards from "@/components/PricingCards";
import FAQ from "@/components/FAQ";
import SectionSeparator from "@/components/SectionSeparator";
import AIDictionaryDrawer from "@/components/AIDictionaryDrawer";
import SeoVsGeoDrawer from "@/components/SeoVsGeoDrawer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <AIDictionaryDrawer />
      <SeoVsGeoDrawer />
      <SectionSeparator />
      <HowItWorks />
      <SectionSeparator />
      <AIEcosystem />
      <SectionSeparator />
      <Niches />
      <SectionSeparator />
      <Testimonials />
      <SectionSeparator />
      <PricingCards />
      <SectionSeparator />
      <FAQ />
      <Footer />
    </main>
  );
}
