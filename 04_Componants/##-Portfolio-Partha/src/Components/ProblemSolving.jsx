// src/components/ProblemSolving.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProblemSolving = ({ onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Understand the Problem",
      description: "I start by deeply understanding the issue, asking questions to clarify requirements and constraints.",
      icon: "🔍"
    },
    {
      title: "Break It Down",
      description: "I decompose complex problems into smaller, manageable parts to tackle systematically.",
      icon: "🧩"
    },
    {
      title: "Research & Explore",
      description: "I investigate existing solutions, patterns, and libraries that might help solve the problem.",
      icon: "📚"
    },
    {
      title: "Prototype Solutions",
      description: "I create quick prototypes to test different approaches and validate ideas.",
      icon: "🧪"
    },
    {
      title: "Implement & Refine",
      description: "I implement the best solution, continuously refining based on feedback and testing.",
      icon: "🛠️"
    },
    {
      title: "Document & Share",
      description: "I document the solution and share knowledge with the team to prevent future issues.",
      icon: "📝"
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
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">How I Solve Problems</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="p-8 flex-1 overflow-auto">
          <div className="flex flex-col items-center mb-10">
            <div className="relative w-full max-w-2xl">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-1 bg-gray-200 rounded-full"></div>
              </div>
              
              <div className="relative flex justify-between">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 ${
                      activeStep === index 
                        ? 'bg-indigo-600 text-white scale-110' 
                        : 'bg-white text-gray-700 border-2 border-gray-300'
                    } transition-all`}
                    onClick={() => setActiveStep(index)}
                  >
                    {step.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{steps[activeStep].title}</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">{steps[activeStep].description}</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 max-w-3xl mx-auto">
            <h4 className="font-medium text-gray-700 mb-3">Example from a recent project:</h4>
            <div className="bg-gray-800 text-gray-200 font-mono text-sm p-4 rounded-lg overflow-x-auto">
              <div className="text-green-400">// Debugging a complex state management issue</div>
              <div className="text-cyan-400">function</div> <span className="text-yellow-400">debugStateIssue</span>() {'{'}
              <div className="ml-4">
                <div><span className="text-purple-400">const</span> <span className="text-cyan-400">steps</span> = [</div>
                <div className="ml-4">'Isolate component',</div>
                <div className="ml-4">'Check state transitions',</div>
                <div className="ml-4">'Log state changes',</div>
                <div className="ml-4">'Test with mock data',</div>
                <div className="ml-4">'Implement useReducer'</div>
                <div>];</div>
                <br />
                <div><span className="text-purple-400">let</span> <span className="text-cyan-400">solution</span>;</div>
                <div><span className="text-cyan-400">steps</span>.<span className="text-yellow-400">forEach</span>(step ={'>'} {'{'}</div>
                <div className="ml-4"><span className="text-cyan-400">console</span>.<span className="text-yellow-400">log</span>(`Trying: ${'{'}step{'}'}`);</div>
                <div className="ml-4"><span className="text-cyan-400">if</span> (<span className="text-cyan-400">applyStep</span>(step)) {'{'}</div>
                <div className="ml-8"><span className="text-cyan-400">solution</span> = step;</div>
                <div className="ml-8"><span className="text-purple-400">return</span>;</div>
                <div className="ml-4">{'}'}</div>
                <div>{'});'}</div>
              </div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-200 flex justify-between">
          <button 
            className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50"
            disabled={activeStep === 0}
            onClick={() => setActiveStep(prev => prev - 1)}
          >
            ← Previous
          </button>
          <button 
            className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50"
            disabled={activeStep === steps.length - 1}
            onClick={() => setActiveStep(prev => prev + 1)}
          >
            Next →
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProblemSolving;