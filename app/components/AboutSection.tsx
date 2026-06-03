import Link from 'next/link';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Location Badge */}
              <div className="absolute top-6 left-6 z-10 bg-[#FF7F38] text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Dammam, KSA</span>
              </div>

              {/* Placeholder for warehouse image - replace with actual image */}
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-900 to-blue-700">
                {/* Add your actual warehouse/logistics image here */}
                <div className="w-full h-full flex items-center justify-center text-white/20">
                  <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Stats Badge - Years */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-[#00426D] text-white px-8 py-6 rounded-2xl shadow-xl z-20">
              <div className="text-5xl md:text-6xl font-bold text-[#FF7F38] mb-1">20+</div>
              <div className="text-sm md:text-base text-white/80 whitespace-nowrap">Years Serving the Kingdom</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Eyebrow */}
            <p className="text-[#FF7F38] uppercase tracking-wide font-semibold mb-4 text-sm md:text-base">
              About MetroLink
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00426D] mb-6 leading-tight">
              Dammam's Premier Freight Forwarding Company
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 mb-8 text-gray-600 leading-relaxed">
              <p className="text-base md:text-lg">
                Founded in 2004 in Dammam, MetroLink has grown into one of Saudi Arabia's most trusted freight and logistics companies. 
                Strategically located near King Abdul Aziz Port, we serve the Kingdom's most demanding industries — from oil & gas and petrochemicals to retail and healthcare.
              </p>
              <p className="text-base md:text-lg">
                Aligned with Saudi Vision 2030, we are investing in technology, talent, and infrastructure to build a smarter, 
                more sustainable logistics network for the Kingdom's future.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
              {/* Offices */}
              <div className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-[#00426D]">3</div>
                </div>
                <div className="text-sm md:text-base text-gray-600">Offices in KSA</div>
              </div>

              {/* Professionals */}
              <div className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-[#00426D]">200+</div>
                </div>
                <div className="text-sm md:text-base text-gray-600">Professionals</div>
              </div>

              {/* Destinations */}
              <div className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-[#00426D]">150+</div>
                </div>
                <div className="text-sm md:text-base text-gray-600">Destinations</div>
              </div>

              {/* Warehouse Space */}
              <div className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-[#00426D]">50K</div>
                </div>
                <div className="text-sm md:text-base text-gray-600">Warehouse Space (sqm)</div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-[#00426D] hover:bg-[#0d1230] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg text-base md:text-lg"
            >
              Learn About Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
