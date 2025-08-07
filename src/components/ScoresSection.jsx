import React from 'react';
import Container from '../layouts/Container';
import InstantLegalChat from '../assets/svgs/instant legal chat.svg';
import WhyChooseButton from './WhyChooseButton';
import { BgWhyChoose } from '../assets';

const ScoresSection = () => {
  const scores = [
    { value: '12K+', label: 'Active Users' },
    { value: '25K+', label: 'Chats Completed' },
    { value: '15K+', label: 'Forms Generated' },
    { value: '95%', label: 'Client Satisfaction' },
  ];

  return (
    <Container>
      <section
        className="w-full flex flex-col items-start py-8 md:py-16 bg-cover bg-center bg-no-repeat min-h-[400px] md:min-h-[500px] lg:min-h-[600px] relative bg-[image:var(--bg-why-choose)]"
        style={{ '--bg-why-choose': `url(${BgWhyChoose})` }}
      >
        <header className="flex items-center gap-2 mb-2 ml-4 md:ml-[172px] mt-8 md:mt-[65px]">
          <img
            src={InstantLegalChat}
            alt="Instant Legal Chat"
            className="w-4 h-4 md:w-3 md:h-3 inline-block align-middle filter invert"
          />
          <span className="font-['Plus Jakarta Sans'] font-normal text-[16px] md:text-[15.63px] leading-[16px] tracking-[-0.32px] text-white capitalize block">
            The legal AI Toolkit
          </span>
        </header>
        <h3 className="font-['Plus Jakarta Sans'] font-normal text-[28px] md:text-[48px] leading-[36px] md:leading-[60px] tracking-[-1.2px] md:tracking-[-2.4px] text-white text-left mb-4 md:mb-8 w-full max-w-[90vw] md:max-w-[474px] ml-4 md:ml-[165px]">
          Unveiling the Impact of Smart Legal Solutions
        </h3>
        <div className="ml-4 md:ml-[165px] mb-6 md:mb-0">
          <WhyChooseButton />
        </div>
        {/* Scores content, no card wrapper */}
        <section className="block lg:hidden w-full mt-8 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {scores.map((score, idx) => (
              <article
                key={score.label}
                className={`flex flex-col ${idx % 2 === 0 ? 'items-start' : 'items-end'} mb-4`}
              >
                <span className="font-['Plus Jakarta Sans'] font-semibold text-[28px] sm:text-[36px] leading-[1.2] sm:leading-[44px] text-white">
                  {score.value}
                </span>
                <span className="font-['Inter'] font-medium text-[12px] sm:text-[14px] leading-[1.5] sm:leading-[22px] text-[#2672FF] px-2 py-1 rounded-full mt-[-6px]">
                  {score.label}
                </span>
              </article>
            ))}
          </div>
        </section>
        <section className="hidden lg:block absolute right-[80px] top-[180px] w-[556px] h-[273px] z-10">
          {scores.map((score, idx) => (
            <article
              key={score.label}
              className={`absolute ${
                [
                  'left-0 top-0 flex flex-col items-start w-[50%] pl-8',
                  'right-0 top-0 flex flex-col items-end w-[50%] pr-8',
                  'left-0 bottom-0 flex flex-col items-start w-[50%] pl-8',
                  'right-0 bottom-0 flex flex-col items-end w-[50%] pr-24',
                ][idx]
              }`}
            >
              <span className="font-['Plus Jakarta Sans'] font-semibold text-[70px] leading-[84px] text-white">
                {score.value}
              </span>
              <span
                className={`font-['Inter'] font-medium text-[18px] leading-[30px] text-[#2672FF] px-3 py-1 rounded-full mt-[-10px] ${idx === 3 ? 'ml-8' : ''}`}
              >
                {score.label}
              </span>
            </article>
          ))}
        </section>
      </section>
    </Container>
  );
};

export default ScoresSection;
