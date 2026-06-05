import Link from 'next/link';
import Image from "next/image";

export default function NewsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center bg-gradient-to-br from-[#0A4F7E] via-[#0d5a8f] to-[#0A4F7E]">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A4F7E]/80 z-10" />
          <Image
              src="/images/news-hero.jpg"
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
              <span className="text-white">News & Insights</span>
            </nav>

            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="bg-[#FF7F38]/20 border border-[#FF7F38]/50 text-[#FF7F38] px-4 py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wide">
                News & Insights
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Latest from MetroLink
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Stay informed with company news, logistics industry insights, technology updates, and our contribution to Saudi Vision 2030.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto">
            <button className="px-6 py-2 bg-[#00426D] text-white rounded-full font-semibold text-sm whitespace-nowrap">
              All
            </button>
            <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-semibold text-sm whitespace-nowrap transition-colors">
              Company News
            </button>
            <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-semibold text-sm whitespace-nowrap transition-colors">
              Industry Insights
            </button>
            <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-semibold text-sm whitespace-nowrap transition-colors">
              Technology
            </button>
            <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-semibold text-sm whitespace-nowrap transition-colors">
              Sustainability
            </button>
            <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-semibold text-sm whitespace-nowrap transition-colors">
              Vision 2030
            </button>
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-6 py-3 pl-12 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3B9FC7] focus:border-transparent"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Article - Full Width */}
            <div className="lg:col-span-3 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-[300px] lg:h-auto">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <span className="text-gray-400">Featured Article Image</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase">
                      Company News
                    </span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-[#00426D] mb-4 group-hover:text-[#3B9FC7] transition-colors">
                    MetroLink Opens New Riyadh Office to Serve Central Province Clients
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    MetroLink has inaugurated a new branch office in Riyadh's King Fahd Road, expanding our capabilities to serve clients across Saudi Arabia's booming central province.
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Feb Jan 15, 2026</span>
                      <span className="mx-2">•</span>
                      <span>5 min read</span>
                    </div>

                    <Link href="/news/riyadh-office" className="inline-flex items-center gap-2 text-[#FF7F38] hover:text-[#d85d2a] font-semibold text-sm transition-colors">
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Article 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              {/* Image */}
              <div className="relative h-[240px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Article Image</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold uppercase mb-3 inline-block">
                  Industry Insights
                </span>

                <h3 className="text-xl font-bold text-[#00426D] mb-3 group-hover:text-[#3B9FC7] transition-colors line-clamp-2">
                  Saudi Arabia's Logistics Sector Poised for 10% Growth in 2026
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  New government policies and infrastructure investments position Saudi Arabia as a leading logistics hub in the Middle East.
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">Oct 25, 2025</span>
                  <Link href="/news/logistics-growth" className="inline-flex items-center gap-1 text-[#FF7F38] hover:text-[#d85d2a] font-semibold text-sm transition-colors">
                    Read
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              {/* Image */}
              <div className="relative h-[240px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Article Image</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase mb-3 inline-block">
                  Company News
                </span>

                <h3 className="text-xl font-bold text-[#00426D] mb-3 group-hover:text-[#3B9FC7] transition-colors line-clamp-2">
                  MetroLink Expands Sea Freight Routes to Southeast Asia
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  New direct shipping lanes connect Dammam with Singapore, Jakarta, and Manila, reducing transit times by 30%.
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">Oct 12, 2025</span>
                  <Link href="/news/sea-freight-expansion" className="inline-flex items-center gap-1 text-[#FF7F38] hover:text-[#d85d2a] font-semibold text-sm transition-colors">
                    Read
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              {/* Image */}
              <div className="relative h-[240px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Article Image</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold uppercase mb-3 inline-block">
                  Sustainability
                </span>

                <h3 className="text-xl font-bold text-[#00426D] mb-3 group-hover:text-[#3B9FC7] transition-colors line-clamp-2">
                  MetroLink Achieves ISO 14001 Environmental Certification
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  Our commitment to sustainable logistics practices earns international recognition with ISO 14001:2015 certification.
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">Sept 28, 2025</span>
                  <Link href="/news/iso-certification" className="inline-flex items-center gap-1 text-[#FF7F38] hover:text-[#d85d2a] font-semibold text-sm transition-colors">
                    Read
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Article 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              {/* Image */}
              <div className="relative h-[240px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Article Image</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold uppercase mb-3 inline-block">
                  Technology
                </span>

                <h3 className="text-xl font-bold text-[#00426D] mb-3 group-hover:text-[#3B9FC7] transition-colors line-clamp-2">
                  Launching the MetroLink Digital Portal — Track Your Cargo in Real Time
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  Our new client portal offers 24/7 shipment tracking, documentation access, and invoice management.
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">Aug 14, 2025</span>
                  <Link href="/news/digital-portal" className="inline-flex items-center gap-1 text-[#FF7F38] hover:text-[#d85d2a] font-semibold text-sm transition-colors">
                    Read
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Article 5 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              {/* Image */}
              <div className="relative h-[240px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Article Image</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold uppercase mb-3 inline-block">
                  Vision 2030
                </span>

                <h3 className="text-xl font-bold text-[#00426D] mb-3 group-hover:text-[#3B9FC7] transition-colors line-clamp-2">
                  Supporting Saudi Vision 2030 Logistics Transformation Goals
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  MetroLink's investment in digital infrastructure aligns with the Kingdom's ambition to become a global logistics hub.
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">Aug 03, 2025</span>
                  <Link href="/news/vision-2030" className="inline-flex items-center gap-1 text-[#FF7F38] hover:text-[#d85d2a] font-semibold text-sm transition-colors">
                    Read
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Article 6 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              {/* Image */}
              <div className="relative h-[240px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Article Image</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold uppercase mb-3 inline-block">
                  Industry Insights
                </span>

                <h3 className="text-xl font-bold text-[#00426D] mb-3 group-hover:text-[#3B9FC7] transition-colors line-clamp-2">
                  What Customs Regulation Means for Saudi Freight Forwarders
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  Understanding the new regulatory framework and its impact on import/export operations across the Kingdom.
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">July 20, 2025</span>
                  <Link href="/news/customs-regulation" className="inline-flex items-center gap-1 text-[#FF7F38] hover:text-[#d85d2a] font-semibold text-sm transition-colors">
                    Read
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Article 7 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              {/* Image */}
              <div className="relative h-[240px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-red-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Article Image</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase mb-3 inline-block">
                  Company News
                </span>

                <h3 className="text-xl font-bold text-[#00426D] mb-3 group-hover:text-[#3B9FC7] transition-colors line-clamp-2">
                  MetroLink Wins 'Best Freight Forwarder 2025' at Saudi Logistics Awards
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  Recognition of our operational excellence and commitment to client satisfaction across the Kingdom.
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">October 15, 2025</span>
                  <Link href="/news/award-2025" className="inline-flex items-center gap-1 text-[#FF7F38] hover:text-[#d85d2a] font-semibold text-sm transition-colors">
                    Read
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#00426D] border-2 border-[#00426D] px-8 py-3 rounded-full font-semibold transition-all">
              Load More Articles
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Banner Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#0A4F7E] via-[#0d5a8f] to-[#0A4F7E] mb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Never Miss an Update
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Subscribe to our newsletter for logistics news, industry trends, and MetroLink updates.
            </p>

            {/* Newsletter Form */}
            <form className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#FF7F38] focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF7F38] hover:bg-[#d85d2a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Subscribe
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </form>

            {/* Privacy Note */}
            <p className="text-white/60 text-sm mt-6">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
