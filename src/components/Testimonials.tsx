import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "It was pleasure consulting Anju for vastu for my house, it was a first venture for us to buy an immovable property in Dubai and we just purchased it with some basic knowledge of direction. When my friend told me that there is someone who can direct us on how we can enhance the way we live, that is when we consulted Anju and it was worth doing so, she took some basic details of us and came out with some simple and powerful remedies for the house based on the structure and direction. I would say that it worked wonders and had benefited us so much that we have spent more than 2 years after the remediation and all seems to be smooth. Just as an example, I was working with my organization with no progress many years but it happened that it moved in good direction with positive outcomes, similar situation with my wife and there seems to be a good improvement on my few additive habits. Overall it was a good move for me for consulting Anju and I have a good outcome. I continue to work with her on my future projects.",
    name: 'Giridhar Muralidhar',
  },
  {
    text: "Anju is an absolute expert in her field, demonstrating exceptional knowledge and a deep commitment to her clients\u2019 projects. In my experience, she recommended a complete redesign of my home, and as my house nears completion, I can confidently say that everything has proceeded seamlessly. I am filled with happiness, and professionally, things are looking up, all before even moving into my new home! I firmly believe that since you typically build a house only once, it\u2019s wise to utilize all available resources to transform it into \u201cThe Place\u201d of your dreams.",
    name: 'Sumit Sabarwal',
  },
  {
    text: "Life presents us with a series of challenges, and a greater challenge lies in seeking the right guidance from the right individual at the right moment. I had the privilege of meeting Anju two years ago when I sought her expertise regarding the Vastu of my home. It\u2019s important to note that I had consulted other experts, but the way Anju handled my situation was truly remarkable. I firmly believe that Vastu is a science with its unique capacity to infuse positivity into one\u2019s life. Anju has been my guiding light since then, consistently assisting me in enhancing the quality of my life. In my view, she possesses profound Vastu knowledge and excels in addressing sensitive matters related to one\u2019s life.",
    name: 'Praful Kumar',
  },
  {
    text: "When we moved into our new apartment, we initially felt an unexplained heaviness and discomfort. Seeking a solution, we turned to Anju Nathaney, a recommended Vastu consultant. Her subtle adjustments, including strategically placed pyramids, swiftly transformed our home\u2019s atmosphere from negativity to overwhelming positivity. Anju\u2019s unique ability to tap into a space\u2019s energy not only made our home happier and more peaceful but also positively impacted our children\u2019s development. We\u2019re immensely grateful for her expertise and wholeheartedly recommend her services for anyone seeking to bring balance and positivity into their living spaces.",
    name: 'Happy Client',
  },
  {
    text: "It is with great pleasure that I write this testimonial to express my deep gratitude and admiration for Anju Ji and her exceptional expertise in Vastu. Having known her for a considerable time, I am continually impressed by her unwavering commitment to harmonizing energies within living spaces. My journey with Anju Ji\u2019s Vastu consultancy began in the UAE, where she conducted assessments for my apartment and office. Her meticulous attention to detail and profound understanding of Vastu principles resulted in astonishing transformations. These changes significantly improved the overall aura, promoting positivity and tranquility. Upon relocating to Canada, Anju Ji\u2019s online Vastu consultations proved invaluable in aligning our new home with Vastu principles. Remarkably, within three weeks of implementing her recommendations, I received a job offer that had previously seen little progress over six months. Anju Ji\u2019s expertise played a pivotal role in this career advancement.",
    name: 'Grateful Client',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="bg-dark-900 section-padding">
      <div className="container-max">
        <div className="text-center mb-14">
          <p className="text-primary-400 text-sm tracking-[0.2em] uppercase mb-3 font-medium">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <div className="w-20 h-0.5 gold-gradient mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto relative">
          <Quote size={48} className="text-primary-700/30 mb-4" />

          <div className="min-h-[280px]">
            <p className="text-white/70 leading-relaxed text-base md:text-lg mb-8 transition-opacity duration-500">
              {testimonials[current].text}
            </p>
            <p className="text-primary-300 font-serif text-lg font-semibold">
              {testimonials[current].name}
            </p>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-primary-600/40 flex items-center justify-center text-primary-400 hover:bg-primary-500 hover:text-dark-900 hover:border-primary-500 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current
                      ? 'gold-gradient w-8'
                      : 'bg-dark-600 hover:bg-dark-500'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-primary-600/40 flex items-center justify-center text-primary-400 hover:bg-primary-500 hover:text-dark-900 hover:border-primary-500 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
