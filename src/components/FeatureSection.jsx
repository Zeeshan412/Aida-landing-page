import React from 'react';
import Container from '../layouts/Container';
import { DraftPetitions, InstantLegalChat, LegalTemplates } from '../assets';

const features = [
  {
    title: 'Instant Legal Chat',
    description:
      'Transform existing processes with AI-powered workflows integrated into your  martech stack, so you can embed AI into every marketing process, empowering every marketer.',
    icon: InstantLegalChat,
  },
  {
    title: 'Draft Petitions',
    description:
      'Transform existing processes with AI-powered workflows integrated into your  martech stack, so you can embed AI into every marketing process, empowering every marketer.',
    icon: DraftPetitions,
  },
  {
    title: 'Legal Templates',
    description:
      'Transform existing processes with AI-powered workflows integrated into your  martech stack, so you can embed AI into every marketing process, empowering every marketer.',
    icon: LegalTemplates,
  },
];

const FeatureSection = () => (
  <Container>
    <section className="w-full flex flex-col items-center py-16 bg-gradient-to-b from-[#F5F7FA] to-[#C3CFE2]">
      <h2 className="font-poppins font-semibold text-[30px] md:text-[48px] leading-[104px] tracking-[-1px] text-center mb-4">
        Feature Sections
      </h2>
      <p className="font-['Plus Jakarta Sans'] font-normal text-[18px] leading-[150%] tracking-[-0.3px] text-black text-center mb-12">
        What Can AiDA Do for You?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-16 gap-x-6 md:gap-x-12 w-full max-w-6xl px-2 sm:px-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white/10 border border-white/30 rounded-[8px] p-4 sm:p-6 flex flex-col justify-between text-center min-h-[180px] sm:min-h-[220px] md:min-h-[260px] w-full md:w-[300px] lg:w-[360px] md:h-[300px] shadow-lg backdrop-blur relative"
          >
            <div className="flex items-center justify-between w-full mb-2 sm:mb-4">
              <h3 className="font-['Plus Jakarta Sans'] font-medium text-[20px] sm:text-[24px] md:text-[30px] leading-[28px] sm:leading-[32px] md:leading-[34.6px] tracking-[-1.26px] text-black text-left">
                {feature.title}
              </h3>
              <img
                src={feature.icon}
                alt="icon"
                className="w-[20px] h-[20px] sm:w-[23px] sm:h-[23px] ml-2 object-contain"
              />
            </div>
            <p className="font-['Plus Jakarta Sans'] font-normal text-[15px] sm:text-[16px] md:text-[18px] leading-[150%] tracking-[-0.3px] text-black text-left">
              {feature.description}
            </p>
            <button className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-transparent p-0 m-0 shadow-none hover:bg-transparent">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 10H15M15 10L10 5M15 10L10 15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  </Container>
);

export default FeatureSection;
