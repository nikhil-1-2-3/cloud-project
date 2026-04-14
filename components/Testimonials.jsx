import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { businessInfo, testimonials } from '../data/restaurantData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          
          {/* Overall Rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="flex items-center gap-2">
              <Star className="text-secondary fill-secondary" size={40} />
              <span className="text-4xl font-bold text-text-primary">{businessInfo.rating}</span>
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-text-primary">out of 5</div>
              <div className="text-text-secondary">Based on {businessInfo.reviewCount}+ reviews</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-background-surface rounded-3xl p-8 md:p-12 border border-border shadow-2xl"
            >
              {/* Stars */}
              <div className="flex justify-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`${
                      i < testimonials[currentIndex].rating
                        ? 'text-secondary fill-secondary'
                        : 'text-border'
                    }`}
                    size={24}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-text-primary leading-relaxed text-center mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="text-center">
                <div className="text-lg font-semibold text-secondary">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-text-secondary">Verified Customer</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-background-surface border border-border p-3 rounded-full hover:bg-secondary hover:border-secondary transition-all group"
          >
            <ChevronLeft className="text-text-primary group-hover:text-background" size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-background-surface border border-border p-3 rounded-full hover:bg-secondary hover:border-secondary transition-all group"
          >
            <ChevronRight className="text-text-primary group-hover:text-background" size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all ${
                index === currentIndex
                  ? 'w-8 h-3 bg-secondary rounded-full'
                  : 'w-3 h-3 bg-border rounded-full hover:bg-text-secondary'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-text-secondary mb-4">Join our happy customers!</p>
          <motion.a
            href="#location"
            className="inline-block bg-primary text-text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit Us Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
