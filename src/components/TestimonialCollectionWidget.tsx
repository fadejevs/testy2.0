
import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface TestimonialCollectionWidgetProps {
  onClose?: () => void;
  clientName?: string;
  productName?: string;
  onTestimonialSubmit?: (testimonial: string) => void;
}

const TestimonialCollectionWidget = ({
  onClose,
  clientName = 'there',
  productName = 'our service',
  onTestimonialSubmit
}: TestimonialCollectionWidgetProps) => {
  const [step, setStep] = useState<'initial' | 'detail' | 'thanks'>('initial');
  const [testimonial, setTestimonial] = useState('');
  const [satisfaction, setSatisfaction] = useState<number | null>(null);
  const { toast } = useToast();
  
  const handleTestimonialSubmit = () => {
    if (onTestimonialSubmit) {
      onTestimonialSubmit(testimonial);
    }
    
    toast({
      title: "Testimonial submitted",
      description: "Thank you for sharing your experience!",
    });
    
    setStep('thanks');
  };
  
  const handleSatisfactionSelect = (rating: number) => {
    setSatisfaction(rating);
    setStep('detail');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md w-full sm:w-96 bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200">
      <div className="p-4">
        {step === 'initial' && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">How was your experience?</h3>
              <button 
                onClick={onClose} 
                className="text-slate-500 hover:text-slate-700"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <p className="text-slate-600 mb-6">Hi {clientName}, would you mind sharing how satisfied you are with {productName}?</p>
            
            <div className="flex justify-center gap-4 mb-4">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => handleSatisfactionSelect(rating)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-medium transition-colors
                    ${rating <= 3 
                      ? 'hover:bg-amber-100 hover:text-amber-700' 
                      : 'hover:bg-green-100 hover:text-green-700'}`}
                >
                  {rating}
                </button>
              ))}
            </div>
          </>
        )}
        
        {step === 'detail' && (
          <>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setStep('initial')}
                  className="text-slate-500 hover:text-slate-700"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <h3 className="text-lg font-medium">Share your experience</h3>
              </div>
              
              <button 
                onClick={onClose} 
                className="text-slate-500 hover:text-slate-700"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="mb-4">
              <p className="text-slate-600 mb-2">
                {satisfaction && satisfaction >= 4 
                  ? "That's great to hear! Would you mind sharing what you love about our service?" 
                  : "We value your feedback! What could we improve?"}
              </p>
              
              <Textarea 
                value={testimonial}
                onChange={(e) => setTestimonial(e.target.value)}
                placeholder={
                  satisfaction && satisfaction >= 4 
                    ? "I love how..." 
                    : "I think you could improve..."
                }
                className="border-2 border-blue-200 focus:border-blue-400 rounded-md min-h-[120px] mb-3"
              />
              
              <Button 
                onClick={handleTestimonialSubmit}
                className="w-full bg-purple-600 hover:bg-purple-700"
                disabled={!testimonial.trim()}
              >
                Submit feedback
              </Button>
            </div>
          </>
        )}
        
        {step === 'thanks' && (
          <>
            <div className="flex justify-end">
              <button 
                onClick={onClose} 
                className="text-slate-500 hover:text-slate-700"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex flex-col items-center py-6">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Check className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-medium mb-2">Thanks for your feedback!</h3>
              <p className="text-center text-slate-600 mb-6">
                {satisfaction && satisfaction >= 4 
                  ? "We're thrilled that you're enjoying our service!" 
                  : "We appreciate your honest feedback and will work to improve."}
              </p>
              
              {satisfaction && satisfaction >= 4 && (
                <Button 
                  variant="outline"
                  onClick={() => {
                    // Here you would typically open a share dialog
                    toast({
                      title: "Share options",
                      description: "This would open social sharing options in a real implementation",
                    });
                  }}
                  className="w-full"
                >
                  Share your experience
                </Button>
              )}
            </div>
          </>
        )}
      </div>
      
      <div className="bg-slate-50 px-4 py-2 text-center text-xs text-slate-500 border-t border-slate-200">
        <span>Widget by <span className="font-medium gradient-text">Testy</span></span>
      </div>
    </div>
  );
};

export default TestimonialCollectionWidget;
