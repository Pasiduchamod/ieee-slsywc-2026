"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { MapPin, Calendar, Award, ChevronRight } from "lucide-react";
import Copy from "../components/Copy/Copy";
import NeuralNetwork from "../components/NeuralNetwork";

const editions = [
  {
    year: "2025",
    fullTitle: "IEEE SLSYW Congress 2025",
    theme: "Innovation for Sustainability",
    venue: "Jie Jie Beach Hotel, Panadura",
    description:
      "The 14th edition of the Congress focused on exploring how technology-driven innovation can contribute to sustainable development and long-term societal progress. The three-day residential event brought together over 200 participants, including undergraduates from all 22 IEEE Student Branches in Sri Lanka.",
    highlight:
      "The program featured more than 20 speakers from various IEEE entities. Notably, recognized as the “Best Sectional Project” at the IEEE Sri Lanka Section Awards 2025.",
    image: "/previous logos/2025.JPG.jpeg",
    textGradient: "bg-gradient-to-r from-[#00c6ff] to-[#0072ff]",
  },
  {
    year: "2024",
    fullTitle: "IEEE SLSYW Congress 2024",
    theme: "Revolutionizing the Digital Landscape",
    venue: "Hotel Sudu Araliya, Polonnaruwa",
    description:
      "The 13th edition was held in collaboration with multiple IEEE entities, including IEEE MTT-S, IEEE IAS, IEEE R10 SAC, and IEEE CS SYP Activities. The event brought together over 150 participants from diverse disciplines and focused on emerging trends shaping the digital and technological landscape.",
    image: "/previous logos/2024.jpeg",
    textGradient: "bg-gradient-to-r from-[#ff0080] via-[#ff0000] to-[#800080]",
  },
  {
    year: "2023",
    fullTitle: "IEEE SLSYW Congress 2023",
    theme: "Dreams Conquer Boundaries",
    venue: "Carolina Beach Hotel, Chilaw",
    description:
      "The 12th edition welcomed over 200 participants and emphasized personal growth, leadership development, and cross-disciplinary collaboration. The event provided a platform for students and young professionals from diverse backgrounds to connect, learn, and share experiences.",
    image: "/previous logos/2023.jpeg",
    textGradient: "bg-gradient-to-r from-[#00b09b] to-[#96c93d]",
  },
  {
    year: "2022",
    fullTitle: "IEEE SLSYW Congress 2022",
    theme: "Rebuild for Resilience",
    venue: "Citrus Waskaduwa, Kalutara",
    description:
      "The 11th edition of the event marked the first physically installation of the congress since the pandemic in 2020. Held in collaboration with the IEEE Computer Society (CS) SYP Global Congress and IEEE BOOST 2022, the event witnessed the participation of over 250 delegates representing 21 universities alongside foreign delegates and 22+ globally recognized speakers. Over the course of three days the tech community came to life, fostering a community striving to navigate the future challenges of engineering and technology.",
    image: "/previous logos/2022.jpeg",
    textGradient: "bg-gradient-to-r from-[#FF512F] to-[#DD2476]",
  },
  {
    year: "2021",
    fullTitle: "IEEE SLSYW Congress 2021",
    theme: "Resilience in Rebuilding",
    venue: "Virtual Event",
    description:
      "The year marked the 10th anniversary of the congress, commemorating a decade of excellence and empowering the engineering community in Sri Lanka. The event was held virtually amidst the Covid-19 pandemic, re-energizing the section’s volunteer spirit.",
    image: "/previous logos/2021.jpeg",
    textGradient: "bg-gradient-to-r from-[#2193b0] to-[#6dd5ed]",
  },
  {
    year: "2020",
    fullTitle: "IEEE SLSYW Congress 2020",
    theme: "Rebuilding with Resilience",
    venue: "Virtual Event",
    description:
      "The 9th edition of the congress was a landmark virtual event, conducted successfully despite the ongoing global crisis. The focus was on inspiring delegates to explore new opportunities in a post-pandemic environment and the global shift in technology. Out of an enthusiastic pool of applicants, 400 aspiring delegates were selected to participate in enlightening sessions led by local and international experts.",
    image: "/previous logos/2020.jpeg",
    textGradient: "bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]",
  },
  {
    year: "2019",
    fullTitle: "IEEE SLSYW Congress 2019",
    theme: "Disruptive Innovation for a Green Future",
    venue: "Wayamba University of Sri Lanka",
    description:
      "The 8th consecutive edition of the congress was concluded successfully, with memorable experiences around the vision of a green future, and encompassing creativity and professional growth. With over 300 delegates from 19 student branches including international participants, the year’s event was conducted bolder than ever, introducing new, inspiring interactive sessions to the agenda.",
    image: "/previous logos/2019.jpeg",
    textGradient: "bg-gradient-to-r from-[#11998e] to-[#38ef7d]",
  },
  {
    year: "2018",
    fullTitle: "IEEE SLSYW Congress 2018",
    theme: "Augmenting into Digital Dimension",
    venue: "Sri Lanka Technological Campus, Padukka",
    description:
      "The 7th edition of this landmark event shed light on the importance of becoming engineers that are technically, socially and economically responsible for the advancement of society. The congress witnessed over 250 delegates from across the island, and 15+ distinguished speakers from around the world, creating an environment rich with networking opportunities and inspiration.",
    image: "/previous logos/2018.jpeg",
    textGradient: "bg-gradient-to-r from-[#ec008c] to-[#fc6767]",
  },
  {
    year: "2017",
    fullTitle: "IEEE SLSYW Congress 2017",
    theme: "Vision Beyond Technology",
    venue: "Sabaragamuwa University",
    description:
      "The 6th installment of the congress was held in December 2017, hosting over 150 delegates from across the island. It brought together student members, young professionals, and the WIE members for enlightening sessions on empowerment and leadership. The event served as a platform for participants to share their achievements, gain public recognition, and inspire the next generation of IEEE volunteers.",
    image: "/previous logos/2017.jpeg",
    textGradient: "bg-gradient-to-r from-[#4AC29A] to-[#BDFFF3]",
  },
  {
    year: "2016",
    fullTitle: "IEEE SLSYW Congress 2016",
    theme: "Expanding Horizons",
    venue: "Wayamba University of Sri Lanka",
    description:
      "The 6th IEEE SLSYW Congress took place from 25th to 27th November 2016. The Congress provided leadership and professional development sessions, workshops, panel discussions and networking opportunities for student members, young professionals and WIE volunteers. Activities included a lecture on “Powering Sri Lanka in the Upcoming Decade”, the charity initiative “Make Them Smile” and recognition of students and teams for global and regional competition achievements, reinforcing technical skills, social responsibility and collaboration among participants.",
    image: "/previous logos/2016.jpeg",
    textGradient: "bg-gradient-to-r from-[#FDC830] to-[#F37335]",
  },
  {
    year: "2015",
    fullTitle: "IEEE Region 10 SYW Congress 2015",
    theme: "Today’s Youth for a Better Tomorrow",
    venue: "Hotel Galadari, Colombo",
    description:
      "The 2015 IEEE Region 10 SYW Congress,was hosted by the Sri Lanka Section from 9th–12th July 2015. This flagship Asia-Pacific event brought together students, young professionals, and WIE members from over 15 countries. Delegates participated in parallel tracks, workshops, panel discussions, technical sessions, and cultural networking activities, promoting leadership, professional development, and regional collaboration among IEEE members.",
    image: "/previous logos/2015.jpeg",
    textGradient: "bg-gradient-to-r from-[#f12711] to-[#f5af19]",
  },
  {
    year: "2014",
    fullTitle: "IEEE SLSYW Congress 2014",
    theme: "Innovation and Leadership",
    venue: "University of Colombo School of Computing",
    description:
      "The third annual IEEE SLSYW Congress was held on 30th November 2014. The Congress featured keynote speeches, interactive workshops, and panel discussions for students, young professionals, and WIE members. Approximately 300 delegates participated, engaging in technical learning, leadership development, and cross-disciplinary networking across Sri Lanka.",
    image: "/previous logos/2014.jpeg",
    textGradient: "bg-gradient-to-r from-[#1A2980] to-[#26D0CE]",
  },
  {
    year: "2013",
    fullTitle: "IEEE SLSYW Congress 2013",
    theme: "Growth and Collaboration",
    venue: "Sri Lanka",
    description:
      "The 2013 IEEE SLSYW Congress, continued the momentum of the inaugural Congress by providing Sri Lanka’s student members, young professionals and WIE volunteers with leadership development, technical knowledge sharing and networking opportunities. With the theme of “Growth and Collaboration”, the event strengthened collaboration among student branches and encouraged active participation in IEEE programs throughout the country.",
    image: "/previous logos/2013.jpeg",
    textGradient: "bg-gradient-to-r from-[#0052D4] to-[#65C7F7]",
  },
  {
    year: "2012",
    fullTitle: "IEEE SLSYW Congress 2012",
    theme: "Inaugural Congress",
    venue: "Sri Lanka",
    description:
      "The inaugural IEEE SLSYW Congress took place in 2012, establishing the annual flagship event for students, young professionals, and WIE volunteers. The Congress focused on leadership development, professional skills and raising awareness of IEEE programs in Sri Lanka. Workshops, panel discussions and cross-university networking opportunities were held, with hundreds of student and young professional members participating from across the country.",
    textGradient: "bg-gradient-to-r from-[#ffcb40] via-[#fcf6ba] to-[#b4860b]",
  },
  {
    year: "2011",
    fullTitle: "IEEE Region 10 SYW Congress 2011",
    theme: "Emerging Technologies",
    venue: "Auckland, New Zealand",
    description:
      "The 2011 IEEE Region 10 (Asia Pacific) Student, Young Professionals and Women-in-Engineering (SYW) Congress was a regional flagship event brought together students, young professionals, and WIE volunteers from across Asia-Pacific, including Sri Lankan delegates, for leadership and professional development sessions, technical talks on emerging technologies, and networking opportunities. Hundreds of participants attended, strengthening collaboration across sections.",
    textGradient: "bg-gradient-to-r from-[#ffcb40] via-[#fcf6ba] to-[#b4860b]",
  },
];

export default function PastCongressPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030710]">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 w-full h-full z-10">
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

        <div className="relative max-w-5xl mx-auto" ref={containerRef}>
          {/* Animated Timeline Spine */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 md:translate-x-0 ml-4 md:ml-0 overflow-hidden">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-[#ffcb40] via-[#00b8b8] to-[#123a85]"
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
                           
                           {/* Logo Section */}
                           {edition.image && (
                             <div className="mb-6 w-full bg-white rounded-lg p-4 flex items-center justify-center">
                               <img 
                                 src={edition.image} 
                                 alt={`${edition.year} Logo`} 
                                 className="max-h-24 w-auto object-contain"
                               />
                             </div>
                           )}

                           <h3 
                             className={`text-2xl font-bold mb-2 leading-tight ${
                               edition.textGradient 
                                 ? `bg-clip-text text-transparent ${edition.textGradient}`
                                 : "text-white group-hover:text-[#ffcb40] transition-colors duration-300"
                             }`}
                           >
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
