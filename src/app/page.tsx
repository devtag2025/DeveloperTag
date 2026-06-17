import ClientsSlider from "@/components/HomeComponents/ClientSlider";
import HeroSection from "@/components/HomeComponents/HeroSection";
import { HomeService } from "@/components/HomeComponents/HomeService";
// import FAQ from "@/components/HomeComponents/FAQ";
import IndustriesWeServe from "@/components/HomeComponents/Industries";


export default function Home() {
  return (
    <>
      <main className="min-h-screen antialiased  bg-grid-white/[0.02]">
        <HeroSection />
        <IndustriesWeServe />
        <HomeService />
        <ClientsSlider />
       
        {/* <FAQ /> */}


      </main>
    </>
  );
}
