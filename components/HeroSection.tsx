"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scale down the product image softly as we scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const yAxis = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Typographic Background */}
        <motion.div 
          className="absolute inset-x-0 top-[15%] text-center z-0 pointer-events-none"
          style={{ opacity: opacityText }}
        >
          <h1 className="text-[8rem] md:text-[14rem] font-black text-white/[0.03] uppercase tracking-tighter leading-none select-none whitespace-nowrap">
            HIQ NUTRITION
          </h1>
        </motion.div>

        {/* Floating Side Text Elements */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none container mx-auto"
          style={{ opacity: opacityText }}
        >
          {/* Left Side */}
          <div className="absolute left-[5%] lg:left-[15%] top-[40%] flex flex-col gap-2">
            <span className="text-xs font-bold tracking-[0.3em] text-gold-500 uppercase">Clinically</span>
            <span className="text-2xl lg:text-3xl font-light text-white">Proven Formula</span>
            <div className="w-12 h-[1px] bg-gold-500/50 mt-2"></div>
          </div>
          
          <div className="absolute left-[10%] lg:left-[20%] bottom-[25%] flex flex-col gap-2">
            <span className="text-2xl lg:text-3xl font-light text-white">100% Organic</span>
            <span className="text-xs font-bold tracking-[0.3em] text-gold-500 uppercase">Sourced Nature</span>
          </div>

          {/* Right Side */}
          <div className="absolute right-[5%] lg:right-[15%] top-[35%] flex flex-col gap-2 text-right items-end">
            <span className="text-xs font-bold tracking-[0.3em] text-gold-500 uppercase">Bio-Availability</span>
            <span className="text-2xl lg:text-3xl font-light text-white">Nano Absorption</span>
            <div className="w-12 h-[1px] bg-gold-500/50 mt-2"></div>
          </div>

          <div className="absolute right-[10%] lg:right-[20%] bottom-[30%] flex flex-col gap-2 text-right items-end">
            <span className="text-2xl lg:text-3xl font-light text-white">Zero Crash</span>
            <span className="text-xs font-bold tracking-[0.3em] text-gold-500 uppercase">Timeless Energy</span>
          </div>
        </motion.div>

        {/* Floating Product Image - Antigravity Effect */}
        <motion.div
          className="relative z-10 w-[320px] md:w-[450px] lg:w-[500px]"
          style={{ scale, y: yAxis }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* We wrap the image in a div that does the continuous floating animation */}
          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center justify-center relative"
          >
            {/* Stunning Glowing Orb Behind the Product */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-orange-500/30 blur-[100px] rounded-full z-0 pointer-events-none" />

            {/* The actual product shadow base to ground the float effect initially */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-10 bg-black/60 rounded-[100%] blur-xl z-0" />
            
            <img 
              src="/product/headerproduct2.webp" 
              alt="Premium HIQ Nutrition Supplement" 
              className="w-full h-auto drop-shadow-2xl object-contain cursor-pointer hover:scale-105 transition-transform duration-500 relative z-10"
            />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: opacityText }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-semibold">Scroll to Discover</span>
          <motion.div 
            className="w-[1px] h-12 bg-white/30"
            animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0], originY: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
