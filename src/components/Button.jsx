import React from 'react';

const Button = ({ onClick, className, ...props }) => {
  return (
    <button 
      className={`bg-[#0057FF] text-white px-5 py-3 rounded-lg flex items-center justify-center cursor-pointer ${className || ''}`}
      onClick={onClick}
      {...props}
    >
      <span className="font-normal text-[15.88px] leading-[16px] tracking-[-0.32px] text-center">
        Register
      </span>
    </button>
  );
};

export default Button;