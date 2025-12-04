import React, { useState } from 'react';
import { Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle, Phone, ChevronDown } from 'lucide-react';

// Simple FadeIn Animation Component
const FadeIn = ({ children, delay = 0 }) => (
  <div 
    className="animate-fade-in-up opacity-0" 
    style={{ animationFillMode: 'forwards', animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null); // null | 'success' | 'error'

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const formData = new FormData(event.target);

    // =========================================================
    // SECURITY & CONFIGURATION
    // =========================================================
    formData.append("access_key", "f73f4eb0-2bf6-47ac-8886-fc6f830ded09"); 
    formData.append("from_name", "PCCOER Website Inquiry");
    // Subject is now handled dynamically by the Select input below
    // =========================================================

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult('success');
        event.target.reset(); // Clear form
        setTimeout(() => setResult(null), 5000); 
      } else {
        console.error("Web3Forms Error:", data);
        setResult('error');
      }
    } catch (error) {
      console.error("Network Error:", error);
      setResult('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 font-semibold text-xs tracking-wider uppercase mb-3">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Let's Start a Conversation
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
              Interested in incubation, partnerships, or just have a question? We are here to help.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <FadeIn delay={0.2}>
              <div className="prose text-slate-600 mb-8">
                <p>
                  Our team is dedicated to fostering innovation and entrepreneurship. Use the form to reach the specific department you need.
                </p>
              </div>

              {/* Info Card 1: Email */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start transition-all hover:shadow-md hover:border-blue-100 group">
                <div className="bg-blue-50 p-3 rounded-xl mr-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Email Us</h4>
                  <p className="text-slate-500 text-sm mb-2">For general inquiries & support</p>
                  <a href="mailto:ecell@pccoer.in" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                    ecell@pccoer.in
                  </a>
                </div>
              </div>

              {/* Info Card 2: Location */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start transition-all hover:shadow-md hover:border-purple-100 group">
                <div className="bg-purple-50 p-3 rounded-xl mr-4 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Visit Campus</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    PCCOER Campus, Ravet,<br/> 
                    Pune, Maharashtra - 412101
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: The Secure Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.4}>
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
                
                {/* Decorative Top Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

                <form onSubmit={onSubmit} className="space-y-6">
                  
                  {/* --- SECURITY: Honeypot Field (Hidden) --- */}
                  {/* This field must remain hidden. Bots will fill it, humans won't. Web3Forms detects this. */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name
                      </label>
                      <input 
                        id="name"
                        type="text" 
                        name="name" 
                        required
                        placeholder="Enter your full name" 
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>

                    {/* Phone Field (New) */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                        Phone Number <span className="text-slate-400 font-normal text-xs ml-1">(Optional)</span>
                      </label>
                      <input 
                        id="phone"
                        type="tel" 
                        name="phone" 
                        placeholder="+91 00000 00000" 
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address
                      </label>
                      <input 
                        id="email"
                        type="email" 
                        name="email" 
                        required
                        placeholder="name@organization.com" 
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>

                    {/* Inquiry Type (New) */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                        Inquiry Type
                      </label>
                      <div className="relative">
                        <select 
                          id="subject"
                          name="subject" 
                          required
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Incubation Support">Incubation Support</option>
                          <option value="Partnership Proposal">Partnership Proposal</option>
                          <option value="Event Collaboration">Event Collaboration</option>
                          <option value="Technical Issue">Technical Issue</option>
                        </select>
                        <ChevronDown className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Your Message
                    </label>
                    <textarea 
                      id="message"
                      name="message" 
                      required
                      minLength={10}
                      rows="5" 
                      placeholder="Please describe your requirements or query in detail..." 
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none placeholder:text-slate-400"
                    ></textarea>
                    <p className="text-right text-xs text-slate-400 mt-1">Minimum 10 characters</p>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-bold text-lg text-white transition-all flex items-center justify-center shadow-lg hover:shadow-blue-500/25 active:scale-[0.98]
                      ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:to-blue-600'}
                    `}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message 
                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {result === 'success' && (
                    <div className="flex items-center p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 animate-in fade-in slide-in-from-bottom-2">
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" /> 
                      <p className="text-sm font-medium">Thank you! Your message has been sent successfully.</p>
                    </div>
                  )}

                  {result === 'error' && (
                    <div className="flex items-center p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 animate-in fade-in slide-in-from-bottom-2">
                      <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" /> 
                      <p className="text-sm font-medium">Something went wrong. Please check your connection and try again.</p>
                    </div>
                  )}

                </form>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>

      {/* Tailwind Custom Animation (Injecting style for FadeIn if not present in tailwind.config) */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Contact;