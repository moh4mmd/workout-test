import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsContainer from "@/components/ProductsContainer";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-sage-200 selection:text-sage-900">
      <Header />
      <ProductsContainer />
      <Footer />
    </main>
  );
}
