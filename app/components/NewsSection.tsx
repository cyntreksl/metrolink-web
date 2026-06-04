import Link from 'next/link';
import Image from 'next/image';

const newsArticles = [
  {
    id: 1,
    category: 'Industry',
    categoryColor: 'bg-orange-100 text-[#FF7F38]',
    date: 'Jan 15, 2026',
    title: 'MetroLink Expands Sea Freight Routes to Southeast Asia',
    excerpt: 'New direct shipping connections from Dammam to major ports in Singapore, Malaysia, and Thailand.',
    image: '/images/news/sea-freight.jpg',
    imageAlt: 'Port cranes and shipping containers',
    link: '/news/sea-freight-expansion',
  },
  {
    id: 2,
    category: 'Company',
    categoryColor: 'bg-orange-100 text-[#FF7F38]',
    date: 'Dec 20, 2025',
    title: 'MetroLink Achieves ISO 14001 Environmental Certification',
    excerpt: 'Commitment to sustainable logistics practices recognized with international environmental management certification.',
    image: '/images/news/warehouse.jpg',
    imageAlt: 'Modern warehouse operations',
    link: '/news/iso-14001-certification',
  },
  {
    id: 3,
    category: 'Vision 2030',
    categoryColor: 'bg-orange-100 text-[#FF7F38]',
    date: 'Nov 08, 2025',
    title: 'Supporting Saudi Vision 2030 Logistics Transformation Goals',
    excerpt: 'MetroLink invests in technology and infrastructure to support the Kingdom\'s logistics sector development.',
    image: '/images/news/aerial-port.jpg',
    imageAlt: 'Aerial view of container port',
    link: '/news/vision-2030-support',
  },
];

export default function NewsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
          <div>
            <p className="text-[#FF7F38] uppercase tracking-wide font-semibold mb-3 text-sm md:text-base">
              Latest News
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00426D] tracking-tight">
              News & Insights
            </h2>
          </div>
          <Link
            href="/news"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-[#00426D] hover:text-[#FF7F38] font-semibold transition-colors group"
          >
            All Articles
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

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                {/* Placeholder for news images - replace with actual images */}
                <div className="w-full h-full flex items-center justify-center">
                  {article.id === 1 && (
                    <svg className="w-24 h-24 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 15.5h18M5.5 21c-.828 0-1.5-.448-1.5-1s.672-1 1.5-1h13c.828 0 1.5.448 1.5 1s-.672 1-1.5 1h-13zM6 15.5l1.5-7h9l1.5 7M9 8.5L10 3h4l1 5.5" />
                    </svg>
                  )}
                  {article.id === 2 && (
                    <svg className="w-24 h-24 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )}
                  {article.id === 3 && (
                    <svg className="w-24 h-24 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#00426D]/0 group-hover:bg-[#00426D]/10 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Category and Date */}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`${article.categoryColor} px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide`}>
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-[#00426D] mb-3 leading-tight group-hover:text-[#FF7F38] transition-colors">
                  <Link href={article.link}>
                    {article.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={article.link}
                  className="inline-flex items-center gap-2 text-[#FF7F38] hover:text-[#d85d2a] font-semibold transition-colors group/link text-sm md:text-base"
                >
                  Read More
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
            </article>
          ))}
        </div>

        {/* Optional: Subscribe to Newsletter CTA */}
        <div className="mt-16 md:mt-20 bg-gradient-to-r from-[#00426D] to-[#0A4F7E] rounded-3xl p-8 md:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated with Industry News
            </h3>
            <p className="text-white/80 mb-6 md:mb-8 text-base md:text-lg">
              Subscribe to our newsletter for the latest logistics insights, industry trends, and company updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF7F38] text-sm md:text-base"
              />
              <button className="bg-[#FF7F38] hover:bg-[#d85d2a] text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg whitespace-nowrap text-sm md:text-base">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
