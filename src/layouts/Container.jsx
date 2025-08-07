import React from 'react';

const Container = ({ children, className = '' }) => {
  return <main className={`w-full ${className}`}>{children}</main>;
};

export default Container;
