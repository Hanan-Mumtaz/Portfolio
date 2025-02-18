import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Layout, Server, Sparkles } from 'lucide-react';

const skills = [
  { 
    name: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'React-native', level: 90 },
      { name: 'HTML-CSS', level: 77 },
      { name: 'React', level: 70 }
    ]
  },
  {
    name: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'ASP .net', level: 90 },
      { name: 'PHP', level: 77 },
      { name: 'Python', level: 73 }
    ]
  },
  {
    name: 'Database',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'MySQL', level: 77 },
      { name: 'Firebase Firestore', level: 0 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black text-white">
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundImage: [
            'radial-gradient(circle at 20% 20%, #7e22ce 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, #a855f7 0%, transparent 50%)',
            'radial-gradient(circle at 20% 20%, #7e22ce 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-purple-400 shadow-lg"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-purple-500 transition duration-300"
            >
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
              >
                <div className="p-3 bg-purple-700 rounded-lg text-white shadow-md">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-purple-300">{category.name}</h3>
              </motion.div>

              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                        className="h-full rounded-full relative"
                        style={{
                          background: 'linear-gradient(90deg, #9333ea, #a855f7)'
                        }}
                      >
                        <motion.div
                          className="absolute inset-0"
                          animate={{
                            background: [
                              'linear-gradient(90deg, #9333ea, #a855f7)',
                              'linear-gradient(90deg, #a855f7, #9333ea)',
                              'linear-gradient(90deg, #9333ea, #a855f7)'
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                      </motion.div>
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
