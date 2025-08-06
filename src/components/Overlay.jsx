import React from 'react';
import chatToAida from '../assets/svgs/chat to aida.svg';

const Overlay = () => {
  // Suggested questions data
  const suggestedQuestions = [
    {
      text: "What are the steps to file a petition?",
      prefix: "Suggested :",
      showPrefix: true,
    },
    {
      text: "How can I draft a legal contract?",
      showPrefix: false,
    },
    {
      text: "What are the court fees for a case?",
      showPrefix: false,
    },
  ];

  // X Icon SVG component
  const XIcon = ({ className }) => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m18 6-12 12" />
      <path d="m6 6 12 12" />
    </svg>
  );

  return (
    <div className="w-full max-w-[1199px] mx-auto -mt-16 mb-8 shadow-[0_4px_13.8px_rgba(0,0,0,0.2)] border border-[rgba(0,0,0,0.15)] rounded-lg bg-white z-20 relative">
      <div className="p-8">
        <div>
          <h2 className="font-semibold font-poppins text-[#092d50] leading-8 tracking-normal mb-6 text-[2rem] sm:text-[2.3rem] md:text-[2.8rem] text-center">
            Try AiDA, You Will Get the Answer
          </h2>
        </div>

        <div className="mb-6 opacity-75 font-poppins font-normal text-[#092d50] text-[1.18rem] leading-[1.875rem]">
          Type your question below and experience AiDA's power.
        </div>

        <div className="mb-6">
          <div className="relative">
            <input
              className="h-[55px] bg-[#f2f2f2] rounded-xl px-4 opacity-75 font-poppins font-normal text-[#b6b6b6] text-[1.18rem] leading-[1.875rem] border border-[#e2e8f0] w-full outline-none"
              placeholder="Write a question here to ask..........."
            />
            <img
              src={chatToAida}
              alt="Chat to Aida"
              className="absolute right-4 top-1/2 -translate-y-1/2 h-[60px] w-[60px] pointer-events-none md:h-[150px] md:w-[150px]"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {suggestedQuestions.map((question, index) => (
            <button
              key={index}
              className="h-[46px] px-6 rounded-full border-2 border-white shadow-[0_5.1px_10.9px_rgba(0,0,0,0.125),0_0.9px_1.9px_rgba(0,0,0,0.114),0_0.1px_0.2px_rgba(0,0,0,0.102)] bg-gradient-to-b from-[rgba(255,255,255,0.3)] via-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0)] flex items-center justify-between cursor-pointer transition-all duration-200 ease-in hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,0,0,0.15),0_1px_2px_rgba(0,0,0,0.12)]"
            >
              <div className="flex items-center">
                {question.showPrefix && (
                  <span className="mr-2 font-poppins font-semibold text-[#092d50] text-[0.93rem] tracking-[-0.32px] leading-[1.1rem]">
                    {question.prefix}
                  </span>
                )}
                <span className="font-poppins font-medium text-[#092d50] text-[0.88rem] tracking-[0.30px]">
                  {question.text}
                </span>
              </div>
              <XIcon className="ml-2 text-[#092d50]" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overlay;