import React, { useState } from 'react'
import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/50 to-indigo-100/80 dark:from-slate-950 dark:to-slate-900"></div>
      
      {/* Blur effect */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl dark:hidden animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl dark:hidden animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={item}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid lg:grid-cols-2 gap-12 items-start"
        >

          {/* LEFT - Contact Info */}
          <div className="space-y-6">

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact Information
            </h3>

            {/* EMAIL */}
            <motion.a variants={item}
              href="mailto:parindyahewage7@gmail.com"
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
              className="flex items-center gap-4 p-5 bg-white/40 dark:bg-slate-800 backdrop-blur-md rounded-xl border border-white/60 dark:border-slate-700 hover:border-blue-400/50 dark:hover:border-blue-400 hover:shadow-lg transition duration-300"
            >
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-lg">
                <Mail size={22} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  parindyahewage7@gmail.com
                </p>
              </div>
            </motion.a>

            {/* PHONE */}
            <motion.a variants={item}
              href="tel:+94717474417"
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.2)' }}
              className="flex items-center gap-4 p-5 bg-white/40 dark:bg-slate-800 backdrop-blur-md rounded-xl border border-white/60 dark:border-slate-700 hover:border-green-400/50 dark:hover:border-green-400 hover:shadow-lg transition duration-300"
            >
              <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg shadow-lg">
                <Phone size={22} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  +94 71 747 4417
                </p>
              </div>
            </motion.a>

            {/* LOCATION */}
            <motion.div variants={item}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(147, 51, 234, 0.2)' }}
              className="flex items-center gap-4 p-5 bg-white/40 dark:bg-slate-800 backdrop-blur-md rounded-xl border border-white/60 dark:border-slate-700 hover:border-purple-400/50 dark:hover:border-purple-400 hover:shadow-lg transition duration-300"
            >
              <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg shadow-lg">
                <MapPin size={22} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Matugama, Kalutara
                </p>
              </div>
            </motion.div>

            {/* SOCIAL */}
            <motion.div variants={item} className="p-5 bg-white/40 dark:bg-slate-800 backdrop-blur-md rounded-xl border border-white/60 dark:border-slate-700">
              <p className="font-semibold text-gray-900 dark:text-white mb-3">
                Connect with Me
              </p>

              <div className="flex gap-4">
                <motion.a href="https://github.com/Parigit7" target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg hover:shadow-lg transition shadow-md">
                  <Github size={20} />
                </motion.a>

                <motion.a href="https://linkedin.com/in/parindya-hewage" target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition shadow-md">
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT - NETLIFY FORM */}
          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleChange}
            variants={item}
            className="bg-white/40 dark:bg-slate-800 backdrop-blur-md p-8 rounded-2xl border border-white/60 dark:border-slate-700 shadow-lg hover:shadow-xl transition duration-300"
          >
            {/* Hidden field for Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Send Message
            </h3>

            <div className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-white/60 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-white/60 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              />

              <textarea
                name="message"
                placeholder="Your message..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-white/60 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                Send Message
              </motion.button>

            </div>
          </motion.form>

        </motion.div>
      </div>
    </section>
  )
}
              className="p-5 bg-white rounded-xl shadow"
            >
              <Phone /> +94 71 747 4417
            </motion.a>

            <motion.div variants={item}
              className="p-5 bg-white rounded-xl shadow"
            >
              <MapPin /> Matugama, Kalutara
            </motion.div>

          </div>

          {/* RIGHT FORM */}
          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            variants={item}
            className="bg-white p-8 rounded-xl shadow"
          >

            {/* IMPORTANT hidden input */}
            <input type="hidden" name="form-name" value="contact" />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full mb-4 p-3 border rounded"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full mb-4 p-3 border rounded"
              required
            />

            <textarea
              name="message"
              placeholder="Your message..."
              rows="5"
              className="w-full mb-4 p-3 border rounded"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded"
            >
              Send Message
            </button>

          </motion.form>

        </motion.div>
      </div>
    </section>
  )
}