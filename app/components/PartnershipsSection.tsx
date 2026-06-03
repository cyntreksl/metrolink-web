import Link from 'next/link';
import Image from 'next/image';

const partnerships = [
  { icon: 'ship', text: 'Preferred shipping line rates' },
  { icon: 'plane', text: 'Airline cargo partnerships' },
  { icon: 'globe', text: 'Global agent network (WCA)' },
  { icon: 'shield', text: 'Insurance underwriters' },
];

export default function PartnershipsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder for handshake image - replace with actual image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-orange-50">
                {/* Add your actual partnership/handshake image here */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-32 h-32 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <p className="text-gray-400 text-sm">Handshake / Partnership Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            {/* Eyebrow */}
            <p className="text-[#FF7F38] uppercase tracking-wide font-semibold mb-4 text-sm md:text-base">
              Strategic Partnerships
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00426D] mb-6 leading-tight">
              Building Long-Term Logistics Alliances
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              MetroLink works with the world's leading shipping lines, airlines, and logistics providers to ensure you always have access to the best rates, fastest routes, and most reliable service.
            </p>

            {/* Partnership Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {/* Preferred shipping line rates */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm md:text-base">Preferred shipping line rates</span>
              </div>

              {/* Airline cargo partnerships */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm md:text-base">Airline cargo partnerships</span>
              </div>

              {/* Global agent network */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm md:text-base">Global agent network (WCA)</span>
              </div>

              {/* Insurance underwriters */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm md:text-base">Insurance underwriters</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/partnerships"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#00426D] hover:bg-[#00426D] text-[#00426D] hover:text-white px-8 py-4 rounded-full font-semibold transition-all text-base md:text-lg"
            >
              Become a Partner
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Optional: Partnership Logos or Stats */}
        <div className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#00426D] mb-2">
              Our Strategic Partners
            </h3>
            <p className="text-gray-600">
              Collaborating with industry leaders worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {/* Partnership Categories */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15.5h18M5.5 21c-.828 0-1.5-.448-1.5-1s.672-1 1.5-1h13c.828 0 1.5.448 1.5 1s-.672 1-1.5 1h-13zM6 15.5l1.5-7h9l1.5 7" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-[#00426D] mb-1">50+</div>
              <div className="text-sm text-gray-600">Shipping Lines</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-[#00426D] mb-1">30+</div>
              <div className="text-sm text-gray-600">Airlines</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-[#00426D] mb-1">200+</div>
              <div className="text-sm text-gray-600">Global Agents</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-purple-50 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-[#00426D] mb-1">10+</div>
              <div className="text-sm text-gray-600">Insurance Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
