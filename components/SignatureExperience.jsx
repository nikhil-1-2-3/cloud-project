import React from 'react';
import { motion } from 'framer-motion';
import { Wheat, Salad, ChefHat } from 'lucide-react';
import { signatureItems } from '../data/restaurantData';

const SignatureExperience = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'pickle':
        return <Wheat size={40} />;
      case 'chutney':
        return <ChefHat size={40} />;
      case 'salad':
        return <Salad size={40} />;
      case 'condiments':
        return <Wheat size={40} />;
      default:
        return <Wheat size={40} />;
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary-dark to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl" />
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
            More Than Just a Meal
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Every meal at Shree Khodiyar comes with an array of traditional accompaniments, 
            creating a rich and satisfying dining experience that our guests love.
          </p>
        </motion.div>

        {/* Signature Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {signatureItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-background-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-secondary/10"
            >
              {/* Icon */}
              <div className="bg-secondary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/30 transition-all group-hover:scale-110 group-hover:rotate-6">
                <div className="text-secondary">
                  {getIcon(item.icon)}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold text-text-primary text-center mb-3">
                {item.title}
              </h3>
              <p className="text-text-secondary text-center leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-background-surface/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border-2 border-secondary text-center max-w-4xl mx-auto"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block bg-secondary text-background px-6 py-2 rounded-full font-bold text-lg mb-6"
          >
            20+ Complimentary Accompaniments
          </motion.div>
          <p className="text-xl text-text-primary leading-relaxed">
            Our meals are served with a generous variety of pickles, chutneys, salads, and traditional 
            condiments - all complimentary! This is what makes dining at Shree Khodiyar a truly special experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SignatureExperience;
