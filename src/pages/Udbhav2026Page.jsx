import React from 'react';
import { ArrowLeft, ExternalLink, Trophy, Calendar, Lightbulb, Rocket, CheckCircle2, Layers, Clock, FileText, Video, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';

const Udbhav2026Page = () => {
  const publicUrl = import.meta.env.BASE_URL;
  const unstopUrl = "https://unstop.com/hackathons/udbhav26-idea-build-pitch-pimpri-chinchwad-college-of-engineering-research-1749090";

  return (
    <div className="bg-white min-h-screen font-sans text-secondary flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <div className="relative w-full bg-primary pt-28 pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors border border-white/20 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm text-sm font-medium hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>

          <FadeIn>
            {/* Banner Container */}
            <div className="w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 mb-10 group">
              <img 
                src={`${publicUrl}udbhav/udbhav26-banner.png`} 
                alt="UDBHAV '26 Banner" 
                className="w-full h-auto object-cover max-h-[480px] w-full mx-auto"
              />
            </div>

            {/* Header Content */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block bg-accent/20 border border-accent text-accent font-extrabold text-xs md:text-sm px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                Open Innovation • Hosted on Unstop
              </div>
              <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white mb-4 tracking-tight">
                UDBHAV '26
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light mb-8">
                IDEA • BUILD • PITCH
              </p>

              {/* Stats Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl">
                  <Trophy className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                  <p className="text-2xl font-bold text-white">₹16,000</p>
                  <p className="text-[11px] text-blue-200 uppercase font-semibold">Prize Pool</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl">
                  <Calendar className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                  <p className="text-lg font-bold text-white">Sept 29, 2026</p>
                  <p className="text-[11px] text-blue-200 uppercase font-semibold">Offline Finals</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl">
                  <Layers className="w-6 h-6 text-emerald-400 mx-auto mb-1" />
                  <p className="text-2xl font-bold text-white">2 Rounds</p>
                  <p className="text-[11px] text-blue-200 uppercase font-semibold">Competition Format</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl">
                  <MapPin className="w-6 h-6 text-red-400 mx-auto mb-1" />
                  <p className="text-lg font-bold text-white">PCCOER</p>
                  <p className="text-[11px] text-blue-200 uppercase font-semibold">Venue (Pune)</p>
                </div>
              </div>

              {/* Primary CTA */}
              <a
                href={unstopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-accent/40 transition-all transform hover:-translate-y-0.5 text-base md:text-lg gap-3"
              >
                <span>Register on Unstop</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* DETAILS & ROUNDS SECTION */}
      <section className="py-16 md:py-20 bg-white flex-grow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* About Event */}
          <FadeIn>
            <div className="mb-16 text-center md:text-left">
              <span className="text-accent font-semibold tracking-wider uppercase text-xs">
                About The Event
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
                Turn Ideas into Working Startups
              </h2>
              <p className="text-secondary text-base md:text-lg leading-relaxed max-w-3xl">
                <strong className="text-primary">Udbhav '26</strong> is PCCOER E-Cell's flagship startup competition where student innovators identify real-world problems under <span className="text-primary font-semibold">Open Innovation</span>, build working MVP solutions, and present in front of investor-style judges.
              </p>
            </div>
          </FadeIn>

          {/* TWO ROUNDS DETAILED BREAKDOWN */}
          <FadeIn delay={0.1}>
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center md:text-left flex items-center gap-3">
                <Layers className="w-7 h-7 text-accent" />
                <span>Round-by-Round Breakdown</span>
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                
                {/* ROUND 1 */}
                <div className="bg-surface rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all relative flex flex-col justify-between">
                  <div className="absolute top-0 right-0 bg-blue-100 text-accent font-extrabold text-xs px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider flex items-center gap-1">
                    <span>On</span>
                    <span className="font-bold text-blue-900">unstop</span>
                  </div>

                  <div>
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-accent">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    
                    <span className="text-accent text-xs font-bold uppercase tracking-wider">Online Round</span>
                    <h4 className="text-2xl font-bold text-primary mt-1 mb-4">
                      Round 1 – Idea + Build: Idea Deck & MVP Demonstration
                    </h4>
                    
                    <p className="text-secondary text-sm leading-relaxed mb-6">
                      Identify a <strong>real-world problem</strong> and propose an innovative startup solution under <strong>Open Innovation</strong>.
                    </p>

                    <div className="space-y-3 mb-6 bg-white p-4 rounded-2xl border border-gray-100">
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-secondary leading-normal">
                          <strong className="text-primary">7-Slide Idea Deck:</strong> Covering problem, solution, research, technology, target customers, business model, and scalability.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Video className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-secondary leading-normal">
                          <strong className="text-primary">2–3 Minute MVP Video:</strong> Demonstrating working solution & key features (60–70% focus on MVP).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200/70 pt-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-2">
                      <Award className="w-4 h-4 text-emerald-500" />
                      <span><strong>Evaluation:</strong> Validation, Innovation, MVP, USP, Feasibility, UX & Business Potential.</span>
                    </div>
                    <p className="text-[11px] text-accent font-bold">
                      Shortlisted teams advance to Round 2 — SHARK TANK!
                    </p>
                  </div>
                </div>

                {/* ROUND 2 */}
                <div className="bg-surface rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all relative flex flex-col justify-between">
                  <div className="absolute top-0 right-0 bg-accent text-white font-extrabold text-xs px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                    Final Round
                  </div>

                  <div>
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-accent">
                      <Rocket className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold text-accent mb-1">
                      <Clock className="w-4 h-4" />
                      <span>29 Sep 2026, 09:00 AM – 06:00 PM IST</span>
                    </div>

                    <h4 className="text-2xl font-bold text-primary mb-4">
                      Shark Tank – Final Round
                    </h4>

                    <p className="text-secondary text-sm leading-relaxed mb-6">
                      Shortlisted teams attend the offline Final Round at <strong>PCCOER, Pune</strong> for an MVP showcase, pitch, and Q&A.
                    </p>

                    <div className="space-y-3 mb-6 bg-white p-4 rounded-2xl border border-gray-100">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-secondary leading-normal">
                          <strong className="text-primary">7-Minute Time Slot:</strong> Each finalist gets 7 minutes for an MVP showcase, investor-style pitch, and judge Q&A.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-secondary leading-normal">
                          <strong className="text-primary">Pitch Focus:</strong> Demonstrate working MVP, business potential, USP, scalability, competition, revenue model & financials.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200/70 pt-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span><strong>Venue:</strong> PCCOER Campus, Ravet, Pune</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Udbhav2026Page;
