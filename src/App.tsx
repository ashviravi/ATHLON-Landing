<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
      </Routes>
    </Router>
=======
import React, { useState, useEffect, useRef } from 'react';
import { FaLaptop, FaMobileAlt, FaLock, FaHeadset } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, CheckCircle, Users, Brain, ArrowRight, Download, UserPlus, MapPinned, CreditCard, Star, ChevronDown, Smartphone, Award, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { AISearch } from './components/AISearch';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import Team  from './components/Team';
import { PricingPlan } from './components/PricingPlan';
import SearchBox from './components/SearchBox';
import FeaturesSection from './components/FeaturesSection';

function App() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [visibleSection, setVisibleSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRefs = useRef<{ faq: HTMLDivElement | null }>({ faq: null })

  


  
  // Testimonial auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Interactive 3D Maps",
      description: "Explore facilities in stunning 3D detail. Virtual tours and interactive maps help you choose the perfect court for your needs.",
      image: "/images/3d.jpg",
      icon: MapPin
    },
    {
      title: "Smart Recommendation Engine",
      description: "Our AI-powered system learns your preferences and suggests the best facilities based on your playing style and history.",
      image: "/images/ai.png",
      icon: Brain
    },
    {
      title: "In-App Messaging",
      description: "Coordinate with friends, teammates, or facility managers directly through our built-in messaging system.",
      image: "/images/inapp.png",
      icon: Users
    }
  ];

  useEffect(() => {
    // Using a longer interval to reduce frequent re-renders
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 8000);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Reduce scroll event processing by using requestAnimationFrame
      if (!window.requestedScrollFrame) {
        window.requestedScrollFrame = true;
        window.requestAnimationFrame(() => {
          // Track visible section for animations - but with fewer checks
          const sections = document.querySelectorAll('section[id]');
          sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollTop >= sectionTop - 300 && scrollTop < sectionTop + sectionHeight - 200) {
              setVisibleSection(section.getAttribute('id'));
            }
          });
          window.requestedScrollFrame = false;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [features.length]);

  const howItWorksSteps = [
    {
      icon: Download,
      title: "Download the App",
      description: "Get started by downloading the SportSpot app from the App Store or Google Play."
    },
    {
      icon: UserPlus,
      title: "Create an Account",
      description: "Sign up with your email or social media accounts to get full access to all features."
    },
    {
      icon: MapPinned,
      title: "Find a Facility",
      description: "Browse through our extensive selection of sports facilities and filter by location, type, or availability."
    },
    {
      icon: CreditCard,
      title: "Book and Pay",
      description: "Select your desired time slot, make the payment securely, and you're all set to play!"
    }
  ];


  // Feature data at the top of App.tsx
const featureData = [
  { icon: FaLaptop, title: "User-Friendly", text: "Seamless and intuitive design for easy navigation." },
  { icon: FaMobileAlt, title: "Multi-Platform", text: "Access from various devices, anytime, anywhere." },
  { icon: FaLock, title: "Secure Payments", text: "Safe, encrypted transactions with multiple options." },
  { icon: FaHeadset, title: "24/7 Support", text: "Dedicated support team available around the clock." }
];

  // Testimonials data
  const testimonials = [
    {
      name: 'Sudharshan Paramasivam',
      role: 'USER',
      image: '/images/sudha.png',
      quote: "I’d love a feature where I can split the cost with my teammates directly through a payment link. It would save us so much hassle!",
    },
    {
      name: 'Amrithaa kanapathy',
      role: 'USER',
      image: '/images/amri.png',
      quote: "Having options like hourly rentals, daily passes, and monthly subscriptions would really help cater to different user needs. It's a game-changer!",
    },
    {
      name: 'Thrishna Paskaran',
      role: 'USER',
      image: '/images/Thrish.png',
      quote: "It would be amazing if we could book corporate events through the app. It would make organizing team activities so much easier.",
    },
  ];



 
  const pricingPlans = [
    {
      name: 'Basic',
      price: "Free",
      features: [

        "Real-time court availability checking",
        'Basic booking management',
        'Cash payments on-site',
        'Up to 5 bookings per month',
        'Access to all locations',
      ],
    },
    {
      name: 'Pro',
      price: 79,
      features: [
        'All Basic features included',
        'AI-powered personalized recommendations',
        'Interactive 3D facility maps',
        'Group booking & cost splittings',
        'Dynamic pricing benefits',

      ],
      recommended: true,
    },
    {
      name: 'Enterprise',
      price: "Custom",
      features: [
        "All Premium features included",
       "Custom facility branding",
        "Advanced analytics dashboard",
      "Dedicated support team",
      "Bulk booking discounts",
      ],
    },
  ];

  // Gallery Images (Replace with your actual image URLs)
