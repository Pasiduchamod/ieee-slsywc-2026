"use client";
import React from "react";
import Copy from "./Copy/Copy";
import NeuralNetwork from "./NeuralNetwork";

const sponsors = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png",
  "21.png",
  "22.png",
  "23.png",
  "24.png",
  "26.png",
  "27.png",
  "28.png",
  "29.png",
  "30.png",
  "31.png",
  "32.png",
];

function Sponsors() {
  return (
    <section className="sponsors-section  min-h-[60vh] flex items-center justify-center relative overflow-hidden">
      <div className="sponsors-glass-card w-full h-full flex items-center justify-center relative z-10">
        {/* Animated Gradient Background (from Hero/About/Theme/Location/ProcessCards) */}
        <div className="absolute inset-0 w-full h-full -z-10">
          {/* Base gradient background */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "radial-gradient(circle at 50% 25%, rgba(3, 10, 26, 0.85), transparent 70%), radial-gradient(circle at 72% 60%, rgba(10, 45, 119, 0.45), transparent 80%), linear-gradient(180deg, rgba(3, 6, 14, 1) 0%, rgba(4, 8, 18, 0.85) 45%, rgba(6, 10, 22, 0.2) 100%), linear-gradient(135deg, #030710 0%, #050914 100%)",
              transition: "opacity 0.3s linear",
            }}
          ></div>

          {/* Animated gradient overlay */}
          <div
            className="absolute inset-0 w-full h-full sponsors-gradient-fade"
            style={{
              background:
                "radial-gradient(circle at 55% 30%, rgba(255, 191, 71, 0.2), transparent 55%), radial-gradient(circle at 80% 65%, rgba(255, 186, 56, 0.25), transparent 65%), linear-gradient(180deg, rgba(3, 6, 14, 1) 0%, rgba(4, 8, 18, 0.85) 45%, rgba(6, 10, 22, 0.2) 100%)",
              opacity: 0,
              transition: "opacity 0.3s linear",
            }}
          ></div>

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 grid-pattern"></div>

          {/* Neural Network Background */}
          <NeuralNetwork />

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
        </div>
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <Copy>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Past Sponsors & Partners
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] rounded-full mx-auto mt-6"></div>
            </Copy>
          </div>

          {/* Desktop Marquee */}
          <div className="hidden md:block mb-16">
            <div className="relative overflow-hidden">
              <div
                className="flex animate-marquee"
                style={{ width: "max-content" }}
              >
                {sponsors.map((sponsor, index) => (
                  <div key={index} className="flex-shrink-0 mx-8 group">
                    <div className="bg-[#10182a]/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#ffcb40]/20 hover:border-[#ffcb40]/40">
                      <img
                        src={`/sponsors/${sponsor}`}
                        alt={`Sponsor ${index + 1}`}
                        className="h-16 w-auto object-contain filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {sponsors.map((sponsor, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="flex-shrink-0 mx-8 group"
                  >
                    <div className="bg-[#10182a]/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#ffcb40]/20 hover:border-[#ffcb40]/40">
                      <img
                        src={`/sponsors/${sponsor}`}
                        alt={`Sponsor ${index + 1}`}
                        className="h-16 w-auto object-contain filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Marquee */}
          <div className="md:hidden space-y-8">
            <div className="relative overflow-hidden">
              <div
                className="flex animate-marquee-mobile"
                style={{ width: "max-content" }}
              >
                {sponsors.slice(0, 8).map((sponsor, index) => (
                  <div key={index} className="flex-shrink-0 mx-4 group">
                    <div className="bg-[#10182a]/80 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[#ffcb40]/20 hover:border-[#ffcb40]/40">
                      <img
                        src={`/sponsors/${sponsor}`}
                        alt={`Sponsor ${index + 1}`}
                        className="h-12 w-auto object-contain filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {sponsors.slice(0, 8).map((sponsor, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="flex-shrink-0 mx-4 group"
                  >
                    <div className="bg-[#10182a]/80 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[#ffcb40]/20 hover:border-[#ffcb40]/40">
                      <img
                        src={`/sponsors/${sponsor}`}
                        alt={`Sponsor ${index + 1}`}
                        className="h-12 w-auto object-contain filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div
                className="flex animate-marquee-mobile-reverse"
                style={{ width: "max-content" }}
              >
                {sponsors.slice(8).map((sponsor, index) => (
                  <div key={index} className="flex-shrink-0 mx-4 group">
                    <div className="bg-[#10182a]/80 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[#ffcb40]/20 hover:border-[#ffcb40]/40">
                      <img
                        src={`/sponsors/${sponsor}`}
                        alt={`Sponsor ${index + 9}`}
                        className="h-12 w-auto object-contain filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {sponsors.slice(8).map((sponsor, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="flex-shrink-0 mx-4 group"
                  >
                    <div className="bg-[#10182a]/80 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[#ffcb40]/20 hover:border-[#ffcb40]/40">
                      <img
                        src={`/sponsors/${sponsor}`}
                        alt={`Sponsor ${index + 9}`}
                        className="h-12 w-auto object-contain filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          {/* <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Become a Sponsor
              </h3>
              <p className="text-gray-600 mb-6">
                Join our community of sponsors and help us create amazing experiences for our attendees.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Partner With Us
              </button>
            </div>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-mobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-mobile-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee-mobile {
          animation: marquee-mobile 10s linear infinite;
        }

        .animate-marquee-mobile-reverse {
          animation: marquee-mobile-reverse 30s linear infinite;
        }

        .sponsors-section {
          /* background removed to allow Neural Network integration */
        }
        .sponsors-glass-card {
          width: 100vw;
          height: 100%;
          background: rgba(10, 16, 32, 0.3);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        section {
          min-height: 60vh;
        }
      `}</style>
    </section>
  );
}

export default Sponsors;
