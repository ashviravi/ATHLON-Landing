import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

const HoverCard: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        y: -5,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

export default HoverCard;