const galleryImages = [
  '/images/contact.png',
  '/images/contact.png',
  '/images/contact.png',
  '/images/contact.png',
];


 

  

    // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const slideIn = {
    hidden: { x: 30, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 }, // Reduced y distance
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4 // Shorter duration
      }
    }
  };

  return (
      <div className="min-h-screen bg-navy-900 text-white">
        {/* Simplified Navigation with fewer animations */}
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}
        >
          <Navigation isScrolled={isScrolled} setShowMobileMenu={setShowMobileMenu} />
        </header>

        {/* Mobile Menu with simplified animation */}
        <AnimatePresence>
          {showMobileMenu && (
              <motion.div
                  className="fixed inset-0 z-40 bg-navy-900/95 backdrop-blur-lg pt-20"
                  initial={{ opacity: 0, x: '50%' }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: '50%' }}
                  transition={{ duration: 0.3 }} // Faster transition
              >
                {/* Mobile navigation content */}
                <div className="container mx-auto px-6 py-10 flex flex-col space-y-6">
                  {['features', 'how-it-works', 'about', 'pricing', 'team'].map((item) => (
                      <a
                          key={item}
                          href={`#${item}`}
                          className="text-2xl font-semibold border-b border-white/10 pb-4 capitalize hover:translate-x-2 transition-transform duration-200"
                          onClick={() => setShowMobileMenu(false)}
                      >
                        {item.replace('-', ' ')}
                      </a>
                  ))}
                  <button
                      className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-xl mt-6 hover:scale-105 transition-transform duration-200"
                      onClick={() => setShowMobileMenu(false)}
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section with SearchBox on the right */}
        <section className="min-h-screen pt-32 pb-20 px-6 flex items-center relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url("/images/bg4.jpg")' }}>
  {/* Static background elements */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
    <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-teal-500/10 rounded-full filter blur-3xl"></div>
  </div>

          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-left max-w-2xl lg:w-1/2"
              >
                <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-sm font-medium mb-6">
                  #1 Sports Facility Booking Platform
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white to-[#b0b2b8] text-transparent bg-clip-text">
                  Seamless Sports Complex Booking
                </span> at Your Fingertips!
                </h1>

                <p className="text-xl text-[#b0b2b8]0 mb-10">
                  Book your favorite sports facilities instantly, manage your reservations, and connect with other sports enthusiasts all in one powerful app.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                      className="bg-gradient-to-r from-[#04164f] to-[#111c44] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Book Now <ArrowRight className="w-5 h-5" />
                  </button>

                  <button
                      className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Smartphone className="w-5 h-5" /> Download App
                  </button>
                </div>

                {/* Simplified testimonial preview */}
                
              </motion.div>

              {/* SearchBox Component on the right side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:w-1/2 w-full max-w-md mx-auto lg:mx-0 relative z-10 mt-12 lg:mt-0" 
              >
                <div className="relative">
                  <SearchBox />
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full opacity-30 blur-2xl z-0 hidden md:block"></div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full opacity-30 blur-2xl z-0 hidden md:block"></div>
                </div>
              </motion.div>
            </div>

            {/* Simple static scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              
              <ChevronDown className="w-10 h-10 text-white" />
            </div>
          </div>
        </section>


        

        

                {/* Features Grid - simplified */}
                <section >
                  <FeaturesSection />
        </section>


        <section id="about" className="py-24 px-6 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* About Description on Left */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">
                About <span className="bg-gradient-to-r from-white to-[#b0b2b8] text-transparent bg-clip-text">Athlon</span>
              </h2>
              <p className="text-lg text-navy-200 mb-8 max-w-xl text-justify">
                Athlon is transforming the sports facility booking experience. With a focus on seamless booking, real-time availability, and smarter facility management, we aim to make sports more accessible and efficient for both users and owners.
              </p>
              <p className="text-lg text-navy-200 mb-10 max-w-xl text-justify">
                Whether you're booking a tennis court, gym, or any multi-purpose facility, Athlon ensures the process is fast, easy, and reliable. Experience the future of sports facility management today.
              </p>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300">
                Learn More About Us
              </button>
            </div>

            {/* Feature Cards on Right */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[{ icon: FaLaptop, title: "User-Friendly", text: "Seamless and intuitive design for easy navigation." },
                { icon: FaMobileAlt, title: "Multi-Platform", text: "Access from various devices, anytime, anywhere." },
                { icon: FaLock, title: "Secure Payments", text: "Safe, encrypted transactions with multiple options." },
                { icon: FaHeadset, title: "24/7 Support", text: "Dedicated support team available around the clock." }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#cfd1d9] backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
                >
                  <motion.div
                    className="bg-[#020d30] p-3 rounded-full mb-4"
                    whileHover={{ rotate: 360 }} // Rotates on hover
                    transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth animation
                  >
                    {React.createElement(feature.icon, { className: 'text-3xl text-white' })}
                  </motion.div>
                  <h4 className="text-xl font-bold text-[#020d30]">{feature.title}</h4>
                  <p className="text-sm text-center max-w-[200px] mx-auto text-[#272728]">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* How It Works Section - simplified */}
        <section id="how-it-works" className="py-24 px-6 bg-gradient-to-b from-[#020d30] to-navy-900 relative">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <svg className="absolute right-0 top-0 h-full w-1/3 text-white/5 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 100,0 50,100" />
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
              <h2 className="text-4xl font-bold mb-6">How It Works</h2>
              <p className="text-xl text-navy-200">Get started with SportSpot in four simple steps and transform your sports facility booking experience forever.</p>
            </motion.div>

            <div className="relative">
              {/* Connecting line for desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-[#000618] transform -translate-y-1/2 rounded-full" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {howItWorksSteps.map((step, index) => (
                    <div
                        key={index}
                        className="relative z-10"
                    >
                      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 flex flex-col items-center text-center h-full border border-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-300">
                        <div className="relative mb-6">
                          <div className="absolute inset-0 bg-white-500/20 rounded-full blur-xl" />
                          <div className="relative z-10 bg-gradient-to-br from-blue-500 to-[#000618] p-4 rounded-full mb-4">
                            <step.icon className="w-8 h-8" />
                          </div>
                        </div>
                        <span className="text-sm font-medium text-blue-400 mb-2">Step {index + 1}</span>
                        <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                        <p className="text-navy-200">{step.description}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <button className="bg-gradient-to-r from-[#04164f] to-[#111c44]  px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300">
                Get Started Now
              </button>
            </div>
          </div>
        </section>


        

       


{/* AI Search Section */}
<section className="py-24 px-6 relative bg-gradient-to-br from-gray-900 to-gray-800">
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
  </div>

  <div className="container mx-auto max-w-4xl text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Heading and Subheading */}
      <h2 className="text-4xl font-bold text-white mb-4">
        Find Your Perfect Sports Experience
      </h2>
      <p className="text-lg text-gray-300 mb-8">
        Let AI help you discover the best sports facilities, events, and more.
      </p>

      {/* AI Search Bar */}
      <AISearch />
    </motion.div>
  </div>
</section>


     
{/* App Showcase Section */}
<section className="py-20 bg-gradient-to-r from-[#020d30] to-navy-900 text-[#e6e8ef]">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Content - Motion Animations Removed */}
      <div>
        <h2
          className="text-xl md:text-5xl font-bold mb-6 leading-tight"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Enjoy Effortless Sports Booking with{' '}
          <span className="text-indigo-300">Athlon</span>
        </h2>
        <p
          className="text-xl mb-8 max-w-xl text-[#bebec0]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Take Athlon with you wherever you go. Our mobile app makes it easy to find and book sports facilities on the move.
        </p>
        <ul className="space-y-4 mb-8">
          {[
            'Instant notifications for booking confirmations',
            'Location-based search for nearby facilities',
            'Manage all your bookings in one place',
            'Share bookings with teammates or friends',
          ].map((feature, i) => (
            <li
              key={i}
              className="flex items-start"
            >
              <CheckCircle className="w-6 h-6 text-indigo-300 mr-3 flex-shrink-0" />
              <span className="text-lg">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#app-store"
            className="bg-gray-900  text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-300 inline-flex items-center justify-center"
          >
            <span className="mr-2">Download on the</span>
            <span className="font-bold">App Store</span>
          </a>
          <a
            href="#play-store"
            className="bg-gray-900  text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-300 inline-flex items-center justify-center"
          >
            <span className="mr-2">Get it on</span>
            <span className="font-bold">Google Play</span>
          </a>
        </div>
      </div>

      {/* Right Content - Image Carousel with Increased Height and Side Floating Boxes */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-lg mx-auto" // Keeping the max-width
      >
        {/* Left Floating Box - Positioned lower with hover effect */}
        <div 
          className="absolute top-2/3 -left-8 transform -translate-y-1/2 bg-white/10 backdrop-blur-lg p-3 rounded-lg shadow-lg z-10 transition-all duration-300 hover:bg-white/20 hover:scale-110 cursor-pointer"
        >
          <p className="text-sm text-white whitespace-nowrap">Explore More Features</p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="rounded-lg overflow-hidden shadow-2xl"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover" // Increased height from h-64 to h-96
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Floating Box - With hover effect */}
        <div 
          className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white/10 backdrop-blur-lg p-3 rounded-lg shadow-lg z-10 transition-all duration-300 hover:bg-white/20 hover:scale-110 cursor-pointer"
        >
          <p className="text-sm text-white whitespace-nowrap">Seamless Booking Experience</p>
        </div>
      </motion.div>
    </div>
  </div>
</section>



  
        {/* Interactive Features Slider - simplified */}
        <section className="py-24 px-6 bg-navy-800/50 relative">
          <div className="container mx-auto">
            <motion.div
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Discover More Features</h2>
              <p className="text-xl text-navy-200">Explore the innovative features that make SportSpot the premier sports facility booking platform.</p>
            </motion.div>

            <div className="relative rounded-2xl overflow-hidden">
              <div className="h-[600px] relative">
                {/* Simplified slider without AnimatePresence for better performance */}
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                            currentFeature === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                      <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-transparent flex flex-col justify-end p-8">
                        <div>
                          <div className="inline-block p-3 rounded-full bg-white/10 backdrop-blur-md mb-4">
                            <feature.icon className="w-8 h-8 text-blue-400" />
                          </div>
                          <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                          <p className="text-navy-200 max-w-xl text-lg">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                ))}
              </div>

              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                {features.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentFeature(index)}
                        className={`w-12 h-2 rounded-full transition-all duration-300 ${
                            currentFeature === index ? 'bg-blue-500 w-16' : 'bg-white/30'
                        }`}
                    />
                ))}
              </div>
            </div>
          </div>
        </section>


                {/* Pricing Section - simplified */}
                <section id="pricing" className="py-24 px-6 bg-navy-800/50 relative">
          <div className="absolute inset-0 overflow-hidden">
            <svg className="absolute left-0 top-0 h-1/2 w-1/3 text-white/5 transform -translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 0,100 100,0" />
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
              <h2 className="text-4xl font-bold mb-6">Choose Your Perfect Plan</h2>
              <p className="text-xl text-navy-200">Flexible pricing options designed to meet your sports facility booking needs.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                  <div
                      key={index}
                      className="hover:-translate-y-3 transition-transform duration-300"
                  >
                    <PricingPlan {...plan} />
                  </div>
              ))}
            </div>
          </div>
        </section>


                 {/* Testimonials Section - simplified */}
                 <section id="testimonials" className="py-20 from-[#020d30] to-navy-900 relative">
  <div className="container mx-auto px-4">
    <motion.div 
      className="text-center max-w-3xl mx-auto mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4"
        variants={fadeIn}
      >
        What Our Users Prefer
      </motion.h2>
      <motion.p 
        className="text-xl text-gray-600"
        variants={fadeIn}
      >
       Thousands of athletes and teams are eager to rely on Athlon for their sports facility bookings, anticipating its innovative features to simplify their booking experience.
      </motion.p>
    </motion.div>
    
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#020d30] text-white px-6 py-2 rounded-full font-medium"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Testimonials
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTestimonial}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img 
              src={testimonials[activeTestimonial].image} 
              alt={testimonials[activeTestimonial].name} 
              className="w-20 h-20 rounded-full object-cover mb-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.p 
              className="text-xl md:text-2xl text-gray-800 mb-6 italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              "{testimonials[activeTestimonial].quote}"
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h4 className="text-[#020d30] font-bold text-lg">{testimonials[activeTestimonial].name}</h4>
              <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <motion.button 
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-[#020d30]' : 'bg-gray-300'}`}
              aria-label={`View testimonial ${index + 1}`}
              whileHover={{ scale: 1.5 }}
              animate={activeTestimonial === index ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</section>



        {/* FAQ Section */}
        <section
        id="faq"
        ref={(el) => (sectionRefs.current.faq = el)}
        className="py-20 bg-[#020d30]"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-4">
  <h2 className="text-4xl text-white "> Frequently Asked Questions</h2>
</motion.h2>

            <p className="text-xl text-gray-600 ">
              Find answers to common questions about Athlon.
           </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How does Athlon work?",
                  answer:
                    "Athlon connects athletes and teams with sports facilities. Simply search for your preferred sport, location, and time, and we will show you available options. You can book instantly and receive immediate confirmation.",
                },
                {
                  question: "Can I cancel or reschedule a booking?",
                  answer:
                    "Yes, you can cancel or reschedule bookings through your account. Each facility has its own cancellation policy, which is clearly displayed before you book.",
                },
                {
                  question: "Is there a mobile app available?",
                  answer:
                    "Yes, Athlon is available on both iOS and Android. The mobile app allows you to search, book, and manage your reservations on the go.",
                },
                {
                  question: "How do I pay for bookings?",
                  answer:
                    "Athlon accepts all major credit cards and digital payment methods. Your payment information is securely stored for easy booking.",
                },
                {
                  question: "Can I book for a team or group?",
                  answer:
                    "Absolutely! Athlon is designed for both individual athletes and teams. You can specify the number of people during the booking process.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-[#e5e6e7] rounded-xl p-6 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <h3 className=" text-[#020d30] text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <motion.a
                href="#support"
                className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                Contact our support team <ArrowRight className="ml-1 w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

       {/* Team Section - simplified */}
       <section id="team" className="py-24 px-6 relative">
        
         
         
        <Team />
       </section>




        {/* Footer */}
        <Footer />
      </div>
>>>>>>> 1b9e315 (complete changes)
  );
}

export default App;