import { Link } from 'react-router-dom';
import { Star, Home, Briefcase, Factory, Palette, Triangle, Hash, Moon } from 'lucide-react';

const services = [
  {
    icon: Star,
    title: 'Astrovastu',
    desc: 'The practice of Vastu Shastra is supplemented by astrological components to assist in forming a natural energy balance on the premises according to the site layout, favorable astrological factors, and your natal chart.',
  },
  {
    icon: Home,
    title: 'Residential Vastu',
    desc: 'The aim of our residential Vastu service is to design & provide an appropriate environment for the occupants in terms of the fulfillment of optimal well-being, happiness, prosperity.',
  },
  {
    icon: Briefcase,
    title: 'Commercial Vastu',
    desc: 'Our specialized commercial Vastu services are devised to enhance business success by creating office space that is in tune with energetic vibrations, promoting work efficiency, financial growth, and the best working atmosphere.',
  },
  {
    icon: Factory,
    title: 'Industrial Vastu',
    desc: 'Being the Best Vastu consultant in Dubai, our industrial Vastu services are meant to rectify the colossal industries\u2019 layout, placement of machinery, and work environment according to Vastu concepts for additional welfare and effectiveness.',
  },
  {
    icon: Palette,
    title: 'Branding',
    desc: 'We suggest proper logo designs to evoke Vastu principles. We recommend a specific set of colors for logos and make sure that these are based on the elements of Vastu.',
  },
  {
    icon: Triangle,
    title: 'Pyramid Vastu',
    desc: 'In our pyramid Vastu services, we use pyramids to channel the energies and maximize their flow to bring about a healed environment filled with positivity and spirit growth.',
  },
  {
    icon: Hash,
    title: 'Numerology',
    desc: 'In our numerology services, we impart predictions at a personal level based on the vibrations created by the number, which helps you gain the power to make decisions in life, career, and relations.',
  },
  {
    icon: Moon,
    title: 'Astrology',
    desc: 'Reveal the depths of your life\u2019s odyssey, strengths, and weaknesses with professional services through which you can move forward in life confidently and clearly.',
  },
];

const featuredServices = [
  {
    title: 'Residential Vastu',
    desc: 'Home is where our hearts find solace, and it provides us not only with a...',
    img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600', // peaceful home
  },
  {
    title: 'Commercial Vastu',
    desc: 'In The Realm Of Commerce, Where We Dedicate A Significant Portion Of Our Lives, Work...',
    img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600', // modern office
  },
  {
    title: 'Industrial Vastu',
    desc: 'Enhancing Productivity And Prosperity Through Industrial Vastu Industrial Spaces...',
    img: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=600', // factory vibe
  },
  {
    title: 'Branding',
    desc: 'Logo – The Logo Should Consist Of Either The Company’s Name Or A Symbol With...',
    img: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600', // design + symbols
  },
  {
    title: 'Pyramid Vastu',
    desc: 'Pyramid Vastu Is An Effective Discipline That Harnesses The Power Of Pyramids...',
    img: 'https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=600', // pyramid spiritual
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        <div className="text-center mb-14">
          <p className="text-primary-500 text-sm tracking-[0.2em] uppercase mb-3 font-medium">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark-800 mb-4">
            Our Vastu Services
          </h2>
          <div className="w-20 h-0.5 gold-gradient mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group bg-dark-50 rounded-sm p-6 hover:bg-dark-900 transition-all duration-500 border border-transparent hover:border-primary-700/30"
            >
              <div className="w-12 h-12 rounded-sm gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svc.icon size={22} className="text-dark-900" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-dark-800 mb-2 group-hover:text-primary-300 transition-colors">
                {svc.title}
              </h3>
              <p className="text-dark-500 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <p className="text-primary-500 text-sm tracking-[0.2em] uppercase mb-3 font-medium">
            Featured
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark-800 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-0.5 gold-gradient mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((svc) => (
            <div
              key={svc.title}
              className="group overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
              </div>
              <div className="p-5 bg-white">
                <h3 className="font-serif text-lg font-semibold text-dark-800 mb-2">
                  {svc.title}
                </h3>
                <p className="text-dark-500 text-sm leading-relaxed mb-3">
                  {svc.desc}
                </p>
                <Link
                  to="/services"
                  className="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors inline-flex items-center gap-1"
                >
                  Read More
                  <span className="text-lg leading-none">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
