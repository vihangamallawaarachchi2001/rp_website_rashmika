"use client";

import { motion } from 'framer-motion';
import { FaSearch, FaTasks, FaUsers } from 'react-icons/fa';

const ResearchGap = () => {
    // Animation variants for the cards with sequential delays
    const cardVariants = (delay = 0) => ({
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut', delay }
        }
    });

    return (
        <section id="research-gap" className="min-h-screen pt-20 bg-white">
            <div className="container mx-auto px-6 lg:px-20 py-10">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Research Gap</h2>
            
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    {/* Card 1 */}
                    <motion.div 
                        className="bg-white p-12 rounded-lg shadow-lg transition-colors duration-500 flex flex-col items-center text-center min-h-[350px] hover:bg-gray-800 group"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants(0)}
                    >
                        <FaSearch className="text-5xl text-gray-800 mb-6 group-hover:text-white transition-colors duration-500" />
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-white transition-colors duration-500">Species Identification and Growth Monitoring</h3>
                        <p className="text-gray-700 text-base group-hover:text-white transition-colors duration-500">
                            Advanced underwater imaging and data analysis technologies have not yet achieved the precision needed for accurate identification of coral species and monitoring their growth stages.
                        </p>
                    </motion.div>

                    {/* Card 2 - Middle Card (Larger) */}
                    <motion.div 
                        className="bg-white p-14 rounded-lg shadow-lg transition-colors duration-500 flex flex-col items-center text-center min-h-[450px] hover:bg-gray-800 group"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants(0.2)}
                    >
                        <FaTasks className="text-5xl text-gray-800 mb-6 group-hover:text-white transition-colors duration-500" />
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-white transition-colors duration-500">Resource and Labor Optimization with Scheduling</h3>
                        <p className="text-gray-700 text-base group-hover:text-white transition-colors duration-500">
                            There is a critical need for better models that not only optimize resource and labor allocation but also incorporate effective scheduling mechanisms in coral conservation efforts.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div 
                        className="bg-white p-12 rounded-lg shadow-lg transition-colors duration-500 flex flex-col items-center text-center min-h-[350px] hover:bg-gray-800 group"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants(0.4)}
                    >
                        <FaUsers className="text-5xl text-gray-800 mb-6 group-hover:text-white transition-colors duration-500" />
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-white transition-colors duration-500">Community Engagement and Information Sharing</h3>
                        <p className="text-gray-700 text-base group-hover:text-white transition-colors duration-500">
                            Effective community engagement and dynamic information sharing in coral conservation remain underdeveloped. A platform supporting real-time communication is essential.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ResearchGap;
