import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialSidebar = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/entrepreneurship-cell-pccoer/',
      color: 'bg-[#0077b5]', // Mobile bg
      hoverColor: 'hover:bg-[#0077b5]', // Desktop hover
    },
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      url: 'https://www.instagram.com/ecell.pccoer/',
      color: 'bg-[#E1306C]',
      hoverColor: 'hover:bg-[#E1306C]',
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:ecell@pccoer.in',
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-600',
    }
  ];

  return (
    <>
      {/* =======================================
          1. DESKTOP VIEW (Right Sidebar) 
          Hidden on Mobile (hidden md:flex)
      ======================================== */}
      <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex-col gap-1">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5 + (index * 0.1), duration: 0.5 }}
            className={`
              relative flex items-center justify-end
              w-12 h-12 rounded-l-lg
              bg-primary text-white border-y border-l border-white/10
              shadow-lg cursor-pointer transition-all duration-300
              ${link.hoverColor} group overflow-hidden
            `}
            style={{ width: '3rem' }}
            whileHover={{ width: '10rem' }}
          >
            <span className="absolute right-12 whitespace-nowrap text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-4">
              {link.name}
            </span>
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 z-10 bg-inherit rounded-l-lg">
              {link.icon}
            </div>
          </motion.a>
        ))}
      </div>

      {/* =======================================
          2. MOBILE VIEW (Bottom Glass Dock) 
          Visible only on Mobile (flex md:hidden)
      ======================================== */}
      <div className="flex md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] gap-4">
        <div className="flex items-center gap-4 bg-primary/90 backdrop-blur-lg px-6 py-3 rounded-full border border-white/10 shadow-2xl">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + (index * 0.1) }}
              className={`
                w-10 h-10 flex items-center justify-center rounded-full text-white shadow-md
                ${link.color}
              `}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialSidebar;