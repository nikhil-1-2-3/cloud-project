import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { location } from '../data/restaurantData';

const Location = () => {
  return (
    <section id="location" className="py-20 md:py-32 bg-background-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
            {location.heading}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-secondary/20 p-4 rounded-full">
                <MapPin className="text-secondary" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">Address</h3>
                <p className="text-text-secondary leading-relaxed">{location.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-secondary/20 p-4 rounded-full">
                <Phone className="text-secondary" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">Phone</h3>
                <p className="text-text-secondary leading-relaxed">{location.phone}</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-4">
              <div className="bg-secondary/20 p-4 rounded-full">
                <Clock className="text-secondary" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">Opening Hours</h3>
                <p className="text-text-secondary leading-relaxed">
                  {location.opening} - {location.closing}
                </p>
                <p className="text-text-secondary">{location.days}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href={location.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-secondary text-background px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Navigation size={20} />
                Get Directions
              </motion.a>
              
              <motion.a
                href="tel:+917359181689"
                className="flex items-center justify-center gap-2 border-2 border-text-primary text-text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-text-primary/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} />
                Call Now
              </motion.a>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-6 border border-border mt-8">
              <h4 className="text-lg font-heading font-bold text-text-primary mb-3">
                Perfect for:
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Families', 'Highway Travelers', 'Groups', 'Takeaway', 'Traditional Food Lovers'].map((item) => (
                  <span
                    key={item}
                    className="bg-background-surface px-4 py-2 rounded-full text-sm text-text-secondary border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border-2 border-border shadow-2xl">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(location.address)}&zoom=15`}
                width="100%"
                height="500"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shree Khodiyar Kathiyawadi Dhaba Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
