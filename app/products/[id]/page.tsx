import { PRODUCTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.id === parseInt(resolvedParams.id));

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-sage-200 selection:text-sage-900">
      <Header />
      <ProductDetail product={product} />
      <Footer />
    </main>
  );
}

// Generate static params so these pages are statically generated at build time
export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id.toString(),
  }));
}
