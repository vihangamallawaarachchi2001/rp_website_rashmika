"use client";

import React, { useState } from 'react';

const ResearchProblem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      id="research-problem"
      className="relative h-[80vh] bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/research-problem-background.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex h-full items-center justify-center text-white px-6 container mx-auto">
        {/* Left Half */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">Research Problem & Proposed Solution</h2>

          {/* Description content hidden on mobile */}
          <div className="hidden md:block">
            <p className="text-lg mb-5">
              The proposed solution addresses coral restoration challenges by implementing a task scheduling system that prioritizes and allocates tasks based on real-time data, ensuring efficient resource use and reduced downtime. This system aids project coordinators in informed decision-making and transparent resource allocation, aligning resources with urgent needs for maximum impact and clear communication to stakeholders.
            </p>
            <p className="text-lg mb-5">
              For species identification and growth monitoring, an image-based analysis method is used to accurately identify coral species and track growth patterns, isolating coral structures to monitor polyp density and growth areas. This comprehensive approach enhances restoration efficiency and adaptability to environmental changes.
            </p>
            <p className="text-lg mb-5">
              Community engagement is promoted through interactive elements that educate and involve locals, fostering support for conservation efforts and ensuring sustainable coral restoration outcomes.
            </p>
          </div>
        </div>

        {/* Right Half */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <button
            className="flex items-center justify-center w-20 h-20 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition text-3xl text-gray-900"
            onClick={openModal}
          >
            ▶
          </button>
          <p className="mt-4 text-lg font-semibold">Watch This Video</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-400 text-4xl font-bold z-50"
            onClick={closeModal}
          >
            &times;
          </button>
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl w-full">
            <div className="w-full h-0 pb-[56.25%] relative">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/K41hPgs6XJg"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResearchProblem;
