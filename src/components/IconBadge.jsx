import React from 'react';
import { Stars } from '../assets';

const IconBadge = () => (
  <aside className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center h-8 sm:h-9 md:h-10 w-16 sm:w-18 md:w-20 bg-white rounded-full ml-1 min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
    <img
      src={Stars}
      alt="stars"
      className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mr-1 sm:mr-1.5 md:mr-2 flex-shrink-0 flex items-center justify-center"
    />
    <span className="font-regular text-black text-xs sm:text-sm md:text-base">New</span>
  </aside>
);

export default IconBadge;
