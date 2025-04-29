import React, { useState } from "react";
import { supabase } from "@/supabaseClient";
import { Button } from "@/components/ui/button";

const LoginModal = ({ open, onClose }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending login link...");
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: "http://localhost:8080/dashboard" }
    });
    if (error) {
      setStatus("Error: " + error.message);
    } else {
      setStatus("Check your email for the login link!");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-sm relative">
        <button
          className="absolute top-3 right-3 text-slate-400 hover:text-slate-700 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Login to Testy</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            required
            placeholder="Your email"
            className="border rounded px-4 py-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoFocus
          />
          <Button type="submit" className="w-full">
            Sign in with Email
          </Button>
        </form>
        {status && (
          <div className="mt-4 text-center text-sm text-slate-600">{status}</div>
        )}
      </div>
    </div>
  );
};

export default LoginModal; 