import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Comingsoon from '../components/Comingsoon';
import AnimatedSection from '../components/AnimatedSection';
import HoverCard from '../components/HoverCard';
import Team from '../components/Team';
import About from '../components/About';
import About2 from '../components/About2';
import Instagram from '../components/Instagram';
import Subscription from '../components/Subscription';



const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <About2 />
      <Instagram />
      <Subscription />
      <Team />
      <Comingsoon/>
      
      
    </>
  );
};



export default Home;
export {};