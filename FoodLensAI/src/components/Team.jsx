import { AtSymbolIcon, LinkIcon } from "@heroicons/react/24/outline";

import RashmikaImage from "../assets/Rashmika.png";
import NithilImage from "../assets/Nithil.png";
import SakuniImage from "../assets/Sakuni.png";
import TehanImage from "../assets/Tehan.png";
import samadhiImage from "../assets/Samadhi.jpeg";
import nelumImage from "../assets/Nelum.jpeg";
import sudathImage from "../assets/Sudath.png";
import WishalyaMadamImage from "../assets/WishalyaMadamImage.png"
import JennyMadamImage from "../assets/JennyMadamImage.png"
const people = [
  {
    name: "Rashmika Rupasinghe",
    title: "Group Leader",
    organization: "Sri Lanka Institute of Information Technology",
    department: "Data Science",
    imageUrl: RashmikaImage,
    linkedInUrl: "https://www.linkedin.com/in/rashmika-rupasinghe-9047a1246/",
    email: "it22106360@my.sliit.lk",
  },
  {
    name: "Nithil Waduge",
    title: "Group Member",
    organization: "Sri Lanka Institute of Information Technology",
    department: "Data Science",
    imageUrl: NithilImage,
    linkedInUrl: "https://www.linkedin.com/in/nithil-waduge-67965824b/",
    email: "IT22148490@my.sliit.lk ",
  },
  {
    name: "Sakuni Dakshina",
    title: "Group Member",
    organization: "Sri Lanka Institute of Information Technology",
    department: "Data Science",
    imageUrl: SakuniImage,
    linkedInUrl: "https://www.linkedin.com/in/sakuni-dakshina-4893b42a3/",
    email: "IT22283894@my.sliit.lk ",
  },
  {
    name: "Tehan Nimsitha",
    title: "Group Member",
    organization: "Sri Lanka Institute of Information Technology",
    department: "Data Science",
    imageUrl: TehanImage,
    linkedInUrl: "https://www.linkedin.com/in/tehannimsitha/",
    email: "IT22193872@my.sliit.lk",
  },
  {
    name: "Mr. Wishalya Tissera",
    title: "Supervisor",
    organization: "Sri Lanka Institute of Information Technology",
    department: "Information Technology",
    imageUrl: WishalyaMadamImage,
    linkedInUrl: "https://www.linkedin.com/in/wishalya-tissera/",
    email: "wishalyatissera@gmail.com",
  },
  {
    name: "Mr. Samadhi Rathnayake",
    title: "Co-Supervisor",
    organization: "Sri Lanka Institute of Information Technology",
    department: "Information Technology",
    imageUrl: samadhiImage,
    linkedInUrl:
      "https://www.linkedin.com/in/nelum-chathuranga-amarasena-703a66176/",
    email: "samadhi.r@sliit.lk",
  },
  {
    name: "Ms.Jenny Krishara",
    title: "Supervisor",
    organization: "Sri Lanka Institute of Information Technology",
    department: "Information Technology",
    imageUrl: JennyMadamImage,
    linkedInUrl: "https://www.linkedin.com/in/jenny-krishara-1a09a0111/",
    email: "jenny.k@sliit.lk",
  },
];

const TeamMember = ({ person }) => (
  <li className="flex flex-col items-center hover:shadow-lg transition-shadow bg-white p-4 lg:p-6 rounded-lg shadow-md bg-opacity-70 lg:bg-opacity-50">
    <img
      className="h-32 w-32 rounded-full object-cover"
      src={person.imageUrl}
      alt={person.name}
    />
    <div className="mt-6 text-center">
      <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
        {person.name}
      </h3>
      <p className="text-sm font-semibold leading-6 text-cyan-600">
        {person.title}
      </p>
      <p className="text-sm leading-6 text-gray-500">{person.organization}</p>
      <p className="text-sm leading-6 text-gray-500">{person.department}</p>
      <div className="mt-3 flex justify-center gap-4">
        {person.email && (
          <a
            href={`mailto:${person.email}`}
            className="text-gray-400 hover:text-gray-500"
          >
            <AtSymbolIcon className="h-5 w-5" aria-hidden="true" />
          </a>
        )}
        <a
          href={person.linkedInUrl}
          className="text-gray-400 hover:text-gray-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkIcon className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  </li>
);

const Team = () => {
  return (
    <div id="about-us" className="py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our team of undergraduate students and expert supervisors combines diverse skills to drive innovation and research, working collaboratively to deliver impactful solutions.
          </p>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 lg:gap-y-12 mt-12"
        >
          {people.slice(0, 4).map((person) => (
            <TeamMember key={person.name} person={person} />
          ))}
        </ul>

        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 lg:gap-y-12 mt-4 lg:mt-12"
        >
          {people.slice(4).map((person) => (
            <TeamMember key={person.name} person={person} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
