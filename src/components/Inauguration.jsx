import React from 'react';
import { Calendar, MapPin, UserCheck, Users } from 'lucide-react';
import FadeIn from './FadeIn';

const Inauguration = () => {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Milestone Moment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
              A New Chapter Begins
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Official Report Details */}
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <h3 className="text-3xl font-bold text-primary">
                Inauguration of E-Cell, PCCOER
              </h3>
              <p className="text-secondary text-lg leading-relaxed mt-4">
                The Entrepreneurship Cell of the Computer Department was officially inaugurated 
                to empower young minds. The event marked the beginning of a strategic journey 
                to display student projects and foster an ecosystem of innovation.
              </p>
            </FadeIn>

            {/* Key Event Stats Grid */}
            <FadeIn delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                
                {/* Chief Guest Card */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-3">
                  <UserCheck className="text-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Presided By</p>
                    <p className="font-bold text-primary text-sm">Dr. H. U. Tiwari</p>
                    <p className="text-xs text-secondary">Director, PCCOER</p>
                  </div>
                </div>
                
                {/* Date Card */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-3">
                  <Calendar className="text-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Date</p>
                    <p className="font-bold text-primary text-sm">September 3, 2025</p>
                  </div>
                </div>

                {/* Venue Card */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-3">
                  <MapPin className="text-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Venue</p>
                    <p className="font-bold text-primary text-sm">Room 502</p>
                    <p className="text-xs text-secondary">Computer Dept</p>
                  </div>
                </div>

                {/* Faculty Card */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-3">
                  <Users className="text-accent h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Guest of Honor</p>
                    <p className="font-bold text-primary text-sm">Dr. Vijay Kotkar</p>
                    <p className="text-xs text-secondary">HOD, Computer Dept</p>
                  </div>
                </div>

              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <blockquote className="border-l-4 border-accent pl-4 italic text-secondary bg-white/50 p-4 rounded-r-lg mt-6">
                "The objective is to establish a clear Entrepreneurship Journey and make students aware of the challenges in becoming successful entrepreneurs."
              </blockquote>
            </FadeIn>
          </div>

          {/* Right: Photo Gallery */}
          <FadeIn direction="left" delay={0.4}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {/* Image 1: Ribbon Cutting */}
                <div className="rounded-xl shadow-lg w-full h-48 overflow-hidden bg-gray-200 relative group">
                   <img 
                    src="/ribbon-cutting.png" 
                    alt="Ribbon Cutting Ceremony" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                   />
                   <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2 translate-y-full group-hover:translate-y-0 transition-transform">
                      Ribbon Cutting
                   </div>
                </div>

                {/* Image 2: Students/Audience (Reusing ribbon-cutting.png as per your snippet, swap if you have a different pic) */}
                <div className="rounded-xl shadow-lg w-full h-64 overflow-hidden bg-gray-200 relative group">
                  <img 
                    src="/startup-presentation.png" 
                    alt="Students Presenting" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2 translate-y-full group-hover:translate-y-0 transition-transform">
                      5 Student Startups presented
                   </div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                {/* Image 3: Team 2025 */}
                 <div className="rounded-xl shadow-lg w-full h-64 overflow-hidden bg-gray-200 relative group">
                  <img 
                    src="/team.JPG" 
                    alt="Team 2025" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                   <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2 translate-y-full group-hover:translate-y-0 transition-transform">
                      Team 2025
                   </div>
                </div>

                {/* Stats Block */}
                <div className="bg-primary rounded-xl shadow-lg w-full h-48 flex flex-col items-center justify-center p-4 text-center border border-white/10">
                   <h4 className="text-white font-bold text-4xl mb-1">50+</h4>
                   <p className="text-blue-200 text-sm uppercase tracking-widest">Participants</p>
                   <div className="mt-4 px-3 py-1 bg-white/10 rounded-full text-xs text-white">
                      Faculty & Students
                   </div>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Inauguration;