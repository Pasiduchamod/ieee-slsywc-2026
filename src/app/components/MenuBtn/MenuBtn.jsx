"use client";
import React, { useState } from "react";
import "./MenuBtn.module.css";

const MenuBtn = ({ isOpen, toggleMenu }) => {
  const [hover, setHover] = useState(null);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`menu-toggle ${
        isOpen ? "opened" : "closed"
      } fixed top-[1.3em] right-[2.5em] w-[120px] h-[60px] bg-[#0f0f0f] rounded-[8em] cursor-pointer z-20`}
      style={{
        transition: "width 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)",
        transformOrigin: "right",
        width: isOpen ? "60px" : "120px",
      }}
      onClick={toggleMenu}
    >
      <div
        className="menu-toggle-icon absolute right-0 w-[60px] h-[60px] rounded-full bg-white z-10 overflow-hidden"
        style={{
          clipPath: "circle(10% at 50% 50%)",
          transition: "all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)",
          clipPath: isOpen
            ? "circle(50% at 50% 50%)"
            : hover
            ? "circle(35% at 50% 50%)"
            : "circle(10% at 50% 50%)",
          transform: isOpen ? "scale(1.125)" : "scale(1)",
        }}
      >
        <div
          className="hamburger hamburger absolute top-[60%] left-1/2 w-[30px] h-[30px] flex justify-center items-center opacity-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.075,0.82,0.165,0.82)]"
          style={{
            transform: "translate(-50%, -50%)",
            top: hover || isOpen ? "50%" : "60%",
            opacity: hover || isOpen ? 1 : 0,
          }}
        >
          <div
            className="menu-bar absolute w-[15px] h-[1.5px] bg-black transition-all duration-250 ease-out"
            data-position="top"
            style={{
              transform: isOpen
                ? "translateY(0) rotate(45deg) scaleX(1.05)"
                : "translateY(-3px)",
            }}
          ></div>
          <div
            className="menu-bar absolute w-[15px] h-[1.5px] bg-black transition-all duration-250 ease-out"
            data-position="bottom"
            style={{
              transform: isOpen
                ? "translateY(0) rotate(-45deg) scaleX(1.05)"
                : "translateY(3px)",
            }}
          ></div>
        </div>
      </div>
      <div
        className="menu-copy absolute top-1/2 left-[30px] text-white z-10 "
        style={{
          transform: "translateY(-50%)",
          transition: "left 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)",
          left: hover ? "20px" : "30px",
          opacity: isOpen ? 0 : 1,
        }}
      >
        <p className="uppercase font-medium text-[12px] m-0 p-0">Menu</p>
      </div>
    </div>
  );
};

export default MenuBtn;
