import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import FadeIn from './FadeIn'; // Import the magic wrapper

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content - Staggered Fade Up */}
          <div className="max-w-2xl">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-accent text-sm font-semibold mb-6">
                <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
                Admissions Open for Incubation Cohort '25
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-primary leading-tight mb-6">
                Architecting the <br />
                <span className="text-accent">Future of Startups</span> <br />
                at PCCOER
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-lg text-secondary mb-8 leading-relaxed max-w-lg">
                Bridging the gap between raw ideas and market reality through 
                expert mentorship, seed funding, and a vibrant community of innovators.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex justify-center items-center px-8 py-4 bg-accent text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Explore Startups <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex justify-center items-center px-8 py-4 border-2 border-primary text-primary bg-transparent rounded-lg font-bold text-lg hover:bg-blue-50 transition-all">
                  <PlayCircle className="mr-2 h-5 w-5" /> Partner with Us
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right Image - Slide in from Right */}
          <FadeIn direction="left" delay={0.5} className="relative lg:ml-10">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Students collaborating" 
                className="w-full h-full object-cover transform hover:scale-105 transition-duration-700"
              />
            </div>
            {/* Background Pattern */}
            <div className="absolute -z-10 top-[-20px] right-[-20px]">
                <svg width="100" height="100" fill="none" viewBox="0 0 100 100">
                    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="2" className="text-gray-200" fill="currentColor" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#dots)" />
                </svg>
            </div>
          </FadeIn>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;