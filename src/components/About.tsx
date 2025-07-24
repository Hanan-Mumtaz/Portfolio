import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Server, Database, Award, GraduationCap } from "lucide-react";
import profileImage from "/assets/profile-D6iLI1Rc.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const cardDelay = (index: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay: 0.2 + index * 0.15, duration: 0.5 },
  viewport: { once: true, amount: 0.4 },
});

export default function About() {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2 {...fadeInUp} className="text-4xl font-bold text-center mb-12 text-purple-400">
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="md:col-span-4 relative">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] max-w-[300px] mx-auto shadow-lg">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
            </div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-0 md:-right-6 bg-purple-900 p-4 rounded-xl shadow-lg"
            >
              <p className="font-bold text-white">Full Stack Developer</p>
            </motion.div>
          </motion.div>

          <motion.div {...fadeInUp} className="md:col-span-8 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">Full-Stack Developer & Tech Enthusiast</h3>
              <p className="text-gray-300 leading-relaxed">
                I build scalable web and mobile applications with React, React Native, ASP.NET, and MongoDB. My focus is clean design and performant code.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {[
                  { icon: Code, title: "Frontend Development", desc: "React, Tailwind CSS, Responsive Design" },
                  { icon: Smartphone, title: "Mobile Development", desc: "React Native, Cross-Platform Apps" },
                  { icon: Server, title: "Backend Development", desc: "ASP.NET, REST APIs, Microservices" },
                  { icon: Database, title: "Database Management", desc: "MongoDB, SQL, Data Modeling" },
                ].map((item, i) => (
                  <motion.div key={i} {...cardDelay(i)} className="bg-purple-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
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
                      "Built 5+ scalable apps",
                      "Contributed to open-source",
                      "Delivered real-world projects",
                    ],
                  },
                  {
                    icon: GraduationCap,
                    title: "Education",
                    items: [
                      "BS Computer Science (in progress)",
                      "Certified in React, ASP.NET",
                      "Studying Machine Learning",
                    ],
                  },
                ].map((item, i) => (
                  <motion.div key={i} {...cardDelay(i + 4)} className="flex items-start gap-4">
                    <div className="p-3 bg-purple-700 rounded-lg">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">{item.title}</h5>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {item.items.map((text, j) => (
                          <li key={j}>• {text}</li>
                        ))}
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
