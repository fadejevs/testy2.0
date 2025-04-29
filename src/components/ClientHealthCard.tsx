import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, AlertTriangle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RiskBasedBooking from '@/components/RiskBasedBooking';
import TestyLogo from '@/components/TestyLogo';

// Define the type for the callback prop
interface ScheduledCallDetails {
  clientName: string;
  clientEmail: string;
  startTime: Date;
  endTime: Date;
}

interface ClientHealthCardProps {
  clientName: string;
  clientEmail: string;
  healthScore: number;
  lastCheckIn: Date;
  missedCheckIns: number;
  sentiment: 'positive' | 'neutral' | 'negative';
  riskStatus: 'low' | 'medium' | 'high';
  onCallScheduled?: (details: ScheduledCallDetails) => void;
}

const ClientHealthCard = ({
  clientName,
  clientEmail,
  healthScore,
  lastCheckIn,
  missedCheckIns,
  sentiment,
  riskStatus,
  onCallScheduled
}: ClientHealthCardProps) => {
  // Format the date to be more readable
  const formattedDate = new Date(lastCheckIn).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  
  // Determine color based on health score - Updated Colors
  const getScoreColor = () => {
    if (healthScore >= 75) return 'text-emerald-600'; // Was green-500
    if (healthScore >= 50) return 'text-amber-600';  // Was amber-500
    return 'text-red-600'; // Was red-500
  };
  
  // Determine risk badge style - Updated Colors
  const getRiskBadgeStyle = () => {
    if (riskStatus === 'low') return 'bg-emerald-50 text-emerald-700'; // Was green-100/700
    if (riskStatus === 'medium') return 'bg-amber-50 text-amber-700';   // Was amber-100/700
    return 'bg-red-50 text-red-700'; // Was red-100/700
  };

  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="relative">
      {riskStatus === 'high' && (
        <button
          onClick={() => setShowBooking(true)}
          className="
            absolute -top-3 -right-3 z-10
            bg-rose-500 hover:bg-rose-600 text-white
            rounded-full shadow-lg px-4 py-2
            flex items-center gap-1
            transition
          "
          style={{ boxShadow: '0 4px 16px 0 rgba(249, 115, 22, 0.12)' }}
        >
          <Phone className="h-4 w-4" />
          Schedule Call
        </button>
      )}

      {missedCheckIns > 0 && (
        <div
          className="
            absolute -top-3 -left-3 z-10
            bg-amber-100 text-amber-700
            rounded-full px-3 py-1 text-xs font-semibold
            shadow
          "
        >
          {missedCheckIns} missed
        </div>
      )}

      <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6 pt-8">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg font-medium text-slate-800">{clientName}</CardTitle>
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
              <p className="text-sm font-medium text-slate-700">{formattedDate}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-2">
          <div className="flex items-center">
            {sentiment === 'positive' ? (
              <TrendingUp className="h-4 w-4 text-emerald-600 mr-1" />
            ) : sentiment === 'negative' ? (
              <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
            ) : (
              <span className="h-4 w-4 block bg-slate-300 rounded-full mr-1"></span>
            )}
            <span className="text-xs text-slate-600">
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
      </div>

      {showBooking && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full">
            <RiskBasedBooking
              client={{
                id: 'mock-id-' + clientName,
                name: clientName,
                email: clientEmail,
                healthScore,
                riskStatus
              }}
              onClose={() => setShowBooking(false)}
              onCallScheduled={onCallScheduled}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientHealthCard;
