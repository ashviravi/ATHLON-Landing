import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, Brain, Search, Filter, ArrowRight, X } from 'lucide-react';

// Define the fade in up variants for animations
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Feature Section Component
const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  
  // Features data
  const features = [
    {
      icon: Calendar,
      title: "Real-Time Booking",
      description: "Check availability and book courts instantly with our real-time booking system."
    },
    {
      icon: MapPin,
      title: "Multi-Location Support",
      description: "Find and book courts across multiple locations with interactive maps."
    },
    {
      icon: Users,
      title: "Group Booking",
      description: "Easily organize group sessions with integrated cost splitting."
    },
    {
      icon: Brain,
      title: "AI Recommendations",
      description: "Get personalized suggestions based on your preferences and booking history."
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Find the perfect court with our AI-powered natural language search."
    },
    {
      icon: Filter,
      title: "Dynamic Filtering",
      description: "Sort and filter facilities based on your specific requirements."
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-[#020d30] to-navy-900 relative">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute right-0 top-0 h-1/2 w-1/3 text-white/5 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,0 100,0 100,100" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Why Choose Athlon?</h2>
          <p className="text-xl text-navy-200 max-w-7xl"> Athlon combines cutting-edge technology with user-friendly features to transform your sports facility
            experience. Elevate Your Sports Facility Experience with Us.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="relative overflow-hidden group">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 h-[280px] hover:-translate-y-2 hover:bg-white/10 transition-all duration-300">
                <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full mb-6 inline-block hover:scale-110 transition-transform duration-300 group-hover:rotate-180 transform">
                  <feature.icon className="w-8 h-8 text-blue-400 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-navy-200">{feature.description}</p>
                
                {/* Learn More Button */}
                <motion.button 
                  onClick={() => setActiveFeature(feature.title)}
                  className="mt-4 inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </motion.button>

                {/* Decorative element - static */}
                <div className="absolute bottom-0 right-0 h-16 w-16 bg-gradient-to-tr from-blue-500/0 to-purple-500/10 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Feature detail modals */}
      {features.map((feature) => (
        <FeatureDetail
          key={feature.title}
          title={feature.title}
          description={feature.description}
          isOpen={activeFeature === feature.title}
          onClose={() => setActiveFeature(null)}
          icon={feature.icon}
        />
      ))}
    </section>
  );
};

// Feature Detail Component
const FeatureDetail = ({
  title,
  description,
  isOpen,
  onClose,
  icon: Icon
}) => {
  const detailedDescriptions = {
    'Real-Time Booking': 'Our real-time availability system connects directly with facility management software to provide up-to-the-minute information on court and field availability. You\'ll never have to call around to check if a venue is open again. The system updates every 30 seconds and shows you exactly when spaces are available, for how long, and at what cost. You can filter by time of day, duration, and even specific amenities like lighting or equipment.',
    'Multi-Location Support': 'Our advanced location services use GPS and mapping technology to find facilities near you with pinpoint accuracy. The system considers traffic patterns and travel time to recommend venues that are truly convenient. You can set a radius for your search, save favorite locations, and even get directions directly from the app. The feature also highlights facilities along your commute or near other places you frequently visit.',
    'Group Booking': 'The group booking system allows coaches, team captains, and event organizers to reserve multiple slots or facilities simultaneously. You can invite team members via email or SMS, track RSVPs, and even split payments among participants. The system also provides tools for recurring bookings, making it easy to schedule regular practice sessions or league games throughout a season.',
    'AI Recommendations': 'The AI-powered scheduling system learns from your booking history and preferences to suggest optimal times and venues. It analyzes factors like facility popularity, weather forecasts, and even your personal calendar to recommend slots that work best for you. The system can also suggest alternative times during off-peak hours for discounted rates, or alert you when a preferred venue has a last-minute cancellation.',
    'Smart Search': 'Our intelligent search engine understands natural language queries, allowing you to find exactly what you need without complicated filters. Simply type requests like "indoor basketball court with showers near downtown on Saturday evening" and get precisely matching results. The system continuously learns from user behavior to improve search relevance and accuracy.',
    'Dynamic Filtering': 'Our comprehensive filtering system allows you to narrow down options based on over 50 different parameters including price, amenities, surface type, availability, and special features. Filters can be combined and saved as presets for quick access. The system highlights popular filter combinations based on current trends and seasonal activities.'
  };

  const extendedDescription = detailedDescriptions[title] || description;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-xl p-6 max-w-2xl w-full shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Icon className="w-6 h-6 text-[#020d30]" />
                </div>
                <h3 className="text-2xl font-bold">{title}</h3>
              </div>
              <motion.button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                {extendedDescription}
              </p>
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-bold text-[#020d30] mb-2">Key Benefits</h4>
                <ul className="list-disc pl-5 space-y-1 text-[#020d30]">
                  <li>Save time with streamlined booking process</li>
                  <li>Eliminate scheduling conflicts and double-bookings</li>
                  <li>Access exclusive discounts and promotions</li>
                  <li>Receive instant confirmations and reminders</li>
                </ul>
              </div>
              
              <div className="mt-6">
                <motion.button
                  className="bg-[#020d30] text-white px-6 py-2 rounded-lg font-medium hover:[#020d30] transition-colors duration-300 w-full"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onClose}
                >
                  Got it
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FeaturesSection;
