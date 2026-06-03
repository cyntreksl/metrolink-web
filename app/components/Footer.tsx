import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Newsletter section */}
      <div className="bg-[#0A4F7E] py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Stay Updated with MetroLink</h3>
              <p className="text-sm md:text-base text-gray-200">Subscribe for logistics insights, industry news, and company updates.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 md:px-6 py-3 rounded-full w-full sm:w-64 md:w-80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF7F38] text-sm md:text-base"
              />
              <button className="bg-[#FF7F38] hover:bg-[#d85d2a] px-6 md:px-8 py-3 rounded-full font-semibold transition-colors whitespace-nowrap text-sm md:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <Link href="/" className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <div className="bg-[#FF7F38] p-2 rounded-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold">
                  Metro<span className="text-[#FF7F38]">Link</span>
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Freight Forwarding</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
              Saudi Arabia's premier freight forwarding company, connecting businesses from Dammam to the world since 2004.
            </p>
            
            {/* Social media icons */}
            <div className="flex gap-3 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#FF7F38] rounded flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#FF7F38] rounded flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#FF7F38] rounded flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#FF7F38] rounded flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-.002-.056c0-.688.561-1.25 1.25-1.25zm-5.01 1.13c2.857 0 5.176 2.319 5.176 5.176 0 2.857-2.319 5.176-5.176 5.176-2.857 0-5.176-2.319-5.176-5.176 0-2.857 2.319-5.176 5.176-5.176zm0 1.56A3.616 3.616 0 0 0 8.384 11.05a3.616 3.616 0 0 0 3.616 3.616 3.616 3.616 0 0 0 3.616-3.616 3.616 3.616 0 0 0-3.616-3.616z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#FF7F38] rounded flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-8 text-xs text-gray-500 justify-center md:justify-start">
              <span className="border border-gray-700 px-3 py-1 rounded">IATA</span>
              <span className="border border-gray-700 px-3 py-1 rounded">FIATA</span>
              <span className="border border-gray-700 px-3 py-1 rounded">ISO 9001</span>
              <span className="border border-gray-700 px-3 py-1 rounded">WCA</span>
            </div>
          </div>

          {/* Company Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#FF7F38] transition-colors text-sm md:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#FF7F38] transition-colors text-sm md:text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-[#FF7F38] transition-colors text-sm md:text-base">
                  News & Insights
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-[#FF7F38] transition-colors text-sm md:text-base">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#FF7F38] transition-colors text-sm md:text-base">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#FF7F38] transition-colors text-sm md:text-base">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/services#sea-freight" className="text-gray-400 hover:text-[#FF7F38] transition-colors text-sm md:text-base">
                  Sea Freight
                </Link>
              </li>
              <li>
                <Link href="/services#air-freight" className="text-gray-400 hover:text-[#FF7F38] transition-colors text-sm md:text-base">
                  Air Freight
                </Link>
              </li>
              <li>
                <Link href="/services#land-transport" className="text-gray-400 hover:text-[#FF7F38] transition-colors text-sm md:text-base">
                  Land Transport
                </Link>
              </li>
              <li>
                <Link href="/services#customs-clearance" className="text-gray-400 hover:text-[#FF7F38] transition-colors text-sm md:text-base">
                  Customs Clearance
                </Link>
              </li>
              <li>
                <Link href="/services#warehousing" className="text-gray-400 hover:text-[#FF7F38] transition-colors text-sm md:text-base">
                  Warehousing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 justify-center md:justify-start">
                <svg className="w-5 h-5 text-[#FF7F38] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    King Saud Street,<br />
                    Dammam 32222, Eastern<br />
                    Province, Saudi Arabia
                  </p>
                </div>
              </li>
              <li className="flex gap-3 justify-center md:justify-start">
                <svg className="w-5 h-5 text-[#FF7F38] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+966138001234" className="text-gray-400 hover:text-[#FF7F38] transition-colors text-sm md:text-base">
                  +966 13 800 1234
                </a>
              </li>
              <li className="flex gap-3 justify-center md:justify-start">
                <svg className="w-5 h-5 text-[#FF7F38] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@metrolink-sa.com" className="text-gray-400 hover:text-[#FF7F38] transition-colors text-sm md:text-base">
                  info@metrolink-sa.com
                </a>
              </li>
              <li className="flex gap-3 justify-center md:justify-start">
                <svg className="w-5 h-5 text-[#FF7F38] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-400 text-sm md:text-base">Sun–Thu: 8:00 AM – 6:00 PM</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500">
            <p className="text-center md:text-left">© 2026 MetroLink Freight Forwarding Co. All rights reserved. Registered in Saudi Arabia.</p>
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
              <Link href="/privacy" className="hover:text-[#FF7F38] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#FF7F38] transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-[#FF7F38] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
