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
      { name: 'React', level: 70 }
    ]
  },
  {
    name: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'ASP.NET', level: 90 },
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
      { name: 'Firebase Firestore', level: 60 }
    ]
  }
];

export default function Skills() {
  // UseMemo inside the component to prevent rendering issues
  const skillVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.15, duration: 0.5, ease: 'easeOut' }
    })
  }), []);

  return (
    <section id="skills" className="py-20 bg-black text-white">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        animate={{ backgroundImage: [
          'radial-gradient(circle at 20% 20%, #7e22ce 0%, transparent 50%)',
          'radial-gradient(circle at 80% 80%, #a855f7 0%, transparent 50%)'
        ] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-purple-400 shadow-lg"
        >
          Skills & Expertise
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={categoryIndex}
              variants={skillVariants}
              className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-purple-500 transition duration-300"
            >
              {/* Skill Category */}
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={categoryIndex}
                variants={skillVariants}
              >
                <div className="p-3 bg-purple-700 rounded-lg text-white shadow-md">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-purple-300">{category.name}</h3>
              </motion.div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={categoryIndex + index}
                    variants={skillVariants}
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
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, #9333ea, #a855f7)'
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
