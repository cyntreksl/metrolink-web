import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A4F7E]/95 via-[#0A4F7E]/85 to-[#0A4F7E]/10 z-10" />
        {/* Placeholder for background image - replace with actual shipping port image */}
        <div className="w-full h-full bg-[#0A4F7E]">
          {/* You can replace this with an actual Image component when you have the image */}
          <Image
              src="/images/home-hero.jpg"
              alt="MetroLink cargo operations"
              fill
              className="object-cover"
              priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 relative z-20">
        <div className="max-w-2xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FF7F38]/20 backdrop-blur-sm border border-[#FF7F38]/50 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8">
            <div className="w-2 h-2 bg-[#FF7F38] rounded-full animate-pulse" />
            <span className="text-[#FF7F38] text-xs md:text-sm font-semibold uppercase tracking-wide">
              Dammam • Eastern Province • Saudi Arabia
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-6 md:mb-8">
            Your Gateway to{' '}
            <span className="text-[#FF7F38]">Global Freight</span>
            <br />
            Solutions
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed max-w-xl">
            MetroLink delivers world-class freight forwarding from the heart of Saudi Arabia's industrial hub.
            Sea, air, land — we move your cargo efficiently, reliably, and securely.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-12">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-[#FF7F38] hover:bg-[#d85d2a] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-xl text-base md:text-lg"
            >
              Get a Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-[#0A4F7E] text-white px-8 py-4 rounded-full font-semibold transition-all text-base md:text-lg"
            >
              Explore Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="max-w-6xl mb-46 lg:mb-20">
          {/* Certifications */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm md:text-base">IATA Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm md:text-base">ISO 9001:2015</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm md:text-base">Saudi Customs Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#FF7F38]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm md:text-base">FIATA Member</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#001F35]/90 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Years of Experience */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">20+</div>
                <div className="text-sm md:text-base text-white/70">Years of Experience</div>
              </div>
            </div>

            {/* Global Destinations */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">150+</div>
                <div className="text-sm md:text-base text-white/70">Global Destinations</div>
              </div>
            </div>

            {/* Annual Shipments */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">60K+</div>
                <div className="text-sm md:text-base text-white/70">Annual Shipments</div>
              </div>
            </div>

            {/* On-Time Delivery */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-[#FF7F38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">99.2%</div>
                <div className="text-sm md:text-base text-white/70">On-Time Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
