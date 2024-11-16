import { Raleway } from "next/font/google";
import HeroAgents from "@/components/agents/HeroAgents";
import Stats from "@/components/agents/Stats";
import Process from "@/components/agents/Process";
import Features from "@/components/agents/Features";
import ROICalculator from "@/components/agents/ROICalculator";

const raleway = Raleway({ subsets: ["latin"] });

export default function AgentsPage() {
  return (
    <main className={raleway.className}>
      <HeroAgents />
      <Stats />
      <Process />
      <Features />
      <ROICalculator />
    </main>
  );
}
