import Link from 'next/link';
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Join Our Logistics Team | MetroLink",
  description: "Build your career in Saudi logistics with MetroLink. Join our growing team of 200+ professionals. We offer competitive packages, career growth, and international exposure. View open positions.",
  keywords: [
    "logistics careers Saudi Arabia",
    "freight forwarding jobs",
    "Dammam jobs",
    "supply chain careers",
    "MetroLink careers",
    "logistics jobs KSA"
  ],
  openGraph: {
    title: "Build Your Career in Saudi Logistics | MetroLink",
    description: "Join a growing team of 200+ logistics professionals shaping Saudi Arabia's freight forwarding industry.",
    url: "https://www.metrolink-sa.com/careers",
    images: [
      {
        url: "/images/careers-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at MetroLink",
      }
    ],
  },
  alternates: {
    canonical: "https://www.metrolink-sa.com/careers"
  }
};

export default function CareersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center bg-gradient-to-br from-[#0A4F7E] via-[#0d5a8f] to-[#0A4F7E]">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A4F7E]/80 z-10" />
          <Image
              src="/images/careers-hero.jpg"
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
              <span className="text-white">Careers</span>
            </nav>

            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="bg-[#FF7F38]/20 border border-[#FF7F38]/50 text-[#FF7F38] px-4 py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wide">
                Careers at MetroLink
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Build Your Career in Saudi Logistics
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Join a growing team of 200+ logistics professionals shaping Saudi Arabia's freight forwarding industry. We invest in our people as much as our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Life at MetroLink Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              {/* Eyebrow */}
              <p className="text-[#FF7F38] uppercase tracking-wide font-semibold mb-4 text-sm md:text-base">
                Life at MetroLink
              </p>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00426D] mb-6 leading-tight tracking-tight">
                Why Work at MetroLink?
              </h2>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg">
                At MetroLink, we believe our people are our greatest asset. We foster a culture of continuous learning, professional excellence, and genuine care for each team member's career journey. Whether you're just starting out or a seasoned logistics professional, MetroLink offers a dynamic environment to grow.
              </p>

              {/* Key Points */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-6 h-6 text-[#FF7F38]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg">
                    A fast-growing company with real advancement opportunities
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-6 h-6 text-[#FF7F38]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg">
                    International exposure through our global partner network
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-6 h-6 text-[#FF7F38]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg">
                    Strong emphasis on Saudization and national talent development
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-6 h-6 text-[#FF7F38]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg">
                    Competitive compensation packages aligned with Vision 2030
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-gray-100 p-3 text-center rounded-lg">
                  <div className="text-3xl md:text-4xl font-extrabold text-[#00426D] mb-2">200+</div>
                  <p className="text-sm md:text-base text-gray-600">Employees</p>
                </div>
                <div className="bg-gray-100 p-3 text-center rounded-lg">
                  <div className="text-3xl md:text-4xl font-extrabold text-[#00426D] mb-2">65%</div>
                  <p className="text-sm md:text-base text-gray-600">Saudi Nationals</p>
                </div>
                <div className="bg-gray-100 p-3 text-center rounded-lg">
                  <div className="text-3xl md:text-4xl font-extrabold text-[#00426D] mb-2">4.7★</div>
                  <p className="text-sm md:text-base text-gray-600">Employee Rating</p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <Image
                    src="/images/core-about.jpg"
                    alt="MetroLink cargo operations"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Perks Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <p className="text-[#FF7F38] uppercase tracking-wide font-semibold mb-4 text-sm md:text-base">
              Benefits & Perks
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00426D] mb-6 leading-tight tracking-tight">
              What MetroLink Offers You
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We invest in our employees' growth, well-being, and success with comprehensive benefits and a supportive work environment.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Benefit 1: Career Growth */}
            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#00426D]/8 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#00426D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#00426D] mb-3">Career Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Structured career paths, promotions, and leadership development programs for all employees.
              </p>
            </div>

            {/* Benefit 2: Training & Development */}
            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#00426D]/8 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#00426D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#00426D] mb-3">Training & Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Access to industry certifications (IATA, FIATA), workshops, and international logistics courses.
              </p>
            </div>

            {/* Benefit 3: Health & Wellness */}
            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#00426D]/8 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#00426D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#00426D] mb-3">Health & Wellness</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive medical insurance for you and your family, plus wellness programs.
              </p>
            </div>

            {/* Benefit 4: International Exposure */}
            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#00426D]/8 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#00426D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#00426D] mb-3">International Exposure</h3>
              <p className="text-gray-600 leading-relaxed">
                Work with a global network of clients, agents, and partners across 150+ countries.
              </p>
            </div>

            {/* Benefit 5: Competitive Packages */}
            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#00426D]/8 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#00426D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#00426D] mb-3">Competitive Packages</h3>
              <p className="text-gray-600 leading-relaxed">
                Market-leading salaries, annual bonuses, and performance-based incentives.
              </p>
            </div>

            {/* Benefit 6: Inclusive Culture */}
            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#00426D]/8 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#00426D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#00426D] mb-3">Inclusive Culture</h3>
              <p className="text-gray-600 leading-relaxed">
                A diverse, collaborative, and respectful work environment where everyone belongs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <p className="text-[#FF7F38] uppercase tracking-wide font-semibold mb-4 text-sm md:text-base">
              Open Positions
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00426D] mb-6 leading-tight tracking-tight">
              Current Job Openings
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We currently have 8 open positions across our Saudi Arabia offices.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button className="px-6 py-2.5 rounded-full bg-[#00426D] text-white font-semibold text-sm hover:bg-[#1f2968] transition-colors">
              All Roles
            </button>
            <button className="px-6 py-2.5 rounded-full bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-colors">
              Operations
            </button>
            <button className="px-6 py-2.5 rounded-full bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-colors">
              Sales
            </button>
            <button className="px-6 py-2.5 rounded-full bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-colors">
              Finance
            </button>
            <button className="px-6 py-2.5 rounded-full bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-colors">
              IT
            </button>
            <button className="px-6 py-2.5 rounded-full bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-colors">
              HR
            </button>
          </div>

          {/* Job Listings */}
          <div className="space-y-4 max-w-5xl mx-auto">
            {/* Job 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-[#00426D]">Operations Manager</h3>
                    <span className="px-3 py-1 bg-[#FF7F38]/10 text-[#FF7F38] text-xs font-semibold rounded-full">
                      Operations
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Dammam</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>5+ years exp.</span>
                    </div>
                  </div>
                </div>
                <Link href="#" className="bg-[#00426D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1f2968] transition-colors text-center whitespace-nowrap">
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Job 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-[#00426D]">Senior Sales Executive</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      Sales
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Riyadh / Dammam</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>3+ years exp.</span>
                    </div>
                  </div>
                </div>
                <Link href="#" className="bg-[#00426D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1f2968] transition-colors text-center whitespace-nowrap">
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Job 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-[#00426D]">Customs Clearance Specialist</h3>
                    <span className="px-3 py-1 bg-[#FF7F38]/10 text-[#FF7F38] text-xs font-semibold rounded-full">
                      Operations
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Dammam</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>2+ years exp.</span>
                    </div>
                  </div>
                </div>
                <Link href="#" className="bg-[#00426D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1f2968] transition-colors text-center whitespace-nowrap">
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Job 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-[#00426D]">Financial Analyst</h3>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      Finance
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Dammam</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>3+ years exp.</span>
                    </div>
                  </div>
                </div>
                <Link href="#" className="bg-[#00426D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1f2968] transition-colors text-center whitespace-nowrap">
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Job 5 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-[#00426D]">IT Systems Administrator</h3>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                      IT
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Dammam</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>4+ years exp.</span>
                    </div>
                  </div>
                </div>
                <Link href="#" className="bg-[#00426D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1f2968] transition-colors text-center whitespace-nowrap">
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Job 6 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-[#00426D]">HR Coordinator</h3>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-semibold rounded-full">
                      HR
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Dammam</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>2+ years exp.</span>
                    </div>
                  </div>
                </div>
                <Link href="#" className="bg-[#00426D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1f2968] transition-colors text-center whitespace-nowrap">
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Job 7 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-[#00426D]">Warehouse Supervisor</h3>
                    <span className="px-3 py-1 bg-[#FF7F38]/10 text-[#FF7F38] text-xs font-semibold rounded-full">
                      Operations
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Dammam</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>3+ years exp.</span>
                    </div>
                  </div>
                </div>
                <Link href="#" className="bg-[#00426D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1f2968] transition-colors text-center whitespace-nowrap">
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Job 8 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-[#00426D]">Junior Account Executive</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      Sales
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Riyadh</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>1+ years exp.</span>
                    </div>
                  </div>
                </div>
                <Link href="#" className="bg-[#00426D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1f2968] transition-colors text-center whitespace-nowrap">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Don't See the Right Role? CTA Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#00426D] via-[#1f2968] to-[#00426D] mb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Don't See the Right Role?
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              We're always looking for talented professionals to join our team. Send us your CV and we'll keep you in mind for future opportunities.
            </p>

            {/* CTA Button */}
            <Link href="#" className="inline-flex items-center gap-2 bg-[#FF7F38] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#d85a28] transition-colors shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              Send Your CV
            </Link>

            {/* Additional Info */}
            <p className="text-sm text-white/70 mt-6">
              Or email your resume to <a href="mailto:careers@metrolink-ksa.com" className="text-[#FF7F38] hover:underline font-semibold">careers@metrolink-ksa.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
