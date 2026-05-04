import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import HowVastuWorks from '../components/HowVastuWorks';
import Advantages from '../components/Advantages';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import ContactCTA from '../components/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <HowVastuWorks />
      <Advantages />
      <ServicesSection />
      <WhyChooseUs />
      <FAQ />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
