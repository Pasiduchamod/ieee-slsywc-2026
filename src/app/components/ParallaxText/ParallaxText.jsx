"use client";
import { useRef } from "react";
import Picture1 from "../../../../public/organizers/1.png";
import Picture2 from "../../../../public/organizers/2.png";
import Picture3 from "../../../../public/organizers/3.png";
import { motion } from "framer-motion";

import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";

const Slide = (props) => {
  const direction = props.direction == "left" ? -1 : 1;

  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );

  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={props.src} />

      <Phrase src={props.src} />

      <Phrase src={props.src} />
    </motion.div>
  );
};
const Phrase = ({ src }) => {
  return (
    <div className={"flex  items-center py-10 bg-[#0B1122]"}>
      <div className={"flex items-center"}>
        <p className="text-[5vh] px-5  text-white">Organized By</p>

        <span className="relative h-[7.5vw] aspect-[4/2] overflow-hidden">
          <Image 
            style={{ objectFit: "contain" }} 
            src={src} 
            alt="image" 
            fill 
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </span>
      </div>

      <div className={" flex  items-center"}>
        <p className="text-[2rem] px-10 text-white">Organized By</p>

        <span className="relative h-[7.5vw] aspect-[4/2] overflow-hidden">
          <Image 
            style={{ objectFit: "contain" }} 
            src={src} 
            alt="image" 
            fill 
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </span>
      </div>
    </div>
  );
};

export default function ParallaxText() {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });
  return (
    <div className="overflow-hidden bg-black">
      <div ref={container} className="relative">
        <Slide
          src={Picture1}
          direction={"left"}
          left={"-40%"}
          progress={scrollYProgress}
        />

        <Slide
          src={Picture2}
          direction={"right"}
          left={"-25%"}
          progress={scrollYProgress}
        />
      </div>
    </div>
  );
}
