import React, { useState } from 'react';
import Button from './Button';
import Container from '../layouts/Container';
import { Logo } from '../assets/index';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItemClasses =
    "font-['Arial'] font-normal text-[15.13px] leading-[16.8px] tracking-[-0.32px] cursor-pointer";

  const navItems = [
    { label: 'What is Aida?', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Login', href: '#' },
  ];

  return (
    <nav className="w-full max-w-[1440px] h-[71px] bg-white relative mx-auto border-b-[0.67px] border-[#E0E0E1]">
      <div className="absolute top-0 right-0 w-full h-[0.67px] bg-[#E0E0E1]"></div>
      <Container>
        <div className="flex items-center justify-between h-[71px] w-full px-0 md:px-[139px]">
          <a href="#" className="flex items-center" aria-label="Aida Home">
            <img src={Logo} alt="Aida Logo" className="h-[50px]" />
          </a>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={navItemClasses}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Button />
            </li>
          </ul>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 p-2" aria-label="Open menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden absolute top-[71px] left-0 right-0 bg-white border-b border-[#E0E0E1] z-50 flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={`${navItemClasses} px-4 py-2`}>
                  {item.label}
                </a>
              </li>
            ))}
            <li className="px-4 py-2">
              <Button />
            </li>
          </ul>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
