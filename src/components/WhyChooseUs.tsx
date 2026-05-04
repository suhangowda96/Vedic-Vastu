import { Shield, Zap, Globe, Award } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: '8+ Years Experience',
    desc: 'Anju Nathaney brings over 8 years of dedicated experience in mystical sciences and Vastu Shastra.',
  },
  {
    icon: Zap,
    title: 'Non-Invasive Solutions',
    desc: 'Simple yet effective vastu solutions using colours and pyramids without major structural changes.',
  },
  {
    icon: Globe,
    title: 'Thousands of Clients Worldwide',
    desc: 'Having helped thousands of clients around the world channelize their energy towards a more productive and positive life.',
  },
  {
    icon: Award,
    title: 'Gold Medal in Vastu',
    desc: 'Recognized authority in Vastu Shastra with a Gold Medal certification and deep practical knowledge.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-dark-900 section-padding">
      <div className="container-max">
        
        {/* Centered Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-400 text-sm tracking-[0.2em] uppercase mb-3 font-medium">
            Why Us
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose Vedic Vastu?
          </h2>

          <p className="text-white/60 leading-relaxed mb-6">
            Choosing Vedic Vastu means entrusting your space to the expertise
            of Anju Nathaney, a renowned Vastu Consultant and Numerologist
            with over 8 years of experience in mystical sciences. Based in
            Dubai, Anju has dedicated her career to helping individuals and
            businesses achieve wealth, happiness, health, and success through
            the principles of Vastu Shastra.
          </p>

          <p className="text-white/60 leading-relaxed mb-8">
            Her advanced Vastu solutions, often using colours and pyramids,
            have been life-changing for thousands of clients around the world
            in quest of a more productive and positive life. Anju Nathaney
            brings deep knowledge and practical application in equal measure
            to the very authoritative realm of Vastu; thus, Vedic Vastu is the
            best choice to harmonize surroundings toward achieving life goals.
          </p>

          <a
            href="https://maps.app.goo.gl/kpWHtLqAjy7PhemGA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gold-gradient text-dark-900 px-8 py-3 text-sm font-semibold tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            Vastu Expert Dubai
          </a>
        </div>

        {/* Reasons Grid (UNCHANGED) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-dark-800/50 border border-dark-700/50 rounded-sm p-6 text-center hover:border-primary-700/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <r.icon size={24} className="text-dark-900" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-primary-200 mb-2">
                {r.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
