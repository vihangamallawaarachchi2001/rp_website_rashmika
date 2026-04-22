const milestonesData = [
  {
    date: "February 2024",
    title: "Project Proposal",
    description:
      "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
    marks: 12,
    progress: "0%",
  },
  {
    date: "May 2024",
    title: "Progress Presentation I",
    description:
      "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
    marks: 15,
    progress: "12%",
  },
  {
    date: "June 2024",
    title: "Research Paper",
    description:
      "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge.",
    marks: 10,
    progress: "27%",
  },
  {
    date: "September 2024",
    title: "Progress Presentation II",
    description:
      "Progress Presentation II reviews the 90% completion status and demonstration of the project. Along with a Poster presentation which describes the project as a whole.",
    marks: 18,
    progress: "37%",
  },
  {
    date: "October 2024",
    title: "Website Assessment",
    description:
      "The Website helps to promote our research project and reveals all details related to the project.",
    marks: 2,
    progress: "55%",
  },
  {
    date: "October 2021",
    title: "Final Presentation & Viva",
    description:
      "Viva is held individually to assess each member’s contribution to the project.",
    marks: 20,
    progress: "57%",
  },
  {
    date: "November 2021",
    title: "Final Report",
    description:
      "Final Report evaluates the completed project done throughout the year. Marks mentioned below include marks for Individual & group reports and also Final report.",
    marks: 19,
    progress: "77%",
  },
  {
    date: "November 2024",
    title: "Progress Reports",
    description:
      "Progress of the project is validated through the two Progress reports which are submited at 50% completion and 90% completion",
    marks: 2,
    progress: "96%",
  },
  {
    date: "November 2021",
    title: "Logbook",
    description:
      "Weekly of the project throughout the year is documented in the Logbook. This also include details of supervisor meetings and field visits",
    marks: 2,
    progress: "98%",
  },
];

const Milestones = () => {
  return (
    <section id="milestones" className="bg-gray-100 min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-20 py-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Milestones</h2>
        <p className="text-gray-700 text-lg mb-4">
          This section presents the key milestones achieved during the research project.
        </p>
        <p className="text-gray-700 text-lg mb-8">
          We provide a timeline of accomplishments and important events throughout the research journey.
        </p>
        <div className="relative flex flex-col items-center">
          {/* Vertical Line */}
          <div className="absolute w-0.5 bg-blue-300 h-full left-1/2 transform -translate-x-1/2"></div>
          {milestonesData.map((milestone, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row w-full mb-10 relative items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 md:-translate-y-3 bg-blue-500 h-6 w-6 rounded-full z-10"></div>
              
              {/* Card */}
              <div
                className={`w-full md:w-1/2 mt-8 ${
                  index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'
                }`}
              >
                <div className="bg-white p-6 rounded-lg shadow-md relative border border-gray-200 transition duration-300 group hover:bg-gray-800 hover:border-gray-800 mr-10 ml-10">
                  <div
                    className={`absolute transform -translate-y-1/2 ${
                      index % 2 !== 0 ? '-right-3' : '-left-3'
                    } bg-white w-3 h-3 rotate-45 border border-gray-200 group-hover:border-gray-800 group-hover:bg-gray-800`}
                  ></div>
                  <div className="text-blue-500 text-lg mb-3 group-hover:text-white">{milestone.date}</div>
                  <h3 className="text-gray-800 text-xl font-semibold mb-2 group-hover:text-white">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 text-base mb-4 group-hover:text-gray-200">
                    {milestone.description}
                  </p>
                  <div className="text-sm text-gray-700 mb-2 group-hover:text-gray-300">
                    Marks Allocated: {milestone.marks}%
                  </div>

                  {/* Two-Color Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2 flex">
                    <div
                      className="h-2 rounded-l-full"
                      style={{
                        width: milestone.progress,
                        backgroundColor: 'rgb(34,197,94)', // First color (green)
                      }}
                    ></div>
                    <div
                      className="h-2 rounded-r-full"
                      style={{
                        width: milestone.marks + '%',
                        backgroundColor: 'rgb(59,130,246)', // Second color (blue)
                      }}
                    ></div>
                  </div>
                  <div className="text-sm text-blue-700 group-hover:text-gray-300 text-right">
                    {milestone.marks + parseInt(milestone.progress)}% COMPLETED
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

export default Milestones;
