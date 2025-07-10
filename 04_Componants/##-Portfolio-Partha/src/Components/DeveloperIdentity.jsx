// src/components/DeveloperIdentity.jsx (updated with Partha Das name)
import React from "react";
import { motion } from "framer-motion";

const DeveloperIdentity = ({ activeState, onHover, isMobile }) => {
  const roles = [
    "creative developer",
    "problem solver",
    "javascript explorer",
    "self thought learner",
    "traveler",
  ];

  return (
    <div className="flex flex-col items-center pointer-events-auto">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileTap={{ scale: isMobile ? 0.95 : 1 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mb-8"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-light text-gray-800 mb-2 text-center"
          onHoverStart={() => onHover("name")}
          onHoverEnd={() => onHover(null)}
          whileHover={{
            color: "#6366F1",
            transition: { duration: 0.3 },
          }}
        >
          Partha Das
        </motion.h1>

        <motion.div
          className="h-0.5 bg-gray-300 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: "80%" }}
          transition={{ delay: 1, duration: 1 }}
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="text-center"
      >
        <motion.h2
          className="text-xl text-gray-600 mb-6 italic font-light"
          onHoverStart={() => onHover("tagline")}
          onHoverEnd={() => onHover(null)}
          whileHover={{
            color: "#6366F1",
            transition: { duration: 0.3 },
          }}
        >
          crafting digital experiences with code & creativity
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              className="px-4 py-2 bg-white bg-opacity-50 backdrop-blur-sm rounded-full text-gray-700 text-sm shadow-sm border border-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
              onHoverStart={() => onHover(`role-${index}`)}
              onHoverEnd={() => onHover(null)}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                color: "#6366F1",
                transition: { duration: 0.2 },
              }}
            >
              {role}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DeveloperIdentity;