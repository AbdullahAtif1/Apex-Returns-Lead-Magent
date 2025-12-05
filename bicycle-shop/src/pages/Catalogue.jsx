import { useState } from 'react';
import { useStore } from '../Store';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter, Star, ShoppingCart, Heart, Check, ChevronRight, LayoutGrid, List } from 'lucide-react';

const ALL_BIKES = [
  { id: 1, name: "Neon Strider X1", price: 1299, rating: 4.8, reviews: 124, stock: true, img: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=500" },
  { id: 2, name: "Cyber Cruiser", price: 2499, rating: 5.0, reviews: 89, stock: true, img: "https://images.unsplash.com/photo-1617625802912-cde586faf331?w=500" },
  { id: 3, name: "Toxic Trail", price: 3100, rating: 4.9, reviews: 56, stock: false, img: "https://images.unsplash.com/photo-1623079400394-184985e35d2f?w=500" },
  { id: 4, name: "Stealth Bomber", price: 4500, rating: 4.7, reviews: 210, stock: true, img: "https://images.unsplash.com/photo-1511994298220-4127096033be?w=500" },
  { id: 5, name: "Volt City Z", price: 1850, rating: 4.5, reviews: 45, stock: true, img: "https://images.unsplash.com/photo-1559348349-86f163cc8cce?w=500" },
  { id: 6, name: "Plasma Trek", price: 2899, rating: 4.8, reviews: 112, stock: true, img: "https://images.unsplash.com/photo-1534149679313-2d21cc41031d?w=500" },
];

export default function Catalogue() {
  const { t } = useStore();
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState(5000);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-[1600px] mx-auto">
      
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-mono">
        <Link to="/" className="hover:text-accent transition">{t.nav.home}</Link>
        <ChevronRight size={14} />
        <span className="text-accent">{t.catalogue.breadcrumb}</span>
      </div>

      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black italic uppercase text-white mb-2">
          {t.catalogue.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600">{t.catalogue.title_accent}</span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg">{t.catalogue.sub}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="w-full lg:w-64 shrink-0 space-y-8">
          <div className="bg-bgSecondary/40 p-6 rounded-2xl border border-white/5">
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <Filter size={16} className="text-accent" /> {t.catalogue.filters.cat}
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              {t.catalogue.filters.cats.map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer hover:text-white transition group">
                  <div className="w-4 h-4 border border-gray-600 rounded flex items-center justify-center group-hover:border-accent">
                    <div className="w-2 h-2 bg-accent rounded-sm opacity-0 group-hover:opacity-100 transition" />
                  </div>
                  {cat}
                </label>
              ))}
            </div>
          </div>

          <div className="bg-bgSecondary/40 p-6 rounded-2xl border border-white/5">
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider">{t.catalogue.filters.price}</h3>
            <input type="range" min="0" max="5000" value={priceRange} onChange={(e) => setPriceRange(e.target.value)} className="w-full accent-accent h-2 bg-bgPrimary rounded-lg appearance-none cursor-pointer" />
            <div className="flex justify-between text-xs font-mono text-accent mt-2"><span>€0</span><span>€{priceRange}</span></div>
          </div>

          <div className="bg-bgSecondary/40 p-6 rounded-2xl border border-white/5">
            <label className="flex items-center gap-3 cursor-pointer text-sm text-gray-400 hover:text-white">
              <Check size={16} className="text-accent" /> {t.catalogue.filters.stock}
            </label>
          </div>
        </aside>

        <div className="flex-1">
          <div className="bg-bgSecondary/20 p-4 rounded-xl border border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <div className="text-gray-400 text-sm">{t.catalogue.ui.showing} <span className="text-white font-bold">{ALL_BIKES.length}</span></div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-bgPrimary px-3 py-2 rounded-lg border border-white/10">
                <span className="text-xs text-gray-500 uppercase">{t.catalogue.sort.label}</span>
                <select className="bg-transparent text-sm text-white focus:outline-none cursor-pointer">
                  <option value="newest">{t.catalogue.sort.options.new}</option>
                  <option value="price-low">{t.catalogue.sort.options.low}</option>
                </select>
              </div>
              <div className="flex gap-1 bg-bgPrimary p-1 rounded-lg border border-white/10">
                <button onClick={() => setViewMode('grid')} className={`p-2 rounded ${viewMode === 'grid' ? 'bg-accent text-bgPrimary' : 'text-gray-400 hover:text-white'}`}><LayoutGrid size={18} /></button>
                <button onClick={() => setViewMode('list')} className={`p-2 rounded ${viewMode === 'list' ? 'bg-accent text-bgPrimary' : 'text-gray-400 hover:text-white'}`}><List size={18} /></button>
              </div>
            </div>
          </div>

          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {ALL_BIKES.map((bike, i) => (
              <motion.div key={bike.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`bg-bgSecondary/40 border border-white/5 rounded-3xl overflow-hidden group hover:border-accent/50 transition-all duration-300 flex ${viewMode === 'list' ? 'flex-row' : 'flex-col'}`}>
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-1/3' : 'h-64 w-full'}`}>
                  {!bike.stock && <div className="absolute inset-0 bg-black/70 z-10 flex items-center justify-center font-bold text-white uppercase tracking-widest backdrop-blur-sm">{t.catalogue.ui.out}</div>}
                  {bike.stock && <div className="absolute top-4 right-4 z-10"><button className="bg-bgPrimary/80 p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition backdrop-blur-md"><Heart size={18} /></button></div>}
                  <img src={bike.img} className={`w-full h-full object-cover transition-transform duration-700 ${bike.stock ? 'group-hover:scale-110' : 'grayscale'}`} />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{bike.name}</h3>
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
                    <span className="text-2xl font-black text-white">€{bike.price}</span>
                    <button disabled={!bike.stock} className="bg-accent text-bgPrimary font-bold py-2 px-4 rounded-lg flex items-center gap-2 hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed">
                      <ShoppingCart size={18} /> {t.catalogue.ui.add}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}