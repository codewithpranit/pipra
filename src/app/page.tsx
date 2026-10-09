import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ThesisSection from "@/components/ThesisSection";
import MethodSection from "@/components/MethodSection";
import FishSection from "@/components/FishSection";
import EcosystemSection from "@/components/EcosystemSection";
import OriginSection from "@/components/OriginSection";
import FoundingTeamSection from "@/components/FoundingTeamSection";
import SymbolsSection from "@/components/SymbolsSection";
import DialogueSection from "@/components/DialogueSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A]">
      <Header />
      <main className="flex-1">
        <Hero />
        <ThesisSection />
        <MethodSection />
        <FishSection />
        <EcosystemSection />
        <OriginSection />
        <FoundingTeamSection />
        <SymbolsSection />
        <DialogueSection />
      </main>
      <Footer />
    </div>
  );
}
