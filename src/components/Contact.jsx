import React, { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import FadeIn from './FadeIn';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // null | 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // ---------------------------------------------------------
    // REPLACE THESE WITH YOUR ACTUAL KEYS FROM EMAILJS DASHBOARD
    // ---------------------------------------------------------
    const SERVICE_ID = 'service_xyz'; // Example: service_82648
    const TEMPLATE_ID = 'template_xyz'; // Example: template_8473
    const PUBLIC_KEY = 'public_key_xyz'; // Example: user_827482
    // ---------------------------------------------------------

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setIsSubmitting(false);
          setStatus('success');
          form.current.reset(); // Clear form
          setTimeout(() => setStatus(null), 5000); // Hide success msg after 5s
        },
        (error) => {
          console.error('FAILED...', error.text);
          setIsSubmitting(false);
          setStatus('error');
        },
      );
  };

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
                  <p className="text-secondary text-sm mb-2">For general inquiries.</p>
                  <a href="mailto:piyushaamrutkar007@gmail.com" className="text-accent font-semibold hover:underline">
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
                    PCCOER Campus, Ravet,<br/> 
                    Pune - 412101
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: The Functional Form */}
          <FadeIn delay={0.5}>
            <form ref={form} onSubmit={sendEmail} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative">
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">First Name</label>
                    <input 
                      type="text" 
                      name="first_name" // Required for EmailJS
                      required
                      placeholder="Your First Name" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Last Name</label>
                    <input 
                      type="text" 
                      name="last_name" // Required for EmailJS
                      placeholder="Your Last Name" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="user_email" // Required for EmailJS
                    required
                    placeholder="you@example.com" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Message</label>
                  <textarea 
                    name="message" // Required for EmailJS
                    required
                    rows="4" 
                    placeholder="Tell us about your query..." 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none placeholder:text-gray-400"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center shadow-lg transform 
                    ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-accent hover:-translate-y-1 hover:shadow-xl'}
                  `}
                >
                  {isSubmitting ? (
                    <>Sending... <Loader2 className="w-5 h-5 ml-2 animate-spin" /></>
                  ) : (
                    <>Send Message <Send className="w-5 h-5 ml-2" /></>
                  )}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="flex items-center justify-center p-3 mt-4 bg-green-100 text-green-700 rounded-lg">
                    <CheckCircle className="w-5 h-5 mr-2" /> Message Sent Successfully!
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center justify-center p-3 mt-4 bg-red-100 text-red-700 rounded-lg">
                    <AlertCircle className="w-5 h-5 mr-2" /> Failed to send. Try again.
                  </div>
                )}

              </div>
            </form>
          </FadeIn>

        </div>
      </div>
      
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Contact;