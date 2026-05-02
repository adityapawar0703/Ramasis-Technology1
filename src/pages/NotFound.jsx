import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center" data-testid="not-found">
      <div className="container-x text-center">
        <p className="overline mb-6">/ Error 404</p>
        <h1 className="font-display font-black text-7xl sm:text-9xl tracking-tighter mb-6">
          PAGE<br />
          <span className="text-signal">NOT FOUND</span>
        </h1>
        <p className="text-muted mb-10">
          Looks like this URL is in our blocklist. (Just kidding — it doesn't exist.)
        </p>
        <Link to="/" className="btn-primary">
          <ArrowLeft size={14} /> Back to Home
        </Link>
      </div>
    </section>
  );
}
