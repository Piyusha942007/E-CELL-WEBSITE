import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* 1. BACKGROUND IMAGE WITH OVERLAY */}
      <div className="absolute inset-0 z-0">
        {/* Using a high-quality abstract or campus photo */}
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Innovation at PCCOER" 
          className="w-full h-full object-cover"
        />
        {/* Deep Prussian Blue Overlay for Brand Consistency */}
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
        
        {/* Smooth Gradient Fade at the bottom to blend into the next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <FadeIn direction="down">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 text-sm font-bold mb-8 shadow-lg">
            <span className="flex h-2 w-2 rounded-full bg-accent mr-3 animate-pulse"></span>
            Admissions Open for Cohort '25
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-2xl">
            Architecting the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              Future of Startups
            </span>
          </h1>
        </FadeIn>

        {/* Sub-headline */}
        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            PCCOER E-Cell bridges the gap between raw ideas and market reality through 
            expert mentorship, seed funding, and a vibrant community of innovators.
          </p>
        </FadeIn>

        {/* Action Buttons */}
        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* Primary Button - Scrolls to Initiatives */}
            <a href="#initiatives" className="inline-flex justify-center items-center px-8 py-4 bg-accent text-white rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:-translate-y-1">
              Explore Initiatives <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
            {/* Secondary Button - Scrolls to About/Inauguration */}
            <a href="#about" className="inline-flex justify-center items-center px-8 py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all">
              <PlayCircle className="mr-2 h-5 w-5" /> Our Mission
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Hero;