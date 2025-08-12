// src/components/FullWidth.jsx
import React from 'react';

const FullWidth = ({ children, className = "" }) => {
  return (
    <div className={`w-full ${className}`}>
      {children}
    </div>
  );
};

export default FullWidth;
