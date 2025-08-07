import React from 'react';
import Container from '../layouts/Container';
import { Madam } from '../assets';
import SubscriptionPlans from './SubscriptionPlans';

const UsersSaySection = () => {
  const testimonials = [
    {
      title: 'Seamless Collaboration',
      text: 'Working with AiDA was a seamless experience. The team quickly understood our needs and delivered solutions that exceeded our expectations. Their expertise and dedication made the process smooth and efficient.',
      bg: 'bg-white',
    },
    {
      title: 'Incredible Experience',
      text: 'We had an incredible experience working with AiDA and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.',
      bg: 'bg-[#F5F7FA]',
    },
  ];

  return (
    <Container>
      <section className="w-full flex flex-col items-center py-16 bg-gradient-to-b from-[#F5F7FA] to-[#C3CFE2]">
        <h2 className="font-poppins font-semibold text-[30px] md:text-[48px] leading-[104px] tracking-[-1px] text-center mb-2">
          What Our Users Say
        </h2>
        <p className="font-['Plus Jakarta Sans'] font-normal text-[18px] leading-[150%] tracking-[-0.3px] text-black text-center mb-10">
          What Can AiDA Do for You?
        </p>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl px-2 sm:px-4 justify-center">
          {testimonials.map((t, idx) => (
            <article
              key={t.title}
              className={`flex-1 flex flex-col items-center rounded-[8px] shadow-lg p-8 min-h-[309px] max-w-[588px] border border-gray-200 w-full md:w-[588px] h-auto md:h-[309px] opacity-100 ${t.bg}`}
            >
              <h3 className="font-poppins font-medium text-[24px] leading-[28px] tracking-[0] text-center">
                {t.title}
              </h3>
              <p className="font-poppins font-normal text-[18px] leading-[24px] tracking-[0.5px] text-center mt-4">
                {t.text}
              </p>
            </article>
          ))}
        </div>
        {/* Madam SVGs under the boxes */}
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl px-2 sm:px-4 justify-center mt-6">
          <div className="flex-1 flex justify-center max-w-full md:max-w-[588px]">
            <img src={Madam} alt="madam" className="w-[209px] h-[56px] max-w-full" />
          </div>
          <div className="flex-1 flex justify-center max-w-full md:max-w-[588px]">
            <img src={Madam} alt="madam" className="w-[209px] h-[56px] max-w-full" />
          </div>
        </div>

        <SubscriptionPlans />
      </section>
    </Container>
  );
};

export default UsersSaySection;
