import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                alt="Dhaba Interior"
                className="w-full h-[500px] object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
                A Taste of Traditional Dhaba Hospitality
              </h2>
              <div className="w-24 h-1 bg-secondary mb-6" />
            </div>

            <p className="text-lg text-text-secondary leading-relaxed">
              Shree Khodiyar Kathiyawadi Dhaba brings the authentic flavors of Gujarat to your plate. 
              Known for its delicious home-style dishes and warm hospitality, the restaurant offers a 
              traditional dining experience where every meal is served with flavorful accompaniments 
              like pickles, salads, and chutneys.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed">
              Guests love the friendly atmosphere, generous servings, and authentic taste that make 
              every visit memorable. Whether you're craving traditional Kathiyawadi specialties or 
              comforting Gujarati classics, you'll find it all here.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mt-8">
              {[
                'Authentic Kathiyawadi & Gujarati Cuisine',
                'Fresh Homemade Style Cooking',
                'Traditional Ambiance',
                'Generous Portions with Complimentary Sides'
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-text-primary"
                >
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.a
              href="#menu"
              className="inline-block bg-primary text-text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Menu
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
