import React from 'react';
import { HeroBg } from '../assets/index';
import Chatbox from './Chatbox';

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[637px] px-2 sm:px-4 md:px-8 bg-cover bg-center bg-no-repeat bg-[image:var(--hero-bg)]"
      style={{ '--hero-bg': `url(${HeroBg})` }}
    >
      <div className="absolute inset-0 w-full h-full bg-black/40 z-0" aria-hidden="true"></div>
      <header className="relative z-10 pt-[80px] sm:pt-[100px] md:pt-[120px] flex flex-col items-center w-full max-w-[1200px] mx-auto">
        <h1 className="w-full max-w-[755px] text-center font-['Poppins'] font-semibold text-[28px] sm:text-[40px] md:text-[48px] leading-[120%] sm:leading-[140%] md:leading-[150%] tracking-[-1px] break-words">
          <span className="text-white">Empowering Your</span>{' '}
          <span className="text-[#0057FF]">Legal Journey</span>
        </h1>
        <p className="text-white text-center mt-6 max-w-[800px] mx-auto font-['Poppins'] text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed mb-10 px-2">
          We are dedicated to making legal services accessible. From drafting contracts to managing
          petitions, our AI-powered platform offers tailored solutions for all your legal needs.
        </p>
        <div className="w-full max-w-[816px] flex justify-start md:justify-center">
          <Chatbox />
        </div>
      </header>
    </section>
  );
};

export default Hero;
