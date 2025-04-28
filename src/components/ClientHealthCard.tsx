
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

interface ClientHealthCardProps {
  clientName: string;
  clientEmail: string;
  healthScore: number;
  lastCheckIn: Date;
  missedCheckIns: number;
  sentiment: 'positive' | 'neutral' | 'negative';
  riskStatus: 'low' | 'medium' | 'high';
}

const ClientHealthCard = ({
  clientName,
  clientEmail,
  healthScore,
  lastCheckIn,
  missedCheckIns,
  sentiment,
  riskStatus
}: ClientHealthCardProps) => {
  // Format the date to be more readable
  const formattedDate = new Date(lastCheckIn).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  
  // Determine color based on health score
  const getScoreColor = () => {
    if (healthScore >= 75) return 'text-green-500';
    if (healthScore >= 50) return 'text-amber-500';
    return 'text-red-500';
  };
  
  // Determine risk badge style
  const getRiskBadgeStyle = () => {
    if (riskStatus === 'low') return 'bg-green-100 text-green-700';
    if (riskStatus === 'medium') return 'bg-amber-100 text-amber-700';
    return 'bg-red-100 text-red-700';
  };

  return (
    <Card className="shadow-soft border-slate-200 hover:shadow-medium transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-medium">{clientName}</CardTitle>
            <p className="text-sm text-slate-500">{clientEmail}</p>
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskBadgeStyle()}`}>
            {riskStatus === 'high' && <AlertTriangle className="inline h-3 w-3 mr-1" />}
            {riskStatus.charAt(0).toUpperCase() + riskStatus.slice(1)} Risk
          </div>
        </div>
      </CardHeader>
      <CardContent className="py-2">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-slate-500">Health Score</p>
            <p className={`text-xl font-semibold ${getScoreColor()}`}>{healthScore}%</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Last Check-In</p>
            <p className="text-sm font-medium">{formattedDate}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <div className="flex items-center">
          {sentiment === 'positive' ? (
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
          ) : sentiment === 'negative' ? (
            <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
          ) : (
            <span className="h-4 w-4 block bg-gray-300 rounded-full mr-1"></span>
          )}
          <span className="text-xs">
            {sentiment === 'positive' 
              ? 'Positive trend' 
              : sentiment === 'negative' 
              ? 'Negative trend' 
              : 'Stable'}
          </span>
        </div>
        <div className="text-xs text-slate-500">
          {missedCheckIns > 0 ? `${missedCheckIns} missed check-in${missedCheckIns > 1 ? 's' : ''}` : 'No missed check-ins'}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ClientHealthCard;
