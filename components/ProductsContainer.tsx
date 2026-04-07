"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";


const CATEGORIES = ["All", "Core Foundation", "Cognitive Focus", "Deep Recovery", "Immune Matrix", "Performance"];
const SORT_OPTIONS = [
  { label: "Recommended", value: "recommended" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Name: A to Z", value: "name_asc" },
];

export default function ProductsContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("recommended");

  // Filtering and Sorting logic
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by Category
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Filter by Search Search
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q));
    }

    // Sort
    switch (sortBy) {
      case "price_asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name_asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "recommended":
      default:
        // Keep initial order for recommended
        break;
    }

    return result;
  }, [searchQuery, activeCategory, sortBy]);

  return (
    <section className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-bold tracking-[0.3em] text-sage-600 uppercase mb-4 block"
          >
            The Collection
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-deep mb-6 leading-[1.1]"
          >
            DISCOVER <br className="md:hidden" /> YOUR PEAK
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            Explore our curated selection of high-performance nutrition designed to elevate your physical and cognitive capabilities.
          </motion.p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 bg-white p-6 rounded-2xl shadow-sm border border-slate-100/50">
          
          {/* Search */}
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500/50 focus:border-sage-500 transition-all text-slate-深"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 w-full lg:w-auto">
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide shrink-0">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all",
                    activeCategory === cat 
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/20" 
                      : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="h-8 w-px bg-slate-200 hidden md:block"></div>

            {/* Sort */}
            <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
              <SlidersHorizontal className="text-slate-400" size={18} />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-sm font-semibold text-slate-700 py-2 focus:outline-none cursor-pointer hover:text-sage-600 transition-colors appearance-none pr-4"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="min-h-[50vh]">
          {filteredAndSortedProducts.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-400">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-deep mb-2">No products found</h3>
              <p className="text-slate-500">Try adjusting your filters or search query.</p>
              <button 
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-6 px-6 py-2 bg-sage-50 text-sage-700 rounded-full text-sm font-bold tracking-wide uppercase hover:bg-sage-100 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              <AnimatePresence>
                {filteredAndSortedProducts.map((product) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={product.id}
                    className="group cursor-pointer flex flex-col"
                  >
                    <Link href={`/products/${product.id}`} className="flex flex-col h-full">
                      {/* Image Canvas */}
                      <div className="relative aspect-[4/5] bg-white rounded-2xl mb-6 flex items-center justify-center p-10 transition-all duration-700 group-hover:bg-slate-100 overflow-hidden shadow-sm border border-slate-100/50 group-hover:shadow-xl group-hover:border-transparent">
                        {/* Soft gradient */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                        
                        {/* Product Image */}
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-contain filter drop-shadow-lg transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:-translate-y-2 relative z-10"
                        />

                        {/* Action Button */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] py-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-20 hover:bg-sage-600">
                          View Details <ArrowUpRight size={14} />
                        </div>
                      </div>

                      {/* Product Metadata */}
                      <div className="px-2">
                        <span className="text-xs font-bold tracking-[0.2em] text-slate-400/80 uppercase block mb-2">{product.category}</span>
                        <div className="flex justify-between items-center group-hover:text-sage-600 transition-colors duration-500">
                          <h3 className="text-xl font-bold tracking-tight text-slate-deep">{product.name}</h3>
                          <span className="text-base font-medium text-slate-500">${product.price}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
