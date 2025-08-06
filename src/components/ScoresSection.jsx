import React from "react";
import Container from "../layouts/Container";
import InstantLegalChat from '../assets/svgs/instant legal chat.svg';
import WhyChooseButton from "./WhyChooseButton";
import { BgWhyChoose } from "../assets";

const ScoresSection = () => (
  <Container>
    <section
      className="w-full flex flex-col items-start py-8 md:py-16 bg-cover bg-center bg-no-repeat min-h-[400px] md:min-h-[500px] lg:min-h-[600px] relative"
      style={{ backgroundImage: `url(${BgWhyChoose})` }}
    >
      <div className="flex items-center gap-2 mb-2 ml-4 md:ml-[172px] mt-8 md:mt-[65px]">
        <img src={InstantLegalChat} alt="Instant Legal Chat" className="w-4 h-4 md:w-3 md:h-3 inline-block align-middle filter invert" />
        <span className="font-['Plus Jakarta Sans'] font-normal text-[16px] md:text-[15.63px] leading-[16px] tracking-[-0.32px] text-white capitalize block">
          The legal AI Toolkit
        </span>
      </div>
      <h3 className="font-['Plus Jakarta Sans'] font-normal text-[28px] md:text-[48px] leading-[36px] md:leading-[60px] tracking-[-1.2px] md:tracking-[-2.4px] text-white text-left mb-4 md:mb-8 w-full max-w-[90vw] md:max-w-[474px] ml-4 md:ml-[165px]">
        Unveiling the Impact of Smart Legal Solutions
      </h3>
      <div className="ml-4 md:ml-[165px] mb-6 md:mb-0">
        <WhyChooseButton />
      </div>
      {/* Scores content, no card wrapper */}
      <div className="block lg:hidden w-full mt-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-start">
            <span className="font-['Plus Jakarta Sans'] font-semibold text-[36px] leading-[44px] text-white">12K+</span>
            <span className="font-['Inter'] font-medium text-[14px] leading-[22px] text-[#2672FF] px-2 py-1 rounded-full mt-[-6px]">Active Users</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-['Plus Jakarta Sans'] font-semibold text-[36px] leading-[44px] text-white">25K+</span>
            <span className="font-['Inter'] font-medium text-[14px] leading-[22px] text-[#2672FF] px-2 py-1 rounded-full mt-[-6px]">Chats Completed</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-['Plus Jakarta Sans'] font-semibold text-[36px] leading-[44px] text-white">15K+</span>
            <span className="font-['Inter'] font-medium text-[14px] leading-[22px] text-[#2672FF] px-2 py-1 rounded-full mt-[-6px]">Forms Generated</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-['Plus Jakarta Sans'] font-semibold text-[36px] leading-[44px] text-white">95%</span>
            <span className="font-['Inter'] font-medium text-[14px] leading-[22px] text-[#2672FF] px-2 py-1 rounded-full mt-[-6px] ml-2">Client Satisfaction</span>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute right-[80px] top-[180px] w-[556px] h-[273px] z-10">
        <div className="absolute left-0 top-0 flex flex-col items-start w-[50%] pl-8">
          <span className="font-['Plus Jakarta Sans'] font-semibold text-[70px] leading-[84px] text-white">12K+</span>
          <span className="font-['Inter'] font-medium text-[18px] leading-[30px] text-[#2672FF] px-3 py-1 rounded-full mt-[-10px]">Active Users</span>
        </div>
        <div className="absolute right-0 top-0 flex flex-col items-end w-[50%] pr-8">
          <span className="font-['Plus Jakarta Sans'] font-semibold text-[70px] leading-[84px] text-white">25K+</span>
          <span className="font-['Inter'] font-medium text-[18px] leading-[30px] text-[#2672FF] px-3 py-1 rounded-full mt-[-10px]">Chats Completed</span>
        </div>
        <div className="absolute left-0 bottom-0 flex flex-col items-start w-[50%] pl-8">
          <span className="font-['Plus Jakarta Sans'] font-semibold text-[70px] leading-[84px] text-white">15K+</span>
          <span className="font-['Inter'] font-medium text-[18px] leading-[30px] text-[#2672FF] px-3 py-1 rounded-full mt-[-10px]">Forms Generated</span>
        </div>
        <div className="absolute right-0 bottom-0 flex flex-col items-end w-[50%] pr-24">
          <span className="font-['Plus Jakarta Sans'] font-semibold text-[70px] leading-[84px] text-white">95%</span>
          <span className="font-['Inter'] font-medium text-[18px] leading-[30px] text-[#2672FF] px-3 py-1 rounded-full mt-[-10px] ml-8">Client Satisfaction</span>
        </div>
      </div>
    </section>
  </Container>
);

export default ScoresSection;
