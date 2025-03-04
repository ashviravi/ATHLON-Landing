import { Instagram, Linkedin, Mail, Phone, Calendar, Twitter,Facebook,  } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <Calendar className="w-8 h-8 text-indigo-400" />
            <span className="ml-2 text-2xl font-bold">Athlon</span>
          </div>
          <p className="text-gray-400 mb-6 max-w-md">
            Athlon is the leading platform for booking sports facilities, connecting athletes and teams with venues across the country.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: <Twitter className="w-6 h-6" />, href: "#twitter" },
              { icon: <Facebook className="w-6 h-6" />, href: "#facebook" },
              { icon: <Instagram className="w-6 h-6" />, href: "https://www.instagram.com/athlon.app?igsh=aXZscTU1eG53cW9k" },
              { icon: <Linkedin className="w-6 h-6" />, href: "#linkedin" },
            ].map((social, i) => (
              <motion.a 
                key={i}
                href={social.href} 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        {[
          { 
            title: "Product", 
            links: ['Features', 'Pricing', 'Testimonials', 'FAQ', 'Blog'] 
          },
          { 
            title: "Company", 
            links: ['About Us', 'Careers', 'Press', 'Partners', 'Contact'] 
          },
          { 
            title: "Legal", 
            links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'GDPR'] 
          }
        ].map((column, colIndex) => (
          <motion.div
            key={colIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * colIndex, duration: 0.5 }}
          >
            <h3 className="text-lg font-bold mb-4">{column.title}</h3>
            <ul className="space-y-2">
              {column.links.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i + 0.2 * colIndex, duration: 0.3 }}
                >
                  <motion.a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p className="text-gray-500 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Athlon. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <motion.a 
            href="#email" 
            className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
            whileHover={{ y: -3 }}
          >
            <Mail className="w-5 h-5 mr-2" />
            <span>support@athlon.com</span>
          </motion.a>
          <motion.a 
            href="#phone" 
            className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
            whileHover={{ y: -3 }}
          >
            <Phone className="w-5 h-5 mr-2" />
            <span>+1 (555) 123-4567</span>
          </motion.a>
        </div>
      </motion.div>
    </div>
  </footer>
  );
};