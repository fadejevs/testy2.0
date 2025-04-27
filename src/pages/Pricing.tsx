
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';

const Pricing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 pb-24 hero-gradient">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10">
              Start for free, upgrade when you need more power. No hidden fees or complicated tiers.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="container">
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
                { text: "Analytics dashboard", included: false },
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
                { text: "Multiple testimonial collections", included: true },
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
                { text: "White-label option", included: true },
              ]}
              buttonText="Get Lifetime Access"
              buttonLink="/signup"
            />
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Feature Comparison</h2>
              <p className="text-lg text-slate-600">See what's included in each plan.</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-soft rounded-lg">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-500">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-slate-500">Free</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-testy-purple">Premium</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-slate-500">Lifetime</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800">AI-Enhanced Testimonials</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-600">5 per month</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-800 font-medium">Unlimited</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-600">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800">Client Approval Flow</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-600">✓</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-800 font-medium">✓</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-600">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800">Export Formats</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-600">Text only</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-800 font-medium">Text, HTML, PDF, JSON</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-600">Text, HTML, PDF, JSON</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800">Custom Brand Tone</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-600">✗</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-800 font-medium">✓</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-600">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800">Remove Testy Branding</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-600">✗</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-800 font-medium">✓</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-600">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800">Analytics Dashboard</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-600">✗</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-800 font-medium">✓</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-600">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800">Multiple Collections</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-600">✗</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-800 font-medium">✓</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-600">✓</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800">White Label Option</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-600">✗</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-600">✗</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-800 font-medium">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
            <p className="text-lg text-slate-600">Everything you need to know about Testy pricing.</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Can I change plans at any time?</h3>
              <p className="text-slate-600">Yes, you can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at the end of your current billing cycle.</p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Is there a limit to how many testimonials I can generate?</h3>
              <p className="text-slate-600">Free accounts can generate up to 5 enhanced testimonials per month. Premium and Lifetime accounts have unlimited testimonial generation.</p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">How does the Lifetime deal work?</h3>
              <p className="text-slate-600">Our special early-bird Lifetime deal gives you permanent access to all Premium features plus exclusive Lifetime benefits for a one-time payment of $49. This offer is limited and may end at any time.</p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-slate-600">Yes, we offer a 14-day money-back guarantee for all paid plans. If you're not satisfied with our service, contact our support team within 14 days of purchase for a full refund.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Join thousands of businesses already using Testy to create powerful, convincing testimonials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/signup" className="rounded-full px-8 py-6 button-gradient text-lg font-medium text-white">
                Try It Free
              </a>
              <a href="/login" className="rounded-full px-8 py-6 bg-white border border-slate-200 text-lg font-medium text-slate-800">
                Login
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
