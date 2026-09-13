import React from 'react';
import { Calendar, ArrowRight, Lightbulb, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const Initiatives = () => {
  // Define publicUrl
  const publicUrl = import.meta.env.BASE_URL;

  return (
    <section id="initiatives" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 1: OUR LEGACY */}
        <FadeIn>
          <div className="mb-12 text-center">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Phase 0 : Archive
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2 tracking-tight">
              Our Legacy
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex justify-center mb-24">
            <div className="max-w-4xl w-full bg-primary rounded-3xl overflow-hidden shadow-2xl relative grid md:grid-cols-2">
                
                {/* Left: Poster Image */}
                <div className="h-80 md:h-auto bg-gray-900 relative">
                    {/* FIX: Use publicUrl */}
                    <img 
                        src={`${publicUrl}udbhav/udbhav-poster.jpg`} 
                        alt="Udbhav 2025 Poster" 
                        className="w-full h-full object-contain p-4"
                    />
                    <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        OCT 1, 2025
                    </div>
                </div>

                {/* Right: Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-heading font-bold text-white mb-4">
                        UDBHAV '25
                    </h3>
                    <p className="text-blue-100 text-base leading-relaxed mb-8">
                        The flagship Entrepreneurship Development event by PCCOER E-Cell. 
                        Bringing together <span className="text-white font-semibold">120+ students</span> and <span className="text-white font-semibold">30 shortlisted teams</span> to develop innovative solutions for real-world problems.
                    </p>

                    <Link to="/udbhav" className="inline-flex items-center justify-between w-full p-1 pl-6 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all group">
                        <span className="text-sm font-bold text-white uppercase tracking-wider">
                            Know More
                        </span>
                        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </Link>
                </div>
            </div>
          </div>
        </FadeIn>

        {/* SECTION 2: FUTURE FRONTIERS */}
        <FadeIn>
            <div className="mb-12 text-center md:text-left">
                <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                What's Next
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
                Future Frontiers
                </h2>
                <p className="text-secondary mt-2 max-w-2xl">
                    Upcoming opportunities designed to accelerate your startup journey.
                </p>
            </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-4xl mx-auto bg-surface rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 grid md:grid-cols-2">
            {/* Left: Banner Image */}
            <div className="h-64 md:h-auto bg-gray-900 relative overflow-hidden flex items-center justify-center p-2">
              <img 
                src={`${publicUrl}udbhav/udbhav26-banner.png`} 
                alt="Udbhav 2026 Banner" 
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                SEPT 29, 2026
              </div>
            </div>

            {/* Right: Content */}
            <div className="p-8 flex flex-col justify-center">
              <div className="inline-block self-start bg-blue-50 text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                Flagship Hackathon
              </div>
              <h4 className="text-3xl font-heading font-bold text-primary mb-3">
                UDBHAV '26
              </h4>
              <p className="text-secondary text-sm leading-relaxed mb-6">
                The premier innovation challenge where student teams turn startup ideas into working prototypes and pitch across 2 competitive rounds for a <span className="font-bold text-primary">₹16,000 prize pool</span>.
              </p>
              <div className="mt-auto pt-4 border-t border-gray-200/60">
                <Link to="/udbhav-2026" className="text-accent font-bold text-sm flex items-center hover:underline group">
                  Know More <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
        
      </div>
    </section>
  );
};

export default Initiatives;