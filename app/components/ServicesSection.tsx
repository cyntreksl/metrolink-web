import Link from 'next/link';

const services = [
  {
    id: 'sea-freight',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15.5h18M5.5 21c-.828 0-1.5-.448-1.5-1s.672-1 1.5-1h13c.828 0 1.5.448 1.5 1s-.672 1-1.5 1h-13zM6 15.5l1.5-7h9l1.5 7M9 8.5L10 3h4l1 5.5" />
      </svg>
    ),
    title: 'Sea Freight',
    description: 'FCL & LCL shipments through King Abdul Aziz Port, connecting Dammam to 150+ global ports.',
    link: '/services/sea-freight',
    color: 'blue',
  },
  {
    id: 'air-freight',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    title: 'Air Freight',
    description: 'Express and standard air cargo via King Fahd International Airport for time-sensitive shipments.',
    link: '/services/air-freight',
    color: 'blue',
  },
  {
    id: 'land-transport',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m-4 0v-1m4 1v-1m6 1a2 2 0 104 0m-4 0a2 2 0 114 0m-4 0v-1m4 1v-1" />
      </svg>
    ),
    title: 'Land Transport',
    description: 'GPS-tracked road freight across Saudi Arabia and the GCC with FTL and LTL options.',
    link: '/services/land-transport',
    color: 'green',
  },
  {
    id: 'customs-clearance',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Customs Clearance',
    description: 'Licensed customs brokerage ensuring fast, compliant clearance at all Saudi ports of entry.',
    link: '/services/customs-clearance',
    color: 'purple',
  },
  {
    id: 'warehousing',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Warehousing',
    description: '50,000 sqm modern logistics complex in Dammam with WMS-powered inventory management.',
    link: '/services/warehousing',
    color: 'orange',
  },
  {
    id: 'project-cargo',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Project Cargo',
    description: 'Specialized handling of heavy-lift, oversized, and industrial cargo for major projects.',
    link: '/services/project-cargo',
    color: 'red',
  },
];

const colorClasses = {
  blue: 'text-blue-600 bg-blue-50',
  green: 'text-green-600 bg-green-50',
  purple: 'text-purple-600 bg-purple-50',
  orange: 'text-orange-600 bg-orange-50',
  red: 'text-red-600 bg-red-50',
};

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
          <div>
            <p className="text-[#F16D34] uppercase tracking-wide font-semibold mb-3 text-sm md:text-base">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#161E54]">
              Comprehensive Freight Solutions
            </h2>
          </div>
          <Link
            href="/services"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-[#161E54] hover:text-[#F16D34] font-semibold transition-colors group"
          >
            All Services
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl ${colorClasses[service.color]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={service.color === 'blue' ? 'text-blue-600' : service.color === 'green' ? 'text-green-600' : service.color === 'purple' ? 'text-purple-600' : service.color === 'orange' ? 'text-orange-600' : 'text-red-600'}>
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#161E54] mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                {service.description}
              </p>

              {/* Learn More Link */}
              <Link
                href={service.link}
                className="inline-flex items-center gap-2 text-[#F16D34] hover:text-[#d85d2a] font-semibold transition-colors group/link text-sm md:text-base"
              >
                Learn more
                <svg 
                  className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-600 mb-6 text-base md:text-lg">
            Need a custom logistics solution? We're here to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#161E54] hover:bg-[#0d1230] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg text-base md:text-lg"
          >
            Contact Our Team
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
