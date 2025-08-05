import React from 'react';
import stars from '../assets/svgs/stars.svg';

const IconBadge = () => (
  <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center h-10 w-20 bg-white rounded-full ml-1 min-w-[80px]">
    <img src={stars} alt="stars" className="w-4 h-4 mr-2 flex-shrink-0" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
    <span className="font-regular text-black text-base">New</span>
  </div>
);

export default IconBadge;
