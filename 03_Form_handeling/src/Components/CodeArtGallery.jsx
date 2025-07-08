// src/components/CodeArtGallery.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CodeArtGallery = ({ onClose }) => {
  const [activeArt, setActiveArt] = useState(0);
  
  const artworks = [
    {
      title: "CSS Mandala",
      description: "Pure CSS geometric patterns creating a mesmerizing mandala",
      type: "CSS Art"
    },
    {
      title: "Pixel Matrix",
      description: "Interactive pixel grid that responds to mouse movements",
      type: "JavaScript Canvas"
    },
    {
      title: "Neon Console",
      description: "Terminal-inspired art with glowing text effects",
      type: "CSS/JS"
    },
    {
      title: "Fractal Explorer",
      description: "Interactive visualization of mathematical fractals",
      type: "Canvas API"
    },
    {
      title: "ASCII World",
      description: "Real-time ASCII art generator from webcam input",
      type: "JavaScript"
    },
    {
      title: "Shader Symphony",
      description: "GLSL shaders creating visual music synchronization",
      type: "WebGL"
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
        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Code Art Gallery</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="flex-1 flex flex-col md:flex-row p-4 md:p-8 gap-8">
          <div className="w-full md:w-1/2">
            <div className="bg-gray-900 aspect-square w-full rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <div className="font-mono text-green-400">Code Art Visualization</div>
                  <div className="text-gray-400 mt-2">{artworks[activeArt].title}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800">{artworks[activeArt].title}</h3>
              <div className="mt-2 text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full inline-block text-sm">
                {artworks[activeArt].type}
              </div>
              <p className="mt-4 text-gray-600">{artworks[activeArt].description}</p>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-gray-700 mb-3">Code Snippet:</h4>
              <div className="bg-gray-800 text-gray-200 font-mono text-sm p-4 rounded-lg overflow-x-auto">
                <div className="text-green-400">// {artworks[activeArt].title} - Creative coding</div>
                <div className="text-cyan-400">function</div> <span className="text-yellow-400">createArt</span>() {'{'}
                <div className="ml-4">
                  <div><span className="text-purple-400">const</span> <span className="text-cyan-400">canvas</span> = <span className="text-cyan-400">document</span>.<span className="text-yellow-400">getElementById</span>(<span className="text-amber-300">'art-canvas'</span>);</div>
                  <div><span className="text-purple-400">const</span> <span className="text-cyan-400">ctx</span> = <span className="text-cyan-400">canvas</span>.<span className="text-yellow-400">getContext</span>(<span className="text-amber-300">'2d'</span>);</div>
                  <br />
                  <div><span className="text-cyan-400">ctx</span>.<span className="text-yellow-400">beginPath</span>();</div>
                  <div><span className="text-cyan-400">ctx</span>.<span className="text-yellow-400">fillStyle</span> = <span className="text-amber-300">'#6366F1'</span>;</div>
                  <div><span className="text-cyan-400">ctx</span>.<span className="text-yellow-400">arc</span>(<span className="text-amber-300">150</span>, <span className="text-amber-300">150</span>, <span className="text-amber-300">80</span>, <span className="text-amber-300">0</span>, <span className="text-cyan-400">Math</span>.<span className="text-cyan-400">PI</span> * <span className="text-amber-300">2</span>);</div>
                  <div><span className="text-cyan-400">ctx</span>.<span className="text-yellow-400">fill</span>();</div>
                  <br />
                  <div><span className="text-cyan-400">for</span> (<span className="text-purple-400">let</span> <span className="text-cyan-400">i</span> = <span className="text-amber-300">0</span>; <span className="text-cyan-400">i</span> &lt; <span className="text-amber-300">12</span>; <span className="text-cyan-400">i</span>++) {'{'}</div>
                  <div className="ml-4"><span className="text-cyan-400">ctx</span>.<span className="text-yellow-400">beginPath</span>();</div>
                  <div className="ml-4"><span className="text-cyan-400">ctx</span>.<span className="text-yellow-400">rotate</span>((<span className="text-cyan-400">Math</span>.<span className="text-cyan-400">PI</span> / <span className="text-amber-300">6</span>) * <span className="text-cyan-400">i</span>);</div>
                  <div className="ml-4"><span className="text-cyan-400">ctx</span>.<span className="text-yellow-400">fillRect</span>(<span className="text-amber-300">100</span>, <span className="text-amber-300">0</span>, <span className="text-amber-300">50</span>, <span className="text-amber-300">50</span>);</div>
                  <div className="ml-4"><span className="text-cyan-400">ctx</span>.<span className="text-yellow-400">setTransform</span>(<span className="text-amber-300">1</span>, <span className="text-amber-300">0</span>, <span className="text-amber-300">0</span>, <span className="text-amber-300">1</span>, <span className="text-amber-300">0</span>, <span className="text-amber-300">0</span>);</div>
                  <div>{'}'}</div>
                </div>
                <div>{'}'}</div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-between">
              <button 
                className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50"
                disabled={activeArt === 0}
                onClick={() => setActiveArt(prev => prev - 1)}
              >
                ← Previous
              </button>
              <button 
                className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50"
                disabled={activeArt === artworks.length - 1}
                onClick={() => setActiveArt(prev => prev + 1)}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-200 text-center text-sm text-gray-500">
          Where logic meets creativity - exploring the artistic side of code
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CodeArtGallery;