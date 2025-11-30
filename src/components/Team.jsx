import React from 'react';
import FadeIn from './FadeIn';

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">The Minds Behind the Mission</h2>
          </div>
        </FadeIn>

        {/* Faculty Advisor - Tier 1 */}
        <FadeIn delay={0.2}>
          <div className="flex justify-center mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-accent text-center max-w-md w-full relative mx-4">
               <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                 Faculty Advisor
               </div>
               <img 
                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop" 
                 alt="Mrs. Vaishali C. Kulloli" 
                 className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-50"
               />
               <h3 className="text-2xl font-bold text-primary">Mrs. Vaishali C. Kulloli</h3>
               <p className="text-secondary mt-2 text-sm leading-relaxed">
                 Guiding the strategic vision of PCCOER E-Cell with over 15 years of academic excellence.
               </p>
            </div>
          </div>
        </FadeIn>

        {/* Core Team - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {["President", "Vice President", "Technical Head", "Marketing Head"].map((role, i) => (
            <FadeIn key={i} delay={0.1 * i}>
              <div className="text-center p-6 bg-surface rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 rounded-full bg-white mx-auto mb-4 overflow-hidden border-2 border-gray-200">
                  <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} 
                    alt="Team Member" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h4 className="font-bold text-primary text-lg">Student Name</h4>
                <p className="text-xs text-accent font-bold uppercase tracking-wider mt-1">{role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;