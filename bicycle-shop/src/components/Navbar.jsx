import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../Store';
import { Globe, Palette, Zap, Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { t, toggleLang, cycleTheme, toggleMode, mode } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 p-4">
      <div className="max-w-[1400px] mx-auto bg-bgSecondary/80 backdrop-blur-md border border-accent/20 rounded-2xl px-6 py-4 flex justify-between items-center shadow-[0_0_15px_var(--accent-glow)] relative">
        
        {/* Logo - Always visible */}
        <Link to="/" className="text-2xl font-bold italic tracking-tighter flex items-center gap-2 shrink-0">
          <Zap className="text-accent fill-accent" />
          <span className="text-white">E-BIKE<span className="text-accent">X</span></span>
        </Link>

        {/* Desktop Links - Hidden on mobile, visible on md+ */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {[
            ['/', t.nav.home],
            ['/products', t.nav.products],
            ['/contact', t.nav.contact]
          ].map(([path, label]) => (
            <Link key={path} to={path} className="text-white hover:text-accent transition-colors uppercase tracking-widest">
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons - Hidden on mobile, visible on md+ */}
        <div className="hidden md:flex gap-4 shrink-0">
          <button onClick={toggleLang} className="text-white flex items-center gap-2 border border-accent/50 px-3 py-1 rounded hover:bg-accent/10 transition text-sm uppercase">
            <Globe size={16} /> {t.nav.btn_lang}
          </button>
          <button onClick={toggleMode} className="text-white flex items-center gap-2 border border-accent/50 px-3 py-1 rounded hover:bg-accent/10 transition text-sm uppercase">
            {mode === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={cycleTheme} className="flex items-center gap-2 bg-accent text-bgPrimary px-3 py-1 rounded font-bold hover:brightness-110 transition shadow-[0_0_10px_var(--accent)]">
            <Palette size={16} /> 
          </button>
        </div>

        {/* Mobile Hamburger Button - Visible only below md */}
        <button 
          className="md:hidden text-white hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full px-4 mt-2">
          <div className="bg-bgSecondary/95 backdrop-blur-xl border border-accent/20 rounded-2xl p-6 flex flex-col items-center gap-6 shadow-[0_0_15px_var(--accent-glow)]">
            
            {/* Mobile Navigation Links */}
            <div className="flex flex-col items-center gap-4 text-lg font-medium w-full">
              {[
                ['/', t.nav.home],
                ['/products', t.nav.products],
                ['/contact', t.nav.contact]
              ].map(([path, label]) => (
                <Link 
                  key={path} 
                  to={path} 
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className="text-white hover:text-accent transition-colors uppercase tracking-widest w-full text-center py-2"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-accent/20" />

            {/* Mobile Action Buttons */}
            <div className="flex gap-4 w-full justify-center">
              <button onClick={toggleLang} className="text-white flex items-center gap-2 border border-accent/50 px-4 py-2 rounded-lg hover:bg-accent/10 transition text-sm uppercase">
                <Globe size={18} /> {t.nav.btn_lang}
              </button>
              <button onClick={toggleMode} className="text-white flex items-center gap-2 border border-accent/50 px-4 py-2 rounded-lg hover:bg-accent/10 transition text-sm uppercase">
                {mode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={cycleTheme} className="flex items-center gap-2 bg-accent text-bgPrimary px-4 py-2 rounded-lg font-bold hover:brightness-110 transition shadow-[0_0_10px_var(--accent)]">
                <Palette size={18} /> 
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}