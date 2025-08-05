import React from 'react';

const ChatboxButtons = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center mt-6 w-full max-w-[410px] mx-auto place-items-center">
    <button
      className="bg-blue-600 text-white font-poppins font-medium rounded-lg shadow hover:bg-blue-700 transition w-full min-w-[36vw] sm:min-w-[140px] max-w-[195px] h-[47px] border-radius-[8px] opacity-100"
    >
      Try Me
    </button>
    <LearnMoreButton />
  </div>
);

export const LearnMoreButton = (props) => (
  <button
    className="bg-transparent border border-white text-white font-poppins font-medium rounded-lg hover:bg-grey-100 transition w-full min-w-[36vw] sm:min-w-[140px] max-w-[195px] h-[47px] border-radius-[8px] opacity-100"
    {...props}
  >
    Learn More
  </button>
);

export default ChatboxButtons;
