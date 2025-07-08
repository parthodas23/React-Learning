// src/components/CodeMessageForm.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CodeMessageForm = ({ onClose }) => {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    content: '',
    priority: 'normal'
  });
  
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSent(false);
        setMessage({ name: '', email: '', content: '', priority: 'normal' });
      }, 3000);
    }, 1500);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Code Me a Message</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="p-8">
          <div className="bg-gray-900 text-gray-200 font-mono text-sm p-6 rounded-lg">
            <div className="text-green-400">// Send me a message in code format</div>
            <div className="text-cyan-400">function</div> <span className="text-yellow-400">sendMessage</span>() {'{'}
            <form onSubmit={handleSubmit}>
              <div className="ml-4">
                <div><span className="text-purple-400">const</span> message = {'{'}</div>
                
                <div className="ml-4">
                  <div className="flex items-start">
                    <span className="text-amber-300">name:</span>
                    <input
                      type="text"
                      name="name"
                      value={message.name}
                      onChange={handleChange}
                      placeholder="'Your Name'"
                      className="bg-gray-800 text-amber-300 border-b border-gray-600 ml-2 px-1 focus:outline-none focus:border-amber-500 flex-1"
                      required
                    />
                    <span>,</span>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-amber-300">email:</span>
                    <input
                      type="email"
                      name="email"
                      value={message.email}
                      onChange={handleChange}
                      placeholder="'your@email.com'"
                      className="bg-gray-800 text-amber-300 border-b border-gray-600 ml-2 px-1 focus:outline-none focus:border-amber-500 flex-1"
                      required
                    />
                    <span>,</span>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-amber-300">priority:</span>
                    <select
                      name="priority"
                      value={message.priority}
                      onChange={handleChange}
                      className="bg-gray-800 text-amber-300 border-b border-gray-600 ml-2 px-1 focus:outline-none focus:border-amber-500"
                    >
                      <option value="low">'low'</option>
                      <option value="normal">'normal'</option>
                      <option value="high">'high'</option>
                    </select>
                    <span>,</span>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-amber-300">content:</span>
                    <textarea
                      name="content"
                      value={message.content}
                      onChange={handleChange}
                      placeholder="'Your message here...'"
                      className="bg-gray-800 text-amber-300 border-b border-gray-600 ml-2 px-1 focus:outline-none focus:border-amber-500 flex-1 min-h-[100px]"
                      required
                    />
                  </div>
                </div>
                
                <div>{'};'}</div>
                <br />
                
                <div className="flex items-center">
                  <span className="text-cyan-400">return</span>
                  <button
                    type="submit"
                    disabled={isSending || isSent}
                    className={`ml-2 px-4 py-2 rounded ${
                      isSending || isSent 
                        ? 'bg-gray-700 text-gray-400' 
                        : 'bg-amber-600 text-white hover:bg-amber-700'
                    } transition-colors`}
                  >
                    {isSending ? 'Sending...' : isSent ? 'Sent ✓' : 'message.send();'}
                  </button>
                  <span>;</span>
                </div>
              </div>
            </form>
            <div>{'}'}</div>
          </div>
          
          {isSent && (
            <motion.div
              className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CodeMessageForm;