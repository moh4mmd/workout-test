"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle, ShieldUser, Zap, Dna, ActivitySquare } from "lucide-react";

export default function FeaturesSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sm font-bold tracking-[0.3em] text-gold-600 uppercase mb-4 block">The Science</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-deep leading-[1.1]">
            ENGINEERED <br/> FOR EXCELLENCE
          </h2>
        </motion.div>

        {/* Bento Box Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Card 1 - Spans 2 columns */}
          <motion.div variants={itemVariants} className="md:col-span-2 bg-white rounded-3xl p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sage-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-[2s]" />
            <ShieldUser size={40} className="text-sage-500 mb-8" strokeWidth={1.5} />
            <h3 className="text-3xl font-bold tracking-tight text-slate-deep mb-4">Peak Purity Standards</h3>
            <p className="text-slate-500 font-light text-lg max-w-md leading-relaxed">
              We source only the rarest, most bioavailable ingredients on earth. Every batch undergoes rigorous third-party analysis to guarantee absolute perfection and zero contaminants.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 relative group overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold-50/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-[2s]" />
            <Zap size={36} className="text-gold-500 mb-8" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold tracking-tight text-slate-deep mb-4">Quantum Absorption</h3>
            <p className="text-slate-500 font-light leading-relaxed">
              Nano-technology ensures rapid, immediate delivery to your cells exactly when your body demands it.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 relative group overflow-hidden">
            <Dna size={36} className="text-slate-800 mb-8" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold tracking-tight text-slate-deep mb-4">Cellular Rejuvenation</h3>
            <p className="text-slate-500 font-light leading-relaxed">
              Formulated to repair and protect at a DNA level, delaying fatigue and preserving muscular longevity.
            </p>
          </motion.div>

          {/* Card 4 - Spans 2 columns */}
          <motion.div variants={itemVariants} className="md:col-span-2 bg-slate-900 rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 to-slate-800 opacity-50" />
            <ActivitySquare size={40} className="text-gold-400 mb-8 relative z-10" strokeWidth={1.5} />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold tracking-tight text-white mb-4">Unrelenting Energy Matrix</h3>
              <p className="text-slate-400 font-light text-lg max-w-xl leading-relaxed">
                Experience a sustained, limitless baseline of energy. Our unique compounding mechanism eliminates caffeine crashes, delivering focus that lasts late into the night.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
