import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils } from 'lucide-react';
import { menuCategories } from '../data/restaurantData';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  return (
    <section id="menu" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
            View the menu
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore our wide range of authentic Kathiyawadi dishes
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-secondary text-background shadow-lg'
                  : 'bg-background-surface text-text-secondary hover:text-text-primary border border-border'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {menuCategories
              .find((cat) => cat.id === activeCategory)
              ?.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-background-surface rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Food Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-secondary text-background px-4 py-1.5 rounded-full font-bold text-sm">
                      {item.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-heading font-bold text-text-primary mb-3">
                      {item.name}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    {/* Order Button */}
                    <motion.button
                      className="w-full bg-primary/20 border border-primary text-text-primary py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Utensils size={18} />
                      Order Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>

        {/* Takeaway CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#takeaway"
            className="inline-block bg-secondary text-background px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order for Takeaway
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
