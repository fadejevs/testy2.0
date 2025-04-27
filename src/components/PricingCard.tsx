
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  tier: 'free' | 'premium' | 'lifetime';
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  buttonText: string;
  buttonLink: string;
}

const PricingCard = ({
  tier,
  name,
  price,
  description,
  features,
  popular = false,
  buttonText,
  buttonLink
}: PricingCardProps) => {
  return (
    <Card className={`border ${popular ? 'border-testy-purple shadow-medium scale-105' : 'border-slate-200'} transition-all hover:shadow-medium`}>
      {popular && (
        <div className="absolute -top-3 inset-x-0 mx-auto w-32 text-center bg-testy-purple text-white text-xs font-medium py-1 px-2 rounded-full">
          Most Popular
        </div>
      )}
      <CardHeader className="pt-8">
        <CardTitle className="text-lg font-medium">{name}</CardTitle>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
          {tier !== 'lifetime' && <span className="text-slate-600 ml-1">/month</span>}
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className={`mt-0.5 mr-2 rounded-full p-1 ${feature.included ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                <Check className="h-3 w-3" />
              </span>
              <span className={feature.included ? 'text-slate-700' : 'text-slate-400'}>{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pb-8">
        <Button 
          className={`w-full ${popular ? 'button-gradient' : 'bg-slate-800 hover:bg-slate-700'} mt-4`}
          asChild
        >
          <a href={buttonLink}>{buttonText}</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
