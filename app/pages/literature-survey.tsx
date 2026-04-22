'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import LiteratureReview from '../../public/literature-review-img.jpg';

const CoralModel = dynamic(() => import('../components/CoralModel'), { ssr: false });

const LiteratureSurvey = () => {
    // Animation variants for text and image
    const textVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: 'easeOut' },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: 'easeOut', delay: 0.3 },
        },
    };

    return (
        <section id="literature-survey" className="min-h-screen pt-20 bg-white">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-start padded-section py-10">
                {/* Left Side - Animated Text */}
                <motion.div
                    className="w-full md:w-1/2 mb-6 md:mb-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={textVariants}
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Literature Survey</h2>
                    <p className="text-gray-700 text-lg mb-4">
                        Recent research has revealed gaps in coral reef conservation efforts, particularly in
                        integrating advanced methodologies and technologies. In the area of species
                        identification, studies have utilized CNNs and ResNet models to classify corals
                        from images, highlighting the potential of machine learning but underscoring the need for
                        user interaction and geographic information integration for effective conservation.
                    </p>
                    <p className="text-gray-700 text-lg mb-4">
                        In optimizing conservation tasks, reinforcement learning has been demonstrated for scheduling in dynamic environments. The studies indicate a
                        need for frameworks that incorporate real-time feedback and adapt to environmental
                        changes to improve decision-making and resource allocation.
                    </p>
                    <p className="text-gray-700 text-lg mb-4">
                        Technological advancements are also being employed to enhance the efficiency of
                        conservation strategies. The integration of Geographic Information Systems (GIS), machine
                        learning, and explainable AI has been proposed to optimize resource management and
                        decision-making processes, leading to more effective coral reef restoration.
                    </p>
                    <p className="text-gray-700 text-lg">
                        Moreover, the use of Knowledge Graphs in recommendation systems suggests significant potential in improving scholarly paper
                        recommendations through advanced weighting strategies. However, there remains a gap in
                        adapting these systems to real-time changes, highlighting an area for further development
                        in dynamic data integration and adaptive algorithms.
                    </p>
                </motion.div>

                {/* Image */}
                <motion.div
                    className="w-full md:w-1/2 flex flex-col items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={imageVariants}
                    >
                    <Image
                        src={LiteratureReview}
                        alt="Literature Review"
                        className="rounded-lg shadow-md"
                        width={600}
                        height={600}
                        style={{ marginTop: 20 }}
                    />

                    {/* Coral Model */}
                    <div className="w-full mt-6">
                        <CoralModel />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LiteratureSurvey;
