// src/components/FloatingProjects.jsx
import React from "react";
import { motion } from "framer-motion";

const FloatingProjects = ({ className, isMobile }) => {
  const projects = [
    {
      title: "EcoTracker",
      description: "Sustainability dashboard",
      color: "from-green-400 to-emerald-600",
    },
    {
      title: "NexusPay",
      description: "Fintech platform",
      color: "from-blue-400 to-indigo-600",
    },
    {
      title: "ArtFlow",
      description: "Creative collaboration",
      color: "from-purple-400 to-fuchsia-600",
    },
  ];

  return isMobile ? (
    <div
      className="absolute bottom-50 w-full px-4 pointer-events-auto" // Changed bottom-20 to bottom-16
      style={{
        WebkitOverflowScrolling: "touch",
        overflowX: "auto",
      }}
    >
      <motion.div
        className="inline-flex space-x-4 pb-2" // Changed flex to inline-flex
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ minWidth: "max-content" }} // Added min-width
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg p-4 backdrop-blur-sm bg-opacity-80 border border-gray-100 cursor-pointer"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 2 + index * 0.2,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.97,
              boxShadow: "0 5px 10px -3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              className={`h-2 rounded-full bg-gradient-to-r ${project.color} mb-3`}
            ></div>
            <h3 className="font-medium text-gray-800">{project.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{project.description}</p>
            <motion.div
              className="text-right text-xs text-indigo-500 mt-2"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              view project →
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  ) : (
    <div
    className={`absolute bottom-10 left-0 right-0 flex justify-center gap-6 md:gap-8 pointer-events-auto ${className}`}  // Changed bottom-10 to bottom-8
  >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl shadow-lg p-4 w-44 md:w-48 backdrop-blur-sm bg-opacity-80 border border-gray-100 cursor-pointer"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 2 + index * 0.2,
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{
            y: -10,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 },
          }}
        >
          <div
            className={`h-2 rounded-full bg-gradient-to-r ${project.color} mb-3`}
          ></div>
          <h3 className="font-medium text-gray-800">{project.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{project.description}</p>
          <motion.div
            className="text-right text-xs text-indigo-500 mt-2"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            view project →
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingProjects;
