"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";

export default function ProductGrid() {
  const displayProducts = PRODUCTS.slice(0, 4);

  return (
    <section id="products" className="py-40 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold tracking-[0.3em] text-sage-600 uppercase mb-4 block">The Gallery</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-deep mb-2 leading-[1.1]">
              CURATED <br/> EXCELLENCE
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link 
              href="/products"
              className="text-sm font-bold uppercase tracking-[0.2em] text-slate-deep border-b-2 border-slate-900 pb-2 hover:text-sage-600 hover:border-sage-600 transition-colors inline-block"
            >
              Explore The Archive
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {displayProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group cursor-pointer flex flex-col"
            >
              <Link href={`/products/${product.id}`} className="flex flex-col h-full">
                {/* Image Canvas */}
                <div className="relative aspect-[3/4] bg-slate-50 rounded-2xl mb-8 flex items-center justify-center p-12 transition-all duration-700 group-hover:bg-slate-100 overflow-hidden">
                  {/* Museum soft lighting gradient */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                  
                  {/* Product Image */}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain filter drop-shadow-xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:-translate-y-4 relative z-10"
                  />

                  {/* Secret Action Button */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] py-4 rounded-xl bg-white/70 backdrop-blur-md border border-white/50 text-slate-deep font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-20 hover:bg-slate-900 hover:text-white">
                    Discover Series <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Product Metadata */}
                <div className="px-2">
                  <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase block mb-3">{product.category}</span>
                  <div className="flex justify-between items-center group-hover:text-sage-600 transition-colors duration-500">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-deep">{product.name}</h3>
                    <span className="text-lg font-light text-slate-500 tracking-wide">${product.price}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
