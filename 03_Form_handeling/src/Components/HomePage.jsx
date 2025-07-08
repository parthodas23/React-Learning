// src/components/HomePage.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CanvasGrid from "./CanvasGrid";
import DeveloperIdentity from "./DeveloperIdentity";
// import SkillDots from "./SkillDots";
// import FloatingParticles from "./FloatingParticles";
import FloatingProjects from "./FloatingProjects";
import ContactPanel from "./ContactPanel";
import DeveloperConsole from "./DeveloperConsole";
import SkillOrbs from "./SkillOrbs";
// import IntroVideo from "./IntroVideo";
import ProblemSolving from "./ProblemSolving";
import CodeMessageForm from "./CodeMessageForm";
import JourneyTimeline from "./JourneyTimeline";
import CollaborationMap from "./CollaborationMap";
// import CodeArtGallery from "./CodeArtGallery";

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
      <CanvasGrid
        activeState={activeState}
        onInteraction={handleGridInteraction}
        isMobile={isMobile}
      />
      {/* Particle animation layer - appears after initial load */}
      {/* {activeState !== "initial" && (
        <div className="absolute inset-0 z-5">
          <FloatingParticles count={40} />
        </div>
      )} */}
      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30">
        <AnimatePresence>
          {activeState === "initial" && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="text-center"
            >
              <motion.h1
                className="text-2xl font-light text-gray-500"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                something is about to happen...
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        {activeState !== "initial" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col items-center"
          >
            <DeveloperIdentity
              activeState={activeState}
              onHover={handleIdentityHover}
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
          <div className="absolute inset-0 z-40">
            <ContactPanel />
          </div>
          <div className="absolute inset-0 z-50">
            {" "}
            {/* Higher z-index */}
            <DeveloperConsole
              isOpen={consoleOpen}
              toggleConsole={() => setConsoleOpen(!consoleOpen)}
              openFeature={openFeature}
            />
          </div>
        </>
      )}

      {/* Subtle hint for interaction */}
      {activeState === "grid-appear" && (
        <motion.div
          className="absolute bottom-8 text-center w-full text-gray-400 text-sm z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            interact with the canvas
          </motion.div>
        </motion.div>
      )}

      {/* Feature overlays */}
      <AnimatePresence>
        {activeFeature === "skill-orbs" && <SkillOrbs onClose={closeFeature} />}

        {/* {activeFeature === "intro-video" && (
          <IntroVideo onClose={closeFeature} />
        )} */}

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

        {/* {activeFeature === "code-art" && (
          <CodeArtGallery onClose={closeFeature} />
        )} */}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
