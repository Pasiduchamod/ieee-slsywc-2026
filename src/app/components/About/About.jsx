"use client";
import { useEffect } from "react";
import AboutCSS from "./About.css";
import { useGSAP } from "@gsap/react";
import Copy from "../Copy/Copy";
import AnimatedBackground from "../ui/AnimatedBackground";

const About = () => {
  useGSAP(() => {
    // Import GSAP dynamically to avoid SSR issues
    const initGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      let scrollTriggerInstances = [];

      const initAnimations = () => {
        scrollTriggerInstances.forEach((instance) => {
          if (instance) instance.kill();
        });
        scrollTriggerInstances = [];

        gsap.set(
          [".about-stats-item-1", ".about-stats-item-2", ".about-stats-item-3"],
          {
            scale: 0,
          }
        );

        const statsAnimation = gsap.to(
          [".about-stats-item-1", ".about-stats-item-2", ".about-stats-item-3"],
          {
            scale: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ".about-stats",
              start: "top 50%",
              toggleActions: "play none none none",
            },
          }
        );
        scrollTriggerInstances.push(statsAnimation.scrollTrigger);

        if (window.innerWidth > 1000) {
          const portraitAnimation = gsap.to(".about-hero-portrait", {
            y: -200,
            rotation: -25,
            scrollTrigger: {
              trigger: ".about-hero",
              start: "-400 top",
              end: "bottom top",
              scrub: 1,
            },
          });
          scrollTriggerInstances.push(portraitAnimation.scrollTrigger);

          const tag1Animation = gsap.to("#about-tag-1", {
            y: -300,
            rotation: -45,
            scrollTrigger: {
              trigger: ".about-copy",
              start: "top bottom",
              end: "bottom+=100% top",
              scrub: 1,
            },
          });
          scrollTriggerInstances.push(tag1Animation.scrollTrigger);

          const tag2Animation = gsap.to("#about-tag-2", {
            y: -150,
            rotation: 70,
            scrollTrigger: {
              trigger: ".about-copy",
              start: "top bottom",
              end: "bottom+=100% top",
              scrub: 1,
            },
          });
          scrollTriggerInstances.push(tag2Animation.scrollTrigger);

          const tag3Animation = gsap.to("#about-tag-3", {
            y: -400,
            rotation: 120,
            scrollTrigger: {
              trigger: ".about-copy",
              start: "top bottom",
              end: "bottom+=100% top",
              scrub: 1,
            },
          });
          scrollTriggerInstances.push(tag3Animation.scrollTrigger);

          const tag4Animation = gsap.to("#about-tag-4", {
            y: -350,
            rotation: -60,
            scrollTrigger: {
              trigger: ".about-copy",
              start: "top bottom",
              end: "bottom+=100% top",
              scrub: 1,
            },
          });
          scrollTriggerInstances.push(tag4Animation.scrollTrigger);

          const tag5Animation = gsap.to("#about-tag-5", {
            y: -200,
            rotation: 100,
            scrollTrigger: {
              trigger: ".about-copy",
              start: "top bottom",
              end: "bottom+=100% top",
              scrub: 1,
            },
          });
          scrollTriggerInstances.push(tag5Animation.scrollTrigger);
        }
      };

      initAnimations();

      window.addEventListener("resize", () => {
        initAnimations();
      });
    };

    initGSAP();
  }, []);

  return (
    <>
      {/* Unified About Section */}
      <section id="theme" className="about-section relative overflow-hidden">
        {/* Animated Gradient Background */}
        <AnimatedBackground className="absolute" />
        
        {/* About Hero Section */}
        <section className="about-hero">
          <div className="about-hero-header">
            <Copy>
              <h1>Introducing</h1>
              <h1>The Theme</h1>
            </Copy>
          </div>
          <div className="about-hero-portrait">
            <img src="/theme-img.png" alt="Otis Valen portrait" />
          </div>
        </section>
        {/* About Copy Section */}
        <section className="about-copy">
          <div className="about-copy-content relative overflow-hidden">
            {/* Animated Gradient Background (from About section) */}
            <Copy>
              <h3>
                Witness the inspiring experience of an attempt to empower
                innovations for a better tomorrow with the 14th installment of
                the largest technical congress in the country. Uniting
                researchers, academics, industry professionals, and students
                from diverse backgrounds to share their thoughts, insights, and
                experiences, the SLSYW Congress 2026 will unravel under the
                theme <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ECEC] via-[#004CF1] to-[#b4860b] font-bold">‘Intelligence for Impact‘.</span>
              </h3>
            </Copy>
          </div>
          <div className="about-tag" id="about-tag-1">
            <p>Innovation</p>
          </div>
          <div className="about-tag" id="about-tag-2">
            <p>Impact</p>
          </div>
          <div className="about-tag" id="about-tag-3">
            <p>Tech</p>
          </div>
          <div className="about-tag" id="about-tag-4">
            <p>Future</p>
          </div>
          <div className="about-tag" id="about-tag-5">
            <p>Global</p>
          </div>
        </section>
      </section>
      {/* Skills Section */}
      {/* <section className="about-skills">
        <div className="about-skills-copy">
          <p className="about-mn">01........................Illustration</p>
          <p className="about-mn">02......................VisualIdentity</p>
          <p className="about-mn">03..........................Typography</p>
          <p className="about-mn">04......................CreativeCoding</p>
          <p className="about-mn">05............................Branding</p>
          <p className="about-mn">06.........................Filmography</p>
          <p className="about-mn">07......................MotionGraphics</p>
        </div>
      </section> */}

      {/* Stats Section */}
      {/* <section className="about-stats">
        <div className="about-stats-row">
          <div className="about-stats-col about-stats-header">
            <h1>I don't love numbers, but they love me</h1>
            <p>Some slightly unhinged stats from the Otis-verse</p>
          </div>
          <div className="about-stats-col about-stats-item-1">
            <h1>32</h1>
            <p>
              Design projects that made me shout "this is the one" (every time)
            </p>
          </div>
        </div>
        <div className="about-stats-row">
          <div className="about-stats-col about-stats-item-2">
            <h1>100%</h1>
            <p>Remote, independent, and allergic to open-plan offices</p>
          </div>
          <div className="about-stats-col about-stats-item-3">
            <h1>30+</h1>
            <p>Clients who said "wow" — or at least made the face</p>
          </div>
        </div>
      </section> */}

      {/* Contact CTA Section */}
      {/* <section className="about-contact-cta">
        <div className="about-contact-button">
          <a href="/contact"></a>
          <div className="about-contact-text-small">
            <p>Collabs, or cosmic brainstorms welcome</p>
          </div>
          <div className="about-contact-text-large">
            <h1>Hit Me Up</h1>
          </div>
        </div>
      </section> */}

      {/* Footer Section */}
      {/* <footer className="about-footer">
        <div className="about-footer-container">
          <div className="about-footer-symbols about-footer-symbols-1">
            <img src="/images/global/s6.png" alt="" />
            <img src="/images/global/s6.png" alt="" />
          </div>
          <div className="about-footer-symbols about-footer-symbols-2">
            <img src="/images/global/s6.png" alt="" />
            <img src="/images/global/s6.png" alt="" />
          </div>
          <div className="about-footer-header">
            <h1>Otis Valen</h1>
          </div>
          <div className="about-footer-row">
            <div className="about-footer-col">
              <p>Quick Jumps</p>
              <p>
                <a href="/work">Portfolio</a>
              </p>
              <p>
                <a href="/about">About</a>
              </p>
              <p>
                <a href="/contact">Contact</a>
              </p>
            </div>
            <div className="about-footer-col">
              <p>Side Streets</p>
              <p>Roll the Showreel</p>
              <p>Weird Shop</p>
              <p>Buy Me a Coffee</p>
            </div>
            <div className="about-footer-col">
              <p>Social Signals</p>
              <p>
                <a href="https://www.youtube.com/@codegrid" target="_blank">
                  YouTube
                </a>
              </p>
              <p>
                <a
                  href="https://codegrid.gumroad.com/l/codegridpro"
                  target="_blank"
                >
                  Membership
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/codegridweb/"
                  target="_blank"
                >
                  Instagram
                </a>
              </p>
            </div>
            <div className="about-footer-col">
              <p>Alt Dimensions</p>
              <p>Logo Dump</p>
              <p>Freelance Top 100</p>
            </div>
          </div>
          <div className="about-copyright-info">
            <p className="about-mn">MWT - MAY 2026</p>
            <p className="about-mn">//</p>
            <p className="about-mn">
              Built by
              <a href="https://www.youtube.com/@codegrid" target="_blank">
                Codegrid
              </a>
            </p>
          </div>
          <div className="about-explosion-container"></div>
        </div>
      </footer> */}
      <style jsx>{`
        @media (min-width: 1001px) {
          .about-copy-content {
            position: relative;
          }
          .about-copy-glass-bg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            pointer-events: none;
            background: linear-gradient(
              120deg,
              rgba(10, 15, 28, 0.65) 0%,
              rgba(0, 76, 241, 0.45) 30%,
              rgba(0, 236, 236, 0.38) 65%,
              rgba(180, 134, 11, 0.32) 100%
            );
            border: 2px solid rgba(0, 236, 236, 0.45);
            box-shadow: 0 8px 32px 0 rgba(0, 236, 236, 0.18),
              0 2px 8px 0 rgba(180, 134, 11, 0.15);
            backdrop-filter: blur(18px) saturate(140%);
            -webkit-backdrop-filter: blur(18px) saturate(140%);
            border-radius: 1.5rem;
            opacity: 1;
            transition: opacity 0.3s linear;
          }
          .about-copy-content > *:not(.about-copy-glass-bg) {
            position: relative;
            z-index: 1;
          }
        }
        @media (max-width: 1000px) {
          .about-copy-glass-bg {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default About;
