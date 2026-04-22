"use client"; // This ensures the component runs only on the client side

import { FaMicroscope, FaExclamationTriangle, FaTools, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ResearchObjectives = () => {
    // Define animation variants for the events
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' }
        }
    };

    return (
        <section id="research-objectives" className="pt-20 bg-gray-100">
            <div className="container mx-auto px-6 lg:px-20 py-10">
                <h2 className="text-4xl font-bold text-center mb-8">Research Objectives</h2>
                <div className="flex flex-col items-center relative">
                    {/* Timeline line */}
                    <div className="absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2 md:left-1/2 md:transform-none"></div>

                    {/* Objective 1 */}
                    <motion.div
                        className="flex flex-col md:flex-row items-center w-3/4 md:w-1/2 relative mb-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                    >
                        <div className="flex justify-center items-center w-12 h-12 bg-blue-500 text-white rounded-full mb-4 md:mb-0 md:mr-6">
                            <FaMicroscope className="text-2xl" />
                        </div>
                        <div className="flex flex-col bg-white p-6 shadow-lg rounded-lg w-full">
                            <h3 className="text-xl font-semibold mb-2">Enhanced Identification and Monitoring</h3>
                            <p>
                                Develop a robust system utilizing advanced imaging technologies and machine 
                                learning algorithms to improve the accuracy of identifying coral species and 
                                monitoring their growth stages, enhancing conservation efforts.
                            </p>
                        </div>
                    </motion.div>

                    {/* Objective 2 */}
                    <motion.div
                        className="flex flex-col md:flex-row-reverse items-center w-3/4 md:w-1/2 relative mb-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                    >
                        <div className="flex justify-center items-center w-12 h-12 bg-red-500 text-white rounded-full mb-4 md:mb-0 md:ml-6">
                            <FaExclamationTriangle className="text-2xl" />
                        </div>
                        <div className="flex flex-col bg-white p-6 shadow-lg rounded-lg w-full">
                            <h3 className="text-xl font-semibold mb-2">Real-time Coral Threat Detection</h3>
                            <p>
                                Implement a monitoring system that detects real-time threats to coral reefs, such as 
                                environmental stressors or anthropogenic impacts, and uses these data to optimize 
                                the scheduling of monitoring activities, ensuring timely interventions.
                            </p>
                        </div>
                    </motion.div>

                    {/* Objective 3 */}
                    <motion.div
                        className="flex flex-col md:flex-row items-center w-3/4 md:w-1/2 relative mb-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                    >
                        <div className="flex justify-center items-center w-12 h-12 bg-green-500 text-white rounded-full mb-4 md:mb-0 md:mr-6">
                            <FaTools className="text-2xl" />
                        </div>
                        <div className="flex flex-col bg-white p-6 shadow-lg rounded-lg w-full">
                            <h3 className="text-xl font-semibold mb-2">Optimal Allocation of Resources</h3>
                            <p>
                                Design a framework for the efficient allocation of resources and labor that 
                                maximizes the effectiveness of conservation efforts, ensuring that the right 
                                resources are used at the right time and place for maximum impact.
                            </p>
                        </div>
                    </motion.div>

                    {/* Objective 4 */}
                    <motion.div
                        className="flex flex-col md:flex-row-reverse items-center w-3/4 md:w-1/2 relative mb-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                    >
                        <div className="flex justify-center items-center w-12 h-12 bg-purple-500 text-white rounded-full mb-4 md:mb-0 md:ml-6">
                            <FaUsers className="text-2xl" />
                        </div>
                        <div className="flex flex-col bg-white p-6 shadow-lg rounded-lg w-full">
                            <h3 className="text-xl font-semibold mb-2">Community Engagement Platform</h3>
                            <p>
                                Create an interactive community platform that enables stakeholders to engage in 
                                accurate discussions and receive personalized, dynamic recommendations. This 
                                platform will facilitate better decision-making and increase community involvement 
                                in coral conservation strategies.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ResearchObjectives;
