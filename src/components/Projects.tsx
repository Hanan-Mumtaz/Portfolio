import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Github, ExternalLink } from 'lucide-react';

const projects = [
    {
      title: "Healthcove",
      description: "A website built with React.js, ASP.net and MongoDB.",
      image: "/Portfolio/assets/Healthcove.png",
      tags: ["React.js", "ASP.net", "MongoDB"],
      github: "https://github.com/Hanan-Mumtaz/Healthcove",
      demo: "https://demo.com",
      featured: false,
    },
    {
      title: "Teeze Store",
      description: "An application built with React-native, ASP.net and MongoDB",
      image: "/Portfolio/assets/teeze.png",
      tags: ["React-native", "ASP.net", "MongoDB"],
      github: "https://github.com/Hanan-Mumtaz/teeze",
      demo: "https://demo.com",
      featured: true,
    },
    {
      title: "Gym Management System",
      description: "A website built with HTML, CSS, JavaScript, PHP and MySQL.",
      image: "/Portfolio/assets/Gym.png",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/Hanan-Mumtaz/Gym_Manangement_System",
      demo: "https://demo.com",
      featured: false,
    },
    {
      title: "Gym Management System",
      description: "A website built with HTML, CSS, JavaScript, PHP and MySQL.",
      image: "/Portfolio/assets/Gym.png",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/Hanan-Mumtaz/Gym_Manangement_System",
      demo: "https://demo.com",
      featured: false,
    },
    {
      title: "Gym Management System",
      description: "A website built with HTML, CSS, JavaScript, PHP and MySQL.",
      image: "/Portfolio/assets/Gym.png",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/Hanan-Mumtaz/Gym_Manangement_System",
      demo: "https://demo.com",
      featured: false,
    }
    ,
    {
      title: "Gym Management System",
      description: "A website built with HTML, CSS, JavaScript, PHP and MySQL.",
      image: "/Portfolio/assets/Gym.png",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/Hanan-Mumtaz/Gym_Manangement_System",
      demo: "https://demo.com",
      featured: false,
    },
    {
      title: "Gym Management System",
      description: "A website built with HTML, CSS, JavaScript, PHP and MySQL.",
      image: "/Portfolio/assets/Gym.png",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/Hanan-Mumtaz/Gym_Manangement_System",
      demo: "https://demo.com",
      featured: false,
    },
    {
      title: "Gym Management System",
      description: "A website built with HTML, CSS, JavaScript, PHP and MySQL.",
      image: "/Portfolio/assets/Gym.png",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/Hanan-Mumtaz/Gym_Manangement_System",
      demo: "https://demo.com",
      featured: false,
    }
  ];


export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const nextSlide = () => {
    if (currentIndex + itemsPerPage < projects.length) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-14 text-purple-400"
        >
          Featured Projects
        </motion.h1>

        
        <div className="relative mx-auto max-w-7xl">
  <div className="overflow-hidden px-4">
    <motion.div 
      ref={containerRef}
      className="flex gap-6"
      animate={{ x: -currentIndex * (101.99 / itemsPerPage) + '%' }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="bg-gray-900 rounded-xl overflow-hidden h-full border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="relative overflow-hidden aspect-video">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {project.featured && (
                <div className="absolute top-4 right-4 bg-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              )}
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-full hover:bg-purple-500 transition"
                  >
                    <Github size={24} className="text-white" />
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-full hover:bg-purple-500 transition"
                  >
                    <ExternalLink size={24} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-purple-900/50 rounded-full text-purple-300 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>

  {/* Navigation Buttons */}
  <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex items-center justify-between w-[calc(100%+2rem)]">
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={prevSlide}
      className={`p-3 rounded-full bg-purple-600 text-white shadow-lg shadow-purple-500/20 transition-opacity ${
        currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-500'
      }`}
      disabled={currentIndex === 0}
    >
      <ArrowLeft size={24} />
    </motion.button>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={nextSlide}
      className={`p-3 rounded-full bg-purple-600 text-white shadow-lg shadow-purple-500/20 transition-opacity ${
        currentIndex + itemsPerPage >= projects.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-500'
      }`}
      disabled={currentIndex + itemsPerPage >= projects.length}
    >
      <ArrowRight size={24} />
    </motion.button>
  </div>
</div>


      </div>
    </div>
  );
}