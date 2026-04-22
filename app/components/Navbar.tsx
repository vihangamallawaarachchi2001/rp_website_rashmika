"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDomainOpen, setIsDomainOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDomainMenu = () => setIsDomainOpen(!isDomainOpen);
  const toggleResourcesMenu = () => setIsResourcesOpen(!isResourcesOpen);
  const closeMenus = () => {
    setIsOpen(false);
    setIsDomainOpen(false);
    setIsResourcesOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 ${
        hasScrolled
          ? 'bg-gradient-to-r from-blue-100 to-blue-50 shadow-md text-gray-800'
          : 'bg-transparent text-white'
      } py-3`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
          <Link href="#home" onClick={closeMenus}>
            <img
              src="/blue-logo.svg"
              alt="CoralRevive Logo"
              className={`transition-all duration-300 w-auto ${
                hasScrolled ? 'h-16' : 'h-20'
              }`}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="#home" className="hover:text-blue-600">Home</Link>

          {/* Domain Menu */}
          <div className="relative">
            <button
              onClick={toggleDomainMenu}
              className="hover:text-blue-600 flex items-center focus:outline-none"
            >
              Domain
              <svg className={`ml-1 w-4 h-4 transition-transform ${isDomainOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDomainOpen && (
              <div className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-1 text-gray-800">
                <Link href="#literature-survey" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMenus}>Literature Survey</Link>
                <Link href="#research-gap" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMenus}>Research Gap</Link>
                <Link href="#research-problem" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMenus}>Research Problem</Link>
                <Link href="#research-objectives" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMenus}>Research Objectives</Link>
                <Link href="#methodology" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMenus}>Methodology</Link>
                <Link href="#technologies-used" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMenus}>Technologies Used</Link>
              </div>
            )}
          </div>

          <Link href="#milestones" className="hover:text-blue-600">Milestones</Link>

          {/* Resources Menu */}
          <div className="relative">
            <button
              onClick={toggleResourcesMenu}
              className="hover:text-blue-600 flex items-center focus:outline-none"
            >
              Resources
              <svg className={`ml-1 w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isResourcesOpen && (
              <div className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-1 text-gray-800">
                <Link href="#documents" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMenus}>Documents</Link>
                <Link href="#documents" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMenus}>Presentations</Link>
              </div>
            )}
          </div>

          <Link href="#about" className="hover:text-blue-600">About Us</Link>
          <Link href="#contact" className="hover:text-blue-600">Contact Us</Link>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-inherit text-xl">☰</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-white p-2 space-y-2 text-gray-800">
          <Link href="#home" onClick={closeMenus}>Home</Link>

          <div>
            <button onClick={toggleDomainMenu} className="flex items-center focus:outline-none">
              Domain
              <svg className={`ml-1 w-4 h-4 transition-transform ${isDomainOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDomainOpen && (
              <div className="mt-1 pl-4 space-y-1">
                <Link href="#literature-survey" onClick={closeMenus}>Literature Survey</Link>
                <Link href="#research-gap" onClick={closeMenus}>Research Gap</Link>
                <Link href="#research-problem" onClick={closeMenus}>Research Problem</Link>
                <Link href="#research-objectives" onClick={closeMenus}>Research Objectives</Link>
                <Link href="#methodology" onClick={closeMenus}>Methodology</Link>
                <Link href="#technologies-used" onClick={closeMenus}>Technologies Used</Link>
              </div>
            )}
          </div>

          <Link href="#milestones" onClick={closeMenus}>Milestones</Link>

          <div>
            <button onClick={toggleResourcesMenu} className="flex items-center focus:outline-none">
              Resources
              <svg className={`ml-1 w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isResourcesOpen && (
              <div className="mt-1 pl-4 space-y-1">
                <Link href="#documents" onClick={closeMenus}>Documents</Link>
                <Link href="#documents" onClick={closeMenus}>Presentations</Link>
              </div>
            )}
          </div>

          <Link href="#about" onClick={closeMenus}>About Us</Link>
          <Link href="#contact" onClick={closeMenus}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
