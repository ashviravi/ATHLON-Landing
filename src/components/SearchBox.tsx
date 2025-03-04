import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin } from "lucide-react";

const SearchBox: React.FC = () => {
  const [isComingSoon, setIsComingSoon] = useState(false);

  // Toggle text every 2 seconds with smooth animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsComingSoon((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="bg-[#323645] backdrop-blur-lg p-6 rounded-2xl w-[620px] h-[525px] border border-white/20 shadow-lg"
      style={{
        marginLeft: "80px",
        marginTop: "-50px",
      }}
      animate={{
        y: [0, 5, 0],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <h3 className="text-2xl font-semibold mb-4">Find Your Sports Facility</h3>
      <div className="space-y-3">
        {/* Sport Selection */}
        <select className="w-full p-2 bg-white/15 border border-white/10 rounded-lg focus:outline-none focus:border-[#adb4cc]">
          <option value="">Select Sport</option>
          <option value="basketball">Basketball</option>
          <option value="tennis">Tennis</option>
          <option value="soccer">Soccer</option>
        </select>

        {/* Location Input with Icon */}
        <div className="relative">
          <input
            type="text"
            name="location"
            value="Enter Location"
            className="w-full pr-10 p-2 bg-white/15 border border-white/10 rounded-lg focus:outline-none focus:border-white"
          />
          <MapPin className="absolute right-3 top-3 w-5 h-5 text-white" />
        </div>

        {/* Date Input */}
        <input
          type="date"
          className="w-full p-2 bg-white/15 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500"
        />

        {/* Animated Button */}
        <motion.button
          className="w-full h-14 p-3 bg-gradient-to-r from-[#020d30] to-[#1b1d21] rounded-lg font-semibold text-lg relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isComingSoon ? "comingSoon" : "search"}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center w-full h-full"
            >
              {isComingSoon ? "Coming Soon!" : "Search Availability"}
            </motion.span>
          </AnimatePresence>
        </motion.button>

        {/* Popular Places List */}
        <div className="border border-gray-200 rounded-xl p-3">
          <h4 className="font-medium text-white mb-2">Popular near you</h4>
          <div className="space-y-2">
            {[
              {
                name: "Central Park Tennis Courts",
                distance: "0.8 mi",
                rating: 4.8,
              },
              {
                name: "Downtown Basketball Center",
                distance: "1.2 mi",
                rating: 4.6,
              },
            ].map((venue, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-between p-2 rounded-lg transition-colors duration-300"
                style={{ backgroundColor: "#c9c9cb" }} // ✅ Default background color
                whileHover={{
                  backgroundColor: "rgba(243, 244, 246, 1)", // ✅ Same as bg-gray-50
                  x: 5,
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                <div>
                  <h5 className="font-medium text-gray-900">{venue.name}</h5>
                  <p className="text-sm text-gray-500">{venue.distance} away</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-sm font-medium text-gray-900">
                      {venue.rating}
                    </span>
                  </div>
                  <motion.span
                    className="text-xs font-medium text-gray-600"
                    animate={{
                      opacity: [0, 1, 0],
                      transition: { duration: 1.5, repeat: Infinity },
                    }}
                  >
                    Coming Soon!
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchBox;
