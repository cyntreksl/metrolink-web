import Link from 'next/link';

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center bg-gradient-to-br from-[#0A4F7E] via-[#0d5a8f] to-[#0A4F7E]">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A4F7E]/80 z-10" />
          {/* Placeholder for background image - containers/port */}
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
              <span className="text-white">Contact</span>
            </nav>

            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="bg-[#F16D34]/20 border border-[#F16D34]/50 text-[#F16D34] px-4 py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wide">
                Contact Us
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Get in Touch with MetroLink
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Request a freight quote, track a shipment, or speak directly with our logistics experts. Our Dammam team responds within 2 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Call Us */}
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#E8F3F8] rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-[#3B9FC7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#161E54] mb-2">Call Us</h3>
              <p className="text-xl font-bold text-[#3B9FC7] mb-2">+966 13 800 1234</p>
              <p className="text-sm text-gray-500">Available Sun-Thu, 8AM-6PM</p>
            </div>

            {/* Email Us */}
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#E8F3F8] rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-[#3B9FC7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#161E54] mb-2">Email Us</h3>
              <p className="text-xl font-bold text-[#3B9FC7] mb-2">info@metrolink-sa.com</p>
              <p className="text-sm text-gray-500">We respond within 24 hrs</p>
            </div>

            {/* 24/7 Operations */}
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#E8F3F8] rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-[#3B9FC7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#161E54] mb-2">24/7 Operations</h3>
              <p className="text-xl font-bold text-[#3B9FC7] mb-2">+966 13 800 9999</p>
              <p className="text-sm text-gray-500">For urgent cargo enquiries</p>
            </div>

            {/* Our Website */}
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#E8F3F8] rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-[#3B9FC7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#161E54] mb-2">Our Website</h3>
              <p className="text-xl font-bold text-[#3B9FC7] mb-2">www.metrolink-sa.com</p>
              <p className="text-sm text-gray-500">Track shipments online</p>
            </div>
          </div>
        </div>
      </section>

      {/* Request a Quote / Inquiry Form Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Sidebar */}
            <div className="space-y-6">
              {/* Headquarters Card */}
              <div className="bg-gradient-to-br from-[#0A4F7E] to-[#0d5a8f] rounded-2xl p-8 text-white">
                <div className="flex items-center gap-2 mb-6">
                  <svg className="w-5 h-5 text-[#F16D34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <h3 className="text-lg font-bold">Headquarters</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-sm leading-relaxed">
                      King Saud Street, Al Faisaliyah District, Dammam 32222, Eastern Province, Saudi Arabia
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-sm">+966 13 800 1234</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">info@metrolink-sa.com</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-sm">
                      <p className="font-semibold">Sun-Thu: 8:00 AM – 6:00 PM</p>
                      <p className="text-white/70">Fri-Sat: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dammam Office Card */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-[#F16D34] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#161E54] mb-2">Dammam, KSA</h3>
                <p className="text-sm text-gray-600">Eastern Province</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">Near King Abdul Aziz Port, Dammam</p>
                </div>
              </div>

              {/* Fast Response Promise */}
              <div className="bg-orange-50 border border-[#F16D34]/30 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#F16D34] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-[#F16D34] mb-2">Fast Response Promise</h4>
                    <p className="text-sm text-gray-700">
                      Our team guarantees a response to all freight quote requests within <strong>2 business hours</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Area */}
            <div className="lg:col-span-2">
              <div className="bg-white">
                {/* Form Header */}
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#161E54] mb-4">
                    Request a Quote or Inquiry
                  </h2>
                  <p className="text-gray-600">
                    Fill in the form below and our team will get back to you shortly.
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-6">
                  {/* Row 1: Full Name & Company Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#161E54] mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Ahmed Al-Rashidi"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B9FC7] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#161E54] mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Company LLC"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B9FC7] focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#161E54] mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="ahmed@company.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B9FC7] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#161E54] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+966 5X XXX XXXX"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B9FC7] focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Row 3: Inquiry Type */}
                  <div>
                    <label className="block text-sm font-semibold text-[#161E54] mb-2">
                      Inquiry Type <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B9FC7] focus:border-transparent text-gray-700">
                      <option value="">Select inquiry type...</option>
                      <option value="quote">Freight Quote Request</option>
                      <option value="tracking">Shipment Tracking</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="complaint">Complaint or Feedback</option>
                    </select>
                  </div>

                  {/* Row 4: Origin, Destination, Cargo Type */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#161E54] mb-2">
                        Origin
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dammam, KSA"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B9FC7] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#161E54] mb-2">
                        Destination
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rotterdam, NL"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B9FC7] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#161E54] mb-2">
                        Cargo Type
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Steel pipes"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B9FC7] focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Row 5: Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#161E54] mb-2">
                      Message / Additional Details
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Please describe your cargo weight, dimensions, special requirements, or any questions..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B9FC7] focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-[#F16D34] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#d85a28] transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Submit Inquiry
                    </button>
                    <p className="text-center text-sm text-gray-500 mt-3">
                      Our team will respond within 2 business hours.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offices Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <p className="text-[#F16D34] uppercase tracking-wide font-semibold mb-4 text-sm md:text-base">
              Our Offices
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#161E54] mb-6 leading-tight">
              Three Locations Across Saudi Arabia
            </h2>
          </div>

          {/* Offices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Dammam HQ */}
            <div className="bg-gradient-to-br from-[#0A4F7E] to-[#0d5a8f] rounded-2xl p-8 text-white relative overflow-hidden">
              {/* HQ Badge */}
              <div className="absolute top-6 right-6">
                <span className="bg-[#F16D34] text-white px-3 py-1 rounded-full text-xs font-bold">
                  HQ
                </span>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <svg className="w-6 h-6 text-[#F16D34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="text-2xl font-bold">Dammam (HQ)</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm leading-relaxed">
                    King Saud Street, Al Faisaliyah District, Dammam 32222
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-sm">+966 13 800 1234</p>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">dammam@metrolink-sa.com</p>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm">Sun-Thu: 8:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Riyadh Office */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-6 h-6 text-[#F16D34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="text-2xl font-bold text-[#161E54]">Riyadh</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm leading-relaxed text-gray-700">
                    King Fahd Road, Al Olaya District, Riyadh 11372
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-sm text-gray-700">+966 11 900 5678</p>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-gray-700">riyadh@metrolink-sa.com</p>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-gray-700">Sun-Thu: 8:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Jeddah Office */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-6 h-6 text-[#F16D34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="text-2xl font-bold text-[#161E54]">Jeddah</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Corniche Road, Al Hamra District, Jeddah 21432
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-sm text-gray-700">+966 12 700 9012</p>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-gray-700">jeddah@metrolink-sa.com</p>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#F16D34] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-gray-700">Sun-Thu: 8:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <p className="text-[#F16D34] uppercase tracking-wide font-semibold mb-4 text-sm md:text-base">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#161E54] mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* FAQ 1 */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-[#0A4F7E] mb-4">
                How quickly can I get a freight quote?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our team provides initial freight quotes within 2 business hours for standard shipments. Complex project cargo quotes may take up to 24 hours.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-[#0A4F7E] mb-4">
                Do you offer cargo insurance?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. MetroLink offers comprehensive all-risk cargo insurance for all shipment modes. We work with leading underwriters to provide competitive coverage.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-[#0A4F7E] mb-4">
                Can you handle customs clearance for my imports?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutely. Our Saudi Customs Authority licensed team handles all import and export clearance at all Saudi ports of entry, including Dammam, Jeddah, and Riyadh.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-[#0A4F7E] mb-4">
                What industries do you serve?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We serve oil & gas, petrochemicals, manufacturing, retail, healthcare, construction, and government sectors across Saudi Arabia and the GCC.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-[#0A4F7E] mb-4">
                Do you provide warehousing services?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. We operate modern warehousing facilities in Dammam with climate control, 24/7 security, and advanced inventory management systems.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-[#0A4F7E] mb-4">
                How can I track my shipment?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Track your cargo in real-time through our online portal at www.metrolink-sa.com/tracking or contact your dedicated account manager for status updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
