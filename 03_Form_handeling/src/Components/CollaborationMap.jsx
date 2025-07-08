// src/components/CollaborationMap.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CollaborationMap = ({ onClose }) => {
  const [activeProject, setActiveProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      name: "EcoTracker",
      location: "San Francisco, USA",
      collaborators: 3,
      description: "Sustainability dashboard with international team",
      coordinates: { top: '25%', left: '15%' }
    },
    {
      id: 2,
      name: "NexusPay",
      location: "London, UK",
      collaborators: 5,
      description: "Fintech platform developed with European partners",
      coordinates: { top: '30%', left: '45%' }
    },
    {
      id: 3,
      name: "ArtFlow",
      location: "Tokyo, Japan",
      collaborators: 2,
      description: "Creative collaboration tool with Japanese designers",
      coordinates: { top: '35%', left: '80%' }
    },
    {
      id: 4,
      name: "HealthBridge",
      location: "Nairobi, Kenya",
      collaborators: 4,
      description: "Health platform for African communities",
      coordinates: { top: '55%', left: '50%' }
    },
    {
      id: 5,
      name: "EduConnect",
      location: "Sydney, Australia",
      collaborators: 3,
      description: "Education platform connecting global learners",
      coordinates: { top: '70%', left: '85%' }
    },
    {
      id: 6,
      name: "AgroTech",
      location: "São Paulo, Brazil",
      collaborators: 6,
      description: "Agricultural technology for South American farmers",
      coordinates: { top: '65%', left: '25%' }
    }
  ];

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Global Collaboration Map</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="flex-1 flex flex-col md:flex-row p-4 md:p-8 gap-8">
          <div className="w-full md:w-2/3 relative">
            <div className="bg-gray-100 border-2 border-dashed rounded-xl w-full aspect-video">
              {/* This would be an actual world map with markers in a real implementation */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                World Map Visualization
              </div>
              
              {projects.map(project => (
                <button
                  key={project.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                    activeProject === project.id 
                      ? 'z-10 scale-125' 
                      : 'z-0'
                  } transition-transform`}
                  style={project.coordinates}
                  onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                >
                  <div className={`w-8 h-8 rounded-full ${
                    activeProject === project.id 
                      ? 'bg-indigo-600 ring-4 ring-indigo-300' 
                      : 'bg-indigo-500'
                  } flex items-center justify-center text-white`}>
                    {project.id}
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Collaboration Projects</h3>
            
            {activeProject ? (
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-800">
                    {projects.find(p => p.id === activeProject).name}
                  </h4>
                  <button 
                    onClick={() => setActiveProject(null)}
                    className="text-gray-500 hover:text-gray-800"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-medium">
                      {projects.find(p => p.id === activeProject).location}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500">Collaborators</div>
                    <div className="font-medium">
                      {projects.find(p => p.id === activeProject).collaborators} global partners
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500">Description</div>
                    <div className="text-gray-700">
                      {projects.find(p => p.id === activeProject).description}
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      View Project Details
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {projects.map(project => (
                  <div 
                    key={project.id}
                    className="p-4 bg-white border border-gray-200 rounded-lg hover:border-indigo-300 cursor-pointer transition-colors"
                    onClick={() => setActiveProject(project.id)}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-gray-800">{project.name}</h4>
                      <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs">
                        {project.id}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{project.location}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-200 text-center text-sm text-gray-500">
          Collaborated with developers, designers, and innovators across 12 countries
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CollaborationMap;