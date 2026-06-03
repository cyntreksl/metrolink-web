import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center bg-gradient-to-br from-[#0A4F7E] via-[#0d5a8f] to-[#0A4F7E]">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A4F7E]/80 z-10" />
          {/* Placeholder for background image - replace with actual container port image */}
          <div className="w-full h-full opacity-30 bg-gradient-to-br from-blue-900 to-blue-700">
            {/* Add your actual port/logistics image here */}
          </div>
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
              <span className="text-white">About Us</span>
            </nav>

            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="bg-[#F16D34]/20 border border-[#F16D34]/50 text-[#F16D34] px-4 py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wide">
                About MetroLink
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Connecting Saudi Arabia to the World Since 2004
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Over two decades of excellence in freight forwarding from the heart of the Eastern Province — built on trust, integrity, and a passion for logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              {/* Eyebrow */}
              <p className="text-[#F16D34] uppercase tracking-wide font-semibold mb-4 text-sm md:text-base">
                Our Story
              </p>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#161E54] mb-6 leading-tight">
                A Legacy Built on Moving Things Forward
              </h2>

              {/* Paragraphs */}
              <div className="space-y-4 mb-8 text-gray-600 leading-relaxed">
                <p className="text-base md:text-lg">
                  MetroLink Freight Forwarding was founded in 2004 in Dammam — a city that sits at the crossroads of Saudi Arabia's most vital industrial and commercial corridors. From day one, our mission was clear: to be the most dependable logistics partner for businesses operating in and from the Kingdom.
                </p>
                <p className="text-base md:text-lg">
                  Strategically located near King Abdul Aziz Port — the largest in the Middle East — MetroLink has grown from a 15-person team into a 200+ strong organization spanning three major Saudi cities, operating across every mode of freight: sea, air, land, and project cargo.
                </p>
              </div>

              {/* Key Points with Checkmarks */}
              <div className="space-y-3 mb-10">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                    <svg className="w-6 h-6 text-[#F16D34]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">Proximity to King Abdul Aziz Port and King Fahd Airport</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                    <svg className="w-6 h-6 text-[#F16D34]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">Serving oil & gas, petrochemical, retail, and healthcare sectors</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                    <svg className="w-6 h-6 text-[#F16D34]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">Aligned with Saudi Vision 2030 logistics transformation</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                    <svg className="w-6 h-6 text-[#F16D34]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">Fully digital client portal with real-time cargo tracking</span>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <svg className="w-6 h-6 text-[#F16D34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <div className="text-3xl md:text-4xl font-bold text-[#161E54]">20+</div>
                  </div>
                  <div className="text-sm text-gray-600">Years in Business</div>
                </div>

                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <svg className="w-6 h-6 text-[#F16D34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div className="text-3xl md:text-4xl font-bold text-[#161E54]">3</div>
                  </div>
                  <div className="text-sm text-gray-600">Offices Nationwide</div>
                </div>

                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <svg className="w-6 h-6 text-[#F16D34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div className="text-3xl md:text-4xl font-bold text-[#161E54]">200+</div>
                  </div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>

                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <svg className="w-6 h-6 text-[#F16D34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-3xl md:text-4xl font-bold text-[#161E54]">150+</div>
                  </div>
                  <div className="text-sm text-gray-600">Global Destinations</div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* Placeholder for warehouse image */}
                <div className="aspect-[4/5] bg-gradient-to-br from-blue-100 to-orange-50">
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-32 h-32 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Warehouse Size */}
              <div className="absolute -bottom-6 -right-6 bg-[#F16D34] text-white px-8 py-6 rounded-2xl shadow-xl">
                <div className="text-4xl md:text-5xl font-bold mb-1">50K</div>
                <div className="text-sm md:text-base opacity-90">sqm Warehouse</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section - Mission, Vision & Strategy */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#F16D34] uppercase tracking-wide font-semibold mb-4 text-sm md:text-base">
              Our Purpose
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#161E54]">
              Mission, Vision & Strategy
            </h2>
          </div>

          {/* Mission and Vision Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-[#0A4F7E] to-[#161E54] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
              {/* Decorative background pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F16D34] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>

                {/* Label */}
                <p className="text-[#F16D34] uppercase tracking-wide font-semibold mb-3 text-sm">
                  Our Mission
                </p>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Empowering Saudi Trade
                </h3>

                {/* Description */}
                <p className="text-white/90 leading-relaxed mb-8 text-base md:text-lg">
                  To provide innovative, reliable, and cost-effective freight forwarding solutions that empower Saudi businesses to compete, grow, and succeed in global markets — while delivering exceptional service experiences that exceed expectations.
                </p>

                {/* Key Points */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm md:text-base">Client-First Approach</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm md:text-base">Operational Excellence</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm md:text-base">Competitive Pricing</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm md:text-base">On-Time Delivery</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-gray-200 hover:border-[#F16D34]/30 transition-colors">
              {/* Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F16D34]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#F16D34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>

              {/* Label */}
              <p className="text-[#F16D34] uppercase tracking-wide font-semibold mb-3 text-sm">
                Our Vision
              </p>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#161E54] mb-4">
                Saudi Arabia's Leading Logistics Company
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg">
                To be Saudi Arabia's most trusted and technologically advanced freight forwarding company — a key driver of trade growth and a proud contributor to the Kingdom's Vision 2030 logistics and supply chain transformation journey.
              </p>

              {/* Key Points */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm md:text-base text-gray-700">Vision 2030 Aligned</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm md:text-base text-gray-700">Technology-Driven</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm md:text-base text-gray-700">Regional Market Leader</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm md:text-base text-gray-700">Sustainable Operations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Goals 2026-2030 */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-200">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#161E54]">
                Strategic Goals 2026–2030
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Goal 01 */}
              <div>
                <div className="text-5xl md:text-6xl font-bold text-[#F16D34] mb-4">01</div>
                <h4 className="text-xl font-bold text-[#161E54] mb-3">Expand to 5 Saudi Cities</h4>
                <p className="text-gray-600 text-sm md:text-base">Open new offices in Jubail, Yanbu, and Taif by 2028.</p>
              </div>

              {/* Goal 02 */}
              <div>
                <div className="text-5xl md:text-6xl font-bold text-[#F16D34] mb-4">02</div>
                <h4 className="text-xl font-bold text-[#161E54] mb-3">100% Digital Operations</h4>
                <p className="text-gray-600 text-sm md:text-base">Full digitization of all freight documentation and tracking.</p>
              </div>

              {/* Goal 03 */}
              <div>
                <div className="text-5xl md:text-6xl font-bold text-[#F16D34] mb-4">03</div>
                <h4 className="text-xl font-bold text-[#161E54] mb-3">Green Logistics Fleet</h4>
                <p className="text-gray-600 text-sm md:text-base">Transition 40% of land transport to electric/hybrid vehicles.</p>
              </div>

              {/* Goal 04 */}
              <div>
                <div className="text-5xl md:text-6xl font-bold text-[#F16D34] mb-4">04</div>
                <h4 className="text-xl font-bold text-[#161E54] mb-3">500K Annual Shipments</h4>
                <p className="text-gray-600 text-sm md:text-base">Scale from 60,000 to 500,000 shipments per year by 2030.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Header and Image */}
            <div className="lg:col-span-4">
              {/* Eyebrow */}
              <p className="text-[#F16D34] uppercase tracking-wide font-semibold mb-4 text-sm md:text-base">
                What Guides Us
              </p>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#161E54] mb-6 leading-tight">
                Our Core Values
              </h2>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg">
                Our values are not just words on paper — they are the principles that guide every decision we make, every shipment we handle, and every relationship we build.
              </p>

              {/* Team Image */}
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-blue-50">
                  {/* Placeholder for team meeting image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Values Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Value 1: Integrity */}
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:bg-orange-50/50 transition-colors group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F16D34]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F16D34]/20 transition-colors">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-[#F16D34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#161E54] mb-3">
                    Integrity
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    We operate with complete transparency and honesty in every transaction, relationship, and commitment we make.
                  </p>
                </div>

                {/* Value 2: Excellence */}
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:bg-orange-50/50 transition-colors group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F16D34]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F16D34]/20 transition-colors">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-[#F16D34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#161E54] mb-3">
                    Excellence
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    We set the highest standards in service delivery, never compromising on quality or attention to detail.
                  </p>
                </div>

                {/* Value 3: Partnership */}
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:bg-orange-50/50 transition-colors group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F16D34]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F16D34]/20 transition-colors">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-[#F16D34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#161E54] mb-3">
                    Partnership
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    We build long-term relationships based on trust, mutual respect, and shared success with our clients.
                  </p>
                </div>

                {/* Value 4: Innovation */}
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:bg-orange-50/50 transition-colors group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F16D34]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F16D34]/20 transition-colors">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-[#F16D34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#161E54] mb-3">
                    Innovation
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    We embrace technology and forward-thinking solutions to continuously improve our logistics capabilities.
                  </p>
                </div>

                {/* Value 5: Sustainability */}
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:bg-orange-50/50 transition-colors group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F16D34]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F16D34]/20 transition-colors">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-[#F16D34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#161E54] mb-3">
                    Sustainability
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    We are committed to environmentally responsible operations, supporting Saudi Arabia's green logistics goals.
                  </p>
                </div>

                {/* Value 6: Global Thinking */}
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:bg-orange-50/50 transition-colors group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F16D34]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F16D34]/20 transition-colors">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-[#F16D34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#161E54] mb-3">
                    Global Thinking
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    With a local heart and global mindset, we connect Saudi businesses to the world with confidence.
                  </p>
                </div>

                {/* Value 7: Compliance */}
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:bg-orange-50/50 transition-colors group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F16D34]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F16D34]/20 transition-colors">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-[#F16D34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#161E54] mb-3">
                    Compliance
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Full adherence to Saudi regulations, international trade laws, and customs requirements at all times.
                  </p>
                </div>

                {/* Value 8: People First */}
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:bg-orange-50/50 transition-colors group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F16D34]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F16D34]/20 transition-colors">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-[#F16D34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#161E54] mb-3">
                    People First
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Our people are our greatest asset. We invest in their growth, welfare, and professional development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#0A4F7E] via-[#0d5a8f] to-[#0A4F7E] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <p className="text-[#F16D34] uppercase tracking-wide font-semibold mb-4 text-sm md:text-base">
              Our Journey
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              20 Years of Growth
            </h2>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/20 hidden sm:block" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* 2004 - Founded */}
                <div className="relative flex items-start gap-8 md:gap-0">
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#F16D34] rounded-full border-4 border-[#0A4F7E] transform -translate-x-1/2 hidden sm:block z-10" />
                  
                  <div className="flex-1 md:pr-12 md:text-right">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-all">
                      <span className="text-[#F16D34] font-bold text-lg md:text-xl mb-2 block">2004</span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Founded in Dammam</h3>
                      <p className="text-white/80 text-sm md:text-base">
                        MetroLink was established with a team of 15 logistics professionals focused on sea freight through King Abdul Aziz Port.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>

                {/* 2008 - Air Freight */}
                <div className="relative flex items-start gap-8 md:gap-0">
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#F16D34] rounded-full border-4 border-[#0A4F7E] transform -translate-x-1/2 hidden sm:block z-10" />
                  
                  <div className="flex-1 hidden md:block" />
                  <div className="flex-1 md:pl-12">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-all">
                      <span className="text-[#F16D34] font-bold text-lg md:text-xl mb-2 block">2008</span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Air Freight Division</h3>
                      <p className="text-white/80 text-sm md:text-base">
                        Expanded into air freight operations through King Fahd International Airport, connecting Saudi Arabia to global markets.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2012 - GCC Network */}
                <div className="relative flex items-start gap-8 md:gap-0">
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#F16D34] rounded-full border-4 border-[#0A4F7E] transform -translate-x-1/2 hidden sm:block z-10" />
                  
                  <div className="flex-1 md:pr-12 md:text-right">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-all">
                      <span className="text-[#F16D34] font-bold text-lg md:text-xl mb-2 block">2012</span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">GCC Land Transport Network</h3>
                      <p className="text-white/80 text-sm md:text-base">
                        Launched cross-border land freight connecting KSA to UAE, Kuwait, Bahrain, Qatar, and Oman with a dedicated fleet.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>

                {/* 2016 - ISO Certification */}
                <div className="relative flex items-start gap-8 md:gap-0">
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#F16D34] rounded-full border-4 border-[#0A4F7E] transform -translate-x-1/2 hidden sm:block z-10" />
                  
                  <div className="flex-1 hidden md:block" />
                  <div className="flex-1 md:pl-12">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-all">
                      <span className="text-[#F16D34] font-bold text-lg md:text-xl mb-2 block">2016</span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">ISO 9001:2015 Certification</h3>
                      <p className="text-white/80 text-sm md:text-base">
                        Achieved ISO certification and expanded the team to 150+ professionals, marking a decade of sustainable growth.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2019 - Logistics Complex */}
                <div className="relative flex items-start gap-8 md:gap-0">
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#F16D34] rounded-full border-4 border-[#0A4F7E] transform -translate-x-1/2 hidden sm:block z-10" />
                  
                  <div className="flex-1 md:pr-12 md:text-right">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-all">
                      <span className="text-[#F16D34] font-bold text-lg md:text-xl mb-2 block">2019</span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Logistics Complex Opening</h3>
                      <p className="text-white/80 text-sm md:text-base">
                        Inaugurated a 50,000 sqm state-of-the-art warehouse and logistics center in Dammam's Logistics Zone.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>

                {/* 2022 - Vision 2030 */}
                <div className="relative flex items-start gap-8 md:gap-0">
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#F16D34] rounded-full border-4 border-[#0A4F7E] transform -translate-x-1/2 hidden sm:block z-10" />
                  
                  <div className="flex-1 hidden md:block" />
                  <div className="flex-1 md:pl-12">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-all">
                      <span className="text-[#F16D34] font-bold text-lg md:text-xl mb-2 block">2022</span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Vision 2030 Partnership</h3>
                      <p className="text-white/80 text-sm md:text-base">
                        Signed a strategic partnership with the National Logistics Center (NLC) under Saudi Vision 2030 initiatives.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2024 - Digital Transformation */}
                <div className="relative flex items-start gap-8 md:gap-0">
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#F16D34] rounded-full border-4 border-[#0A4F7E] transform -translate-x-1/2 hidden sm:block z-10" />
                  
                  <div className="flex-1 md:pr-12 md:text-right">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-all">
                      <span className="text-[#F16D34] font-bold text-lg md:text-xl mb-2 block">2024</span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Digital Transformation</h3>
                      <p className="text-white/80 text-sm md:text-base">
                        Launched the MetroLink Client Portal — real-time tracking, e-documentation, and digital freight management.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <p className="text-[#F16D34] uppercase tracking-wide font-semibold mb-4 text-sm md:text-base">
              Leadership Team
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#161E54] mb-6">
              The People Behind MetroLink
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Our leadership brings decades of combined experience in freight forwarding, supply chain management, and logistics operations across the Gulf.
            </p>
          </div>

          {/* Leadership Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Leader 1 */}
            <div className="text-center group">
              <div className="mb-6 relative inline-block">
                <div className="w-32 h-32 md:w-36 md:h-36 bg-[#0A4F7E] rounded-3xl flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <span className="text-5xl md:text-6xl font-bold text-white">K</span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#161E54] mb-2">
                Khalid Al-Mutairi
              </h3>
              <p className="text-[#F16D34] font-semibold mb-2 text-sm md:text-base">
                Chief Executive Officer
              </p>
              <p className="text-gray-500 text-sm">
                25 years in logistics
              </p>
            </div>

            {/* Leader 2 */}
            <div className="text-center group">
              <div className="mb-6 relative inline-block">
                <div className="w-32 h-32 md:w-36 md:h-36 bg-[#0A4F7E] rounded-3xl flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <span className="text-5xl md:text-6xl font-bold text-white">S</span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#161E54] mb-2">
                Sara Al-Zahrani
              </h3>
              <p className="text-[#F16D34] font-semibold mb-2 text-sm md:text-base">
                Chief Operations Officer
              </p>
              <p className="text-gray-500 text-sm">
                18 years in freight forwarding
              </p>
            </div>

            {/* Leader 3 */}
            <div className="text-center group">
              <div className="mb-6 relative inline-block">
                <div className="w-32 h-32 md:w-36 md:h-36 bg-[#F16D34] rounded-3xl flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <span className="text-5xl md:text-6xl font-bold text-white">O</span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#161E54] mb-2">
                Omar Al-Dossary
              </h3>
              <p className="text-[#F16D34] font-semibold mb-2 text-sm md:text-base">
                Head of Sea Freight
              </p>
              <p className="text-gray-500 text-sm">
                20 years at Dammam Port
              </p>
            </div>

            {/* Leader 4 */}
            <div className="text-center group">
              <div className="mb-6 relative inline-block">
                <div className="w-32 h-32 md:w-36 md:h-36 bg-[#2D5F4E] rounded-3xl flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <span className="text-5xl md:text-6xl font-bold text-white">N</span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#161E54] mb-2">
                Nadia Al-Hamdan
              </h3>
              <p className="text-[#F16D34] font-semibold mb-2 text-sm md:text-base">
                Head of Air Freight
              </p>
              <p className="text-gray-500 text-sm">
                15 years in air cargo
              </p>
            </div>

            {/* Leader 5 */}
            <div className="text-center group">
              <div className="mb-6 relative inline-block">
                <div className="w-32 h-32 md:w-36 md:h-36 bg-[#6B4C7C] rounded-3xl flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <span className="text-5xl md:text-6xl font-bold text-white">F</span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#161E54] mb-2">
                Faisal Al-Otaibi
              </h3>
              <p className="text-[#F16D34] font-semibold mb-2 text-sm md:text-base">
                Customs & Compliance
              </p>
              <p className="text-gray-500 text-sm">
                12 years in customs brokerage
              </p>
            </div>

            {/* Leader 6 */}
            <div className="text-center group">
              <div className="mb-6 relative inline-block">
                <div className="w-32 h-32 md:w-36 md:h-36 bg-[#0A4F7E] rounded-3xl flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <span className="text-5xl md:text-6xl font-bold text-white">J</span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#161E54] mb-2">
                James Wilson
              </h3>
              <p className="text-[#F16D34] font-semibold mb-2 text-sm md:text-base">
                Head of Project Cargo
              </p>
              <p className="text-gray-500 text-sm">
                22 years in heavy lift
              </p>
            </div>

            {/* Leader 7 */}
            <div className="text-center group">
              <div className="mb-6 relative inline-block">
                <div className="w-32 h-32 md:w-36 md:h-36 bg-[#7B4F3A] rounded-3xl flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <span className="text-5xl md:text-6xl font-bold text-white">R</span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#161E54] mb-2">
                Reem Al-Ghamdi
              </h3>
              <p className="text-[#F16D34] font-semibold mb-2 text-sm md:text-base">
                Head of Warehousing
              </p>
              <p className="text-gray-500 text-sm">
                14 years in supply chain
              </p>
            </div>

            {/* Leader 8 */}
            <div className="text-center group">
              <div className="mb-6 relative inline-block">
                <div className="w-32 h-32 md:w-36 md:h-36 bg-[#2D5F4E] rounded-3xl flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <span className="text-5xl md:text-6xl font-bold text-white">A</span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#161E54] mb-2">
                Ali Al-Shehri
              </h3>
              <p className="text-[#F16D34] font-semibold mb-2 text-sm md:text-base">
                Regional Sales Manager
              </p>
              <p className="text-gray-500 text-sm">
                10 years in freight sales
              </p>
            </div>
          </div>

          {/* Optional: Join Team CTA */}
          <div className="mt-16 md:mt-20 text-center">
            <div className="inline-flex flex-col items-center gap-6 bg-gray-50 rounded-3xl p-8 md:p-12 max-w-2xl">
              <div className="w-16 h-16 bg-[#F16D34] rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#161E54] mb-3">
                  Join Our Team
                </h3>
                <p className="text-gray-600 mb-6 text-base md:text-lg">
                  We're always looking for talented professionals to join our growing team.
                </p>
                <a
                  href="/careers"
                  className="inline-flex items-center justify-center gap-2 bg-[#161E54] hover:bg-[#0d1230] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg text-base md:text-lg"
                >
                  View Open Positions
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Memberships Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <p className="text-[#F16D34] uppercase tracking-wide font-semibold mb-4 text-sm md:text-base">
              Certifications & Memberships
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#161E54]">
              Accredited. Recognized. Trusted.
            </h2>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {/* IATA Cargo Agent */}
            <div className="bg-white rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#161E54] mb-2">
                IATA Cargo Agent
              </h3>
              <p className="text-sm text-gray-600">
                International Air Transport Association
              </p>
            </div>

            {/* FIATA Member */}
            <div className="bg-white rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#161E54] mb-2">
                FIATA Member
              </h3>
              <p className="text-sm text-gray-600">
                International Federation of Freight Forwarders
              </p>
            </div>

            {/* ISO 9001:2015 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#161E54] mb-2">
                ISO 9001:2015
              </h3>
              <p className="text-sm text-gray-600">
                Quality Management System
              </p>
            </div>

            {/* Saudi Customs */}
            <div className="bg-white rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#161E54] mb-2">
                Saudi Customs
              </h3>
              <p className="text-sm text-gray-600">
                Licensed Authority
              </p>
            </div>

            {/* WCA Network */}
            <div className="bg-white rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#161E54] mb-2">
                WCA Network
              </h3>
              <p className="text-sm text-gray-600">
                World Cargo Alliance
              </p>
            </div>

            {/* ISO 14001:2015 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#161E54] mb-2">
                ISO 14001:2015
              </h3>
              <p className="text-sm text-gray-600">
                Environmental Management
              </p>
            </div>
          </div>

          {/* Trust Statement */}
          <div className="mt-12 md:mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-8 py-6 shadow-sm">
              <svg className="w-8 h-8 text-[#F16D34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="text-gray-700 text-base md:text-lg">
                <span className="font-bold text-[#161E54]">Fully compliant</span> with international standards and Saudi regulations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Saudi Vision 2030 Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#0A4F7E] via-[#0d5a8f] to-[#0A4F7E] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="bg-[#F16D34]/20 border border-[#F16D34]/50 text-[#F16D34] px-4 py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F16D34] rounded-full animate-pulse" />
                  Saudi Vision 2030
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Proudly Aligned with Saudi Arabia's Vision
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                MetroLink is a proud contributor to Saudi Vision 2030's logistics transformation agenda. We are actively investing in national talent, digital infrastructure, and sustainable operations to help position Saudi Arabia as a global logistics hub.
              </p>

              {/* Alignment Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#F16D34] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90 text-sm md:text-base">Saudization of logistics workforce</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#F16D34] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90 text-sm md:text-base">National logistics center partnerships</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#F16D34] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90 text-sm md:text-base">Green supply chain initiatives</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#F16D34] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90 text-sm md:text-base">Digital Customs integration</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#F16D34] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90 text-sm md:text-base">SME logistics support programs</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#F16D34] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90 text-sm md:text-base">Export facilitation services</span>
                </div>
              </div>
            </div>

            {/* Right Column - Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              {/* Stat 1 */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 md:p-8 hover:bg-white/15 transition-all">
                <div className="text-5xl md:text-6xl font-bold text-[#F16D34] mb-3">65%</div>
                <p className="text-white/90 text-sm md:text-base">Saudi national employees</p>
              </div>

              {/* Stat 2 */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 md:p-8 hover:bg-white/15 transition-all">
                <div className="text-5xl md:text-6xl font-bold text-[#F16D34] mb-3">40%</div>
                <p className="text-white/90 text-sm md:text-base">Fleet electrification target</p>
              </div>

              {/* Stat 3 */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 md:p-8 hover:bg-white/15 transition-all">
                <div className="text-5xl md:text-6xl font-bold text-[#F16D34] mb-3">100%</div>
                <p className="text-white/90 text-sm md:text-base">Digital documentation by 2026</p>
              </div>

              {/* Stat 4 */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 md:p-8 hover:bg-white/15 transition-all">
                <div className="text-5xl md:text-6xl font-bold text-[#F16D34] mb-3">3x</div>
                <p className="text-white/90 text-sm md:text-base">Growth target by 2030</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#161E54] mb-6">
              Ready to Partner with MetroLink?
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed">
              Our team is ready to discuss how we can support your logistics needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary CTA */}
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#F16D34] hover:bg-[#d85d2a] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-xl text-base md:text-lg w-full sm:w-auto"
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              {/* Secondary CTA */}
              <a
                href="/careers"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#161E54] hover:bg-[#161E54] text-[#161E54] hover:text-white px-8 py-4 rounded-full font-semibold transition-all text-base md:text-lg w-full sm:w-auto"
              >
                Join Our Team
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
