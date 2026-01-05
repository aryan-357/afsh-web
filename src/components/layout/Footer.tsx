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
              <div className="w-12 h-12 bg-af-blue rounded-full flex items-center justify-center text-white font-serif font-bold text-xl border border-af-gold shadow-lg shadow-af-blue/20">
                AF
              </div>
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
                <span>afschoolhindan@gmail.com</span>
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
            <div className="w-full h-44 bg-gray-800 rounded-xl overflow-hidden relative group cursor-pointer border border-white/5 shadow-2xl"
                 onClick={() => window.open('https://maps.app.goo.gl/VdMJGzjzMnbtK3uv7', '_blank')}
              >
                <img
                  src="https://picsum.photos/seed/map/400/300"
                  alt="Map Location"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <MapPin className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" size={40} />
                  </motion.div>
                  <div className="mt-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Open in Maps
                  </div>
                </div>
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
