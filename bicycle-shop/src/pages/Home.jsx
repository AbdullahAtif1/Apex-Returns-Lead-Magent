import { motion } from 'framer-motion';
import { useStore } from '../Store';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Truck, RotateCcw, Zap, TrendingUp, Star, Quote, Play } from 'lucide-react';

const categories = [
  { img: "https://images.unsplash.com/photo-1629421357123-07268d73a32e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZSUyMGJpa2VzfGVufDB8fDB8fHww" },
  { img: "https://images.unsplash.com/photo-1635324288506-d2c2294c105d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGJpa2VzfGVufDB8fDB8fHww" },
  { img: "https://plus.unsplash.com/premium_photo-1716934283259-0cb2af116f0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZSUyMGJpa2VzfGVufDB8fDB8fHww" }
];

const bestSellers = [
  { name: "Neon Strider", price: "€1,299", img: "https://images.unsplash.com/photo-1582743514780-b381c39ada9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGUlMjBiaWtlc3xlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Cyber Cruiser", price: "€2,499", img: "https://images.unsplash.com/photo-1753092604434-8c0e6c3b50f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGUlMjBiaWtlc3xlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Stealth X", price: "€3,100", img: "https://images.unsplash.com/photo-1619635161516-d724481fc355?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGUlMjBiaWtlc3xlbnwwfHwwfHx8MA%3D%3D" }
];

const testimonials = [
  { name: "Alex K.", text: "The Neon Strider changed my commute forever. Fast, reliable, and stylish.", rating: 5 },
  { name: "Sarah M.", text: "Best e-bike service I've ever experienced. The team is fantastic!", rating: 5 },
  { name: "James L.", text: "Incredible range and speed. Highly recommend for city riding.", rating: 5 }
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

        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-accent font-bold tracking-[0.5em] text-xs md:text-sm mb-6 uppercase">
          {t.home.est}
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-6xl md:text-9xl font-black mb-8 uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[var(--grad-start)] to-[var(--grad-end)] leading-[0.9]"
        >
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
          <img src="https://images.unsplash.com/photo-1668753543330-78b7685f7c4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-[300px] md:h-[600px] object-cover rounded-3xl shadow-2xl border border-accent/20" alt="Hero Bike" />
          <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* BRANDS */}
      <div className="border-y border-white/5 bg-white/5 py-8 overflow-hidden flex">
        <motion.div 
          className="flex whitespace-nowrap opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
          animate={{ x: ["-100%", "0%"] }} 
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 20 
          }}
        >
          {/* Render brands 3 times to ensure smooth infinite loop on wide screens */}
          {[...brands, ...brands, ...brands].map((b, i) => (
            <span key={i} className="text-xl md:text-2xl font-black italic tracking-widest px-12 shrink-0">
              {b}
            </span>
          ))}
        </motion.div>
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
                <h3 className="text-2xl font-bold italic uppercase text-always-white">{t.catalogue.filters.cats[i] || "Model X"}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FLASH SALE */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto rounded-3xl relative overflow-hidden border border-accent/20 shadow-[0_0_30px_var(--accent-glow)] group">
          
          {/* Background Image with Zoom Effect */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1607980909568-cde775c48cdf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyZ28lMjBiaWtlfGVufDB8fDB8fHww" 
              alt="Flash Sale" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Glass Overlay - Matches Navbar Style */}
          <div className="absolute inset-0 bg-bgSecondary/80 backdrop-blur-sm"></div>

          {/* Content */}
          <div className="relative z-10 p-12 md:p-24 text-center">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-6 text-always-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              {t.home.sections.flash}
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto font-medium drop-shadow-md">
              {t.home.sections.flash_sub}
            </p>
            <button className="bg-white text-black font-black py-4 px-12 rounded-full hover:bg-accent hover:text-bgPrimary hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_var(--accent)]">
              {t.home.sections.flash_btn}
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {t.home.features.map((f, i) => {
             const Icon = iconMap[i];
             return (
              <div key={i} className="p-6 bg-bgSecondary/30 rounded-2xl border border-white/5 hover:border-accent/40 transition-colors duration-300">
                <Icon className="mx-auto text-accent mb-4" size={32} />
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </div>
            )
          })}
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

      {/* YOUTUBE VIDEO SECTION - NEW SECTION */}
      <section className="py-24 px-6 bg-black/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-accent/10 rounded-full">
              <Play className="text-accent" fill="currentColor" />
            </div>
            <div>
              <h2 className="text-3xl font-bold uppercase italic">Vlog: NL by Bike</h2>
              <p className="text-gray-400">Do you NEED an E-bike in the Netherlands?</p>
            </div>
          </div>
          
          <div className="aspect-video w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-bgSecondary relative group">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/Z2RdDs5xSJA" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - NEW SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
           <Quote className="text-accent rotate-180" /> What Riders Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, i) => (
            <div key={i} className="p-8 bg-bgSecondary/20 rounded-2xl border border-white/5 relative">
              <div className="flex gap-1 mb-4 text-accent">
                {[...Array(testi.rating)].map((_, r) => <Star key={r} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg text-gray-300 italic mb-6">"{testi.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-700 text-always-white flex items-center justify-center font-bold text-sm">
                  {testi.name.charAt(0)}
                </div>
                <span className="font-bold text-sm tracking-wide uppercase">{testi.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}