import React, { useState, useEffect } from 'react';
import { Menu, X, Search, User, Calendar, GraduationCap, MapPin, Sun, Moon, LogOut } from 'lucide-react';
import { NavItem } from '../types';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  user: string | null;
  onLogout: () => void;
}

const navItems: NavItem[] = [
  { 
    label: 'About', 
    href: '#about',
    subItems: [
      { label: 'Principal\'s Message', href: '#about' },
      { label: 'School History', href: '#about' },
      { label: 'Vision & Mission', href: '#academics' },
      { label: 'Administration', href: '#about' }
    ]
  },
  { 
    label: 'Academics', 
    href: '#academics',
    subItems: [
      { label: 'Curriculum', href: '#academics' },
      { label: 'Departments', href: '#academics' },
      { label: 'Academic Calendar', href: '#academics' },
      { label: 'Library', href: '#academics' }
    ]
  },
  { 
    label: 'Admissions', 
    href: '#admission',
    subItems: [
      { label: 'Admission Procedure', href: '#admission' },
      { label: 'Fee Structure', href: '#admission' },
      { label: 'Transfer Certificates', href: '#admission' },
      { label: 'FAQs', href: '#admission' }
    ]
  },
  { 
    label: 'Student Life', 
    href: '#student-life',
    subItems: [
      { label: 'Photo Gallery', href: '/gallery' },
      { label: 'Houses', href: '#student-life' },
      { label: 'Clubs & Societies', href: '#student-life' },
      { label: 'Sports', href: '#student-life' },
      { label: 'NCC', href: '#student-life' }
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

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

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

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    // 1. If it's a full route (starts with /), let standard navigation happen
    if (href.startsWith('/')) {
        setIsMenuOpen(false);
        // Link component handles this automatically
        return;
    }

    // 2. If it's a hash link (#id)
    e.preventDefault();
    setIsMenuOpen(false);

    if (isHomePage) {
        // If we are already on home, scroll to the element
        const id = href.substring(1); // remove #
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        // If we are on another page (e.g. /gallery), navigate to home + hash
        navigate(`/${href}`);
    }
  };

  // Helper to get correct 'to' prop for Link component
  const getLinkTo = (href: string) => {
    if (href.startsWith('/')) return href;
    if (isHomePage) return href; // Return #id to let handleNavClick preventDefault work
    return `/${href}`; // Return /#id for other pages
  };

  const headerClasses = (scrolled || !isHomePage)
    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-0'
    : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4';

  const textClasses = (scrolled || !isHomePage) ? 'text-gray-800 dark:text-gray-100' : 'text-white';
  const utilityTextClasses = (scrolled || !isHomePage) ? 'text-gray-600 dark:text-gray-400' : 'text-gray-200';
  const logoMainClasses = (scrolled || !isHomePage) ? 'text-gray-900 dark:text-white' : 'text-white';
  const logoSubClasses = (scrolled || !isHomePage) ? 'text-af-blue dark:text-af-light' : 'text-af-gold';
  const navHoverClasses = (scrolled || !isHomePage) ? 'hover:text-af-blue dark:hover:text-af-light' : 'hover:text-af-gold';
  const searchIconColor = (scrolled || !isHomePage) ? 'text-gray-500 hover:text-af-blue dark:text-gray-300 dark:hover:text-af-light' : 'text-white/80 hover:text-white';

  return (
    <header className={`w-full z-50 fixed top-0 left-0 transition-all duration-500 ease-in-out font-sans ${headerClasses}`}>
      
      {/* Utility Bar */}
      <div className={`text-[11px] uppercase tracking-widest font-semibold transition-all duration-300 ${(scrolled || !isHomePage) ? 'py-1 border-b border-gray-100 dark:border-gray-800' : 'py-0'}`}>
        <div className="container mx-auto px-6 flex justify-end items-center space-x-6">
          <a href="#" className={`hidden md:block transition-colors ${utilityTextClasses} hover:text-af-light`}>Calendar</a>
          <a href="#" className={`hidden md:block transition-colors ${utilityTextClasses} hover:text-af-light`}>Directory</a>
          <a href="#" className={`hidden md:block transition-colors ${utilityTextClasses} hover:text-af-light`}>Parents</a>
          <a href="#" className={`hidden md:block transition-colors ${utilityTextClasses} hover:text-af-light`}>Alumni</a>
          
          <button 
            onClick={toggleTheme}
            className={`flex items-center gap-1 px-2 py-1 rounded transition-colors ml-4 ${(scrolled || !isHomePage) ? 'text-gray-600 hover:text-af-blue dark:text-gray-300 dark:hover:text-white' : 'text-white hover:text-af-gold'}`}
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {user ? (
              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/20">
                 <span className={`text-xs font-bold uppercase tracking-wider ${(scrolled || !isHomePage) ? 'text-af-blue dark:text-af-light' : 'text-white'}`}>
                    Hi, {user}
                 </span>
                 <button 
                    onClick={onLogout}
                    className={`flex items-center gap-1 px-3 py-1 rounded transition-colors border ${(scrolled || !isHomePage) ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-100 dark:border-red-900 hover:bg-red-100 dark:hover:bg-red-900/40' : 'bg-red-500/20 text-white border-white/20 hover:bg-red-500/40'}`}
                    title="Logout"
                 >
                    <LogOut size={12} /> <span className="hidden sm:inline">Logout</span>
                 </button>
              </div>
          ) : (
            <Link
                to="/login"
                className={`flex items-center gap-1 px-3 py-1 rounded transition-colors ml-2 border ${(scrolled || !isHomePage) ? 'bg-af-blue text-white border-af-blue hover:bg-blue-700' : 'bg-transparent text-white border-white hover:bg-white/20'}`}
            >
                <User size={12} /> Login
            </Link>
          )}
        </div>
      </div>

      {/* Main Header Content */}
      <div className="relative">
        <div className={`container mx-auto px-6 transition-all duration-300 flex justify-between items-center ${(scrolled || !isHomePage) ? 'h-20' : 'h-24'}`}>
          
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
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
          </Link>

          <nav className="hidden lg:flex items-center h-full">
            <ul className="flex h-full items-center">
              {navItems.map((item) => (
                <li 
                  key={item.label} 
                  className="group relative h-full flex items-center"
                  onMouseEnter={() => setActiveSubMenu(item.label)}
                  onMouseLeave={() => setActiveSubMenu(null)}
                >
                  <Link 
                    to={getLinkTo(item.href)}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-5 py-2 text-sm font-bold uppercase tracking-wider transition-colors relative z-10 ${textClasses} ${navHoverClasses}`}
                  >
                    {item.label}
                  </Link>
                  
                  {item.subItems && (
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                       <div className="w-64 bg-white dark:bg-gray-800 shadow-xl border-t-4 border-af-blue rounded-b-md overflow-hidden">
                          <ul className="py-2">
                            {item.subItems.map((sub) => (
                              <li key={sub.label}>
                                <Link 
                                  to={getLinkTo(sub.href)}
                                  onClick={(e) => handleNavClick(e, sub.href)}
                                  className="block px-6 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-af-blue dark:hover:text-af-light transition-colors border-l-2 border-transparent hover:border-af-blue font-medium"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                       </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <button 
              className={`ml-6 p-2 transition-colors ${searchIconColor}`}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={20} />
            </button>
          </nav>

          <button 
            className={`lg:hidden p-2 ${textClasses}`}
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <div className="flex flex-col gap-1.5 items-end">
                <span className={`block w-8 h-0.5 transition-colors ${(scrolled || !isHomePage) ? 'bg-gray-800 dark:bg-white' : 'bg-white'}`}></span>
                <span className={`block w-6 h-0.5 transition-colors ${(scrolled || !isHomePage) ? 'bg-gray-800 dark:bg-white' : 'bg-white'}`}></span>
                <span className={`block w-8 h-0.5 transition-colors ${(scrolled || !isHomePage) ? 'bg-gray-800 dark:bg-white' : 'bg-white'}`}></span>
            </div>
          </button>
        </div>

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
                  <Link 
                    to={getLinkTo(item.href)}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-2xl font-serif font-bold text-gray-900 dark:text-white hover:text-af-blue dark:hover:text-af-light transition-colors block mb-2"
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <div className="pl-4 space-y-3 mt-2 border-l-2 border-gray-100 dark:border-gray-800">
                      {item.subItems.map((sub) => (
                        <Link 
                          key={sub.label} 
                          to={getLinkTo(sub.href)}
                          onClick={(e) => handleNavClick(e, sub.href)}
                          className="block text-gray-500 dark:text-gray-400 hover:text-af-blue dark:hover:text-af-light text-sm uppercase tracking-wide font-medium"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 grid grid-cols-2 gap-4">
               {!user && (
                  <Link 
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="col-span-2 flex items-center justify-center gap-2 p-4 bg-af-blue text-white rounded hover:bg-blue-700 transition"
                  >
                    <User size={16} /> <span className="text-sm font-bold uppercase">Login</span>
                  </Link>
               )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;