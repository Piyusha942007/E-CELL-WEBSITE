import React from 'react';
import { Calendar, MapPin, Clock, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const IdeathonPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-primary pt-32 pb-16 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <Link to="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <h1 className="text-5xl font-bold font-heading mb-4">Ideathon 2025</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            The ultimate 48-hour innovation challenge. Pitch your idea, build a prototype, and win seed funding.
          </p>
        </div>
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column: Event Details */}
            <div className="lg:col-span-2 space-y-12">
                <section>
                    <h2 className="text-2xl font-bold text-primary mb-4">About the Event</h2>
                    <p className="text-secondary leading-relaxed text-lg">
                        Ideathon 2025 is PCCOER's flagship problem-solving competition. We invite students from all engineering disciplines to come together, form teams, and solve real-world problems using technology. Whether you have a raw idea or a working prototype, this is your platform.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-primary mb-4">Themes & Tracks</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {['Smart City Solutions', 'AgriTech & Sustainability', 'FinTech for Bharat', 'Healthcare Innovation'].map((item) => (
                            <div key={item} className="flex items-center p-4 bg-surface rounded-lg">
                                <CheckCircle className="w-5 h-5 text-accent mr-3" />
                                <span className="font-semibold text-primary">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-primary mb-4">Schedule</h2>
                    <div className="border-l-2 border-gray-200 pl-8 space-y-8 relative">
                        <div className="relative">
                            <span className="absolute -left-[39px] bg-accent w-5 h-5 rounded-full border-4 border-white"></span>
                            <h3 className="font-bold text-lg text-primary">Day 1: The Pitch</h3>
                            <p className="text-secondary">Nov 15, 09:00 AM - Idea validation and team formation.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[39px] bg-gray-300 w-5 h-5 rounded-full border-4 border-white"></span>
                            <h3 className="font-bold text-lg text-primary">Day 2: The Build</h3>
                            <p className="text-secondary">Nov 16, 10:00 AM - Prototyping and mentorship rounds.</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Right Column: Registration Card (Sticky) */}
            <div className="lg:col-span-1">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-card sticky top-24">
                    <div className="text-center mb-6">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase mb-2">Registration Open</span>
                        <h3 className="text-3xl font-bold text-primary">Free</h3>
                        <p className="text-sm text-gray-500">Open for all PCCOER Students</p>
                    </div>

                    <div className="space-y-4 mb-8">
                        <div className="flex items-center text-secondary">
                            <Calendar className="w-5 h-5 mr-3 text-accent" />
                            <span>Nov 15-16, 2025</span>
                        </div>
                        <div className="flex items-center text-secondary">
                            <Clock className="w-5 h-5 mr-3 text-accent" />
                            <span>48 Hours Non-stop</span>
                        </div>
                        <div className="flex items-center text-secondary">
                            <MapPin className="w-5 h-5 mr-3 text-accent" />
                            <span>Innovation Lab, Bldg A</span>
                        </div>
                    </div>

                    <button className="w-full py-4 bg-accent text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl mb-4">
                        Register Now
                    </button>
                    <p className="text-xs text-center text-gray-400">Limited seats available. First come first serve.</p>
                </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IdeathonPage;