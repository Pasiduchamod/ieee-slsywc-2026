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

function RegPage() {
  const { isRegistrationOpen, isRegistrationEnded } = useRegistrationStatus();

  return (
    <div className="min-h-screen relative overflow-hidden pt-[10vh]">
      {/* Animated Background (from Hero/About) */}
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
          className="absolute inset-0 w-full h-full hero-gradient-fade"
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
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4">
                  <Award className="w-10 h-10 text-purple-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ff99] via-[#00aaff] to-[#00ffea] animate-gradient-move">
                  IEEE SLSYWC 2026
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ff99] via-[#00aaff] to-[#00ffea] animate-gradient-move">
                  Welcome to the flagship event of IEEE Sri Lanka Section
                </span>
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-purple-200">
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

            {/* Registration Form */}
            <div className="mb-12">
              <SimpleRegisterForm />
            </div>

            {/* Contact Information */}
            <div className="bg-[rgba(10,16,26,0.97)] border border-[#0038b8] rounded-2xl shadow-xl p-8 backdrop-blur-md">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-[#b8eaff] mb-4">
                  Need Help?
                </h3>
                <p className="text-lg text-[#b8eaff]">
                  Our support team is here to assist you with any questions
                  about registration.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#004CF1] to-[#00ECEC] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#b8eaff] mb-2">
                    Email Support
                  </h4>
                  <a
                    href="mailto:ieeeslsywc@gmail.com"
                    className="text-[#00ecec] hover:text-[#00b836] font-medium text-lg hover:underline transition-colors"
                  >
                    ieeeslsywc@gmail.com
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00B836] to-[#008A28] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#b8eaff] mb-2">
                    Phone Support
                  </h4>
                  <div className="flex flex-col justify-center items-center">
                    <a
                      href="tel:+94715704449"
                      className="text-[#00b836] hover:text-[#00ecec] font-medium text-lg hover:underline transition-colors"
                    >
                      +94 70 224 3799 - Uvindu
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
