import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="flex items-center gap-4">
              <Mail className="text-purple-500 w-5 h-5" />
              <a href="mailto:hananmumtaz55@gmail.com" className="hover:text-purple-400 transition">
                hananmumtaz55@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-purple-500 w-5 h-5" />
              <a href="tel:+923556403625" className="hover:text-purple-400 transition">
                +92 355 6403625
              </a>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-purple-500 w-5 h-5" />
              <span>Mirpur, Azad Kashmir, PK</span>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()} // prevent reload
          >
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full px-4 py-2 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message..."
                className="w-full px-4 py-2 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
