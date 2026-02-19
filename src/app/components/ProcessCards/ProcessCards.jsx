"use client";
import "./ProcessCards.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "../Copy/Copy";

gsap.registerPlugin(ScrollTrigger);

const schedule1 = [
  { time: "12:30 PM - 1:30 PM", event: "Delegate Registration" },
  { time: "1:30 PM - 1:40 PM", event: "Ushering of Guests" },
  { time: "1:40 PM - 1:55 PM", event: "Commencement of the Opening Ceremony" },
  {
    time: "1:55 PM - 2:00 PM",
    event:
      '"Empowering Innovation for Sustainability: Welcome to Congress" by Uvindu Kodikara, Chair, IEEE SLSYWC 2026',
  },
  {
    time: "2:00 PM - 2:15 PM",
    event:
      '"From Vision to Reality: Milestones of IEEE in Sri Lanka - 2026" by Prof. S. Vasanthapriyan, Chair, IEEE Sri Lanka Section',
  },
  {
    time: "2:15 PM - 2:30 PM",
    event: "Inside Congress - An overview of Congress Protocols",
  },
  {
    time: "2:30 PM - 3:00 PM",
    event:
      'Keynote Speech on "Opportunity Pathways with IEEE" by Dr. Subodha Charles, Chair, MGA Student Activities Committee',
  },
  {
    time: "3:00 PM - 3:15 PM",
    event:
      'Keynote Speech on "The Role of Medical Technology in Shaping a Smarter Future" by Prof. Ruwan Gopura',
  },
  {
    time: "3:15 PM - 3:30 PM",
    event:
      'Keynote Speech on "Sustainable Intelligence: AI for People, Planet, and Prosperity" by Prof. Roshan Ragel',
  },
  {
    time: "3:30 PM - 4:00 PM",
    event:
      'Keynote Speech on "Tech-Driven Sustainability: Harnessing AI, IoT, and Clean Tech for a Greener Future" by Dr. Rajanikanth Aluvalu',
  },
  {
    time: "4:00 PM - 4:15 PM",
    event:
      'Keynote Speech on "Fueling the Next Generation of Tech Leaders: The Power of IEEE ComSoc Membership" by Mr. M Sai Prashanth',
  },
  {
    time: "4:15 PM - 5:00 PM",
    event:
      'Panel discussion on "Sustainable Innovation in the Global South: Challenges, Opportunities, and the Role of Young Engineers" - Panelists: Dr Syed Muzahir Abbas, Mr. M Sai Prashanth, Dr. Rajanikanth Aluvalu, Moderator: Mr. Javin Manatunge',
  },
  { time: "5:00 PM - 6:00 PM", event: "Room Allocation" },
  { time: "6:00 PM - 7:00 PM", event: "Getting ready for Handawa" },
  { time: "7:00 PM - 8:00 PM", event: "Dinner" },
  { time: "8:00 PM - 11:00 PM", event: "IEEE Handawa" },
];

const schedule2 = [
  { time: "7:00 AM - 8:45 AM", event: "Chapter Stalls" },
  { time: "8:00 AM - 8:45 AM", event: "Breakfast" },
  { time: "8:45 AM - 9:00 AM", event: "Opening Plenary" },
  {
    time: "9:00 AM - 10:00 AM",
    event: "Vision-Building Workshop by Mr. Heminda Jayaweera",
  },
  {
    time: "10:00 AM - 10:30 AM",
    event: "Keynote Speech by Mr. Hwa Chiang LEO",
  },
  {
    time: "10:30 AM - 11:30 AM",
    event: "Entrepreneurship Session(Panel Discussion)",
  },
  { time: "11:30 AM - 12:00 PM", event: "R10 YP Spotlight" },
  { time: "12:00 PM - 12:15 PM", event: "Group photo" },
  { time: "12:15 PM - 1:15 PM", event: "Lunch with leaders" },
  {
    time: "1:15 PM - 2:00 PM",
    event: "Panel Discussion with Senior IEEE members",
  },
  {
    time: "2:00 PM - 2:45 PM",
    event:
      'Keynote Speech on "Discover the World of Dielectrics with IEEE DEIS" by Mr. Ashok Narayan Tripathi',
  },
  { time: "2:45 PM - 4:15 PM", event: "Outbound training activities" },
  { time: "4:15 PM - 6:00 PM", event: "Preparation time for awards night" },
  { time: "6:00 PM - 7:30 PM", event: "Awards Night" },
  { time: "7:30 PM - 10:30 PM", event: "Dinner and DJ" },
];

const schedule3 = [
  { time: "8:00 AM - 8:45 AM", event: "Breakfast" },
  { time: "8:45 AM - 9:00 AM", event: "Opening Plenary" },
  {
    time: "9:00 AM - 10:00 AM",
    event:
      "IEEE IAS CMD Workshop by Mr. Janitha Dissanayake, Chair, IEEE IAS SL chapter",
  },
  {
    time: "10:00 AM - 10:45 AM",
    event:
      'Panel discussion on "Hardware is Hard - But Worth It: Developing a Full Electronics Industrial eco system in Sri Lanka" from CASS and IES',
  },
  {
    time: "10:45 AM - 11:00 AM",
    event: "Commencement of the Closing Ceremony",
  },
  { time: "11:00 AM - 11:15 AM", event: "Prize giving" },
  {
    time: "11:15 AM - 12:00 PM",
    event:
      '"Congress diaries, Beauty of hapIEEE Volunteering" by Mr. Manodya Nabadawewa, Chair, IEEE SLSAC',
  },
  {
    time: "12:00 PM - 12:10 PM",
    event:
      '"Congress 2026: A journey to remember & What\'s next" by Ms. Sanjana Attanayake, Secretary, IEEE SLSYWC 2026',
  },
  { time: "12:10 PM - 12:25 PM", event: "Group photo" },
];

