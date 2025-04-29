import React, { useState } from 'react';
import { format, addDays } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

// Define the type for the callback prop
interface ScheduledCallDetails {
  clientName: string;
  clientEmail: string;
  startTime: Date;
  endTime: Date;
}

interface RiskBasedBookingProps {
  client: {
    id: string;
    name: string;
    email: string;
    healthScore: number;
    riskStatus: 'low' | 'medium' | 'high';
  };
  onClose: () => void;
  onCallScheduled?: (details: ScheduledCallDetails) => void;
}

// Mock function to generate time slots
const generateTimeSlots = (date: Date) => {
  const slots = [];
  const startHour = 9; // 9 AM
  const endHour = 17; // 5 PM
  
  // Generate slots every 30 minutes
  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute of [0, 30]) {
      const start = new Date(date);
      start.setHours(hour, minute, 0, 0);
      
      const end = new Date(start);
      end.setMinutes(end.getMinutes() + 30);
      
      // Randomly make some slots unavailable
      if (Math.random() > 0.3) {
        slots.push({ start, end });
      }
    }
  }
  
  return slots;
};

const RiskBasedBooking: React.FC<RiskBasedBookingProps> = ({ client, onClose, onCallScheduled }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableSlots, setAvailableSlots] = useState<Array<{ start: Date; end: Date }>>([]);
  const [selectedSlot, setSelectedSlot] = useState<{ start: Date; end: Date } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<'date' | 'time' | 'confirm' | 'success'>('date');
  const { toast } = useToast();

  // Generate next 7 days for selection
  const dateOptions = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(currentDate, i);
    return date;
  });

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setAvailableSlots(generateTimeSlots(date));
      setIsLoading(false);
      setStep('time');
    }, 800);
  };

  const handleTimeSelect = (slot: { start: Date; end: Date }) => {
    setSelectedSlot(slot);
    setStep('confirm');
  };

  const handleConfirm = () => {
    if (!selectedSlot) return;
    
    setIsLoading(true);
    
    // Simulate API call to create calendar event
    setTimeout(() => {
      setIsLoading(false);
      setStep('success');
      
      // Call the callback function with the details
      if (onCallScheduled) {
        onCallScheduled({
          clientName: client.name,
          clientEmail: client.email,
          startTime: selectedSlot.start,
          endTime: selectedSlot.end,
        });
      }

      toast({
        title: "Call scheduled successfully",
        description: `Your call with ${client.name} has been added to your calendar.`,
      });
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          {step === 'date' && "Schedule a Risk Assessment Call"}
          {step === 'time' && "Select Available Time"}
          {step === 'confirm' && "Confirm Your Booking"}
          {step === 'success' && "Call Scheduled!"}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        {step === 'date' && (
          <div className="space-y-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
              <p className="text-amber-800 font-medium">
                {client.name} has a health score of {client.healthScore}% and is at {client.riskStatus} risk of churning.
              </p>
              <p className="text-amber-700 mt-2 text-sm">
                We recommend scheduling a call to address their concerns.
              </p>
            </div>
            
            <div className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium text-slate-700">Select a date</h3>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setCurrentDate(addDays(currentDate, -7))}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setCurrentDate(addDays(currentDate, 7))}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
                {dateOptions.map((date, index) => (
                  <Button
                    key={index}
                    variant={selectedDate && date.toDateString() === selectedDate.toDateString() ? "default" : "outline"}
                    className="flex flex-col h-auto py-2"
                    onClick={() => handleDateSelect(date)}
                  >
                    <span className="text-xs">{format(date, 'EEE')}</span>
                    <span className="text-lg font-bold">{format(date, 'd')}</span>
                    <span className="text-xs">{format(date, 'MMM')}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {step === 'time' && (
          <div className="space-y-4">
            <p className="text-slate-600">
              Available time slots for {selectedDate ? format(selectedDate, 'EEEE, MMMM d, yyyy') : ''}:
            </p>
            
            {isLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 mt-4">
                {availableSlots.length > 0 ? (
                  availableSlots.map((slot, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="justify-start"
                      onClick={() => handleTimeSelect(slot)}
                    >
                      <Clock className="h-4 w-4 mr-2" />
                      {format(slot.start, 'h:mm a')}
                    </Button>
                  ))
                ) : (
                  <p className="col-span-2 text-center text-slate-500 py-4">
                    No available slots for this day. Please select another date.
                  </p>
                )}
              </div>
            )}
          </div>
        )}
        
        {step === 'confirm' && selectedSlot && (
          <div className="space-y-6">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <h3 className="font-medium text-slate-800 mb-2">Call Details</h3>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <Calendar className="h-5 w-5 text-slate-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-slate-700">
                      {selectedDate ? format(selectedDate, 'EEEE, MMMM d, yyyy') : ''}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <Clock className="h-5 w-5 text-slate-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-slate-700">
                      {format(selectedSlot.start, 'h:mm a')} - {format(selectedSlot.end, 'h:mm a')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <h3 className="font-medium text-slate-800 mb-2">Client</h3>
              <p className="text-sm text-slate-700">{client.name}</p>
              <p className="text-sm text-slate-500">{client.email}</p>
              <div className="mt-2 flex items-center">
                <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                  client.riskStatus === 'high' ? 'bg-red-500' : 
                  client.riskStatus === 'medium' ? 'bg-amber-500' : 'bg-green-500'
                }`}></span>
                <span className="text-xs text-slate-600">
                  {client.healthScore}% health score ({client.riskStatus} risk)
                </span>
              </div>
            </div>
          </div>
        )}
        
        {step === 'success' && (
          <div className="text-center py-6">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">Call Scheduled Successfully</h3>
            <p className="text-slate-500 mb-6">
              Your call with {client.name} has been added to your calendar and an invitation has been sent.
            </p>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between">
        {step !== 'date' && step !== 'success' && (
          <Button variant="outline" onClick={() => setStep(step === 'confirm' ? 'time' : 'date')}>
            Back
          </Button>
        )}
        
        {step === 'date' && (
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        )}
        
        {step === 'confirm' && (
          <Button 
            onClick={handleConfirm}
            disabled={isLoading}
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Scheduling...
              </>
            ) : (
              'Schedule Call'
            )}
          </Button>
        )}
        
        {step === 'success' && (
          <Button onClick={onClose}>
            Close
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default RiskBasedBooking; 