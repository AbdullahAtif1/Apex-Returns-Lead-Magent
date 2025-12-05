import { useState } from 'react';
import { useStore } from '../Store';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter, Star, ShoppingCart, Heart, Check, ChevronRight, LayoutGrid, List } from 'lucide-react';

const ALL_BIKES = [
  { id: 1, name: "Neon Strider X1", price: 1299, rating: 4.8, reviews: 124, stock: true, img: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=500" },
  { id: 2, name: "Cyber Cruiser", price: 2499, rating: 5.0, reviews: 89, stock: true, img: "https://images.unsplash.com/photo-1753092604434-8c0e6c3b50f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGUlMjBiaWtlc3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 3, name: "Toxic Trail", price: 3100, rating: 4.9, reviews: 56, stock: false, img: "https://images.unsplash.com/photo-1619635161516-d724481fc355?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGUlMjBiaWtlc3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 4, name: "Stealth Bomber", price: 4500, rating: 4.7, reviews: 210, stock: true, img: "https://images.unsplash.com/photo-1582743514780-b381c39ada9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGUlMjBiaWtlc3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 5, name: "Volt City Z", price: 1850, rating: 4.5, reviews: 45, stock: true, img: "https://images.unsplash.com/photo-1635324288506-d2c2294c105d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGJpa2VzfGVufDB8fDB8fHww" },
  { id: 6, name: "Plasma Trek", price: 2899, rating: 4.8, reviews: 112, stock: true, img: "https://images.unsplash.com/photo-1668753543330-78b7685f7c4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export default function Catalogue() {
  const { t } = useStore();
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState(5000);

  // Filter & Sort State
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('newest'); // State for sorting

  // Toggle Category Helper
  const handleCategoryClick = (cat) => {
    setSelectedCategory(prev => prev === cat ? null : cat);
  };

  // --- FILTERING & SORTING LOGIC ---
  const filteredBikes = ALL_BIKES.filter(bike => {
    // 1. Check Stock
    if (inStockOnly && !bike.stock) return false;
    
    // 2. Check Price
    if (bike.price > priceRange) return false;

    // 3. Category (Optional: If you want to enable category filtering later)
    // if (selectedCategory && bike.category !== selectedCategory) return false;

    return true;
  }).sort((a, b) => {
    // 4. Sort Logic
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'newest': default: return 0; // Keeps original order
    }
  });

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
        
        {/* SIDEBAR FILTERS */}
        <aside className="w-full lg:w-64 shrink-0 space-y-8">
          
          {/* CATEGORIES */}
          <div className="bg-bgSecondary/40 p-6 rounded-2xl border border-white/5">
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
              <Filter size={16} className="text-accent" /> {t.catalogue.filters.cat}
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              {t.catalogue.filters.cats.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <div 
                    key={cat} 
                    onClick={() => handleCategoryClick(cat)}
                    className={`flex items-center gap-3 cursor-pointer transition group ${isSelected ? 'text-accent font-bold' : 'hover:text-accent'}`}
                  >
                    <div className={`w-4 h-4 border rounded flex items-center justify-center transition ${isSelected ? 'border-accent' : 'border-gray-600 group-hover:border-accent'}`}>
                      {/* Inner Square */}
                      <div className={`w-2 h-2 bg-accent rounded-sm transition-opacity duration-200 ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
                    </div>
                    {cat}
                  </div>
                );
              })}
            </div>
          </div>

          {/* PRICE SLIDER */}
          <div className="bg-bgSecondary/40 p-6 rounded-2xl border border-white/5">
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider">{t.catalogue.filters.price}</h3>
            <input type="range" min="0" max="5000" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} className="w-full accent-accent h-2 bg-bgPrimary rounded-lg appearance-none cursor-pointer" />
            <div className="flex justify-between text-xs font-mono text-accent mt-2"><span>€0</span><span>€{priceRange}</span></div>
          </div>

          {/* IN STOCK TOGGLE */}
          <div 
            className="bg-bgSecondary/40 p-6 rounded-2xl border border-white/5 cursor-pointer hover:border-accent/30 transition group"
            onClick={() => setInStockOnly(!inStockOnly)}
          >
            <div className={`flex items-center gap-3 text-sm transition select-none ${inStockOnly ? 'text-white font-bold' : 'text-gray-400 group-hover:text-white'}`}>
              <div className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${inStockOnly ? 'bg-accent border-accent' : 'border-gray-600 group-hover:border-accent'}`}>
                {inStockOnly && <Check size={14} className="text-bgPrimary" strokeWidth={4} />}
              </div>
              {t.catalogue.filters.stock}
            </div>
          </div>
        </aside>

        {/* PRODUCT GRID */}
        <div className="flex-1">
          <div className="bg-bgSecondary/20 p-4 rounded-xl border border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <div className="text-gray-400 text-sm">{t.catalogue.ui.showing} <span className="text-white font-bold">{filteredBikes.length}</span></div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-bgPrimary px-3 py-2 rounded-lg border border-white/10">
                <span className="text-xs text-gray-500 uppercase">{t.catalogue.sort.label}</span>
                
                {/* SORT SELECTOR */}
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)} 
                  className="bg-transparent text-sm text-white focus:outline-none cursor-pointer"
                >
                  <option value="newest" className="text-black">{t.catalogue.sort.options.new}</option>
                  <option value="price-low" className="text-black">{t.catalogue.sort.options.low}</option>
                  <option value="price-high" className="text-black">{t.catalogue.sort.options.high}</option>
                  <option value="rating" className="text-black">{t.catalogue.sort.options.rate}</option>
                </select>
              </div>
              
              {/* VIEW TOGGLE */}
              <div className="flex gap-1 bg-bgPrimary p-1 rounded-lg border border-white/10">
                <button onClick={() => setViewMode('grid')} className={`p-2 rounded ${viewMode === 'grid' ? 'bg-accent text-bgPrimary' : 'text-gray-400 hover:text-white'}`}><LayoutGrid size={18} /></button>
                <button onClick={() => setViewMode('list')} className={`p-2 rounded ${viewMode === 'list' ? 'bg-accent text-bgPrimary' : 'text-gray-400 hover:text-white'}`}><List size={18} /></button>
              </div>
            </div>
          </div>

          {/* RENDER FILTERED LIST */}
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            <AnimatePresence>
              {filteredBikes.map((bike) => (
                <motion.div 
                  layout 
                  key={bike.id} 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }} 
                  className={`bg-bgSecondary/40 border border-white/5 rounded-3xl overflow-hidden group hover:border-accent/50 transition-all duration-300 flex ${viewMode === 'list' ? 'flex-row' : 'flex-col'}`}
                >
                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-1/3' : 'h-64 w-full'}`}>
                    {!bike.stock && <div className="absolute inset-0 bg-black/70 z-10 flex items-center justify-center font-bold text-always-white uppercase tracking-widest backdrop-blur-sm">{t.catalogue.ui.out}</div>}
                    {bike.stock && <div className="absolute top-4 right-4 z-10"><button className="bg-bgPrimary/80 p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition backdrop-blur-md"><Heart size={18} /></button></div>}
                    <img src={bike.img} className={`w-full h-full object-cover transition-transform duration-700 ${bike.stock ? 'group-hover:scale-110' : 'grayscale'}`} />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{bike.name}</h3>
                    
                    {/* Optional: Show rating in card */}
                    <div className="flex items-center gap-1 mb-2">
                      <Star size={14} className="text-accent fill-accent" />
                      <span className="text-xs text-gray-400">{bike.rating} ({bike.reviews})</span>
                    </div>

                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
                      <span className="text-2xl font-black text-white">€{bike.price}</span>
                      <button disabled={!bike.stock} className="bg-accent text-bgPrimary font-bold py-2 px-4 rounded-lg flex items-center gap-2 hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed">
                        <ShoppingCart size={18} /> {t.catalogue.ui.add}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* NO RESULTS FALLBACK */}
            {filteredBikes.length === 0 && (
              <div className="col-span-full py-20 text-center text-gray-500">
                <p>No bikes match your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}