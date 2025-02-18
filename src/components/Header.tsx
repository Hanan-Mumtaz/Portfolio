import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import he from '/assets/bg5.png'; // Adjust path accordingly

export default function Header() {
  const menuItems = ['About', 'Projects', 'Skills', 'Contact'];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm text-white shadow-lg overflow-hidden" // Added backdrop blur for modern look
    >
      {/* Smog Effect */}
      <motion.div
        initial={{ y: '100%', x: '-50%', opacity: 0 }}
        animate={{ y: '-50%', x: '50%', opacity: 0.5 }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          repeatType: 'mirror', 
          ease: 'linear' 
        }}
        className="absolute bottom-0 left-0 w-[200%] h-[200%] bg-gradient-to-r from-white/50 via-white/20 to-white/10 blur-2xl"
        style={{ zIndex: 0 }} // Ensure smog is behind the content
      />

      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center relative z-10">
        {/* Logo and Brand */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center"
        >
          {/* Logo */}
          <img src={he} alt="Logo" className="h-8 w-8 -mr-1" />

          {/* Brand Text */}
          <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
            ectoris
          </span>
        </motion.div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex gap-6 lg:gap-8">
          {menuItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-gray-300 hover:text-purple-400 transition-colors font-medium text-sm lg:text-base"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Social Icons */}
        <motion.div 
          className="flex gap-4"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a 
            href="https://github.com/Hanan-Mumtaz" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-purple-400 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 md:w-6 md:h-6" /> {/* Responsive icon size */}
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/hanan-mumtaz" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-purple-400 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6" /> {/* Responsive icon size */}
          </motion.a>
          <motion.a 
            href="mailto:hananmumtaz55@gmail.com" 
            className="text-gray-300 hover:text-purple-400 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5 md:w-6 md:h-6" /> {/* Responsive icon size */}
          </motion.a>
        </motion.div>
      </div>
    </motion.header>
  );
}