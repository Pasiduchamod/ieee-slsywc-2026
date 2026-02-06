"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Marquee from "./Marquee/Marquee";
import Copy from "./Copy/Copy";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Location({
  logoImage = "/hotel/hotel.jpg",
  images = [
    "/hotel/hotel1.jpg",
    "/hotel/hotel2.jpg",
    "/hotel/hotel3.jpg",
    "/hotel/hotel4.jpg",
    "/hotel/hotel1.jpg",
    "/hotel/hotel2.jpg",
  ],
  title = ["Jie Jie Beach Hotel", "Panadura"],
  buttonText = "See Hotel",
}) {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const mainRef = useRef(null);
  const logoRef = useRef(null);
  const linesRef = useRef([]);
  const buttonRef = useRef(null);
  const rowsRef = useRef([]);

  useGSAP(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const scrollTriggerSettings = {
        trigger: mainRef.current,
        start: "top 25%",
        toggleActions: "play reverse play reverse",
      };

      const leftXValues = [-800, -900, -400];
      const rightXValues = [800, 900, 400];
      const leftRotationValues = [-30, -20, -35];
      const rightRotationValues = [30, 20, 35];
      const yValues = [100, -150, -400];

      // Animate cards
      rowsRef.current.forEach((row, index) => {
        if (!row) return;

        const cardLeft = row.querySelector(".location-card-left");
        const cardRight = row.querySelector(".location-card-right");

        if (cardLeft && cardRight) {
          gsap.to(cardLeft, {
            x: leftXValues[index],
            scrollTrigger: {
              trigger: mainRef.current,
              start: "top center",
              end: "150% bottom",
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;
                cardLeft.style.transform = `translateX(${
                  progress * leftXValues[index]
                }px) translateY(${progress * yValues[index]}px) rotate(${
                  progress * leftRotationValues[index]
                }deg)`;
                cardRight.style.transform = `translateX(${
                  progress * rightXValues[index]
                }px) translateY(${progress * yValues[index]}px) rotate(${
                  progress * rightRotationValues[index]
                }deg)`;
              },
            },
          });
        }
      });

      // Animate logo
      gsap.to(logoRef.current, {
        scale: 1,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: scrollTriggerSettings,
      });

      // Animate text lines
      gsap.to(linesRef.current, {
        y: 0,
        duration: 0.5,
        ease: "power1.out",
        stagger: 0.1,
        scrollTrigger: scrollTriggerSettings,
      });

      // Animate button
      gsap.to(buttonRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        delay: 0.25,
        scrollTrigger: scrollTriggerSettings,
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 2; i++) {
      rows.push(
        <div
          className="location-row"
          key={i}
          ref={(el) => (rowsRef.current[i - 1] = el)}
        >
          <div className="location-card location-card-left">
            <img
              src={images[2 * i - 2]}
              alt=""
              className=" w-[20rem] h-[15rem] md:w-[30rem] md:h-[18rem] object-cover rounded-3xl"
            />
          </div>
          <div className="location-card location-card-right">
            <img
              src={images[2 * i - 1]}
              alt=""
              className="w-[20rem] h-[15rem] md:w-[30rem] md:h-[18rem] object-cover rounded-3xl"
            />
          </div>
        </div>
      );
    }
    return rows;
  };

  return (
    <div ref={containerRef} className="location-container">
      <style jsx>{`
        .location-container {
          font-family: "Mabry Pro", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          background: transparent;
          color: #eafaff;
          width: 100%;
          overflow-x: hidden;
        }

        .location-container * {
          box-sizing: border-box;
        }

        .location-section {
          position: relative;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow-x: hidden;
        }

        .location-hero {
          height: 100vh;
        }

        .location-hero-img {
          width: 50%;
          aspect-ratio: 1;
        }

        .location-footer {
          height: 50vh;
          align-items: flex-start;
        }

        .location-footer a {
          font-size: 4vw;
          color: #00ecec;
          text-decoration: none;
        }

        .location-main {
          width: 100vw;
          height: 150vh;
          flex-direction: column;
        }

        .location-row {
          position: relative;
          width: 100%;
          margin: 1em 0;
          display: flex;
          justify-content: center;
          gap: 2em;
        }

        .location-card {
          position: relative;
          width: 40%;
          height: 360px;
          border-radius: 0.75em;
          overflow: hidden;
          will-change: transform;
        }

        .location-main-content {
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .location-logo {
          width: 150px;
          height: 150px;
          border: 2px solid #00ecec;
          border-radius: 100%;
          overflow: hidden;
          transform: scale(0);
        }

        .location-copy {
          margin: 2em 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .location-line {
          position: relative;
          margin: 0.5em 0;
          width: max-content;
          height: 30px;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }

        .location-line p {
          position: relative;
          font-size: 24px;
          transform: translateY(30px);
          margin: 0;
        }

        .location-button {
          position: relative;
          padding: 1em 2em;
          font-size: 18px;
          color: #eafaff;
          border: 2px solid #00ecec;
          border-radius: 8em;
          background: linear-gradient(90deg, #00ecec, #004cf1, #00b836);
          outline: none;
          transform: translateY(30px);
          opacity: 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .location-button:hover {
          background: linear-gradient(90deg, #00ecec, #004cf1, #00b836);
          color: #101828;
          border: 2px solid #00ecec;
          filter: brightness(1.1);
        }

        @media (max-width: 900px) {
          .location-card {
            width: 50%;
            height: 240px;
          }
          .location-desktop {
            display: none !important;
          }
          .location-mobile {
            display: flex !important;
          }
        }
        @media (min-width: 901px) {
          .location-mobile {
            display: none !important;
          }
        }
        .location-mobile {
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          width: 100vw;
          min-height: 100vh;
          padding: 1.5em 0.5em 2em 0.5em;
          position: relative;
          background: transparent;
          z-index: 1;
        }
        .location-mobile-logo {
          width: 100px;
          height: 100px;
          border: 2px solid #00ecec;
          border-radius: 100%;
          overflow: hidden;
          margin: 1.5em auto 0.5em auto;
          display: block;
        }
        .location-mobile-title {
          font-size: 1.5em;
          font-weight: 700;
          text-align: center;
          color: #eafaff;
          margin-bottom: 0.25em;
        }
        .location-mobile-subtitle {
          font-size: 1.1em;
          font-weight: 400;
          text-align: center;
          color: #b2e6e6;
          margin-bottom: 1.2em;
        }
        .location-mobile-btn {
          margin: 0.5em 0 1.5em 0;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .location-mobile-button {
          padding: 0.9em 2em;
          font-size: 1em;
          color: #eafaff;
          border: 2px solid #00ecec;
          border-radius: 8em;
          background: linear-gradient(90deg, #00ecec, #004cf1, #00b836);
          outline: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .location-mobile-button:hover {
          background: linear-gradient(90deg, #00ecec, #004cf1, #00b836);
          color: #101828;
          border: 2px solid #00ecec;
          filter: brightness(1.1);
        }
        .location-mobile-gallery {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.2em;
          margin-top: 1em;
        }
        .location-mobile-gallery-grid {
          display: flex;
          flex-direction: column;
          gap: 0.8em;
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
        }
        .location-mobile-gallery-grid-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.8em;
          width: 100%;
        }
        .location-mobile-gallery-grid-row:last-child {
          grid-template-columns: 1fr;
        }
        .location-mobile-gallery-img.grid-img {
          height: 120px;
          border-radius: 1.2em;
          object-fit: cover;
          width: 100%;
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.18);
        }
        .location-mobile-gallery-img.grid-img-wide {
          height: 140px;
          grid-column: 1 / span 2;
        }
      `}</style>

      {/* Desktop Layout */}
      <section
        ref={mainRef}
        className="location-section location-main relative overflow-hidden location-desktop"
      >
        {/* Animated Gradient Background (from Hero/About/Theme) */}
        <div className="absolute inset-0 w-full h-full z-0">
          {/* Base gradient background */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "radial-gradient(ellipse at 60% 40%, #1A2A6C 0%, #0A0F1C 80%), linear-gradient(120deg, #0A0F1C 0%, #232526 100%)",
              transition: "opacity 0.3s linear",
            }}
          ></div>

          {/* Animated gradient overlay */}
          <div
            className="absolute inset-0 w-full h-full location-gradient-fade"
            style={{
              background:
                "radial-gradient(circle at 70% 30%, #014034 0%, #0A0F1C 70%), linear-gradient(120deg, #0A0F1C 0%, #00B836 100%)",
              opacity: 0,
              transition: "opacity 0.3s linear",
            }}
          ></div>

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 grid-pattern"></div>

          {/* Floating Geometric Shapes */}
          <div className="absolute inset-0 floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
            <div className="shape shape-6"></div>
          </div>

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

          {/* Glowing Orbs */}
          <div className="absolute inset-0 glowing-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
        </div>

        <div className="location-main-content">
          <div ref={logoRef} className="location-logo">
            <img
              src={logoImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="location-copy">
            {title.map((text, index) => (
              <div key={index} className="location-line">
                <p ref={(el) => (linesRef.current[index] = el)}>{text}</p>
              </div>
            ))}
          </div>
          <div className="location-btn">
            <button ref={buttonRef} className="location-button">
              <a
                target="_blank"
                href="https://jiejiebeachhotel.com-srilanka.com/"
              >
                {buttonText}
              </a>
            </button>
          </div>
        </div>

        {generateRows()}
      </section>

      {/* Mobile Layout */}
      <section className="location-mobile">
        {/* Animated Gradient Background (reuse from desktop) */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "radial-gradient(ellipse at 60% 40%, #1A2A6C 0%, #0A0F1C 80%), linear-gradient(120deg, #0A0F1C 0%, #232526 100%)",
              transition: "opacity 0.3s linear",
            }}
          ></div>
          <div
            className="absolute inset-0 w-full h-full location-gradient-fade"
            style={{
              background:
                "radial-gradient(circle at 70% 30%, #014034 0%, #0A0F1C 70%), linear-gradient(120deg, #0A0F1C 0%, #00B836 100%)",
              opacity: 0,
              transition: "opacity 0.3s linear",
            }}
          ></div>
          <div className="absolute inset-0 grid-pattern"></div>
          <div className="absolute inset-0 floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
            <div className="shape shape-6"></div>
          </div>
          <div className="absolute inset-0 light-rays">
            <div className="ray ray-1"></div>
            <div className="ray ray-2"></div>
            <div className="ray ray-3"></div>
          </div>
          <div className="absolute inset-0 wave-container">
            <div className="wave wave-1"></div>
            <div className="wave wave-2"></div>
            <div className="wave wave-3"></div>
          </div>
          <div className="absolute inset-0 glowing-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
          <div className="text-center mb-10">
            <Copy>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Location
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-[#004CF1] to-[#00ECEC] rounded-full mx-auto mt-6"></div>
            </Copy>
          </div>

          <div className="location-mobile-logo">
            <img
              src={logoImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="location-mobile-title">{title[0]}</div>
          <div className="location-mobile-subtitle">{title[1]}</div>
          <div className="location-mobile-btn">
            <a
              className="location-mobile-button"
              target="_blank"
              href="https://jiejiebeachhotel.com-srilanka.com/"
            >
              {buttonText}
            </a>
          </div>
          <div className="location-mobile-gallery">
            <div className="location-mobile-gallery-grid">
              <div className="location-mobile-gallery-grid-row">
                <img
                  src={images[0]}
                  alt="Hotel view"
                  className="location-mobile-gallery-img grid-img"
                  style={{ gridColumn: 1 }}
                />
                <img
                  src={images[1]}
                  alt="Hotel view"
                  className="location-mobile-gallery-img grid-img"
                  style={{ gridColumn: 2 }}
                />
              </div>
              <div className="location-mobile-gallery-grid-row">
                <img
                  src={images[2]}
                  alt="Hotel view"
                  className="location-mobile-gallery-img grid-img grid-img-wide"
                  style={{ gridColumn: "1 / span 2" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
