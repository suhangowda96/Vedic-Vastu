import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Youtube } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      {/* Page Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
            "url('https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container-max px-4 md:px-8 text-center">
          <p className="text-primary-300 text-sm tracking-[0.3em] uppercase mb-4">
            Reach Out
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-dark-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <p className="text-primary-500 text-sm tracking-[0.2em] uppercase mb-3 font-medium">
                Get in Touch
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark-800 mb-6">
                We'd Love to Hear From You
              </h2>
              <p className="text-dark-500 leading-relaxed mb-8">
                Whether you have a question about our services, need a
                consultation, or simply want to learn more about Vastu Shastra,
                we're here to help. Reach out to us through any of the channels
                below.
              </p>

              <div className="space-y-6 mb-8">
                <a
                  href="tel:+971503937928"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-sm gold-gradient flex items-center justify-center shrink-0 group-hover:opacity-90 transition-opacity">
                    <Phone size={20} className="text-dark-900" />
                  </div>
                  <div>
                    <p className="font-serif text-lg font-semibold text-dark-800">
                      Phone
                    </p>
                    <p className="text-dark-500 text-sm">+971 503937928</p>
                  </div>
                </a>

                <a
                  href="mailto:info@vedicvastudubai.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-sm gold-gradient flex items-center justify-center shrink-0 group-hover:opacity-90 transition-opacity">
                    <Mail size={20} className="text-dark-900" />
                  </div>
                  <div>
                    <p className="font-serif text-lg font-semibold text-dark-800">
                      Email
                    </p>
                    <p className="text-dark-500 text-sm">
                      info@vedicvastudubai.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm gold-gradient flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-dark-900" />
                  </div>
                  <div>
                    <p className="font-serif text-lg font-semibold text-dark-800">
                      Address
                    </p>
                    <p className="text-dark-500 text-sm">
                      Capital Golden Tower, Business Bay, Dubai, UAE
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary-300 flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-dark-900 hover:border-primary-500 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary-300 flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-dark-900 hover:border-primary-500 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary-300 flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-dark-900 hover:border-primary-500 transition-all"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-sm shadow-lg p-8 md:p-10 border border-dark-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-dark-900" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-dark-800 mb-3">
                    Thank You!
                  </h3>
                  <p className="text-dark-500">
                    We have received your message. Our team will be in touch with
                    you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-dark-700 mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-dark-200 rounded-sm text-sm focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-dark-700 mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-dark-200 rounded-sm text-sm focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-dark-700 mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-dark-200 rounded-sm text-sm focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-dark-700 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-dark-200 rounded-sm text-sm focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full gold-gradient text-dark-900 py-3.5 text-sm font-semibold tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Map */}
          <div className="mt-16 rounded-sm overflow-hidden shadow-lg">
            <iframe
              title="Vedic Vastu Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.168!2d55.279!3d25.197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzQ5LjIiTiA1NcKwMTYnNDQuNCJF!5e0!3m2!1sen!2sae!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
