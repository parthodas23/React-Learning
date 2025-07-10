// src/components/DeveloperConsole.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiTerminal } from "react-icons/fi";
import { FaRocket, FaTimes } from "react-icons/fa";

const DeveloperConsole = ({ isOpen, toggleConsole, openFeature, isMobile }) => {
  const [pulsing, setPulsing] = useState(true);
  const features = [
    {
      id: "skill-orbs",
      name: "Skill Orbs",
      icon: "🔮",
      description: "Interactive tech skill visualization",
    },
    {
      id: "problem-solving",
      name: "How I Think",
      icon: "🤔",
      description: "My problem-solving approach",
    },
    {
      id: "code-message",
      name: "Code Message",
      icon: "💌",
      description: "Developer-friendly contact form",
    },
    {
      id: "journey-timeline",
      name: "Dev Journey",
      icon: "🛣️",
      description: "My coding evolution timeline",
    },
    {
      id: "collaboration-map",
      name: "Global Map",
      icon: "🌍",
      description: "Worldwide collaborations",
    },
    {
      id: "project-showcase",
      name: "Project Vault",
      icon: "💼",
      description: "Exclusive project demos",
    },
    {
      id: "network-platform",
      name: "Network Platform",
      icon: "🤝",
      description: "Creation collaboration",
    },
  ];

  // Stop pulsing after first interaction
  useEffect(() => {
    const timer = setTimeout(() => setPulsing(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleInteraction = () => {
    setPulsing(false);
    toggleConsole();
  };

  return (
    <div className="fixed bottom-6 left-6 z-[9999] pointer-events-auto">
      {/* Main Console Trigger Button */}
      <motion.button
        className={`flex items-center gap-2 px-5 py-3 rounded-xl shadow-lg ${
          isOpen
            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
            : "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
        } transition-all duration-300 font-mono font-bold`}
        onClick={handleInteraction}
        whileHover={{ 
          scale: 1.1,
          rotate: pulsing ? [0, -5, 0, 5, 0] : 0
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: pulsing ? [1, 1.05, 1] : 1,
          boxShadow: pulsing 
            ? ["0 5px 15px rgba(245, 158, 11, 0.4)", "0 5px 25px rgba(245, 158, 11, 0.6)", "0 5px 15px rgba(245, 158, 11, 0.4)"]
            : "0 5px 15px rgba(0, 0, 0, 0.1)"
        }}
        transition={{
          scale: { duration: 1.5, repeat: pulsing ? Infinity : 0 },
          boxShadow: { duration: 1.5, repeat: pulsing ? Infinity : 0 },
          rotate: { duration: 0.5 }
        }}
        aria-label={isOpen ? "Close developer tools" : "Open developer tools"}
      >
        <div className="relative">
          {!isOpen && pulsing && (
            <motion.span
              className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
          {isOpen ? <FaTimes className="text-xl" /> : <FaRocket className="text-xl" />}
        </div>
        <span className="text-sm tracking-wide">
          {isOpen ? "close_dev_tools();" : "Run My Portfolio()"}
        </span>
      </motion.button>

      {/* Console Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className={`mt-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl p-4 ${
                isMobile ? "w-full fixed inset-x-4 bottom-20" : "w-[340px] max-h-[70vh]"
              } border border-gray-700 backdrop-blur-sm flex flex-col`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Header with close button */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-amber-400 flex items-center gap-2">
                  <FiTerminal className="text-amber-400" />
                  <span>DEV CONSOLE</span>
                </h3>
                <button 
                  onClick={toggleConsole}
                  className="p-1.5 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                  aria-label="Close console"
                >
                  <FaTimes className="text-gray-400 hover:text-white" />
                </button>
              </div>
              
              <div className="mb-3 p-2 bg-gray-800 rounded border border-gray-700">
                <p className="text-xs text-green-400 font-mono">
                  <span className="text-amber-400">$</span> Welcome to my interactive dev tools!
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 overflow-y-auto pr-1 flex-grow">
                {features.map((feature) => (
                  <motion.button
                    key={feature.id}
                    className="flex flex-col items-center p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-amber-500 hover:bg-gray-750 transition-all group"
                    onClick={() => openFeature(feature.id)}
                    whileHover={{ y: -5 }}
                    aria-label={`Open ${feature.name}`}
                  >
                    <span className="text-2xl mb-1 group-hover:text-amber-400 transition-colors">
                      {feature.icon}
                    </span>
                    <span className="font-bold text-white text-sm group-hover:text-amber-400 transition-colors">
                      {feature.name}
                    </span>
                    <span className="text-xs text-gray-400 mt-1 text-center group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </span>
                  </motion.button>
                ))}
              </div>
              
              <div className="mt-4 pt-3 border-t border-gray-700">
                <p className="text-xs text-center text-gray-500">
                  Unlock interactive experiences
                </p>
              </div>
            </motion.div>

            {isMobile && isOpen && (
              <motion.div 
                className="text-center text-xs mt-2 text-white bg-black/30 px-3 py-1 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ← Swipe to explore all tools →
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DeveloperConsole;