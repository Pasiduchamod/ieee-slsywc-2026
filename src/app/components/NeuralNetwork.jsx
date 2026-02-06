"use client";

import { useEffect, useRef } from "react";

const NeuralNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    
    // Configuration
    const particleCount = 60;
    const connectionDistance = 150;
    const mouseDistance = 200;
    
    // Resize handling with devicePixelRatio support
    const resize_canvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const dpr = window.devicePixelRatio || 1;
        const rect = parent.getBoundingClientRect();
        
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        
        // Scale context to ensure correct drawing size
        ctx.scale(dpr, dpr);
      }
    };
    
    window.addEventListener("resize", resize_canvas);
    resize_canvas();

    // Mouse tracking
    let mouse = { x: null, y: null };
    
    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };
    
    const handleMouseLeave = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Particle Class
    class Particle {
      constructor() {
        const width = canvas.width / (window.devicePixelRatio || 1);
        const height = canvas.height / (window.devicePixelRatio || 1);
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.color = "#ffcb40"; // Gold color to match theme
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        // Bounce off edges using logical dimensions (CSS pixels)
        const width = canvas.width / (window.devicePixelRatio || 1);
        const height = canvas.height / (window.devicePixelRatio || 1);
        
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Mouse interaction
        if (mouse.x != undefined) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouseDistance) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (mouseDistance - distance) / mouseDistance;
                // Gently push away or attract - let's attract slightly for interactive feel
                // actually "neural network" usually implies static connection, let's just make connections stronger near mouse
            }
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.6; // Slightly transparent nodes
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    init();

    // Animation Control
    let isAnimating = false;

    const animate = () => {
      if (!isAnimating) return;

      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    const connect = () => {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                let dx = particles[a].x - particles[b].x;
                let dy = particles[a].y - particles[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    let opacityValue = 1 - (distance / connectionDistance);
                    ctx.strokeStyle = `rgba(255, 203, 64, ${opacityValue * 0.4})`; // Gold connection lines
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    };

    // Intersection Observer to pause animation when off-screen
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!isAnimating) {
            isAnimating = true;
            animate();
          }
        } else {
          isAnimating = false;
          cancelAnimationFrame(animationFrameId);
        }
      });
    }, { threshold: 0 });

    observer.observe(canvas);

    return () => {
      window.removeEventListener("resize", resize_canvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default NeuralNetwork;
