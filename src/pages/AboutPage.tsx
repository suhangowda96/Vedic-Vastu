import { Award, Sparkles, CheckCircle } from 'lucide-react';

const highlights = [
  '8+ years of experience in mystical sciences',
  'Gold Medal in Vastu Shastra',
  'Thousands of satisfied clients worldwide',
  'Non-invasive Vastu solutions',
  'Specialist in colour and pyramid remedies',
  'Based in Dubai, serving globally',
];

export default function AboutPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3014876/pexels-photo-3014876.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container-max px-4 md:px-8 text-center">
          <p className="text-primary-300 text-sm tracking-[0.3em] uppercase mb-4">
            Know More
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">
            About Us
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-dark-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-sm shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Anju Nathaney - Vastu Consultant"
                  className="w-full h-[550px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 md:bottom-6 md:right-6 gold-gradient p-6 rounded-sm shadow-xl">
                <div className="flex items-center gap-3">
                  <Award size={32} className="text-dark-900" />
                  <div>
                    <p className="text-dark-900 font-bold text-xl">Gold Medal</p>
                    <p className="text-dark-800 text-sm">in Vastu</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-primary-500 text-sm tracking-[0.2em] uppercase mb-3 font-medium">
                Our Founder
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark-800 mb-6">
                Anju Nathaney
              </h2>
              <p className="text-dark-600 leading-relaxed mb-4">
                Anju Nathaney is a Vastu Consultant and Numerologist based in
                Dubai. She has been in the field of mystical science for the past
                8 years. Her experience in the field of Vastu Shastra has enabled
                her to spread the light of wealth, happiness, health and success.
              </p>
              <p className="text-dark-600 leading-relaxed mb-4">
                Anju is highly intuitive who can very well ascertain the vastu
                doshas of a place and can help remove them using simple yet
                effective, non-invasive vastu solutions based on her expertise and
                experience in the field of vastu shastra. She is an authoritative
                vastu consultant having helped thousands of clients around the
                world channelize their towards a more productive and positive life
                experience.
              </p>
              <p className="text-dark-600 leading-relaxed mb-6">
                She is specialised in offering advance Vastu remedies with simple
                remedies with colours and pyramids.
              </p>

              <ul className="space-y-3 mb-8">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-primary-500 mt-0.5 shrink-0"
                    />
                    <span className="text-dark-600 text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What is Vastu */}
      <section className="bg-dark-900 section-padding">
        <div className="container-max max-w-4xl text-center">
          <p className="text-primary-400 text-sm tracking-[0.2em] uppercase mb-3 font-medium">
            Ancient Wisdom
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            What is Vastu Shastra?
          </h2>
          <div className="w-20 h-0.5 gold-gradient mx-auto mb-8" />
          <p className="text-white/60 leading-relaxed mb-6">
            Vastu is an ancient architectural doctrine from India to design spaces
            that promote health, prosperity and mental lucidity. It emphasizes the
            practice encompasses five elemental principles and represents
            universal knowledge applicable across all cultures and belief systems.
          </p>
          <p className="text-white/60 leading-relaxed mb-6">
            In the vedic period, people-built homes, temples and hermitages with a
            view to have peaceful and harmonious living. But in the modern world
            people build concrete clusters, mainly for high rate of return. The
            race to make buildings not in line with the ancient bye laws of nature
            has led the world pollution, environment, and ecological problems with
            no peace of mind under any kind of shelter.
          </p>
          <p className="text-primary-300 font-serif text-lg italic">
            &ldquo;Vastu Shastra is the science of forming a space that corresponds
            and vibrates in harmony with nature.&rdquo;
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
            "url('https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-dark-900/85" />
        <div className="relative z-10 container-max text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Let Anju Nathaney guide you towards a more harmonious and prosperous
            life through the ancient wisdom of Vastu Shastra.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 gold-gradient text-dark-900 px-10 py-4 text-sm font-semibold tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            <Sparkles size={16} />
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
