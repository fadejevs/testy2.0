import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const PaymentFailed = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Payment Failed</h2>
        <p className="mb-6 text-slate-600">
          Oops! Your payment did not go through. Please try again.
        </p>
        <Button
          onClick={() => navigate('/dashboard')}
          className="bg-black hover:bg-slate-800 text-white rounded-full px-6 py-2 font-semibold shadow transition"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
};

export default PaymentFailed; 