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

    ctx.strokeStyle = "#E5E5E5";
    ctx.lineWidth = 0.5;

    const drawGrid = () => {
      ctx.clearRect(0, 0, width, height);

      for (let x = 0; x <= width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y <= height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    drawGrid();

    // 💧 Ripple effect logic
    const createRipple = (x, y) => {
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

    // ⏱️ Throttle for mobile touch interactions
    let lastTouch = 0;

    // 👆 Mouse and touch interaction handler
    const handleInteraction = (e) => {
      // ⛔ Throttle mobile touchmove
      if (e.type === "touchmove") {
        const now = Date.now();
        if (now - lastTouch < 50) return; // ~20fps limit
        lastTouch = now;
      }

      if (!interactionDetected.current) {
        interactionDetected.current = true;
        onInteraction();
      }

      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left;
      const y = (e.clientY || e.touches?.[0]?.clientY) - rect.top;

      ctx.clearRect(0, 0, width, height);
      drawGrid();

      if (e.type === "touchmove") {
        for (let i = 0; i < 3; i++) {
          const offsetX = (Math.random() - 0.5) * 50;
          const offsetY = (Math.random() - 0.5) * 50;
          createRipple(x + offsetX, y + offsetY);
        }
      } else {
        createRipple(x, y);
      }
    };

    // ⏺️ Add event listeners
    if (activeState === "grid-appear") {
      canvas.addEventListener("mousemove", handleInteraction);
      canvas.addEventListener("touchmove", handleInteraction);
    }

    // ⏹️ Cleanup
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
