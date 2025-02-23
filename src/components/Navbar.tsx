import React, { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar fixed top-0 left-0 w-full z-50  px-6 py-3  transition-all ${scrolled ? 'navbar-scrolled' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Athlon Logo" className="w-8 h-auto" />
          <span className="text-2xl font-bold text-[#ffffff]">Athlon</span>
        </a>

        {/* Desktop Navigation */}
        <div className="navbar-links hidden md:flex items-center space-x-8">
          <a href="/Features" className="navbar-link">Features</a>
          <a href="#pricing" className="navbar-link">Pricing</a>
          <a href="#about" className="navbar-link">About</a>
          <a href="#contact" className="navbar-link">Contact</a>
          <a href="https://www.instagram.com/athlon.app?igsh=aXZscTU1eG53cW9k" target="_blank" rel="noopener noreferrer" className="navbar-instagram">
            <Instagram />
          </a>
          <a href="#join" className="join-us-button">Join Us</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="container mx-auto py-4 px-4 bg-[#020d30] flex flex-col space-y-4">
          <a href="#features" className="navbar-link">Features</a>
          <a href="#pricing" className="navbar-link">Pricing</a>
          <a href="#about" className="navbar-link">About</a>
          <a href="#contact" className="navbar-link">Contact</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mobile-instagram">
            <Instagram className="inline" /> Follow us on Instagram
          </a>
          <a href="#join" className="mobile-join-us-button join-us-button">Join Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
