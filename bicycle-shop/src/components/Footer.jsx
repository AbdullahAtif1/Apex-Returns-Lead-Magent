import { useStore } from '../Store';
import { Zap, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useStore();

  return (
    <footer className="bg-bgSecondary border-t border-accent/20 pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Zap className="text-accent fill-accent" size={24} />
            <span className="text-2xl font-bold italic tracking-tighter text-white">
              E-BIKE<span className="text-accent">X</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {t.footer.slogan}
          </p>
          <div className="flex gap-4">
            <Facebook className="text-gray-400 hover:text-accent cursor-pointer transition" size={20} />
            <Twitter className="text-gray-400 hover:text-accent cursor-pointer transition" size={20} />
            <Instagram className="text-gray-400 hover:text-accent cursor-pointer transition" size={20} />
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">{t.footer.shop}</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/products" className="hover:text-accent transition">{t.footer.links.all}</Link></li>
            <li><Link to="/products" className="hover:text-accent transition">{t.footer.links.acc}</Link></li>
            <li><Link to="/products" className="hover:text-accent transition">{t.footer.links.parts}</Link></li>
            <li><Link to="/products" className="hover:text-accent transition">{t.footer.links.outlet}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">{t.footer.support}</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/contact" className="hover:text-accent transition">{t.footer.help.contact}</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition">{t.footer.help.ship}</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition">{t.footer.help.returns}</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition">{t.footer.help.faq}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">{t.footer.stay_electric}</h4>
          <p className="text-gray-400 text-xs mb-4">{t.footer.sub_text}</p>
          <form className="flex flex-col gap-3">
            <input type="email" placeholder="Email..." className="bg-bgPrimary border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-accent focus:outline-none text-white" />
            <button className="bg-accent text-bgPrimary font-bold py-3 rounded-lg hover:brightness-110 transition text-sm uppercase">
              {t.footer.sub_btn}
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-xs">
        {t.footer.copyright}
      </div>
    </footer>
  );
}