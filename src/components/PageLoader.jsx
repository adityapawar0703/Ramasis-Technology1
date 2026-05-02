import React from 'react';

export default function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center" data-testid="page-loader">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 border border-signal/30" />
          <div className="absolute inset-0 border-t-2 border-signal animate-spin" />
        </div>
        <p className="font-mono text-xs uppercase tracking-widest2 text-signal">Loading</p>
      </div>
    </div>
  );
}
