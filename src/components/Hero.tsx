import React from 'react';
import HoverCard from './HoverCard';
import AnimatedSection from './AnimatedSection';
import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src="/bgvideo.mp4"
      ></video>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-20">
        <AnimatedText text="Your Personal AI Fitness Coach" className="text-5xl md:text-7xl font-bold text-white mb-6" />
        <AnimatedSection>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Transform your fitness journey with personalized AI-powered workouts, nutrition plans, and real-time feedback.
          </p>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex justify-center gap-4">
            <HoverCard>
              <a href="#download" className="px-8 py-3 bg-gradient-sport text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started Free
              </a>
            </HoverCard>
            <HoverCard>
              <a href="#learn-more" className="px-8 py-3 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </a>
            </HoverCard>
          </div>
        </AnimatedSection>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

export {};