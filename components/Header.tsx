import React, { useState, useEffect } from 'react';
import { Menu, X, Search, User, Calendar, GraduationCap, MapPin } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { 
    label: 'About', 
    href: '#about',
    subItems: [
      { label: 'Principal\'s Message', href: '#' },
      { label: 'School History', href: '#' },
      { label: 'Vision & Mission', href: '#' },
      { label: 'Administration', href: '#' }
    ]
  },
  { 
    label: 'Academics', 
    href: '#academics',
    subItems: [
      { label: 'Curriculum', href: '#' },
      { label: 'Departments', href: '#' },
      { label: 'Academic Calendar', href: '#' },
      { label: 'Library', href: '#' }
    ]
  },
  { 
    label: 'Admissions', 
    href: '#admission',
    subItems: [
      { label: 'Admission Procedure', href: '#' },
      { label: 'Fee Structure', href: '#' },
      { label: 'Transfer Certificates', href: '#' },
      { label: 'FAQs', href: '#' }
    ]
  },
  { 
    label: 'Student Life', 
    href: '#student-life',
    subItems: [
      { label: 'Houses', href: '#' },
      { label: 'Clubs & Societies', href: '#' },
      { label: 'Sports', href: '#' },
      { label: 'NCC', href: '#' }
    ]
  },
  { 
    label: 'News', 
    href: '#news' 
  },
  { 
    label: 'Contact', 
    href: '#contact' 
  },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Dynamic styling based on scroll state
  const headerClasses = scrolled
    ? 'bg-white/95 backdrop-blur-md shadow-lg py-0'
    : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4';

  const textClasses = scrolled ? 'text-gray-800' : 'text-white';
  const utilityTextClasses = scrolled ? 'text-gray-600' : 'text-gray-200';
  const logoMainClasses = scrolled ? 'text-gray-900' : 'text-white';
  const logoSubClasses = scrolled ? 'text-af-blue' : 'text-af-gold';
  const navHoverClasses = scrolled ? 'hover:text-af-blue' : 'hover:text-af-gold';
  const searchIconColor = scrolled ? 'text-gray-500 hover:text-af-blue' : 'text-white/80 hover:text-white';

  return (
    <header className={`w-full z-50 fixed top-0 left-0 transition-all duration-500 ease-in-out font-sans ${headerClasses}`}>
      
      {/* Utility Bar */}
      <div className={`text-[11px] uppercase tracking-widest font-semibold transition-all duration-300 ${scrolled ? 'py-1 border-b border-gray-100' : 'py-0'}`}>
        <div className="container mx-auto px-6 flex justify-end items-center space-x-6">
          <a href="#" className={`hidden md:block transition-colors ${utilityTextClasses} hover:text-af-light`}>Calendar</a>
          <a href="#" className={`hidden md:block transition-colors ${utilityTextClasses} hover:text-af-light`}>Directory</a>
          <a href="#" className={`hidden md:block transition-colors ${utilityTextClasses} hover:text-af-light`}>Parents</a>
          <a href="#" className={`hidden md:block transition-colors ${utilityTextClasses} hover:text-af-light`}>Alumni</a>
          <a href="#" className={`flex items-center gap-1 px-3 py-1 rounded transition-colors ml-4 border ${scrolled ? 'bg-af-blue text-white border-af-blue hover:bg-blue-700' : 'bg-transparent text-white border-white hover:bg-white/20'}`}>
            <User size={12} /> Login
          </a>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="relative">
        <div className={`container mx-auto px-6 transition-all duration-300 flex justify-between items-center ${scrolled ? 'h-20' : 'h-24'}`}>
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-xl border-2 shadow-sm group-hover:scale-105 transition-transform duration-300 ${scrolled ? 'bg-af-blue text-white border-af-gold' : 'bg-white/10 backdrop-blur-md text-white border-white'}`}>
              AF
            </div>
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-serif font-bold leading-tight tracking-tight uppercase transition-colors duration-300 ${logoMainClasses}`}>
                Air Force School
              </span>
              <span className={`text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${logoSubClasses}`}>
                Hindan, Ghaziabad
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center h-full">
            <ul className="flex h-full items-center">
              {navItems.map((item) => (
                <li 
                  key={item.label} 
                  className="group relative h-full flex items-center"
                  onMouseEnter={() => setActiveSubMenu(item.label)}
                  onMouseLeave={() => setActiveSubMenu(null)}
                >
                  <a 
                    href={item.href}
                    className={`px-5 py-2 text-sm font-bold uppercase tracking-wider transition-colors relative z-10 ${textClasses} ${navHoverClasses}`}
                  >
                    {item.label}
                  </a>
                  
                  {/* Dropdown Menu */}
                  {item.subItems && (
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                       <div className="w-64 bg-white shadow-xl border-t-4 border-af-blue rounded-b-md overflow-hidden">
                          <ul className="py-2">
                            {item.subItems.map((sub) => (
                              <li key={sub.label}>
                                <a href={sub.href} className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-af-blue transition-colors border-l-2 border-transparent hover:border-af-blue font-medium">
                                  {sub.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                       </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Search Icon */}
            <button 
              className={`ml-6 p-2 transition-colors ${searchIconColor}`}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={20} />
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden p-2 ${textClasses}`}
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <div className="flex flex-col gap-1.5 items-end">
                <span className={`block w-8 h-0.5 transition-colors ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
                <span className={`block w-6 h-0.5 transition-colors ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
                <span className={`block w-8 h-0.5 transition-colors ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
            </div>
          </button>
        </div>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md p-6 border-t border-gray-100 animate-fade-in-down z-40">
            <div className="container mx-auto flex items-center gap-4">
               <Search className="text-gray-400" />
               <input 
                type="text" 
                placeholder="Search the site..." 
                className="flex-1 text-lg outline-none text-gray-700 placeholder:text-gray-300"
                autoFocus
               />
               <button onClick={() => setIsSearchOpen(false)} className="text-gray-400 hover:text-gray-600">
                 <X size={24} />
               </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col animate-fade-in text-gray-800">
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 bg-af-blue text-white rounded-full flex items-center justify-center font-serif font-bold">AF</div>
               <span className="font-serif font-bold text-lg uppercase">Menu</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-800"
            >
              <X size={28} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-50 pb-4">
                  <a 
                    href={item.href} 
                    className="text-2xl font-serif font-bold text-gray-900 hover:text-af-blue transition-colors block mb-2"
                    onClick={() => !item.subItems && setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.subItems && (
                    <div className="pl-4 space-y-3 mt-2 border-l-2 border-gray-100">
                      {item.subItems.map((sub) => (
                        <a 
                          key={sub.label} 
                          href={sub.href}
                          className="block text-gray-500 hover:text-af-blue text-sm uppercase tracking-wide font-medium"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-4">
              <a href="#" className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded hover:bg-gray-100 transition">
                <Calendar className="text-af-blue mb-2" />
                <span className="text-xs font-bold uppercase text-gray-600">Calendar</span>
              </a>
              <a href="#" className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded hover:bg-gray-100 transition">
                <GraduationCap className="text-af-blue mb-2" />
                <span className="text-xs font-bold uppercase text-gray-600">Alumni</span>
              </a>
              <a href="#" className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded hover:bg-gray-100 transition">
                <MapPin className="text-af-blue mb-2" />
                <span className="text-xs font-bold uppercase text-gray-600">Directions</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;