import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import dashboardDemo from '@/assets/gif.gif';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
   
   {/* <div>
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
        viewBox="0 0 800 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="rectGreenToWhite" x1="400" y1="120" x2="400" y2="1080" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C3E6D2" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
          <linearGradient id="bgGreenToWhite" x1="400" y1="0" x2="400" y2="1200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#E6F4EA" />
          </linearGradient>
        </defs>
      
        <rect
          x="0"
          y="0"
          width="800"
          height="1200"
          fill="url(#bgGreenToWhite)"
          opacity="0.25"
        />
     
        <rect
          x="60"
          y="100"
          width="680"
          height="960"
          fill="url(#rectGreenToWhite)"
          opacity="0.13"
        />
        <rect
          x="120"
          y="240"
          width="560"
          height="720"
          fill="#A0D8BA"
          opacity="0.09"
        />
        <rect
          x="200"
          y="400"
          width="400"
          height="400"
          fill="#5CB98E"
          opacity="0.05"
        />
      </svg>
      </div> */}



      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-2 sm:px-4" style={{ position: "relative", zIndex: 1 }}>
        <div className="max-w-3xl w-full text-center mt-16 mb-16">
          {/* Feature Badge - Ultra Small & Custom Color */}
          <div className="inline-flex items-center px-2 py-0.5 mb-5 rounded-full border border-[#5CB98E]/20 bg-[#E6F4EA] text-[#4B9E7A] text-xs font-medium" style={{ fontFamily: 'inherit' }}>
            <span className="mr-1 text-sm" role="img" aria-label="sparkles"></span>
            Client management tool
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-10">
          Client feedback that sells itself
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 mb-5">
          Check in and collect testimonials from clients in seconds. See who's winning and who's slipping, all with one click.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          </div>
          <div className="flex flex-col items-center mb-10">
    
          <Button
            onClick={() => window.open('https://buy.stripe.com/dR68yGg3R1gJ6Na005', '_blank')}
            className="bg-green-500 hover:bg-green-600 text-white font-bold shadow-lg rounded-xl px-10 py-5 text-xl flex items-center gap-3"
          >
         $97 Lifetime Access (Limited)
          </Button>
          
          </div>
          
                    {/* Social Proof - Avatars left, stars right, centered as a row */}
                    <div className="flex items-center justify-center mt-6 mb-2 gap-2">
                      {/* Avatars */}
                      <div className="flex -space-x-4">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Coach 1" className="w-12 h-12 rounded-full border-4 border-white shadow" />
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Coach 2" className="w-12 h-12 rounded-full border-4 border-white shadow" />
                        <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Coach 3" className="w-12 h-12 rounded-full border-4 border-white shadow" />
                        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Coach 4" className="w-12 h-12 rounded-full border-4 border-white shadow" />
                        <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="Coach 5" className="w-12 h-12 rounded-full border-4 border-white shadow" />
                      </div>
                      {/* Stars */}
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
                          </svg>
                        ))}
                      </div>
                    </div>

          
          
        </div>
        
        {/* Demo Placeholder */}
        <div className="w-full max-w-3xl h-64 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 text-xl border border-slate-200 overflow-hidden"
          style={{
            border: '1.8px solid rgba(92, 185, 142, 0.30)' // #5CB98E with low opacity
          }}
        >
          <img
            src={dashboardDemo}
            alt="Testy dashboard demo"
            className="object-cover w-full h-full"
            style={{ minHeight: 256 }}
          />
        </div>
        <div className="w-full max-w-3xl bg-green-50 border border-green-200 rounded-xl p-6 mb-8 mt-10 flex items-center">
          <div className="text-green-600 mr-4">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-xl">30-Day "Keep Your Money" Guarantee</h3>
            <p className="text-slate-700">If you don't see measurable improvement in client engagement within 30 days, we'll refund every penny. No questions, no hassles.</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-lg text-slate-700 my-8">
            <div className="flex items-center gap-2">
              <svg className="text-green-500" width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              <span>1-click feedback & testimonial collection</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="text-green-500" width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Flags inactive clients before they leave</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="text-green-500" width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              <span>No code, no chasing, no funny business</span>
            </div>
          </div>
          
      </main>
    </div>
  );
};

export default Landing; 

