import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Healthcove',
    description: 'A website built with React.js, ASP.net and MongoDB.',
    image: '/Portfolio/assets/Healthcove.png',
    tags: ['React.js', 'ASP.net', 'MongoDB'],
    github: 'https://github.com/Hanan-Mumtaz/Healthcove',
    demo: 'https://demo.com',
    featured: false
  },
  {
    title: 'Teeze Store',
    description: 'An application built with React-native, ASP.net and MongoDB',
    image: '/Portfolio/assets/teeze.png',
    tags: ['React-native', 'ASP.net', 'MongoDB'],
    github: 'https://github.com/Hanan-Mumtaz/teeze',
    demo: 'https://demo.com',
    featured: true
  },
  {
    title: 'Gym Management System',
    description: 'A website built with HTML, CSS, JavaScript, PHP and MySQL.',
    image: '/Portfolio/assets/Gym.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/Hanan-Mumtaz/Gym_Manangement_System',
    demo: 'https://demo.com',
    featured: false
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProjects = 3;

  const nextProject = () => {
    if (currentIndex + visibleProjects < projects.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Prevent horizontal scrolling
  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.documentElement.style.width = "100%";
  }, []);

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 relative  overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-purple-400"
        >
          Featured Projects
        </motion.h2>
        <div className="relative mx-auto w-[90%] overflow-visible">
          {/* Left Navigation Button */}
          {currentIndex > 0 && (
            <button
              onClick={prevProject}
              className="absolute left-[-40px] md:left-[-55px] top-1/2 transform -translate-y-1/2 bg-purple-700 text-white p-3 rounded-full shadow-md hover:bg-purple-500 transition z-10"
            >
              <ArrowLeft size={25} />
            </button>
          )}

          {/* Right Navigation Button */}
          {currentIndex < projects.length - visibleProjects && (
            <button
              onClick={nextProject}
              className="absolute right-[-40px] md:right-[-55px] top-1/2 transform -translate-y-1/2 bg-purple-700 text-white p-3 rounded-full shadow-md hover:bg-purple-500 transition z-10"
            >
              <ArrowRight size={25} />
            </button>
          )}

          {/* Smooth Sliding Container */}
          <div className="relative w-full flex items-center justify-center overflow-hidden">
            <motion.div
              className="flex gap-8 md:gap-10"
              animate={{ x: -currentIndex * 444 }}
              transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
              style={{ width: `${projects.length * 444}px` }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="group relative bg-gray-900 rounded-xl shadow-xl overflow-hidden w-[280px] sm:w-[350px] md:w-[413px] h-[400px] md:h-[450px] flex-shrink-0"
                  whileHover={{ y: -5 }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    >
                      <div className="absolute inset-0 flex items-center justify-center gap-6">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-purple-400 transform"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={28} />
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-purple-400 transform"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={28} />
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1 bg-purple-700 text-white rounded-full text-sm shadow-md"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}