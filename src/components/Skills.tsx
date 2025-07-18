import React from 'react';
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
  return (
    <section
      id="skills"
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      {/* Simple Glow - NO animation to reduce GPU load */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800 opacity-10 blur-xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-purple-400"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-purple-500 transition duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-700 rounded-lg shadow-md">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-purple-300">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          background: 'linear-gradient(90deg, #9333ea, #a855f7)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
