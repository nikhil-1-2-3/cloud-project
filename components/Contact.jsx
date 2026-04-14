import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitMessage('Thank you! We will get back to you soon.');
    setFormData({ name: '', phone: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-80 h-80 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Have a question or want to make a reservation? We'd love to hear from you!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background-surface rounded-3xl p-8 md:p-12 border border-border shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-text-primary font-medium mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-background border border-border rounded-xl text-text-primary focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                placeholder="Enter your name"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-text-primary font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-background border border-border rounded-xl text-text-primary focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-text-primary font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-6 py-4 bg-background border border-border rounded-xl text-text-primary focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
                placeholder="Your message or inquiry..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-secondary text-background px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              <Send size={20} />
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </motion.button>

            {/* Success Message */}
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/20 border border-green-500/50 text-green-400 px-6 py-4 rounded-xl text-center"
              >
                {submitMessage}
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {[            { icon: Phone, label: 'Call Us', value: '+91 73591 81689' },
            { icon: Mail, label: 'Email Us', value: 'info@khodiyardhaba.com' },
            { icon: MapPin, label: 'Visit Us', value: 'Palsana, Gujarat' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background-surface/50 backdrop-blur-sm rounded-xl p-6 border border-border text-center hover:border-secondary/50 transition-all"
            >
              <item.icon className="text-secondary mx-auto mb-3" size={28} />
              <div className="text-text-secondary text-sm mb-1">{item.label}</div>
              <div className="text-text-primary font-semibold">{item.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
