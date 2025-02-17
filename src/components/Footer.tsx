import React from 'react';
import AnimatedSection from './AnimatedSection';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <AnimatedSection>
            <div>
              <h3 className="text-xl font-bold mb-4">Athlon</h3>
              <p className="text-gray-400">Your AI-powered fitness companion for a healthier lifestyle.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-accent transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-accent transition-colors">Pricing</a></li>
                <li><a href="#download" className="text-gray-400 hover:text-accent transition-colors">Download</a></li>
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-accent transition-colors">About</a></li>
                <li><a href="#careers" className="text-gray-400 hover:text-accent transition-colors">Careers</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#privacy" className="text-gray-400 hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="text-gray-400 hover:text-accent transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
        <div className="border-t border-dark-light mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Athlon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;