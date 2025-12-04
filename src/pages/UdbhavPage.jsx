import React from 'react';
import { Trophy, ArrowLeft, CheckCircle, Lightbulb, Users, Layers, Calendar, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';

const UdbhavPage = () => {
  const publicUrl = import.meta.env.BASE_URL;

  const winners = [
    {
      id: "01",
      name: "FitBudget",
      tagline: "SMART GYM MEMBERSHIPS",
      desc: "Solving fitness inconsistency. FitBudget allows students and professionals to choose flexible, budget-friendly fitness plans.",
      icon: <Trophy className="w-6 h-6 text-yellow-600" />,
      image: `${publicUrl}udbhav/winner-1.png` 
    },
    {
      id: "02",
      name: "ZenGrow",
      tagline: "SUSTAINABLE GARDENING",
      desc: "Wellness meets sustainability. Easy-to-use, eco-friendly gardening kits designed for busy urban professionals.",
      icon: <Trophy className="w-6 h-6 text-gray-500" />,
      image: `${publicUrl}udbhav/winner-2.png`
    },
    {
      id: "03",
      name: "Fixit",
      tagline: "ON-DEMAND REPAIRS",
      desc: "Connecting users with verified local experts. FixIt ensures reliable, transparent, and organized services.",
      icon: <Trophy className="w-6 h-6 text-orange-600" />,
      image: `${publicUrl}udbhav/winner-3.png`
    }
  ];

  const galleryImages = [1, 2, 3, 4, 5, 6];

  return (
    <div className="bg-white min-h-screen font-sans text-secondary">
      <Navbar />
      
      {/* HERO SECTION - Fixed Alignment */}
      <div className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src={`${publicUrl}udbhav/6.jpg`} 
                alt="Event Background" 
                className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-primary/95 mix-blend-multiply"></div>
            {/* Gradient to blend smoothly into the next section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        {/* Content Container - Vertically & Horizontally Centered */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center pt-20">
          
          <Link to="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors border border-white/20 px-5 py-2 rounded-full bg-white/5 backdrop-blur-sm text-sm font-medium hover:bg-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          
          <FadeIn>
            <div className="mb-6 flex justify-center">
               <span className="text-accent font-extrabold tracking-[0.2em] text-[10px] md:text-sm uppercase bg-blue-900/50 px-4 py-1.5 rounded border border-blue-500/30 backdrop-blur-md">
                 Event Concluded • Oct 1, 2025
               </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-heading font-extrabold mb-6 tracking-tight text-white drop-shadow-xl">
              UDBHAV '25
            </h1>
            
            <p className="text-lg md:text-2xl lg:text-3xl text-blue-100 max-w-4xl mx-auto font-light leading-relaxed mb-12">
              "Where Ideas Turn Into <span className="font-semibold text-white">Reality</span>."
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl mx-auto">
                {[
                    { label: "Teams", value: "90+" },
                    { label: "Finalists", value: "30" },
                    { label: "Participants", value: "165+" },
                    { label: "Winners", value: "3" }
                ].map((stat, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-lg hover:bg-white/15 transition-colors">
                        <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                        <p className="text-[10px] md:text-xs text-blue-200 uppercase tracking-widest font-semibold">{stat.label}</p>
                    </div>
                ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
                <div className="grid lg:grid-cols-2 gap-8 md:gap-16 border border-gray-100 rounded-[2.5rem] p-6 md:p-12 shadow-2xl shadow-gray-200/50 bg-white relative overflow-hidden">
                    {/* Decorative Blob */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/80 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>

                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-blue-50 rounded-2xl">
                                <Lightbulb className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">About the Event</h2>
                        </div>
                        
                        <p className="text-secondary text-lg leading-relaxed mb-10">
                            Udbhav '25, the flagship Entrepreneurship Development event by PCCOER E-Cell, brought together 
                            <span className="text-primary font-bold"> 120 students</span> and <span className="text-primary font-bold">30 shortlisted teams</span> for a day of innovation, pitching, and solving real-world problems.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {[
                                {icon: Users, label: "Participants", val: "165+", col: "text-accent"},
                                {icon: Layers, label: "Finalists", val: "30", col: "text-green-600"},
                                {icon: Calendar, label: "Date", val: "Oct 1", col: "text-orange-500"},
                            ].map((item, i) => (
                                <div key={i} className="bg-surface px-5 py-4 rounded-xl border border-gray-100 flex items-center gap-4 flex-grow md:flex-grow-0 hover:border-accent/30 transition-colors">
                                    <item.icon className={`w-6 h-6 ${item.col}`} />
                                    <div>
                                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">{item.label}</p>
                                        <p className="text-primary font-bold text-base">{item.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            <Target className="w-6 h-6 text-red-500" />
                            <h3 className="text-xl font-bold text-primary">Key Objectives</h3>
                        </div>
                        <ul className="space-y-5">
                            {[
                                "Identification of real-world challenges.",
                                "Application of Business Model Canvas.",
                                "Pitching & Leadership skills enhanced."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 group">
                                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0 group-hover:text-green-500 transition-colors" />
                                    <span className="text-secondary text-lg font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </FadeIn>
        </div>
      </section>

      {/* HALL OF FAME */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Hall of Fame</h2>
                    <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto">Celebrating the visionaries who turned their innovative ideas into winning pitches at Udbhav '25.</p>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {winners.map((winner, idx) => (
                    <FadeIn key={idx} delay={idx * 0.1}>
                        <div className="flex flex-col h-full bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group">
                            <div className="p-8 relative flex-grow">
                                <div className="absolute top-4 right-6 text-6xl font-bold text-gray-50/80 select-none group-hover:text-blue-50/80 transition-colors">
                                    {winner.id}
                                </div>
                                <div className="w-14 h-14 rounded-2xl bg-surface border border-gray-100 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    {winner.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-3 relative z-10">{winner.name}</h3>
                                <span className="inline-block bg-blue-50 text-accent text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
                                    {winner.tagline}
                                </span>
                                <p className="text-secondary text-sm leading-relaxed relative z-10">
                                    {winner.desc}
                                </p>
                            </div>
                            <div className="h-56 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                                <img 
                                    src={winner.image} 
                                    alt={`${winner.name} Team`} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                                />
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <FadeIn>
                <div className="flex items-center justify-between mb-10">
                    <div className="flex flex-col">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Event Gallery</h2>
                        <div className="h-1 w-20 bg-accent mt-2 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-400 hidden md:block border border-gray-200 px-4 py-2 rounded-full">
                        Captured Moments
                    </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                     {galleryImages.map((num) => (
                        <div key={num} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl h-64 group relative cursor-pointer border border-gray-100 bg-gray-100">
                            <img 
                                src={`${publicUrl}udbhav/${num}.jpg`} 
                                alt={`Event Moment ${num}`} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                <div className="bg-white p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <ArrowRight className="w-6 h-6 text-primary" />
                                </div>
                            </div>
                        </div>
                     ))}
                </div>
             </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UdbhavPage;