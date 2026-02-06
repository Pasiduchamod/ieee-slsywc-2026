"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Award, ChevronRight } from "lucide-react";
import Copy from "../components/Copy/Copy";
import NeuralNetwork from "../components/NeuralNetwork";

const editions = [
  {
    year: "2025",
    fullTitle: "IEEE SL SYW Congress 2025",
    theme: "Innovation for Sustainability",
    venue: "Jie Jie Beach Hotel, Panadura",
    description:
      "The 14th edition of the Congress focused on exploring how technology-driven innovation can contribute to sustainable development and long-term societal progress. The three-day residential event brought together over 200 participants, including undergraduates from all 22 IEEE Student Branches in Sri Lanka.",
    highlight:
      "The program featured more than 20 speakers from various IEEE entities. Notably, recognized as the “Best Sectional Project” at the IEEE Sri Lanka Section Awards 2025.",
  },
  {
    year: "2024",
    fullTitle: "IEEE SL SYW Congress 2024",
    theme: "Revolutionizing the Digital Landscape",
    venue: "Hotel Sudu Araliya, Polonnaruwa",
    description:
      "The 13th edition was held in collaboration with multiple IEEE entities, including IEEE MTT-S, IEEE IAS, IEEE R10 SAC, and IEEE CS SYP Activities. The event brought together over 150 participants from diverse disciplines and focused on emerging trends shaping the digital and technological landscape.",
  },
  {
    year: "2023",
    fullTitle: "IEEE SL SYW Congress 2023",
    theme: "Dreams Conquer Boundaries",
    venue: "Carolina Beach Hotel, Chilaw",
    description:
      "The 12th edition welcomed over 200 participants and emphasized personal growth, leadership development, and cross-disciplinary collaboration. The event provided a platform for students and young professionals from diverse backgrounds to connect, learn, and share experiences.",
  },
];

export default function PastCongressPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030710]">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 w-full h-full z-10">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "radial-gradient(circle at 50% 25%, rgba(3, 10, 26, 0.85), transparent 70%), radial-gradient(circle at 72% 60%, rgba(10, 45, 119, 0.45), transparent 80%), linear-gradient(180deg, rgba(3, 6, 14, 1) 0%, rgba(4, 8, 18, 0.85) 45%, rgba(6, 10, 22, 0.2) 100%), linear-gradient(135deg, #030710 0%, #050914 100%)",
            transition: "opacity 0.3s linear",
          }}
        ></div>
        <div className="absolute inset-0 grid-pattern opacity-[0.3]"></div>
        <NeuralNetwork />
        <div className="absolute inset-0 light-rays opacity-50">
          <div className="ray ray-1"></div>
          <div className="ray ray-2"></div>
        </div>
      </div>

      <div className="relative z-20 container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Copy>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
                Legacy of
                <span className="block mt-2 bg-gradient-to-r from-[#ffcb40] via-[#fcf6ba] to-[#b4860b] bg-clip-text text-transparent animate-gradient-text">
                  Innovation
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300/80 font-light max-w-2xl mx-auto leading-relaxed">
                Tracing the evolution of the IEEE Sri Lanka Section Students, Young Professionals, and Women in Engineering Congress.
              </p>
            </motion.div>
          </Copy>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated Timeline Spine */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 md:translate-x-0 ml-4 md:ml-0">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2.5, ease: "linear" }}
              viewport={{ once: true }}
              className="w-full bg-gradient-to-b from-[#ffcb40] via-[#00b8b8] to-[#123a85]"
            ></motion.div>
          </div>

          <div className="space-y-16">
            {editions.map((edition, index) => (
              <motion.div
                key={edition.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dates/Marker */}
                <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 -translate-x-1/2 flex items-center justify-center z-10 ml-4 md:ml-0">
                  <div className="w-4 h-4 rounded-full bg-[#030710] border-2 border-[#ffcb40] shadow-[0_0_10px_rgba(255,203,64,0.5)]"></div>
                </div>

                {/* Content Side */}
                <div className="md:w-1/2 pl-12 md:pl-0">
                   <div className={`md:px-12 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                     {/* Mobile Year Badge (visible only on small screens) */}
                     <span className="inline-block md:hidden mb-2 px-3 py-1 rounded-full bg-[#ffcb40]/10 border border-[#ffcb40]/20 text-[#ffcb40] text-xs font-bold tracking-wider">
                        {edition.year}
                      </span>
                   </div>
                </div>
                
                 {/* Card */}
                <div className="md:w-1/2 pl-12 md:pl-0">
                  <div className={`md:px-12`}>
                     <div className="group relative bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#ffcb40]/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,203,64,0.1)] overflow-hidden">
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ffcb40]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10">
                           <div className="flex items-center justify-between mb-4">
                              <span className="hidden md:inline-block px-3 py-1 rounded-full bg-[#ffcb40]/10 border border-[#ffcb40]/20 text-[#ffcb40] text-xs font-bold tracking-wider">
                                {edition.year}
                              </span>
                              <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest">
                                <Award className="w-4 h-4" />
                                <span>Edition {14 - index}</span>
                              </div>
                           </div>
                           
                           <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-[#ffcb40] transition-colors duration-300">
                             {edition.theme}
                           </h3>
                           
                           <div className="flex flex-col gap-2 mb-6">
                              <div className="flex items-center gap-2 text-slate-400 text-sm">
                                <MapPin className="w-4 h-4 text-[#00b8b8]" />
                                <span>{edition.venue}</span>
                              </div>
                           </div>
                           
                           <p className="text-slate-300/90 text-sm leading-relaxed mb-6 font-light">
                             {edition.description}
                           </p>

                           {edition.highlight && (
                             <div className="bg-white/5 rounded-lg p-4 border-l-2 border-[#ffcb40]">
                               <p className="text-xs text-slate-400 italic">
                                 "{edition.highlight}"
                               </p>
                             </div>
                           )}
                        </div>
                     </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-28 text-center relative z-20">
          <a
            href="/#home"
            className="group inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 px-8 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium tracking-wide">Back to Home</span>
          </a>
        </div>
      </div>
    </div>
  );
}
