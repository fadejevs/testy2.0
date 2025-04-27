
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';
import PricingCard from '@/components/PricingCard';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 pb-24 hero-gradient">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Turn weak feedback into <span className="gradient-text">testimonials that sell</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10">
              83% of prospects trust detailed testimonials. But your clients give you one-liners. 
              We fix that gap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="rounded-full px-8 py-6 button-gradient text-lg">
                  Try It Free
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg">
                  How It Works
                </Button>
              </Link>
            </div>
            <p className="text-sm text-slate-500 mt-4">No credit card required</p>
          </div>
        </div>
      </section>
      
      {/* Example Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Try It Yourself</h2>
              <p className="text-lg text-slate-600">See how Testy transforms basic feedback into powerful testimonials.</p>
            </div>
            
            <TestimonialCard
              originalText="Thank you for your help with my business!"
              enhancedText="I can't express enough gratitude for the incredible support provided to my business. The strategic guidance and practical solutions have significantly streamlined our operations, resulting in a 30% increase in productivity. What's most impressive is the personalized approach and dedication to understanding my specific business challenges. This partnership has truly been transformative, and I'm excited to continue growing with such exceptional support!"
              clientName="Sarah Johnson"
              clientPosition="CEO"
              clientCompany="Bright Ideas Marketing"
              verified={true}
            />
            
            <div className="mt-12 text-center">
              <Link to="/signup">
                <Button size="lg" className="rounded-full px-8 py-6 button-gradient">
                  Try It Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-slate-600">Three simple steps to transform vague feedback into compelling testimonials.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-soft border border-slate-100">
              <div className="bg-testy-purple/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <span className="text-2xl font-bold text-testy-purple">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Input</h3>
              <p className="text-slate-600">Enter your client's original feedback, even if it's brief or vague.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-soft border border-slate-100">
              <div className="bg-testy-purple/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <span className="text-2xl font-bold text-testy-purple">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Enhance</h3>
              <p className="text-slate-600">Our AI transforms the feedback into a compelling, detailed testimonial.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-soft border border-slate-100">
              <div className="bg-testy-purple/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <span className="text-2xl font-bold text-testy-purple">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Verify</h3>
              <p className="text-slate-600">Your client approves the enhanced version with one click.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Showcase Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Showcase Your Testimonials</h2>
            <p className="text-lg text-slate-600">Testy transforms basic client feedback into professional testimonials ready for any platform.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <TestimonialCard
              originalText="Good product, helped us a lot."
              enhancedText="The product has been instrumental in transforming our workflow efficiency. Since implementation, we've seen a 40% reduction in processing time and significantly improved team collaboration."
              clientName="Michael Brown"
              clientPosition="CTO"
              clientCompany="TechSolutions Inc."
              verified={true}
            />
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-600">Start for free, upgrade when you need more power.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              tier="free"
              name="Free"
              price="$0"
              description="Perfect for trying out Testy"
              features={[
                { text: "5 AI-enhanced testimonials", included: true },
                { text: "One-click client approval", included: true },
                { text: "Basic exports (Text)", included: true },
                { text: "Standard support", included: true },
                { text: "Advanced exports", included: false },
                { text: "Custom brand tone", included: false },
                { text: "Remove Testy branding", included: false },
              ]}
              buttonText="Get Started"
              buttonLink="/signup"
            />
            
            <PricingCard
              tier="premium"
              name="Premium"
              price="$9.99"
              description="Get unlimited AI-enhanced testimonials"
              features={[
                { text: "Unlimited testimonials", included: true },
                { text: "One-click client approval", included: true },
                { text: "Advanced exports (PDF, HTML, JSON)", included: true },
                { text: "Custom brand tone", included: true },
                { text: "Remove Testy branding", included: true },
                { text: "Priority support", included: true },
                { text: "Analytics dashboard", included: true },
              ]}
              popular={true}
              buttonText="Subscribe Now"
              buttonLink="/signup"
            />
            
            <PricingCard
              tier="lifetime"
              name="Lifetime"
              price="$49"
              description="Early access lifetime deal"
              features={[
                { text: "Unlimited testimonials forever", included: true },
                { text: "All Premium features", included: true },
                { text: "All future features", included: true },
                { text: "Premium support", included: true },
                { text: "Custom branding options", included: true },
                { text: "Early access to new features", included: true },
                { text: "No recurring payments ever", included: true },
              ]}
              buttonText="Get Lifetime Access"
              buttonLink="/signup"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Turn client feedback into sales
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Join 2,347 businesses already using AI-enhanced testimonials to close deals 3.2x faster.
              Start free, upgrade when you're winning.
            </p>
            <Link to="/signup">
              <Button size="lg" className="rounded-full px-8 py-6 button-gradient text-lg">
                Try It Free
              </Button>
            </Link>
            <p className="text-sm text-slate-500 mt-10 italic">
              P.S. Your clients already love you. They just suck at writing.
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Everything you need to know about Testy.</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-lg font-semibold mb-2">Is my client's approval required?</h3>
              <p className="text-slate-600">Yes, we believe in authenticity. All enhanced testimonials require approval from your client before they're finalized, maintaining trust and credibility.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-lg font-semibold mb-2">How do I collect testimonials from my clients?</h3>
              <p className="text-slate-600">Testy provides a simple link you can send to clients, or you can manually input feedback you've already received through other channels.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-lg font-semibold mb-2">Can I customize the tone of the enhanced testimonials?</h3>
              <p className="text-slate-600">Absolutely! Premium users can define a custom brand voice or tone to ensure all testimonials match their company's style and values.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-lg font-semibold mb-2">What makes Testy different from other testimonial tools?</h3>
              <p className="text-slate-600">Testy specializes specifically in transforming basic feedback into compelling, detailed testimonials using AI, with a streamlined client approval process. We focus on this one feature and do it exceptionally well.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
