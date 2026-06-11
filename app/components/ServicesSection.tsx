import Link from 'next/link';

const services = [
  {
    id: 'sea-freight',
    icon: (
        <svg className="w-8 h-8" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1_36)">
            <path d="M11 9.33997V12.8334" stroke="#155DFC" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 1.83337V4.58337" stroke="#155DFC" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.4167 11.9167V6.41671C17.4167 5.93048 17.2235 5.46416 16.8797 5.12034C16.5359 4.77653 16.0696 4.58337 15.5833 4.58337H6.41667C5.93044 4.58337 5.46412 4.77653 5.12031 5.12034C4.77649 5.46416 4.58334 5.93048 4.58334 6.41671V11.9167" stroke="#155DFC" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.765 18.3334C18.751 16.6692 19.2645 14.7676 19.25 12.8334L11.7443 9.49762C11.51 9.39351 11.2564 9.33972 11 9.33972C10.7436 9.33972 10.49 9.39351 10.2557 9.49762L2.75 12.8334C2.70756 15.4401 3.62424 17.9715 5.32583 19.9467" stroke="#155DFC" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.83334 19.25C2.38334 19.7084 2.93334 20.1667 4.125 20.1667C6.41667 20.1667 6.41667 18.3334 8.70834 18.3334C9.9 18.3334 10.45 18.7917 11 19.25C11.55 19.7084 12.1 20.1667 13.2917 20.1667C15.5833 20.1667 15.5833 18.3334 17.875 18.3334C19.0667 18.3334 19.6167 18.7917 20.1667 19.25" stroke="#155DFC" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_1_36">
              <rect width="22" height="22" fill="white"/>
            </clipPath>
          </defs>
        </svg>
    ),
    title: 'Sea Freight',
    description: 'FCL & LCL shipments through King Abdul Aziz Port, connecting Dammam to 150+ global ports.',
    link: '/services',
    color: 'blue',
  },
  {
    id: 'air-freight',
    icon: (
        <svg className="w-8 h-8" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.4833 15.9385L12.8333 8.42183L16.0417 5.2135C17.4167 3.8385 17.875 2.00517 17.4167 1.0885C16.5 0.630168 14.6667 1.0885 13.2917 2.4635L10.0833 5.67183L2.56666 4.02183C2.10832 3.93017 1.74166 4.1135 1.55832 4.48017L1.28332 4.9385C1.09999 5.39683 1.19166 5.85517 1.55832 6.13017L6.41666 9.3385L4.58332 12.0885H1.83332L0.916656 13.0052L3.66666 14.8385L5.49999 17.5885L6.41666 16.6718V13.9218L9.16666 12.0885L12.375 16.9468C12.65 17.3135 13.1083 17.4052 13.5667 17.2218L14.025 17.0385C14.3917 16.7635 14.575 16.3968 14.4833 15.9385Z" stroke="#0084D1" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),
    title: 'Air Freight',
    description: 'Express and standard air cargo via King Fahd International Airport for time-sensitive shipments.',
    link: '/services',
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
    link: '/services',
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
    link: '/services',
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
    link: '/services',
    color: 'red',
  },
] as const;

const colorClasses = {
  blue: 'text-blue-600 bg-blue-50',
  green: 'text-green-600 bg-green-50',
  purple: 'text-purple-600 bg-purple-50',
  orange: 'text-orange-600 bg-orange-50',
  red: 'text-red-600 bg-red-50',
} as const;

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
          <div>
            <p className="text-[#FF7F38] uppercase tracking-wide font-semibold mb-3 text-sm md:text-base">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#00426D]">
              Comprehensive Freight Solutions
            </h2>
          </div>
          <Link
            href="/services"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-[#00426D] hover:text-[#FF7F38] font-semibold transition-colors group"
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
              <h3 className="text-xl font-bold tracking-tight text-[#00426D] mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#6A7282] leading-relaxed mb-6 text-sm md:text-base">
                {service.description}
              </p>

              {/* Learn More Link */}
              <Link
                href={service.link}
                className="inline-flex items-center gap-2 text-[#FF7F38] hover:text-[#d85d2a] font-semibold transition-colors group/link text-sm md:text-base"
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
      </div>
    </section>
  );
}
