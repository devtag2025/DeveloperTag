import ClientsSlider from "@/components/HomeComponents/ClientSlider";
import HeroSection from "@/components/HomeComponents/HeroSection";
import { HomeService } from "@/components/HomeComponents/HomeService";
import { Testimonial } from "@/components/HomeComponents/Testimonial";
// import FAQ from "@/components/HomeComponents/FAQ";
import IndustriesWeServe from "@/components/HomeComponents/Industries";
import Achievements from "@/components/HomeComponents/Achievements";

export default function Home() {
  return (
    <>
      <main className="min-h-screen antialiased  bg-grid-white/[0.02]">
        <HeroSection />
        <ClientsSlider />
        <HomeService />
        <IndustriesWeServe />
        <Achievements />
        <Testimonial />
        {/* <FAQ /> */}


      </main>
    </>
  );
}
