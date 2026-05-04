import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is the most typical facilitation that the Vastu practitioners provide?',
    a: "We're Vastu expert in Dubai, offering service areas like residential, commercial and industrial Vastu consultation, Astrovastu, Pyramid Vastu, Numerology and Astrology.",
  },
  {
    q: 'How can a Vastu specialist help improve my home or business?',
    a: 'As a Vastu specialist in Dubai, we can determine the Vastu doshas in your area and eradicate them with the least structural changes; merely by rearranging the objects, changing color, and applying pyramid energy devices for better prospects.',
  },
  {
    q: 'Why would I need a Vastu consultant?',
    a: 'As a Vastu specialist in Dubai, we can increase the circulation and flow of natural energy within a space where one resides or where one conducts one\u2019s normal activities, aiming to make one healthier, better connected socially, more prosperous, and improve overall quality of life.',
  },
  {
    q: 'How can Vastu principles and modern design be used together?',
    a: 'Yes, Vastu, as a science, can look good with modern aesthetics. This is feasible since we at Vedic Vastu will uniformly combine traditional and contemporary design to your home.',
  },
  {
    q: 'How does Vastu Shastra differ from Feng Shui?',
    a: "Vastu Shastra & Feng Shui Both relate to the capturing of rooms in their harmonious placement but Vastu Shastra is all based on Indian architectural style of construction with some basic principles as the five elements as well as the directions; while Feng Shui is the ancient Chinese concept of Winds and rivers in buildings. Both have ways of doing things and techniques that can be adopted to better the lives of the people.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-dark-50 section-padding">
      <div className="container-max max-w-4xl">
        <div className="text-center mb-14">
          <p className="text-primary-500 text-sm tracking-[0.2em] uppercase mb-3 font-medium">
            Questions
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark-800 mb-4">
            FAQs
          </h2>
          <div className="w-20 h-0.5 gold-gradient mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-sm shadow-sm border border-dark-100 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-dark-50/50 transition-colors"
              >
                <span className="font-serif text-base font-semibold text-dark-800 pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-primary-500 shrink-0 transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="px-5 text-dark-500 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
