
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="py-4 border-b border-slate-100">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold gradient-text">Testy</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/pricing" className="text-slate-600 hover:text-testy-purple transition-colors">
            Pricing
          </Link>
          <Link to="/how-it-works" className="text-slate-600 hover:text-testy-purple transition-colors">
            How It Works
          </Link>
          <Link to="/faq" className="text-slate-600 hover:text-testy-purple transition-colors">
            FAQ
          </Link>
          <Link to="/client-retention" className="text-slate-600 hover:text-testy-purple transition-colors">
            Client Retention
          </Link>
          <Link to="/login">
            <Button variant="outline" className="rounded-full px-6">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="rounded-full px-6 button-gradient">
              Try for Free
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
