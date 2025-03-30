'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
      title: 'For Business Owners & Entrepreneurs',
      description: 'Maintain a strong LinkedIn presence without investing hours into content creation and engagement, growing your professional network on autopilot.',
      color: 'primary',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
        </svg>
      ),
      title: 'For Content Marketers',
      description: 'Leverage AI-driven automation to enhance audience engagement and lead generation, ensuring your brand maintains a consistent and engaging voice.',
      color: 'secondary',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      title: 'For Job Seekers & Professionals',
      description: 'Establish thought leadership by consistently sharing insightful content and networking effectively, keeping your profile active during job searches.',
      color: 'accent',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      ),
      title: 'For Agencies & Consultants',
      description: 'Scale LinkedIn management for multiple clients effortlessly, offering competitive LinkedIn growth services without increasing your workload.',
      color: 'primary',
    }
  ];
  
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="benefits" className="section bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-accent/10 text-accent rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Key Benefits & Use Cases
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Who Benefits from SociallyAI?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our tool is designed to help professionals from all backgrounds enhance their LinkedIn presence with minimal effort.
          </motion.p>
        </div>
        
        <div 
          ref={ref}
          className="grid md:grid-cols-2 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="card group overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`relative z-10 h-full`}>
                <div className={`mb-6 p-4 inline-block rounded-lg bg-${benefit.color}/10 text-${benefit.color}`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a href="#signup" className={`text-${benefit.color} font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300`}>
                    <span>Learn More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-${benefit.color}/5 rounded-full -mr-12 -mt-12 z-0`}></div>
              <div className={`absolute bottom-0 left-0 w-16 h-16 bg-${benefit.color}/5 rounded-full -ml-8 -mb-8 z-0`}></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">SociallyAI Success Story</h3>
              <p className="text-gray-600 mb-6">
                "After using SociallyAI for just 3 months, I've seen my LinkedIn engagement increase by 400%. The tool has helped me establish thought leadership in my industry while I focus on running my business."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">Founder & CEO, TechGrowth</div>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">400%</div>
                  <div className="text-sm text-gray-500">Engagement</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">3X</div>
                  <div className="text-sm text-gray-500">Connection Growth</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-gray-500">New Clients</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-accent text-white p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Common Concerns & Our Solutions</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white/90 mb-2">AI Authenticity</h4>
                  <p className="text-white/80">Our advanced NLP algorithms ensure responses sound natural and align with your unique voice and style.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white/90 mb-2">LinkedIn Algorithm Adaptation</h4>
                  <p className="text-white/80">Regular updates keep the tool optimized for LinkedIn's evolving engagement metrics and requirements.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white/90 mb-2">Over-Automation Risk</h4>
                  <p className="text-white/80">Customization options allow you to control how much autonomy the AI has, ensuring a balance between automation and human touch.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 