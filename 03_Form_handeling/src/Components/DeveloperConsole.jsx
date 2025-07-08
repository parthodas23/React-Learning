// src/components/DeveloperConsole.jsx (updated)
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiTerminal } from "react-icons/fi";

const DeveloperConsole = ({ isOpen, toggleConsole, openFeature }) => {
  const features = [
    {
      id: "skill-orbs",
      name: "Skill Orbs",
      icon: "🔮",
      description: "Interactive orbs showing my real-time skill levels",
    },
    {
      id: "problem-solving",
      name: "How I Think",
      icon: "🤔",
      description: "My approach to problem solving",
    },
    {
      id: "code-message",
      name: "Code Me a Message",
      icon: "💌",
      description: "Developer-friendly contact form",
    },
    {
      id: "journey-timeline",
      name: "Dev Journey",
      icon: "🛣️",
      description: "My journey from beginner to builder",
    },
    {
      id: "collaboration-map",
      name: "Global Map",
      icon: "🌍",
      description: "Projects and connections across the globe",
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-[100] pointer-events-auto">
      <motion.button
        className={`flex items-center gap-2 px-4 py-3 rounded-full shadow-lg ${
          isOpen
            ? "bg-indigo-600 text-white"
            : "bg-white text-indigo-600 border border-indigo-200"
        } transition-colors duration-300`}
        onClick={toggleConsole}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close developer console" : "Open developer console"}
      >
        <FiTerminal className="text-xl" />
        <span className="font-mono text-sm">
          {isOpen ? "close_dev_tools();" : "open_dev_tools();"}
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mt-4 bg-white rounded-xl shadow-xl p-4 w-80 border border-indigo-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h3 className="font-medium text-indigo-800 mb-3 flex items-center gap-2">
              <FiTerminal />
              <span>Developer Tools</span>
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature) => (
                <motion.button
                  key={feature.id}
                  className="flex flex-col items-center p-3 bg-indigo-50 rounded-lg border border-indigo-100 hover:border-indigo-300 hover:bg-indigo-100 transition-colors"
                  onClick={() => openFeature(feature.id)}
                  whileHover={{ y: -3 }}
                  aria-label={`Open ${feature.name}`}
                >
                  <span className="text-2xl mb-1">{feature.icon}</span>
                  <span className="font-medium text-indigo-800 text-sm">
                    {feature.name}
                  </span>
                  <span className="text-xs text-indigo-600 mt-1 text-center">
                    {feature.description}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DeveloperConsole;