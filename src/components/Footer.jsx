import React from 'react';
import Container from '../layouts/Container';
import { BgWhyChoose } from '../assets/index';

const Footer = () => (
  <Container>
    <footer
      className="w-full max-w-[1440px] mx-auto bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center min-h-[650px] sm:min-h-[550px] md:min-h-[361px] opacity-100 relative bg-[image:var(--bg-why-choose)]"
      style={{ '--bg-why-choose': `url(${BgWhyChoose})` }}
    >
      {/* Footer content goes here */}
      <div className="flex flex-col w-full h-full py-6 md:py-10">
          {/* Logo - Desktop positioning preserved, mobile responsive */}
          <header className="absolute left-4 sm:left-8 md:left-[117px] top-6 md:top-[55px] w-[90px] md:w-[120px] h-auto mb-4 md:mb-6 flex justify-center items-center">
          <svg
            width="112"
            height="50"
            viewBox="0 0 112 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M37.5221 26.405C36.3315 35.2067 28.8189 42.0249 19.7463 42.0249C19.2126 42.0249 18.72 41.9835 18.1863 41.9422L18.6789 40.3306C19.0484 40.372 19.3768 40.372 19.7463 40.372C27.8336 40.372 34.5663 34.4216 35.8389 26.653L37.5221 26.405Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.7464 5.90918C29.6401 5.90918 37.6864 14.0084 37.6864 23.967C37.6864 24.5042 37.6453 25.0827 37.6043 25.6199L36.0443 24.9588C36.0443 24.6282 36.0853 24.2976 36.0853 23.967C36.0853 14.8761 28.778 7.52075 19.7464 7.52075C14.9843 7.52075 10.7148 9.58686 7.71796 12.8513L6.15796 12.1902C9.44217 8.30587 14.2864 5.90918 19.7464 5.90918Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.9222 28.3886L37.5632 26.0332L5.87061 12.4795L6.65061 14.4216L32.3496 25.4134L20.6085 27.1902L16.8317 39.5456L17.7759 41.901L21.9222 28.3886Z"
              fill="#092540"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.3212 26.8596L30.9128 25.248L6.85596 14.9587L20.3212 26.8596Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.85596 14.9587L16.5854 38.967L20.3212 26.8596L6.85596 14.9587Z"
              fill="#0057FF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.1548 13.0579L39.698 34.8347H44.7064L46.3075 30.4132H55.298L56.9812 34.8347H62.0717L53.2043 13.0579H48.1548ZM47.7854 26.3223C48.3191 24.9174 48.8117 23.4711 49.3043 22.0661C49.6738 21.0331 50.2896 19.2562 50.5359 18.2231C50.618 17.8099 50.7001 17.3141 50.7412 16.9008C50.9464 18.4298 51.1517 19.1322 52.1369 21.9422C52.6706 23.3884 53.2043 24.876 53.738 26.3636H47.7854V26.3223Z"
              fill="white"
            />
            <path d="M68.1065 21.4463H63.7139V34.8347H68.1065V21.4463Z" fill="white" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M64.0832 18.1405C64.74 18.8017 65.5611 18.9257 65.9306 18.9257C67.3263 18.9257 68.5169 17.7686 68.5169 16.3224C68.5169 14.9174 67.3674 13.7191 65.9306 13.6777C64.5348 13.6777 63.3442 14.8348 63.3442 16.281C63.3442 16.9835 63.5906 17.686 64.0832 18.1405Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M71.5549 13.0579V34.8347H76.6044C79.5602 34.8347 82.557 34.7521 85.0202 32.7686C86.5391 31.6116 88.9202 28.6364 88.9202 23.719C88.9202 22.562 88.8381 20.3306 87.3191 17.8512C86.7855 16.9422 85.8002 15.3719 83.4602 14.2562C81.0381 13.1405 78.4928 13.0992 75.9476 13.0992H71.5549V13.0579ZM76.276 16.8595C78.657 16.8182 80.5455 17.0248 81.9823 18.1405C84.2402 19.9174 84.3223 23.0579 84.3223 23.8017C84.3223 27.2727 82.8034 29.1322 81.5718 29.9587C80.0118 30.9917 78.0412 30.9917 76.276 30.9917V16.8595Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M97.2948 13.0579L88.7969 34.8347H93.8053L95.4063 30.4132H104.397L106.08 34.8347H111.171L102.303 13.0579H97.2948ZM96.8842 26.3223C97.4179 24.9174 97.9106 23.4711 98.4032 22.0661C98.7727 21.0331 99.3885 19.2562 99.6348 18.2231C99.7169 17.8099 99.799 17.3141 99.84 16.9008C100.045 18.4298 100.251 19.1322 101.236 21.9422C101.77 23.3884 102.303 24.876 102.837 26.3636H96.8842V26.3223Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M87.3191 37.7687C87.0318 37.6447 86.7034 37.5207 86.416 37.3968C85.3486 37.0249 84.3223 36.9835 83.9528 36.9835C83.6244 36.9835 82.6802 37.0249 81.777 37.3968C81.0381 37.686 80.3812 38.1819 79.8476 38.7604C79.396 39.2563 79.1497 39.6695 79.0265 39.9174C78.5339 40.8678 78.3286 42.0662 78.3286 43.0992C78.3286 45.7439 79.6423 47.2728 80.4223 47.9339C81.777 49.1323 83.4602 49.1736 84.0349 49.1736C85.636 49.1736 86.8265 48.5951 87.3191 48.3885V45.6612C87.1139 45.8265 86.9086 45.9505 86.7444 46.0744C86.1697 46.4877 85.4307 46.6943 85.1433 46.7769C84.7328 46.8596 84.4455 46.8596 84.2812 46.8596C82.1055 46.8596 81.3255 45.372 81.0791 44.6282C80.8739 43.967 80.8328 43.4298 80.8328 43.1819C80.8328 41.1984 81.9002 40.1654 82.5981 39.7521C83.2549 39.3802 83.9528 39.3389 84.2402 39.3389C85.8412 39.3389 86.9086 40.2893 87.3191 40.6612V37.7687ZM88.7149 36.5703V48.843H91.0139V45.248C91.0139 44.6695 91.0549 44.091 91.5886 43.7191C91.7118 43.6364 91.9581 43.4711 92.3686 43.4711C92.656 43.4711 92.7791 43.5538 92.9023 43.5951C93.5181 43.8844 93.477 44.5042 93.477 45.0827V48.843H95.817V44.1323C95.817 43.6778 95.817 43.2645 95.6528 42.8513C95.3244 41.9009 94.2981 41.4463 93.3539 41.4463C92.1633 41.4463 91.4655 42.1075 91.1781 42.4381C91.137 42.5207 91.096 42.6034 91.0139 42.6447V36.5703H88.7149ZM103.042 42.686C102.878 42.4794 102.714 42.2728 102.468 42.1075C101.729 41.529 100.949 41.529 100.62 41.529C99.7581 41.529 99.0191 41.7769 98.3623 42.3968C97.2949 43.4298 97.2539 44.8348 97.2539 45.3306C97.2539 46.7356 97.8697 48.2232 99.2244 48.843C99.7991 49.1323 100.374 49.1323 100.579 49.1323C101.523 49.1323 102.262 48.7604 102.55 48.5538C102.714 48.4298 102.878 48.3059 103.042 48.1406V48.843H105.341V41.6943H103.042V42.686ZM101.4 43.4711C102.468 43.4711 103.165 44.3389 103.165 45.4133C103.165 46.405 102.509 47.2728 101.482 47.2728C100.99 47.2728 100.661 47.1075 100.538 46.9835C100.21 46.7769 99.717 46.2811 99.717 45.2893C99.717 45.0414 99.717 44.5042 100.128 44.0083C100.579 43.5125 101.154 43.4711 101.4 43.4711ZM109.857 39.1323H107.517V41.6943H106.532V43.4298H107.517V48.843H109.816V43.4298H111.13V41.6943H109.857V39.1323Z"
              fill="#0057FF"
            />
          </svg>
          </header>
        {/* Description - Desktop positioning preserved, mobile responsive */}
        <article>
          <p className="font-['Plus Jakarta Sans'] font-normal text-[14px] md:text-[16px] leading-[150%] tracking-[-0.02em] text-white absolute left-4 sm:left-8 md:left-[107px] top-20 md:top-[120px] max-w-[80vw] sm:max-w-[70vw] md:max-w-[350px] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </article>
        {/* Navigation Links - Hidden on mobile, visible on desktop */}
        <nav className="absolute hidden md:flex top-[130px] left-[500px] transform -translate-y-1/2 flex-col gap-4 z-10">
          <a
            href="#"
            className="font-['Plus Jakarta Sans'] font-normal text-[16px] leading-[150%] tracking-[-0.02em] text-white hover:underline transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="font-['Plus Jakarta Sans'] font-normal text-[16px] leading-[150%] tracking-[-0.02em] text-white hover:underline transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="font-['Plus Jakarta Sans'] font-normal text-[16px] leading-[150%] tracking-[-0.02em] text-white hover:underline transition-colors"
          >
            Pricing
          </a>
          <a
            href="#"
            className="font-['Plus Jakarta Sans'] font-normal text-[16px] leading-[150%] tracking-[-0.02em] text-white hover:underline transition-colors"
          >
            Contact
          </a>
        </nav>
        {/* Social Media - Desktop positioning preserved, mobile repositioned */}
        <aside className="absolute top-[180px] left-4 sm:top-[160px] sm:left-8 md:top-[90px] md:left-[45%] lg:left-[45%] transform md:-translate-y-1/2 flex flex-col items-start md:items-center z-10">
          <span className="font-['Plus Jakarta Sans'] font-semibold text-[14px] sm:text-[16px] text-white mb-2 sm:mb-3 md:mr-22">
            Social
          </span>
          <div className="flex flex-row gap-2 md:gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="p-1 hover:bg-white/10 rounded-md transition-colors"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-white">
                <path
                  d="M17 2.05A10 10 0 1 0 12 22V14.89h-2.13V12h2.13v-2.2c0-2.1 1.26-3.25 3.18-3.25.92 0 1.88.16 1.88.16v2.07h-1.06c-1.05 0-1.38.65-1.38 1.32V12h2.35l-.38 2.89h-1.97V22A10 10 0 0 0 17 2.05Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="p-1 hover:bg-white/10 rounded-md transition-colors"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-white">
                <path
                  d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 12 9.03c0 .34.04.67.1.99A12.13 12.13 0 0 1 3.1 4.87a4.28 4.28 0 0 0 1.32 5.7c-.7-.02-1.36-.22-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.19c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.28 4.28 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-1 hover:bg-white/10 rounded-md transition-colors"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-white">
                <rect
                  width="18"
                  height="18"
                  x="3"
                  y="3"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="p-1 hover:bg-white/10 rounded-md transition-colors"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-white">
                <rect
                  width="18"
                  height="18"
                  x="3"
                  y="3"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M8 11v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="8" cy="8" r="1" fill="currentColor" />
                <path
                  d="M12 16v-3a2 2 0 1 1 4 0v3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </aside>
        {/* Newsletter Subscribe - Desktop positioning preserved, mobile layout adjusted */}
        <section className="absolute top-[250px] left-4 right-4 sm:top-[240px] sm:left-8 sm:right-8 md:top-[118px] md:left-[55%] lg:left-[55%] md:right-auto md:transform md:-translate-y-1/2 flex flex-col md:items-center z-10">
          <span className="font-['Plus Jakarta Sans'] font-semibold text-[16px] sm:text-[18px] text-white mb-2 sm:mb-3 md:-ml-[170px] md:mt-[30px]">
            Subscribe
          </span>
          <span className="font-['Plus Jakarta Sans'] font-normal text-[14px] sm:text-[16px] text-white mb-2 md:ml-[25px] max-w-[300px]">
            Join our community to receive updates
          </span>
          {/* Mobile/Small Screen Layout */}
          <div className="md:hidden flex flex-col gap-3 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-[44px] rounded-[160px] bg-[#E2EDF9] text-[#092540] px-4 sm:px-6 text-[14px] sm:text-[16px] outline-none border-none placeholder:text-[#092540]/60 placeholder-shown:text-[#092540]/60"
            />
            <button className="w-full h-[44px] rounded-[160px] bg-[#0057FF] text-white font-['Plus Jakarta Sans'] font-medium text-[14px] sm:text-[16px] hover:bg-[#0047CC] transition-colors">
              Subscribe
            </button>
          </div>
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center relative mt-2 ml-[130px] gap-5">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-[251px] h-[44px] rounded-[160px] bg-[#E2EDF9] text-[#092540] px-6 text-[16px] outline-none border-none placeholder:text-[#092540]/60"
            />
            <button className="w-[116px] h-[44px] rounded-[160px] bg-[#0057FF] text-white flex items-center justify-center hover:bg-[#0047CC] transition-colors">
              Subscribe
            </button>
          </div>
          <span className="font-['Plus Jakarta Sans'] font-normal text-[10px] sm:text-[12px] text-white mt-4 opacity-80 leading-[150%] tracking-[-0.01em] md:ml-6 max-w-[300px]">
            By subscribing, you agree to our Privacy Policy
          </span>
        </section>
        {/* Footer Links - Desktop positioning preserved, mobile repositioned */}
        <nav className="absolute bottom-16 left-4 sm:bottom-14 sm:left-8 md:bottom-6 md:left-8 lg:left-34 flex flex-col sm:flex-row gap-1 sm:gap-8 z-10">
          <a
            href="#"
            className="font-['Plus Jakarta Sans'] font-normal text-[12px] sm:text-[14px] leading-[150%] sm:leading-[180%] md:leading-[240%] tracking-[-0.02em] text-[#8C8F9D] hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="font-['Plus Jakarta Sans'] font-normal text-[12px] sm:text-[14px] leading-[150%] sm:leading-[180%] md:leading-[240%] tracking-[-0.02em] text-[#8C8F9D] hover:text-white transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="font-['Plus Jakarta Sans'] font-normal text-[12px] sm:text-[14px] leading-[150%] sm:leading-[180%] md:leading-[240%] tracking-[-0.02em] text-[#8C8F9D] hover:text-white transition-colors"
          >
            Cookie Policy
          </a>
        </nav>
        {/* Copyright - Positioned on the right side */}
        <small className="absolute bottom-6 right-4 sm:right-8 md:bottom-6 md:right-16 flex flex-row gap-8 z-10 text-right max-w-[200px] sm:max-w-none">
          <span className="font-['Plus Jakarta Sans'] font-normal text-[10px] sm:text-[12px] md:text-[14px] leading-[120%] sm:leading-[150%] md:leading-[240%] tracking-[-0.02em] text-[#8C8F9D]">
            © 2024 James Alonso. All rights reserved
          </span>
        </small>
      </div>
    </footer>
  </Container>
);

export default Footer;
