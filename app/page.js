import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import Process from "@/components/landing/Process";
import Comparison from "@/components/landing/Comparison";
import CallToAction from "@/components/landing/CallToAction";
import Faq from "@/components/landing/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Process />
      <Comparison />
      <CallToAction />
      <Faq />
    </main>
  );
}
