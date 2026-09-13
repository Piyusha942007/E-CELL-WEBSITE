import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Rocket, Bell, Sparkles, Clock, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';

const ComingSoonPage = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 8,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const upcomingFeatures = [
    {
      icon: <Rocket className="w-6 h-6 text-accent" />,
      title: "Startup Incubation Portal",
      description: "Direct access to seed funding, workspace reservation, and mentorship tracks for student founders.",
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Investor Connect Platform",
      description: "Seamless match-making network linking high-potential E-Cell startups with angel investors.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: "E-Cell Member Portal",
      description: "Centralized dashboard for event registrations, certificate generation, and project collaboration.",
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-secondary flex flex-col justify-between">
      <Navbar />

      <main className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28 flex-grow">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-accent/15 rounded-full blur-[100px]" />
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex justify-center mb-8">
              <Link
                to="/"
                className="inline-flex items-center text-secondary hover:text-primary transition-colors border border-gray-200 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm font-medium shadow-sm hover:shadow-md"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
              </Link>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-accent border border-blue-200/60 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Something Amazing Is In The Works</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-primary tracking-tight leading-tight mb-6">
                We're Building The Future of <span className="text-accent">Innovation</span>
              </h1>

              <p className="text-lg md:text-xl text-secondary font-light leading-relaxed mb-12">
                Our team is working tirelessly to launch new features for PCCOER E-Cell. Stay tuned for launch updates and exclusive previews!
              </p>

              {/* Countdown Timer */}
              <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-xl mx-auto mb-14">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-surface border border-gray-100 p-3 sm:p-5 rounded-2xl shadow-card flex flex-col items-center justify-center hover:border-accent/30 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="text-2xl sm:text-4xl font-extrabold text-primary font-heading">
                      {String(item.value).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs text-secondary/70 uppercase tracking-widest font-semibold mt-1">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Email Notification Form */}
              <div className="max-w-md mx-auto mb-16">
                {subscribed ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl flex items-center justify-center gap-3 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-semibold">Thank you! We'll notify you as soon as we launch.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-grow">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address..."
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm text-primary placeholder-gray-400 shadow-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm flex-shrink-0"
                    >
                      <Bell className="w-4 h-4" /> Notify Me
                    </button>
                  </form>
                )}
                <p className="text-xs text-gray-400 mt-2">No spam, ever. Only major update notifications.</p>
              </div>
            </div>
          </FadeIn>

          {/* Upcoming Features Teaser Grid */}
          <div className="mt-12 pt-12 border-t border-gray-100">
            <FadeIn delay={0.2}>
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-primary">What To Expect Next</h2>
                <p className="text-sm text-secondary mt-1">Here is a sneak peek at what we're preparing for you.</p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingFeatures.map((feature, idx) => (
                <FadeIn key={idx} delay={0.3 + idx * 0.1}>
                  <div className="bg-surface p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-card group">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                    <p className="text-sm text-secondary leading-relaxed">{feature.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoonPage;
