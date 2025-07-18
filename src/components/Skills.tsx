import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database } from 'lucide-react';

const skills = [
  {
    name: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'React Native', level: 90 },
      { name: 'HTML & CSS', level: 77 },
      { name: 'React', level: 70 },
    ],
  },
  {
    name: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'ASP.NET', level: 90 },
      { name: 'PHP', level: 77 },
      { name: 'Python', level: 73 },
    ],
  },
  {
    name: 'Database',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'MySQL', level: 77 },
      { name: 'Firebase Firestore', level: 60 },
    ],
  },
];

export default function Skills() {
  const skillVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
      }),
    }),
    []
  );

  const motionProps = {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount: 0.3 },
    variants: skillVariants,
  };

  return (
    <section id="skills" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Soft Animated Background Glow */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        animate={{
          backgroundImage: [
            'radial-gradient(circle at 20% 30%, #9333ea 0%, transparent 60%)',
            'radial-gradient(circle at 80% 70%, #a855f7 0%, transparent 60%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Title */}
        <motion.h2
          {...motionProps}
          custom={0}
          className="text-4xl font-bold text-center mb-16 text-purple-400"
        >
          Skills & Expertise
        </motion.h2>

        {/* Skill Sections */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((category, i) => (
            <motion.div
              key={category.name}
              {...motionProps}
              custom={i}
              className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-purple-500 transition duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-700 rounded-lg shadow-md">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-purple-300">{category.name}</h3>
              </div>

              {/* Skill Bars */}
              <div className="space-y-5">
                {category.skills.map((skill, j) => (
                  <motion.div key={skill.name} {...motionProps} custom={i + j}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, #9333ea, #a855f7)',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
