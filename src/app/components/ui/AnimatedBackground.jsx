"use client";

import React, { forwardRef } from "react";
import NeuralNetwork from "../NeuralNetwork";

const AnimatedBackground = forwardRef(({ className, style, showGradientFade = true, fadeOpacity = 0, showNeuralNetwork = true }, ref) => {
  return (
    <div ref={ref} className={`absolute inset-0 w-full h-full z-0 overflow-hidden ${className || ""}`} style={style}>
      {/* Base gradient background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "radial-gradient(circle at 50% 25%, rgba(3, 10, 26, 0.85), transparent 70%), radial-gradient(circle at 72% 60%, rgba(10, 45, 119, 0.45), transparent 80%), linear-gradient(180deg, rgba(3, 6, 14, 1) 0%, rgba(4, 8, 18, 0.85) 45%, rgba(6, 10, 22, 0.2) 100%), linear-gradient(135deg, #030710 0%, #050914 100%)",
          transition: "opacity 0.3s linear",
        }}
      ></div>

      {/* Animated gradient overlay */}
      {showGradientFade && (
        <div
          className="absolute inset-0 w-full h-full hero-gradient-fade"
          style={{
            background:
              "radial-gradient(circle at 55% 30%, rgba(255, 191, 71, 0.15), transparent 55%), radial-gradient(circle at 80% 65%, rgba(255, 186, 56, 0.1), transparent 65%), linear-gradient(180deg, rgba(3, 6, 14, 1) 0%, rgba(4, 8, 18, 0.85) 45%, rgba(6, 10, 22, 0.2) 100%)",
            opacity: fadeOpacity,
            transition: "opacity 0.3s linear",
          }}
        ></div>
      )}

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 grid-pattern"></div>

      {/* Neural Network Background */}
      {showNeuralNetwork && <NeuralNetwork />}

      {/* Animated Light Rays */}
      <div className="absolute inset-0 light-rays">
        <div className="ray ray-1"></div>
        <div className="ray ray-2"></div>
        <div className="ray ray-3"></div>
      </div>

      {/* Animated Wave Effect */}
      <div className="absolute inset-0 wave-container">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>
      
       {/* Glowing Orbs - Optional additional effect from Theme.jsx potentially */}
       {/* <div className="absolute inset-0 glowing-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div> */}
    </div>
  );
});

AnimatedBackground.displayName = "AnimatedBackground";

export default AnimatedBackground;
