import Image from 'next/image';

const companies = [
  { name: 'ARAMCO', logo: '/logos/aramco.svg' },
  { name: 'SABIC', logo: '/logos/sabic.svg' },
  { name: 'SEC', logo: '/logos/sec.svg' },
  { name: 'STC', logo: '/logos/stc.svg' },
  { name: 'MAADEN', logo: '/logos/maaden.svg' },
  { name: 'NESMA', logo: '/logos/nesma.svg' },
  { name: 'AL-RASHID', logo: '/logos/al-rashid.svg' },
  { name: 'ALFANAR', logo: '/logos/alfanar.svg' },
];

export default function LeadingCompaniesSection() {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-gray-400 uppercase tracking-widest font-semibold text-xs md:text-sm">
            Trusted by Saudi Arabia's Leading Companies
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 md:gap-12 items-center">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              {/* Placeholder for company logos - replace with actual logo images */}
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-300 hover:text-gray-600 transition-colors">
                  {company.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Stats Row */}
        <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#161E54] mb-2">500+</div>
              <div className="text-gray-600 text-sm md:text-base">Active Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#161E54] mb-2">98%</div>
              <div className="text-gray-600 text-sm md:text-base">Client Retention Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#161E54] mb-2">15+</div>
              <div className="text-gray-600 text-sm md:text-base">Industry Sectors Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
