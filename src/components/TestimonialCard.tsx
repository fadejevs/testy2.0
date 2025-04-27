
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  originalText: string;
  enhancedText: string;
  clientName: string;
  clientPosition: string;
  clientCompany: string;
  verified?: boolean;
}

const TestimonialCard = ({
  originalText,
  enhancedText,
  clientName,
  clientPosition,
  clientCompany,
  verified = true
}: TestimonialCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="shadow-soft border-slate-200">
        <CardContent className="p-6">
          <div className="flex flex-col h-full">
            <h3 className="text-lg font-medium text-slate-700 mb-3">Original Client Feedback</h3>
            <p className="text-slate-600 italic flex-grow">"{originalText}"</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="shadow-medium relative border-testy-purple/30">
        {verified && (
          <div className="absolute -top-3 right-4 bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span>Verified</span>
          </div>
        )}
        <CardContent className="p-6">
          <div className="flex flex-col h-full">
            <h3 className="text-lg font-medium gradient-text mb-3">Enhanced Testimonial</h3>
            <p className="text-slate-800 flex-grow">"{enhancedText}"</p>
            <div className="mt-6 flex flex-col">
              <p className="font-medium text-slate-900">{clientName}</p>
              <p className="text-slate-600 text-sm">{clientPosition}, {clientCompany}</p>
            </div>
            <div className="mt-4 text-xs text-slate-500 flex items-center">
              <span className="flex items-center gap-1">
                <span>Powered by</span>
                <span className="font-medium gradient-text">Testy</span>
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestimonialCard;
