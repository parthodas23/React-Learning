// src/components/SkillOrbs.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const SkillOrbs = ({ onClose, isMobile }) => {
  const skills = [
    { name: "React", level: 95, color: "#61DAFB" },
    { name: "JavaScript", level: 90, color: "#F7DF1E" },
    { name: "Node.js", level: 85, color: "#68A063" },
    { name: "TypeScript", level: 80, color: "#3178C6" },
    { name: "Python", level: 75, color: "#3776AB" },
    { name: "GraphQL", level: 70, color: "#E10098" },
    { name: "CSS/UI", level: 85, color: "#2965F1" },
    { name: "Docker", level: 65, color: "#2496ED" },
  ];

  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-2xl ${
        isMobile
          ? "w-full h-full rounded-none"
          : "w-full max-w-4xl max-h-[90vh]"
      } overflow-hidden flex flex-col`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Skill Orbs</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-8 flex-1 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex items-center gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-xl"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${skill.color}, ${skill.color}44)`,
                      boxShadow: `0 0 20px ${skill.color}80`,
                    }}
                  >
                    {skill.level}%
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white px-2 py-1 rounded-full text-xs font-medium border border-gray-200">
                    {skill.name}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <div className="mt-2 text-gray-600 text-sm">
                    Real-time skill level based on projects, contributions, and
                    expertise
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          Skills dynamically update based on my current projects and learning
          progress
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillOrbs;
