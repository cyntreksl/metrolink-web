import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#0A4F7E] via-[#0d5a8f] to-[#0A4F7E] overflow-hidden">
      {/* Background Pattern/Decoration */}
      <div className="absolute inset-0 opacity-10">
        {/* Subtle world map or logistics pattern */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Decorative network lines */}
            <g opacity="0.3" stroke="white" strokeWidth="1">
              <path d="M0 200 Q 300 100 600 200 T 1200 200" />
              <path d="M0 150 Q 300 250 600 150 T 1200 150" />
              <path d="M0 250 Q 300 150 600 250 T 1200 250" />
            </g>
            {/* Decorative dots */}
            <g opacity="0.4" fill="white">
              <circle cx="150" cy="180" r="3" />
              <circle cx="350" cy="220" r="3" />
              <circle cx="550" cy="160" r="3" />
              <circle cx="750" cy="210" r="3" />
              <circle cx="950" cy="170" r="3" />
              <circle cx="250" cy="240" r="2" />
              <circle cx="450" cy="140" r="2" />
              <circle cx="650" cy="230" r="2" />
              <circle cx="850" cy="150" r="2" />
              <circle cx="1050" cy="200" r="2" />
            </g>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="text-[#F16D34] uppercase tracking-wide font-semibold mb-4 text-sm md:text-base">
            Get Started Today
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Move Your Cargo?
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto">
            Get a customized freight quote within 2 hours from our logistics experts in Dammam. 
            Fast turnaround, competitive rates, transparent pricing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA */}
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-[#F16D34] hover:bg-[#d85d2a] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-xl text-base md:text-lg w-full sm:w-auto"
            >
              Request a Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            {/* Secondary CTA - Phone */}
            <a
              href="tel:+966138001234"
              className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white hover:bg-white hover:text-[#0A4F7E] text-white px-8 py-4 rounded-full font-semibold transition-all text-base md:text-lg w-full sm:w-auto group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +966 13 800 1234
            </a>
          </div>

          {/* Optional: Trust Indicators */}
          <div className="mt-10 md:mt-12 pt-8 md:pt-10 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#F16D34]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>2-Hour Quote Response</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#F16D34]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#F16D34]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#F16D34]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Competitive Rates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
    </section>
  );
}
