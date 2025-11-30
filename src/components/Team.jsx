import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Leadership</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">The Minds Behind the Mission</h2>
        </div>

        {/* Faculty Advisor - Tier 1 */}
        <div className="flex justify-center mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-accent text-center max-w-md relative">
             <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
               Faculty Advisor
             </div>
             {/* Replace with real Mrs. Vaishali Photo */}
             <img 
               src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop" 
               alt="Mrs. Vaishali C. Kulloli" 
               className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-50"
             />
             <h3 className="text-2xl font-bold text-primary">Mrs. Vaishali C. Kulloli</h3>
             <p className="text-secondary mt-2">
               Guiding the strategic vision of PCCOER E-Cell with over 15 years of academic excellence.
             </p>
          </div>
        </div>

        {/* Core Team - Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Repeat this block for team members */}
          {["President", "Vice President", "Technical Head", "Marketing Head"].map((role, i) => (
            <div key={i} className="text-center p-4">
              <div className="w-24 h-24 rounded-full bg-surface mx-auto mb-4 overflow-hidden">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} // Placeholder avatars
                  alt="Team Member" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h4 className="font-bold text-primary">Student Name</h4>
              <p className="text-xs text-accent font-semibold uppercase">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;