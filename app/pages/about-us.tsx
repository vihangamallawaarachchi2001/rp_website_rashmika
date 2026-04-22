import React from 'react';
import Image from 'next/image';
import Supervisor from '../../public/supervisor.png';
import CoSupervisor from '../../public/co-supervisor.png';
import CoSupervisor2 from '../../public/co-supervisor2.jpg';
import Admiral from '../../public/admiral.jpg';
import Member1 from '../../public/anusara.jpg';
import Member2 from '../../public/dilshi.jpg';
import Member3 from '../../public/nimesha.jpeg';
import Member4 from '../../public/hiranya.jpg';
import SLIIT from '../../public/sliit.png';
import Murdoch from '../../public/murdoch.png';
import Navy from '../../public/navy.png';

const AboutUs = () => {
    const teamMembers = [
      { name: 'Mr. Samadhi Rathnayake', contribution: 'SUPERVISOR', linkTag: 'G-SCHOLAR', link: 'https://scholar.google.com/citations?hl=en&user=FoFCbM8AAAAJ', gmail: 'mailto:samadhi.r@sliit.lk', title: 'Senior Lecturer', company: 'Sri Lanka Institute of', location: 'Information Technology', image: Supervisor, workImage: SLIIT },
      { name: 'Mr. Samitha Vidhanaarachchi', contribution: 'CO-SUPERVISOR', linkTag: 'G-SCHOLAR', link: 'https://scholar.google.com/citations?user=FGlT1w0AAAAJ&hl=en&oi=ao', gmail: 'mailto:samithapva@gmail.com', title: 'Doctoral Researcher', company: 'Murdoch University', location: 'Australia', image: CoSupervisor, workImage: Murdoch },
      { name: 'Ms. Hansi De Silva', contribution: 'CO-SUPERVISOR', linkTag: 'G-SCHOLAR', link: 'https://scholar.google.com/citations?user=iwbzstMAAAAJ&hl=en&oi=ao', gmail: 'mailto:hansi.desilva@domain.com', title: 'Lecturer', company: 'Sri Lanka Institute of', location: 'Information Technology', image: CoSupervisor2, workImage: SLIIT },
      { name: 'Admiral Piyal De Silva', contribution: 'EXTERNAL SUPERVISOR', linkTag: 'WIKIPEDIA', link: 'https://en.wikipedia.org/wiki/Piyal_De_Silva', gmail: 'mailto:piyal64@yahoo.com', title: 'Commander (Retd)', company: 'Sri Lanka Navy', location: '', image: Admiral, workImage: Navy },
      { name: 'Anusara Weerasooriya', contribution: 'GROUP LEADER', linkTag: 'LINKEDIN', link: 'https://www.linkedin.com/in/kavindu-anusara/', gmail: 'mailto:anusaraweerasooriya@gmail.com', title: 'Graduate', company: 'Sri Lanka Institute of', location: 'Information Technology', image: Member1, workImage: SLIIT },
      { name: 'Dilshi Wanniarachchi', contribution: 'GROUP MEMBER', linkTag: 'LINKEDIN', link: 'https://www.linkedin.com/in/dilshiw/', gmail: 'mailto:dilshiwanniarachchi@gmail.com', title: 'Graduate', company: 'Sri Lanka Institute of', location: 'Information Technology', image: Member2, workImage: SLIIT },
      { name: 'Nimesha Priyabandu', contribution: 'GROUP MEMBER', linkTag: 'LINKEDIN', link: 'https://www.linkedin.com/in/nimesha-priyabandu-521b74239/', gmail: 'mailto:sanduninimesha2000@gmail.com', title: 'Graduate', company: 'Sri Lanka Institute of', location: 'Information Technology', image: Member3, workImage: SLIIT },
      { name: 'Hiranya Peiris', contribution: 'GROUP MEMBER', linkTag: 'LINKEDIN', link: 'https://www.linkedin.com/in/hiranyapeiris/', gmail: 'mailto:peirissemini@gmail.com', title: 'Graduate', company: 'Sri Lanka Institute of', location: 'Information Technology', image: Member4, workImage: SLIIT }
    ];

    return (
      <section id="about" className="min-h-screen py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-20 py-10">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
              <p className="text-gray-700 text-lg mb-4">
                  This section introduces the team behind the coral restoration project and our mission.
              </p>
              <p className="text-gray-700 text-lg">
                  Learn more about our background, expertise, and passion for coral conservation.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-10">
                  {teamMembers.map((member, index) => (
                      <div key={index} className="max-w-xs p-2 w-full sm:w-2/5 lg:w-1/5">
                          <div className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
                              <div
                                  className="bg-cover bg-center h-72 p-4"
                                  style={{ backgroundImage: `url(${member.image.src})` }}
                              ></div>
                              <div className="p-4">
                                  <p className="text-l font-bold text-gray-900">{member.name}</p>
                                  <p className="uppercase tracking-wide text-xs font-semibold text-gray-700 mt-2">{member.contribution}</p>
                              </div>
                              <div className="flex p-4 border-t border-gray-300 text-gray-700 space-x-6 justify-between">
                                  <a href={member.link} className="text-blue-500 font-bold">{member.linkTag}</a>
                                  <a href={member.gmail} className="text-blue-500 font-bold text-right">G-MAIL</a>
                              </div>
                              <div className="px-4 pt-2 pb-4 border-t border-gray-300 bg-gray-100">
                                  <div className="text-xs uppercase font-semibold text-gray-600 tracking-wide mt-3">{member.title}</div>
                                  <div className="flex items-center pt-2">
                                      <div
                                          className="bg-cover bg-center w-8 h-8 mr-4"
                                          style={{ backgroundImage: `url(${member.workImage.src})` }}
                                      ></div>
                                      <div>
                                          <p className="text-gray-700 text-sm">{member.company}</p>
                                          <p className="text-gray-700 text-sm">{member.location}</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    );
};

export default AboutUs;
