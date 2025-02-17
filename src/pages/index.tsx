import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AnimatedSection from '../components/AnimatedSection';
import HoverCard from '../components/HoverCard';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <CTASection />
    </>
  );
};

// CTA Section component
const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-sport relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Fitness Journey?</h2>
          <HoverCard>
            <a href="#download" className="inline-block px-8 py-3 bg-white text-dark font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Download Now
            </a>
          </HoverCard>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Home;
export {};