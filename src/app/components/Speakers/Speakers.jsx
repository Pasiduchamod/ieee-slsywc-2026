"use client";
import Copy from "../Copy/Copy";
import "./Speakers.css";

// Real data grouped by category
const speakersData = [
  {
    id: 1,
    name: "Mr. Waruna Sri Dhanapala",
    occupation: "Acting Secretary of the Ministry of Digital Economy",
    image: "/speakers3/1.png",
  },
  {
    id: 2,
    name: "Prof. S. Vasanthapriyan",
    occupation: "Chair, IEEE Sri Lanka Section",
    image: "/speakers3/3.png",
  },
  {
    id: 3,
    name: "Dr. Subodha Charles",
    occupation: "Chair, IEEE MGA Student Activities Committee",
    image: "/speakers3/2.png",
  },
  {
    id: 4,
    name: "Senior Prof. Ruwan Gopura",
    occupation: "Senior Member, IEEE",
    image: "/speakers3/4.png",
  },
  {
    id: 5,
    name: "Prof. Roshan Ragel",
    occupation: "Senior Member, IEEE",
    image: "/speakers3/5.png",
  },
  {
    id: 6,
    name: "Dr. Rajanikanth Aluvalu",
    occupation:
      "Director, Symbiosis Institute of Technology - Hyderabad | Symbiosis International University, India",
    image: "/speakers3/6.png",
  },
  {
    id: 7,
    name: "Mr. M Sai Prashanth",
    occupation: "Chair, Student Activities, IEEE ComSoc Member Services Board",
    image: "/speakers3/7.png",
  },
  {
    id: 8,
    name: "Dr. Syed Muzahir Abbas",
    occupation:
      "Macquarie University, Australia; MTT-S YP Region 10 Coordinator",
    image: "/speakers3/8.png",
  },
  {
    id: 9,
    name: "Mr. Dhammika Marasinghe",
    occupation: "Chair, Awards and Recognition Committee, IEEE SL Section",
    image: "/speakers3/9.png",
  },
  {
    id: 10,
    name: "Mr. Heminda Jayaweera",
    occupation: "Executive Director, Trace Sri Lanka",
    image: "/speakers3/10.png",
  },
  {
    id: 11,
    name: "Mr. Hwa Chiang LEO",
    occupation: "Director, Singapore Operations at IEEE",
    image: "/speakers3/11.png",
  },
  {
    id: 12,
    name: "Dr. Aishwarya Bandla",
    occupation: "Chair, IEEE Region 10 Young Professionals",
    image: "/speakers3/12.png",
  },
  {
    id: 13,
    name: "Mr. Ashok Narayan Tripathi",
    occupation:
      "India and Southeast Asia Representative | IEEE DEIS YP Committee",
    image: "/speakers3/13.png",
  },
  {
    id: 14,
    name: "Mr. Janitha Dissanayake",
    occupation: "Chair, IEEE IAS SL Chapter",
    image: "/speakers3/14.png",
  },
  {
    id: 15,
    name: "Mr. Manodya Nabadawewa",
    occupation: "Chair, Student Activities Committee, IEEE SL Section",
    image: "/speakers3/15.png",
  },
  {
    id: 16,
    name: "Mr. Heshan Mallawarachchi",
    occupation: "Chair, IEEE Young Professionals Sri Lanka",
    image: "/speakers3/16.png",
  },
  {
    id: 17,
    name: "Mr. Uvindu Kodikara",
    occupation: "Chair, IEEE SLSYW Congress 2026",
    image: "/speakers3/17.png",
  },
  {
    id: 18,
    name: "Ms. Amirah Shaza Rasmin",
    occupation:
      "Vice-Chair (Awards and Recognition), Student Activities Committee",
    image: "/speakers3/19.png",
  },
  {
    id: 19,
    name: "Ms. Sanjana Attanayake",
    occupation: "Secretary, IEEE SLSYW Congress 2026",
    image: "/speakers3/18.png",
  },
];

const emceesAndModerators = [
  {
    id: 1,
    name: "Javin Manatunge",
    occupation:
      "Treasurer, MTT-S Student Branch Chapter, University of Moratuwa",
    image: "/speakers3/M1.png",
  },
  {
    id: 2,
    name: "Linaya Gunawardena",
    occupation: "Member, IEEE SLSYW Congress 2026",
    image: "/speakers3/M2.png",
  },
  {
    id: 3,
    name: "Themiya Nanayakkara",
    occupation: "Coordinator, Student Activities Committee",
    image: "/speakers3/M3.png",
  },
];

const Card = ({ person, index }) => {
  return (
    <div
      className={`speaker-card speaker-card-${index + 1}`}
      style={{ "--delay": `${index * 0.1}s` }}
    >
      <div className="speaker-card-inner">
        <div className="speaker-glow"></div>
        <div className="speaker-image-container">
          <div className="speaker-image-wrapper">
            {person.image ? (
              <img
                className="object-cover object-center"
                src={person.image}
                alt={person.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            ) : (
              <div className="speaker-image-placeholder">
                <div className="speaker-initials">
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>
            )}
            <div className="speaker-image-border"></div>
          </div>
          <div className="speaker-overlay">
            <div className="speaker-overlay-content">
              <div className="speaker-overlay-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h4 className="speaker-name-overlay">{person.name}</h4>
              <p className="speaker-occupation-overlay">{person.occupation}</p>
            </div>
          </div>
        </div>
        <div className="speaker-info">
          <div className="speaker-info-content">
            <h3 className="speaker-name">{person.name}</h3>
            <p className="speaker-occupation">{person.occupation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Speakers = () => {
  return (
    <div className="speakers-section">
      {/* Animated Background Elements */}
      <div className="speakers-bg-elements">
        <div className="floating-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
          <div className="orb orb-4"></div>
        </div>
        <div className="geometric-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="light-rays">
          <div className="ray ray-1"></div>
          <div className="ray ray-2"></div>
        </div>
      </div>

      <div className="speakers-container">
        {/* Header */}
        <div className="text-center mb-16">
          <Copy>
            <h2 className="speakers-title">
              <span className="title-line-1">Meet Our</span>
              <span className="title-line-2">Distinguished</span>
              <span className="title-line-3">Speakers</span>
            </h2>
            <p className="speakers-subtitle">
              Industry leaders and innovators sharing their expertise and
              insights
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-[#004CF1] to-[#00ECEC] rounded-full mx-auto mt-6"></div>
          </Copy>
        </div>

        {/* Speakers Section */}
        <div className="section-title">
          <h3>Speakers</h3>
        </div>
        <div className="speakers-grid">
          {speakersData.map((person, index) => (
            <Card key={`speaker-${person.id}`} person={person} index={index} />
          ))}
        </div>

        {/* Emcees and Moderators Section */}
        <div className="section-title">
          <h3>Emcees and Moderators</h3>
        </div>
        <div className="speakers-grid">
          {emceesAndModerators.map((person, index) => (
            <Card key={`emcee-${person.id}`} person={person} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
