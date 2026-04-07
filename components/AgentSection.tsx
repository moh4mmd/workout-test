"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, ArrowRight } from "lucide-react";

export default function AgentSection() {
  return (
    <section id="agent" className="py-32 relative overflow-hidden bg-slate-950 text-white">
      {/* Cinematic Abstract Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/30 via-slate-950 to-slate-950 pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-[2/1] bg-sage-900/20 blur-[130px] rounded-full z-0" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-4xl"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs tracking-[0.2em] font-bold uppercase mb-10 text-slate-300">
            <MapPin size={16} className="text-gold-500" />
            <span dir="rtl" className="font-arabic font-semibold">الوكيل الحصري</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            OFFICIALLY IN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 italic font-medium pr-2">SYRIA</span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-400 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
            HIQ Nutrition has forged a direct partnership with our exclusive Syrian distributor. Accept no imitations—secure origin-certified purity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-gold-500 text-slate-950 font-bold tracking-wide uppercase text-sm overflow-hidden transition-all hover:scale-105 w-full sm:w-auto">
              <span className="relative z-10 flex items-center gap-2">
                <Phone size={18} />
                Contact The Agent
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>
            <button className="group flex items-center justify-center gap-3 px-10 py-5 border border-white/20 text-white font-bold tracking-wide uppercase text-sm hover:border-gold-500 hover:text-gold-400 transition-all w-full sm:w-auto">
              Verify Partners
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
