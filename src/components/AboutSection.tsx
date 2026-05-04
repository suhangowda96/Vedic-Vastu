import { Link } from 'react-router-dom';
import { Award, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="bg-dark-50 section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Anju Nathaney - Vastu Consultant"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 md:bottom-6 md:right-6 gold-gradient p-5 rounded-sm shadow-xl">
              <div className="flex items-center gap-3">
                <Award size={28} className="text-dark-900" />
                <div>
                  <p className="text-dark-900 font-bold text-lg">Gold Medal</p>
                  <p className="text-dark-800 text-xs">in Vastu</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-primary-500 text-sm tracking-[0.2em] uppercase mb-3 font-medium">
              About Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark-800 mb-6">
              Vedic Vastu
            </h2>
            <p className="text-dark-600 leading-relaxed mb-4">
              Anju Nathaney is a Vastu Consultant and Numerologist based in
              Dubai. She has been in the field of mystical science for the past 8
              years. Her experience in the field of Vastu Shastra has enabled her
              to spread the light of wealth, happiness, health and success.
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
            <p className="text-dark-500 leading-relaxed mb-8 text-sm italic border-l-2 border-primary-400 pl-4">
              In the vedic period, people-built homes, temples and hermitages
              with a view to have peaceful and harmonious living. But in the
              modern world people build concrete clusters, mainly for high rate
              of return. The race to make buildings not in line with the ancient
              bye laws of nature has led the world pollution, environment, and
              ecological problems with no peace of mind under any kind of
              shelter.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 gold-gradient text-dark-900 px-8 py-3 text-sm font-semibold tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
            >
              <Sparkles size={16} />
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
