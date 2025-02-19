import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Sparkles, Zap } from 'lucide-react';
import profileImage from '/assets/profile-D6iLI1Rc.jpg'; // Adjust path accordingly

export default function Hero() {
  const floatingIcons = [
    { Icon: Code, x: '10%', y: '20%', delay: 0 },
    { Icon: Sparkles, x: '85%', y: '15%', delay: 0.2 },
    { Icon: Zap, x: '75%', y: '75%', delay: 0.4 }
  ];

  return (
    <section className="py-0 bg-black text-white">
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, x, y, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-purple-500/30"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: [1, 1.2, 1],
            y: ["0%", "-20%", "0%"]
          }}
          transition={{
            delay,
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Icon className="w-8 h-8 md:w-10 md:h-10" /> {/* Responsive icon size */}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto mt-6 md:mt-4 px-4 md:px-14 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 px-4 md:px-12 relative text-center md:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm{' '}
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                Hanan Mumtaz
              </motion.span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              A passionate full-stack developer crafting{' '}
              <motion.span
                className="text-purple-400 font-semibold"
                animate={{ 
                  color: ['#a855f7', '#9333ea', '#a855f7'],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                beautiful
              </motion.span>{' '}
              and{' '}
              <motion.span
                className="text-purple-600 font-semibold"
                animate={{ 
                  color: ['#9333ea', '#a855f7', '#9333ea'],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                functional
              </motion.span>{' '}
              web experiences
            </motion.p>

            {/* Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a 
                href="#projects" 
                className="w-full sm:w-auto text-center bg-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base group relative bg-purple-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full overflow-hidden z-10 pointer-events-auto text-sm md:text-base"

                                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative">View My Work</span>
              </motion.a>
              <motion.a  
                href="#contact" 
                className="group relative border-2 border-purple-600 text-purple-400 px-6 py-3 md:px-8 md:py-4 rounded-full overflow-hidden z-10 pointer-events-auto text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative">Contact Me</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side: Profile Image (Hidden on small screens) */}
          <motion.div
            className="hidden md:block flex-1 relative mt-7 md:mt-0" // Hidden on small screens
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative w-full aspect-square max-w-xs md:max-w-md mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl -rotate-6"
                animate={{
                  rotate: ['-7deg', '7deg', '-7deg'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-700 to-purple-500 rounded-3xl rotate-6 opacity-50"
                animate={{
                  rotate: ['7deg', '-7deg', '7deg'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Arrow Down */}
      <motion.div
        className="absolute bottom-100 md:bottom-10 left-1/2 md:left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut"
        }}
      >
        <ArrowDown className="text-purple-500 w-6 h-6 md:w-8 md:h-8" />
      </motion.div>

      {/* Wavy Animated Line Separator */}
      <div className="relative w-full h-24 md:h-32 -mt-0 -mb-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 320"
          className="absolute top-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4f46e5">
                <animate
                  attributeName="stop-color"
                  values="rgb(33, 16, 50); #9333EA;rgb(67, 28, 104); #9333EA"
                  dur="30s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#9333ea">
                <animate
                  attributeName="stop-color"
                  values=" #9333EA;rgb(67, 28, 104);#9333EA;rgb(33, 16, 50)"
                  dur="30s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
          <motion.path
            initial={{ pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: 1,
              repeatDelay: 0,
            }}
            fill="url(#waveGradient)"
            strokeWidth="6"
            stroke="url(#waveGradient)"
            filter="url(#glow)"
            d="M0,160 C480,100 960,220 1440,160"
          />
        </svg>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </div>
    </section>
  );
}