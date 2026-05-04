import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-max flex items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="font-serif text-2xl md:text-3xl font-bold text-primary-300 tracking-wide">
              Vedic Vastu
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-primary-400 uppercase">
              Dubai
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-primary-300 ${
                location.pathname === link.path
                  ? 'text-primary-300'
                  : 'text-white/90'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="gold-gradient text-dark-900 px-6 py-2.5 text-sm font-semibold tracking-wide uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-dark-900/98 backdrop-blur-md border-t border-primary-800/30">
          <nav className="container-max flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide uppercase py-2 border-b border-dark-700/50 transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-300'
                    : 'text-white/80 hover:text-primary-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="gold-gradient text-dark-900 px-6 py-3 text-sm font-semibold tracking-wide uppercase text-center rounded-sm mt-2"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
