import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Phone, Clock } from 'lucide-react';
import { takeaway } from '../data/restaurantData';

const Takeaway = () => {
  return (
    <section id="takeaway" className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary-dark to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
                {takeaway.heading}
              </h2>
              <div className="w-24 h-1 bg-secondary mb-6" />
            </div>

            <p className="text-xl text-text-secondary leading-relaxed">
              {takeaway.description}
            </p>

            {/* Features */}
            <div className="space-y-4">
              {[
                { icon: ShoppingBag, text: 'Quick & Easy Ordering' },
                { icon: Clock, text: 'Ready in 20-30 Minutes' },
                { icon: Phone, text: 'Call Ahead for Faster Service' },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="bg-secondary/20 p-3 rounded-full">
                    <item.icon className="text-secondary" size={24} />
                  </div>
                  <span className="text-lg text-text-primary font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href="tel:+917359181689"
                className="flex items-center justify-center gap-2 bg-secondary text-background px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} />
                Call to Order
              </motion.a>
              
              <motion.a
                href="#location"
                className="flex items-center justify-center gap-2 border-2 border-text-primary text-text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-text-primary/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Restaurant
              </motion.a>
            </div>

            {/* Info Box */}
            <div className="bg-background-surface/50 backdrop-blur-sm rounded-xl p-6 border border-border mt-8">
              <p className="text-text-primary leading-relaxed">
                <strong className="text-secondary">Tip:</strong> Call us during peak hours (12-2 PM, 7-9 PM) 
                to place your order in advance and skip the wait!
              </p>
            </div>
          </motion.div>

          {/* Image/Illustration Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                alt="Takeaway packaging"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              {/* Overlay Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
                className="absolute top-6 right-6 bg-secondary text-background px-6 py-3 rounded-full font-bold shadow-lg"
              >
                Fresh & Hot!
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Takeaway;
