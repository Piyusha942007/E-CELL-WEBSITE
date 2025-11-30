import React from 'react';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid: Stacks on mobile (grid-cols-1), 3 columns on desktop (md:grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-heading font-bold mb-6">PCCOER E-Cell</h2>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Empowering the next generation of entrepreneurs through innovation, 
              mentorship, and community support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Initiatives', 'Startups', 'Team'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-6 text-accent">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start justify-center md:justify-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-accent flex-shrink-0" />
                <span>
                  PCCOER, Ravet,<br/>Pune - 412101
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Mail className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <span>ecell@pccoer.in</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <span>+91 20 1234 5678</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 PCCOER E-Cell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;