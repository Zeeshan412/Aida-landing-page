import React from "react";

const WhyChooseButton = ({ className = "", ...props }) => (
  <button
    className={`bg-transparent border border-white text-white font-poppins font-medium rounded-lg hover:bg-gray-100 transition w-full min-w-[140px] max-w-[195px] h-[47px] opacity-100 ${className}`}
    {...props}
  >
    Learn More
  </button>
);

export default WhyChooseButton;
