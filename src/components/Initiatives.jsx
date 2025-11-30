import React from 'react';
import { Calendar, ArrowRight, Lightbulb, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const Initiatives = () => {
  const events = [
    {
      title: "Ideathon 2025",
      category: "Competition",
      description: "48-hour innovation challenge where teams pitch and prototype their startup ideas.",
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      color: "bg-blue-500",
      link: "/ideathon", // Added Link
      status: "Registration Open"
    },
    {
      title: "LinkedIn for Startups",
      category: "Workshop",
      description: "Exclusive session on leveraging professional networks for growth and funding.",
      icon: <Users className="w-6 h-6 text-white" />,
      color: "bg-purple-500",
      link: "#", // Keep as placeholder or create page later
      status: "Coming Soon"
    },
    {
      title: "Future Frontiers",
      category: "Seminar",
      description: "Exploring emerging technologies and their impact on tomorrow's businesses.",
      icon: <Trophy className="w-6 h-6 text-white" />,
      color: "bg-indigo-500",
      link: "#",
      status: "Coming Soon"
    }
  ];

  return (
    <section id="initiatives" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn>
          <div className="mb-12">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Fostering Innovation Year-Round</h2>
          </div>
        </FadeIn>

        {/* Highlight: Udbhav '25 */}
        <FadeIn delay={0.2}>
          <div className="mb-16 rounded-2xl bg-primary text-white overflow-hidden shadow-2xl relative">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold mb-6 w-fit">
                  <Calendar className="w-3 h-3 mr-2" /> Completed Oct 1, 2025
                </div>
                <h3 className="text-4xl font-bold mb-4 font-heading">Udbhav '25</h3>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  Our flagship Entrepreneurship Summit brought together 120+ students, 
                  30 shortlisted teams, and top industry investors. A day where ideas turned into reality.
                </p>
                <Link to="/udbhav">
                  <button className="bg-accent text-white px-6 py-3 rounded-lg font-bold w-fit flex items-center hover:bg-white hover:text-primary transition-colors shadow-lg">
                    View Recap & Winners <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </Link>
              </div>
              <div className="h-64 lg:h-auto bg-gray-800 relative">
                <img 
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1470&auto=format&fit=crop" 
                  alt="Udbhav Event Stage" 
                  className="w-full h-full object-cover opacity-90" 
                />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Smaller Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <FadeIn key={index} delay={index * 0.1}> 
              <div className="group flex flex-col h-full p-8 rounded-xl border border-gray-100 bg-white shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg ${event.color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                  {event.icon}
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{event.title}</h4>
                <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">{event.description}</p>
                
                <div className="mt-auto flex items-center justify-between">
                    {event.link !== "#" ? (
                        <Link to={event.link} className="text-accent font-semibold text-sm flex items-center hover:underline">
                             Know More <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                    ) : (
                         <span className="text-gray-400 font-semibold text-sm flex items-center cursor-not-allowed">
                             Coming Soon
                        </span>
                    )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Initiatives;