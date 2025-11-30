import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import FadeIn from './FadeIn';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Connect With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
              Let's Build Something Together
            </h2>
            <p className="text-secondary mt-4 max-w-2xl mx-auto">
              Whether you are a student with an idea, an investor looking for the next unicorn, 
              or a mentor wanting to give back—we want to hear from you.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT: Contact Info Cards */}
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
                <div className="bg-blue-50 p-3 rounded-lg mr-4 text-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-1">Email Us</h4>
                  <p className="text-secondary text-sm mb-2">For general inquiries and sponsorship.</p>
                  <a href="mailto:ecell@pccoer.in" className="text-accent font-semibold hover:underline">
                    ecell@pccoer.in
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
                <div className="bg-green-50 p-3 rounded-lg mr-4 text-green-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-1">Call Us</h4>
                  <p className="text-secondary text-sm mb-2">Mon-Fri from 9am to 5pm.</p>
                  <a href="tel:+912012345678" className="text-primary font-semibold hover:text-accent transition-colors">
                    +91 20 1234 5678
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
                <div className="bg-purple-50 p-3 rounded-lg mr-4 text-purple-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-1">Visit Us</h4>
                  <p className="text-secondary text-sm">
                    PCCOER Campus, Plot No. B, Sector No. 110,<br/>
                    Gate No.1, Laxminagar, Ravet,<br/> 
                    Pune - 412101
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: The Professional Form */}
          <FadeIn delay={0.5}>
            <form className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <div className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">First Name</label>
                    <input 
                      type="text" 
                      placeholder="Your First Name" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Last Name" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="you@example.com" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us about your query..." 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none placeholder:text-gray-400"
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-accent transition-colors flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message <Send className="w-5 h-5 ml-2" />
                </button>

              </div>
            </form>
          </FadeIn>

        </div>
      </div>
      
      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Contact;