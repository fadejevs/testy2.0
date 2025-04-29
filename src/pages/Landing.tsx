import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import dashboardDemo from '@/assets/gif.gif';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
      {/* SVG background covers the whole page */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
        viewBox="0 0 800 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        {/* Full width/height background */}
        <rect
          x="0"
          y="0"
          width="800"
          height="1200"
          fill="#E6F4EA"
          opacity="0.25"
        />
        {/* Layered rectangles for effect */}
        <rect
          x="60"
          y="120"
          width="680"
          height="960"
          fill="#C3E6D2"
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
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-2 sm:px-4" style={{ position: "relative", zIndex: 1 }}>
        <div className="max-w-3xl w-full text-center mt-16 mb-16">
          <h1 className="text-4xl md:text-7xl font-bold mb-10">
          Client feedback that pays for itself
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 mb-5">
          Get consistent proof of your value without the awkward asks. Your clients report wins, you collect testimonials that sell, all with one click.
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
                    {/* Social Proof */}
                    <div className="flex flex-col items-center mt-6">
            <div className="flex -space-x-4 mb-2">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Coach 1" className="w-12 h-12 rounded-full border-2 border-white shadow" />
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Coach 2" className="w-12 h-12 rounded-full border-2 border-white shadow" />
              <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Coach 3" className="w-12 h-12 rounded-full border-2 border-white shadow" />
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Coach 4" className="w-12 h-12 rounded-full border-2 border-white shadow" />
              <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="Coach 5" className="w-12 h-12 rounded-full border-2 border-white shadow" />
            </div>
            <div className="flex items-center gap-2">
              <span className="flex text-yellow-400 text-xl">
                ★★★★★
              </span>
              <span className="font-bold text-lg text-slate-700">164</span>
              <span className="text-slate-500">coaches increased their retention</span>
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

