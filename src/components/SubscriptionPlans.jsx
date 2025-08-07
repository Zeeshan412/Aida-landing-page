import React from 'react';

const CARD_COMMON = 'rounded-[12px] shadow-[0_0_33px_0_#95CFFF4D] bg-white opacity-100 absolute';

const SubscriptionPlans = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '500 €',
      bg: 'bg-gradient-to-b from-gray-400 to-white border border-[#E0E0E0]',
      button: 'bg-black text-white hover:bg-gray-800',
      features: ['Up to 100 chats/month', 'Basic templates', 'Email support'],
      description: 'Perfect for individuals starting out with legal AI tools.',
    },
    {
      name: 'Standard Plan',
      price: '1200 €',
      bg: 'bg-gradient-to-b from-[#0A2540] to-white border-2 border-[#2563eb]',
      button: 'bg-white text-[#0A2540] hover:bg-gray-200',
      features: ['Unlimited chats', 'Advanced templates', 'Priority email support'],
      description: 'For professionals who need more features and flexibility.',
    },
    {
      name: 'Premium Plan',
      price: '2500 €',
      bg: 'bg-gradient-to-b from-[#0A2540] to-white border border-[#2563eb]',
      button: 'bg-white text-[#0A2540] hover:bg-gray-200',
      features: ['Unlimited chats', 'All templates', 'Dedicated support', 'Team management'],
      description: 'Best for teams and organizations with advanced needs.',
    },
  ];

  return (
    <section className="relative w-full max-w-[1440px] min-h-[746px] flex flex-col items-center justify-center mx-auto mt-6 mb-12">
      <h2 className="font-poppins font-semibold text-[28px] sm:text-[32px] md:text-[48px] leading-[1.2] sm:leading-[48px] md:leading-[104px] tracking-[-1px] text-center mb-6 sm:mb-8 align-middle px-4">
        Subscription Plans
      </h2>
      {/* Responsive cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl px-4 sm:px-6">
        {plans.map((plan, idx) => (
          <article
            key={plan.name}
            className={`relative rounded-[12px] ${plan.bg} w-full min-h-[400px] md:w-[317px] md:h-[440px] flex-shrink-0 overflow-hidden flex flex-col`}
          >
            <div className="rounded-t-[12px] flex flex-col items-center justify-center pt-8 pb-4">
              <h3 className="font-poppins font-semibold text-[20px] md:text-[22px] text-white mb-2">
                {plan.name}
              </h3>
              <div className="font-poppins font-bold text-[22px] md:text-[28px] text-[#FFD700] mb-5">
                {plan.price}
              </div>
              <button
                className={`mt-[-1.5rem] px-4 md:px-6 py-2 rounded-full font-poppins font-semibold text-[15px] md:text-[16px] transition ${plan.button}`}
              >
                Get Started
              </button>
            </div>
            <div className="bg-white rounded-b-[12px] flex flex-col items-center justify-center pt-6 px-4 flex-1">
              <div className="font-poppins text-[14px] md:text-[15px] text-gray-700 mb-4 text-center">
                {plan.description}
              </div>
              <ul className="text-[13px] md:text-[14px] text-gray-600 list-disc pl-4 mb-2 text-left w-full max-w-[220px]">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      {/* Mobile cards: stacked layout */}
      {/* Removed mobile cards to avoid duplicate plans on mobile. Desktop layout remains unchanged. */}
    </section>
  );
};

export default SubscriptionPlans;
