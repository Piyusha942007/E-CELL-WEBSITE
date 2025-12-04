import React from 'react';
import { Instagram, Linkedin, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  // Configuration for Social Links - Update these URLS if specific handles differ
  const links = {
    linkedin: "https://www.linkedin.com/in/entrepreneurship-cell-pccoer/",
    instagram: "https://www.instagram.com/ecell.pccoer/",
    email: "mailto:ecell@pccoer.in",
    // Google Maps link for PCCOER Ravet
    location: "https://maps.app.goo.gl/c1zq7SihBpDHDVhaA?g_st=ac" 
  };

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-16 md:pt-20 pb-10 border-t border-white/10 font-sans relative overflow-hidden">
      
      {/* Optional: Subtle background pattern/glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16 text-center md:text-left">
          
          {/* 1. Brand Info Column */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-4 md:mb-6 tracking-tight text-white">
              PCCOER E-Cell
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm text-sm md:text-base mx-auto md:mx-0">
              Empowering the next generation of entrepreneurs through innovation, 
              mentorship, and community support.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a 
                href={links.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn"
                className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={links.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Instagram"
                className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={links.email}
                aria-label="Send Email"
                className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* 2. Quick Links Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 md:mb-6 text-blue-400">Quick Links</h3>
            <ul className="space-y-3 md:space-y-4 w-full max-w-[200px] md:max-w-none">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Initiatives', href: '/initiatives' },
                { name: 'Startups', href: '/startups' },
                { name: 'Team', href: '/team' }
              ].map((item) => (
                <li key={item.name} className="flex items-center justify-center md:justify-start">
                  <a href={item.href} className="text-slate-400 hover:text-white transition-colors text-sm md:text-base flex items-center group">
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100 text-blue-400">→</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 md:mb-6 text-blue-400">Contact Us</h3>
            <ul className="space-y-4 text-slate-400 text-sm md:text-base w-full max-w-[250px] md:max-w-none">
              
              {/* Location Link */}
              <li>
                <a 
                  href={links.location} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start justify-center md:justify-start group hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-500 flex-shrink-0 group-hover:text-blue-400" />
                  <span className="text-center md:text-left">
                    PCCOER, Plot No. B, Sector No. 110, Gate No. 1, Laxminagar, Ravet, Pune - 412101
                  </span>
                </a>
              </li>

              {/* Email Link */}
              <li>
                <a 
                  href={links.email} 
                  className="flex items-center justify-center md:justify-start group hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 group-hover:text-blue-400" />
                  <span>ecell@pccoer.in</span>
                </a>
              </li>

              {/* Optional: Directions CTA */}
              <li className="pt-2">
                <a 
                  href={links.location}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 border-b border-blue-400/30 hover:border-blue-300 pb-0.5 transition-all"
                >
                  Get Directions <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 text-xs md:text-sm">
          <p className="mb-2 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} PCCOER E-Cell. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;