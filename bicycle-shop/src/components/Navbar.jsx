import { Link } from 'react-router-dom';
import { useStore } from '../Store';
import { Globe, Palette, Zap, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const { t, toggleLang, cycleTheme, toggleMode, mode } = useStore();

  return (
    <nav className="fixed top-0 w-full z-50 p-4">
      <div className="max-w-[1400px] mx-auto bg-bgSecondary/80 backdrop-blur-md border border-accent/20 rounded-2xl px-6 py-4 flex justify-between items-center shadow-[0_0_15px_var(--accent-glow)]">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold italic tracking-tighter flex items-center gap-2 shrink-0">
          <Zap className="text-accent fill-accent" />
          <span className="text-white">E-BIKE<span className="text-accent">X</span></span>
        </Link>

        {/* Links - Updated to use t.nav.* */}
        <div className="hidden lg:flex gap-8 text-sm font-medium">
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

        {/* Buttons */}
        <div className="flex gap-4 shrink-0">
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
      </div>
    </nav>
  );
}