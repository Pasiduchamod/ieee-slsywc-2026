"use client";

import { useState, useEffect } from "react";

export const useRegistrationCountdown = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the target date: July 16th, 2026 at 7:00 PM
    const targetDate = new Date("2026-07-18T21:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsRegistrationOpen(true);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Force a re-render when countdown expires
    const checkExpiry = setInterval(() => {
      const now = new Date();
      if (now >= targetDate) {
        setIsRegistrationOpen(true);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(checkExpiry);
    };
  }, []);

  const formatTimeLeft = () => {
    const { days, hours, minutes, seconds } = timeLeft;
    return {
      days: days.toString().padStart(2, "0"),
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    };
  };

  return {
    isRegistrationOpen,
    timeLeft: formatTimeLeft(),
    rawTimeLeft: timeLeft,
  };
};
