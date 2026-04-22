"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 z-50 p-2 text-sm bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition md:bottom-6 md:right-6 md:p-3 md:text-base"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
}
