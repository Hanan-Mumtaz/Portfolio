import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Sparkles, Zap } from 'lucide-react';
import profileImage from '/assets/profile-D6iLI1Rc.jpg';

const defaultSpring = {
  type: 'spring',
  stiffness: 120,
  damping: 14,
};

export default function Hero() {
  const floatingIcons = useMemo(
    () => [
      { Icon: Code, x: '10%', y: '20%', delay: 0 },
      { Icon: Sparkles, x: '85%', y: '15%', delay: 0.2 },
      { Icon: Zap, x: '75%', y: '75%', delay: 0.4 },
    ],
    []
  );

  return (
    <section className="relative py-0 bg-black text-white overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute text-purple-500/20 pointer-events-none"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay, duration: 1, ease: 'easeOut' }}
        >
          <Icon className="w-8 h-8 md:w-10 md:h-10" />
        </motion.div>
      ))}


      <div className="container mx-auto px-4 md:px-14 py-36 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            className="flex-1 px-4 md:px-12 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Hi, I'm{' '}
              <motion.span
                className="tracking-wide inline-block font-bold mb-6 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
              >
                Hanan Mumtaz
              </motion.span>
            </h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              A passionate full-stack developer crafting{' '}
              <span className="text-purple-400 font-semibold">beautiful</span> and{' '}
              <span className="text-purple-600 font-semibold">functional</span>{' '}
              web experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="#projects"
                className="bg-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base hover:scale-105 transition-transform duration-200"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-purple-600 text-purple-400 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base hover:scale-105 transition-transform duration-200"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden md:block flex-1"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative w-full aspect-square max-w-xs md:max-w-md mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={defaultSpring}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl -rotate-6"
                animate={{ rotate: ['-7deg', '7deg', '-7deg'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-700 to-purple-500 rounded-3xl rotate-6 opacity-50"
                animate={{ rotate: ['7deg', '-7deg', '7deg'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={profileImage}
                  alt="Hanan Mumtaz"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <ArrowDown className="text-purple-500 w-6 h-6 md:w-8 md:h-8" />
      </motion.div>

      <div className="absolute top-0 left-0 right-0 w-full h-20 md:h-28 overflow-hidden">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
          <motion.path
            fill="url(#headerGradient)"
            d="M0,160 C480,100 960,220 1440,160"
            animate={{
              d: [
                'M0,160 C480,100 960,220 1440,160',
                'M0,160 C480,130 960,180 1440,160',
                'M0,160 C480,100 960,220 1440,160',
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    </section>
  );
}
