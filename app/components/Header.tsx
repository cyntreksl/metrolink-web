'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-[#00426D] text-white">
      {/* Top bar with contact info - Hidden on mobile */}
      <div className="bg-[#001F35] text-[#99A1AF] border-b border-white/10 hidden lg:block">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs xl:text-sm">King Saud Street, Dammam 32222, Saudi Arabia</span>
          </div>
          <div className="flex items-center gap-4 xl:gap-6">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-xs xl:text-sm">+966 13 800 1234</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xs xl:text-sm">info@metrolink-sa.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <div className="bg-[#FF7F38] p-1.5 md:p-2 rounded-lg">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
              </svg>
            </div>
            <div>
              <div className="text-lg md:text-xl font-bold">
                Metro<span className="text-[#FF7F38]">Link</span>
              </div>
              <div className="text-[10px] md:text-xs text-gray-300 uppercase tracking-wide">Freight Forwarding</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              href="/"
              className={`transition-colors px-4 py-2 rounded-lg ${
                pathname === '/' 
                  ? 'bg-[#FF7F38]/20 text-[#FF7F38]' 
                  : 'hover:text-[#FF7F38]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors px-4 py-2 rounded-lg ${
                pathname === '/about' 
                  ? 'bg-[#FF7F38]/20 text-[#FF7F38]' 
                  : 'hover:text-[#FF7F38]'
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`transition-colors px-4 py-2 rounded-lg ${
                pathname === '/services' 
                  ? 'bg-[#FF7F38]/20 text-[#FF7F38]' 
                  : 'hover:text-[#FF7F38]'
              }`}
            >
              Services
            </Link>
            <Link
              href="/news"
              className={`transition-colors px-4 py-2 rounded-lg ${
                pathname === '/news' 
                  ? 'bg-[#FF7F38]/20 text-[#FF7F38]' 
                  : 'hover:text-[#FF7F38]'
              }`}
            >
              News
            </Link>
            <Link
              href="/careers"
              className={`transition-colors px-4 py-2 rounded-lg ${
                pathname === '/careers' 
                  ? 'bg-[#FF7F38]/20 text-[#FF7F38]' 
                  : 'hover:text-[#FF7F38]'
              }`}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className={`transition-colors px-4 py-2 rounded-lg ${
                pathname === '/contact' 
                  ? 'bg-[#FF7F38]/20 text-[#FF7F38]' 
                  : 'hover:text-[#FF7F38]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button - Desktop & Tablet */}
          <Link
            href="/quote"
            className="hidden md:block bg-[#FF7F38] hover:bg-[#d85d2a] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold transition-colors text-sm lg:text-base"
          >
            Get a Quote
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`transition-colors py-2 px-3 rounded-lg ${
                  pathname === '/' 
                    ? 'bg-[#F16D34]/20 text-[#F16D34] font-semibold' 
                    : 'hover:text-[#F16D34]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`transition-colors py-2 px-3 rounded-lg ${
                  pathname === '/about' 
                    ? 'bg-[#F16D34]/20 text-[#F16D34] font-semibold' 
                    : 'hover:text-[#F16D34]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>

              <Link
                href="/services"
                className={`transition-colors py-2 px-3 rounded-lg ${
                  pathname === '/services' 
                    ? 'bg-[#F16D34]/20 text-[#F16D34] font-semibold' 
                    : 'hover:text-[#F16D34]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/news"
                className={`transition-colors py-2 px-3 rounded-lg ${
                  pathname === '/news' 
                    ? 'bg-[#F16D34]/20 text-[#F16D34] font-semibold' 
                    : 'hover:text-[#F16D34]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                News
              </Link>
              <Link
                href="/careers"
                className={`transition-colors py-2 px-3 rounded-lg ${
                  pathname === '/careers' 
                    ? 'bg-[#F16D34]/20 text-[#F16D34] font-semibold' 
                    : 'hover:text-[#F16D34]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className={`transition-colors py-2 px-3 rounded-lg ${
                  pathname === '/contact' 
                    ? 'bg-[#F16D34]/20 text-[#F16D34] font-semibold' 
                    : 'hover:text-[#F16D34]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <Link
                href="/quote"
                className="bg-[#FF7F38] hover:bg-[#d85d2a] text-white px-6 py-3 rounded-full font-semibold transition-colors text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>

              {/* Mobile Contact Info */}
              <div className="border-t border-white/10 pt-4 mt-4 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+966138001234" className="hover:text-[#FF7F38]">+966 13 800 1234</a>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@metrolink-sa.com" className="hover:text-[#FF7F38]">info@metrolink-sa.com</a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
