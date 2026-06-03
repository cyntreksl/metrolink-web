'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  return (
    <header className="bg-[#161E54] text-white">
      {/* Top bar with contact info - Hidden on mobile */}
      <div className="border-b border-white/10 hidden lg:block">
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
            <div className="bg-[#F16D34] p-1.5 md:p-2 rounded-lg">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
              </svg>
            </div>
            <div>
              <div className="text-lg md:text-xl font-bold">
                Metro<span className="text-[#F16D34]">Link</span>
              </div>
              <div className="text-[10px] md:text-xs text-gray-300 uppercase tracking-wide">Freight Forwarding</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="/" className="hover:text-[#F16D34] transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="hover:text-[#F16D34] transition-colors flex items-center gap-1">
                About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <Link href="/services" className="hover:text-[#F16D34] transition-colors">
              Services
            </Link>
            <Link href="/news" className="hover:text-[#F16D34] transition-colors">
              News
            </Link>
            <Link href="/careers" className="hover:text-[#F16D34] transition-colors">
              Careers
            </Link>
            <Link href="/contact" className="hover:text-[#F16D34] transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button - Desktop & Tablet */}
          <Link 
            href="/quote" 
            className="hidden md:block bg-[#F16D34] hover:bg-[#d85d2a] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold transition-colors text-sm lg:text-base"
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
                className="hover:text-[#F16D34] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile About Us Dropdown */}
              <div>
                <button 
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  className="hover:text-[#F16D34] transition-colors flex items-center justify-between w-full py-2"
                >
                  About Us
                  <svg 
                    className={`w-4 h-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {aboutDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link 
                      href="/about" 
                      className="block py-2 text-gray-300 hover:text-[#F16D34]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link 
                      href="/mission" 
                      className="block py-2 text-gray-300 hover:text-[#F16D34]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Mission & Vision
                    </Link>
                    <Link 
                      href="/values" 
                      className="block py-2 text-gray-300 hover:text-[#F16D34]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Core Values
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/services" 
                className="hover:text-[#F16D34] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/news" 
                className="hover:text-[#F16D34] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                News
              </Link>
              <Link 
                href="/careers" 
                className="hover:text-[#F16D34] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link 
                href="/contact" 
                className="hover:text-[#F16D34] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <Link 
                href="/quote" 
                className="bg-[#F16D34] hover:bg-[#d85d2a] text-white px-6 py-3 rounded-full font-semibold transition-colors text-center mt-4"
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
                  <a href="tel:+966138001234" className="hover:text-[#F16D34]">+966 13 800 1234</a>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@metrolink-sa.com" className="hover:text-[#F16D34]">info@metrolink-sa.com</a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
