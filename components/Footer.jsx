import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { businessInfo } from '../data/restaurantData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0C0A] pt-16 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
              Shree Khodiyar
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Authentic Gujarati flavors served with warmth and tradition. 
              Experience the taste of Kathiyawadi culture.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="bg-background-surface p-3 rounded-full border border-border hover:border-secondary transition-all group"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Icon className="text-text-secondary group-hover:text-secondary" size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-heading font-bold text-text-primary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Menu', 'Reviews', 'Location', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-text-secondary hover:text-secondary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-heading font-bold text-text-primary mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-text-secondary">{businessInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary flex-shrink-0" size={20} />
                <span className="text-text-secondary">+91 73591 81689</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-secondary flex-shrink-0" size={20} />
                <span className="text-text-secondary">info@khodiyardhaba.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-heading font-bold text-text-primary mb-4">
              Opening Hours
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock className="text-secondary" size={20} />
                <span className="text-text-secondary">10:00 AM - 10:00 PM</span>
              </li>
              <li className="text-text-secondary">
                Open 7 days a week
              </li>
            </ul>
            
            {/* Price Range */}
            <div className="mt-6 bg-background-surface rounded-xl p-4 border border-border">
              <div className="text-sm text-text-secondary mb-2">Price Range</div>
              <div className="text-lg font-semibold text-text-primary">
                {businessInfo.priceRange}
              </div>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3].map((star) => (
                  <span key={star} className="text-secondary">₹</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-secondary text-sm text-center md:text-left">
              © {currentYear} Shree Khodiyar Kathiyawadi Dhaba. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-text-secondary hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-text-secondary hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
