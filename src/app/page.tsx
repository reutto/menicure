import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Locations from "@/components/Locations";
import PromoBlocks from "@/components/PromoBlocks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Team />
        <Testimonials />
        <Services />
        <Gallery />
        <Locations />
        <PromoBlocks />
        <FAQ />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
