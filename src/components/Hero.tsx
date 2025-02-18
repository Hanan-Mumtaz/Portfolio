import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Sparkles, Zap } from 'lucide-react';
import profileImage from '../../dist/assets/profile.jpg'; // Adjust path accordingly

<motion.div className="relative rounded-2xl overflow-hidden shadow-2xl">
  <img
    src={profileImage}
    alt="Profile"
    className="w-full h-full object-cover"
  />
</motion.div>


export default function Hero() {
  const floatingIcons = [
    { Icon: Code, x: '10%', y: '20%', delay: 0 },
    { Icon: Sparkles, x: '85%', y: '15%', delay: 0.2 },
    { Icon: Zap, x: '75%', y: '75%', delay: 0.4 }
  ];

  return (
    <section className="py-0 bg-black text-white">
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
          <Icon size={40} />
        </motion.div>
      ))}

      <div className="container mx-auto px-14 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 px-12 relative"
          >
            <motion.h1 
              className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent"
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
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed"
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

            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a 
  href="#projects" 
  className="group relative bg-purple-600 text-white px-8 py-4 rounded-full overflow-hidden z-10 pointer-events-auto"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>

                <span className="relative">View My Work</span>
              </motion.a>
              <motion.a  
  href="#contact" 
  className="group relative border-2 border-purple-600 text-purple-400 px-8 py-4 rounded-full overflow-hidden z-10 pointer-events-auto"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <span className="relative">Contact Me</span>
</motion.a>

            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1  relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative w-full aspect-square max-w-md mx-auto"
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
      

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
        <ArrowDown className="text-purple-500" size={32} />
      </motion.div>
      
{/* Wavy Animated Line Separator (More Prominent) */}
<div className="relative w-full h-32 -mt-0 -mb-0 overflow-hidden">
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
        duration: 1,  // Faster transition
        ease: "easeInOut",
        repeat: 1,
        repeatDelay: 0,
      }}
      fill="url(#waveGradient)"
      strokeWidth="6"  // Increased stroke width for prominence
      stroke="url(#waveGradient)"  // Applying the gradient to the stroke for a bolder look
      filter="url(#glow)"  // Adding a glow effect
      d="M0,160 C480,100 960,220 1440,160"
    />
  </svg>

  {/* Glow Effect Definition */}
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
