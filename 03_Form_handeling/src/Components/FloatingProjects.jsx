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
    // ✅ Mobile carousel layout
    <div className="absolute bottom-10 w-full px-4 overflow-x-auto pointer-events-auto">
      <div className="flex space-x-4 pb-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg p-4 backdrop-blur-sm bg-opacity-70 border border-gray-100 cursor-pointer"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2 + index * 0.2, duration: 0.5 }}
            whileHover={{
              y: -10,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.3 },
            }}
          >
            <div
              className={`h-2 rounded-full bg-gradient-to-r ${project.color} mb-3`}
            ></div>
            <h3 className="font-medium text-gray-800">{project.title}</h3>
            <p className="text-sm text-gray-500">{project.description}</p>
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
    </div>
  ) : (
    // ✅ Desktop layout
    <div
      className={`absolute bottom-10 left-0 right-0 flex justify-center gap-8 pointer-events-auto ${className}`}
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl shadow-lg p-4 w-48 backdrop-blur-sm bg-opacity-70 border border-gray-100 cursor-pointer"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2 + index * 0.2, duration: 0.5 }}
          whileHover={{
            y: -10,
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: { duration: 0.3 },
          }}
        >
          <div
            className={`h-2 rounded-full bg-gradient-to-r ${project.color} mb-3`}
          ></div>
          <h3 className="font-medium text-gray-800">{project.title}</h3>
          <p className="text-sm text-gray-500">{project.description}</p>
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
