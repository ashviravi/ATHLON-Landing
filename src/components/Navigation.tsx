import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Sun, Moon } from 'lucide-react';

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const Navigation = ({ darkMode, setDarkMode }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSection, setVisibleSection] = useState('');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // This is a placeholder for section detection logic
      // In the full implementation, you would check visibility of section refs
      const sections = ['features', 'pricing', 'testimonials', 'faq'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setVisibleSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      {/* Navbar */}
      <motion.header 
        className={`fixed w-full z-50 transition-all duration-300 top-0 left-0 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className={`flex justify-between items-center ${isScrolled ? 'py-2' : 'py-4'}`}>
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                
                <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>ATHLON</span>
              </a>
              <nav className="hidden md:flex ml-10">
                <ul className="flex space-x-8">
                  {[
                    { name: 'Features', section: 'features' },
                    { name: 'Pricing', section: 'pricing' },
                    { name: 'Testimonials', section: 'testimonials' },
                    { name: 'FAQ', section: 'faq' }
                  ].map((item) => (
                    <li key={item.name}>
                      <a 
                        href={`#${item.section}`} 
                        className={`font-medium transition-colors duration-300 ${
                          visibleSection === item.section 
                            ? 'text-[#020d30]' 
                            : isScrolled ? 'text-gray-700 hover:text-[#020d30]' : 'text-white hover:text-indigo-200'
                        }`}
                      >
                        {item.name}
                        {visibleSection === item.section && (
                          <motion.div 
                            className="h-0.5 bg-[#020d30] mt-1"
                            layoutId="navIndicator"
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#login" className={`font-medium ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-[#020d30] transition-colors duration-300`}>Log in</a>
              <motion.a 
                href="#signup" 
                className="bg-[#020d30] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#020d30] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign up free
              </motion.a>
              
            </div>
            <motion.button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? 
                <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} /> : 
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              }
            </motion.button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="py-2 px-4">
                {['Features', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
                  <motion.li 
                    key={item} 
                    className="py-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="block font-medium text-gray-800 hover:text-[#020d30] transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
                <motion.li 
                  className="py-2 mt-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <a href="#login" className="block font-medium text-gray-800 hover:text-[#020d30] transition-colors duration-300">Log in</a>
                </motion.li>
                <motion.li 
                  className="py-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  <a href="#signup" className="block bg-[#020d30] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#020d30] transition-colors duration-300 text-center">Sign up free</a>
                </motion.li>
               
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};