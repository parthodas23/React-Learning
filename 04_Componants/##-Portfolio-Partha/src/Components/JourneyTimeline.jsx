// src/components/JourneyTimeline.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const JourneyTimeline = ({ onClose }) => {
  const milestones = [
    {
      year: 2016,
      title: "First Lines of Code",
      description: "Started with HTML/CSS and built my first website",
      icon: "👨‍💻"
    },
    {
      year: 2017,
      title: "JavaScript Discovery",
      description: "Fell in love with JavaScript and interactive web experiences",
      icon: "📜"
    },
    {
      year: 2018,
      title: "First Freelance Project",
      description: "Developed a small business website for a local client",
      icon: "💼"
    },
    {
      year: 2019,
      title: "React & Modern Frameworks",
      description: "Dived deep into React ecosystem and state management",
      icon: "⚛️"
    },
    {
      year: 2020,
      title: "Full-stack Development",
      description: "Learned Node.js, Express, and database technologies",
      icon: "🔗"
    },
    {
      year: 2021,
      title: "Professional Experience",
      description: "Joined a startup as a frontend developer",
      icon: "🏢"
    },
    {
      year: 2022,
      title: "UI/UX Focus",
      description: "Developed expertise in creating intuitive user experiences",
      icon: "🎨"
    },
    {
      year: 2023,
      title: "Open Source Contributions",
      description: "Started contributing to open source projects",
      icon: "🌐"
    },
    {
      year: 2024,
      title: "Building My Vision",
      description: "Creating innovative solutions to real-world problems",
      icon: "🚀"
    }
  ];

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">My Developer Journey</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="p-8 flex-1 overflow-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>
            
            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-1/2 p-4">
                    <div className={`p-6 bg-white rounded-xl shadow-md border border-gray-100 ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}>
                      <div className="text-3xl mb-2">{milestone.icon}</div>
                      <h3 className="text-xl font-bold text-gray-800">{milestone.title}</h3>
                      <p className="text-gray-600 mt-2">{milestone.description}</p>
                      <div className="mt-4 text-sm font-medium text-indigo-600">
                        {milestone.year}
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-1/2 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg z-10">
                      {milestone.year}
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-200 text-center text-sm text-gray-500">
          The journey continues... Next stop: Building the future of digital experiences
        </div>
      </motion.div>
    </motion.div>
  );
};

export default JourneyTimeline;