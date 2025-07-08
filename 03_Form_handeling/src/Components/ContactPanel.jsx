// src/components/ContactPanel.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence import

const ContactPanel = ({className}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      className={`absolute top-6 right-6 pointer-events-auto ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.5 }}
    >
      <motion.button
        className="bg-white bg-opacity-70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200 text-gray-700 flex items-center gap-2"
        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Connect</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-2 bg-white rounded-xl shadow-lg p-4 w-64 backdrop-blur-sm bg-opacity-80"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                <span className="text-gray-700">alex@portfolio.dev</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                <span className="text-gray-700">@alexdev</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                <span className="text-gray-700">in/alex-morgan</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                <span className="text-gray-700">github.com/alex</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactPanel;