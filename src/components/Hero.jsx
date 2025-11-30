import React from 'react';
import { ArrowRight, PlayCircle, MousePointer2, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion'; // Using motion directly for finer control

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050B14]">
      
      {/* 1. DYNAMIC BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        {/* The Base Image */}
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Innovation Workspace" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom" 
          // Note: Add 'animate-slow-zoom' in CSS if you want it moving, otherwise static is fine
        />
        
        {/* The "Blueprint" Grid Pattern - Adds Tech Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

        {/* The "Prussian Blue" Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/90 via-[#0A2540]/80 to-[#050B14]"></div>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        
        {/* Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-blue-200 text-xs font-bold tracking-widest uppercase shadow-2xl hover:bg-white/10 transition-colors cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-accent mr-3 animate-pulse"></span>
            Admissions Open for Cohort '25
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-heading font-extrabold text-white tracking-tight leading-[1.1] mb-8"
        >
          Architecting the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300 animate-shimmer bg-[length:200%_auto]">
            Future of Startups
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
        >
          PCCOER E-Cell bridges the gap between <span className="text-white font-medium">raw ideas</span> and <span className="text-white font-medium">market reality</span> through expert mentorship and seed funding.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          {/* Primary Button */}
          <a href="#initiatives" className="group relative inline-flex justify-center items-center px-8 py-4 bg-accent text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)]">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></div>
            Explore Initiatives <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          {/* Secondary Button */}
          <a href="#about" className="inline-flex justify-center items-center px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all">
            <PlayCircle className="mr-2 h-5 w-5" /> Our Mission
          </a>
        </motion.div>

      </div>

      {/* 3. SCROLL INDICATOR (The "Anchor" at the bottom) */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center"
      >
        <p className="text-[10px] uppercase tracking-widest mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-1 bg-white rounded-full"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;