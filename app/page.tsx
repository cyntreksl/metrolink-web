import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import AdvantageSection from './components/AdvantageSection';
import LeadingCompaniesSection from './components/LeadingCompaniesSection';
import TestimonialsSection from './components/TestimonialsSection';
import PartnershipsSection from './components/PartnershipsSection';
import NewsSection from './components/NewsSection';
import CTABanner from './components/CTABanner';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <AdvantageSection />
      <LeadingCompaniesSection />
      <TestimonialsSection />
      <PartnershipsSection />
      <NewsSection />
      <CTABanner />
    </div>
  );
}
