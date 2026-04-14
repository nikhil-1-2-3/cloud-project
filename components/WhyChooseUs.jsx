import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Wheat, Smile, IndianRupee, Users, Utensils } from 'lucide-react';
import { features } from '../data/restaurantData';

const WhyChooseUs = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'chef-hat':
        return <ChefHat size={40} />;
      case 'wheat':
        return <Wheat size={40} />;
      case 'smile':
        return <Smile size={40} />;
      case 'indian-rupee':
        return <IndianRupee size={40} />;
      case 'users':
        return <Users size={40} />;
      case 'utensils':
        return <Utensils size={40} />;
      default:
        return <Utensils size={40} />;
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-secondary rounded-full blur-3xl" />
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
            Why Choose Shree Khodiyar?
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We're committed to serving authentic flavors with warmth and hospitality
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-background rounded-2xl p-8 border border-border hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-secondary/10"
            >
              {/* Icon */}
              <motion.div
                className="bg-secondary/20 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-all"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <div className="text-secondary">
                  {getIcon(feature.icon)}
                </div>
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8 md:p-12 border border-border text-center"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-4">
            Experience the Difference
          </h3>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            At Shree Khodiyar Kathiyawadi Dhaba, we don't just serve food - we serve an experience. 
            Every dish is prepared with care, every guest is treated like family, and every meal 
            celebrates the rich culinary heritage of Gujarat.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
