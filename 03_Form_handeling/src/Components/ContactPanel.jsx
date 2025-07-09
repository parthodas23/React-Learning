import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 right-6 z-50 pointer-events-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white px-4 py-2 rounded-full shadow border border-gray-300 text-gray-700 flex items-center gap-2"
      >
        <span>Connect</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="space-y-2">
              <li className="hover:bg-gray-100 px-3 py-2 rounded">alex@portfolio.dev</li>
              <li className="hover:bg-gray-100 px-3 py-2 rounded">@alexdev</li>
              <li className="hover:bg-gray-100 px-3 py-2 rounded">in/alex-morgan</li>
              <li className="hover:bg-gray-100 px-3 py-2 rounded">github.com/alex</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactPanel;
