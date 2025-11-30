import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import FadeIn from './FadeIn';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* 1. The Background Image (Covers the whole screen) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" 
          alt="PCCOER Campus Vibe" 
          className="w-full h-full object-cover"
        />
        {/* The Professional Overlay: Prussian Blue with 85% Opacity */}
        <div className="absolute inset-0 bg-primary/85 mix-blend-multiply"></div>
      </div>

      {/* 2. The Content (Centered & White) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <FadeIn delay={0.1} direction="up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 text-sm font-semibold mb-8">
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
            Admissions Open for Incubation Cohort '25
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
            Architecting the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              Future of Startups
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3} direction="up">
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            PCCOER E-Cell bridges the gap between raw ideas and market reality through 
            expert mentorship, seed funding, and a vibrant community of innovators.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} direction="up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex justify-center items-center px-8 py-4 bg-accent text-white rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore Startups <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <button className="inline-flex justify-center items-center px-8 py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all">
              <PlayCircle className="mr-2 h-5 w-5" /> Partner with Us
            </button>
          </div>
        </FadeIn>

        {/* 3. The "Trust" Stats at the bottom */}
        <FadeIn delay={0.6} direction="up">
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
                <div>
                    <p className="text-3xl font-bold text-white">50+</p>
                    <p className="text-sm text-blue-200 uppercase tracking-wider">Startups</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-white">₹1Cr+</p>
                    <p className="text-sm text-blue-200 uppercase tracking-wider">Raised</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-white">20+</p>
                    <p className="text-sm text-blue-200 uppercase tracking-wider">Mentors</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-white">500+</p>
                    <p className="text-sm text-blue-200 uppercase tracking-wider">Alumni</p>
                </div>
            </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Hero;