import React from 'react';
import { Calendar, MapPin, Trophy, ArrowLeft, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UdbhavPage = () => {
  const winners = [
    {
      rank: "1st Place",
      name: "FitBudget",
      category: "HealthTech",
      members: "Arjun, Sneha, Rahul",
      desc: "An app revolutionizing gym memberships with pay-per-day models.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
    },
    {
      rank: "2nd Place",
      name: "ZenGrow",
      category: "AgriTech",
      members: "Priya, Amit",
      desc: "Smart sensors for urban farming and sustainable gardening.",
      image: "https://images.unsplash.com/photo-1416872927374-393b5f58e744?q=80&w=1470&auto=format&fit=crop"
    },
    {
      rank: "3rd Place",
      name: "Fixit",
      category: "ServiceTech",
      members: "Rohan, Vikram, Neha",
      desc: "Hyper-local marketplace for verified repair professionals.",
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2662&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Event Hero Header */}
      <div className="bg-primary text-white pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <span className="inline-block px-3 py-1 bg-accent/20 border border-accent/50 text-accent rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Completed • Oct 1, 2025
          </span>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Udbhav '25</h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Where Ideas Turn Into Reality. The flagship entrepreneurship summit of PCCOER that witnessed 
            30+ teams competing for the ultimate innovation title.
          </p>
          
          <div className="flex flex-wrap gap-6 mt-10">
            <div className="flex items-center text-gray-300">
              <Calendar className="w-5 h-5 mr-2 text-accent" />
              <span>Oct 1, 2025</span>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-5 h-5 mr-2 text-accent" />
              <span>Main Auditorium, PCCOER</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Users className="w-5 h-5 mr-2 text-accent" />
              <span>120+ Participants</span>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 blur-3xl rounded-full transform translate-x-1/2"></div>
      </div>

      {/* The Winners Section */}
      <div className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Trophy className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-primary">The Champions</h2>
            <p className="text-secondary mt-2">Celebrating the top innovative minds of the year.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {winners.map((team, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 relative">
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-md text-sm font-bold shadow-lg z-10">
                    {team.rank}
                  </div>
                  <img src={team.image} alt={team.name} className="w-full h-full object-cover" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{team.name}</h3>
                  <span className="text-xs font-bold text-accent uppercase tracking-wide">{team.category}</span>
                  <p className="text-secondary text-sm mt-4 mb-4 leading-relaxed">
                    {team.desc}
                  </p>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs text-gray-400 font-semibold uppercase mb-1">Team Members</p>
                    <p className="text-sm text-primary font-medium">{team.members}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery / Highlights */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-10">Event Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
            {/* Replace with real event photos */}
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
            </div>
            <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1515168816537-c9718879870d?auto=format&fit=crop&q=80" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
            </div>
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1475721027767-f4240295bdcc?auto=format&fit=crop&q=80" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
            </div>
            <div className="col-span-1 row-span-1 bg-primary text-white rounded-2xl flex items-center justify-center p-6 text-center">
                <div>
                    <h3 className="text-3xl font-bold text-accent">30+</h3>
                    <p className="text-sm">Ideas Pitched</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UdbhavPage;