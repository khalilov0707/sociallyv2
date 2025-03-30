'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const pricingPlans = [
    {
      name: 'Basic',
      description: 'Perfect for individuals and professionals just getting started.',
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        'AI Content Generation',
        'Semi-Autonomous Posting',
        'Basic Comment Automation',
        'Up to 3 posts per week',
        'Email Support',
      ],
      isPopular: false,
      color: 'primary',
    },
    {
      name: 'Professional',
      description: 'Ideal for active LinkedIn users and small business owners.',
      monthlyPrice: 59,
      annualPrice: 49,
      features: [
        'Everything in Basic',
        'Full Autonomous Posting',
        'Advanced Comment Automation',
        'Up to 7 posts per week',
        'Network Growth Features',
        'Analytics Dashboard',
        'Priority Support',
      ],
      isPopular: true,
      color: 'accent',
    },
    {
      name: 'Business',
      description: 'For agencies and businesses managing multiple LinkedIn accounts.',
      monthlyPrice: 119,
      annualPrice: 99,
      features: [
        'Everything in Professional',
        'Manage up to 5 LinkedIn Accounts',
        'Unlimited posts per week',
        'Custom AI Training',
        'Team Collaboration Features',
        'API Access',
        'Dedicated Account Manager',
      ],
      isPopular: false,
      color: 'primary',
    }
  ];

  return (
    <section id="pricing" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Pricing Plans
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose the Perfect Plan for You
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Flexible pricing options to match your LinkedIn automation needs. Save 20% with annual billing.
          </motion.p>
          
          <motion.div 
            className="inline-flex items-center p-1 bg-gray-100 rounded-full mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              className={`py-2 px-4 rounded-full transition-all ${
                !isAnnual ? 'bg-white shadow-md text-dark' : 'text-gray-600'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`py-2 px-4 rounded-full transition-all ${
                isAnnual ? 'bg-white shadow-md text-dark' : 'text-gray-600'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual <span className="text-xs text-accent">Save 20%</span>
            </button>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-xl overflow-hidden border ${
                plan.isPopular ? 'border-accent' : 'border-gray-200'
              } shadow-lg relative`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-accent text-white text-xs font-semibold py-1 px-3 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`p-6 ${plan.isPopular ? 'bg-accent/5' : 'bg-white'}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500">/month</span>
                  
                  {isAnnual && (
                    <div className="text-sm text-accent mt-1">
                      Billed annually (${plan.annualPrice * 12}/year)
                    </div>
                  )}
                </div>
                
                <a 
                  href="#signup" 
                  className={`block w-full py-3 px-4 rounded-lg text-center font-medium transition-all duration-300 ${
                    plan.isPopular 
                      ? 'bg-accent text-white hover:bg-accent/90' 
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  Get Started
                </a>
              </div>
              
              <div className="p-6 bg-white border-t border-gray-100">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`h-6 w-6 rounded-full bg-${plan.color}/10 flex items-center justify-center text-${plan.color} mt-0.5`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Enterprise Solutions</h3>
              <p className="text-gray-600 mb-6">
                Need a custom solution for your team or enterprise? Get in touch with us for a tailored plan that fits your specific LinkedIn growth needs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Custom AI training for industry-specific content</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Advanced analytics and reporting</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Dedicated success manager</span>
                </li>
              </ul>
              <a href="#contact" className="btn-primary">Contact Sales</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-4">Frequently Asked Questions</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold mb-2">Do you offer a free trial?</h5>
                  <p className="text-gray-600 text-sm">Yes, we offer a 7-day free trial on all plans. No credit card required to get started.</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Can I change plans later?</h5>
                  <p className="text-gray-600 text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Is there a refund policy?</h5>
                  <p className="text-gray-600 text-sm">We offer a 30-day money-back guarantee if you're not satisfied with our service.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 