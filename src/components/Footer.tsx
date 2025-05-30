
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-slate-100 py-12 mt-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold gradient-text">Testy</span>
            </Link>
            <p className="mt-4 text-slate-600 max-w-sm">
              Turn weak feedback into testimonials that actually sell. Make your client's words work harder.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/how-it-works" className="text-slate-600 hover:text-testy-purple">How It Works</Link></li>
              <li><Link to="/pricing" className="text-slate-600 hover:text-testy-purple">Pricing</Link></li>
              <li><Link to="/faq" className="text-slate-600 hover:text-testy-purple">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-slate-600 hover:text-testy-purple">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-600 hover:text-testy-purple">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-12 pt-6 border-t border-slate-100">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Testy. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-500 hover:text-testy-purple">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-slate-500 hover:text-testy-purple">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
