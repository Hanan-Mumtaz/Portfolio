import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, BarChart,NotebookPen , Server, Code, Smartphone as ChartBar, Atom, Award, GraduationCap, Smartphone } from 'lucide-react';
import profileImage from '/assets/profile-D6iLI1Rc.jpg'; // Adjust path accordingly

export default function About() {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-purple-400"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 relative"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] max-w-[300px] mx-auto shadow-lg">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover transform transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-6 -right-0 md:-right-6 bg-purple-900 p-4 rounded-xl shadow-lg"
            >
              <p className="font-bold text-white">Full Stack Developer</p>
            </motion.div>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="md:col-span-8 space-y-8"
>
  <div className="space-y-4">
    <h3 className="text-2xl font-bold mb-4 text-purple-400">Full-Stack Developer & Tech Enthusiast</h3>
    
    <p className="text-gray-300 leading-relaxed">
      As a Full-Stack Developer, I specialize in building modern, scalable, and user-friendly websites and mobile applications. 
      With expertise in React, React Native, Tailwind CSS, ASP.NET, and MongoDB, I create seamless digital experiences that 
      combine functionality with aesthetic design. My passion lies in solving complex problems and delivering high-quality solutions.
    </p>

    <div className="grid md:grid-cols-2 gap-6 mt-8">
      {[
        { icon: Code, title: "Frontend Development", desc: "React, Tailwind CSS, Responsive Design" },
        { icon: Smartphone, title: "Mobile Development", desc: "React Native, Cross-Platform Apps" },
        { icon: Server, title: "Backend Development", desc: "ASP.NET, REST APIs, Microservices" },
        { icon: Database, title: "Database Management", desc: "MongoDB, SQL, Data Modeling" }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + index * 0.1 }}
          className="bg-purple-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-700 rounded-lg">
              <item.icon className="text-white" size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>

  <div className="border-t border-gray-700 pt-8 mt-8">
    <h4 className="text-lg font-semibold mb-4 text-purple-400">Achievements & Education</h4>
    <div className="grid md:grid-cols-2 gap-6">
      {[
        { 
          icon: Award, 
          title: "Professional Achievements", 
          items: [
            "Built 5+ scalable web and mobile apps", 
            "Contributed to open-source projects", 
            "Delivered projects for My Own People"
          ] 
        },
        { 
          icon: GraduationCap, 
          title: "Education", 
          items: [
            "Pursuing B.S. in Computer Science", 
            "Certifications in React, ASP.NET, and MongoDB", 
            "Ongoing learning in Machine Learning"
          ] 
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 + index * 0.1 }}
          className="flex items-start gap-4"
        >
          <div className="p-3 bg-purple-700 rounded-lg">
            <item.icon className="text-white" size={24} />
          </div>
          <div>
            <h5 className="font-semibold text-white mb-1">{item.title}</h5>
            <ul className="text-gray-300 text-sm space-y-1">
              {item.items.map((point, idx) => <li key={idx}>• {point}</li>)}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>
        </div>
      </div>
     
    </section>
  );
}
