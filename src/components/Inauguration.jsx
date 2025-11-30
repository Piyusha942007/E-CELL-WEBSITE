import React from 'react';
import { Calendar, MapPin, UserCheck } from 'lucide-react';

const Inauguration = () => {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Milestone Moment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            A New Chapter Begins
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content & Details */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Inauguration Ceremony 2025
            </h3>
            <p className="text-secondary text-lg leading-relaxed mb-6">
              The PCCOER Entrepreneurship Cell was officially inaugurated in a grand ceremony, 
              marking the beginning of a new era for student innovation. We were honored to have 
              distinguished industry leaders ignite the spark of entrepreneurship on our campus.
            </p>

            {/* Event Details Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-3">
                <UserCheck className="text-accent h-6 w-6 mt-1" />
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">Chief Guest</p>
                  <p className="font-bold text-primary">Mr. Ratan Tata (Example)</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-3">
                <Calendar className="text-accent h-6 w-6 mt-1" />
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">Date</p>
                  <p className="font-bold text-primary">October 1, 2025</p>
                </div>
              </div>
            </div>

            <blockquote className="border-l-4 border-accent pl-4 italic text-secondary">
              "The energy in this room is proof that the future of India's startup ecosystem is in safe hands."
            </blockquote>
          </div>

          {/* Right: Image Gallery (Masonry Style) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1470&auto=format&fit=crop" 
                alt="Ribbon Cutting" 
                className="rounded-xl shadow-lg w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-300"
              />
              <img 
                src="https://images.unsplash.com/photo-1515168816537-c9718879870d?q=80&w=1470&auto=format&fit=crop" 
                alt="Audience Cheering" 
                className="rounded-xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src="https://images.unsplash.com/photo-1475721027767-f4240295bdcc?q=80&w=1470&auto=format&fit=crop" 
                alt="Chief Guest Speech" 
                className="rounded-xl shadow-lg w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-300"
              />
               <div className="bg-primary rounded-xl shadow-lg w-full h-48 flex items-center justify-center p-4 text-center">
                 <div>
                    <h4 className="text-white font-bold text-3xl">100+</h4>
                    <p className="text-blue-200 text-sm">Students Attended</p>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Inauguration;