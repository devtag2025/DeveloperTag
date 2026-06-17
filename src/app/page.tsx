import ClientsSlider from "@/components/HomeComponents/ClientSlider";
import HeroSection from "@/components/HomeComponents/HeroSection";
import { HomeService } from "@/components/HomeComponents/HomeService";
// import FAQ from "@/components/HomeComponents/FAQ";
import IndustriesWeServe from "@/components/HomeComponents/Industries";
import Testimonials from "@/components/HomeComponents/Testimonial";
import OurServices from "@/components/HomeComponents/OurServices";


export default function Home() {
  return (
    <>
      <main className="min-h-screen antialiased  bg-grid-white/[0.02]">
        <HeroSection />
        <IndustriesWeServe />
        <HomeService />
        <OurServices />
        <Testimonials />
        <ClientsSlider />
       
        {/* <FAQ /> */}


      </main>
    </>
  );
}
