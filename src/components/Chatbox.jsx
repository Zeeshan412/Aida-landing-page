import React from 'react';
import IconBadge from './IconBadge';
import ChatboxButtons from './ChatboxButtons';

const Chatbox = () => {
  return (
    <>
      <section className="relative w-full flex flex-col items-center px-2 sm:px-4 md:px-0">
        <form className="relative rounded-full w-full max-w-[816px] h-[47px] shadow-lg bg-gray-400 flex items-center px-2 sm:px-3 md:px-6 border-[2px] border-white min-w-0 overflow-hidden">
          <IconBadge />
          <fieldset className="flex-1 flex items-center relative justify-end pl-12 sm:pl-16 md:pl-20 min-w-0 border-none">
            <input
              type="text"
              className="w-full bg-transparent border-none outline-none text-black placeholder-black font-poppins font-medium text-[14px] leading-[1] tracking-[0.3px] py-3 pl-2 pr-10 min-w-0"
              placeholder="Introducing: What can an artificial intelligence specialised in Turkish law do at most?"
            />
            <button
              type="button"
              className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center h-8 w-8 rounded-full hover:bg-gray-100 transition"
              onClick={() => {
                /* handle send or any action here */
              }}
              aria-label="Send"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </fieldset>
        </form>
        <ChatboxButtons />
      </section>
    </>
  );
};

export default Chatbox;
