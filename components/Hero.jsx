import React from 'react';
import { motion } from 'framer-motion';
import { Star, Utensils, Users } from 'lucide-react';
import { businessInfo } from '../data/restaurantData';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1606491956689-2ea28c674edb?w=1920&q=80"
          alt="Authentic Kathiyawadi Food"
          className="w-full h-full object-cover animate-slowZoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6"
        >
          <Star className="text-secondary fill-secondary" size={20} />
          <span className="text-text-primary font-semibold">
            {businessInfo.rating} ({businessInfo.reviewCount}+ Reviews)
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-heading font-bold text-text-primary mb-6 leading-tight"
        >
          Authentic Kathiyawadi Flavors in Palsana
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Experience traditional Gujarati hospitality with delicious home-style meals, 
          fresh parathas, and a variety of flavorful accompaniments.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="#location"
            className="bg-secondary text-background px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit Us Today
          </motion.a>
          
          <motion.a
            href="#menu"
            className="border-2 border-text-primary text-text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-text-primary/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Menu
          </motion.a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="bg-background-surface/80 backdrop-blur-sm p-4 rounded-full">
              <Star className="text-secondary" size={32} />
            </div>
            <span className="text-text-primary font-medium">4.2 ⭐ Rated</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="bg-background-surface/80 backdrop-blur-sm p-4 rounded-full">
              <Utensils className="text-accent" size={32} />
            </div>
            <span className="text-text-primary font-medium">Authentic Food</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="bg-background-surface/80 backdrop-blur-sm p-4 rounded-full">
              <Users className="text-secondary" size={32} />
            </div>
            <span className="text-text-primary font-medium">Perfect for Families</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-text-primary/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-text-primary/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
