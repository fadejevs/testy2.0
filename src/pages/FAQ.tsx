
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 pb-24 hero-gradient">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10">
              Everything you need to know about Testy and how it can help your business.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">General Questions</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What is Testy?</h3>
                    <p className="text-slate-600">
                      Testy is a SaaS platform that uses AI to transform brief client feedback into detailed, compelling testimonials that help businesses convert more prospects into customers.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How does Testy work?</h3>
                    <p className="text-slate-600">
                      Our process is simple: you input your client's original feedback (even if it's brief), our AI enhances it into a detailed testimonial, and then your client approves it with one click. Once approved, you can use the testimonial anywhere.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Is Testy right for my business?</h3>
                    <p className="text-slate-600">
                      If you collect client testimonials and want to make them more impactful, Testy is perfect for you. It's especially valuable for service businesses, consultants, agencies, coaches, and SaaS companies that rely on social proof.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What makes Testy different from other testimonial tools?</h3>
                    <p className="text-slate-600">
                      While many tools help you collect and display testimonials, Testy specializes in actually improving the quality and persuasiveness of those testimonials using AI, while maintaining authenticity through client approval.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Using Testy</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Is my client's approval required?</h3>
                    <p className="text-slate-600">
                      Yes, we believe in authenticity. All enhanced testimonials require approval from your client before they're finalized, maintaining trust and credibility.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How do I collect testimonials from my clients?</h3>
                    <p className="text-slate-600">
                      Testy provides a simple link you can send to clients, or you can manually input feedback you've already received through other channels like emails, messages, or verbal feedback.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Can I customize the tone of the enhanced testimonials?</h3>
                    <p className="text-slate-600">
                      Absolutely! Premium users can define a custom brand voice or tone to ensure all testimonials match their company's style and values.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How many testimonials can I create?</h3>
                    <p className="text-slate-600">
                      Free accounts can create up to 5 enhanced testimonials per month. Premium and Lifetime accounts can create unlimited testimonials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Pricing & Billing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
                      <p className="text-slate-600">
                        We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. All payments are processed securely through Stripe.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Can I change plans at any time?</h3>
                      <p className="text-slate-600">
                        Yes, you can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at the end of your current billing cycle.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">How does the Lifetime deal work?</h3>
                      <p className="text-slate-600">
                        Our special early-bird Lifetime deal gives you permanent access to all Premium features plus exclusive Lifetime benefits for a one-time payment of $49. This offer is limited and may end at any time.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Do you offer refunds?</h3>
                      <p className="text-slate-600">
                        Yes, we offer a 14-day money-back guarantee for all paid plans. If you're not satisfied with our service, contact our support team within 14 days of purchase for a full refund.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Technical Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Is my data secure with Testy?</h3>
                      <p className="text-slate-600">
                        Yes, we take data security very seriously. All data is encrypted in transit and at rest. We never share your data with third parties without your explicit consent.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Can I integrate Testy with my website?</h3>
                      <p className="text-slate-600">
                        Yes, Testy provides several ways to integrate your testimonials with your website, including embed codes, direct exports, and API access (for Premium users).
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Does Testy work with my CRM?</h3>
                      <p className="text-slate-600">
                        Testy currently offers direct integrations with major platforms like HubSpot, Salesforce, and WordPress. We're constantly adding new integrations based on user demand.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">What if I need help using Testy?</h3>
                      <p className="text-slate-600">
                        We provide comprehensive documentation and video tutorials. Premium users get priority support via email and chat. Our customer success team is available to help you get the most out of Testy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
            <p className="text-lg text-slate-600 mb-10">
              Our support team is ready to help you with anything you need.
            </p>
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-8 py-6 button-gradient text-lg">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
