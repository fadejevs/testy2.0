import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TestyLogo from "@/components/TestyLogo";
import { supabase } from "@/supabaseClient";
import LoginModal from "@/components/LoginModal";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check initial session
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-white shadow">
      <Link to="/" className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="2" y="2" width="28" height="28" rx="8" fill="#21C55D"/>
            <rect x="9" y="10" width="14" height="12" rx="6" fill="#fff" />
            <circle cx="14" cy="16" r="1.2" fill="#21C55D"/>
            <circle cx="18" cy="16" r="1.2" fill="#21C55D"/>
            <path d="M13 19c1 1 3 1 4 0" stroke="#21C55D" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <rect x="15" y="7" width="2" height="4" rx="1" fill="#fff"/>
            <circle cx="16" cy="7" r="1" fill="#fff" stroke="#21C55D" strokeWidth="1"/>
          </svg>
          <span className="font-bold text-xl">Testy</span>
        </div>
      </Link>
      <div className="flex gap-3">
        {user ? (
          
          <>
          <Button
            onClick={() => navigate('/dashboard')}
            className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-4 py-2 font-semibold shadow transition"
          >
            Dashboard
          </Button>
          <Button
            onClick={handleLogout}
            className="bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-full px-4 py-2 font-semibold shadow transition"
          >
            Logout
          </Button>
        </>
      ) : (
        <Button
          onClick={() => setShowLogin(true)}
          className="bg-black hover:bg-slate-800 text-white rounded-full px-4 py-2 font-semibold shadow transition"
        >
          Login
        </Button>
        )}
      </div>
      <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />
    </nav>
  );
};

export default Navbar;