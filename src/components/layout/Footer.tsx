import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 bg-gray-900 text-white pt-16 pb-8 border-t border-white/5 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-af-blue/10 blur-[100px] rounded-full -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-af-gold/5 blur-[100px] rounded-full -ml-48 -mb-48 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://ecolearn.pages.dev/img/logo.png"
                alt="Air Force School Hindan Logo"
                className="w-12 h-12 rounded-full object-cover border border-af-gold shadow-lg shadow-af-blue/20"
              />
              <div>
                <h3 className="font-serif font-bold text-xl tracking-tight">Air Force School</h3>
                <p className="text-[10px] text-af-gold font-bold tracking-[0.2em] uppercase">HINDAN, GHAZIABAD</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Registered with the Indian Air Force Educational & Cultural Society. We are dedicated to delivering world-class education and fostering holistic development.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Instagram, href: "https://instagram.com" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-white/5 flex items-center justify-center hover:bg-af-blue transition-colors duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-serif font-bold mb-8 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-af-gold rounded-full -mb-2"></span>
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Administration', href: '/about#admin' },
                { label: 'Admission Procedure', href: '/admissions#procedure' },
                { label: 'Fee Structure', href: '/admissions#fees' },
                { label: 'Academic Calendar', href: '/calendar' },
                { label: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="hover:text-af-light flex items-center gap-2 group transition-colors">
                    <ArrowRight size={14} className="text-af-gold group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-serif font-bold mb-8 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-af-gold rounded-full -mb-2"></span>
            </h3>
            <ul className="space-y-5 text-sm text-gray-400">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center shrink-0 group-hover:bg-af-blue/20 transition-colors">
                  <MapPin className="text-af-gold" size={20} />
                </div>
                <span className="pt-1">Air Force Station, Hindan,<br />Ghaziabad, UP - 201004</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center shrink-0 group-hover:bg-af-blue/20 transition-colors">
                  <Phone className="text-af-gold" size={20} />
                </div>
                <span>0120-1234567, 8901234567</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center shrink-0 group-hover:bg-af-blue/20 transition-colors">
                  <Mail className="text-af-gold" size={20} />
                </div>
                <span>afshindanprincipal@yahoo.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-serif font-bold mb-8 relative inline-block">
              Locate Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-af-gold rounded-full -mb-2"></span>
            </h3>
            <div className="w-full h-44 bg-gray-800 rounded-xl overflow-hidden relative border border-white/5 shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938.7987719576166!2d77.36024223268029!3d28.690015897767417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfa6fc1bcdbb9%3A0xb4b01efe95986d51!2sAir%20Force%20School%20Hindan!5e1!3m2!1sen!2sin!4v1767772543919!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-6">
          <p className="font-medium">&copy; {new Date().getFullYear()} Air Force School Hindan. <span className="text-af-gold">Excellence in Education.</span></p>
          <div className="flex space-x-8">
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((text, i) => (
              <Link key={i} to="/contact" className="hover:text-af-light transition-colors relative group">
                {text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-af-gold transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
