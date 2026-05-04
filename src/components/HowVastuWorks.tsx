import { Compass, Flame, Wind, Droplets, CircleDot, Ruler, Sun, Building, Target } from 'lucide-react';

const items = [
  {
    icon: Ruler,
    title: 'Design and Geometry',
    desc: 'Being an ancient science, Vastu Shastra includes the principles of design, fittings, and geometrical positioning and ensures the perfect movement of positive forces within a building.',
  },
  {
    icon: CircleDot,
    title: 'The Five Essential Elements',
    desc: 'The Earth includes five main components: earth, fire, wind, water, and space. Vastu Shastra uses these elements and integrates them with the centers of direction, and magnetic and gravitational pulls.',
  },
  {
    icon: Compass,
    title: 'Elemental Energies and Directions',
    desc: 'Each element corresponds to a specific energy\u2014earth (geomagnetic), water (gravitational), wind (wind), fire (solar), and space (cosmic). Vastu places these elements in ideal directions within a structure for maximum benefit.',
  },
  {
    icon: Sun,
    title: 'Scientific and Natural Factors',
    desc: 'It is the science of forming a space that corresponds and vibrates in harmony with nature, taking into consideration natural factors like wind velocity, sunlight, and rainfall intensity.',
  },
  {
    icon: Building,
    title: 'Applications Beyond Temples',
    desc: 'Originally used in temple architecture, Vastu Shastra has grown to be applied in residential homes, offices, schools, and even in urban planning.',
  },
  {
    icon: Target,
    title: 'Optimization by Purpose',
    desc: 'Vastu Shastra customizes the design of every place with its purpose so that residences, workplaces, and all other constructions are conducive to health and prosperity.',
  },
];

const elements = [
  { icon: Compass, name: 'Earth', color: 'text-amber-700' },
  { icon: Flame, name: 'Fire', color: 'text-red-500' },
  { icon: Wind, name: 'Wind', color: 'text-teal-500' },
  { icon: Droplets, name: 'Water', color: 'text-blue-500' },
  { icon: CircleDot, name: 'Space', color: 'text-purple-500' },
];

export default function HowVastuWorks() {
  return (
    <section className="bg-dark-900 section-padding">
      <div className="container-max">
        <div className="text-center mb-14">
          <p className="text-primary-400 text-sm tracking-[0.2em] uppercase mb-3 font-medium">
            Ancient Wisdom
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            How Vastu Shastra Works
          </h2>
          <div className="w-20 h-0.5 gold-gradient mx-auto" />
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-14">
          {elements.map((el) => (
            <div
              key={el.name}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-16 h-16 rounded-full border border-primary-600/40 flex items-center justify-center group-hover:bg-primary-500/10 transition-colors">
                <el.icon size={28} className={el.color} />
              </div>
              <span className="text-primary-300 text-sm font-medium tracking-wide">
                {el.name}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-dark-800/50 border border-dark-700/50 rounded-sm p-6 hover:border-primary-700/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-sm gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon size={22} className="text-dark-900" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-primary-200 mb-3">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
