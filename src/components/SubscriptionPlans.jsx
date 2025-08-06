import React from "react";

const CARD_COMMON =
  "rounded-[12px] shadow-[0_0_33px_0_#95CFFF4D] bg-white opacity-100 absolute";

const SubscriptionPlans = () => (
  <div className="relative w-full max-w-[1440px] min-h-[746px] flex flex-col items-center justify-center mx-auto mt-6 mb-12">
    <h2 className="font-poppins font-semibold text-[32px] md:text-[48px] leading-[48px] md:leading-[104px] tracking-[-1px] text-center mb-8 align-middle">
      Subscription Plans
    </h2>
    {/* Responsive cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl px-2 sm:px-4">
      {/* Basic Plan */}
      <div className="relative rounded-[12px] bg-gradient-to-b from-gray-400 to-white border border-[#E0E0E0] w-full min-h-[400px] md:w-[317px] md:h-[440px] flex-shrink-0 overflow-hidden flex flex-col">
        <div className="rounded-t-[12px] bg-gray-400 flex flex-col items-center justify-center pt-8 pb-4">
          <h3 className="font-poppins font-semibold text-[20px] md:text-[22px] text-white mb-2">
            Basic Plan
          </h3>
          <div className="font-poppins font-bold text-[22px] md:text-[28px] text-[#FFD700] mb-5">
            500 €
          </div>
          <button className="mt-[-1.5rem] px-4 md:px-6 py-2 rounded-full bg-black text-white font-poppins font-semibold text-[15px] md:text-[16px] hover:bg-gray-800 transition">
            Get Started
          </button>
        </div>
        <div className="bg-white rounded-b-[12px] flex flex-col items-center justify-center pt-6 px-4 flex-1">
          <div className="font-poppins text-[14px] md:text-[15px] text-gray-700 mb-4 text-center">
            Perfect for individuals starting out with legal AI tools.
          </div>
          <ul className="text-[13px] md:text-[14px] text-gray-600 list-disc pl-4 mb-2 text-left w-full max-w-[220px]">
            <li>Up to 100 chats/month</li>
            <li>Basic templates</li>
            <li>Email support</li>
          </ul>
        </div>
      </div>
      {/* Standard Plan */}
      <div className="relative rounded-[12px] bg-gradient-to-b from-[#0A2540] to-white border-2 border-[#2563eb] w-full min-h-[400px] md:w-[325px] md:h-[440px] flex-shrink-0 overflow-hidden flex flex-col">
        <div className="rounded-t-[12px] bg-[#0A2540] flex flex-col items-center justify-center pt-12 pb-6">
          <h3 className="font-poppins font-semibold text-[20px] md:text-[22px] text-white mb-2">
            Standard Plan
          </h3>
          <div
            className="font-poppins font-bold text-[22px] md:text-[28px] text-[#FFD700] mb-5"
            style={{ marginTop: "-0.75rem" }}
          >
            1200 €
          </div>
          <button className="mt-[-1.5rem] px-4 md:px-6 py-2 rounded-full bg-white text-[#0A2540] font-poppins font-semibold text-[15px] md:text-[16px] hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
        <div className="bg-white rounded-b-[12px] flex flex-col items-center justify-center pt-6 px-4 flex-1">
          <div className="font-poppins text-[14px] md:text-[15px] text-gray-700 mb-4 text-center">
            For professionals who need more features and flexibility.
          </div>
          <ul className="text-[13px] md:text-[14px] text-gray-600 list-disc pl-4 mb-2 text-left w-full max-w-[220px]">
            <li>Unlimited chats</li>
            <li>Advanced templates</li>
            <li>Priority email support</li>
          </ul>
        </div>
      </div>
      {/* Premium Plan */}
      <div className="relative rounded-[12px] bg-gradient-to-b from-[#0A2540] to-white border border-[#2563eb] w-full min-h-[400px] md:w-[313px] md:h-[501px] flex-shrink-0 overflow-hidden flex flex-col">
        <div className="rounded-t-[12px] bg-[#0A2540] flex flex-col items-center justify-center pt-8 pb-4">
          <h3 className="font-poppins font-semibold text-[20px] md:text-[22px] text-white mb-2">
            Premium Plan
          </h3>
          <div className="font-poppins font-bold text-[22px] md:text-[28px] text-[#FFD700] mb-2">
            2500 €
          </div>
          <button className="mt-4 px-4 md:px-6 py-2 rounded-full bg-white text-[#0A2540] font-poppins font-semibold text-[15px] md:text-[16px] hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
        <div className="bg-white rounded-b-[12px] flex flex-col items-center justify-center pt-6 px-4 flex-1">
          <div className="font-poppins text-[14px] md:text-[15px] text-gray-700 mb-4 text-center">
            Best for teams and organizations with advanced needs.
          </div>
          <ul className="text-[13px] md:text-[14px] text-gray-600 list-disc pl-4 mb-2 text-left w-full max-w-[220px]">
            <li>Unlimited chats</li>
            <li>All templates</li>
            <li>Dedicated support</li>
            <li>Team management</li>
          </ul>
        </div>
      </div>
    </div>
    {/* Mobile cards: stacked layout */}
    {/* Removed mobile cards to avoid duplicate plans on mobile. Desktop layout remains unchanged. */}
  </div>
);

export default SubscriptionPlans;