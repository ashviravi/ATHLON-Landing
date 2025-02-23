import React from 'react';
import { Target, Lightbulb, AlertCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About2 = () => {
  const sections = [
    {
      title: "Our Mission",
      icon: <Target className="w-12 h-12 text-[#020d30]" />,
      description: "To revolutionize sports facility booking in Sri Lanka by providing a seamless, tech-driven platform that enhances accessibility, improves operational efficiency, and fosters a vibrant sports community."
    },
    {
      title: "Our Vision",
      icon: <Lightbulb className="w-12 h-12 text-[#020d30]" />,
      description: "To become Sri Lanka’s go-to digital platform for sports, empowering players and facility owners with a hassle-free, AI-powered experience that promotes engagement, efficiency, and growth in the sports ecosystem."
    },
    {
      title: "Problem We Solve",
      icon: <AlertCircle className="w-12 h-12 text-[#020d30]" />,
      description: "Booking sports facilities in Sri Lanka is inefficient, causing delays, double bookings, revenue losses and poor communication, ultimately affecting user experience and engagement that leads to decline in sports community."
    },
    {
      title: "Our Solution",
      icon: <CheckCircle className="w-12 h-12 text-[#020d30]" />,
      description: "Athlon digitizes and streamlines the booking process with real-time availability, AI-powered recommendations, group booking options, and a management dashboard for venue owners, ensuring a hassle-free experience for all."
    }
  ];

  return (
    <div className="w-full px-4 py-8">
      <h3 className="text-4xl font-bold text-center mb-6 text-[#020d30]">What We Stand For</h3>
      <h1 className="text-2xl font-bold text-center mb-6 text-[#272728]">Revolutionizing Sports with Digital Solutions</h1>
      
      <div className="flex flex-row justify-between gap-6 overflow-x-auto px-4">
        {sections.map((section, index) => (
          <div 
            key={index} 
            className="flex-1 min-w-[250px] flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white border-2 border-[#020d30] h-[350px]"
          >
            <motion.div 
              className="mb-4"
              animate={{
                y: [0, -12, 0], // Continuous hopping effect
              }}
              transition={{
                duration: 1.0,  // Faster transition for continuous motion
                repeat: Infinity, // Repeat indefinitely
                repeatType: 'loop', // Loop the motion seamlessly
                ease: 'easeInOut', // Smooth easing effect
              }}
            >
              {section.icon}
            </motion.div>
            <div className="flex flex-col justify-between h-full">
              <h2 className="text-xl font-semibold mb-3 text-[#020d30]">{section.title}</h2>
              <p className="text-gray-600">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About2;
