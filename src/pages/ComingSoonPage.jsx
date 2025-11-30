import React from 'react';
import { ArrowLeft, Bell, CalendarClock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen bg-primary relative overflow-hidden flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          
          <Link to="/" className="inline-flex items-center text-blue-300 hover:text-white mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>

          <FadeIn>
            <div className="inline-block px-4 py-2 rounded-full bg-accent/20 border border-accent text-accent font-bold text-sm mb-8 animate-pulse">
              Future Frontiers
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-heading tracking-tight">
              Something Amazing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                Is In The Works
              </span>
            </h1>

            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              We are curating an experience that will redefine student entrepreneurship. 
              The schedule and registration details will be released shortly.
            </p>
          </FadeIn>

          {/* Replaced Timer with "To Be Announced" Status */}
          <FadeIn delay={0.2}>
            <div className="flex justify-center mb-16">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center space-x-4 backdrop-blur-sm">
                <div className="p-3 bg-white/10 rounded-full">
                  <CalendarClock className="w-6 h-6 text-blue-300" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Event Date</p>
                  <p className="text-xl font-bold text-white">To Be Announced</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Notify Me Box */}
          <FadeIn delay={0.3}>
            <div className="max-w-md mx-auto bg-white/5 border border-white/10 p-2 rounded-full flex items-center shadow-2xl">
               <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white flex-shrink-0">
                  <Bell className="w-5 h-5" />
               </div>
               <input 
                  type="email" 
                  placeholder="Enter your email for updates..." 
                  className="bg-transparent border-none outline-none text-white px-4 flex-grow placeholder-gray-400"
               />
               <button className="px-6 py-2 bg-white text-primary rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
                  Notify Me
               </button>
            </div>
            <p className="text-blue-200/60 text-sm mt-4">
              We promise not to spam. You'll only get one email when registrations open.
            </p>
          </FadeIn>

        </div>
      </div>

      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]"></div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ComingSoonPage;