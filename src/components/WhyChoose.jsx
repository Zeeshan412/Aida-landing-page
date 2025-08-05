import React from "react";
import { BgWhyChoose, Adds } from "../assets";
import MbWhyChoose from "../assets/svgs/mbwhychoose.svg";
import WhyChooseButton from "./WhyChooseButton";
import Back from "../assets/svgs/back.svg";
import Front from "../assets/svgs/front.svg";
import Container from "../layouts/Container";

const WhyChoose = () => {
  return (
    <Container>
      <section
        className="why-choose w-full relative flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[683px] py-12 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: `url(${BgWhyChoose})` }}
      >
        <style>{`
          @media (max-width: 767px) {
            .why-choose {
              background-image: url(${MbWhyChoose}) !important;
            }
            .whychoose-mobile-svg {
              width: 120px !important;
              height: 110px !important;
            }
            .whychoose-mobile-svg-front {
              width: 120px !important;
              height: 110px !important;
              margin-top: -40px !important;
            }
            .whychoose-mobile-svg-adds {
              width: 90px !important;
              height: 98px !important;
              margin-top: 8px !important;
            }
          }
          @media (min-width: 768px) and (max-width: 1023px) {
            .why-choose-svg-back {
              width: 320px !important;
              height: 250px !important;
              left: 600px !important;
              top: 80px !important;
              border-radius: 24px !important;
            }
            .why-choose-svg-front {
              width: 320px !important;
              height: 250px !important;
              left: 500px !important;
              top: 140px !important;
              border-radius: 24px !important;
            }
            .why-choose-svg-adds {
              width: 120px !important;
              height: 130px !important;
              left: 720px !important;
              top: 400px !important;
            }
          }
        `}</style>
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
        <h2
          className="w-full max-w-[671px] text-[56.6px] leading-[68px] font-poppins font-semibold text-white text-center md:text-left mt-[120px] md:mt-0 md:absolute left-[128px] top-[120px] opacity-100"
          style={{ letterSpacing: 0 }}
        >
          Why Choose AiDA?
        </h2>
        <div className="w-full max-w-[519px] flex flex-col items-center md:items-start md:absolute left-[130px] top-[200px] opacity-100">
          <p
            className="text-[24px] leading-[40px] font-poppins font-normal text-white text-center md:text-left"
            style={{ letterSpacing: 0 }}
          >
            AiDA is a powerful AI assistant designed to simplify legal processes in
            Turkey. Whether it’s drafting petitions, answering legal queries, or
            providing legal templates, AiDA saves you time and effort with accurate
            and reliable answers.
          </p>
          <WhyChooseButton className="w-fit mt-12" />
        </div>
        {/* SVGs after heading and paragraph for mobile */}
        <div className="relative flex flex-col items-center mt-10 md:hidden w-full">
          <img
            src={Back}
            alt="back decoration"
            className="whychoose-mobile-svg rounded-[16px] border-2 border-white opacity-100 z-0"
          />
          <img
            src={Front}
            alt="front decoration"
            className="whychoose-mobile-svg-front rounded-[16px] border-2 border-white opacity-100 z-10"
          />
          <img
            src={Adds}
            alt="adds decoration"
            className="whychoose-mobile-svg-adds opacity-100 pointer-events-none select-none z-20"
          />
        </div>
        {/* Empty section for future content */}
      </section>
    </Container>
  );
};

export default WhyChoose;
