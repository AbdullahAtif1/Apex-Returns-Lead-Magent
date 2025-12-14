import { useStore } from '../Store';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Facebook, Instagram, Youtube, HelpCircle } from 'lucide-react';

export default function Contact() {
  const { t } = useStore();

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-black italic uppercase text-white mb-4">
          {t.contact.title} <span className="text-accent">{t.contact.title_accent}</span>
        </motion.h1>
        <p className="text-xl text-gray-400">{t.contact.sub}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-24">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
          <div className="bg-bgSecondary/40 border border-white/5 p-8 rounded-3xl backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white mb-6 uppercase flex items-center gap-2"><MapPin className="text-accent" /> {t.contact.hq}</h3>
            
            <div className="space-y-6 text-gray-300">
              <div className="flex gap-4">
                <div className="bg-bgPrimary p-3 rounded-lg h-fit border border-white/10"><MapPin size={20} className="text-accent" /></div>
                <div><p className="font-bold text-white">Neon Cyclery Inc.</p><p>123 Cyber Avenue, Sector 7</p><p>Neo-Tokyo, NK 2077</p></div>
              </div>
              <div className="flex gap-4">
                <div className="bg-bgPrimary p-3 rounded-lg h-fit border border-white/10"><Phone size={20} className="text-accent" /></div>
                <div><p className="font-bold text-white">{t.contact.phone}</p><p>+1 (555) 019-2834</p></div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 flex gap-4">
              {[Facebook, Instagram, Youtube].map((Icon, i) => <button key={i} className="bg-bgPrimary p-3 rounded-full border border-white/10 hover:border-accent hover:text-accent transition group"><Icon size={20} className="group-hover:scale-110 transition" /></button>)}
            </div>
          </div>
          <div className="h-64 rounded-3xl overflow-hidden border border-white/10 relative grayscale invert opacity-80 hover:opacity-100 transition duration-500">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="bg-bgSecondary/20 border border-accent/20 p-8 md:p-10 rounded-3xl shadow-[0_0_50px_var(--accent-glow)] relative overflow-hidden">
          <h3 className="text-2xl font-bold text-white mb-6 uppercase">{t.contact.form.title}</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div><label className="block text-xs font-bold text-accent mb-2 uppercase tracking-wide">{t.contact.form.name}</label><input type="text" className="w-full bg-bgPrimary/50 border border-white/10 rounded-xl p-4 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition text-black" /></div>
              <div><label className="block text-xs font-bold text-accent mb-2 uppercase tracking-wide">{t.contact.form.phone}</label><input type="tel" className="w-full bg-bgPrimary/50 border border-white/10 rounded-xl p-4 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition text-black" /></div>
            </div>
            <div><label className="block text-xs font-bold text-accent mb-2 uppercase tracking-wide">{t.contact.form.msg}</label><textarea rows="4" className="w-full bg-bgPrimary/50 border border-white/10 rounded-xl p-4 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition text-black"></textarea></div>
            <button className="w-full bg-accent text-bgPrimary font-black text-lg py-4 rounded-xl hover:brightness-110 transition shadow-[0_0_20px_var(--accent-glow)] flex items-center justify-center gap-2 uppercase tracking-widest"><Send size={20} /> {t.contact.form.btn}</button>
          </form>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border-t border-white/10 pt-16">
        <h2 className="text-3xl font-black italic uppercase text-center mb-12">{t.contact.faq_title} <span className="text-accent">{t.contact.faq_accent}</span></h2>
        <div className="grid md:grid-cols-2 gap-8">
          {t.contact.faqs.map((item, i) => (
            <div key={i} className="bg-bgSecondary/30 p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition">
              <h4 className="font-bold text-white text-lg mb-2 flex items-start gap-3"><HelpCircle className="text-accent shrink-0 mt-1" size={20} />{item.q}</h4>
              <p className="text-gray-400 pl-8 leading-relaxed text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}