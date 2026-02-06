"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Schedule({
  logoText = "Site Logo",
  menuText = "Menu",
  heroCards = [
    { title: "Plan", number: "01", bgColor: "#e5d9f6" },
    { title: "Design", number: "02", bgColor: "#ffd2f3" },
    { title: "Develop", number: "03", bgColor: "#fcdca6" },
  ],
  aboutTitle = "Keep scrolling — it gets good",
  servicesTitle = "Stuff I make so you don't have to",
  outroTitle = "The story's not over yet",
  serviceCards = [
    {
      title: "Plan",
      number: "01",
      bgColor: "#e5d9f6",
      services: [
        "Discovery",
        "Audit",
        "User Flow",
        "Site Map",
        "Personas",
        "Strategy",
      ],
    },
    {
      title: "Design",
      number: "02",
      bgColor: "#ffd2f3",
      services: [
        "Wireframes",
        "UI Kits",
        "Prototypes",
        "Visual Style",
        "Interaction",
        "Design QA",
      ],
    },
    {
      title: "Develop",
      number: "03",
      bgColor: "#fcdca6",
      services: [
        "HTML/CSS/JS",
        "CMS Build",
        "GSAP Motion",
        "Responsive",
        "Optimization",
        "Launch",
      ],
    },
  ],
}) {
  const containerRef = useRef(null);
  const heroCardsRef = useRef(null);
  const servicesRef = useRef(null);
  const servicesHeaderRef = useRef(null);
  const cardsRef = useRef(null);
  const mobileCardsRef = useRef(null);
  const cardRefs = useRef([]);
  const heroCardRefs = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const smoothStep = (p) => p * p * (3 - 2 * p);

      // Only run desktop animations on larger screens
      const mediaQuery = window.matchMedia("(min-width: 1000px)");

      const runDesktopAnimations = () => {
        if (mediaQuery.matches) {
          // Hero cards animation
          ScrollTrigger.create({
            trigger: ".schedule-hero",
            start: "top top",
            end: "75% top",
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;

              const heroCardsContainerOpacity = gsap.utils.interpolate(
                1,
                0.5,
                smoothStep(progress)
              );
              gsap.set(heroCardsRef.current, {
                opacity: heroCardsContainerOpacity,
              });

              heroCardRefs.current.forEach((card, index) => {
                if (!card) return;

                const delay = index * 0.9;
                const cardProgress = gsap.utils.clamp(
                  0,
                  1,
                  (progress - delay * 0.1) / (1 - delay * 0.1)
                );

                const y = gsap.utils.interpolate(
                  "0%",
                  "350%",
                  smoothStep(cardProgress)
                );
                const scale = gsap.utils.interpolate(
                  1,
                  0.75,
                  smoothStep(cardProgress)
                );

                let x = "0%";
                let rotation = 0;
                if (index === 0) {
                  x = gsap.utils.interpolate(
                    "0%",
                    "90%",
                    smoothStep(cardProgress)
                  );
                  rotation = gsap.utils.interpolate(
                    0,
                    -15,
                    smoothStep(cardProgress)
                  );
                } else if (index === 2) {
                  x = gsap.utils.interpolate(
                    "0%",
                    "-90%",
                    smoothStep(cardProgress)
                  );
                  rotation = gsap.utils.interpolate(
                    0,
                    15,
                    smoothStep(cardProgress)
                  );
                }

                gsap.set(card, {
                  y: y,
                  x: x,
                  rotation: rotation,
                  scale: scale,
                });
              });
            },
          });

          // Pin services section
          ScrollTrigger.create({
            trigger: servicesRef.current,
            start: "top top",
            end: `+=${window.innerHeight * 4}px`,
            pin: servicesRef.current,
            pinSpacing: true,
          });

          // Handle cards position change
          ScrollTrigger.create({
            trigger: servicesRef.current,
            start: "top top",
            end: `+=${window.innerHeight * 4}px`,
            onLeave: () => {
              const servicesSection = servicesRef.current;
              if (servicesSection) {
                const servicesRect = servicesSection.getBoundingClientRect();
                const servicesTop = window.pageYOffset + servicesRect.top;

                gsap.set(cardsRef.current, {
                  position: "absolute",
                  top: servicesTop,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                });
              }
            },
            onEnterBack: () => {
              gsap.set(cardsRef.current, {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
              });
            },
          });

          // Main cards animation
          ScrollTrigger.create({
            trigger: servicesRef.current,
            start: "top bottom",
            end: `+=${window.innerHeight * 4}`,
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;

              // Animate header
              const headerProgress = gsap.utils.clamp(0, 1, progress / 0.9);
              const headerY = gsap.utils.interpolate(
                "400%",
                "0%",
                smoothStep(headerProgress)
              );
              gsap.set(servicesHeaderRef.current, {
                y: headerY,
              });

              // Animate cards
              cardRefs.current.forEach((card, index) => {
                if (!card) return;

                const delay = index * 0.5;
                const cardProgress = gsap.utils.clamp(
                  0,
                  1,
                  (progress - delay * 0.1) / (0.9 - delay * 0.1)
                );

                const innerCard = card.querySelector(
                  ".schedule-flip-card-inner"
                );
                if (!innerCard) return;

                let y;
                if (cardProgress < 0.4) {
                  const normalizedProgress = cardProgress / 0.4;
                  y = gsap.utils.interpolate(
                    "-100%",
                    "50%",
                    smoothStep(normalizedProgress)
                  );
                } else if (cardProgress < 0.6) {
                  const normalizedProgress = (cardProgress - 0.4) / 0.2;
                  y = gsap.utils.interpolate(
                    "50%",
                    "0%",
                    smoothStep(normalizedProgress)
                  );
                } else {
                  y = "0%";
                }

                let scale;
                if (cardProgress < 0.4) {
                  const normalizedProgress = cardProgress / 0.4;
                  scale = gsap.utils.interpolate(
                    0.25,
                    0.75,
                    smoothStep(normalizedProgress)
                  );
                } else if (cardProgress < 0.6) {
                  const normalizedProgress = (cardProgress - 0.4) / 0.2;
                  scale = gsap.utils.interpolate(
                    0.75,
                    1,
                    smoothStep(normalizedProgress)
                  );
                } else {
                  scale = 1;
                }

                let opacity;
                if (cardProgress < 0.2) {
                  const normalizedProgress = cardProgress / 0.2;
                  opacity = smoothStep(normalizedProgress);
                } else {
                  opacity = 1;
                }

                let x, rotate, rotationY;
                if (cardProgress < 0.6) {
                  x = index === 0 ? "100%" : index === 1 ? "0%" : "-100%";
                  rotate = index === 0 ? -5 : index === 1 ? 0 : 5;
                  rotationY = 0;
                } else if (cardProgress < 1) {
                  const normalizedProgress = (cardProgress - 0.6) / 0.4;
                  x = gsap.utils.interpolate(
                    index === 0 ? "100%" : index === 1 ? "0%" : "-100%",
                    "0%",
                    smoothStep(normalizedProgress)
                  );
                  rotate = gsap.utils.interpolate(
                    index === 0 ? -5 : index === 1 ? 0 : 5,
                    0,
                    smoothStep(normalizedProgress)
                  );
                  rotationY = smoothStep(normalizedProgress) * 180;
                } else {
                  x = "0%";
                  rotate = 0;
                  rotationY = 180;
                }

                gsap.set(card, {
                  opacity: opacity,
                  y: y,
                  x: x,
                  rotate: rotate,
                  scale: scale,
                });

                gsap.set(innerCard, {
                  rotationY: rotationY,
                });
              });
            },
          });
        }
      };

      runDesktopAnimations();

      // Listen for screen size changes
      mediaQuery.addEventListener("change", runDesktopAnimations);

      return () => {
        mediaQuery.removeEventListener("change", runDesktopAnimations);
      };
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="schedule-container">
      <style jsx>{`
        .schedule-container {
          --schedule-dark: #000;
          --schedule-light: #f9f4eb;
          --schedule-light2: #f0ece5;
          --schedule-accent-1: #e5d9f6;
          --schedule-accent-2: #ffd2f3;
          --schedule-accent-3: #fcdca6;
          font-family: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, sans-serif;
          position: relative;
          width: 100%;
          overflow-x: hidden;
        }

        .schedule-container * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .schedule-nav {
          position: fixed;
          width: 100vw;
          padding: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 2;
        }

        .schedule-logo span,
        .schedule-menu-btn span {
          font-size: 0.8rem;
          padding: 0.75rem;
          border-radius: 0.25rem;
          text-transform: uppercase;
          font-family: "DM Mono", monospace;
          font-weight: 500;
        }

        .schedule-logo span {
          background-color: var(--schedule-dark);
          color: var(--schedule-light);
        }

        .schedule-menu-btn span {
          background-color: var(--schedule-light2);
          color: var(--schedule-dark);
        }

        .schedule-section {
          position: relative;
          width: 100vw;
          height: 100vh;
          padding: 2rem;
          overflow: hidden;
        }

        .schedule-hero {
          background-color: var(--schedule-light);
          color: var(--schedule-dark);
        }

        .schedule-about,
        .schedule-outro {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--schedule-dark);
          color: var(--schedule-light);
        }

        .schedule-about h1,
        .schedule-outro h1 {
          font-size: 1.5rem;
          font-weight: 500;
        }

        .schedule-hero-cards {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 35%;
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .schedule-hero-cards .schedule-card {
          flex: 1;
          position: relative;
          aspect-ratio: 5/7;
          padding: 0.75rem;
          border-radius: 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .schedule-card-title {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .schedule-card-title span {
          font-size: 0.7rem;
          text-transform: uppercase;
          font-family: "DM Mono", monospace;
          font-weight: 500;
        }

        .schedule-hero-cards .schedule-card:first-child {
          transform-origin: top right;
          z-index: 2;
        }

        .schedule-hero-cards .schedule-card:nth-child(2) {
          z-index: 1;
        }

        .schedule-hero-cards .schedule-card:last-child {
          transform-origin: top left;
          z-index: 0;
        }

        .schedule-services {
          padding: 8rem 2rem;
        }

        .schedule-services-header {
          position: relative;
          width: 100%;
          text-align: center;
          transform: translateY(400%);
          will-change: transform;
        }

        .schedule-services-header h1 {
          font-size: 1.5rem;
          font-weight: 500;
        }

        .schedule-cards {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          z-index: -1;
          background-color: var(--schedule-light);
        }

        .schedule-cards-container {
          position: relative;
          width: 75%;
          height: 100%;
          margin-top: 4rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4rem;
        }

        .schedule-cards-container .schedule-card {
          flex: 1;
          position: relative;
          aspect-ratio: 5/7;
          perspective: 1000px;
          opacity: 0;
        }

        .schedule-cards-container .schedule-card .schedule-card-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          animation: schedule-floating 2s infinite ease-in-out;
        }

        @keyframes schedule-floating {
          0% {
            transform: translate(-50%, -50%);
          }
          50% {
            transform: translate(-50%, -55%);
          }
          100% {
            transform: translate(-50%, -50%);
          }
        }

        .schedule-cards-container
          .schedule-card:nth-child(1)
          .schedule-card-wrapper {
          animation-delay: 0s;
        }

        .schedule-cards-container
          .schedule-card:nth-child(2)
          .schedule-card-wrapper {
          animation-delay: 0.25s;
        }

        .schedule-cards-container
          .schedule-card:nth-child(3)
          .schedule-card-wrapper {
          animation-delay: 0.5s;
        }

        .schedule-flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }

        .schedule-flip-card-front,
        .schedule-flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          backface-visibility: hidden;
          overflow: hidden;
        }

        .schedule-flip-card-front {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }

        .schedule-flip-card-back {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 2rem;
          background-color: #fff;
          transform: rotateY(180deg);
        }

        .schedule-card-copy {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .schedule-card-copy p {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1rem;
          font-weight: 500;
          background-color: var(--schedule-light2);
          border-radius: 0.25rem;
        }

        .schedule-cards .schedule-card:nth-child(1) {
          transform: translateX(100%) translateY(-100%) rotate(-5deg)
            scale(0.25);
          z-index: 2;
        }

        .schedule-cards .schedule-card:nth-child(2) {
          transform: translateX(0%) translateY(-100%) rotate(0deg) scale(0.25);
          z-index: 1;
        }

        .schedule-cards .schedule-card:nth-child(3) {
          transform: translateX(-100%) translateY(-100%) rotate(5deg)
            scale(0.25);
          z-index: 0;
        }

        .schedule-mobile-cards {
          display: none;
        }

        @media (max-width: 1000px) {
          .schedule-hero-cards {
            width: calc(100% - 4rem);
          }

          .schedule-services {
            min-height: 100vh;
            height: 100%;
          }

          .schedule-services-header {
            transform: translateY(0%);
          }

          .schedule-mobile-cards {
            display: block;
            height: 100%;
          }

          .schedule-mobile-cards .schedule-cards-container {
            width: calc(100% - 4rem);
            display: block;
            height: 100%;
            margin: 4rem auto;
          }

          .schedule-mobile-cards .schedule-cards-container .schedule-card {
            margin-bottom: 2rem;
            opacity: 1;
          }

          .schedule-mobile-cards
            .schedule-cards-container
            .schedule-card-wrapper {
            animation: none;
          }

          .schedule-mobile-cards .schedule-card .schedule-flip-card-front {
            transform: rotateY(180deg);
          }

          .schedule-mobile-cards .schedule-flip-card-back {
            transform: rotateY(0deg);
          }
        }
      `}</style>

      <nav className="schedule-nav">
        <div className="schedule-logo">
          <span>{logoText}</span>
        </div>
        <div className="schedule-menu-btn">
          <span>{menuText}</span>
        </div>
      </nav>

      <section className="schedule-section schedule-hero">
        <div ref={heroCardsRef} className="schedule-hero-cards">
          {heroCards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (heroCardRefs.current[index] = el)}
              className="schedule-card"
              style={{ backgroundColor: card.bgColor }}
            >
              <div className="schedule-card-title">
                <span>{card.title}</span>
                <span>{card.number}</span>
              </div>
              <div className="schedule-card-title">
                <span>{card.number}</span>
                <span>{card.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="schedule-section schedule-about">
        <h1>{aboutTitle}</h1>
      </section>

      <section ref={servicesRef} className="schedule-section schedule-services">
        <div ref={servicesHeaderRef} className="schedule-services-header">
          <h1>{servicesTitle}</h1>
        </div>

        <div className="schedule-mobile-cards">
          <div className="schedule-cards-container">
            {serviceCards.map((card, index) => (
              <div key={index} className="schedule-card">
                <div className="schedule-card-wrapper">
                  <div className="schedule-flip-card-inner">
                    <div
                      className="schedule-flip-card-front"
                      style={{ backgroundColor: card.bgColor }}
                    >
                      <div className="schedule-card-title">
                        <span>{card.title}</span>
                        <span>{card.number}</span>
                      </div>
                      <div className="schedule-card-title">
                        <span>{card.number}</span>
                        <span>{card.title}</span>
                      </div>
                    </div>
                    <div className="schedule-flip-card-back">
                      <div className="schedule-card-title">
                        <span>{card.title}</span>
                        <span>{card.number}</span>
                      </div>
                      <div className="schedule-card-copy">
                        {card.services.map((service, serviceIndex) => (
                          <p key={serviceIndex}>{service}</p>
                        ))}
                      </div>
                      <div className="schedule-card-title">
                        <span>{card.number}</span>
                        <span>{card.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={cardsRef} className="schedule-cards">
        <div className="schedule-cards-container">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="schedule-card"
            >
              <div className="schedule-card-wrapper">
                <div className="schedule-flip-card-inner">
                  <div
                    className="schedule-flip-card-front"
                    style={{ backgroundColor: card.bgColor }}
                  >
                    <div className="schedule-card-title">
                      <span>{card.title}</span>
                      <span>{card.number}</span>
                    </div>
                    <div className="schedule-card-title">
                      <span>{card.number}</span>
                      <span>{card.title}</span>
                    </div>
                  </div>
                  <div className="schedule-flip-card-back">
                    <div className="schedule-card-title">
                      <span>{card.title}</span>
                      <span>{card.number}</span>
                    </div>
                    <div className="schedule-card-copy">
                      {card.services.map((service, serviceIndex) => (
                        <p key={serviceIndex}>{service}</p>
                      ))}
                    </div>
                    <div className="schedule-card-title">
                      <span>{card.number}</span>
                      <span>{card.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="schedule-section schedule-outro">
        <h1>{outroTitle}</h1>
      </section>
    </div>
  );
}
