import { Heart, Brain, Users, TrendingUp, Leaf, Sparkles } from 'lucide-react';

const advantages = [
  {
    icon: Heart,
    title: 'Harmonising the Five Elements',
    desc: 'Harmonization of five elements, namely earth, fire, wind, water, space which makes our environment, is closely prescribed by Vastu Shastra. It nurtures harmony and order in the house. Vastu raises levels of living for comfort, health and energy.',
  },
  {
    icon: Brain,
    title: 'Health Benefits\u2014Mental and Physical',
    desc: 'Vastu-compliant homes incorporate maximum natural light, good airflow, and spatial efficiency. Further, the structure is aligned in Vastu with directional principles, protecting against harmful UV rays and promoting better health. This careful use of design, color, and materials also reduces stress levels and increases calmness.',
  },
  {
    icon: Users,
    title: 'Improved Relations',
    desc: 'The wisdom of the Vastu Shastra creates peace and spiritual well-being, which is again reflected in people\u2019s relations. A Vastu-compliant home develops a positive atmosphere that helps one relate better with others and sustain more fulfilling relations.',
  },
  {
    icon: TrendingUp,
    title: 'More Prosperity',
    desc: 'A clean, clutter-free, and well-lit house attracts more positive energy and is perceived to bring good luck. Applying the principles of Vastu enhances this positivity, which is reflected in financial success. When an individual enjoys a healthy body and calm mind and has an environment that puts him at ease, he can focus on his goals and strive to attain financial freedom.',
  },
  {
    icon: Leaf,
    title: 'Greater Connectivity with the Environment',
    desc: 'Vastu Shastra interlinks the structure of a home with the natural world and creates space in harmony with nature. This connectivity lays the base for one\u2019s belonging and puts meaning into life, enhancing the quality of life overall.',
  },
  {
    icon: Sparkles,
    title: 'Spiritual Growth',
    desc: 'Vastu Shastra aligns a house with cosmic energies, making lives materially affluent and supporting spiritual growth. This helps create an environment conducive to meditation, self-reflection, and personal development, which again puts the individual on the roadmap to achieving higher consciousness.',
  },
];

export default function Advantages() {
  return (
    <section className="bg-dark-50 section-padding">
      <div className="container-max">
        <div className="text-center mb-14">
          <p className="text-primary-500 text-sm tracking-[0.2em] uppercase mb-3 font-medium">
            Benefits
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark-800 mb-4">
            The Advantages of Embracing Vastu Shastra
          </h2>
          <div className="w-20 h-0.5 gold-gradient mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-sm p-7 shadow-md hover:shadow-xl transition-shadow border border-dark-100 group"
            >
              <div className="w-12 h-12 rounded-sm bg-primary-50 flex items-center justify-center mb-4 group-hover:gold-gradient transition-all">
                <item.icon
                  size={22}
                  className="text-primary-600 group-hover:text-dark-900 transition-colors"
                />
              </div>
              <h3 className="font-serif text-lg font-semibold text-dark-800 mb-3">
                {item.title}
              </h3>
              <p className="text-dark-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
