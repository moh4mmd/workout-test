"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ShoppingCart, ShieldCheck, Zap, Droplets } from "lucide-react";
import Link from "next/link";
import { Product } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ProductDetail({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Back Navigation */}
        <Link 
          href="/products" 
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Image Canvas */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="top-32"
          >
            <div className="relative aspect-[4/5] bg-white rounded-[2rem] flex items-center justify-center p-12 lg:p-20 shadow-sm border border-slate-100 overflow-hidden sticky top-32">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-100 via-transparent to-transparent z-0" />
              
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain filter drop-shadow-2xl relative z-10"
              />
            </div>
          </motion.div>

          {/* Right Column: Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-sm font-bold tracking-[0.3em] text-sage-600 uppercase mb-4 block">
              {product.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-deep mb-6 leading-[1.1]">
              {product.name}
            </h1>
            <p className="text-2xl font-medium text-slate-500 mb-8 border-b border-slate-200 pb-8">
              ${product.price}.00 <span className="text-sm font-normal text-slate-400 block mt-2">One-time purchase</span>
            </p>

            {/* Description */}
            <div className="mb-12">
              <p className="text-lg text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Add to Cart Action */}
            <div className="mb-16">
              <button 
                onClick={handleAddToCart}
                disabled={added}
                className={cn(
                  "w-full py-5 rounded-2xl font-bold tracking-widest uppercase text-sm transition-all duration-300 flex items-center justify-center gap-3",
                  added 
                    ? "bg-sage-500 text-white shadow-lg shadow-sage-500/30" 
                    : "bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/20 hover:shadow-slate-900/40 hover:-translate-y-1"
                )}
              >
                {added ? (
                  <><Check size={20} /> Added to Cart</>
                ) : (
                  <><ShoppingCart size={20} /> Add to Cart — ${product.price}</>
                )}
              </button>
              
              {/* Trust badges */}
              <div className="flex items-center justify-center gap-6 mt-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><ShieldCheck size={14} /> Secure</span>
                <span className="flex items-center gap-1.5"><Zap size={14} /> Fast Shipping</span>
              </div>
            </div>

            {/* Deep Dive Details */}
            <div className="space-y-10">
              
              {/* Benefits */}
              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] text-slate-800 uppercase mb-6 flex items-center gap-2">
                  <span className="w-8 h-px bg-sage-500 block"></span> Core Benefits
                </h3>
                <ul className="space-y-4">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-sage-50 text-sage-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ingredients */}
              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] text-slate-800 uppercase mb-6 flex items-center gap-2">
                  <span className="w-8 h-px bg-sage-500 block"></span> Key Ingredients
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {product.ingredients.map((ingredient, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                      <Droplets className="text-sage-400 shrink-0" size={16} />
                      <span className="text-sm font-semibold text-slate-700">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
