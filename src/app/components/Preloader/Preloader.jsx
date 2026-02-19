"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import NeuralNetwork from "../NeuralNetwork";
import "./Preloader.css";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState("IEEE Sri lanka Section Students | Young Professionals | Women in Engineering Congress 2026");
  const [currentText, setCurrentText] = useState(0);
  const preloaderRef = useRef(null);
  const curtainLeftRef = useRef(null);
  const curtainRightRef = useRef(null);
  const contentRef = useRef(null);
  const bgRef = useRef(null);
  // const textRef = useRef(null); // Text ref no longer needed

  const loadingTexts = [
    "Initializing IEEE Experience...",
    "Loading Global Connections...",
    "Preparing for Innovation...",
    "Building Tomorrow's Leaders...",
    "Almost Ready...",
  ];

  // Scramble text effect helper
  // Defined inside useEffect to avoid complexity or stale closures
  
  useEffect(() => {
    let scrambleInterval;
    
    const runScramble = (finalText) => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
      let iterations = 0;
      
      clearInterval(scrambleInterval);
      
      scrambleInterval = setInterval(() => {
        setDisplayText(
          finalText
            .split("")
            .map((letter, index) => {
              if (index < iterations) {
                return finalText[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );
        
        if (iterations >= finalText.length) {
          clearInterval(scrambleInterval);
        }
        
        iterations += 1 / 3;
      }, 30);
    };

    // Initial scramble effect for title (with slight delay for hydration)
    const timer = setTimeout(() => {
        runScramble("IEEE Sri lanka Section Students | Young Professionals | Women in Engineering Congress 2026");
    }, 100);

    // Simulate loading progress
    const progressInterval = setInterval(() => {  
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 8; // Slower progress for cinematic feel
      });
    }, 150);

    // Rotate through loading texts faster to ensure visibility
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 800); // Faster rotation (0.8s) so user sees it change even in 2.5s

    // Hide preloader sequence
    const hidePreloader = () => {
      // Prevent multiple calls or calls when component is unmounting
      if (!contentRef.current || !bgRef.current) {
        // If refs are missing but we're trying to hide, just force loading off state
        setIsLoading(false);
        return;
      }

      const tl = gsap.timeline({
        onComplete: () => setIsLoading(false),
      });

      // 1. Fade out content and background elements
      tl.to([contentRef.current, bgRef.current], {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      })
      // 2. Split curtains
      .to(curtainLeftRef.current, {
        x: "-100%",
        duration: 1.2,
        ease: "power4.inOut",
      }, "-=0.1") // Slight overlap
      .to(curtainRightRef.current, {
        x: "100%",
        duration: 1.2,
        ease: "power4.inOut",
      }, "<"); // Run at same time as left curtain
    };

    // Check if all images and content are loaded
    const checkIfLoaded = () => {
      const images = document.querySelectorAll("img");
      const totalImages = images.length;
      let loadedImages = 0;
      
      const minDisplayTime = 2500; // Minimum time to show preloader (2.5s)
      const startTime = Date.now();

      const finishLoading = () => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minDisplayTime - elapsedTime);
        
        setTimeout(hidePreloader, remainingTime);
      };

      // If no images, hide preloader after min time
      if (totalImages === 0) {
        finishLoading();
        return;
      }

      // Add timeout to prevent infinite waiting
      const timeout = setTimeout(() => {
        hidePreloader();
      }, 7000); // 7s max for dramatic effect

      const checkCompletion = () => {
        loadedImages++;
        if (loadedImages >= totalImages) {
          clearTimeout(timeout);
          finishLoading();
        }
      };

      images.forEach((img) => {
        if (img.complete && img.naturalHeight !== 0) {
          loadedImages++;
        } else {
          img.addEventListener("load", checkCompletion);
          img.addEventListener("error", checkCompletion);
        }
      });

      // Check if all images are already loaded
      if (loadedImages >= totalImages) {
        clearTimeout(timeout);
        finishLoading();
      }
    };

    // Wait for DOM to be ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", checkIfLoaded);
    } else {
      setTimeout(checkIfLoaded, 200);
    }

    // Lock scroll when preloader is active
    if (isLoading) {
      window.dispatchEvent(new CustomEvent("scroll-lock", { detail: { locked: true } }));
      document.documentElement.style.setProperty("overflow", "hidden", "important");
      document.documentElement.style.setProperty("height", "100%", "important");
      document.body.style.setProperty("overflow", "hidden", "important");
      document.body.style.setProperty("height", "100%", "important");
    }

    return () => {
      clearTimeout(timer);
      clearInterval(scrambleInterval);
      clearInterval(progressInterval);
      clearInterval(textInterval);
      // Ensure scroll is unlocked when component unmounts
      window.dispatchEvent(new CustomEvent("scroll-lock", { detail: { locked: false } }));
      document.documentElement.style.setProperty("overflow", "");
      document.documentElement.style.setProperty("height", "");
      document.body.style.setProperty("overflow", "");
      document.body.style.setProperty("height", "");
    };
  }, []);

  // Update scroll lock when isLoading changes
  useEffect(() => {
    if (!isLoading) {
      window.dispatchEvent(new CustomEvent("scroll-lock", { detail: { locked: false } }));
      document.documentElement.style.setProperty("overflow", "");
      document.documentElement.style.setProperty("height", "");
      document.body.style.setProperty("overflow", "");
      document.body.style.setProperty("height", "");
    }
  }, [isLoading]);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="preloader" ref={preloaderRef}>
      {/* Split Curtains */}
      <div className="curtain-panel curtain-left" ref={curtainLeftRef}></div>
      <div className="curtain-panel curtain-right" ref={curtainRightRef}></div>

      {/* Animated Background (Fades out first) */}
      <div className="preloader-bg absolute inset-0 w-full h-full" ref={bgRef}>
         {/* Simple dark overlay to blend curtains */}
         <div className="absolute inset-0 bg-[#030710]/80 z-0"></div>
        {/* Base gradient background */}
        <div
          className="absolute inset-0 w-full h-full opacity-50"
          style={{
            background:
              "radial-gradient(circle at 50% 25%, rgba(15, 43, 105, 0.4), transparent 70%), linear-gradient(135deg, #030710 0%, #050914 100%)",
          }}
        ></div>

        {/* Neural Network Background */}
        <NeuralNetwork />
        <div className="grid-overlay opacity-30"></div>
      </div>

      <div className="preloader-content z-50" ref={contentRef}>
        {/* Main Logo Animation */}
        <div className="logo-animation">
          <div className="ieee-logo">
            <div className="logo-circle">
              <div className="logo-inner">
                <span className="ieee-text">IEEE</span>
              </div>
            </div>
            <div className="logo-rings">
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>
              <div className="ring ring-3"></div>
            </div>
          </div>
        </div>

        {/* Title with Typing Effect */}
        <div className="title-container">
          <h1 className="main-title">
            <span className="block text-3xl md:text-3xl font-black tracking-tighter text-white mb-2 font-mono">
              {displayText}
            </span>
          </h1>
          <p className="subtitle text-sm md:text-lg text-white/60 tracking-widest uppercase">
            Initializing System...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="progress-container max-w-md mx-auto w-full mt-12">
          <div className="flex justify-between text-xs text-white/40 mb-2 font-mono uppercase tracking-wider">
             <span>System Status</span>
             <span>{Math.round(Math.min(progress, 100))}%</span>
          </div>
          <div className="progress-bar h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="progress-track w-full h-full relative">
              <div
                className="progress-fill absolute top-0 left-0 h-full bg-gradient-to-r from-[#0f2b69] via-[#ffcb40] to-[#b4860b]"
                style={{ width: `${Math.min(progress, 100)}%` }}
              ></div>
               <div
                className="progress-glow absolute top-0 left-0 h-full w-full bg-[#ffcb40]/20 blur-md"
                style={{ width: `${Math.min(progress, 100)}%`, opacity: progress > 90 ? 0.5 : 0.2 }}
              ></div>
            </div>
          </div>
          <div className="mt-2 text-center">
             <span className="text-xs text-[#ffcb40] font-mono animate-pulse">
                {loadingTexts[currentText]}
             </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
