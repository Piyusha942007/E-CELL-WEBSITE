import React, { useState } from 'react';
import { ArrowLeft, Bell, CalendarClock, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';

const ComingSoonPage = () => {
  // 1. State for managing input and submission status
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  // PASTE YOUR GOOGLE SHEET WEB APP URL HERE
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwLVGKXSeQpu1H5gQZ2rUCqpcO2irTdBBhaFKfYR8WU4xmv2kAfaaLpjmLGZQ2t-JzQXA/exec'; 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!email) return;

    setStatus('loading');

    // Create form data to send to Google Sheets
    const formData = new FormData();
    formData.append('Email', email); // Must match the header name in your Google Sheet exactly
    formData.append('Date', new Date().toISOString());

    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setStatus('success');
          setEmail(''); // Clear input
        } else {
          setStatus('error');
        }
      })
      .catch((error) => {
        console.error('Error!', error.message);
        setStatus('error');
      });
  };

  return (
    <div className="min-h-screen bg-primary relative overflow-hidden flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center relative z-10 pt-24 pb-20 md:pt-32">
        <div className="max-w-4xl mx-auto px-4 text-center w-full">
          
          <Link to="/" className="inline-flex items-center text-blue-300 hover:text-white mb-8 md:mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>

          <FadeIn>
            <div className="inline-block px-4 py-2 rounded-full bg-accent/20 border border-accent text-accent font-bold text-xs md:text-sm mb-6 md:mb-8 animate-pulse">
              Future Frontiers
            </div>

            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 font-heading tracking-tight leading-tight">
              Something Amazing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                Is In The Works
              </span>
            </h1>

            <p className="text-base md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 md:mb-12 font-light leading-relaxed">
              We are curating an experience that will redefine student entrepreneurship. 
              The schedule and registration details will be released shortly.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex justify-center mb-12 md:mb-16">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 flex items-center space-x-4 backdrop-blur-sm w-full max-w-xs md:max-w-md mx-auto">
                <div className="p-3 bg-white/10 rounded-full">
                  <CalendarClock className="w-6 h-6 text-blue-300" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Event Date</p>
                  <p className="text-lg md:text-xl font-bold text-white">To Be Announced</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            {/* EMAIL FORM SECTION */}
            <form 
              onSubmit={handleSubmit}
              className="max-w-md mx-auto bg-white/5 border border-white/10 p-2 rounded-full flex flex-col sm:flex-row items-center shadow-2xl gap-2 sm:gap-0 relative"
            >
               <div className="hidden sm:flex w-10 h-10 rounded-full bg-accent items-center justify-center text-white flex-shrink-0">
                  <Bell className="w-5 h-5" />
               </div>
               
               <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for updates..." 
                  required
                  disabled={status === 'loading' || status === 'success'}
                  className="bg-transparent border-none outline-none text-white px-4 flex-grow placeholder-gray-400 w-full text-center sm:text-left py-2 sm:py-0 disabled:opacity-50"
               />
               
               <button 
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={`w-full sm:w-auto px-6 py-2 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2
                    ${status === 'success' 
                      ? 'bg-green-500 text-white cursor-default' 
                      : 'bg-white text-primary hover:bg-gray-100'
                    }
                  `}
               >
                  {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                  {status === 'success' && <><CheckCircle className="w-4 h-4" /> Added</>}
                  {status === 'error' && <><AlertCircle className="w-4 h-4" /> Retry</>}
                  {status === 'idle' && 'Notify Me'}
               </button>
            </form>

            {/* Status Messages */}
            <div className="h-6 mt-4">
              {status === 'success' && (
                <p className="text-green-400 text-xs md:text-sm animate-in fade-in slide-in-from-top-1">
                  You're on the list! We'll email you when registrations open.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-xs md:text-sm animate-in fade-in slide-in-from-top-1">
                  Something went wrong. Please try again.
                </p>
              )}
              {status === 'idle' && (
                <p className="text-blue-200/60 text-xs md:text-sm">
                  We promise not to spam. You'll only get one email when registrations open.
                </p>
              )}
            </div>
          </FadeIn>

        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]"></div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ComingSoonPage;