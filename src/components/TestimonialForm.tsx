
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TestimonialForm = () => {
  const [originalTestimonial, setOriginalTestimonial] = useState('');
  const [loading, setLoading] = useState(false);
  const [enhancedTestimonial, setEnhancedTestimonial] = useState('');

  // This would connect to your actual AI enhancement service
  const handleEnhance = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!originalTestimonial.trim()) return;
    
    setLoading(true);
    // Simulate API call to enhance testimonial
    setTimeout(() => {
      setEnhancedTestimonial(`I can't express enough gratitude for the incredible support provided to my business. The strategic guidance and practical solutions have significantly streamlined our operations, resulting in a 30% increase in productivity. What's most impressive is the personalized approach and dedication to understanding my specific business challenges. This partnership has truly been transformative, and I'm excited to continue growing with such exceptional support!`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleEnhance}>
        <Card className="shadow-soft border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl">Enhance Your Testimonial</CardTitle>
            <CardDescription>
              Enter your client's original feedback, even if it's brief or vague.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label htmlFor="original" className="block text-sm font-medium text-slate-700 mb-1">
                  Original Testimonial
                </label>
                <Textarea
                  id="original"
                  placeholder="Paste your client's original feedback here..."
                  className="h-32"
                  value={originalTestimonial}
                  onChange={(e) => setOriginalTestimonial(e.target.value)}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Client Name
                  </label>
                  <Input id="name" placeholder="Jane Smith" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Client Email
                  </label>
                  <Input id="email" type="email" placeholder="jane@example.com" />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-slate-700 mb-1">
                    Position
                  </label>
                  <Input id="position" placeholder="Marketing Director" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                    Company
                  </label>
                  <Input id="company" placeholder="Acme Inc." />
                </div>
              </div>
              
              <Button type="submit" className="w-full button-gradient" disabled={loading || !originalTestimonial.trim()}>
                {loading ? "Enhancing..." : "Enhance Testimonial"}
              </Button>
              
              {enhancedTestimonial && (
                <div className="mt-6">
                  <h3 className="text-lg font-medium gradient-text mb-3">Enhanced Testimonial</h3>
                  <div className="p-4 bg-white border border-testy-purple/30 rounded-lg shadow-soft">
                    <p className="text-slate-800">"{enhancedTestimonial}"</p>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-xs text-slate-500">
                        <span>Powered by</span>
                        <span className="font-medium ml-1 gradient-text">Testy</span>
                      </div>
                      <Button size="sm" variant="outline" className="text-xs">
                        Copy to Clipboard
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default TestimonialForm;
