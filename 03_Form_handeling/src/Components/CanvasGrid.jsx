// src/components/CanvasGrid.jsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CanvasGrid = ({ activeState, onInteraction }) => {
  const canvasRef = useRef(null);
  const interactionDetected = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Set initial styles
    ctx.strokeStyle = "#E5E5E5";
    ctx.lineWidth = 0.5;

    // Draw grid
    const drawGrid = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw vertical lines
      for (let x = 0; x <= width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = 0; y <= height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    drawGrid();

    // Handle canvas interactions
    const handleInteraction = (e) => {
      if (!interactionDetected.current) {
        interactionDetected.current = true;
        onInteraction();
      }

      // Create ripple effect
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ctx.clearRect(0, 0, width, height);
      drawGrid();

      // Draw ripple
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(100, 100, 255, 0.1)";
      ctx.fill();

      // Animate ripple
      let radius = 5;
      const ripple = () => {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(100, 100, 255, ${0.5 - radius / 100})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        radius += 3;

        if (radius < 100) {
          requestAnimationFrame(ripple);
        } else {
          drawGrid();
        }
      };

      ripple();

      
    };

    if (activeState === "grid-appear") {
      canvas.addEventListener("mousemove", handleInteraction);
      canvas.addEventListener("touchmove", handleInteraction);
    }

    return () => {
      canvas.removeEventListener("mousemove", handleInteraction);
      canvas.removeEventListener("touchmove", handleInteraction);
    };
  }, [activeState, onInteraction]);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{
        opacity:
          activeState === "initial"
            ? 0
            : activeState === "grid-appear"
            ? 0.3
            : 0.5,
      }}
      transition={{ duration: 1.5 }}
    />
  );
};

export default CanvasGrid;
