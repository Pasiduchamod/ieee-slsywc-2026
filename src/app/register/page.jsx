"use client";

import React, { useState } from "react";
import SimpleRegisterForm from "../components/SimpleRegisterForm/SimpleRegisterForm";
import Countdown from "../components/Countdown/Countdown";
import { useRegistrationStatus } from "../hooks/useRegistrationStatus";
import {
  Award,
  Calendar,
  MapPin,
  Users,
  Mail,
  Phone,
  CheckCircle,
} from "lucide-react";
import AnimatedBackground from "../components/ui/AnimatedBackground";

function RegPage() {
  const { isRegistrationOpen, isRegistrationEnded } = useRegistrationStatus();

  return (
    <div className="min-h-screen relative overflow-hidden pt-[10vh]">
      {/* Animated Background (from Hero/About) */}
      {/* Animated Background from Hero */}
      <AnimatedBackground showNeuralNetwork={true} />
      {/* Main Content: Countdown or Registration UI */}
      {isRegistrationEnded ? (
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-500 rounded-full shadow-lg mb-4">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600">
                  Registration Closed
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                Registration for IEEE SLSYWC 2026 has ended
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Thank you for your interest. Registration closed on August 13,
                2026 at 11:59 PM.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-300">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  September 26/ 27/ 28, 2026
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Jie Jie Beach, Panadura
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  250 Delegates Expected
                </div>
              </div>
            </div>

            {/* Back to Home Button */}
            <div className="mt-12">
              <a
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Home
              </a>
            </div>
          </div>
        </div>
      ) : isRegistrationOpen ? (
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#1a2a6c] to-[#0f172a] border border-[#ffcb40] rounded-full shadow-[0_0_20px_rgba(255,203,64,0.3)] mb-4">
                  <Award className="w-10 h-10 text-[#ffcb40]" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffcb40] via-[#fbf5b7] to-[#b4860b] animate-gradient-move">
                  IEEE SLSYWC 2026
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-[#b8eaff] mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#eafaff] via-[#b8eaff] to-[#eafaff]">
                  Welcome to the flagship event of IEEE Sri Lanka Section
                </span>
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-[#b8eaff]/80">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-[#ffcb40]" />
                  September 26/ 27/ 28, 2026
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-[#ffcb40]" />
                  Jie Jie Beach, Panadura
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-[#ffcb40]" />
                  250 Delegates Expected
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="mb-12">
              <SimpleRegisterForm />
            </div>

            {/* Contact Information */}
            <div className="bg-[#0f172a]/90 border border-[#ffcb40]/30 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-8 backdrop-blur-md">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-[#ffcb40] mb-4">
                  Need Help?
                </h3>
                <p className="text-lg text-[#b8eaff]">
                  Our support team is here to assist you with any questions
                  about registration.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#b4860b] to-[#ffcb40] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-[#0f172a]">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#b8eaff] mb-2">
                    Email Support
                  </h4>
                  <a
                    href="mailto:ieeeslsywc@gmail.com"
                    className="text-[#ffcb40] hover:text-white font-medium text-lg hover:underline transition-colors"
                  >
                    ieeeslsywc@gmail.com
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#b4860b] to-[#ffcb40] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-[#0f172a]">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#b8eaff] mb-2">
                    Phone Support
                  </h4>
                  <div className="flex flex-col justify-center items-center">
                    <a
                      href="tel:+94715704449"
                      className="text-[#ffcb40] hover:text-white font-medium text-lg hover:underline transition-colors"
                    >
                      +94 70 216 3398 - Kavin
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen relative z-10">
          <Countdown />
        </div>
      )}
      <style jsx>{`
        @keyframes gradient-move {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default RegPage;
