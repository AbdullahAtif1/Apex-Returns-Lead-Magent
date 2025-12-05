import { motion } from 'framer-motion';
import { useStore } from '../Store';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Truck, RotateCcw, Zap, TrendingUp, Star } from 'lucide-react';

const categories = [
  { img: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=500" },
  { img: "https://images.unsplash.com/photo-1623079400394-184985e35d2f?w=500" },
  { img: "https://images.unsplash.com/photo-1511994298220-4127096033be?w=500" }
];

const bestSellers = [
  { name: "Neon Strider", price: "€1,299", img: "https://images.unsplash.com/photo-1617625802912-cde586faf331?w=500" },
  { name: "Cyber Cruiser", price: "€2,499", img: "https://images.unsplash.com/photo-1559348349-86f163cc8cce?w=500" },
  { name: "Stealth X", price: "€3,100", img: "https://images.unsplash.com/photo-1534149679313-2d21cc41031d?w=500" }
];

const brands = ["VOLT", "CYBER-DYNAMICS", "TESLA-BIKES", "NEO-GEAR", "FUTURE-WHEELS"];

export default function Home() {
  const { t } = useStore();

  const iconMap = [Truck, RotateCcw, ShieldCheck, Zap];

  return (
    <div className="min-h-screen overflow-x-hidden bg-bgPrimary">
      
      {/* HERO */}
      <div className="min-h-screen pt-32 md:pt-40 flex flex-col items-center justify-center text-center px-4 relative pb-20">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px]" />
        </div>

        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-accent font-mono tracking-[0.5em] text-xs md:text-sm mb-6 uppercase">
          {t.home.est}
        </motion.span>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-9xl font-black mb-8 uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-700 leading-[0.9]">
          {t.home.heroTitle}
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg md:text-2xl text-gray-400 max-w-2xl mb-10">
          {t.home.heroSub}
        </motion.p>

        <div className="flex gap-4 mb-16">
          <Link to="/products" className="bg-accent text-bgPrimary text-lg font-bold py-4 px-10 rounded-full shadow-[0_0_30px_var(--accent-glow)] hover:scale-105 transition-transform">
            {t.home.cta}
          </Link>
        </div>

        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} className="w-full max-w-6xl relative">
          <img src="https://images.unsplash.com/photo-1559348349-86f163cc8cce?auto=format&fit=crop&q=80&w=1200" className="w-full h-[300px] md:h-[600px] object-cover rounded-3xl shadow-2xl border border-accent/20" alt="Hero Bike" />
          <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* BRANDS */}
      <div className="border-y border-white/5 bg-white/5 py-8 overflow-hidden">
        <div className="flex justify-around items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((b, i) => <span key={i} className="text-xl md:text-2xl font-black italic tracking-widest px-8 shrink-0">{b}</span>)}
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2"><TrendingUp className="text-accent" /> {t.home.sections.featured}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer border border-white/10 hover:border-accent/50 transition">
              <img src={cat.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold italic uppercase">{t.catalogue.filters.cats[i] || "Model X"}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <h2 className="text-3xl font-bold mb-12">{t.home.sections.best}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {bestSellers.map((item, i) => (
            <div key={i} className="bg-bgSecondary/40 rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition group">
              <div className="h-64 overflow-hidden relative">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Electric / 500W</span>
                  <span className="text-accent font-bold text-lg">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FLASH SALE */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-accent/20 to-purple-600/20 rounded-3xl p-12 md:p-24 text-center border border-accent/20 relative overflow-hidden">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-6 relative z-10">{t.home.sections.flash}</h2>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto relative z-10">{t.home.sections.flash_sub}</p>
          <button className="bg-white text-black font-bold py-4 px-12 rounded-full hover:bg-accent transition relative z-10">{t.home.sections.flash_btn}</button>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {t.home.features.map((f, i) => {
             const Icon = iconMap[i];
             return (
              <div key={i} className="p-6 bg-bgSecondary/30 rounded-2xl border border-white/5">
                <Icon className="mx-auto text-accent mb-4" size={32} />
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  );
}