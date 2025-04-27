
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import TestimonialForm from '@/components/TestimonialForm';

const HowItWorks = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 pb-24 hero-gradient">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How <span className="gradient-text">Testy</span> Works
            </h1>
            <p className="text-xl text-slate-600 mb-10">
              Our simple 3-step process transforms weak client feedback into powerful testimonials that convert.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
              <div className="flex flex-col items-center text-center">
                <div className="bg-testy-purple/10 w-20 h-20 flex items-center justify-center rounded-full mb-6">
                  <span className="text-3xl font-bold text-testy-purple">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Input</h3>
                <p className="text-slate-600">
                  Enter your client's original feedback into Testy, no matter how brief or vague it might be. You can also add their name, position, and company.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-testy-purple/10 w-20 h-20 flex items-center justify-center rounded-full mb-6">
                  <span className="text-3xl font-bold text-testy-purple">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Enhance</h3>
                <p className="text-slate-600">
                  Our AI technology transforms the feedback into a detailed, compelling testimonial that maintains your client's authentic voice while adding valuable details.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-testy-purple/10 w-20 h-20 flex items-center justify-center rounded-full mb-6">
                  <span className="text-3xl font-bold text-testy-purple">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Verify</h3>
                <p className="text-slate-600">
                  Your client receives a simple email to approve the enhanced testimonial with one click. Once approved, it's ready to use on your website or marketing materials.
                </p>
              </div>
            </div>

            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Try It Yourself</h2>
                <p className="text-lg text-slate-600">See how Testy transforms basic feedback into powerful testimonials.</p>
              </div>
              
              <TestimonialForm />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-slate-600">Designed to make testimonial management simple and effective.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="mb-4 text-testy-purple">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Powered Enhancement</h3>
              <p className="text-slate-600">Our advanced AI transforms brief client feedback into detailed testimonials that maintain authenticity.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="mb-4 text-testy-purple">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">One-Click Approval</h3>
              <p className="text-slate-600">Clients can approve enhanced testimonials with a single click, ensuring authenticity and trust.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="mb-4 text-testy-purple">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Brand Voice Customization</h3>
              <p className="text-slate-600">Customize testimonials to match your brand's tone and style (Premium feature).</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="mb-4 text-testy-purple">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Multiple Export Options</h3>
              <p className="text-slate-600">Export testimonials as text, HTML, or JSON for easy integration with your website or marketing platforms.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="mb-4 text-testy-purple">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Analytics Dashboard</h3>
              <p className="text-slate-600">Track testimonial performance and engagement metrics (Premium feature).</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="mb-4 text-testy-purple">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Simple Pricing</h3>
              <p className="text-slate-600">Start for free with our basic plan and upgrade to premium when you need more power.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your testimonials?
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Start turning basic client feedback into compelling testimonials today.
              No credit card required to get started.
            </p>
            <Link to="/signup">
              <Button size="lg" className="rounded-full px-8 py-6 button-gradient text-lg">
                Try It Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
