// src/pages/HomePage.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CanvasGrid from "./CanvasGrid";
import DeveloperIdentity from "./DeveloperIdentity";
import FloatingProjects from "./FloatingProjects";
import ContactPanel from "./ContactPanel";
import DeveloperConsole from "./DeveloperConsole";
import SkillOrbs from "./SkillOrbs";
import ProblemSolving from "./ProblemSolving";
import CodeMessageForm from "./CodeMessageForm";
import JourneyTimeline from "./JourneyTimeline";
import CollaborationMap from "./CollaborationMap";

const HomePage = () => {
  const [activeState, setActiveState] = useState("initial");
  const [hoveredElement, setHoveredElement] = useState(null);
  const [activeFeature, setActiveFeature] = useState(null);
  const [consoleOpen, setConsoleOpen] = useState(false);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeState === "initial") {
        setActiveState("grid-appear");
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [activeState]);

  const handleGridInteraction = () => {
    if (activeState === "grid-appear") {
      setActiveState("identity-reveal");
    }
  };

  const handleIdentityHover = (element) => {
    setHoveredElement(element);
  };

  const openFeature = (feature) => {
    setActiveFeature(feature);
    setConsoleOpen(false);
  };

  const closeFeature = () => {
    setActiveFeature(null);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden font-sans"
    >
      {/* Background canvas */}
      <div className="relative w-full h-screen">
        <CanvasGrid
          activeState={activeState}
          onInteraction={handleGridInteraction}
          isMobile={isMobile}
        />
      </div>

      {/* Main content - UPDATED FOR MOBILE SPACING */}
      <div
        className={`absolute inset-0 flex flex-col ${
          isMobile ? "items-center pt-15" : "items-center justify-center" // Changed pt-8 to pt-6
        } pointer-events-none z-30`}
      >
        <AnimatePresence>
          {activeState === "initial" && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="text-center px-4"
            >
              <motion.h1
                className={`${
                  isMobile ? "text-xl" : "text-2xl"
                } font-light text-gray-500`}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                a slice of my slow little life...
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        {activeState !== "initial" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className={`flex flex-col items-center px-4 ${
              isMobile ? "mt-15" : ""
            }`}
          >
            <DeveloperIdentity
              activeState={activeState}
              onHover={handleIdentityHover}
              isMobile={isMobile}
            />
          </motion.div>
        )}
      </div>

      {/* Interactive elements */}
      {activeState === "identity-reveal" && (
        <>
          <div className="absolute inset-0 z-20">
            <FloatingProjects isMobile={isMobile} />
          </div>

          <div className="absolute inset-0">
            <DeveloperConsole
              isOpen={consoleOpen}
              toggleConsole={() => setConsoleOpen(!consoleOpen)}
              openFeature={openFeature}
            />
          </div>
        </>
      )}

      {/* Contact Panel - UPDATED POSITIONING */}
      {activeState === "identity-reveal" && (
        <ContactPanel isMobile={isMobile} />
      )}

      {/* Hint to interact - ADJUSTED POSITION */}
      {activeState === "grid-appear" && (
        <motion.div
          className={`absolute ${
            isMobile ? "bottom-24" : "bottom-8"
          } text-center w-full text-gray-400 ${
            isMobile ? "text-xs" : "text-sm"
          } z-30`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {isMobile ? "touch to interact" : "interact with the canvas"}
          </motion.div>
        </motion.div>
      )}

      {/* Feature overlays */}
      <AnimatePresence>
        {activeFeature === "skill-orbs" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-white bg-opacity-90 backdrop-blur-sm"
          >
            <SkillOrbs isMobile={isMobile} onClose={closeFeature} />
          </motion.div>
        )}

        {activeFeature === "problem-solving" && (
          <ProblemSolving onClose={closeFeature} />
        )}

        {activeFeature === "code-message" && (
          <CodeMessageForm onClose={closeFeature} />
        )}

        {activeFeature === "journey-timeline" && (
          <JourneyTimeline onClose={closeFeature} />
        )}

        {activeFeature === "collaboration-map" && (
          <CollaborationMap onClose={closeFeature} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
