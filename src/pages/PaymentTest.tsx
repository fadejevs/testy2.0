import React from "react";

const PaymentTest = () => {
  const handleUpgrade = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // Use dummy/test user info for now
        user_id: "test-user-id",
        email: "test@example.com",
      }),
    });
    if (!res.ok) {
      alert("Failed to create checkout session. Please try again later.");
      return;
    }
    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Test Payment Flow</h2>
        <p className="mb-6 text-slate-600">
          Click the button below to test the Stripe payment flow.
        </p>
        <button
          onClick={handleUpgrade}
          className="bg-black hover:bg-slate-800 text-white rounded-full px-6 py-2 font-semibold shadow transition"
        >
          Test Upgrade Now
        </button>
      </div>
    </div>
  );
};

export default PaymentTest; 