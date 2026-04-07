import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AgentSection from "@/components/AgentSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-sage-200 selection:text-sage-900">
      <Header />
      <HeroSection />
      
      <div className="relative z-20 bg-white">
        <FeaturesSection />
        <AgentSection />
        <ProductGrid />
      </div>

      <Footer />
    </main>
  );
}
