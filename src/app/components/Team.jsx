import React from "react";
import Copy from "./Copy/Copy";
import NeuralNetwork from "./NeuralNetwork";

const teamData = {
  chair: [
    {
      img: "Kavin Gunasekara.jpeg",
      post: "Chair",
      pillar: "",
      name: "Mr. Kavin Gunasekara",
      uni: "UOM",
    },
  ],
  viceChair: [
    {
      img: "Sasindu Abhayarathna.jpg",
      post: "Vice Chair ",
      pillar: "Program & Delivery",
      name: "Mr. Sasindu Abhayarathna",
      uni: "NSBM",
    },
    {
      img: "Amiru Munasinghe.jpg",
      post: "Vice Chair",
      pillar: " Finance & Partnerships",
      name: "Mr. Amiru Munasinghe",
      uni: "UOM",
    },
    {
      img: "Hasini Sarathchandra.jpeg",
      post: "Vice Chair ",
      pillar: "Public Visibility",
      name: "Ms. Hasini Sarathchandra",
      uni: "UWU",
    },
    {
      img: "Linaya Gunawardena.jpg",
      post: "Secretary",
      pillar: "",
      name: "Ms. Linaya Gunawardena",
      uni: "NSBM",
    },
  ],
  Team: [
    {
      img: "Ravishka Rathnayaka.jpeg",
      post: "Finance",
      name: "Mr. Ravishka Rathnayaka",
      uni: "SLTC",
    },
    {
      img: "Mudeera Andrahannadi.jpg",
      post: "Finance",
      name: "Mr. Mudeera Andrahannadi",
      uni: "UOR",
    },
    {
      img: "Omaya Nayagara.jpg",
      post: "Program & Delivery",
      name: "Ms. Omaya Nayagara",
      uni: "SLTC",
    },
    {
      img: "Nidula Sathsara.jpg",
      post: "Program & Delivery",
      name: "Mr. Nidula Sathsara",
      uni: "UOM",
    },
    {
      img: "Irudini Nawoda.jpg",
      post: "Secretarial",
      name: "Ms. Irudini Nawoda",
      uni: "UWU",
    },
    {
      img: "Senilka Thisangi.jpeg",
      post: "Secretarial",
      name: "Ms. Senilka Thisangi",
      uni: "UOM",
    },
    {
      img: "Hirusha suhan.jpg",
      post: "Public Visibility",
      name: "Mr. Hirusha suhan",
      uni: "UWU",
    },
    {
      img: "Narada chathuranga.jpg",
      post: "Public Visibility",
      name: "Mr. Narada chathuranga",
      uni: "UOR",
    },
    {
      img: "Manura Anuhas.jpg",
      post: "Public Visibility",
      name: "Mr. Manura Anuhas",
      uni: "SLTC",
    },
    {
      img: "Pasidu Chamod.jpeg",
      post: "Webmaster",
      name: "Mr. Pasidu Chamod",
      uni: "UOJ",
    },
  ],
};

