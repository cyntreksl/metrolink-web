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
              <div className="aspect-[6/3] bg-gradient-to-br from-blue-100 to-orange-50">
                <Image
                    src="/images/partnership-home.jpg"
                    alt="MetroLink cargo operations"
                    fill
                    priority
                />
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00426D] mb-6 leading-tight tracking-tight">
              Building Long-Term Logistics Alliances
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              MetroLink works with the world's leading shipping lines, airlines, and logistics providers to ensure you always have access to the best rates, fastest routes, and most reliable service.
            </p>

            {/* Partnership Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {/* Preferred shipping line rates */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm md:text-base">Preferred shipping line rates</span>
              </div>

              {/* Airline cargo partnerships */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm md:text-base">Airline cargo partnerships</span>
              </div>

              {/* Global agent network */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm md:text-base">Global agent network (WCA)</span>
              </div>

              {/* Insurance underwriters */}
              <div className="flex items-center gap-3">
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
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#00426D] hover:bg-[#00426D] text-[#00426D] hover:text-white px-8 py-4 rounded-full font-semibold transition-all text-base md:text-lg"
            >
              Become a Partner
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
