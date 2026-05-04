import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3014876/pexels-photo-3014876.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />
      <div className="absolute inset-0 bg-dark-900/85" />

      <div className="relative z-10 container-max text-center">
        <p className="text-primary-400 text-sm tracking-[0.2em] uppercase mb-3 font-medium">
          Reach Out
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
          Get in touch with us today!
        </h2>
        <div className="w-20 h-0.5 gold-gradient mx-auto mb-10" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
          <a
            href="tel:+971503937928"
            className="flex items-center gap-3 text-white/80 hover:text-primary-300 transition-colors"
          >
            <Phone size={18} className="text-primary-400" />
            <span className="text-sm">+971 503937928</span>
          </a>
          <a
            href="mailto:info@vedicvastudubai.com"
            className="flex items-center gap-3 text-white/80 hover:text-primary-300 transition-colors"
          >
            <Mail size={18} className="text-primary-400" />
            <span className="text-sm">info@vedicvastudubai.com</span>
          </a>
          <div className="flex items-center gap-3 text-white/80">
            <MapPin size={18} className="text-primary-400" />
            <span className="text-sm">Capital Golden Tower, Business Bay, Dubai, UAE</span>
          </div>
        </div>

        <Link
          to="/contact"
          className="inline-block gold-gradient text-dark-900 px-10 py-4 text-sm font-semibold tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
