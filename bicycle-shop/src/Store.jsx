import { createContext, useContext, useState, useEffect } from 'react';
import { 
  Zap, Wind, ShieldCheck, Truck, RotateCcw, 
  Facebook, Instagram, Youtube 
} from 'lucide-react';

const StoreContext = createContext();

export const translations = {
  en: {
    nav: {
      home: "Home",
      products: "Catalogue",
      contact: "Contact",
      btn_lang: "EN",
    },
    footer: {
      slogan: "Redefining urban mobility with electric power.",
      shop: "Shop",
      support: "Support",
      stay_electric: "Stay Electric",
      links: { all: "All E-Bikes", acc: "Accessories", parts: "Parts & Service", outlet: "Outlet" },
      help: { contact: "Contact Us", ship: "Shipping Policy", returns: "Returns", faq: "FAQ" },
      sub_text: "Get 10% off your first order.",
      sub_btn: "Subscribe",
      copyright: "© 2025 E-BIKEX Inc. All rights reserved."
    },
    home: {
      heroTitle: "The Future of Cycling",
      heroSub: "Experience the electric power ride.",
      cta: "Shop Now",
      contact: "Contact Us",
      est: "Est. 2025 • The New Era",
      sections: {
        featured: "Featured Categories",
        best: "Best Sellers",
        why: "Why Choose Us",
        reviews: "Rider Reviews",
        flash: "Flash Sale",
        flash_sub: "Get 20% OFF the new Stealth Series this week only.",
        flash_btn: "Claim Offer"
      },
      features: [
        { title: "Free Shipping", desc: "On orders over €500" },
        { title: "Easy Returns", desc: "30-day guarantee" },
        { title: "Secure Payment", desc: "100% encrypted" },
        { title: "24/7 Support", desc: "Expert mechanics online" }
      ]
    },
    catalogue: {
      breadcrumb: "E-Bikes",
      title: "High Performance",
      title_accent: "Electric",
      sub: "Browse our collection of next-gen electric vehicles.",
      filters: {
        title: "Filters",
        cat: "Categories",
        price: "Price Range",
        color: "Color",
        stock: "In Stock Only",
        cats: ["Urban", "Off-Road", "Racing", "Cruiser"]
      },
      sort: {
        label: "Sort By:",
        options: { new: "Newest Arrivals", low: "Price: Low to High", high: "Price: High to Low", rate: "Top Rated" }
      },
      ui: {
        showing: "Showing results",
        load: "Load More Products",
        add: "Add",
        out: "Out of Stock"
      }
    },
    contact: {
      title: "Get In",
      title_accent: "Touch",
      sub: "We’d love to hear from you. Our team is online 24/7.",
      hq: "HQ Location",
      phone: "Phone & WhatsApp",
      email: "Email Support",
      form: {
        title: "Send a Message",
        name: "Name",
        phone: "Phone",
        msg: "Message",
        btn: "Send Message"
      },
      faq_title: "Frequently Asked",
      faq_accent: "Questions",
      faqs: [
        { q: "What are your delivery times?", a: "We ship worldwide via Hyper-Loop Logistics. EU orders arrive in 24-48h." },
        { q: "What is your return policy?", a: "30-day 'No Questions Asked' return policy." },
        { q: "Accepted payment methods?", a: "We accept Visa, Mastercard, PayPal, and major Crypto currencies." },
        { q: "Do you offer test rides?", a: "Yes! Visit our Neo-Tokyo showroom for a test flight." }
      ]
    }
  },
  nl: {
    nav: {
      home: "Startpagina",
      products: "Catalogus",
      contact: "Contact",
      btn_lang: "NL",
    },
    footer: {
      slogan: "Stedelijke mobiliteit opnieuw gedefinieerd.",
      shop: "Winkel",
      support: "Klantenservice",
      stay_electric: "Blijf Elektrisch",
      links: { all: "Alle E-Bikes", acc: "Accessoires", parts: "Onderdelen", outlet: "Outlet" },
      help: { contact: "Contact", ship: "Verzendbeleid", returns: "Retourneren", faq: "FAQ" },
      sub_text: "Krijg 10% korting op je eerste bestelling.",
      sub_btn: "Abonneren",
      copyright: "© 2025 E-BIKEX Inc. Alle rechten voorbehouden."
    },
    home: {
      heroTitle: "De Toekomst van Fietsen",
      heroSub: "Ervaar de kracht van elektrisch rijden.",
      cta: "Nu Winkelen",
      contact: "Contact",
      est: "Est. 2025 • Het Nieuwe Tijdperk",
      sections: {
        featured: "Uitgelichte Categorieën",
        best: "Best Verkocht",
        why: "Waarom Wij",
        reviews: "Beoordelingen",
        flash: "Bliksemuitverkoop",
        flash_sub: "Ontvang alleen deze week 20% KORTING.",
        flash_btn: "Claim Aanbieding"
      },
      features: [
        { title: "Gratis Verzending", desc: "Op bestellingen boven €500" },
        { title: "Eenvoudig Retourneren", desc: "30 dagen garantie" },
        { title: "Veilige Betaling", desc: "100% versleuteld" },
        { title: "24/7 Support", desc: "Experts online" }
      ]
    },
    catalogue: {
      breadcrumb: "E-Bikes",
      title: "Hoge Prestatie",
      title_accent: "Elektrisch",
      sub: "Bekijk onze collectie next-gen elektrische voertuigen.",
      filters: {
        title: "Filters",
        cat: "Categorieën",
        price: "Prijsklasse",
        color: "Kleur",
        stock: "Alleen op voorraad",
        cats: ["Stad", "Off-Road", "Race", "Cruiser"]
      },
      sort: {
        label: "Sorteer:",
        options: { new: "Nieuwste", low: "Prijs: Laag-Hoog", high: "Prijs: Hoog-Laag", rate: "Beoordeling" }
      },
      ui: {
        showing: "Resultaten tonen",
        load: "Meer Laden",
        add: "Toevoegen",
        out: "Niet op voorraad"
      }
    },
    contact: {
      title: "Neem",
      title_accent: "Contact Op",
      sub: "We horen graag van u. Ons team is 24/7 online.",
      hq: "Hoofdkantoor",
      phone: "Telefoon & WhatsApp",
      email: "Email Ondersteuning",
      form: {
        title: "Stuur een bericht",
        name: "Naam",
        phone: "Telefoon",
        msg: "Bericht",
        btn: "Versturen"
      },
      faq_title: "Veelgestelde",
      faq_accent: "Vragen",
      faqs: [
        { q: "Wat zijn de levertijden?", a: "Wij verzenden wereldwijd via Hyper-Loop. EU bestellingen binnen 24-48u." },
        { q: "Wat is het retourbeleid?", a: "30 dagen 'Niet goed, geld terug' garantie." },
        { q: "Geaccepteerde betaalmethoden?", a: "Wij accepteren Visa, Mastercard, PayPal en Crypto." },
        { q: "Bieden jullie proefritten?", a: "Ja! Bezoek onze showroom in Neo-Tokyo." }
      ]
    }
  }
};

export const StoreProvider = ({ children }) => {
  const [lang, setLang] = useState('nl');
  const [theme, setTheme] = useState('voltaic');

  const toggleLang = () => setLang(l => l === 'nl' ? 'en' : 'nl');
  const cycleTheme = () => {
    const themes = ['voltaic', 'cyber', 'toxic'];
    const nextIndex = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <StoreContext.Provider value={{ lang, toggleLang, theme, cycleTheme, t: translations[lang] }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);