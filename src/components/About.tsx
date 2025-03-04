import React from 'react';
import { FaLaptop, FaMobileAlt, FaLock, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-10">
      <div className="container mx-auto px-24">
        <div className="grid md:grid-cols-2 gap-4">
          {/* About Description on Left */}
          <div className="flex flex-col items-start justify-center">
            <h2 className="text-4xl font-bold mb-4 text-[#020d30]">About Athlon</h2>
            <p className="text-lg mb-5 text-[#272728] max-w-xl text-justify">
              Athlon is transforming the sports facility booking experience. With a focus on seamless booking, real-time availability, and smarter facility management, we aim to make sports more accessible and efficient for both users and owners.
            </p>
            <p className="text-lg mb-5 text-[#272728] max-w-xl text-justify">
              Whether you're booking a tennis court, gym, or any multi-purpose facility, Athlon ensures the process is fast, easy, and reliable. Experience the future of sports facility management today.
            </p>
          </div>

          {/* Four Feature Cards on Right */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: FaLaptop, title: "User-Friendly", text: "Seamless and intuitive design for easy navigation." },
              { icon: FaMobileAlt, title: "Multi-Platform", text: "Access from various devices, anytime, anywhere." },
              { icon: FaLock, title: "Secure Payments", text: "Safe, encrypted transactions with multiple options." },
              { icon: FaHeadset, title: "24/7 Support", text: "Dedicated support team available around the clock." },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-3 flex flex-col items-center justify-between min-h-[150px] transition duration-300 transform hover:shadow-2xl"
              >
                <motion.div
                  className="bg-[#020d30] p-3 rounded-full mb-1"
                  whileHover={{ rotate: 360 }} // Rotates on hover
                  transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth animation
                >
                  {/* Dynamically create the icon */}
                  {React.createElement(feature.icon as React.ComponentType<any>, { className: 'text-3xl text-white' })}
                </motion.div>
                <h4 className="text-md font-bold text-[#020d30]">{feature.title}</h4>
                <p className="text-sm text-center max-w-[200px] mx-auto text-[#272728]">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

