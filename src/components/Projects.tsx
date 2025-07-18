// Projects.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from 'swiper/modules';
import { Github, ExternalLink } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Example project list
const projects = [
  {
    title: "Healthcove",
    description: "A website built with React.js, ASP.net and MongoDB.",
    image: "/Portfolio/assets/Healthcove.png",
    tags: ["React.js", "ASP.net", "MongoDB"],
    github: "https://github.com/Hanan-Mumtaz/Healthcove",
    demo: "http://healthcove.duckdns.org",
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
];

// ✅ Optimized, memoized card (separate to avoid recreation on render)
const ProjectCard = React.memo(function ProjectCard({ project }) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden h-full border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image || "/fallback.jpg"}
          alt={project.title || "Project Image"}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
        {project.featured && (
          <div className="absolute top-4 right-4 bg-purple-600 px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-purple-500 transition"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github size={24} className="text-white" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-purple-500 transition"
                aria-label={`View ${project.title} demo`}
              >
                <ExternalLink size={24} className="text-white" />
              </a>
            )}
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
          {project.tags.map((tag) => (
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
  );
});

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 640);
  }, []);

  useEffect(() => {
    const debouncedResize = debounce(handleResize, 100);
    handleResize(); // Initial run
    window.addEventListener('resize', debouncedResize);
    return () => window.removeEventListener('resize', debouncedResize);
  }, [handleResize]);

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

        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          navigation={!isMobile}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          mousewheel={{ forceToAxis: true }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          modules={[Navigation, Pagination, Autoplay, Mousewheel, Keyboard]}
          className="!px-4 !pb-12"
          preloadImages={false}
          watchSlidesProgress={true}
          resistanceRatio={0.7}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={`${project.title}-${index}`}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

// ✅ Debounce function (wrapped for stable reference)
function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
