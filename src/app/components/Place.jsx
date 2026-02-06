"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export default function Place() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const lenis = new Lenis();
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      const cards = gsap.utils.toArray(".place-card");
      const introCard = cards[0];

      // SplitText animation setup
      const titles = gsap.utils.toArray(".place-card-title h1");
      titles.forEach((title) => {
        const split = new SplitText(title, {
          type: "chars",
          charsClass: "char",
          tag: "div",
        });
        split.chars.forEach((char) => {
          char.innerHTML = `<span>${char.textContent}</span>`;
        });
      });

      const animateContentIn = (titleChars, description) => {
        gsap.to(titleChars, { x: "0%", duration: 0.75, ease: "power4.out" });
        gsap.to(description, {
          x: 0,
          opacity: 1,
          duration: 0.75,
          delay: 0.1,
          ease: "power4.out",
        });
      };

      const animateContentOut = (titleChars, description) => {
        gsap.to(titleChars, { x: "100%", duration: 0.5, ease: "power4.out" });
        gsap.to(description, {
          x: "40px",
          opacity: 0,
          duration: 0.5,
          ease: "power4.out",
        });
      };

      // ScrollTriggers for each card
      cards.forEach((card, index) => {
        const isLastCard = index === cards.length - 1;
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: isLastCard ? "+=100vh" : "top top",
          pin: true,
          pinSpacing: isLastCard,
        });
      });

      cards.forEach((card, index) => {
        if (index === 0) return;

        const cardImg = card.querySelector(".place-card-img img");
        const imgContainer = card.querySelector(".place-card-img");

        ScrollTrigger.create({
          trigger: card,
          start: "top bottom",
          end: "top top",
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(cardImg, { scale: 2 - progress });
            gsap.set(imgContainer, {
              borderRadius: 150 - progress * 125 + "px",
            });
          },
        });
      });

      cards.forEach((card, index) => {
        if (index === 0) return;

        const cardDescription = card.querySelector(".place-card-description");
        const cardTitleChars = card.querySelectorAll(".char span");

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          onEnter: () => animateContentIn(cardTitleChars, cardDescription),
          onLeaveBack: () => animateContentOut(cardTitleChars, cardDescription),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-screen overflow-x-hidden bg-gray-900 text-white"
    >
      <section className="h-screen flex justify-center items-center px-6">
        <h1 className="text-center text-5xl md:text-7xl max-w-3xl leading-tight">
          We design spaces that don’t just exist.
        </h1>
      </section>

      <section className="flex flex-col gap-[25vh]">
        {[
          {
            title: "Curved Horizon",
            description:
              "A futuristic residence that plays with curvature and flow, blending bold geometry with natural topography.",
            img: "/card-img-1.jpg",
          },
          {
            title: "Glass Haven",
            description:
              "A sleek pavilion of pure transparency, openness and light, designed to dissolve into its environment.",
            img: "/card-img-2.jpg",
          },
          {
            title: "Moss Cube",
            description:
              "A minimalist cube home crowned with a living moss dome, merging micro-architecture with ecological design.",
            img: "/card-img-3.jpg",
          },
          {
            title: "Floating Shelter",
            description:
              "This design explores an ethereal structure perched on a grassy islet, seemingly hovering above water.",
            img: "/card-img-4.jpg",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="place-card relative w-screen h-screen px-6"
          >
            <div className="place-card-wrapper relative w-full h-full">
              <div className="place-card-img absolute w-full h-full overflow-hidden rounded-[150px]">
                <img
                  src={card.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="place-card-content absolute w-full h-full flex justify-center items-end z-10">
                <div className="place-card-title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-tight">
                    {card.title}
                  </h1>
                </div>
                <div className="place-card-description text-center w-[40%] mb-12 opacity-0 translate-x-10">
                  <p className="text-lg leading-tight">{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="h-screen flex justify-center items-center px-6">
        <h1 className="text-center text-5xl md:text-7xl max-w-3xl leading-tight">
          Architecture reimagined for the virtual age.
        </h1>
      </section>
    </div>
  );
}
