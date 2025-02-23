import React, { useState } from 'react';

const teamMembers = [
  {
    name: "Santhasoruban",
    name2: "Niththilan",
    role: "Co-founder",
    linkedin: "https://www.linkedin.com/in/niththilan-santhasoruban-20391b247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: "/images/niththilan.jpg" // Add your image URL here
  },
  {
    name: "Ragulan",
    name2: "Keshan",
    role: "Co-founder",
    linkedin: "https://www.linkedin.com/in/ragulan-kopikeshan-ba24902b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    image: "/images/keshan.jpg" // Add your image URL here
  },
  {
    name: "Balendran",
    name2: "Harishith",
    role: "Co-founder",
    linkedin: "http://www.linkedin.com/in/balendran-harishith-560823292",
    image: "/images/harishith.jpg" // Add your image URL here
  },
  {
    name: "Ashvitha",
    name2:"Raveendran",
    role: "Co-founder",
    linkedin: "https://www.linkedin.com/in/ashvitha-ravindran-611819265/",
    image: "/images/ashvi.jpg" // Add your image URL here
  },
  {
    name: "Kamalanadhan",
    name2:  "Nishvaraj",
    role: "Co-founder",
    linkedin: "https://www.linkedin.com/in/nishvaraj-kamalananthan-35760b176?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    image: "/images/nishva (1).jpg" // Add your image URL here
  },
  {
    name: "Kavishani", 
    name2: "Yoganadhan",
    role: "Co-founder",
    linkedin: "https://www.linkedin.com/in/kavishani-yoganathan-27a938275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    image: "/images/kavi.jpg" // Add your image URL here
  }
];

const Team = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="bg-gray-50 py-16 px-4 overflow-x-auto">
      <div className="max-w-full mx-auto">
        <h2 className="text-4xl font-bold text-[#020d30] text-center mb-12">Meet Our Team</h2>
        <p className="text-lg text-center text-[#272728] max-w-3xl mx-auto mb-8">
        "Get to know the passionate individuals who are bringing Athlon to life. Each one bringing their unique expertise and vision to revolutionize 
        the way sports facilities are booked, making it simpler, faster, and more accessible for everyone."
          </p>
        <div className="flex justify-center gap-4 min-w-max px-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`
                bg-white rounded-xl shadow-lg
                w-48 h-96
                flex flex-col
                transform transition-all duration-300 ease-in-out
                hover:scale-105 hover:shadow-xl
                relative overflow-hidden
                ${hoveredCard === index ? 'ring-2 ring-[#020d30]' : ''}
              `}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative w-full h-3/4">
                <img
                  src={member.image} // Use the image URL from team member data
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    absolute top-4 right-4
                    w-10 h-10
                    bg-[#020d30] rounded-full
                    flex items-center justify-center
                    transition-all duration-300
                    ${hoveredCard === index ? 'animate-pulse' : 'opacity-75'}
                  `}
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
              </div>

              <div className="text-center p-4 bg-white mt-auto">
                <h3 className="text-[#020d30] text-1xl font-semibold mb-1">{member.name}</h3>
                <h3 className="text-[#020d30] text-1xl font-semibold mb-1">{member.name2}</h3>
                <p className="text-[#272728] font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;