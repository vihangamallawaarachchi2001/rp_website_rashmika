"use client"

import React from 'react';
import { motion } from 'framer-motion';

const methodologyData = [
  {
    title: 'Species Identification and Growth Monitoring',
    content: [
      'Data Collection and Preprocessing: Gathered 2,237 coral images, expanded to 4,925 through augmentation, split into 80% training and 20% validation sets.',
      'Image Preprocessing: Includes conversion to HSV color space, application of CLAHE, and use of masking to isolate coral structures.',
      'CNN with Transfer Learning: Utilized CNNs (e.g., MobileNetV2) fine-tuned on coral-specific data to identify coral species and monitor growth.',
      'Polyp Counting: Used YOLOv8 model optimized for coral images to track polyp density and dispersion area.',
    ],
  },
  {
    title: 'Hybrid Scheduling Algorithm',
    content: [
      'Components: Combines Analytical Hierarchy Process (AHP), Technique for Order of Preference by Similarity to Ideal Solution (TOPSIS), and Reinforcement Learning (RL).',
      'Functionality: Dynamically prioritizes tasks based on real-time feedback and environmental factors, adjusting scheduling in response to changing conditions.',
    ],
  },
  {
    title: 'Resource and Labor Allocation with XAI',
    content: [
      'Resource Optimization: Uses Gradient Boosting and neural networks to allocate resources efficiently and estimate manpower using Random Forest models.',
      'Task-Skill Matching: Assigns tasks based on skills and experience, enhancing safety and productivity.',
      'Real-time Adjustments and XAI: Incorporates RL for dynamic allocation and uses SHAP for transparency in decision-making processes.',
    ],
  },
  {
    title: 'Knowledge Graph Convolutional Network (KGCN)',
    content: [
      'Initial Setup: Uses user-post interactions and a knowledge graph of entity relationships for training.',
      'Operational Mechanism: Employs embedding layers, neighbor aggregation, and graph convolution to predict user engagement with content.',
    ],
  },
];

const Methodology = () => {
  return (
    <section id="methodology" className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-6 py-10 lg:px-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Methodology</h2>
        <p className="text-gray-700 text-lg mb-8">
          This section explains the methodology used in our research for coral restoration.
          We describe the approaches and techniques applied to achieve the research objectives.
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {methodologyData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-2xl transition duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-blue-600 group-hover:text-blue-800 mb-4">{item.title}</h3>
              <ul className="text-gray-700 text-base list-disc pl-4 space-y-2 group-hover:text-gray-900">
                {item.content.map((point, idx) => {
                  const [boldText, regularText] = point.split(':');
                  return (
                    <li key={idx}>
                      <span className="font-semibold">{boldText}:</span>{' '}
                      <span>{regularText}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
