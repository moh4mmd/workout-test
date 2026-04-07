import Link from "next/link";
import { ArrowUpRight, Image, MessageCircle, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white pt-32 pb-12 overflow-hidden selection:bg-gold-500 selection:text-slate-950">
      
      {/* Massive Editorial Background Typo */}
      <div className="absolute inset-x-0 bottom-0 text-center pointer-events-none select-none z-0 transform translate-y-[20%]">
        <h1 className="text-[12vw] font-black text-white/5 uppercase tracking-tighter leading-none whitespace-nowrap">
          HIQ NUTRITION
        </h1>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top dividing line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          <div className="md:col-span-5">
            <Link href="/" className="text-4xl font-bold tracking-tighter text-white mb-8 inline-block uppercase">
              HIQ<span className="text-gold-500 font-light">NUTRITION</span>
            </Link>
            <p className="text-slate-400 font-light text-lg leading-relaxed max-w-sm mb-12">
              Pioneering the future of human optimization through uncompromising purity and scientific precision. Engineered for those who refuse to settle.
            </p>
            
            {/* Newsletter Input */}
            <div className="flex w-full max-w-sm border-b border-slate-700 pb-2 focus-within:border-gold-500 transition-colors">
              <input 
                type="email" 
                placeholder="Join the inner circle..." 
                className="bg-transparent border-none outline-none text-white placeholder:text-slate-600 font-light tracking-wide w-full"
              />
              <button className="text-gold-500 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-500 font-bold mb-8">Navigation</h4>
            <ul className="flex flex-col gap-5 text-slate-300 font-light">
              <li><Link href="#" className="hover:text-white hover:translate-x-2 transition-transform inline-block">The Science</Link></li>
              <li><Link href="#products" className="hover:text-white hover:translate-x-2 transition-transform inline-block">Collections</Link></li>
              <li><Link href="#agent" className="hover:text-white hover:translate-x-2 transition-transform inline-block">Syrian Alliance</Link></li>
              <li><Link href="#" className="hover:text-white hover:translate-x-2 transition-transform inline-block">Clinical Trials</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-500 font-bold mb-8">Contact & Socials</h4>
            <div className="flex gap-4 mb-10">
              <a href="#" className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-slate-950 transition-all text-slate-400">
                <Image size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-slate-950 transition-all text-slate-400">
                <MessageCircle size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-slate-950 transition-all text-slate-400">
                <Users size={18} strokeWidth={1.5} />
              </a>
            </div>
            
            <a href="mailto:concierge@hiqnutrition.com" className="group flex items-center gap-3 text-slate-300 font-light hover:text-white transition-colors">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-slate-950 transition-colors">
                <ArrowUpRight size={14} strokeWidth={2} />
              </div>
              concierge@hiqnutrition.com
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">
          <p>© {new Date().getFullYear()} HIQ NUTRITION. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <Link href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
