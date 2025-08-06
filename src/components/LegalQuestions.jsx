import React from 'react';

const LegalQuestionsSection = () => {
  // Data for the legal question cards
  const legalQuestions = [
    {
      id: 1,
      question: "How do I file a petition in Turkish court?",
      answer: "To file a petition, follow these steps.",
      isPopular: true,
    },
    {
      id: 2,
      question: "How do I file a petition in Turkish court?",
      answer: "To file a petition, follow these steps.",
      isPopular: true,
    },
    {
      id: 3,
      question: "How do I file a petition in Turkish court?",
      answer: "To file a petition, follow these steps.",
      isPopular: true,
    },
  ];

  // ChevronRight Icon SVG component
  const ChevronRightIcon = ({ className }) => (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );

  return (
    <section className="flex flex-col items-center px-4 py-16 w-full max-w-[1197px] mx-auto">
      <div className="text-center mb-12 max-w-[900px]">
        <h2 className="font-poppins font-semibold text-[2.8rem] md:text-[3rem] leading-tight tracking-tight text-[#092d50] mb-6">
          Explore Common Legal Questions
        </h2>
        <p className="font-poppins font-normal text-[1.13rem] md:text-[1.2rem] leading-relaxed tracking-tight text-[#092d50]">
          Discover what others are asking AiDA and see its expert responses
        </p>
      </div>
      <div className="legal-questions-grid">
        {legalQuestions.map((item) => (
          <div
            key={item.id}
            className="relative bg-white border border-black/15 shadow-[0_4px_13.8px_rgba(0,0,0,0.2)] rounded-lg h-[220px] cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]"
          >
            <div className="h-full relative p-0">
              {item.isPopular && (
                <div className="absolute top-[13px] right-[22px] bg-[#dae8ff] text-[#1656b8] rounded font-normal text-[11.9px] tracking-[0.7px] h-[23px] px-[6px] flex items-center font-poppins">
                  POPULAR
                </div>
              )}
              <div className="p-[26px] flex flex-col h-full">
                <h3 className="font-poppins font-normal text-[1.5rem] leading-[30px] tracking-tight text-[#262627] mb-2 mt-8">
                  {item.question}
                </h3>
                <p className="font-['Arial'] font-normal text-[0.9rem] leading-[19.5px] tracking-tight text-[#262627] mb-auto mt-2">
                  {item.answer}
                </p>
                <div className="flex items-center mt-2">
                  <span className="font-['Arial'] font-normal text-[15px] tracking-tight text-[#262627]">
                    Continue to chat
                  </span>
                  <ChevronRightIcon className="ml-1 text-[#262627]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LegalQuestionsSection;