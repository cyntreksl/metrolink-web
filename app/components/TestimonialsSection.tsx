'use client';

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Al-Rashidi',
    position: 'Supply Chain Manager',
    company: 'SABIC',
    avatar: 'A',
    avatarColor: 'bg-[#0A4F7E]',
    rating: 5,
    quote: 'MetroLink has been our trusted logistics partner for over 8 years. Their expertise in customs clearance and sea freight from Dammam port is unmatched in the region.',
  },
  {
    id: 2,
    name: 'Fatima Al-Qahtani',
    position: 'Operations Director',
    company: 'Al-Jabr Trading',
    avatar: 'F',
    avatarColor: 'bg-[#0A4F7E]',
    rating: 5,
    quote: 'The team at MetroLink consistently delivers on time and keeps us updated at every step. Their professionalism and regional network is truly impressive.',
  },
  {
    id: 3,
    name: 'Michael Thompson',
    position: 'Logistics Head',
    company: 'Aramco Services',
    avatar: 'M',
    avatarColor: 'bg-[#0A4F7E]',
    rating: 5,
    quote: 'We rely on MetroLink for all our project cargo needs. Their handling of oversized industrial equipment to and from the Eastern Province is exceptional.',
  },
  {
    id: 4,
    name: 'Sarah Al-Dosari',
    position: 'Import Manager',
    company: 'Nesma Holdings',
    avatar: 'S',
    avatarColor: 'bg-[#0A4F7E]',
    rating: 5,
    quote: 'Their 24/7 support and real-time tracking system gives us complete peace of mind. MetroLink has streamlined our entire supply chain operation.',
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-[#FF7F38]' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get visible testimonials (3 at a time on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#FF7F38] uppercase tracking-wide font-semibold mb-4 text-sm md:text-base">
            Client Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00426D] tracking-tight">
            Trusted by Industry Leaders
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Desktop View - 3 columns */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 px-3">
            {getVisibleTestimonials().map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Tablet View - 2 columns */}
          <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6 px-3">
            {getVisibleTestimonials().slice(0, 2).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Mobile View - 1 column */}
          <div className="md:hidden px-10">
            <TestimonialCard testimonial={testimonials[currentSlide]} />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white hover:bg-gray-100 rounded-full shadow-lg flex items-center justify-center transition-all z-10 group"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-[#00426D] group-hover:text-[#FF7F38] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white hover:bg-gray-100 rounded-full shadow-lg flex items-center justify-center transition-all z-10 group"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-[#00426D] group-hover:text-[#FF7F38] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentSlide ? 'bg-[#FF7F38] w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Rating Stars */}
      <div className="mb-6">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Quote */}
      <blockquote className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg italic">
        "{testimonial.quote}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
        {/* Avatar */}
        <div className={`w-12 h-12 md:w-14 md:h-14 ${testimonial.avatarColor} rounded-full flex items-center justify-center flex-shrink-0`}>
          <span className="text-white font-bold text-xl">{testimonial.avatar}</span>
        </div>

        {/* Name and Position */}
        <div>
          <div className="font-bold text-[#00426D] text-base md:text-lg">
            {testimonial.name}
          </div>
          <div className="text-sm md:text-base text-gray-500">
            {testimonial.position}, {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}
