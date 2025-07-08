// src/components/IntroVideo.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroVideo = ({ onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">1-Minute Intro</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="relative aspect-video bg-gray-900">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gray-800 border-2 border-dashed rounded-xl w-16 h-16" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center cursor-pointer">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Who I Am & What I Do</h3>
          <p className="text-gray-600 mb-4">
            A quick introduction to my journey as a developer, my passions, and why I love creating digital experiences.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Creative Coding</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Problem Solving</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">UI/UX Design</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Full-stack Dev</span>
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-200 text-center">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors">
            Watch Full Video
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IntroVideo;