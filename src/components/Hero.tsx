import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube,Phone } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3014876/pexels-photo-3014876.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 container-max px-4 md:px-8 text-center">
        <p className="text-primary-300 text-sm md:text-base tracking-[0.3em] uppercase mb-6 animate-fade-in">
          Vastu Consultants in Dubai
        </p>
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto animate-fade-in-up">
          When you embrace Vastu for your home, positivity becomes the natural
          flow
        </h1>
        <p className="text-primary-200/80 text-lg md:text-xl mb-10 animate-fade-in-delay">
          Health, Wealth, Prosperity welcomes you at Vedic Vastu in Dubai
        </p>
        <Link
          to="/contact"
          className="inline-block gold-gradient text-dark-900 px-10 py-4 text-sm font-semibold tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity animate-fade-in-delay"
        >
          Get in Touch
        </Link>

        <div className="flex items-center justify-center gap-5 mt-12 animate-fade-in-delay">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-primary-500/40 flex items-center justify-center text-primary-300 hover:bg-primary-500 hover:text-dark-900 transition-all"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-primary-500/40 flex items-center justify-center text-primary-300 hover:bg-primary-500 hover:text-dark-900 transition-all"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-primary-500/40 flex items-center justify-center text-primary-300 hover:bg-primary-500 hover:text-dark-900 transition-all"
            aria-label="YouTube"
          >
            <Youtube size={18} />
          </a>
        </div>
      </div>

      <a
        href="https://wa.me/971555671544"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-colors"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={26} />
      </a>
      <a
        href="tel:+971503937928"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 gold-gradient rounded-full flex items-center justify-center text-dark-900 shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Call us"
      >
        <Phone size={22} />
      </a>
    </section>
  );
}
