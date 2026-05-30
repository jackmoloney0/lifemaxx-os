import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ClientTicker } from "@/components/shared/ClientTicker";
import { Services } from "@/components/Services";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Process } from "@/components/Process";
import { CreativeBriefEngine } from "@/components/sections/CreativeBriefEngine";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ClientTicker />
        <Services />
        <SelectedWork />
        <Process />
        <CreativeBriefEngine />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
