import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const serviceLinks = [
  { name: 'Astrovastu', path: '/services' },
  { name: 'Residential Vastu', path: '/services' },
  { name: 'Commercial Vastu', path: '/services' },
  { name: 'Industrial Vastu', path: '/services' },
  { name: 'Branding', path: '/services' },
  { name: 'Pyramid Vastu', path: '/services' },
  { name: 'Numerology', path: '/services' },
  { name: 'Astrology', path: '/services' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white/80">
      <div className="container-max section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex flex-col mb-6">
              <span className="font-serif text-3xl font-bold text-primary-300 tracking-wide">
                Vedic Vastu
              </span>
              <span className="text-xs tracking-[0.3em] text-primary-500 uppercase mt-1">
                Dubai
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              Bringing ancient Vastu wisdom into the contemporary environment,
              aligning customers in Dubai with positive energies for better
              health, wealth, and prosperity.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-primary-300 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-primary-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-primary-300 mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-primary-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-primary-300 mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-primary-400 mt-1 shrink-0" />
                <a
                  href="tel:+971555671544"
                  className="text-sm text-white/60 hover:text-primary-300 transition-colors"
                >
                  +971 555671544
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary-400 mt-1 shrink-0" />
                <a
                  href="mailto:info@vedicvastudubai.com"
                  className="text-sm text-white/60 hover:text-primary-300 transition-colors"
                >
                  info@vedicvastudubai.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary-400 mt-1 shrink-0" />
                <span className="text-sm text-white/60">
                  Capital Golden Tower, Business Bay, Dubai, UAE
                </span>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-primary-700/50 flex items-center justify-center text-primary-400 hover:bg-primary-500 hover:text-dark-900 hover:border-primary-500 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-primary-700/50 flex items-center justify-center text-primary-400 hover:bg-primary-500 hover:text-dark-900 hover:border-primary-500 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-primary-700/50 flex items-center justify-center text-primary-400 hover:bg-primary-500 hover:text-dark-900 hover:border-primary-500 transition-all"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700/50 pt-6 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Vedic Vastu. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
