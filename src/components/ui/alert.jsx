import React from 'react';

export const Alert = ({ children, className = '' }) => (
  <div className={`rounded-lg border p-4 ${className}`}>
    {children}
  </div>
);

export const AlertDescription = ({ children }) => (
  <div className="mt-1 text-sm opacity-90">
    {children}
  </div>
);

export { Alert as default };