
import React, { useState } from 'react';
import { X, AlertTriangle, Check, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ClientCheckInWidgetProps {
  onClose?: () => void;
  clientName?: string;
}

const ClientCheckInWidget = ({ onClose, clientName = 'there' }: ClientCheckInWidgetProps) => {
  const [step, setStep] = useState<'initial' | 'issue' | 'idea' | 'success' | 'thanks'>('initial');
  const [feedback, setFeedback] = useState('');
  const { toast } = useToast();

  const handleSubmit = () => {
    toast({
      title: "Feedback submitted",
      description: "Thank you for your feedback!",
    });
    setStep('thanks');
  };

  const handleFeedbackOption = (option: 'issue' | 'idea' | 'success') => {
    setStep(option);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md w-full sm:w-96 bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200">
      <div className="p-4">
        {step === 'initial' && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">What's on your mind?</h3>
              <button 
                onClick={onClose} 
                className="text-slate-500 hover:text-slate-700"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleFeedbackOption('issue')}
                className="flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 rounded-md p-4 transition-colors"
              >
                <div className="bg-amber-100 p-2 rounded-full mb-2">
                  <AlertTriangle className="h-6 w-6 text-amber-500" />
                </div>
                <span className="text-sm font-medium text-slate-700">Issue</span>
              </button>
              
              <button
                onClick={() => handleFeedbackOption('idea')}
                className="flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 rounded-md p-4 transition-colors"
              >
                <div className="bg-blue-100 p-2 rounded-full mb-2">
                  <svg className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3V4M12 20V21M21 12H20M4 12H3M18.364 18.364L17.657 17.657M6.343 6.343L5.636 5.636M18.364 5.636L17.657 6.343M6.343 17.657L5.636 18.364M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700">Idea</span>
              </button>
              
              <button
                onClick={() => handleFeedbackOption('success')}
                className="flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 rounded-md p-4 transition-colors"
              >
                <div className="bg-green-100 p-2 rounded-full mb-2">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <span className="text-sm font-medium text-slate-700">Success</span>
              </button>
            </div>
          </>
        )}
        
        {(step === 'issue' || step === 'idea' || step === 'success') && (
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
                
                {step === 'issue' && (
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                    <h3 className="text-lg font-medium">Report an issue</h3>
                  </div>
                )}
                
                {step === 'idea' && (
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3V4M12 20V21M21 12H20M4 12H3M18.364 18.364L17.657 17.657M6.343 6.343L5.636 5.636M18.364 5.636L17.657 6.343M6.343 17.657L5.636 18.364M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h3 className="text-lg font-medium">Share an idea</h3>
                  </div>
                )}
                
                {step === 'success' && (
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <h3 className="text-lg font-medium">Share a win</h3>
                  </div>
                )}
              </div>
              
              <button 
                onClick={onClose} 
                className="text-slate-500 hover:text-slate-700"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div>
              <Textarea 
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder={
                  step === 'issue' 
                    ? "I noticed that..." 
                    : step === 'idea' 
                    ? "I think it would be great if..." 
                    : "I'm happy to share that..."
                }
                className="border-2 border-blue-200 focus:border-blue-400 rounded-md min-h-[120px] mb-3"
              />
              
              <Button 
                onClick={handleSubmit}
                className={`w-full flex items-center justify-center gap-2 ${
                  step === 'issue' ? 'bg-amber-500 hover:bg-amber-600' : 
                  step === 'idea' ? 'bg-blue-500 hover:bg-blue-600' : 
                  'bg-green-500 hover:bg-green-600'
                }`}
                disabled={!feedback.trim()}
              >
                <MessageSquare className="h-4 w-4" />
                <span>Send feedback</span>
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
              <h3 className="text-xl font-medium mb-6">Thanks! We received your feedback.</h3>
              <Button 
                variant="outline"
                onClick={() => setStep('initial')}
                className="w-full"
              >
                Submit more feedback
              </Button>
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

export default ClientCheckInWidget;
