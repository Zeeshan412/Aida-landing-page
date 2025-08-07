import React from 'react';
import { BgWhyChoose, Adds, Back, Front, MbWhyChoose } from '../assets';
import WhyChooseButton from './WhyChooseButton';
import Container from '../layouts/Container';

const WhyChoose = () => {
  return (
    <Container>
      <section
        className="why-choose w-full relative flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[683px] py-12 bg-cover bg-center bg-no-repeat opacity-100 bg-[image:var(--bg-why-choose)]"
        style={{ '--bg-why-choose': `url(${BgWhyChoose})` }}
      >
        {/* Absolutely positioned SVGs for md+ screens */}
        <img
          src={Adds}
          alt="adds decoration"
          className="hidden md:block absolute w-[153px] h-[166px] left-[60px] -top-[26px] opacity-100 pointer-events-none select-none"
        />
        <img
          src={Adds}
          alt="adds decoration"
          className="hidden md:block absolute w-[153px] h-[166px] left-[720px] top-[509px] opacity-100 pointer-events-none select-none"
        />
        <img
          src={Back}
          alt="back decoration"
          className="hidden md:block absolute why-choose-svg-back w-[220px] h-[180px] md:w-[320px] md:h-[250px] lg:w-[455px] lg:h-[418px] left-[60vw] md:left-[600px] lg:left-[863px] top-[60px] md:top-[80px] lg:top-[91px] opacity-100 rounded-[16px] md:rounded-[24px] lg:rounded-[55px] border-2 border-white z-0 object-contain"
        />
        <img
          src={Front}
          alt="front decoration"
          className="hidden md:block absolute why-choose-svg-front w-[220px] h-[180px] md:w-[320px] md:h-[250px] lg:w-[455px] lg:h-[418px] left-[48vw] md:left-[500px] lg:left-[789px] top-[120px] md:top-[140px] lg:top-[201px] opacity-100 rounded-[16px] md:rounded-[24px] lg:rounded-[55px] border-2 border-white z-0 object-contain"
        />
        <img
          src={Adds}
          alt="adds decoration"
          className="hidden md:block absolute why-choose-svg-adds w-[90px] h-[98px] md:w-[120px] md:h-[130px] lg:w-[153px] lg:h-[166px] left-[30vw] md:left-[720px] lg:left-[720px] top-[320px] md:top-[400px] lg:top-[509px] opacity-100 pointer-events-none select-none object-contain"
        />
        <h2 className="w-full max-w-[671px] text-[32px] sm:text-[42px] md:text-[56.6px] leading-[1.2] md:leading-[68px] font-poppins font-semibold text-white text-center md:text-left mt-[60px] sm:mt-[80px] md:mt-0 md:absolute left-4 sm:left-8 md:left-[128px] top-[120px] opacity-100 tracking-normal px-4 md:px-0">
          Why Choose AiDA?
        </h2>
        <article className="w-full max-w-[519px] flex flex-col items-center md:items-start md:absolute left-4 sm:left-8 md:left-[130px] top-[200px] opacity-100 px-4 md:px-0">
          <p className="text-[16px] sm:text-[18px] md:text-[24px] leading-[1.6] md:leading-[40px] font-poppins font-normal text-white text-center md:text-left tracking-normal">
            AiDA is a powerful AI assistant designed to simplify legal processes in Turkey. Whether
            it's drafting petitions, answering legal queries, or providing legal templates, AiDA
            saves you time and effort with accurate and reliable answers.
          </p>
          <WhyChooseButton className="w-fit mt-6 sm:mt-8 md:mt-12" />
        </article>
        {/* Desktop: Only right-side Adds SVG, no center images */}
        <figure className="hidden md:flex w-full justify-end items-start relative mb-8 min-h-[120px]">
          <img src={Adds} alt="adds" className="w-24 lg:w-36 h-auto opacity-80 mr-8 mt-4" />
        </figure>
        {/* Mobile: Stack and center Back, Front, and Adds images */}
        <figure className="flex flex-col items-center mt-10 md:hidden w-full gap-2">
          <img
            src={Back}
            alt="back"
            className="w-24 h-20 sm:w-32 sm:h-28 rounded-2xl border-2 border-white opacity-100 z-0"
          />
          <img
            src={Front}
            alt="front"
            className="w-24 h-20 sm:w-32 sm:h-28 rounded-2xl border-2 border-white opacity-100 z-10"
          />
          <img
            src={Adds}
            alt="adds"
            className="w-16 h-16 sm:w-20 sm:h-20 opacity-100 pointer-events-none select-none z-20"
          />
        </figure>
        {/* Heading and paragraph remain centered and responsive */}
      </section>
    </Container>
  );
};

export default WhyChoose;