function Team() {
  return (
    <div
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 w-full h-full z-0">
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
          className="absolute inset-0 w-full h-full team-gradient-fade"
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

      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#ffcb40]/10 via-[#b4860b]/5 to-[#030710]/20 blur-xl opacity-60"
          style={{ backgroundSize: "200% 200%" }}
        ></div>
      </div>
      <div className="container relative mt-[10rem] z-10 mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <Copy>
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 text-white drop-shadow-[0_2px_8px_rgba(255,203,64,0.3)]">
              Organizing Committee
            </h2>
          </Copy>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffcb40] to-[#b4860b] rounded-full shadow-lg"></div>
        </div>

        <div className="mb-16">
          {/* Blurred gradient overlay behind team grid */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-gradient-to-br from-[#ffcb40]/5 via-[#b4860b]/5 to-transparent blur-2xl rounded-3xl opacity-30 z-0" />
          {/* Chair Section */}
          <div className="hidden md:flex flex-col items-center gap-y-8 mb-16 relative z-10">
            <div className="flex justify-center items-center gap-8">
              {teamData.chair.map((item, index) => (
                <Chair
                  key={index}
                  img={item.img}
                  post={item.post}
                  name={item.name}
                  uni={item.uni}
                />
              ))}
            </div>
            <div className="flex justify-center items-center gap-8">
              {teamData.viceChair.map((item, index) => (
                <Chair
                  key={index}
                  img={item.img}
                  pillar={item.pillar}
                  post={item.post}
                  name={item.name}
                  uni={item.uni}
                />
              ))}
            </div>
            <div className="grid grid-cols-4 gap-8">
              {teamData.Team.slice(0, 4).map((item, index) => (
                <TeamMember
                  key={index}
                  img={item.img}
                  post={item.post}
                  name={item.name}
                  uni={item.uni}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-8">
              {teamData.Team.slice(4, 6).map((item, index) => (
                <TeamMember
                  key={index}
                  img={item.img}
                  post={item.post}
                  name={item.name}
                  uni={item.uni}
                />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-8">
              {teamData.Team.slice(6, 9).map((item, index) => (
                <TeamMember
                  key={index}
                  img={item.img}
                  post={item.post}
                  name={item.name}
                  uni={item.uni}
                />
              ))}
            </div>
            <div className="flex justify-center">
              <TeamMember
                img={teamData.Team[9].img}
                post={teamData.Team[9].post}
                name={teamData.Team[9].name}
                uni={teamData.Team[9].uni}
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-12 relative z-10">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ffcb40] to-[#fcf6ba] bg-clip-text text-transparent mb-6 text-center">
                Leadership
              </h3>
              <div className="flex justify-center">
                <div className="flex justify-center mb-8 max-w-sm">
                  {teamData.chair.map((item, index) => (
                    <Chair
                      key={index}
                      img={item.img}
                      post={item.post}
                      name={item.name}
                      uni={item.uni}
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-4 max-w-sm">
                  {teamData.viceChair.map((item, index) => (
                    <ViceChair
                      key={index}
                      img={item.img}
                      pillar={item.pillar}
                      post={item.post}
                      name={item.name}
                      uni={item.uni}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ffcb40] to-[#fcf6ba] bg-clip-text text-transparent mb-6 text-center">
                Team Members
              </h3>
              <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4 max-w-sm">
                  {teamData.Team.slice(0, 10).map((item, index) => (
                    <TeamMember
                      key={index}
                      img={item.img}
                      post={item.post}
                      name={item.name}
                      uni={item.uni}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chair({ img, post, name, uni, pillar }) {
  return (
    <div className="w-[180px] md:w-[220px] relative group">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[rgba(255,203,64,0.15)] to-[rgba(3,7,16,0.8)] p-[1px] shadow-xl group-hover:shadow-[#ffcb40]/20 transition-all duration-300">
        <div className="bg-[#030710]/90 backdrop-blur-xl rounded-2xl p-6 text-center border border-[rgba(255,203,64,0.1)] group-hover:border-[rgba(255,203,64,0.4)] transition-colors duration-300 h-full flex flex-col justify-between">
          <div>
            <div className="relative mb-4">
              <img
                src={`/team/${img}`}
                alt={name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto border-2 border-[rgba(255,203,64,0.3)] group-hover:border-[#ffcb40] transition-colors duration-300 shadow-lg"
              />
            </div>
            <h4 className="font-bold text-white text-sm md:text-base mb-1 drop-shadow-md">
              {name}
            </h4>
          </div>
          <div className="mt-2">
            <p className="font-semibold text-[#ffcb40] text-xs md:text-sm mb-1 uppercase tracking-wider">
              {post}
            </p>
            {pillar && (
              <p className="font-medium text-gray-300 text-xs mb-1">{pillar}</p>
            )}
            <p className="font-light text-gray-400 text-xs">{uni}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ViceChair({ img, pillar, post, name, uni }) {
  // Utilizing the same style as Chair for consistency in the logic, but structurally can remain distinct if layout demands it.
  // Converting to same premium styling.
  return (
    <div className="w-full max-w-sm mx-auto group">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[rgba(255,203,64,0.15)] to-[rgba(3,7,16,0.8)] p-[1px] shadow-xl group-hover:shadow-[#ffcb40]/20 transition-all duration-300">
        <div className="bg-[#030710]/90 backdrop-blur-xl rounded-xl p-6 border border-[rgba(255,203,64,0.1)] group-hover:border-[rgba(255,203,64,0.4)] transition-colors duration-300">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src={`/team/${img}`}
                alt={name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[rgba(255,203,64,0.3)] group-hover:border-[#ffcb40] transition-colors duration-300 shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-white text-sm mb-1 drop-shadow-md">
                {name}
              </h4>
              <p className="font-semibold text-[#ffcb40] text-xs mb-1 uppercase tracking-wider">
                {post}
              </p>
              <p className="font-medium text-gray-300 text-xs mb-1">{pillar}</p>
              <p className="font-light text-gray-400 text-xs">{uni}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamMember({ img, post, name, uni }) {
  return (
    <div className="w-[160px] md:w-[180px] group h-full">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[rgba(255,203,64,0.1)] to-[rgba(3,7,16,0.6)] p-[1px] shadow-lg group-hover:shadow-[#ffcb40]/15 transition-all duration-300 h-full">
        <div className="bg-[#030710]/80 backdrop-blur-xl rounded-xl p-4 text-center border border-[rgba(255,203,64,0.1)] group-hover:border-[rgba(255,203,64,0.3)] transition-colors duration-300 h-full flex flex-col justify-between">
          <div className="relative mb-3">
            <img
              src={`/team/${img}`}
              alt={name}
              className="w-16 h-16 md:w-18 md:h-18 rounded-full object-cover mx-auto border-2 border-[rgba(255,203,64,0.2)] group-hover:border-[#ffcb40] transition-colors duration-300 shadow"
            />
          </div>
          <div>
            <h4 className="font-semibold text-white text-xs md:text-sm mb-1">
              {name}
            </h4>
            <p className="font-medium text-[#ffcb40] text-xs mb-1 uppercase tracking-wider">{post}</p>
            <p className="font-extralight text-gray-400 text-xs">{uni}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
