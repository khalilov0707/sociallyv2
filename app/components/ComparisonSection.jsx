'use client';

import { motion } from 'framer-motion';

export default function ComparisonSection() {
  const comparisonData = [
    { feature: 'AI-Generated Posts', easyGen: true, sociallyAI: true },
    { feature: 'Autonomous Posting', easyGen: false, sociallyAI: true },
    { feature: 'Auto-Commenting & Replies', easyGen: false, sociallyAI: true },
    { feature: 'Engagement with Network', easyGen: false, sociallyAI: true },
    { feature: 'Customization Options', easyGen: 'Limited', sociallyAI: 'Extensive' },
    { feature: 'AI-Based Personalization', easyGen: true, sociallyAI: true },
    { feature: 'Competitive Pricing', easyGen: false, sociallyAI: true },
  ];

  return (
    <section id="comparison" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-accent/10 text-accent rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Competitive Edge
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How We Compare to EasyGen
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our automation tool not only competes with EasyGen but surpasses it by offering a truly hands-off approach to LinkedIn growth.
          </motion.p>
        </div>
        
        <motion.div 
          className="mb-16 overflow-hidden rounded-xl border border-gray-200 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="sticky top-0 bg-gradient-to-r from-primary to-primary/90 text-white z-10">
              <div className="grid grid-cols-3 p-6">
                <div className="text-left font-bold">Feature</div>
                <div className="text-center font-bold">EasyGen</div>
                <div className="text-center font-bold">SociallyAI</div>
              </div>
            </div>
            
            {comparisonData.map((item, index) => (
              <motion.div 
                key={index}
                className={`grid grid-cols-3 p-6 items-center ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="text-left font-medium">{item.feature}</div>
                <div className="text-center">
                  {typeof item.easyGen === 'boolean' ? (
                    item.easyGen ? 
                      <span className="inline-block w-6 h-6 rounded-full bg-green-100 text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span> : 
                      <span className="inline-block w-6 h-6 rounded-full bg-red-100 text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                  ) : (
                    <span className="text-sm text-gray-600">{item.easyGen}</span>
                  )}
                </div>
                <div className="text-center">
                  {typeof item.sociallyAI === 'boolean' ? (
                    item.sociallyAI ? 
                      <span className="inline-block w-6 h-6 rounded-full bg-green-100 text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span> : 
                      <span className="inline-block w-6 h-6 rounded-full bg-red-100 text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                  ) : (
                    <span className="text-sm font-medium text-accent">{item.sociallyAI}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">SociallyAI's Unique Value</h3>
              <p className="text-gray-600 mb-6">
                While EasyGen and other tools focus solely on content creation, SociallyAI delivers a complete hands-off LinkedIn growth solution.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Create, post, and engage - all without lifting a finger</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Maintain relationships with your network through AI-powered engagements</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Track your growth with detailed analytics and optimization suggestions</p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold">Total Automation, Zero Effort</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  SociallyAI handles your entire LinkedIn presence with zero effort on your part, unlike other tools that still require you to manually post content and engage with connections.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Time saved per week</span>
                    <span className="text-sm font-semibold">8+ hours</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 