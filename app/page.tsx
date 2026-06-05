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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MetroLink Freight Forwarding",
    "alternateName": "MetroLink",
    "url": "https://www.metrolink-sa.com",
    "logo": "https://www.metrolink-sa.com/logo.png",
    "description": "Saudi Arabia's premier freight forwarding company based in Dammam, offering comprehensive logistics solutions.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "King Saud Street, Al Faisaliyah District",
      "addressLocality": "Dammam",
      "addressRegion": "Eastern Province",
      "postalCode": "32222",
      "addressCountry": "SA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966-13-800-1234",
      "contactType": "customer service",
      "email": "info@metrolink-sa.com",
      "areaServed": ["SA", "AE", "KW", "BH", "QA", "OM"],
      "availableLanguage": ["en", "ar"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/metrolink-freight",
      "https://twitter.com/metrolink_sa"
    ],
    "foundingDate": "2004",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 200
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Freight Forwarding",
    "provider": {
      "@type": "Organization",
      "name": "MetroLink Freight Forwarding"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Saudi Arabia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Freight Forwarding Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sea Freight",
            "description": "Full Container Load (FCL) and Less than Container Load (LCL) ocean freight services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Air Freight",
            "description": "Express and standard air cargo services with IATA certification"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Land Transport",
            "description": "GPS-tracked trucking services across Saudi Arabia and GCC"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Customs Clearance",
            "description": "Expert customs brokerage and documentation services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Warehousing",
            "description": "50,000 sqm climate-controlled warehouse facilities"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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
    </>
  );
}
