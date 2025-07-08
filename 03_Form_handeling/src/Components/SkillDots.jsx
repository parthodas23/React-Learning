// src/components/SkillDots.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SkillDots = ({ hoveredElement }) => {
  const skills = [
    { name: 'React', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'UI/UX', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'GraphQL', level: 70 },
  ];

  const getPosition = (index) => {
    const angle = (index / skills.length) * Math.PI * 2;
    const distance = hoveredElement ? 150 : 100;
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance
    };
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {skills.map((skill, index) => {
        const position = getPosition(index);
        const isActive = hoveredElement && hoveredElement.startsWith('role');
        
        return (
          <motion.div
            key={index}
            className="absolute w-3 h-3 rounded-full bg-indigo-500"
            style={{
              left: '50%',
              top: '50%',
            }}
            initial={{ 
              x: 0, 
              y: 0,
              opacity: 0,
              scale: 0
            }}
            animate={{
              x: position.x,
              y: position.y,
              opacity: isActive ? 1 : 0.5,
              scale: isActive ? 1.5 : 1
            }}
            transition={{ 
              type: 'spring',
              stiffness: 100,
              damping: 15,
              delay: index * 0.05
            }}
          >
            <motion.div
              className="absolute left-4 top-0 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
              initial={{ opacity: 0, x: 10 }}
              animate={{ 
                opacity: hoveredElement === `role-${index % 3}` ? 1 : 0,
                x: hoveredElement === `role-${index % 3}` ? 20 : 10
              }}
            >
              {skill.name} • {skill.level}%
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SkillDots;