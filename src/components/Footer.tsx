import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-af-blue rounded-full flex items-center justify-center text-white font-serif font-bold text-lg border border-af-gold">
                AF
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Air Force School</h3>
                <p className="text-xs text-gray-400">HINDAN, GHAZIABAD</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Registered with the Indian Air Force Educational & Cultural Society. We are committed to nurturing excellence in education and character building.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-af-blue transition-all duration-500 ease-out transform hover:scale-110 hover:-translate-y-1"><Facebook size={16} /></a>
              <a href="#" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-af-blue transition-all duration-500 ease-out transform hover:scale-110 hover:-translate-y-1"><Twitter size={16} /></a>
              <a href="#" className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center hover:bg-af-blue transition-all duration-500 ease-out transform hover:scale-110 hover:-translate-y-1"><Instagram size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 border-l-4 border-af-gold pl-3">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white flex items-center gap-2 transition-all duration-400 ease-out group hover:translate-x-1"><ArrowRight size={14} className="transition-transform duration-400 group-hover:translate-x-1" /> About Us</Link></li>
              <li><Link to="/about#admin" className="hover:text-white flex items-center gap-2 transition-all duration-400 ease-out group hover:translate-x-1"><ArrowRight size={14} className="transition-transform duration-400 group-hover:translate-x-1" /> Administration</Link></li>
              <li><Link to="/admissions" className="hover:text-white flex items-center gap-2 transition-all duration-400 ease-out group hover:translate-x-1"><ArrowRight size={14} className="transition-transform duration-400 group-hover:translate-x-1" /> Admission Procedure</Link></li>
              <li><Link to="/admissions" className="hover:text-white flex items-center gap-2 transition-all duration-400 ease-out group hover:translate-x-1"><ArrowRight size={14} className="transition-transform duration-400 group-hover:translate-x-1" /> Fee Structure</Link></li>
              <li><Link to="/admissions" className="hover:text-white flex items-center gap-2 transition-all duration-400 ease-out group hover:translate-x-1"><ArrowRight size={14} className="transition-transform duration-400 group-hover:translate-x-1" /> Transfer Certificate</Link></li>
              <li><Link to="/calendar" className="hover:text-white flex items-center gap-2 transition-all duration-400 ease-out group hover:translate-x-1"><ArrowRight size={14} className="transition-transform duration-400 group-hover:translate-x-1" /> Academic Calendar</Link></li>
              <li><Link to="/alumni" className="hover:text-white flex items-center gap-2 transition-all duration-400 ease-out group hover:translate-x-1"><ArrowRight size={14} className="transition-transform duration-400 group-hover:translate-x-1" /> Alumni Network</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 border-l-4 border-af-gold pl-3">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-af-gold shrink-0 mt-1" size={18} />
                <span>Air Force Station, Hindan,<br />Ghaziabad, Uttar Pradesh - 201004</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-af-gold shrink-0" size={18} />
                <span>0120-1234567, 8901234567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-af-gold shrink-0" size={18} />
                <span>afschoolhindan@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 border-l-4 border-af-gold pl-3">Locate Us</h3>
            <div className="w-full h-40 bg-gray-800 rounded overflow-hidden relative group cursor-pointer">
              <img
                src="https://picsum.photos/seed/map/300/200"
                alt="Map Location"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="text-red-500 drop-shadow-lg" size={32} />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Air Force School Hindan. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/about" className="hover:text-white">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white">Terms of Use</Link>
            <Link to="/" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
