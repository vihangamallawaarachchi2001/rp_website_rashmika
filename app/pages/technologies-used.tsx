"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';

const technologies = [
    { name: 'React Native', image: '/react-native.png' },
    { name: 'Python', image: '/python.png' },
    { name: 'TensorFlow', image: '/tensorflow.png' },
    { name: 'Keras', image: '/keras.png' },
    { name: 'MongoDB', image: '/mongodb.png' },
    { name: 'Java', image: '/java.png' },
    { name: 'Spring', image: '/spring.png' },
    { name: 'Google Maps API', image: '/google-maps.png' },
    { name: 'Redis', image: '/redis.png' },
    { name: 'JWT', image: '/jwt.png' },
    { name: 'Google Colab', image: '/google-colab.png' },
    { name: 'Flask', image: '/flask.png' },
];

const TechnologiesUsed = () => {
    return (
        <section id="technologies-used" className="min-h-screen pt-20 bg-white">
            <div className="container mx-auto px-6 padded-section py-10">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Technologies Used</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-10">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <div className="w-28 h-28 bg-gray-100 flex items-center justify-center shadow-md transition-all duration-300 ease-in-out">
                                <Image
                                    src={tech.image}
                                    alt={tech.name}
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                            <p className="mt-4 text-center text-sm font-medium text-gray-700">{tech.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologiesUsed;
