import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Handle Scroll Effects (Glassmorphism)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Handle Smart Navigation (Scroll vs Route)
  const handleNavigation = (path, isScrollLink) => {
    setIsMobileMenuOpen(false); // Close mobile menu first

    if (isScrollLink) {
      // If we are already on Home ('/'), just scroll to the section
      if (location.pathname === '/') {
        const element = document.querySelector(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If we are on another page (e.g., /udbhav), go Home first, then scroll
        navigate('/');
        // Wait a tiny bit for Home to load, then scroll
        setTimeout(() => {
          const element = document.querySelector(path);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // Normal Page Navigation (e.g., to /udbhav)
      navigate(path);
      window.scrollTo(0, 0); // Scroll to top of new page
    }
  };

  // 3. Define Links (Separate Scroll IDs from Page Routes)
  const navLinks = [
    { name: 'Home', path: '/', type: 'route' },
    { name: 'About', path: '#about', type: 'scroll' }, // Points to id="about" in Inauguration.jsx
    { name: 'Initiatives', path: '#initiatives', type: 'scroll' }, // Points to id="initiatives"
    { name: 'Udbhav', path: '/udbhav', type: 'route' }, // New Page
    { name: 'Team', path: '#team', type: 'scroll' }, // Points to id="team"
    { name: 'Contact', path: '#contact', type: 'scroll' }, // Points to id="contact"
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      isScrolled || isMobileMenuOpen
        ? 'bg-primary/95 backdrop-blur-md shadow-lg py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo(0,0)} className="flex-shrink-0 flex items-center z-50">
            <h1 className="text-white font-heading font-bold text-2xl tracking-tight cursor-pointer">
              PCCOER <span className="text-accent">E-Cell</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.path, link.type === 'scroll')}
                className="text-gray-300 hover:text-white font-medium text-sm transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </button>
            ))}
            
            {/* CTA Button */}
            <button 
              onClick={() => handleNavigation('#contact', true)}
              className="bg-white text-primary px-5 py-2.5 rounded-full font-bold text-sm hover:bg-accent hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              Join Community
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden z-50">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-white focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div className={`md:hidden absolute top-0 left-0 w-full bg-[#050B14] border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col pt-24 pb-8 px-6 space-y-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link.path, link.type === 'scroll')}
              className="text-left text-xl font-bold text-gray-300 hover:text-accent transition-colors border-b border-gray-800 pb-2"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleNavigation('#contact', true)}
            className="w-full mt-4 bg-accent text-white px-5 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors"
          >
            Join Community
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;