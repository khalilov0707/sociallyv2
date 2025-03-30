'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SignupSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would send the email to the server
      console.log('Email submitted:', email);
      setSubmitted(true);
      setEmail('');
      
      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="signup" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold mb-4">Get Started with SociallyAI</h2>
                  <p className="text-gray-600 mb-8">
                    Join thousands of professionals who have revolutionized their LinkedIn presence with our AI-powered automation.
                  </p>
                  
                  {submitted ? (
                    <motion.div 
                      className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Thank you! Check your email for next steps.</span>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mb-6">
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Work Email</label>
                        <input
                          type="email"
                          id="email"
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-accent text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        Start Free Trial
                      </button>
                    </form>
                  )}
                  
                  <div className="text-sm text-gray-500">
                    <p className="mb-1">✓ 7-day free trial, no credit card required</p>
                    <p className="mb-1">✓ Full access to all features</p>
                    <p>✓ No obligation to continue after trial</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="relative bg-gradient-to-br from-primary to-accent p-8 md:p-12 text-white flex flex-col justify-center overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-bold mb-6">What Our Users Say</h3>
                  
                  <div className="space-y-6">
                    <motion.div 
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <p className="text-white/90 mb-3">
                        "SociallyAI has completely transformed my LinkedIn game. I'm getting more connections and leads without spending hours on the platform."
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-white/20 rounded-full"></div>
                        <div>
                          <div className="font-medium">Michael Townsend</div>
                          <div className="text-xs text-white/70">Marketing Director</div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      <p className="text-white/90 mb-3">
                        "As a startup founder, I don't have time to manage social media. SociallyAI keeps my LinkedIn presence active and engaging without my input."
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-white/20 rounded-full"></div>
                        <div>
                          <div className="font-medium">Jessica Chen</div>
                          <div className="text-xs text-white/70">CEO, InnovateTech</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="mt-8 flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 bg-white/20 rounded-full border-2 border-accent"></div>
                      <div className="h-8 w-8 bg-white/20 rounded-full border-2 border-accent"></div>
                      <div className="h-8 w-8 bg-white/20 rounded-full border-2 border-accent"></div>
                      <div className="h-8 w-8 bg-white/20 rounded-full border-2 border-accent"></div>
                    </div>
                    <div className="text-sm">Joined by 2000+ professionals</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 