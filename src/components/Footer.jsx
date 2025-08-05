import React from "react";
import Container from "../layouts/Container";
import { BgWhyChoose } from "../assets";
import Logo2 from "../assets/svgs/logo2.svg";

const Footer = () => (
  <Container>
    <footer
      className="w-full max-w-[1440px] mx-auto bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${BgWhyChoose})`,
        minHeight: "361px",
        opacity: 1,
        position: "relative",
      }}
    >
      {/* Footer content goes here */}
      <div className=" flex flex-col w-full h-full py-10">
        <img
          src={Logo2}
          alt="AiDA Logo"
          className=" absolute left-[117px] "
          style={{ position: "absolute" }}
        />
      </div>
      <div>
      <p className="font-['Plus Jakarta Sans'] font-normal text-[16px] leading-[150%] tracking-[-0.02em] text-white absolute left-[110px] top-[185px] max-w-[300px] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </p>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-10">
        <a href="#" className="font-['Plus Jakarta Sans'] font-normal text-[18px] leading-[150%] tracking-[-0.02em] text-white hover:underline">Home</a>
        <a href="#" className="font-['Plus Jakarta Sans'] font-normal text-[18px] leading-[150%] tracking-[-0.02em] text-white hover:underline">About</a>
        <a href="#" className="font-['Plus Jakarta Sans'] font-normal text-[18px] leading-[150%] tracking-[-0.02em] text-white hover:underline">Pricing</a>
        <a href="#" className="font-['Plus Jakarta Sans'] font-normal text-[18px] leading-[150%] tracking-[-0.02em] text-white hover:underline">Contact</a>
      </div>
      <div className="absolute top-1/2 left-[65%] transform -translate-y-1/2 flex flex-col items-center z-10">
        <span className="font-['Plus Jakarta Sans'] font-semibold text-[18px] text-white mb-3">Social</span>
        <div className="flex flex-row gap-4">
          <a href="#" aria-label="Facebook">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-white"><path d="M17 2.05A10 10 0 1 0 12 22V14.89h-2.13V12h2.13v-2.2c0-2.1 1.26-3.25 3.18-3.25.92 0 1.88.16 1.88.16v2.07h-1.06c-1.05 0-1.38.65-1.38 1.32V12h2.35l-.38 2.89h-1.97V22A10 10 0 0 0 17 2.05Z" fill="currentColor"/></svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-white"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 12 9.03c0 .34.04.67.1.99A12.13 12.13 0 0 1 3.1 4.87a4.28 4.28 0 0 0 1.32 5.7c-.7-.02-1.36-.22-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.19c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.28 4.28 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7Z" fill="currentColor"/></svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-white"><rect width="18" height="18" x="3" y="3" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-white"><rect width="18" height="18" x="3" y="3" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M8 11v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="8" cy="8" r="1" fill="currentColor"/><path d="M12 16v-3a2 2 0 1 1 4 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </a>
        </div>
      </div>
    </footer>
  </Container>
);

export default Footer;
