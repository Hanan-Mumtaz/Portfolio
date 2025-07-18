import React, { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import he from '/assets/bg5.png';

export default function Header() {
  const menuItems = useMemo(() => ['About', 'Projects', 'Skills', 'Contact'], []);

  useEffect(() => {
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
  }, []);

  return (
 <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md text-white shadow-lg w-full overflow-hidden">
  {/* Subtle Smog inside header only */}
  <div
    className="absolute inset-0 h-full w-full bg-gradient-to-r from-white/20 via-white/10 to-transparent blur-xl opacity-30 pointer-events-none z-0 animate-moveSmog"
  />

      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <img src={he} alt="Logo" className="h-8 w-8" />
          <motion.span
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-xl font-bold bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent"
          >
            ectoris
          </motion.span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-6 lg:gap-8">
          {menuItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              whileHover={{ y: -2 }}
              className="text-gray-300 hover:text-purple-400 font-medium text-sm lg:text-base transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex gap-4">
          {[{
            href: 'https://github.com/Hanan-Mumtaz',
            icon: Github
          }, {
            href: 'https://linkedin.com/in/hanan-mumtaz',
            icon: Linkedin
          }, {
            href: 'mailto:hananmumtaz55@gmail.com',
            icon: Mail
          }].map(({ href, icon: Icon }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6" />
            </motion.a>
          ))}
        </div>
      </div>
    </header>
  );
}