const processCardsData = [
  {
    index: "01",
    title: "26th Sep 2026",
    image: "/hero/1.jpeg",
    schedule: schedule1,
  },
  {
    index: "02",
    title: "27th Sep 2026",
    image: "/hero/2.jpeg",
    schedule: schedule2,
  },
  {
    index: "03",
    title: "28th Sep 2026",
    image: "/hero/3.jpeg",
    schedule: schedule3,
  },
];

const ProcessCards = () => {
  useGSAP(() => {
    const processCards = document.querySelectorAll(".process-card");
    processCards.forEach((card, index) => {
      if (index < processCards.length - 1) {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: processCards[processCards.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
          id: `card-pin-${index}`,
        });
      }
      if (index < processCards.length - 1) {
        ScrollTrigger.create({
          trigger: processCards[index + 1],
          start: "top bottom",
          end: "top top",
          onUpdate: (self) => {
            const progress = self.progress;
            const scale = 1 - progress * 0.25;
            const rotation = (index % 2 === 0 ? 5 : -5) * progress;
            const afterOpacity = progress;
            gsap.set(card, {
              scale: scale,
              rotation: rotation,
              "--after-opacity": afterOpacity,
            });
          },
        });
      }
    });
  }, []);

  return (
    <div
      className="process-cards flex flex-col items-center gap-12 py-16 min-h-screen"
      style={{
        background:
          "radial-gradient(ellipse at 60% 40%, #1a2a6c 0%, #0a0f1c 80%), linear-gradient(120deg, #0a0f1c 0%, #004cf1 100%)",
      }}
    >
      <div className="process-mobile-heading text-center">
        <Copy>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Event Schedule
          </h2>
        </Copy>
        <div className="w-24 h-1 bg-gradient-to-r from-[#004CF1] to-[#00ECEC] rounded-full mx-auto mt-6"></div>
      </div>
      {processCardsData.map((cardData, index) => {
        const isEven = index % 2 === 1;
        return (
          <div
            key={index}
            className="process-card w-full bg-white rounded-none md:rounded-2xl shadow-xl flex flex-col md:flex-row items-stretch p-4 md:p-12 relative overflow-hidden border-b border-gray-200 min-h-screen md:min-h-0"
          >
            {/* Animated Gradient Background (from Hero/About/Theme/Location) */}
            <div className="absolute inset-0 w-full h-full -z-10">
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
                className="absolute inset-0 w-full h-full process-gradient-fade"
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

            {/* Two-column alternating layout */}
            {isEven ? (
              <>
                {/* Text Left */}
                <div className="flex flex-col justify-start items-center w-full md:w-1/2 p-4 md:p-8 z-10 h-full">
                  <div className="w-full text-center mb-4">
                    <h2 className="text-2xl font-bold tracking-tight text-white mb-1">
                      {cardData.title}
                    </h2>
                    <span className="text-xs font-semibold text-[#00ecec] bg-[#004cf1] px-3 py-1 rounded-full uppercase tracking-widest">{`Day ${
                      index + 1
                    }`}</span>
                  </div>
                  <div className="w-full max-w-4xl mx-auto flex-1 overflow-y-auto max-h-[70vh] md:max-h-none">
                    <ul className="divide-y divide-[#00ecec33]">
                      {cardData.schedule.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center py-3 px-2 gap-4 hover:bg-[#004cf122] transition"
                        >
                          <span className="text-sm flex-1 font-mono text-[#00ecec] md:min-w-[80px] text-right font-semibold">
                            {item.time}
                          </span>
                          <span className="text-base flex-1 text-white font-medium">
                            {item.event}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Image Right */}
                <div className="process-card-img w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 z-10">
                  <img
                    src={cardData.image}
                    alt=""
                    className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-[#00ecec33] bg-white max-h-[500px]"
                    style={{ minHeight: "300px" }}
                  />
                </div>
              </>
            ) : (
              <>
                {/* Image Left */}
                <div className="process-card-img w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 z-10">
                  <img
                    src={cardData.image}
                    alt=""
                    className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-[#00ecec33] bg-white max-h-[500px]"
                    style={{ minHeight: "300px" }}
                  />
                </div>
                {/* Text Right */}
                <div className="flex flex-col justify-start items-center w-full md:w-1/2 p-4 md:p-8 z-10 h-full">
                  <div className="w-full text-center mb-4">
                    <h2 className="text-2xl font-bold tracking-tight text-white mb-1">
                      {cardData.title}
                    </h2>
                    <span className="text-xs font-semibold text-[#00ecec] bg-[#004cf1] px-3 py-1 rounded-full uppercase tracking-widest">{`Day ${
                      index + 1
                    }`}</span>
                  </div>
                  <div className="w-full max-w-4xl mx-auto flex-1 overflow-y-auto max-h-[70vh] md:max-h-none">
                    <ul className="divide-y divide-[#00ecec33]">
                      {cardData.schedule.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center py-3 px-2 gap-4 hover:bg-[#004cf122] transition"
                        >
                          <span className="text-sm font-mono text-[#00ecec] flex-1 md:min-w-[80px] text-right font-semibold">
                            {item.time}
                          </span>
                          <span className="text-base flex-1 text-white font-medium">
                            {item.event}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
      <style jsx>{`
        @media (min-width: 1001px) {
          .process-mobile-heading {
            display: none !important;
          }
        }
        @media (max-width: 1000px) {
          .process-mobile-heading {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProcessCards;
