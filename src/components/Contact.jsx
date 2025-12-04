import React, { useState } from 'react';
import { Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import FadeIn from './FadeIn';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null); // 'success' or 'error'

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const formData = new FormData(event.target);

    // =========================================================
    // 👇 PASTE YOUR ACCESS KEY FROM WEB3FORMS HERE 👇
    // =========================================================
    formData.append("access_key", "8feadf34-8a1b-456a-adf4-5517f1bdde11"); 
    // =========================================================

    formData.append("subject", "New Inquiry from PCCOER Website"); // Custom Subject
    formData.append("from_name", "PCCOER E-Cell Website"); // Custom Sender Name

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult('success');
        event.target.reset(); // Clear the form
        setTimeout(() => setResult(null), 5000); // Hide success message after 5s
      } else {
        console.error("Error:", data);
        setResult('error');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setResult('error');
    } finally {
      setIsSubmitting(false);
    }
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
              We want to hear from you. Reach out for collaborations, incubation, or queries.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT: Contact Info Cards */}
          <div className="space-y-6 flex flex-col justify-center">
            <FadeIn delay={0.2}>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow">
                <div className="bg-blue-50 p-3 rounded-lg mr-4 text-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-1">Email Us</h4>
                  <p className="text-secondary text-sm mb-2">For general inquiries.</p>
                  <a href="mailto:ecell@pccoer.in" className="text-accent font-semibold hover:underline">
                    ecell@pccoer.in
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
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

          {/* RIGHT: The Live Form */}
          <FadeIn delay={0.4}>
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative">
              
              <form onSubmit={onSubmit} className="space-y-6">
                
                {/* Honeypot to prevent spam bots (Hidden) */}
                <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">First Name</label>
                    <input 
                      type="text" 
                      name="First Name" 
                      required
                      placeholder="First Name" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Last Name</label>
                    <input 
                      type="text" 
                      name="Last Name"
                      placeholder="Last Name" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    placeholder="you@example.com" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Message</label>
                  <textarea 
                    name="message" 
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

                {/* Success Message */}
                {result === 'success' && (
                  <div className="flex items-center justify-center p-4 mt-4 bg-green-50 text-green-700 rounded-xl border border-green-100 animate-in fade-in slide-in-from-bottom-2">
                    <CheckCircle className="w-5 h-5 mr-2" /> 
                    <span className="font-semibold">Message sent! We'll get back to you soon.</span>
                  </div>
                )}

                {/* Error Message */}
                {result === 'error' && (
                  <div className="flex items-center justify-center p-4 mt-4 bg-red-50 text-red-700 rounded-xl border border-red-100 animate-in fade-in slide-in-from-bottom-2">
                    <AlertCircle className="w-5 h-5 mr-2" /> 
                    <span className="font-semibold">Something went wrong. Please try again.</span>
                  </div>
                )}

              </form>
            </div>
          </FadeIn>

        </div>
      </div>
      
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Contact;