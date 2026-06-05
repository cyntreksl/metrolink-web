import Link from 'next/link';
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center bg-gradient-to-br from-[#0A4F7E] via-[#0d5a8f] to-[#0A4F7E]">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A4F7E]/80 z-10" />
          <Image
              src="/images/services-hero.jpg"
              alt="MetroLink cargo operations"
              fill
              className="object-cover"
              priority
          />
          <div className="w-full h-full opacity-30 bg-gradient-to-br from-blue-900 to-blue-700" />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-20 relative z-20">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm md:text-base text-white/80 mb-6 md:mb-8">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-white">Services</span>
            </nav>

            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="bg-[#FF7F38]/20 border border-[#FF7F38]/50 text-[#FF7F38] px-4 py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wide">
                Our Services
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              End-to-End Freight Solutions
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              From Dammam to the world — MetroLink provides comprehensive freight forwarding services across sea, air, land, and specialized cargo segments.
            </p>
          </div>
        </div>
      </section>

      {/* Services Icons Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {/* Service 1: Sea Freight */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#E8F3F8] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1_36)">
                    <path d="M11 9.33997V12.8334" stroke="#4A7C9C" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 1.83337V4.58337" stroke="#4A7C9C" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.4167 11.9167V6.41671C17.4167 5.93048 17.2235 5.46416 16.8797 5.12034C16.5359 4.77653 16.0696 4.58337 15.5833 4.58337H6.41667C5.93044 4.58337 5.46412 4.77653 5.12031 5.12034C4.77649 5.46416 4.58334 5.93048 4.58334 6.41671V11.9167" stroke="#4A7C9C" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.765 18.3334C18.751 16.6692 19.2645 14.7676 19.25 12.8334L11.7443 9.49762C11.51 9.39351 11.2564 9.33972 11 9.33972C10.7436 9.33972 10.49 9.39351 10.2557 9.49762L2.75 12.8334C2.70756 15.4401 3.62424 17.9715 5.32583 19.9467" stroke="#4A7C9C" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.83334 19.25C2.38334 19.7084 2.93334 20.1667 4.125 20.1667C6.41667 20.1667 6.41667 18.3334 8.70834 18.3334C9.9 18.3334 10.45 18.7917 11 19.25C11.55 19.7084 12.1 20.1667 13.2917 20.1667C15.5833 20.1667 15.5833 18.3334 17.875 18.3334C19.0667 18.3334 19.6167 18.7917 20.1667 19.25" stroke="#4A7C9C" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_36">
                      <rect width="22" height="22" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#00426D]">Sea Freight</h3>
            </div>

            {/* Service 2: Air Freight */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#E8F3F8] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.4833 15.9385L12.8333 8.42183L16.0417 5.2135C17.4167 3.8385 17.875 2.00517 17.4167 1.0885C16.5 0.630168 14.6667 1.0885 13.2917 2.4635L10.0833 5.67183L2.56666 4.02183C2.10832 3.93017 1.74166 4.1135 1.55832 4.48017L1.28332 4.9385C1.09999 5.39683 1.19166 5.85517 1.55832 6.13017L6.41666 9.3385L4.58332 12.0885H1.83332L0.916656 13.0052L3.66666 14.8385L5.49999 17.5885L6.41666 16.6718V13.9218L9.16666 12.0885L12.375 16.9468C12.65 17.3135 13.1083 17.4052 13.5667 17.2218L14.025 17.0385C14.3917 16.7635 14.575 16.3968 14.4833 15.9385Z" stroke="#4A7C9C" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#00426D]">Air Freight</h3>
            </div>

            {/* Service 3: Land Transport */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#E8F3F8] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#4A7C9C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m-4 0v-1m4 1v-1m6 1a2 2 0 104 0m-4 0a2 2 0 114 0m-4 0v-1m4 1v-1" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#00426D]">Land Transport</h3>
            </div>

            {/* Service 4: Customs Clearance */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#E8F3F8] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#4A7C9C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#00426D]">Customs Clearance</h3>
            </div>

            {/* Service 5: Warehousing & Distribution */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#E8F3F8] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#4A7C9C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#00426D]">Warehousing &<br />Distribution</h3>
            </div>

            {/* Service 6: Project Cargo */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#E8F3F8] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#4A7C9C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-[#00426D]">Project Cargo</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Service 1: Sea Freight */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-[#FF7F38]/20 text-[#FF7F38] px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                Ocean Cargo Services
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#00426D] mb-6 tracking-tight">Sea Freight</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                MetroLink offers comprehensive sea freight services through King Abdul Aziz Port in Dammam — one of the largest ports in the Middle East. We handle FCL and LCL shipments connecting you to major global trade lanes.
              </p>

              {/* Info Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm bg-[#00426D]/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">150+ global ports</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-[#00426D]/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">14-35 days</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-[#FF7F38]/20 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="text-[#FF7F38] font-medium">Dammam Port specialists</span>
                </div>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Full Container Load (FCL) & LCL</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Reefer & temperature-controlled containers</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Hazardous materials (IMO certified)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Door-to-port and door-to-door delivery</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Real-time vessel tracking</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Break bulk and Ro-Ro cargo</span>
                </div>
              </div>

              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#00426D] hover:bg-[#2d8ab0] text-white px-6 py-3 rounded-2xl font-semibold transition-all">
                Get a Sea Freight Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <Image
                      src="/images/sea-cargo.jpg"
                      alt="MetroLink cargo operations"
                      fill
                      className="object-cover"
                      priority
                  />
                  <span className="text-white text-sm">Sea Freight Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Air Freight */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="order-1">
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center">
                  <Image
                      src="/images/air-cargo.jpg"
                      alt="MetroLink cargo operations"
                      fill
                      className="object-cover"
                      priority
                  />
                  <span className="text-white text-sm">Air Freight Image</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-2">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-[#FF7F38]/20 text-[#FF7F38] px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                Express Air Cargo
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#00426D] mb-6 tracking-tight">Air Freight</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                When speed is critical, our IATA-certified air freight team connects Dammam to the world's major hubs via King Fahd International Airport with express and standard cargo options.
              </p>

              {/* Info Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm bg-[#00426D]/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">200+ global airports</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-[#00426D]/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">1 –  5 days</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-[#FF7F38]/20 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-[#FF7F38] font-medium">IATA certified agents</span>
                </div>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">IATA-certified cargo handling</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Next-flight-out and standard services</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Dangerous goods (DG) handling</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Charter cargo for oversized shipments</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Airport-to-airport & door-to-door</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Cold chain and pharma logistics</span>
                </div>
              </div>

              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#00426D] hover:bg-[#2d8ab0] text-white px-6 py-3 rounded-2xl font-semibold transition-all">
                Get an Air Freight Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Land Transport */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-[#FF7F38]/20 text-[#FF7F38] px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                GCC Road Freight
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#00426D] mb-6 tracking-tight">Land Transport</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our land transport network covers all of Saudi Arabia and extends across GCC borders with a GPS-tracked fleet, offering FTL, LTL, and dedicated vehicle options.
              </p>

              {/* Info Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm bg-[#00426D]/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span className="text-gray-700 font-medium">All KSA regions & GCC countries</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-[#00426D]/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">1 – 5 days</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-[#FF7F38]/20 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[#FF7F38] font-medium">GPS - tracked nationwide</span>
                </div>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Full Truckload (FTL) & LTL</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">GPS-tracked fleet across KSA</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Cross-border GCC transport</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Flatbed and specialized vehicles</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Refrigerated truck services</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Scheduled and on-demand dispatch</span>
                </div>
              </div>

              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#00426D] hover:bg-[#2d8ab0] text-white px-6 py-3 rounded-2xl font-semibold transition-all">
                Get a Land Transport Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <Image
                      src="/images/land-transport.jpg"
                      alt="MetroLink cargo operations"
                      fill
                      className="object-cover"
                      priority
                  />
                  <span className="text-white text-sm">Land Transport Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Customs Clearance */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="order-1">
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                  <Image
                      src="/images/customs-clearance.jpg"
                      alt="MetroLink cargo operations"
                      fill
                      className="object-cover"
                      priority
                  />
                  <span className="text-white text-sm">Customs Clearance Image</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-2">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-[#FF7F38]/20 text-[#FF7F38] px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                Brokerage & Documentation
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#00426D] mb-6 tracking-tight">Customs Clearance</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our licensed customs brokerage team handles all import and export clearance at Saudi ports of entry, ensuring fast, accurate, and compliant processing every time.
              </p>

              {/* Info Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm bg-[#00426D]/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-gray-700 font-medium">All Saudi ports of entry</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-[#00426D]/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium">24 – 48 hours clearance</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-[#FF7F38]/20 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-[#FF7F38] font-medium">24hr clearance guarantee</span>
                </div>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Import/export documentation</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Duty & tax calculation</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">HS code classification</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Saudi Customs Authority licensed</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Free Zone and bonded warehouse entries</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Government permits and approvals</span>
                </div>
              </div>

              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#00426D] hover:bg-[#2d8ab0] text-white px-6 py-3 rounded-2xl font-semibold transition-all">
                Get a Customs Clearance Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 5: Warehousing & Distribution */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-[#FF7F38]/20 text-[#FF7F38] px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Smart Storage Solutions
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#00426D] mb-6 tracking-tight">Warehousing & Distribution</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our 50,000 sqm modern warehousing and logistics complex in Dammam offers flexible storage, advanced inventory management, and nationwide distribution capabilities.
              </p>

              {/* Info Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm bg-[#00426D]/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-gray-700 font-medium">Dammam Logistics Zone</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-[#00426D]/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Same-day dispatch</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-[#FF7F38]/20 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[#FF7F38] font-medium">50,000 sqm facility</span>
                </div>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">50,000 sqm covered storage</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Ambient, chilled, and frozen zones</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">WMS-powered inventory management</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Pick, pack, and labeling</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Last-mile distribution across KSA</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Cross-docking and transshipment</span>
                </div>
              </div>

              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#00426D] hover:bg-[#2d8ab0] text-white px-6 py-3 rounded-2xl font-semibold transition-all">
                Get a Warehousing & Distribution Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <Image
                      src="/images/warehouse.jpg"
                      alt="MetroLink cargo operations"
                      fill
                      className="object-cover"
                      priority
                  />
                  <span className="text-white text-sm">Warehousing Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 6: Project Cargo */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="order-1">
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                  <Image
                      src="/images/project-cargo.jpg"
                      alt="MetroLink cargo operations"
                      fill
                      className="object-cover"
                      priority
                  />
                  <span className="text-white text-sm">Project Cargo Image</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-2">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-[#FF7F38]/20 text-[#FF7F38] px-4 py-2 rounded-lg text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                  <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                  <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                </svg>
                Heavy & Oversized Cargo
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#00426D] mb-6 tracking-tight">Project Cargo</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                MetroLink specializes in complex project cargo for the oil & gas, petrochemical, and construction sectors — from detailed planning and route surveys to final on-site delivery.
              </p>

              {/* Info Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm bg-[#00426D]/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <span className="text-gray-700 font-medium"> Global project sites</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-[#00426D]/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  <span className="text-gray-700 font-medium">Project-based</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-[#FF7F38]/20 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-[#FF7F38] font-medium">Oil & gas specialists</span>
                </div>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">OOG (Out-of-Gauge) cargo specialists</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Heavy lift and crane coordination</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Route surveys and oversize permits</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Modular and industrial equipment</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Rigging and installation support</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#FF7F38] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Dedicated project management team</span>
                </div>
              </div>

              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#00426D] hover:bg-[#2d8ab0] text-white px-6 py-3 rounded-2xl font-semibold transition-all">
                Get Project Cargo Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Lanes Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <p className="text-[#FF7F38] uppercase tracking-wide font-semibold mb-4 text-sm md:text-base">
              Trade Lanes
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00426D] mb-6 tracking-tight">
              Key Routes from Dammam
            </h2>
          </div>

          {/* Routes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Route 1: Dammam → Rotterdam */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15.5h18M5.5 21c-.828 0-1.5-.448-1.5-1s.672-1 1.5-1h13c.828 0 1.5.448 1.5 1s-.672 1-1.5 1h-13zM6 15.5l1.5-7h9l1.5 7M9 8.5L10 3h4l1 5.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#00426D] mb-2">Dammam → Rotterdam</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span>Sea</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>22-25 days</span>
                </div>
              </div>
            </div>

            {/* Route 2: Dammam → Singapore */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15.5h18M5.5 21c-.828 0-1.5-.448-1.5-1s.672-1 1.5-1h13c.828 0 1.5.448 1.5 1s-.672 1-1.5 1h-13zM6 15.5l1.5-7h9l1.5 7M9 8.5L10 3h4l1 5.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#00426D] mb-2">Dammam → Singapore</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span>Sea</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>18-21 days</span>
                </div>
              </div>
            </div>

            {/* Route 3: Dammam → Shanghai */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15.5h18M5.5 21c-.828 0-1.5-.448-1.5-1s.672-1 1.5-1h13c.828 0 1.5.448 1.5 1s-.672 1-1.5 1h-13zM6 15.5l1.5-7h9l1.5 7M9 8.5L10 3h4l1 5.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#00426D] mb-2">Dammam → Shanghai</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span>Sea</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>25-28 days</span>
                </div>
              </div>
            </div>

            {/* Route 4: Dammam → Frankfurt */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#00426D] mb-2">Dammam → Frankfurt</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span>Air</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>1 days</span>
                </div>
              </div>
            </div>

            {/* Route 5: Dammam → Dubai */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m-4 0v-1m4 1v-1m6 1a2 2 0 104 0m-4 0a2 2 0 114 0m-4 0v-1m4 1v-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#00426D] mb-2">Dammam → Dubai</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span>Land</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>1-2 days</span>
                </div>
              </div>
            </div>

            {/* Route 6: Dammam → Houston */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15.5h18M5.5 21c-.828 0-1.5-.448-1.5-1s.672-1 1.5-1h13c.828 0 1.5.448 1.5 1s-.672 1-1.5 1h-13zM6 15.5l1.5-7h9l1.5 7M9 8.5L10 3h4l1 5.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#00426D] mb-2">Dammam → Houston</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span>Sea</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>28-32 days</span>
                </div>
              </div>
            </div>

            {/* Route 7: Dammam → Jeddah */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m-4 0v-1m4 1v-1m6 1a2 2 0 104 0m-4 0a2 2 0 114 0m-4 0v-1m4 1v-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#00426D] mb-2">Dammam → Jeddah</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span>Land</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>1 days</span>
                </div>
              </div>
            </div>

            {/* Route 8: Dammam → London */}
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#00426D] mb-2">Dammam → London</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span>Air</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full" />
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>1-2 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#0A4F7E] via-[#0d5a8f] to-[#0A4F7E] mb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Need a Custom Logistics Solution?
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Our freight experts will design a solution tailored to your specific cargo and budget.
            </p>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#FF7F38] hover:bg-[#d85d2a] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Talk to Our Team
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
