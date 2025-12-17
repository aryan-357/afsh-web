import React, { useState, useEffect } from 'react';
import { Menu, X, Search, User, Calendar, GraduationCap, MapPin, Sun, Moon, LogOut } from 'lucide-react';
import { NavItem } from '../types';

interface HeaderProps {
  user: string | null;
  onLoginClick: () => void;
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

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
      { label: 'Scholars', href: '#' }
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
    href: '/news'
  },
  {
    label: 'Contact',
    href: '#contact'
  },
];

const Header: React.FC<HeaderProps> = ({ user, onLoginClick, onLogout, onNavigate }) => {
  // ... state ...
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  // Theme State
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  // Handle Scroll
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

  // Handle Theme Change
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleNavClick = (e: React.MouseEvent, item: NavItem, subItem?: NavItem) => {
    e.preventDefault();

    // If it's the scholars link
    if ((subItem && subItem.label === 'Scholars') || (item.label === 'Scholars')) {
      onNavigate('scholars');
    }
    // News Link
    else if (item.label === 'News') {
      onNavigate('news');
    }
    // Hash links
    else if ((!subItem && item.href.startsWith('#')) || (subItem && subItem.href.startsWith('#'))) {
      // Navigate to home then hash
      onNavigate('home');
      const hash = subItem ? subItem.href : item.href;
      // Attempt to scroll to hash manually if we are already on home page, 
      // but App.tsx handles 'home' -> navigate('/')
      // We can iterate to find the element and scroll
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }

    if (subItem || !item.subItems) {
      setIsMenuOpen(false);
      setActiveSubMenu(null);
    }
  };

  // Dynamic styling based on scroll state
  const headerClasses = scrolled
    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-0'
    : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4';

  const textClasses = scrolled ? 'text-gray-800 dark:text-gray-100' : 'text-white';
  const utilityTextClasses = scrolled ? 'text-gray-600 dark:text-gray-400' : 'text-gray-200';
  const logoMainClasses = scrolled ? 'text-gray-900 dark:text-white' : 'text-white';
  const logoSubClasses = scrolled ? 'text-af-blue dark:text-af-light' : 'text-af-gold';
  const navHoverClasses = scrolled ? 'hover:text-af-blue dark:hover:text-af-light' : 'hover:text-af-gold';
  const searchIconColor = scrolled ? 'text-gray-500 hover:text-af-blue dark:text-gray-300 dark:hover:text-af-light' : 'text-white/80 hover:text-white';

  return (
    <header className={`w-full z-50 fixed top-0 left-0 transition-all duration-500 ease-in-out font-sans ${headerClasses}`}>

      {/* Utility Bar */}
      <div className={`text-[11px] uppercase tracking-widest font-semibold transition-all duration-300 ${scrolled ? 'py-1 border-b border-gray-100 dark:border-gray-800' : 'py-0'}`}>
        <div className="container mx-auto px-6 flex justify-end items-center space-x-6">
          <a href="#" className={`hidden md:block transition-colors ${utilityTextClasses} hover:text-af-light`}>Calendar</a>
          <a href="#" className={`hidden md:block transition-colors ${utilityTextClasses} hover:text-af-light`}>Directory</a>
          <a href="#" className={`hidden md:block transition-colors ${utilityTextClasses} hover:text-af-light`}>Parents</a>
          <a href="#" className={`hidden md:block transition-colors ${utilityTextClasses} hover:text-af-light`}>Alumni</a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-1 px-2 py-1 rounded transition-colors ml-4 ${scrolled ? 'text-gray-600 hover:text-af-blue dark:text-gray-300 dark:hover:text-white' : 'text-white hover:text-af-gold'}`}
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {user ? (
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/20">
              <span className={`text-xs font-bold uppercase tracking-wider ${scrolled ? 'text-af-blue dark:text-af-light' : 'text-white'}`}>
                Hi, {user}
              </span>
              <button
                onClick={onLogout}
                className={`flex items-center gap-1 px-3 py-1 rounded transition-colors border ${scrolled ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-100 dark:border-red-900 hover:bg-red-100 dark:hover:bg-red-900/40' : 'bg-red-500/20 text-white border-white/20 hover:bg-red-500/40'}`}
                title="Logout"
              >
                <LogOut size={12} /> <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          ) : (
            <button
              onClick={onLoginClick}
              className={`flex items-center gap-1 px-3 py-1 rounded transition-colors ml-2 border ${scrolled ? 'bg-af-blue text-white border-af-blue hover:bg-blue-700' : 'bg-transparent text-white border-white hover:bg-white/20'}`}
            >
              <User size={12} /> Login
            </button>
          )}
        </div>
      </div>

      {/* Main Header Content */}
      <div className="relative">
        <div className={`container mx-auto px-6 transition-all duration-300 flex justify-between items-center ${scrolled ? 'h-20' : 'h-24'}`}>

          {/* Logo Section */}
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img
              src="https://ecolearn.pages.dev/img/logo.png"
              alt="Air Force School Logo"
              className="w-14 h-14 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
            />
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
                    onClick={(e) => handleNavClick(e, item)}
                    className={`px-5 py-2 text-sm font-bold uppercase tracking-wider transition-colors relative z-10 ${textClasses} ${navHoverClasses}`}
                  >
                    {item.label}
                  </a>

                  {/* Dropdown Menu */}
                  {item.subItems && (
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="w-64 bg-white dark:bg-gray-800 shadow-xl border-t-4 border-af-blue rounded-b-md overflow-hidden">
                        <ul className="py-2">
                          {item.subItems.map((sub) => (
                            <li key={sub.label}>
                              <a
                                href={sub.href}
                                onClick={(e) => handleNavClick(e, item, sub)}
                                className="block px-6 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-af-blue dark:hover:text-af-light transition-colors border-l-2 border-transparent hover:border-af-blue font-medium"
                              >
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
              <span className={`block w-8 h-0.5 transition-colors ${scrolled ? 'bg-gray-800 dark:bg-white' : 'bg-white'}`}></span>
              <span className={`block w-6 h-0.5 transition-colors ${scrolled ? 'bg-gray-800 dark:bg-white' : 'bg-white'}`}></span>
              <span className={`block w-8 h-0.5 transition-colors ${scrolled ? 'bg-gray-800 dark:bg-white' : 'bg-white'}`}></span>
            </div>
          </button>
        </div>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-md p-6 border-t border-gray-100 dark:border-gray-700 animate-fade-in-down z-40">
            <div className="container mx-auto flex items-center gap-4">
              <Search className="text-gray-400" />
              <input
                type="text"
                placeholder="Search the site..."
                className="flex-1 text-lg outline-none text-gray-700 dark:text-gray-200 bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-600"
                autoFocus
              />
              <button onClick={() => setIsSearchOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                <X size={24} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white dark:bg-gray-900 flex flex-col animate-fade-in text-gray-800 dark:text-gray-100">
          <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <img src="https://ecolearn.pages.dev/img/logo.png" alt="AF" className="w-10 h-10 object-contain" />
              <span className="font-serif font-bold text-lg uppercase dark:text-white">Menu</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-gray-100"
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {/* Mobile User Section */}
            {user && (
              <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-af-blue text-white rounded-full flex items-center justify-center font-bold">
                    {user.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">Welcome</p>
                    <p className="font-bold text-gray-900 dark:text-white">{user}</p>
                  </div>
                </div>
                <button onClick={onLogout} className="text-red-500 hover:bg-red-50 p-2 rounded">
                  <LogOut size={20} />
                </button>
              </div>
            )}

            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-50 dark:border-gray-800 pb-4">
                  <a
                    href={item.href}
                    className="text-2xl font-serif font-bold text-gray-900 dark:text-white hover:text-af-blue dark:hover:text-af-light transition-colors block mb-2"
                    onClick={(e) => {
                      if (!item.subItems) {
                        handleNavClick(e, item);
                      }
                    }}
                  >
                    {item.label}
                  </a>
                  {item.subItems && (
                    <div className="pl-4 space-y-3 mt-2 border-l-2 border-gray-100 dark:border-gray-800">
                      {item.subItems.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="block text-gray-500 dark:text-gray-400 hover:text-af-blue dark:hover:text-af-light text-sm uppercase tracking-wide font-medium"
                          onClick={(e) => handleNavClick(e, item, sub)}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 grid grid-cols-2 gap-4">
              {/* Mobile Login Button if not logged in */}
              {!user && (
                <button
                  onClick={() => { onLoginClick(); setIsMenuOpen(false); }}
                  className="col-span-2 flex items-center justify-center gap-2 p-4 bg-af-blue text-white rounded hover:bg-blue-700 transition"
                >
                  <User size={16} /> <span className="text-sm font-bold uppercase">Login</span>
                </button>
              )}

              <a href="#" className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                <Calendar className="text-af-blue dark:text-af-light mb-2" />
                <span className="text-xs font-bold uppercase text-gray-600 dark:text-gray-300">Calendar</span>
              </a>
              <a href="#" className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                <GraduationCap className="text-af-blue dark:text-af-light mb-2" />
                <span className="text-xs font-bold uppercase text-gray-600 dark:text-gray-300">Alumni</span>
              </a>
              <a href="#" className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                <MapPin className="text-af-blue dark:text-af-light mb-2" />
                <span className="text-xs font-bold uppercase text-gray-600 dark:text-gray-300">Directions</span>
              </a>
              <button
                onClick={toggleTheme}
                className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                {theme === 'dark' ? <Sun className="text-af-blue dark:text-af-light mb-2" /> : <Moon className="text-af-blue mb-2" />}
                <span className="text-xs font-bold uppercase text-gray-600 dark:text-gray-300">Theme</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;